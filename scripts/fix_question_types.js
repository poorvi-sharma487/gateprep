"use strict";

/**
 * fix_question_types.js
 * 
 * Fixes misclassified question types in gate_pyqs_database.json:
 * 
 * Rule 1: If type=NAT but answer_key contains a letter like (A)/(B)/(C)/(D),
 *         it's clearly an MCQ → fix type to "MCQ".
 * 
 * Rule 2: If type=NAT and options array is empty but correct_option is 0/1/2/3
 *         AND answer_key is numeric/range → keep as NAT (genuine NAT).
 * 
 * Rule 3: If type=MCQ but options array is empty → flag for review (don't change type,
 *         but log it so it can be investigated).
 *
 * Does NOT touch: UI, timer, marking scheme, or any other logic.
 */

const fs = require('fs');
const path = require('path');

const DB_PATH = path.resolve(__dirname, '..', 'pyqs', 'gate_pyqs_database.json');

function isLetterAnswerKey(answerKey) {
  if (!answerKey) return false;
  // Matches: (A), (B), (C), (D), - (A), - (B), - (C), - (D), A, B, C, D alone
  return /\(?\s*[A-D]\s*\)?/.test(answerKey) && !/\d{2,}/.test(answerKey);
}

function isNumericAnswerKey(answerKey) {
  if (!answerKey) return false;
  // Matches pure numbers, ranges like "0 to 0", "1.5 to 2.5", negative numbers
  return /^[\s\-\d\.\sto]+$/.test(answerKey.trim());
}

function main() {
  console.log('Loading question bank...');
  const raw = fs.readFileSync(DB_PATH, 'utf8');
  const questions = JSON.parse(raw);
  console.log(`Total questions: ${questions.length}`);

  let fixedNatToMcq = 0;
  let genuineNat = 0;
  let mcqMissingOptions = 0;
  let unchanged = 0;

  for (const q of questions) {
    const hasOptions = Array.isArray(q.options) && q.options.length > 0;
    const hasLetterKey = isLetterAnswerKey(q.answer_key);
    const hasNumericKey = isNumericAnswerKey(q.answer_key);

    if (q.type === 'NAT') {
      if (hasLetterKey && !hasOptions) {
        // Misclassified: NAT with a letter answer key → should be MCQ
        q.type = 'MCQ';
        fixedNatToMcq++;
      } else if (!hasOptions && hasNumericKey) {
        // Genuine NAT with numeric answer
        genuineNat++;
      } else if (hasOptions) {
        // NAT with options → definitely MCQ
        q.type = 'MCQ';
        fixedNatToMcq++;
      } else {
        // NAT with no options and no clear numeric key — keep as NAT
        genuineNat++;
      }
    } else if (q.type === 'MCQ') {
      if (!hasOptions) {
        // MCQ missing options — log but don't change type
        mcqMissingOptions++;
      } else {
        unchanged++;
      }
    } else {
      // No type set — infer from options
      if (hasOptions) {
        q.type = 'MCQ';
      } else if (hasNumericKey) {
        q.type = 'NAT';
      } else if (hasLetterKey) {
        q.type = 'MCQ';
      }
    }
  }

  // Write back
  fs.writeFileSync(DB_PATH, JSON.stringify(questions, null, 2), 'utf8');

  console.log('\n=== Fix Summary ===');
  console.log(`✅ NAT → MCQ (misclassified, fixed): ${fixedNatToMcq}`);
  console.log(`✅ Genuine NAT (kept as NAT):         ${genuineNat}`);
  console.log(`✅ MCQ with options (unchanged):      ${unchanged}`);
  console.log(`⚠️  MCQ missing options (logged):     ${mcqMissingOptions}`);
  console.log(`\nDatabase saved to: ${DB_PATH}`);
}

main();
