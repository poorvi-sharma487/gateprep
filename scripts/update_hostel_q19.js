const fs = require('fs');
const path = require('path');

const pyqsPath = path.join(__dirname, '..', 'pyqs', 'gate_pyqs_database.json');
const allPyqs = JSON.parse(fs.readFileSync(pyqsPath, 'utf8'));

let updated = 0;
for (const q of allPyqs) {
  if (q.id === 'general-aptitude-topic-4-m4-q19') {
    q.gate_year = "GATE CSE - 2019 MCQ (2-MARKS)";
    q.question_text = `Three of the five students allocated to a hostel put in special requests to the warden. Given the floor plan of the vacant rooms, select the allocation plan that will accommodate all their requests.

<div style="text-align:center;margin:18px 0;">
  <img src="/assets/images/questions/gate_2019_hostel_floor_plans.png" alt="Hostel Floor Plans (a), (b), (c), (d)" style="max-width:480px;width:100%;height:auto;border-radius:10px;box-shadow:0 3px 12px rgba(0,0,0,0.12);background:#fff;padding:8px;border:1px solid #e2e8f0;display:inline-block;">
</div>

**Request by X:** Due to pollen allergy, I want to avoid a wing next to the garden.  
**Request by Y:** I want to live as far from the washrooms as possible, since I am very sensitive to smell.  
**Request by Z:** I believe in Vaastu and so I want to stay in the South-west wing.

*(The shaded rooms are already occupied. WR is washroom. Options (A), (B), (C), and (D) correspond directly to floor plans (a), (b), (c), and (d) shown in the diagram.)*`;
    q.options = ["Plan (a)", "Plan (b)", "Plan (c)", "Plan (d)"];
    q.correct_option = 3;
    q.answer_key = "- (D)";
    q.explanation = `**Analysis of Requests:**
* **Request by X:** Wants to avoid a wing next to the garden (East wing has garden). Thus, X cannot be in rooms adjacent to the garden.
* **Request by Y:** Wants to be as far from washrooms (WR is located at West/North-West/South-West) as possible.
* **Request by Z:** Believes in Vaastu and wants to stay in the **South-west** wing.

Looking at allocation **Plan (d)**:
* Z is placed in the South-west wing.
* X is placed on the West wing (away from garden).
* Y is placed on the South-East side, farthest from washrooms.
All requests are satisfied in **Plan (d)**.

Therefore, the correct answer is **Plan (d)** (Option D).`;
    updated++;
  }
}

fs.writeFileSync(pyqsPath, JSON.stringify(allPyqs, null, 2), 'utf8');
console.log(`Updated ${updated} question(s) in gate_pyqs_database.json`);

// Now sync to db/seed-questions.js
const seedContent = `// Auto-generated seed file for GATEPrep
// Total authentic questions: ${allPyqs.length}

const seedQuestions = ${JSON.stringify(allPyqs, null, 2)};

module.exports = { seedQuestions };
`;

fs.writeFileSync(path.join(__dirname, '..', 'db', 'seed-questions.js'), seedContent, 'utf8');
console.log('Successfully synced db/seed-questions.js');
