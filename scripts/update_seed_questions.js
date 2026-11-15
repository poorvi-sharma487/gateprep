"use strict";

const fs = require('fs');
const path = require('path');
const { loadPyqs } = require('../services/pyq-service');

const pyqs = loadPyqs();
const outPath = path.resolve(__dirname, '..', 'db', 'seed-questions.js');

const code = `"use strict";\n\nconst seedQuestions = ${JSON.stringify(pyqs, null, 2)};\n\nmodule.exports = { seedQuestions };\n`;

fs.writeFileSync(outPath, code, 'utf8');
console.log(`Successfully wrote ${pyqs.length} questions to ${outPath}!`);
