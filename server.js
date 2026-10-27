const path = require('path');

const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(session({
  secret: process.env.SESSION_SECRET || 'gateprep-local-secret-change-later',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// Database connection using environment variables or fallback defaults
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'Sharma2026',
  database: process.env.DB_NAME || 'my_project'
});

// Signup Route

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'Name, email aur password zaroori hain'
    });
  }

  const cleanEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({
      message: 'Please enter a valid email address'
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      message: 'Password kam se kam 8 characters ka hona chahiye'
    });
  }

  try {
    const hashed = await bcrypt.hash(password, 10);

    await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
      [name.trim(), cleanEmail, hashed]
    );

    res.json({ message: 'Signup successful!' });
  } catch (err) {
    console.error(err);

    if (err.code === '23505') {
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
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email aur password dono daalo'
    });
  }

  try {
    const cleanEmail = email.trim().toLowerCase();

    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
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
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: 'Name, email aur message bharna zaroori hai'
    });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();
  const cleanMessage = message.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({
      message: 'Valid email address daalo'
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
// Dashboard Route
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard', 'index.html'));
});

// Contact Page
app.get('/contact', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'public', 'contact', 'index.html')
  );
});

// Progress Route
app.get('/progress', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'public', 'progress', 'index.html')
  );
});

 // Subjects main page
app.get(['/subjects', '/subjects/'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'subjects', 'index.html'));
});


app.get('/subjects/:slug', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'subjects', 'subject.html'));
});

app.get('/practice', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'public', 'subjects', 'practice.html')
  );
});

 // Questions API: PostgreSQL se topic-wise questions lana
app.get('/api/questions', async (req, res) => {
  const { subject, topic } = req.query;

  if (!subject || !topic) {
    return res.status(400).json({
      message: 'Subject aur topic dono select karo'
    });
  }

  try {
    const result = await pool.query(
      `SELECT id, subject_slug, topic_slug,
              question_text, options,
              correct_option, explanation, difficulty
       FROM questions
       WHERE subject_slug = $1
         AND topic_slug = $2
       ORDER BY id`,
      [subject, topic]
    );

    res.json(result.rows);
  } catch (err) {
    console.error('Questions fetch error:', err);
    res.status(500).json({
      message: 'Questions load nahi ho paaye'
    });
  }
});


app.post('/api/quiz-results', async (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({
      message: 'Pehle login karo'
    });
  }

  const { subject, topic, score, totalQuestions } = req.body;

  if (
    !subject ||
    !topic ||
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server chal raha hai: http://localhost:${PORT}`);
});