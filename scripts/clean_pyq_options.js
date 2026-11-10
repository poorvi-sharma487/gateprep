"use strict";

const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

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

function cleanText(text) {
  if (typeof text !== 'string') return text;
  let s = text.trim();

  // Fix broken spacing in common words from OCR/PDF artifacts
  s = s.replace(/\bu\s+ntil\b/gi, 'until');
  s = s.replace(/\bc\s+onst\b/gi, 'const');
  s = s.replace(/\bm\s+ultithreaded\b/gi, 'multithreaded');
  s = s.replace(/\bfo\s+r\b/gi, 'for');
  s = s.replace(/\bwhil\s+e\b/gi, 'while');
  s = s.replace(/\bretur\s+n\b/gi, 'return');
  s = s.replace(/\bint\s+eger\b/gi, 'integer');
  s = s.replace(/\bProces\s+s\b/gi, 'Process');
  s = s.replace(/\bprogra\s+m\b/gi, 'program');
  s = s.replace(/\bexpressio\s+n\b/gi, 'expression');
  s = s.replace(/\boperato\s+r\b/gi, 'operator');
  s = s.replace(/\bexecutio\s+n\b/gi, 'execution');
  s = s.replace(/\bfunctio\s+n\b/gi, 'function');
  s = s.replace(/\bvariabl\s+e\b/gi, 'variable');
  s = s.replace(/\bconditio\s+n\b/gi, 'condition');
  s = s.replace(/\bstate\s+s\b/gi, 'states');
  s = s.replace(/\btransactio\s+n\b/gi, 'transaction');
  s = s.replace(/\bschedul\s+e\b/gi, 'schedule');
  s = s.replace(/\brelatio\s+n\b/gi, 'relation');
  s = s.replace(/\bgra\s+ph\b/gi, 'graph');
  s = s.replace(/\bmatri\s+x\b/gi, 'matrix');
  s = s.replace(/\bstrin\s+g\b/gi, 'string');
  s = s.replace(/\bpoin\s+ter\b/gi, 'pointer');

  return s;
}

function cleanOption(text) {
  if (typeof text !== 'string') return text;
  let s = cleanText(text);

  let prev = '';
  let iterations = 0;
  while (prev !== s && iterations < 12) {
    prev = s;
    iterations++;

    // 1. Promotional and Answer key trailers
    s = s.replace(/\s+Check Out Our Gate Courses.*$/gi, '');
    s = s.replace(/\s+ANSWER KEY\s*:?[\s\S]*$/gi, '');
    s = s.replace(/\s+HINTS?\s*&?\s*SOLUTIONS?[\s\S]*$/gi, '');

    // 2. Trailing page numbers + subject name, e.g. "328 OPERATING SYSTEMS", "8 C PROGRAMMING", "111 ALGORITHMS", "ALGORITHMS 105"
    s = s.replace(new RegExp(`\\s+\\d{1,4}\\s+(?:${subjectNames})\\s*$`, 'i'), '');
    s = s.replace(new RegExp(`\\s+(?:${subjectNames})\\s+\\d{1,4}\\s*$`, 'i'), '');
    s = s.replace(new RegExp(`\\s+(?:${subjectNames})\\s*$`, 'i'), '');

    // 3. Trailing GATE year / type / mark tags e.g.:
    // "GATE CSE - 2019 MCQ SET - 2(2-MARKS)", "GATE CSE 2009 || MCQ || 2 MARK", "GATE 2021 SET 2 || MCQ || 2-mark", "GATE IT – 2008 MCQ (2-MARKS)"
    s = s.replace(/\s+GATE\s*(?:CSE|IT|DA|CS|\d{4})[-\s\d\w(–—)\|:.]*(?:\(\s*\d+\s*[-–]?\s*MARKS?\s*\)|\d+\s*[-–]?\s*MARKS?)?[-\s\d\w(–—)\|:.]*$/gi, '');
    s = s.replace(/\s+(?:SET\s*[-–]\s*\d+\s*)?(?:MCQ|NAT|MSQ)\s*(?:\(\s*\d+\s*[-–]?\s*MARKS?\s*\)|\d+\s*[-–]?\s*MARKS?)?[-\s\d\w(–—)\|:.]*$/gi, '');

    // 4. Stray trailing pipe or dashes left over
    s = s.replace(/\s*(?:\|\||\||-|–)\s*$/g, '');

    s = s.trim();
  }

  return s;
}

function runCleanPipeline() {
  const jsonPath = path.resolve(__dirname, '..', 'pyqs', 'gate_pyqs_database.json');
  const pyqs = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  let cleanedOptionsCount = 0;
  let cleanedQuestionsCount = 0;

  pyqs.forEach(q => {
    // Clean question text
    if (q.question_text) {
      const cleanedQ = cleanText(q.question_text);
      if (cleanedQ !== q.question_text) {
        q.question_text = cleanedQ;
        cleanedQuestionsCount++;
      }
    }

    // Clean options
    if (Array.isArray(q.options)) {
      q.options = q.options.map((opt, idx) => {
        if (typeof opt === 'string') {
          const cleaned = cleanOption(opt);
          if (cleaned !== opt) {
            cleanedOptionsCount++;
            return cleaned;
          }
        }
        return opt;
      });
    }
  });

  // Save cleaned JSON
  fs.writeFileSync(jsonPath, JSON.stringify(pyqs, null, 2), 'utf8');
  console.log(`JSON Updated! Cleaned ${cleanedQuestionsCount} questions and ${cleanedOptionsCount} options.`);

  // Update SQLite Database if it exists
  const dbPath = path.resolve(__dirname, '..', 'db', 'gateprep.sqlite');
  if (fs.existsSync(dbPath)) {
    const db = new Database(dbPath);
    const updateStmt = db.prepare(`
      UPDATE questions
      SET question_text = ?, options = ?
      WHERE id = ?
    `);

    // Also update by matching text if IDs differ
    const updateByTextStmt = db.prepare(`
      UPDATE questions
      SET options = ?
      WHERE id = ?
    `);

    const rows = db.prepare("SELECT id, question_text, options FROM questions").all();
    let sqliteUpdated = 0;

    const runSqliteUpdate = db.transaction(() => {
      for (const row of rows) {
        let changed = false;
        let qText = row.question_text;
        const cleanedQText = cleanText(qText);
        if (cleanedQText !== qText) {
          qText = cleanedQText;
          changed = true;
        }

        let opts = [];
        try {
          opts = JSON.parse(row.options);
        } catch (e) {
          opts = [];
        }

        if (Array.isArray(opts)) {
          const newOpts = opts.map(opt => {
            if (typeof opt === 'string') {
              const c = cleanOption(opt);
              if (c !== opt) {
                changed = true;
                return c;
              }
            }
            return opt;
          });
          if (changed) {
            updateStmt.run(qText, JSON.stringify(newOpts), row.id);
            sqliteUpdated++;
          }
        }
      }
    });

    runSqliteUpdate();
    console.log(`SQLite Database Updated! Synchronized ${sqliteUpdated} rows in db/gateprep.sqlite.`);
    db.close();
  }
}

if (require.main === module) {
  runCleanPipeline();
}

module.exports = {
  cleanText,
  cleanOption,
  runCleanPipeline
};
