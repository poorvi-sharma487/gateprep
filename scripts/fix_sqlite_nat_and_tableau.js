const Database = require('better-sqlite3');
const fs = require('fs');

const db = new Database('db/gateprep.sqlite');

// 1. Ensure type and answer_key columns exist in questions table
const columns = db.prepare('PRAGMA table_info(questions)').all().map(c => c.name);
if (!columns.includes('type')) {
  db.exec("ALTER TABLE questions ADD COLUMN type TEXT DEFAULT 'MCQ'");
  console.log('Added type column to questions');
}
if (!columns.includes('answer_key')) {
  db.exec("ALTER TABLE questions ADD COLUMN answer_key TEXT DEFAULT ''");
  console.log('Added answer_key column to questions');
}

// 2. Load JSON pyqs map for fast lookup
const pyqs = JSON.parse(fs.readFileSync('pyqs/gate_pyqs_database.json', 'utf8'));
const pyqMapByText = new Map();
pyqs.forEach(q => {
  const normalized = q.question_text.slice(0, 80).trim().toLowerCase();
  pyqMapByText.set(normalized, q);
});

// Young tableau text with matrix
const updatedYoungTableauText = `A Young tableau is a 2D array of integers increasing from left to right and from top to bottom. Any unfilled entries are marked with $\\infty$, and hence there cannot be any entry to the right of, or below a $\\infty$. The following Young tableau consists of unique entries:

$$\\begin{matrix} 
1 & 2 & 5 & 14 \\\\ 
3 & 4 & 6 & 23 \\\\ 
10 & 12 & 18 & 25 \\\\ 
31 & \\infty & \\infty & \\infty 
\\end{matrix}$$

When an element is removed from a Young tableau, other elements should be moved into its place so that the resulting table is still a Young tableau (unfilled entries may be filled with a $\\infty$). The minimum number of entries (other than 1) to be shifted, to remove 1 from the given Young tableau is ____.`;

// Update Young tableau in pyqs JSON database
let ytJsonUpdated = false;
pyqs.forEach(q => {
  if (q.question_text.includes('Young tableau')) {
    q.question_text = updatedYoungTableauText;
    q.options = [];
    q.type = 'NAT';
    q.answer_key = '5';
    ytJsonUpdated = true;
  }
});
if (ytJsonUpdated) {
  fs.writeFileSync('pyqs/gate_pyqs_database.json', JSON.stringify(pyqs, null, 2), 'utf8');
  console.log('Updated Young tableau in pyqs/gate_pyqs_database.json');
}

// 3. Update all questions in sqlite
const allQuestions = db.prepare('SELECT id, question_text, options, explanation FROM questions').all();
let natFixedCount = 0;
let ytFixedCount = 0;

const updateStmt = db.prepare(`
  UPDATE questions 
  SET question_text = ?, options = ?, type = ?, answer_key = ?
  WHERE id = ?
`);

const tx = db.transaction(() => {
  for (const q of allQuestions) {
    let opts = [];
    try {
      opts = JSON.parse(q.options || '[]');
    } catch (e) {
      opts = [];
    }

    const isSingleLetter = Array.isArray(opts) && opts.length > 0 && opts.every(o => /^[A-D]$/i.test(String(o).trim()));
    const isYt = q.question_text.includes('Young tableau');

    let qText = isYt ? updatedYoungTableauText : q.question_text;
    if (isYt) ytFixedCount++;

    if (isSingleLetter || opts.length === 0 || isYt) {
      // Look up answer key
      let ansKey = '';
      const match = (q.explanation || '').match(/\[Official GATE Answer:\s*([^\]]+)\]/i);
      if (match) {
        ansKey = match[1].trim();
      }

      const norm = q.question_text.slice(0, 80).trim().toLowerCase();
      const jsonQ = pyqMapByText.get(norm);
      if (jsonQ && jsonQ.answer_key) {
        ansKey = jsonQ.answer_key;
      }
      if (isYt) ansKey = '5';

      updateStmt.run(qText, '[]', 'NAT', ansKey, q.id);
      natFixedCount++;
    } else {
      updateStmt.run(qText, JSON.stringify(opts), 'MCQ', '', q.id);
    }
  }
});

tx();
console.log(`Updated SQLite database: ${natFixedCount} NAT questions converted to options:[], ${ytFixedCount} Young tableau questions repaired with matrix.`);

db.close();
