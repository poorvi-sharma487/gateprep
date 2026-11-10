"use strict";

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { cleanText, cleanOption } = require('../scripts/clean_pyq_options');

let cachedPyqs = null;

function loadPyqs() {
  if (cachedPyqs) return cachedPyqs;
  const jsonPath = path.resolve(__dirname, '..', 'pyqs', 'gate_pyqs_database.json');
  if (fs.existsSync(jsonPath)) {
    try {
      const raw = fs.readFileSync(jsonPath, 'utf8');
      cachedPyqs = JSON.parse(raw);
      return cachedPyqs;
    } catch (e) {
      console.error("Failed to parse gate_pyqs_database.json:", e);
    }
  }
  return [];
}

function getCatalogStats(pool) {
  const allPyqs = loadPyqs();
  const subjectCounts = {};
  const topicCounts = {};
  const yearCounts = {};

  for (const q of allPyqs) {
    subjectCounts[q.subject_slug] = (subjectCounts[q.subject_slug] || 0) + 1;
    const tKey = `${q.subject_slug}:${q.topic_slug}`;
    topicCounts[tKey] = (topicCounts[tKey] || 0) + 1;
    if (q.gate_year) {
      const yearMatch = q.gate_year.match(/\b(19\d\d|20\d\d)\b/);
      if (yearMatch) {
        yearCounts[yearMatch[1]] = (yearCounts[yearMatch[1]] || 0) + 1;
      }
    }
  }

  // Check available markdown files
  const mdDir = path.resolve(__dirname, '..', 'pyqs', 'markdown');
  let mdFiles = [];
  if (fs.existsSync(mdDir)) {
    mdFiles = fs.readdirSync(mdDir).filter(f => f.endsWith('.md')).map(f => {
      const stat = fs.statSync(path.join(mdDir, f));
      return {
        filename: f,
        sizeKb: Math.round(stat.size / 1024),
        path: `/pyqs/markdown/${f}`
      };
    });
  }

  const masterFile = path.resolve(__dirname, '..', 'GATE_CSE_PYQ_Book.md');
  const masterSizeKb = fs.existsSync(masterFile) ? Math.round(fs.statSync(masterFile).size / 1024) : 0;

  return {
    totalQuestions: allPyqs.length,
    subjectsCount: Object.keys(subjectCounts).length,
    subjectBreakdown: subjectCounts,
    topicBreakdown: topicCounts,
    years: yearCounts,
    markdownFiles: mdFiles,
    masterBook: {
      filename: 'GATE_CSE_PYQ_Book.md',
      sizeKb: masterSizeKb
    }
  };
}

// Persistent & in-memory test sessions for grading (valid for 7 days)
const activeTestSessions = new Map();
const SESSIONS_FILE = process.env.VERCEL
  ? path.resolve('/tmp', 'active_test_sessions.json')
  : path.resolve(__dirname, '..', 'db', 'active_test_sessions.json');

function loadPersistedSessions() {
  try {
    if (fs.existsSync(SESSIONS_FILE)) {
      const raw = fs.readFileSync(SESSIONS_FILE, 'utf8');
      const data = JSON.parse(raw);
      if (typeof data === 'object' && data !== null) {
        const now = Date.now();
        for (const [id, s] of Object.entries(data)) {
          if (s && (now - (s.createdAt || 0) < 7 * 24 * 60 * 60 * 1000)) {
            activeTestSessions.set(id, s);
          }
        }
      }
    }
  } catch (err) {
    console.warn("Could not load persisted test sessions:", err.message);
  }
}

