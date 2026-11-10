"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createApp } = require("../server");
const { createSqlitePool } = require("../db/sqlite");
const session = require("express-session");

test("AI Endpoints: generate-pyq, save-question, and doubt-solver", async (t) => {
  const pool = createSqlitePool(":memory:");
  const app = createApp({
    pool,
    sessionStore: new session.MemoryStore(),
    sessionSecret: "test-secret-with-more-than-thirty-two-characters-long",
    production: false
  });

  const server = app.listen(0, "127.0.0.1");
  await new Promise((res) => server.once("listening", res));
  const baseUrl = `http://127.0.0.1:${server.address().port}`;

  t.after(() => {
    server.close();
    pool.close();
  });

  // 1. Test generate-pyq
  console.log("Calling /api/ai/generate-pyq...");
  const pyqRes = await fetch(`${baseUrl}/api/ai/generate-pyq`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      subject: "c-programming",
      topic: "pointers",
      difficulty: "medium",
      focusTopic: "Pointer Arithmetic"
    })
  });

  assert.equal(pyqRes.status, 200);
  const pyqData = await pyqRes.json();
  assert.equal(pyqData.success, true);
  assert.ok(pyqData.question);
  assert.ok(pyqData.question.question_text.length > 10);
  assert.equal(Array.isArray(pyqData.question.options), true);
  assert.ok(pyqData.question.options.length >= 2);
  assert.equal(typeof pyqData.question.correct_option, "number");
  console.log("Generated PYQ verification PASSED!");

  // 2. Test save-question
  console.log("Calling /api/ai/save-question...");
  const saveRes = await fetch(`${baseUrl}/api/ai/save-question`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      subject_slug: "c-programming",
      topic_slug: "pointers",
      question_text: pyqData.question.question_text,
      options: pyqData.question.options,
      correct_option: pyqData.question.correct_option,
      explanation: pyqData.question.explanation,
      difficulty: pyqData.question.difficulty
    })
  });

  assert.equal(saveRes.status, 200);
  const saveData = await saveRes.json();
  assert.equal(saveData.success, true);
  console.log("Save question verification PASSED!");

  // 3. Test doubt-solver
  console.log("Calling /api/ai/doubt-solver...");
  const doubtRes = await fetch(`${baseUrl}/api/ai/doubt-solver`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Explain what is a critical section and what are the three requirements for a solution to the critical section problem.",
      subject: "Operating Systems",
      topic: "Process Synchronization"
    })
  });

  assert.equal(doubtRes.status, 200);
  const doubtData = await doubtRes.json();
  assert.equal(doubtData.success, true);
  assert.ok(doubtData.reply);
  assert.ok(doubtData.reply.length > 50);
  console.log("Doubt Solver verification PASSED!");
});
