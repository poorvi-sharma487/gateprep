import pypdf
import re
import json

reader = pypdf.PdfReader(r'C:\Users\HP\Downloads\GfG PYQ Book.pdf')

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
    for m in re.finditer(r'(\d+)\s*\.\s*\(([^)]+)\)', ak_match.group(1)):
        answer_keys[int(m.group(1))] = m.group(2).strip()

# Pattern for questions: Q1., Q70 , etc.
pattern = re.compile(r'(?:^|\n)\s*Q\s*(\d+)[\.\s]+', re.DOTALL)
split_indices = []
for m in pattern.finditer(full_text):
    split_indices.append((int(m.group(1)), m.start(), m.end()))

print(f"Total split points: {len(split_indices)}")
pdf_questions = {}
for i in range(len(split_indices)):
    q_num, start, end = split_indices[i]
    next_start = split_indices[i+1][1] if i + 1 < len(split_indices) else len(full_text)
    q_body = full_text[end:next_start].strip()
    
    # Check options
    opt_a_match = re.search(r'(?:^|\n)\s*\([aA]\)[\.\:]?\s*', q_body)
    if opt_a_match:
        q_text = q_body[:opt_a_match.start()].strip()
        opts_block = q_body[opt_a_match.start():].strip()
        opt_parts = re.split(r'(?:^|\n)\s*\(([a-dA-D])\)[\.\:]?\s*', opts_block)
        opts = []
        for j in range(1, len(opt_parts), 2):
            text = ' '.join(opt_parts[j+1].strip().split())
            opts.append(text)
    else:
        q_text = q_body.strip()
        opts = []
        
    pdf_questions[q_num] = {
        'num': q_num,
        'question_text': q_text,
        'options': opts,
        'answer_key': answer_keys.get(q_num, '')
    }

print(f"Extracted all {len(pdf_questions)} questions from PDF!")

# Now load database JSON
db_path = r'C:\Users\HP\.gemini\antigravity\scratch\gateprep\pyqs\gate_pyqs_database.json'
with open(db_path, 'r', encoding='utf8') as f:
    db_questions = json.load(f)

# Compare and check mismatches for m1 questions
mismatches = 0
for db_q in db_questions:
    if db_q.get('id', '').startswith('theory-of-computation-theory-of-computation-m1-'):
        q_num = db_q.get('question_number')
        if q_num in pdf_questions:
            pdf_q = pdf_questions[q_num]
            # Check if options differ significantly
            db_opts = db_q.get('options') or []
            pdf_opts = pdf_q['options']
            if len(db_opts) != len(pdf_opts):
                mismatches += 1
                print(f"Q{q_num} options length mismatch: DB has {len(db_opts)}, PDF has {len(pdf_opts)}")
            elif db_opts != pdf_opts:
                mismatches += 1
                if mismatches <= 10:
                    print(f"Q{q_num} options content mismatch:")
                    print(f"   DB:  {db_opts[:2]}")
                    print(f"   PDF: {pdf_opts[:2]}")

print(f"Total mismatches found in m1: {mismatches} out of {len(pdf_questions)}")
