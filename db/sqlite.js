"use strict";

const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");
const session = require("express-session");
const { seedQuestions } = require("./seed-questions");

class SqliteSessionStore extends session.Store {
  constructor(db) {
    super();
    this.db = db;
    this.getStmt = this.db.prepare("SELECT sess, expire FROM user_sessions WHERE sid = ?");
    this.setStmt = this.db.prepare("INSERT INTO user_sessions (sid, sess, expire) VALUES (?, ?, ?) ON CONFLICT(sid) DO UPDATE SET sess = excluded.sess, expire = excluded.expire");
    this.destroyStmt = this.db.prepare("DELETE FROM user_sessions WHERE sid = ?");
    this.clearExpiredStmt = this.db.prepare("DELETE FROM user_sessions WHERE expire < ?");

    // Periodic cleanup of expired sessions
    setInterval(() => {
      try {
        this.clearExpiredStmt.run(Date.now());
      } catch (err) {
        // ignore background cleanup errors
      }
    }, 15 * 60 * 1000).unref();
  }

  get(sid, cb) {
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

  set(sid, sess, cb) {
    try {
      const maxAge = sess.cookie && typeof sess.cookie.maxAge === "number" ? sess.cookie.maxAge : 24 * 60 * 60 * 1000;
      const expire = Date.now() + maxAge;
      this.setStmt.run(sid, JSON.stringify(sess), expire);
      return cb && cb(null);
    } catch (err) {
      return cb && cb(err);
    }
  }

  destroy(sid, cb) {
    try {
      this.destroyStmt.run(sid);
      return cb && cb(null);
    } catch (err) {
      return cb && cb(err);
    }
  }
}

function initSqliteDatabase(dbPath) {
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

function createSqlitePool(dbPath = path.join(__dirname, "gateprep.sqlite")) {
  const db = initSqliteDatabase(dbPath);

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
      db.close();
    }
  };

  return pool;
}

module.exports = {
  createSqlitePool,
  SqliteSessionStore,
  initSqliteDatabase
};
