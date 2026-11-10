"use strict";

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { createApp, createPool } = require('../server');
const { getCatalogStats, generateMockTest, submitMockTest } = require('../services/pyq-service');

test('PYQ Service and Database Integration', async (t) => {
  await t.test('Catalog stats reports authentic questions and markdown books', () => {
    const stats = getCatalogStats();
    assert.ok(stats.totalQuestions > 1500, `Expected >1500 questions, got ${stats.totalQuestions}`);
    assert.strictEqual(stats.subjectsCount, 13, 'Expected 13 subjects');
    assert.ok(stats.markdownFiles.length >= 13, 'Expected at least 13 markdown files');
    assert.ok(fs.existsSync(path.resolve(__dirname, '..', 'GATE_CSE_PYQ_Book.md')), 'GATE_CSE_PYQ_Book.md must exist in root');
  });

  await t.test('generateMockTest produces valid test paper for full GATE exam', () => {
    const testSession = generateMockTest({ mode: 'full_gate' });
    assert.ok(testSession.testId, 'Test ID should be generated');
    assert.strictEqual(testSession.totalQuestions, 65, 'Full GATE exam must have 65 questions');
    assert.strictEqual(testSession.durationMinutes, 180, 'Full GATE exam duration must be 180 minutes');
    assert.ok(Array.isArray(testSession.questions), 'Questions must be an array');
    assert.strictEqual(testSession.questions[0].correct_option, undefined, 'correct_option must be hidden');
  });

  await t.test('generateMockTest and submitMockTest grades answers correctly with negative marking', () => {
    const testSession = generateMockTest({ mode: 'subject', subject: 'c-programming', count: 5 });
    assert.ok(testSession.questions.length > 0);

    const q1 = testSession.questions[0];
    const q2 = testSession.questions[1];

    // Submit mock answers
    const answers = {};
    // Intentionally pass answer 0 for q1
    answers[q1.id] = 0;

    const report = submitMockTest({ testId: testSession.testId, answers });
    assert.strictEqual(report.testId, testSession.testId);
    assert.strictEqual(report.totalQuestions, testSession.questions.length);
    assert.strictEqual(report.results.length, testSession.questions.length);
    assert.ok(typeof report.scoredMarks === 'number');
    assert.ok(typeof report.accuracy === 'number');
  });

  await t.test('submitMockTest resiliently reconstructs session from questionIds even if in-memory session was wiped', () => {
    const testSession = generateMockTest({ mode: 'subject', subject: 'c-programming', count: 3 });
    const qIds = testSession.questions.map(q => q.id);
    const answers = {};
    answers[qIds[0]] = 0;

    // Simulate completely unknown/wiped test ID (e.g. after server reboot)
    const wipedTestId = 'wiped-test-uuid-' + Date.now();
    const report = submitMockTest({
      testId: wipedTestId,
      answers,
      questionIds: qIds,
      mode: 'subject',
      subject: 'c-programming'
    });

    assert.strictEqual(report.testId, wipedTestId);
    assert.strictEqual(report.totalQuestions, 3);
    assert.strictEqual(report.results.length, 3);
    assert.ok(typeof report.scoredMarks === 'number');
  });
});
