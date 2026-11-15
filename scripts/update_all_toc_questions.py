import pypdf
import re
import json
import os

pdf_path = r'C:\Users\HP\Downloads\GfG PYQ Book.pdf'
db_path = r'C:\Users\HP\.gemini\antigravity\scratch\gateprep\pyqs\gate_pyqs_database.json'
seed_path = r'C:\Users\HP\.gemini\antigravity\scratch\gateprep\db\seed-questions.js'

reader = pypdf.PdfReader(pdf_path)

# Extract pages 197 to 212 (index 196 to 211)
pages_text = [reader.pages[p].extract_text() for p in range(196, 211)]
clean_pages = []
for p in pages_text:
    p = re.sub(r'\n\s*\d+\s*\n\s*THEORY OF COMPUTATION\s*\n\s*Link to GfG[^\n]*\n', '\n', p)
    p = re.sub(r'\n\s*\d+\s*\n\s*1 Regular Language and Finite Automata[^\n]*\n', '\n', p)
    p = re.sub(r'Link to GfG corresponding Short Notes:[^\n]*', '', p)
    p = re.sub(r'Check Out Our GATE Courses[^\n]*', '', p)
    clean_pages.append(p)
full_text = '\n'.join(clean_pages)

# Extract Answer Keys from page 212
sol_text = '\n'.join([reader.pages[p].extract_text() for p in range(211, 224)])
ak_match = re.search(r'ANSWER KEY([\s\S]*?)HINTS AND SOLUTIONS', sol_text)
answer_keys = {}
if ak_match:
    for m in re.finditer(r'(\d+)\s*\.\s*(?:\(([^)]+)\)|([A-Za-z0-9\/]+))', ak_match.group(1)):
        num = int(m.group(1))
        ans = (m.group(2) or m.group(3)).strip()
        answer_keys[num] = ans

# Extract explanations
exp_parts = re.split(r'\n\s*(\d+)\s*\.\s*Answer\s*[:;]?', sol_text[ak_match.end():] if ak_match else sol_text)
explanations = {}
for i in range(1, len(exp_parts), 2):
    num = int(exp_parts[i])
    exp = exp_parts[i+1].strip()
    exp = re.sub(r'\n\s*\d+\s*\n\s*THEORY OF COMPUTATION[^\n]*', '', exp)
    exp = re.sub(r'Link to GfG[^\n]*', '', exp)
    explanations[num] = exp

# Split questions
pattern = re.compile(r'(?:^|\n)\s*Q\s*(\d+)[\.\s]+', re.DOTALL)
split_indices = []
for m in pattern.finditer(full_text):
    split_indices.append((int(m.group(1)), m.start(), m.end()))

pdf_questions = {}
for i in range(len(split_indices)):
    q_num, start, end = split_indices[i]
    next_start = split_indices[i+1][1] if i + 1 < len(split_indices) else len(full_text)
    q_body = full_text[end:next_start].strip()
    
    # Strip any trailing GATE tags
    gate_year_match = re.search(r'(GATE\s*CSE[^\n]*)', q_body)
    gate_year = gate_year_match.group(1).strip() if gate_year_match else "GATE CSE"
    q_body = re.sub(r'\n\s*GATE\s*CSE[^\n]*', '', q_body)
    
    # Identify options
    opt_a_match = re.search(r'(?:^|\n)\s*(?:\([aA]\)|a\)\.?|\([aA]\)\.)\s*', q_body)
    if opt_a_match:
        q_text = q_body[:opt_a_match.start()].strip()
        opts_block = q_body[opt_a_match.start():].strip()
        
        opt_matches = list(re.finditer(r'(?:^|\n|\s{2,})\s*(?:\(([a-dA-D])\)[\.\:]?|([a-dA-D])\)[\.\:]?)\s*([\s\S]*?)(?=(?:\n|\s{2,})\s*(?:\([a-dA-D]\)|[a-dA-D]\))|\Z)', opts_block))
        opts = []
        for om in opt_matches:
            val = ' '.join(om.group(3).strip().split())
            val = re.sub(r'GATE\s*CSE[^\n]*', '', val).strip()
            if val:
                opts.append(val)
    else:
        q_text = q_body.strip()
        opts = []
        
    ans_key = answer_keys.get(q_num, '')
    
    # Determine question type
    if not opts or re.match(r'^\d+$', ans_key):
        q_type = 'NAT'
    elif ',' in ans_key:
        q_type = 'MSQ'
    else:
        q_type = 'MCQ'
        
    correct_opt = 0
    if ans_key:
        first_letter = re.search(r'[a-dA-D]', ans_key)
        if first_letter:
            correct_opt = ord(first_letter.group(0).lower()) - ord('a')
            
    pdf_questions[q_num] = {
        'num': q_num,
        'question_text': q_text,
        'options': opts,
        'gate_year': gate_year,
        'answer_key': ans_key,
        'correct_option': correct_opt,
        'type': q_type,
        'explanation': explanations.get(q_num, '')
    }

