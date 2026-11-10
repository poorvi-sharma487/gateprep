import pypdf
import json
import re
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

print("Loading database and PDF...")
with open('pyqs/gate_pyqs_database.json', 'r', encoding='utf-8') as f:
    pyqs = json.load(f)

reader = pypdf.PdfReader('GfG PYQ Book.pdf')
page_texts = [page.extract_text() for page in reader.pages]
full_pdf_text = "\n---PAGE_BREAK---\n".join(page_texts)

repaired_mcq = 0
converted_nat = 0

for q in pyqs:
    q_text = q['question_text'].strip()
    
    # Clean question text of hyphenated line breaks from PDF
    cleaned_q = re.sub(r'(\b[a-zA-Z]+)\s*-\s*\n\s*([a-zA-Z]+\b)', r'\1-\2', q_text)
    # Fix broken words like "cylind er", "re move", etc.
    cleaned_q = re.sub(r'\bcylind\s+er\b', 'cylinder', cleaned_q, flags=re.I)
    cleaned_q = re.sub(r'\bre\s+move\b', 'remove', cleaned_q, flags=re.I)
    cleaned_q = re.sub(r'\bmicro\s*-\s*operations\b', 'micro-operations', cleaned_q, flags=re.I)
    q['question_text'] = cleaned_q

    ans_key = (q.get('answer_key') or '').strip().upper()
    # Check if answer key is single letter A, B, C, D
    is_letter_key = bool(re.search(r'^[A-D]$|\b\([A-D]\)\b|\bAnswer:\s*\(?([A-D])\)?', ans_key)) or bool(re.search(r'\bAnswer:\s*\(?([A-D])\)?', q.get('explanation') or ''))

    # If it is clearly NAT
    is_nat = (not is_letter_key) and (
        '____' in q_text or 'is .' in q_text or 'is :' in q_text or 
        'output of the program is' in q_text.lower() or 
        'minimum number' in q_text.lower() or 'maximum number' in q_text.lower() or
        bool(re.search(r'\bAnswer:\s*[-+]?[0-9]*\.?[0-9]+\b', q.get('explanation') or ''))
    )

    # Let's check options
    curr_opts = q.get('options') or []
    has_dummy_opts = (len(curr_opts) == 4 and curr_opts[0] in ['Option A', 'I only', '(A)']) or len(curr_opts) == 0

    if is_nat:
        q['type'] = 'NAT'
        q['options'] = []
        converted_nat += 1
        continue

    # Try to find real options for MCQs
    # Take first 40 chars of question
    search_snip = q_text[:50].split('\n')[0].strip()
    search_clean = re.sub(r'[^a-zA-Z0-9\s]', '', search_snip)[:30].strip()

    if len(search_clean) > 8:
        pos = full_pdf_text.find(search_clean)
        if pos != -1:
            # Search strictly AFTER the question position
            after_text = full_pdf_text[pos + len(search_clean):pos + len(search_clean) + 3000]
            
            # Remove PDF headers / footers
            after_clean = re.sub(r'Computer Organization[\s\S]*?Secure Your Dream Rank!', '', after_text)
            after_clean = re.sub(r'Link to GfG[\s\S]*?Short Notes[^\n]*', '', after_clean)
            after_clean = re.sub(r'Check Out Our GATE Courses[^\n]*', '', after_clean)
            after_clean = re.sub(r'GATE CSE – \d{4}[^\n]*', '', after_clean)
            after_clean = re.sub(r'---PAGE_BREAK---', '', after_clean)

            # Option regex: (a) opt1 (b) opt2 (c) opt3 (d) opt4
            opt_matches = list(re.finditer(r'(?:^|\n)\s*(?:\(?([a-dA-D])\)|\b([a-dA-D])\.)\s+([\s\S]*?)(?=(?:\n\s*(?:\(?[a-dA-D]\)|[a-dA-D]\.)|\n\s*Q\s*\d+|\n\s*Answer:|\n\s*Explanation:|\n\s*Link to|\Z))', after_clean))
            
            extracted = {}
            for om in opt_matches:
                letter = (om.group(1) or om.group(2)).upper()
                txt = om.group(3).strip()
                txt = re.sub(r'\s+', ' ', txt)
                if letter not in extracted and len(txt) > 0 and len(txt) < 300:
                    extracted[letter] = txt

            if 'A' in extracted and 'B' in extracted and 'C' in extracted and 'D' in extracted:
                q['options'] = [extracted['A'], extracted['B'], extracted['C'], extracted['D']]
                q['type'] = 'MCQ'
                repaired_mcq += 1

print(f"Repaired MCQs: {repaired_mcq}, NAT questions: {converted_nat}")

with open('pyqs/gate_pyqs_database.json', 'w', encoding='utf-8') as f:
    json.dump(pyqs, f, indent=2, ensure_ascii=False)

print("Saved repaired database successfully!")
