const fs = require('fs');
const pyqs = JSON.parse(fs.readFileSync('./pyqs/gate_pyqs_database.json', 'utf8'));
console.log("Total questions:", pyqs.length);

const suspectRegex = /(?:GATE\s+(?:CSE|IT|DA)|ALGORITHMS|DATA STRUCTURE|OPERATING SYSTEM|COMPUTER NETWORK|DISCRETE MATHEMATICS|ENGINEERING MATHEMATICS|COMPILER DESIGN|DIGITAL LOGIC|C PROGRAMMING|GENERAL APTITUDE|Check Out Our Gate Courses|ANSWER KEY|\b\d{2,4}\s+[A-Z\s]{4,})/i;

let matchCount = 0;
const samples = [];
pyqs.forEach((q, idx) => {
  if (Array.isArray(q.options)) {
    q.options.forEach((opt, oIdx) => {
      if (typeof opt === "string" && suspectRegex.test(opt)) {
        matchCount++;
        if (samples.length < 20) {
          samples.push({ id: q.id, optIdx: oIdx, opt });
        }
      }
    });
  }
});

console.log("Found matching suspect options:", matchCount);
console.log("Samples:\n" + JSON.stringify(samples, null, 2));