# Specific overrides & diagrams for known questions
if 1 in pdf_questions:
    pdf_questions[1]['options'] = ["32", "65", "1", "128"]
    pdf_questions[1]['correct_option'] = 1
    pdf_questions[1]['answer_key'] = "B, D"
    pdf_questions[1]['gate_year'] = "GATE CSE - 2024 SET-1 MSQ (1-MARKS)"

if 2 in pdf_questions:
    pdf_questions[2]['options'] = [
        "L1 is regular",
        "L1 ∪ L2 is regular",
        "L2 is context-free",
        "L1 is context-free"
    ]
    pdf_questions[2]['correct_option'] = 2
    pdf_questions[2]['answer_key'] = "C"
    pdf_questions[2]['gate_year'] = "GATE CSE - 2024 SET-1 MSQ (2-MARKS)"

if 3 in pdf_questions:
    pdf_questions[3]['question_text'] = (
        "Consider the following two finite automata $D_1$ and $D_2$ (as shown in the figure).\n\n"
        "<div style=\"text-align:center;margin:18px 0;\">\n"
        "  <img src=\"/assets/images/questions/toc_q3_automata.png\" alt=\"Finite Automata D1 and D2\" style=\"max-width:520px;width:100%;height:auto;border-radius:10px;box-shadow:0 3px 12px rgba(0,0,0,0.12);background:#fff;padding:8px;border:1px solid #e2e8f0;display:inline-block;\">\n"
        "</div>\n\n"
        "Which of the following statements is/are true?"
    )
    pdf_questions[3]['options'] = [
        "L(D1) = L(D2)",
        "L(D1) is a proper subset of L(D2)",
        "L(D1) ∩ L(D2) = {ε}",
        "(L(D1) ∪ L(D2))* consists of all strings in {0,1}* whose length is divisible by 3"
    ]
    pdf_questions[3]['correct_option'] = 2
    pdf_questions[3]['answer_key'] = "C, D"
    pdf_questions[3]['gate_year'] = "GATE CSE - 2024 SET-2 MSQ (2-MARKS)"

if 4 in pdf_questions:
    pdf_questions[4]['options'] = [
        "𝐿 may have an accepting NFA with < 𝑛 states.",
        "𝐿 may have an accepting DFA with < 𝑛 states.",
        "There exists a DFA with ≤ 2ⁿ states that accepts 𝐿.",
        "Every DFA that accepts 𝐿 has > 2ⁿ states."
    ]
    pdf_questions[4]['correct_option'] = 3
    pdf_questions[4]['answer_key'] = "D"

if 6 in pdf_questions:
    pdf_questions[6]['options'] = [
        "Both 𝐿1 and 𝐿2 are regular languages.",
        "𝐿1 is a regular language but 𝐿2 is not a regular language.",
        "𝐿1 is not a regular language but 𝐿2 is a regular language.",
        "Neither 𝐿1 nor 𝐿2 is a regular language."
    ]
    pdf_questions[6]['correct_option'] = 2
    pdf_questions[6]['answer_key'] = "C"

if 7 in pdf_questions:
    pdf_questions[7]['question_text'] = (
        "Consider the following deterministic finite automaton (DFA) defined over the alphabet $\\Sigma = \\{a, b\\}$.\n\n"
        "<div style=\"text-align:center;margin:18px 0;\">\n"
        "  <img src=\"/assets/images/questions/toc_q7_dfa.png\" alt=\"DFA Diagram\" style=\"max-width:440px;width:100%;height:auto;border-radius:10px;box-shadow:0 3px 12px rgba(0,0,0,0.12);background:#fff;padding:8px;border:1px solid #e2e8f0;display:inline-block;\">\n"
        "</div>\n\n"
        "Identify which of the following language(s) is/are accepted by the given DFA:"
    )
    pdf_questions[7]['options'] = [
        "The set of all strings containing an even number of $b$'s.",
        "The set of all strings containing the pattern $bab$.",
        "The set of all strings ending with the pattern $bab$.",
        "The set of all strings not containing the pattern $aba$."
    ]
    pdf_questions[7]['correct_option'] = 2
    pdf_questions[7]['answer_key'] = "C"

if 8 in pdf_questions:
    pdf_questions[8]['question_text'] = (
        "Consider a finite state machine (FSM) with one input $X$ and one output $f$, represented by the given state transition table.\n\n"
        "<div style=\"text-align:center;margin:18px 0;\">\n"
        "  <img src=\"/assets/images/questions/toc_q8_fsm_table.png\" alt=\"FSM Transition Table\" style=\"max-width:340px;width:100%;height:auto;border-radius:10px;box-shadow:0 3px 12px rgba(0,0,0,0.12);background:#fff;padding:8px;border:1px solid #e2e8f0;display:inline-block;\">\n"
        "</div>\n\n"
        "The minimum number of states required to realize this FSM is _______."
    )
    pdf_questions[8]['options'] = []
    pdf_questions[8]['answer_key'] = "5"
    pdf_questions[8]['type'] = "NAT"

