"use strict";

const fs = require("fs");
const path = require("path");
let Database;
try {
  Database = require("better-sqlite3");
} catch (e) {
  // better-sqlite3 native addon unavailable in serverless environment
}
const session = require("express-session");
const { seedQuestions } = require("./seed-questions");

class SqliteSessionStore extends session.Store {
  constructor(db) {
    super();
    this.db = db;
    this.memorySessions = new Map();

    if (this.db && typeof this.db.prepare === "function") {
      try {
        this.getStmt = this.db.prepare("SELECT sess, expire FROM user_sessions WHERE sid = ?");
        this.setStmt = this.db.prepare("INSERT INTO user_sessions (sid, sess, expire) VALUES (?, ?, ?) ON CONFLICT(sid) DO UPDATE SET sess = excluded.sess, expire = excluded.expire");
        this.destroyStmt = this.db.prepare("DELETE FROM user_sessions WHERE sid = ?");
        this.clearExpiredStmt = this.db.prepare("DELETE FROM user_sessions WHERE expire < ?");

        setInterval(() => {
          try {
            this.clearExpiredStmt.run(Date.now());
          } catch (err) {
            // ignore background cleanup errors
          }
        }, 15 * 60 * 1000).unref();
      } catch (err) {
        this.getStmt = null;
      }
    }
  }

  get(sid, cb) {
    if (this.getStmt) {
      try {
        const row = this.getStmt.get(sid);
        if (!row) return cb(null, null);
        if (Date.now() > row.expire) {
          this.destroyStmt.run(sid);
          return cb(null, null);
        }
        const data = JSON.parse(row.sess);
        return cb(null, data);
      } catch (err) {
        return cb(err);
      }
    }
    const sess = this.memorySessions.get(sid);
    return cb(null, sess ? JSON.parse(sess) : null);
  }

  set(sid, sess, cb) {
    const maxAge = sess.cookie && typeof sess.cookie.maxAge === "number" ? sess.cookie.maxAge : 24 * 60 * 60 * 1000;
    const expire = Date.now() + maxAge;
    if (this.setStmt) {
      try {
        this.setStmt.run(sid, JSON.stringify(sess), expire);
        return cb && cb(null);
      } catch (err) {
        return cb && cb(err);
      }
    }
    this.memorySessions.set(sid, JSON.stringify(sess));
    return cb && cb(null);
  }

  destroy(sid, cb) {
    if (this.destroyStmt) {
      try {
        this.destroyStmt.run(sid);
        return cb && cb(null);
      } catch (err) {
        return cb && cb(err);
      }
    }
    this.memorySessions.delete(sid);
    return cb && cb(null);
  }
}

function initSqliteDatabase(dbPath) {
  if (!Database) return null;
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const db = new Database(dbPath);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");

  // Create tables
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject_slug TEXT NOT NULL,
      topic_slug TEXT NOT NULL,
      question_text TEXT NOT NULL,
      options TEXT NOT NULL,
      correct_option INTEGER NOT NULL,
      explanation TEXT DEFAULT '',
      difficulty TEXT DEFAULT 'easy',
      gate_year TEXT DEFAULT 'GATE CSE',
      marks INTEGER DEFAULT 2,
      type TEXT DEFAULT 'MCQ',
      answer_key TEXT DEFAULT '',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE (subject_slug, topic_slug, question_text)
    );

    CREATE INDEX IF NOT EXISTS questions_subject_topic_idx
      ON questions (subject_slug, topic_slug, id);

    CREATE TABLE IF NOT EXISTS quiz_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
      subject_slug TEXT NOT NULL,
      topic_slug TEXT NOT NULL,
      score INTEGER NOT NULL,
      total_questions INTEGER NOT NULL,
      accuracy REAL NOT NULL,
      attempted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS quiz_results_user_attempted_idx
      ON quiz_results (user_id, attempted_at DESC);

    CREATE TABLE IF NOT EXISTS user_sessions (
      sid TEXT PRIMARY KEY,
      sess TEXT NOT NULL,
      expire INTEGER NOT NULL
    );

    CREATE INDEX IF NOT EXISTS user_sessions_expire_idx
      ON user_sessions (expire);
  `);

  // Safe migrations for legacy databases
  try { db.exec("ALTER TABLE questions ADD COLUMN type TEXT DEFAULT 'MCQ'"); } catch (e) {}
  try { db.exec("ALTER TABLE questions ADD COLUMN answer_key TEXT DEFAULT ''"); } catch (e) {}
  try { db.exec("ALTER TABLE questions ADD COLUMN gate_year TEXT DEFAULT 'GATE CSE'"); } catch (e) {}
  try { db.exec("ALTER TABLE questions ADD COLUMN marks INTEGER DEFAULT 2"); } catch (e) {}

  // Seed question bank if needed
  const countRow = db.prepare("SELECT COUNT(*) AS count FROM questions").get();
  if (countRow.count === 0) {
    const insertQuestion = db.prepare(`
      INSERT OR IGNORE INTO questions
      (subject_slug, topic_slug, question_text, options, correct_option, explanation, difficulty)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    const insertMany = db.transaction((questions) => {
      for (const q of questions) {
        insertQuestion.run(
          q.subject_slug,
          q.topic_slug,
          q.question_text,
          JSON.stringify(q.options),
          q.correct_option,
          q.explanation || "",
          q.difficulty || "easy"
        );
      }
    });

    insertMany(seedQuestions);
  }

  return db;
}