function persistSessions() {
  try {
    const obj = {};
    const now = Date.now();
    for (const [id, s] of activeTestSessions.entries()) {
      if (s && (now - (s.createdAt || 0) < 7 * 24 * 60 * 60 * 1000)) {
        obj[id] = s;
      }
    }
    const dir = path.dirname(SESSIONS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(SESSIONS_FILE, JSON.stringify(obj, null, 2), 'utf8');
  } catch (err) {
    console.warn("Could not save persisted test sessions:", err.message);
  }
}

// Initial session restoration from disk
loadPersistedSessions();

setInterval(() => {
  const now = Date.now();
  let changed = false;
  for (const [id, session] of activeTestSessions.entries()) {
    if (now - (session.createdAt || 0) > 7 * 24 * 60 * 60 * 1000) {
      activeTestSessions.delete(id);
      changed = true;
    }
  }
  if (changed) persistSessions();
}, 60 * 60 * 1000).unref();

function generateMockTest({
  mode = "subject", // "full_gate", "subject", "topic", "custom"
  subject = "c-programming",
  topic = "",
  count = 10,
  difficulty = "all"
} = {}) {
  const allPyqs = loadPyqs();
  if (!allPyqs || allPyqs.length === 0) {
    throw new Error("PYQ question bank is empty. Please run 'npm run seed:pyqs'.");
  }

  let selectedQuestions = [];
  let testTitle = "";
  let durationMinutes = 30;

  if (mode === "full_gate") {
    testTitle = "GATE CSE Full-Length Authentic Mock Test";
    durationMinutes = 180; // 3 hours

    // Standard GATE CSE pattern:
    // 10 General Aptitude (5 x 1-mark, 5 x 2-mark)
    // 55 Core CSE questions across all 12 subjects (25 x 1-mark, 30 x 2-mark)
    const gaQuestions = allPyqs.filter(q => q.subject_slug === "general-aptitude");
    const csQuestions = allPyqs.filter(q => q.subject_slug !== "general-aptitude");

    // Shuffle
    const shuffledGA = [...gaQuestions].sort(() => Math.random() - 0.5);
    const shuffledCS = [...csQuestions].sort(() => Math.random() - 0.5);

    selectedQuestions = [
      ...shuffledGA.slice(0, 10),
      ...shuffledCS.slice(0, 55)
    ];
  } else if (mode === "subject") {
    const filtered = allPyqs.filter(q => {
      if (q.subject_slug !== subject) return false;
      if (difficulty !== "all" && q.difficulty !== difficulty) return false;
      return true;
    });

    const targetCount = Math.min(Number(count) || 15, filtered.length);
    durationMinutes = Math.max(15, targetCount * 2);
    testTitle = `GATE ${subject.toUpperCase().replace(/-/g, ' ')} Practice Test`;
    selectedQuestions = [...filtered].sort(() => Math.random() - 0.5).slice(0, targetCount);
  } else if (mode === "topic") {
    const filtered = allPyqs.filter(q => {
      if (q.subject_slug !== subject) return false;
      if (topic && q.topic_slug !== topic) return false;
      if (difficulty !== "all" && q.difficulty !== difficulty) return false;
      return true;
    });

    const targetCount = Math.min(Number(count) || 10, filtered.length);
    durationMinutes = Math.max(10, targetCount * 2);
    testTitle = `GATE ${topic || subject} Topic Test`;
    selectedQuestions = [...filtered].sort(() => Math.random() - 0.5).slice(0, targetCount);
  } else {
    // Custom random
    const targetCount = Math.min(Number(count) || 20, allPyqs.length);
    durationMinutes = targetCount * 2;
    testTitle = "GATE CSE Custom PYQ Practice Test";
    selectedQuestions = [...allPyqs].sort(() => Math.random() - 0.5).slice(0, targetCount);
  }

  if (selectedQuestions.length === 0) {
    throw new Error(`No authentic PYQs found matching filters (Subject: ${subject}, Topic: ${topic}, Difficulty: ${difficulty}).`);
  }

  const testId = crypto.randomUUID();
  let totalMarks = 0;

  // Build answer key map and client questions
  const answerKeyMap = {};
  const clientQuestions = selectedQuestions.map((q, idx) => {
    const marks = Number(q.marks) || 2;
    totalMarks += marks;
    const qKey = q.id || `q-${idx}`;
    const qType = q.type || (Array.isArray(q.options) && q.options.length >= 2 ? "MCQ" : "NAT");

    answerKeyMap[qKey] = {
      type: qType,
      correct_option: q.correct_option,
      answer_key: q.answer_key,
      explanation: q.explanation,
      marks,
      subject_slug: q.subject_slug,
      topic_slug: q.topic_slug
    };

    return {
      id: qKey,
      index: idx + 1,
      subject_slug: q.subject_slug,
      subject_name: q.subject_name,
      topic_slug: q.topic_slug,
      topic_name: q.topic_name,
      gate_year: q.gate_year,
      marks,
      difficulty: q.difficulty,
      type: qType,
      question_text: cleanText(q.question_text),
      options: Array.isArray(q.options) ? q.options.map(cleanOption) : []
      // correct_option omitted to prevent client inspection
    };
  });

  activeTestSessions.set(testId, {
    testId,
    testTitle,
    mode,
    subject,
    topic,
    createdAt: Date.now(),
    durationMinutes,
    totalMarks,
    answerKeyMap,
    questionCount: clientQuestions.length
  });
  persistSessions();

  return {
    testId,
    testTitle,
    mode,
    subject,
    topic,
    durationMinutes,
    totalQuestions: clientQuestions.length,
    totalMarks,
    questions: clientQuestions
  };
}

function submitMockTest({ testId, answers = {}, questionIds = [], mode: fallbackMode, subject: fallbackSubject, topic: fallbackTopic, title: fallbackTitle } = {}) {
  let session = activeTestSessions.get(testId);
  if (!session) {
    loadPersistedSessions();
    session = activeTestSessions.get(testId);
  }

  // Resilient Recovery: Reconstruct session if questionIds or answers are provided
  if (!session) {
    const allPyqs = loadPyqs();
    const pyqMap = new Map(allPyqs.map(q => [q.id, q]));
    const targetIds = Array.isArray(questionIds) && questionIds.length > 0
      ? questionIds
      : Object.keys(answers || {});

    if (targetIds.length > 0) {
      const answerKeyMap = {};
      let totalMarks = 0;
      let validCount = 0;

      for (const qId of targetIds) {
        const q = pyqMap.get(qId);
        if (q) {
          validCount++;
          const marks = Number(q.marks) || 2;
          totalMarks += marks;
          const qType = q.type || (Array.isArray(q.options) && q.options.length >= 2 ? "MCQ" : "NAT");
          answerKeyMap[qId] = {
            type: qType,
            correct_option: q.correct_option,
            answer_key: q.answer_key,
            explanation: q.explanation,
            marks,
            subject_slug: q.subject_slug,
            topic_slug: q.topic_slug
          };
        }
      }

      if (validCount > 0) {
        session = {
          testId,
          testTitle: fallbackTitle || (fallbackMode === "full_gate" ? "GATE CSE Full-Length Authentic Mock Test" : `GATE ${fallbackSubject ? fallbackSubject.toUpperCase().replace(/-/g, ' ') : 'CSE'} Practice Test`),
          mode: fallbackMode || "custom",
          subject: fallbackSubject || "c-programming",
          topic: fallbackTopic || "",
          createdAt: Date.now(),
          durationMinutes: 180,
          totalMarks: totalMarks || 100,
          answerKeyMap,
          questionCount: validCount
        };
        activeTestSessions.set(testId, session);
        persistSessions();
      }
    }
  }

  if (!session) {
    throw new Error("Test session expired or invalid. Please generate a new test.");
  }

  const { answerKeyMap, testTitle, totalMarks, durationMinutes, mode, subject, topic } = session;

  let totalScore = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;

  const reviewQuestions = [];

  for (const [qId, keyInfo] of Object.entries(answerKeyMap)) {
    const userAnswer = answers[qId];
    const isNat = keyInfo.type === 'NAT' || (!keyInfo.correct_option && keyInfo.answer_key);
    const marks = keyInfo.marks || 2;
    let marksAwarded = 0;
    let isAttempted = false;
    let isCorrect = false;

    if (isNat) {
      isAttempted = userAnswer !== undefined && userAnswer !== null && String(userAnswer).trim() !== '';
      if (isAttempted) {
        const uNum = parseFloat(String(userAnswer).trim());
        const kNum = parseFloat(String(keyInfo.answer_key || keyInfo.correct_option).trim());
        if (!isNaN(uNum) && !isNaN(kNum) && Math.abs(uNum - kNum) <= 0.05) {
          isCorrect = true;
        } else if (String(userAnswer).trim().toLowerCase() === String(keyInfo.answer_key || '').trim().toLowerCase()) {
          isCorrect = true;
        }
      }

      if (!isAttempted) {
        unattemptedCount++;
        marksAwarded = 0;
      } else if (isCorrect) {
        correctCount++;
        marksAwarded = marks;
        totalScore += marksAwarded;
      } else {
        wrongCount++;
        // Official GATE rule: NAT questions carry ZERO negative marking
        marksAwarded = 0;
      }
    } else {
      isAttempted = typeof userAnswer === 'number' && userAnswer >= 0;
      isCorrect = isAttempted && userAnswer === keyInfo.correct_option;

      if (!isAttempted) {
        unattemptedCount++;
        marksAwarded = 0;
      } else if (isCorrect) {
        correctCount++;
        marksAwarded = marks;
        totalScore += marksAwarded;
      } else {
        wrongCount++;
        // Standard GATE MCQ negative marking: 1/3 penalty
        const penalty = marks === 1 ? (1 / 3) : (2 / 3);
        marksAwarded = -penalty;
        totalScore += marksAwarded;
      }
    }

    reviewQuestions.push({
      id: qId,
      userAnswer: isAttempted ? userAnswer : null,
      correctOption: keyInfo.correct_option,
      isCorrect,
      isAttempted,
      marksAwarded: Number(marksAwarded.toFixed(2)),
      maxMarks: marks,
      officialAnswerKey: keyInfo.answer_key,
      explanation: keyInfo.explanation,
      subject_slug: keyInfo.subject_slug,
      topic_slug: keyInfo.topic_slug
    });
  }

  // Keep score non-negative for display percentage
  const finalScore = Math.max(0, Number(totalScore.toFixed(2)));
  const totalQuestions = Object.keys(answerKeyMap).length;
  const accuracy = correctCount + wrongCount > 0
    ? Number(((correctCount / (correctCount + wrongCount)) * 100).toFixed(2))
    : 0;

  return {
    testId,
    testTitle,
    mode,
    subject,
    topic,
    totalQuestions,
    correctCount,
    wrongCount,
    unattemptedCount,
    totalMarks,
    scoredMarks: finalScore,
    accuracy,
    results: reviewQuestions
  };
}

module.exports = {
  loadPyqs,
  getCatalogStats,
  generateMockTest,
  submitMockTest
};
