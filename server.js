const path = require('path');
const crypto = require('crypto');

const express = require('express');
const { Pool } = require('pg');
let bcrypt;
try {
  bcrypt = require('bcrypt');
} catch (_) {
  // Native bcrypt unavailable (serverless); use crypto-based fallback
  bcrypt = {
    async hash(password, rounds) {
      const salt = crypto.randomBytes(16).toString('hex');
      const hash = crypto.scryptSync(password, salt, 64).toString('hex');
      return `scrypt:${salt}:${hash}`;
    },
    async compare(password, stored) {
      if (stored.startsWith('scrypt:')) {
        const [, salt, hash] = stored.split(':');
        const derived = crypto.scryptSync(password, salt, 64).toString('hex');
        return derived === hash;
      }
      return false;
    }
  };
}
const session = require('express-session');
const connectPgSimple = require('connect-pg-simple');
const { createSqlitePool, SqliteSessionStore } = require('./db/sqlite');
const { generateGatePyq, solveGateDoubt } = require('./services/nvidia-ai');
const { getCatalogStats, generateMockTest, submitMockTest } = require('./services/pyq-service');

require('dotenv').config();

const PgSession = connectPgSimple(session);

function createPool(env = process.env) {
  // Use SQLite when configured or when no PostgreSQL configuration exists
  if (
    env.DB_CLIENT === 'sqlite' ||
    (env.DATABASE_URL && env.DATABASE_URL.startsWith('sqlite')) ||
    (!env.DATABASE_URL && !env.DB_HOST && !env.DB_USER) ||
    process.env.VERCEL
  ) {
    let rawPath;
    if (process.env.VERCEL) {
      rawPath = '/tmp/gateprep.sqlite';
    } else {
      rawPath = env.DATABASE_URL
        ? env.DATABASE_URL.replace(/^sqlite:\/?\/?/, '')
        : path.join('db', 'gateprep.sqlite');
    }
    return createSqlitePool(path.resolve(process.cwd(), rawPath));
  }

  if (env.DATABASE_URL) {
    return new Pool({
      connectionString: env.DATABASE_URL,
      ...(env.DATABASE_SSL === 'true' ? { ssl: { rejectUnauthorized: true } } : {})
    });
  }

  return new Pool({
    host: env.DB_HOST || 'localhost',
    port: Number(env.DB_PORT || 5432),
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    ...(env.DATABASE_SSL === 'true' ? { ssl: { rejectUnauthorized: true } } : {})
  });
}