function createInMemoryPool() {
  const users = [];
  const contactMessages = [];
  const quizResults = [];
  const customQuestions = [...seedQuestions.map((q, idx) => ({ id: idx + 1, ...q }))];
  let nextUserId = 1;
  let nextMessageId = 1;
  let nextQuizId = 1;
  let nextQuestionId = customQuestions.length + 1;

  return {
    isSqlite: true,
    isInMemory: true,
    async query(sql, values = []) {
      const normalizedSql = sql.replace(/\s+/g, " ").trim();

      if (normalizedSql.startsWith("SELECT 1")) {
        return { rows: [{ "?column?": 1 }] };
      }

      // 1. User Signup
      if (/INSERT INTO users/i.test(normalizedSql)) {
        const [name, email, password] = values;
        if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
          const err = new Error("UNIQUE constraint failed: users.email");
          err.code = "23505";
          throw err;
        }
        const user = { id: nextUserId++, name, email, password, created_at: new Date().toISOString() };
        users.push(user);
        return { rows: [] };
      }

      // 2. User Login
      if (/SELECT .* FROM users WHERE email =/i.test(normalizedSql)) {
        const email = values[0];
        const user = users.find((u) => u.email.toLowerCase() === (email || "").toLowerCase());
        return { rows: user ? [{ id: user.id, name: user.name, password: user.password }] : [] };
      }

      // 3. User by ID
      if (/SELECT .* FROM users WHERE id =/i.test(normalizedSql)) {
        const id = values[0];
        const user = users.find((u) => u.id === Number(id));
        return { rows: user ? [{ id: user.id, name: user.name }] : [] };
      }

      // 4. Contact messages
      if (/INSERT INTO contact_messages/i.test(normalizedSql)) {
        const [name, email, message] = values;
        contactMessages.push({ id: nextMessageId++, name, email, message, created_at: new Date().toISOString() });
        return { rows: [] };
      }

      // 5. Questions query
      if (/SELECT .* FROM questions/i.test(normalizedSql)) {
        let list = customQuestions;
        if (values.length >= 2) {
          const [subject, topic] = values;
          list = list.filter((q) => q.subject_slug === subject && q.topic_slug === topic);
        } else if (values.length === 1) {
          const [subject] = values;
          list = list.filter((q) => q.subject_slug === subject);
        }
        return { rows: list.map((q) => ({ ...q, options: Array.isArray(q.options) ? q.options : JSON.parse(q.options || "[]") })) };
      }

      // 6. Insert question
      if (/INSERT INTO questions/i.test(normalizedSql)) {
        const [subject_slug, topic_slug, question_text, options, correct_option, explanation, difficulty] = values;
        customQuestions.push({
          id: nextQuestionId++,
          subject_slug,
          topic_slug,
          question_text,
          options: typeof options === "string" ? JSON.parse(options) : options,
          correct_option,
          explanation: explanation || "",
          difficulty: difficulty || "easy",
          gate_year: "GATE CSE",
          marks: 2,
          type: "MCQ",
          answer_key: ""
        });
        return { rows: [] };
      }

      // 7. Quiz results
      if (/INSERT INTO quiz_results/i.test(normalizedSql)) {
        const [user_id, subject_slug, topic_slug, score, total_questions, accuracy] = values;
        quizResults.push({
          id: nextQuizId++,
          user_id: Number(user_id),
          subject_slug,
          topic_slug,
          score: Number(score),
          total_questions: Number(total_questions),
          accuracy: Number(accuracy),
          attempted_at: new Date().toISOString()
        });
        return { rows: [] };
      }

      if (/SELECT .* FROM quiz_results/i.test(normalizedSql)) {
        const userId = Number(values[0]);
        const rows = quizResults
          .filter((r) => r.user_id === userId)
          .sort((a, b) => new Date(b.attempted_at) - new Date(a.attempted_at))
          .slice(0, 10);
        return { rows };
      }

      return { rows: [] };
    },
    on() {},
    close() {}
  };
}

function createSqlitePool(dbPath = path.join(__dirname, "gateprep.sqlite")) {
  if (!Database) {
    return createInMemoryPool();
  }

  try {
    const db = initSqliteDatabase(dbPath);
    if (!db) return createInMemoryPool();

    const pool = {
      db,
      isSqlite: true,
      async query(sql, values = []) {
        const normalizedSql = sql.replace(/\s+/g, " ").trim();

        if (normalizedSql.startsWith("SELECT 1")) {
          return { rows: [{ "?column?": 1 }] };
        }

        // Convert PostgreSQL $1, $2 style to SQLite ?
        const sqliteSql = normalizedSql.replace(/\$\d+/g, "?");
        const isSelect = /^\s*SELECT/i.test(sqliteSql);

        try {
          if (isSelect) {
            const rows = db.prepare(sqliteSql).all(...values);
            for (const row of rows) {
              if (row.options && typeof row.options === "string") {
                try {
                  row.options = JSON.parse(row.options);
                } catch (_) {}
              }
            }
            return { rows };
          } else {
            db.prepare(sqliteSql).run(...values);
            return { rows: [] };
          }
        } catch (err) {
          if (err.message && (err.message.includes("UNIQUE constraint failed") || err.code === "SQLITE_CONSTRAINT_UNIQUE")) {
            err.code = "23505"; // Match PostgreSQL unique violation code for user signup checks
          }
          throw err;
        }
      },
      on() {},
      close() {
        try { db.close(); } catch (_) {}
      }
    };

    return pool;
  } catch (err) {
    return createInMemoryPool();
  }
}

module.exports = {
  createSqlitePool,
  SqliteSessionStore,
  initSqliteDatabase
};
