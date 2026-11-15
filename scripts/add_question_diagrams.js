"use strict";

const fs = require('fs');
const path = require('path');

const jsonPath = path.resolve(__dirname, '..', 'pyqs', 'gate_pyqs_database.json');
const seedPath = path.resolve(__dirname, '..', 'db', 'seed-questions.js');

const pyqs = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// 1. Q19 - Hostel allocation with full diagrams
const q19 = pyqs.find(x => x.id === 'general-aptitude-topic-4-m4-q19');
if (q19) {
  q19.question_text = `Three of the five students allocated to a hostel put in special requests to the warden. Given the floor plan of the vacant rooms, select the allocation plan that will accommodate all their requests.

<div style="text-align:center;margin:18px 0;">
  <img src="/assets/images/questions/gate_2019_hostel_floor_plans.png" alt="Hostel Floor Plans (a), (b), (c), (d)" style="max-width:320px;width:100%;border-radius:10px;box-shadow:0 3px 12px rgba(0,0,0,0.12);background:#fff;padding:8px;border:1px solid #e2e8f0;display:inline-block;">
</div>

**Request by X:** Due to pollen allergy, I want to avoid a wing next to the garden.  
**Request by Y:** I want to live as far from the washrooms as possible, since I am very sensitive to smell.  
**Request by Z:** I believe in Vaastu and so I want to stay in the South-west wing.

*(The shaded rooms are already occupied. WR is washroom. Options (A), (B), (C), and (D) correspond directly to floor plans (a), (b), (c), and (d) shown in the diagram.)*`;

  q19.options = [
    "Plan (a)",
    "Plan (b)",
    "Plan (c)",
    "Plan (d)"
  ];
  q19.correct_option = 3;
}

// 2. Q17 - Annular ring with circles diagram
const q17 = pyqs.find(x => x.id === 'general-aptitude-topic-4-m4-q17');
if (q17) {
  q17.question_text = `The figure below shows an annular ring with outer and inner radii as $b$ and $a$, respectively. The annular space has been painted in the form of identical circles touching the outer and inner periphery of annular space. If maximum $n$ number of circles can be painted, then the unpainted area available in annular space is _______:

<div style="text-align:center;margin:18px 0;">
  <img src="/assets/images/questions/gate_2019_annular_ring.png" alt="Annular Ring Diagram" style="max-width:280px;width:100%;border-radius:10px;box-shadow:0 3px 12px rgba(0,0,0,0.12);background:#fff;padding:8px;border:1px solid #e2e8f0;display:inline-block;">
</div>`;

  q17.options = [
    "π [(b² − a²) − (n/4)(b − a)²]",
    "π [(b² − a²) − n(b − a)²]",
    "π [(b² − a²) + (n/4)(b − a)²]",
    "π [(b² − a²) + n(b − a)²]"
  ];
  q17.correct_option = 0;
}

// Save to JSON database
fs.writeFileSync(jsonPath, JSON.stringify(pyqs, null, 2), 'utf8');

// Save to seed-questions.js
const seedContent = `"use strict";\n\nconst seedQuestions = ${JSON.stringify(pyqs, null, 2)};\n\nmodule.exports = { seedQuestions };\n`;
fs.writeFileSync(seedPath, seedContent, 'utf8');

console.log("Successfully attached diagrams and updated options for Q17 and Q19!");