function createApp({
  pool,
  sessionStore,
  sessionSecret = process.env.SESSION_SECRET || '3EK8_6gvY4QlkwAbt70VKe1zQ1BXxewaiZNuCa4G5rhce5xmjN-5Qnn7lPWdpe_m',
  production = process.env.NODE_ENV === 'production'
} = {}) {
  if (!pool || typeof pool.query !== 'function') {
    throw new Error('A PostgreSQL pool is required to create the GATEPrep app.');
  }
  if (typeof sessionSecret !== 'string' || sessionSecret.length < 32) {
    throw new Error('SESSION_SECRET must contain at least 32 characters.');
  }

  const app = express();
  if (production) {
    app.set('trust proxy', 1);
  }
  app.disable('x-powered-by');
  app.use(express.json({ limit: '50kb' }));
  app.use(session({
    name: 'gateprep.sid',
    store: sessionStore,
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: production,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000
    }
  }));

  // Signup Route
  app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body || {};

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof password !== 'string'
    ) {
      return res.status(400).json({
        message: 'Name, email aur password zaroori hain'
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cleanName || cleanName.length > 120 || cleanEmail.length > 320 || !emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        message: 'Please enter a valid name and email address'
      });
    }

    if (password.length < 8 || Buffer.byteLength(password, 'utf8') > 72) {
      return res.status(400).json({
        message: 'Password must be at least 8 characters and no more than 72 UTF-8 bytes'
      });
    }

    try {
      const hashed = await bcrypt.hash(password, 10);

      await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
        [cleanName, cleanEmail, hashed]
      );

      res.json({ message: 'Signup successful!' });
    } catch (err) {
      console.error(err);

      if (
        err.code === '23505' ||
        err.code === 'SQLITE_CONSTRAINT_UNIQUE' ||
        (err.message && err.message.includes('UNIQUE constraint failed'))
      ) {
        return res.status(400).json({
          message: 'Ye email pehle se registered hai'
        });
      }

      res.status(500).json({
        message: 'Signup mein error aaya'
      });
    }
  });

  // Login Route
  app.post('/login', async (req, res) => {
    const { email, password } = req.body || {};

    if (typeof email !== 'string' || typeof password !== 'string' || !email.trim() || !password) {
      return res.status(400).json({
        message: 'Email aur password dono daalo'
      });
    }

    try {
      const cleanEmail = email.trim().toLowerCase();

      const result = await pool.query(
        'SELECT id, name, password FROM users WHERE email = $1',
        [cleanEmail]
      );

      if (result.rows.length === 0) {
        return res.status(400).json({
          message: 'User nahi mila'
        });
      }

      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(400).json({
          message: 'Password galat hai'
        });
      }

      await new Promise((resolve, reject) => {
        req.session.regenerate(error => error ? reject(error) : resolve());
      });
      req.session.userId = user.id;

      res.json({
        message: `Welcome ${user.name}!`,
        redirect: '/dashboard'
      });
    } catch (err) {
      console.error(err);

      res.status(500).json({
        message: 'Kuch error aaya'
      });
    }
  });

  // Contact Form API
  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body || {};

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string'
    ) {
      return res.status(400).json({
        message: 'Name, email aur message bharna zaroori hai'
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !cleanName ||
      cleanName.length > 120 ||
      cleanEmail.length > 320 ||
      !cleanMessage ||
      cleanMessage.length > 10000 ||
      !emailRegex.test(cleanEmail)
    ) {
      return res.status(400).json({
        message: 'Enter a valid name, email address, and message'
      });
    }

    try {
      await pool.query(
        `INSERT INTO contact_messages (name, email, message)
         VALUES ($1, $2, $3)`,
        [cleanName, cleanEmail, cleanMessage]
      );

      res.json({
        message: 'Your message has been saved successfully!'
      });
    } catch (err) {
      console.error('Contact form error:', err);

      res.status(500).json({
        message: 'Message save nahi hua. Dobara try karo.'
      });
    }
  });

  // Questions API: topic-wise questions fetch
  app.get('/api/questions', async (req, res) => {
    const { subject, topic } = req.query;

    if (
      typeof subject !== 'string' ||
      typeof topic !== 'string' ||
      !subject ||
      !topic
    ) {
      return res.status(400).json({
        message: 'Subject aur topic dono select karo'
      });
    }

    try {
      let result = await pool.query(
        `SELECT id, subject_slug, topic_slug,
                question_text, options,
                correct_option, explanation, difficulty,
                gate_year, marks, type, answer_key
         FROM questions
         WHERE subject_slug = $1
           AND topic_slug = $2
         ORDER BY id`,
        [subject, topic]
      );

      // If fewer than 10 questions for this specific subtopic, supplement with authentic subject questions
      if (result.rows.length < 10) {
        const existingIds = result.rows.map(r => r.id);
        const placeholders = existingIds.map((_, i) => `$${i + 2}`).join(',');
        const supplementQuery = existingIds.length > 0
          ? `SELECT id, subject_slug, topic_slug, question_text, options, correct_option, explanation, difficulty, gate_year, marks, type, answer_key
             FROM questions
             WHERE subject_slug = $1 AND id NOT IN (${placeholders})
             ORDER BY id LIMIT ${20 - existingIds.length}`
          : `SELECT id, subject_slug, topic_slug, question_text, options, correct_option, explanation, difficulty, gate_year, marks, type, answer_key
             FROM questions
             WHERE subject_slug = $1
             ORDER BY id LIMIT 25`;
        const supplementParams = existingIds.length > 0 ? [subject, ...existingIds] : [subject];
        const supplement = await pool.query(supplementQuery, supplementParams);
        result.rows = result.rows.concat(supplement.rows);
      }

      res.json(result.rows);
    } catch (err) {
      console.error('Questions fetch error:', err);
      res.status(500).json({
        message: 'Questions load nahi ho paaye'
      });
    }
  });

  app.get('/api/session', async (req, res) => {
    if (!req.session.userId) {
      return res.json({ authenticated: false });
    }

    try {
      const result = await pool.query(
        'SELECT id, name FROM users WHERE id = $1',
        [req.session.userId]
      );
      if (result.rows.length === 0) {
        return res.json({ authenticated: false });
      }

      res.json({
        authenticated: true,
        user: { id: result.rows[0].id, name: result.rows[0].name }
      });
    } catch (err) {
      console.error('Session lookup error:', err);
      res.status(500).json({ message: 'Could not load the current account' });
    }
  });

  app.post('/logout', (req, res, next) => {
    req.session.destroy(error => {
      if (error) {
        return next(error);
      }
      res.clearCookie('gateprep.sid', {
        httpOnly: true,
        secure: production,
        sameSite: 'lax',
        path: '/'
      });
      res.json({ message: 'Logged out successfully' });
    });
  });

  app.get('/api/health', async (req, res) => {
    try {
      await pool.query('SELECT 1');
      res.json({ status: 'ok' });
    } catch (err) {
      console.error('Health check database error:', err);
      res.status(503).json({ status: 'unavailable' });
    }
  });

  app.post('/api/quiz-results', async (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({
        message: 'Pehle login karo'
      });
    }

    const { subject, topic, score, totalQuestions } = req.body || {};

    if (
      typeof subject !== 'string' ||
      !subject ||
      subject.length > 100 ||
      typeof topic !== 'string' ||
      !topic ||
      topic.length > 120 ||
      !Number.isInteger(score) ||
      !Number.isInteger(totalQuestions) ||
      totalQuestions <= 0 ||
      score < 0 ||
      score > totalQuestions
    ) {
      return res.status(400).json({
        message: 'Quiz result ki details sahi nahi hain'
      });
    }

    const accuracy = (score / totalQuestions) * 100;

    try {
      await pool.query(
        `INSERT INTO quiz_results
         (user_id, subject_slug, topic_slug, score, total_questions, accuracy)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [userId, subject, topic, score, totalQuestions, accuracy]
      );

      res.json({ message: 'Quiz score successfully saved!' });
    } catch (err) {
      console.error('Quiz result save error:', err);

      res.status(500).json({
        message: 'Quiz score save nahi ho paya'
      });
    }
  });

  app.get('/api/quiz-results', async (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({
        message: 'Pehle login karo'
      });
    }

    try {
      const result = await pool.query(
        `SELECT id, subject_slug, topic_slug,
                score, total_questions, accuracy, attempted_at
         FROM quiz_results
         WHERE user_id = $1
         ORDER BY attempted_at DESC`,
        [userId]
      );

      res.json(result.rows);
    } catch (err) {
      console.error('Score history error:', err);

      res.status(500).json({
        message: 'Score history load nahi ho paayi'
      });
    }
  });

  // NVIDIA AI - Generate GATE PYQ
  app.post('/api/ai/generate-pyq', async (req, res) => {
    const { subject, topic, difficulty, focusTopic } = req.body || {};

    try {
      const question = await generateGatePyq({
        subject: typeof subject === 'string' && subject ? subject : 'c-programming',
        topic: typeof topic === 'string' && topic ? topic : 'pointers',
        difficulty: typeof difficulty === 'string' && difficulty ? difficulty : 'medium',
        focusTopic: typeof focusTopic === 'string' ? focusTopic : ''
      });

      res.json({
        success: true,
        question
      });
    } catch (err) {
      console.error('NVIDIA AI Generate PYQ error:', err);
      res.status(500).json({
        success: false,
        message: 'Could not generate PYQ using NVIDIA AI. Please try again.',
        error: err.message
      });
    }
  });

  // NVIDIA AI - Save Generated Question to Practice Database
  app.post('/api/ai/save-question', async (req, res) => {
    const { subject_slug, topic_slug, question_text, options, correct_option, explanation, difficulty } = req.body || {};

    if (!subject_slug || !topic_slug || !question_text || !Array.isArray(options) || typeof correct_option !== 'number') {
      return res.status(400).json({ success: false, message: 'Invalid question payload.' });
    }

    try {
      const optionsJson = JSON.stringify(options);
      await pool.query(
        `INSERT INTO questions
         (subject_slug, topic_slug, question_text, options, correct_option, explanation, difficulty)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [subject_slug, topic_slug, question_text, optionsJson, correct_option, explanation || '', difficulty || 'medium']
      );

      res.json({
        success: true,
        message: 'Question saved to practice bank successfully!'
      });
    } catch (err) {
      console.error('Save AI question error:', err);
      if (err.code === '23505' || (err.message && err.message.includes('UNIQUE constraint'))) {
        return res.json({ success: true, message: 'Question already exists in practice bank.' });
      }
      res.status(500).json({ success: false, message: 'Could not save question to database.' });
    }
  });

  // NVIDIA AI - Doubt Solver
  app.post('/api/ai/doubt-solver', async (req, res) => {
    const { message, query, prompt, subject, topic, contextQuestion, history } = req.body || {};
    const text = (typeof message === 'string' && message.trim()) ||
                 (typeof query === 'string' && query.trim()) ||
                 (typeof prompt === 'string' && prompt.trim()) || '';

    if (!text) {
      return res.status(400).json({ success: false, message: 'Please provide a question or doubt description.' });
    }

    try {
      const result = await solveGateDoubt({
        message: text,
        subject: typeof subject === 'string' ? subject : 'GATE CSE',
        topic: typeof topic === 'string' ? topic : 'General',
        contextQuestion: typeof contextQuestion === 'string' ? contextQuestion : null,
        history: Array.isArray(history) ? history : []
      });

      res.json({
        success: true,
        reply: result.reply,
        solution: result.reply,
        model: result.model
      });
    } catch (err) {
      console.error('NVIDIA AI Doubt Solver error:', err);
      res.status(500).json({
        success: false,
        message: err.message || 'Could not solve doubt. Please check NVIDIA API key and connection.'
      });
    }
  });

  // Authentic GATE PYQs Catalog & Stats
  app.get('/api/pyqs/stats', (req, res) => {
    try {
      const stats = getCatalogStats(pool);
      res.json({ success: true, stats });
    } catch (err) {
      console.error('PYQ Catalog Stats error:', err);
      res.status(500).json({ success: false, message: 'Could not load PYQ statistics.' });
    }
  });

  // Authentic Mock Test & Practice Generator
  app.post('/api/pyqs/generate-test', (req, res) => {
    const { mode, subject, topic, count, difficulty } = req.body || {};
    try {
      const test = generateMockTest({
        mode: typeof mode === 'string' ? mode : 'subject',
        subject: typeof subject === 'string' ? subject : 'c-programming',
        topic: typeof topic === 'string' ? topic : '',
        count: Number(count) || 10,
        difficulty: typeof difficulty === 'string' ? difficulty : 'all'
      });
      res.json({ success: true, test });
    } catch (err) {
      console.error('Generate Mock Test error:', err);
      res.status(400).json({ success: false, message: err.message });
    }
  });

  // Submit and Grade Mock Test
  app.post('/api/pyqs/submit-test', async (req, res) => {
    const { testId, answers, questionIds, mode, subject, topic, title } = req.body || {};
    if (!testId || typeof answers !== 'object') {
      return res.status(400).json({ success: false, message: 'Invalid test submission payload.' });
    }

    try {
      const report = submitMockTest({ testId, answers, questionIds, mode, subject, topic, title });

      // If user is authenticated, record result in quiz_results
      const userId = req.session ? req.session.userId : null;
      if (userId) {
        try {
          const subSlug = report.subject || 'gate-cse';
          const topSlug = report.topic || report.mode || 'mock-test';
          const score = Math.round(report.scoredMarks);
          const totalQ = report.totalQuestions;
          const accuracy = report.accuracy;

          await pool.query(
            `INSERT INTO quiz_results
             (user_id, subject_slug, topic_slug, score, total_questions, accuracy)
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [userId, subSlug, topSlug, score, totalQ, accuracy]
          );
        } catch (dbErr) {
          console.warn('Could not auto-save quiz result for authenticated user:', dbErr.message);
        }
      }

      res.json({ success: true, report });
    } catch (err) {
      console.error('Submit Mock Test error:', err);
      res.status(400).json({ success: false, message: err.message });
    }
  });

  // Serve static PYQ markdown and files
  app.use('/pyqs', express.static(path.join(__dirname, 'pyqs')));

  // JSON 404 handler for all unknown /api routes
  app.use('/api', (req, res) => {
    res.status(404).json({
      success: false,
      message: `API endpoint ${req.method} ${req.path} not found.`
    });
  });

  app.get(['/dashboard', '/dashboard.html'], (req, res) => res.redirect('/#dashboard'));
  app.get(['/contact', '/contact.html'], (req, res) => res.redirect('/#contact'));
  app.get(['/progress', '/progress.html'], (req, res) => res.redirect('/#progress'));
  app.get(['/ai-pyq', '/ai-pyq.html'], (req, res) => res.redirect('/#ai-pyq'));
  app.get(['/doubt-solver', '/doubt-solver.html'], (req, res) => res.redirect('/#doubt-solver'));
  app.get('/login', (req, res) => res.redirect('/#login'));
  app.get('/signup', (req, res) => res.redirect('/#signup'));
  app.get(['/subjects', '/subjects/', '/subjects.html'], (req, res) => {
    const { subject } = req.query;
    if (typeof subject === 'string' && subject) {
      return res.redirect(`/#subject/${encodeURIComponent(subject)}`);
    }
    res.redirect('/#subjects');
  });
  app.get('/subjects/:slug', (req, res) => {
    res.redirect(`/#subject/${encodeURIComponent(req.params.slug)}`);
  });
  app.get(['/practice', '/practice.html'], (req, res) => {
    const { subject, topic } = req.query;
    if (typeof subject === 'string' && typeof topic === 'string') {
      return res.redirect(`/#practice/${encodeURIComponent(subject)}/${encodeURIComponent(topic)}`);
    }
    if (typeof subject === 'string') {
      return res.redirect(`/#subject/${encodeURIComponent(subject)}`);
    }
    res.redirect('/#subjects');
  });

  app.use(express.static(path.join(__dirname, 'public')));

  return app;
}

function validateEnvironment(env = process.env) {
  const missingEnvironment = [];
  if (!env.SESSION_SECRET) {
    if (!process.env.VERCEL) {
      missingEnvironment.push('SESSION_SECRET');
    }
  } else if (env.SESSION_SECRET.length < 32) {
    throw new Error('SESSION_SECRET must contain at least 32 characters.');
  }

  const isSqlite =
    env.DB_CLIENT === 'sqlite' ||
    (env.DATABASE_URL && env.DATABASE_URL.startsWith('sqlite')) ||
    (process.env.VERCEL && env.DB_CLIENT !== 'postgres');
  if (!isSqlite && !env.DATABASE_URL && (!env.DB_USER || !env.DB_PASSWORD || !env.DB_NAME)) {
    missingEnvironment.push('DATABASE_URL or DB_USER, DB_PASSWORD, and DB_NAME');
  }
  if (missingEnvironment.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvironment.join(', ')}`);
  }
}

function startServer(env = process.env) {
  validateEnvironment(env);

  const pool = createPool(env);
  let sessionStore;

  if (pool.isSqlite) {
    sessionStore = new SqliteSessionStore(pool.db);
  } else {
    pool.on('error', error => {
      console.error('Unexpected PostgreSQL idle client error:', error);
    });
    sessionStore = new PgSession({
      pool,
      tableName: 'user_sessions',
      createTableIfMissing: true
    });
  }

  const app = createApp({
    pool,
    sessionStore,
    sessionSecret: env.SESSION_SECRET,
    production: env.NODE_ENV === 'production'
  });
  const port = Number(env.PORT || 3000);
  const server = app.listen(port, () => {
    console.log(`GATEPrep server listening on port ${port} (${pool.isSqlite ? 'SQLite embedded' : 'PostgreSQL'})`);
  });

  return { app, pool, server };
}

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

if (require.main === module) {
  startServer();
}

module.exports = { createApp, createPool, startServer, validateEnvironment };
