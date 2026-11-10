const fs = require('fs');
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

  return s;
}

function cleanOption(text) {
  if (typeof text !== 'string') return text;
  let s = cleanText(text);

  let prev = '';
  let iterations = 0;
  while (prev !== s && iterations < 10) {
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

const q11 = pyqs.find(x => x.id === 'data-structures-topic-4-m4-q11');
console.log("data-structures-topic-4-m4-q11 Opt 3 cleaned:", JSON.stringify(cleanOption(q11.options[3])));

let modifiedCount = 0;
const diffs = [];

pyqs.forEach(q => {
  if (Array.isArray(q.options)) {
    q.options.forEach((opt, idx) => {
      if (typeof opt === 'string') {
        const cleaned = cleanOption(opt);
        if (cleaned !== opt) {
          modifiedCount++;
          if (diffs.length < 25) {
            diffs.push({
              id: q.id,
              idx,
              before: opt,
              after: cleaned
            });
          }
        }
      }
    });
  }
});

console.log(`Total options cleaned: ${modifiedCount}`);
