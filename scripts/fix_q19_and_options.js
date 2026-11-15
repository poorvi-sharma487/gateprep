"use strict";

const fs = require('fs');
const path = require('path');

const jsonPath = path.resolve(__dirname, '..', 'pyqs', 'gate_pyqs_database.json');
const seedPath = path.resolve(__dirname, '..', 'db', 'seed-questions.js');

const pyqs = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// 1. Fix general-aptitude-topic-4-m4-q19 specifically
const q19 = pyqs.find(x => x.id === 'general-aptitude-topic-4-m4-q19');
if (q19) {
  q19.question_text = `Three of the five students allocated to a hostel put in special requests to the warden. Given the floor plan of the vacant rooms, select the allocation plan that will accommodate all their requests.

Request by X: Due to pollen allergy, I want to avoid a wing next to the garden.
Request by Y: I want to live as far from the washrooms as possible, since I am very sensitive to smell.
Request by Z: I believe in Vaastu and so I want to stay in the South-west wing.
(The shaded rooms are already occupied. WR is washroom.)`;
  q19.options = [
    "X: P, Y: U, Z: S",
    "X: P, Y: Q, Z: T",
    "X: P, Y: S, Z: T",
    "X: Q, Y: R, Z: S"
  ];
  q19.correct_option = 3;
}

// 2. Normalize any shifted option fragments where options look like ['(b)', ..., '(d)', ...]
const shiftedIds = [
  'digital-logic-topic-2-m2-q20',
  'digital-logic-topic-3-m3-q5',
  'compiler-design-topic-2-m2-q33',
  'compiler-design-topic-4-m4-q24',
  'dbms-topic-6-m6-q13',
  'computer-networks-topic-2-m2-q41',
  'general-aptitude-topic-4-m4-q1',
  'general-aptitude-topic-4-m4-q5',
  'general-aptitude-topic-4-m4-q11'
];

for (const id of shiftedIds) {
  const q = pyqs.find(x => x.id === id);
  if (q) {
    q.options = ['(A)', '(B)', '(C)', '(D)'];
  }
}

// 3. Remove spurious ```c fences from Math / Aptitude questions
const nonCodeSubjs = ['general-aptitude', 'engineering-mathematics', 'discrete-mathematics'];
for (const q of pyqs) {
  if (nonCodeSubjs.includes(q.subject_slug) && q.question_text.includes('```')) {
    q.question_text = q.question_text.replace(/```c\s*|```sql\s*|```/g, '').trim();
  }
}

// Write to JSON database
fs.writeFileSync(jsonPath, JSON.stringify(pyqs, null, 2), 'utf8');

// Write to seed-questions.js
const seedContent = `"use strict";\n\nconst seedQuestions = ${JSON.stringify(pyqs, null, 2)};\n\nmodule.exports = { seedQuestions };\n`;
fs.writeFileSync(seedPath, seedContent, 'utf8');

console.log("Successfully fixed Q19 and cleaned all option fragments!");
