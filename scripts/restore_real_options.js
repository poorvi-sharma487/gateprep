"use strict";

const fs = require('fs');
const path = require('path');

const mdFiles = [
  '01_c_programming.md',
  '02_data_structures.md',
  '03_algorithms.md',
  '04_digital_logic.md',
  '05_theory_of_computation.md',
  '06_compiler_design.md',
  '07_operating_system.md',
  '08_dbms.md',
  '09_computer_organization_and_architecture.md',
  '10_computer_networks.md',
  '11_discrete_mathematics.md',
  '12_engineering_mathematics.md',
  '13_general_aptitude.md'
];

const subjectSlugs = [
  'c-programming',
  'data-structures',
  'algorithms',
  'digital-logic',
  'theory-of-computation',
  'compiler-design',
  'operating-system',
  'dbms',
  'computer-organization-and-architecture',
  'computer-networks',
  'discrete-mathematics',
  'engineering-mathematics',
  'general-aptitude'
];

const mdDir = path.resolve(__dirname, '..', 'pyqs', 'markdown');
const jsonPath = path.resolve(__dirname, '..', 'pyqs', 'gate_pyqs_database.json');
const seedPath = path.resolve(__dirname, '..', 'db', 'seed-questions.js');

const pyqs = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

function extractInlineOptions(text) {
  // Matches: a) ... b) ... c) ... d) ... or (a) ... (b) ... or A. ... B. ...
  const match = text.match(/(?:^|\n)\s*[a-d\(\[]\s*[\)\]\.]\s*([^\n]+)/gi);
  if (match && match.length >= 4) {
    return match.slice(-4).map(m => m.replace(/^\s*[a-d\(\[]\s*[\)\]\.]\s*/i, '').trim());
  }
  return null;
}

let restoredCount = 0;
let inlineCount = 0;

for (let i = 0; i < mdFiles.length; i++) {
  const mdContent = fs.readFileSync(path.join(mdDir, mdFiles[i]), 'utf8');
  const mdBlocks = mdContent.split(/\n(?=### Q\d+\.)/).slice(1);
  const jsonSubj = pyqs.filter(x => x.subject_slug === subjectSlugs[i]);

  for (let j = 0; j < mdBlocks.length; j++) {
    const b = mdBlocks[j];
    const q = jsonSubj[j];
    if (!q) continue;

    // Check if question has placeholder options or missing options
    const isPlaceholder = q.options && q.options.some(o => /Option [A-D]/i.test(o));

    if (isPlaceholder || !q.options || q.options.length < 2) {
      // 1. Try formatted markdown options: - **(A)** ...
      const optMatch = b.match(/- \*\*\([A-D]\)\*\* (.*)/g);
      if (optMatch && optMatch.length >= 4) {
        q.options = optMatch.slice(0, 4).map(o => o.replace(/^- \*\*\([A-D]\)\*\*\s*/, '').trim());
        restoredCount++;
      } else {
        // 2. Try inline options inside text: a) ... b) ...
        const textBeforeDetails = b.split('<details>')[0];
        const inlineOpts = extractInlineOptions(textBeforeDetails);
        if (inlineOpts && inlineOpts.length === 4) {
          q.options = inlineOpts;
          inlineCount++;
        }
      }
    }
  }
}

console.log(`Restored from Markdown bullet options: ${restoredCount}`);
console.log(`Restored from inline question text options: ${inlineCount}`);
console.log(`Total options restored: ${restoredCount + inlineCount}`);

// Save back to gate_pyqs_database.json
fs.writeFileSync(jsonPath, JSON.stringify(pyqs, null, 2), 'utf8');
console.log(`Updated ${jsonPath}`);

// Also update db/seed-questions.js
const seedContent = `"use strict";\n\nconst seedQuestions = ${JSON.stringify(pyqs, null, 2)};\n\nmodule.exports = { seedQuestions };\n`;
fs.writeFileSync(seedPath, seedContent, 'utf8');
console.log(`Updated ${seedPath}`);