if 9 in pdf_questions:
    pdf_questions[9]['options'] = [
        "(i) – (a), (ii) – (b), and (iii) – (c)",
        "(i) – (b), (ii) – (a), and (iii) – (c)",
        "(i) – (b), (ii) – (c), and (iii) – (a)",
        "(i) – (a), (ii) – (c), and (iii) – (b)"
    ]
    pdf_questions[9]['correct_option'] = 1
    pdf_questions[9]['answer_key'] = "B, C"

if 12 in pdf_questions:
    pdf_questions[12]['question_text'] = (
        "Consider the 5-state DFA $M$ accepting the language $L(M) \\subset (0 + 1)^*$ shown below.\n\n"
        "<div style=\"text-align:center;margin:18px 0;\">\n"
        "  <img src=\"/assets/images/questions/toc_q12_dfa.png\" alt=\"5-State DFA M\" style=\"max-width:240px;width:100%;height:auto;border-radius:10px;box-shadow:0 3px 12px rgba(0,0,0,0.12);background:#fff;padding:8px;border:1px solid #e2e8f0;display:inline-block;\">\n"
        "</div>\n\n"
        "For any string $w \\in (0 + 1)^*$, let $n_0(w)$ be the number of 0's in $w$. Which of the following statements is/are true?"
    )

if 15 in pdf_questions:
    pdf_questions[15]['options'] = [
        "0∗1(0 + 10∗1)∗",
        "0∗ (10∗11) ∗ 0 ∗",
        "0 ∗1(010∗1)∗ 0∗",
        "0(1 + 0∗10∗1)∗0 ∗"
    ]
    pdf_questions[15]['correct_option'] = 0
    pdf_questions[15]['answer_key'] = "A"

if 16 in pdf_questions:
    pdf_questions[16]['options'] = [
        "(00)∗ + 1(11)∗",
        "0∗ + (1 + 0(00)∗ )(11)∗",
        "(00)∗ + (1 + (00)∗ )(11)∗",
        "0+ + 1(11)∗ + 0(11)∗"
    ]
    pdf_questions[16]['correct_option'] = 1
    pdf_questions[16]['answer_key'] = "B"

if 20 in pdf_questions:
    pdf_questions[20]['options'] = [
        "1(0*11)*",
        "0(0 + 1)*",
        "1(0 + 11)*",
        "1(110*)*"
    ]
    pdf_questions[20]['correct_option'] = 2
    pdf_questions[20]['answer_key'] = "C"

# Now update gate_pyqs_database.json
with open(db_path, 'r', encoding='utf8') as f:
    all_pyqs = json.load(f)

updated_count = 0
for q in all_pyqs:
    if q.get('id', '').startswith('theory-of-computation-theory-of-computation-m1-'):
        q_num = q.get('question_number')
        if q_num in pdf_questions:
            pdf_q = pdf_questions[q_num]
            # Always ensure correct topic_slug: finite-automata
            q['topic_slug'] = 'finite-automata'
            q['topic_name'] = 'Regular Language and Finite Automata'
            
            # Update options if pdf has valid options
            if pdf_q['options']:
                q['options'] = pdf_q['options']
                q['type'] = pdf_q['type']
            elif pdf_q['type'] == 'NAT':
                q['options'] = []
                q['type'] = 'NAT'
                
            if pdf_q['answer_key']:
                q['answer_key'] = pdf_q['answer_key']
                q['correct_option'] = pdf_q['correct_option']
                
            if pdf_q['explanation']:
                q['explanation'] = pdf_q['explanation']
                
            if 'toc_q' in pdf_q['question_text']:
                q['question_text'] = pdf_q['question_text']
            elif pdf_q['question_text'] and len(pdf_q['question_text']) > 20:
                # Keep rich question_text
                pass
                
            updated_count += 1

print(f"Updated {updated_count} questions in database JSON.")

with open(db_path, 'w', encoding='utf8') as f:
    json.dump(all_pyqs, f, indent=2, ensure_ascii=False)

# Sync with db/seed-questions.js
seed_content = f"// Auto-generated seed file for GATEPrep\n// Total authentic questions: {len(all_pyqs)}\n\nconst seedQuestions = {json.dumps(all_pyqs, indent=2, ensure_ascii=False)};\n\nmodule.exports = {{ seedQuestions }};\n"
with open(seed_path, 'w', encoding='utf8') as f:
    f.write(seed_content)

print(f"Successfully synced {seed_path}!")
