"use strict";

const fs = require('fs');
const path = require('path');

const jsonPath = path.resolve(__dirname, '..', 'pyqs', 'gate_pyqs_database.json');
const seedPath = path.resolve(__dirname, '..', 'db', 'seed-questions.js');

const pyqs = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const seedContent = `"use strict";\n\nconst seedQuestions = ${JSON.stringify(pyqs, null, 2)};\n\nmodule.exports = { seedQuestions };\n`;
fs.writeFileSync(seedPath, seedContent, 'utf8');

console.log("Successfully synced seed-questions.js!");
