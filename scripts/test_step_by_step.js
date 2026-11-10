const fs = require('fs');
const path = require('path');
const markedContent = fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'vendor', 'marked.min.js'), 'utf8');
const markedModule = { exports: {} };
const runMarked = new Function('module', 'exports', markedContent);
runMarked(markedModule, markedModule.exports);
const marked = markedModule.exports.marked || markedModule.exports;

const pyqs = JSON.parse(fs.readFileSync('./pyqs/gate_pyqs_database.json', 'utf8'));

const subjectNames = [
  'ALGORITHMS?',
  'DATA STRUCTURES?',
  'OPERATING SYSTEMS?',
  'COMPUTER NETWORKS?',
  'DISCRETE MATHEMATICS',
  'ENGINEERING MATHEMATICS',
  'COMPILER DESIGN',
  'DIGITAL LOGIC',
  'C PROGRAMMING',
  'GENERAL APTITUDE',
  'THEORY OF COMPUTATION',
  'DATABASES?',
  'DBMS',
  'COMPUTER ORGANIZATION(?: AND ARCHITECTURE)?'
].join('|');

function formatStepByStepSolution(raw) {
  if (typeof raw !== 'string' || !raw.trim()) return '';

  let text = raw.trim();

  // 1. Strip PDF page artifacts and book titles
  text = text.replace(/<!--\s*PAGE\s*\d+\s*-->/gi, '');
  text = text.replace(new RegExp(`\\s*\\b(?:${subjectNames})\\s+\\d{1,4}\\b`, 'gi'), '');
  text = text.replace(new RegExp(`\\s*\\b\\d{1,4}\\s+(?:${subjectNames})\\b`, 'gi'), '');
  text = text.replace(/\bGENERAL APTITUDE\b/gi, '');
  text = text.replace(/Check Out Our Gate Courses.*$/gim, '');

  // 2. Normalize OCR bullets (●, ?, •, ·, ▪) to markdown bullet lines
  text = text.replace(/^[ \t]*[●•▪·\?][ \t]+/gm, '\n* ');
  text = text.replace(/([^\n])[ \t]*[●•▪·][ \t]+/g, '$1\n\n* ');

  // 3. Format Methods (Method 1:, Method 2:, Alternative Approach:, Calculus Approach:)
  text = text.replace(/^[ \t]*(Method\s*\d+[^:\n]*:?|Alternative\s+Approach[^:\n]*:?)/gmi, '\n\n### 💡 $1\n\n');

  // 4. Format Steps (Step 1:, Step 2:, Step 3:, Case 1:, Case 2:)
  text = text.replace(/^[ \t]*(Step\s*\d+[^:\n]*:?|Case\s*\d+[^:\n]*:?)/gmi, '\n\n#### 🔷 $1\n\n');

  // 5. Format Given Data / Objective Function
  text = text.replace(/^[ \t]*(Given\s+Data:?|Given:?)/gmi, '\n\n### 📋 Given Data\n\n');
  text = text.replace(/^[ \t]*(Objective\s+Function[^:\n]*:?)/gmi, '\n\n* **$1** ');

  // 6. Ensure derivation / equation lines don't collapse into a single line
  const lines = text.split(/\r?\n/);
  const formattedLines = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const t = l.trim();
    // If line is an algebraic equation line, e.g. "4 - 100q2 = 0", "q2 = 25", "4q2 = 100"
    if (/^[0-9a-zA-Z_()\+\-\*\/\s\.\√\≤\≥\=]+$/.test(t) && /=/.test(t) && t.length < 50 && !t.startsWith('#')) {
      formattedLines.push(t + '  '); // Two trailing spaces for markdown line break
    } else {
      formattedLines.push(l);
    }
  }
  text = formattedLines.join('\n');

  // 7. Format Final Conclusion & Correct Option
  text = text.replace(/(?:\r?\n|^)\s*(Correct\s+Option\s*:?\s*\(?[A-D]\)?[\s\w\d\.\-]*)/gi, '\n\n---\n\n**✅ $1**\n\n');

  // Clean consecutive empty newlines
  text = text.replace(/\n{3,}/g, '\n\n').trim();

  return text;
}

const q = pyqs.find(x => x.question_text.includes('variable cost (V) of manufacturing'));
const formatted = formatStepByStepSolution(q.explanation);
const parsedHtml = marked.parse(formatted, { gfm: true, breaks: false });

console.log("=== PARSED HTML OF FORMATTED STEP-BY-STEP ===");
console.log(parsedHtml);
