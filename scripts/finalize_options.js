"use strict";

const fs = require('fs');
const path = require('path');

const jsonPath = path.resolve(__dirname, '..', 'pyqs', 'gate_pyqs_database.json');
const seedPath = path.resolve(__dirname, '..', 'db', 'seed-questions.js');

const pyqs = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

let count = 0;
for (const q of pyqs) {
  if (q.options && q.options.some(o => /Option [A-D]/i.test(o))) {
    q.options = ['(A)', '(B)', '(C)', '(D)'];
    count++;
  }
}

console.log(`Replaced ${count} remaining raw placeholders with standard choices (A), (B), (C), (D).`);

fs.writeFileSync(jsonPath, JSON.stringify(pyqs, null, 2), 'utf8');

const seedContent = `"use strict";\n\nconst seedQuestions = ${JSON.stringify(pyqs, null, 2)};\n\nmodule.exports = { seedQuestions };\n`;
fs.writeFileSync(seedPath, seedContent, 'utf8');

console.log('Successfully saved to database & seed-questions!');
