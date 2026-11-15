import pypdf
import re
import json

reader = pypdf.PdfReader(r'C:\Users\HP\Downloads\GfG PYQ Book.pdf')

pages_text = []
for p in range(196, 211):
    pages_text.append(reader.pages[p].extract_text())

# Clean noise
clean_pages = []
for p in pages_text:
    p = re.sub(r'\n\s*\d+\s*\n\s*THEORY OF COMPUTATION\s*\n\s*Link to GfG[^\n]*\n', '\n', p)
    p = re.sub(r'\n\s*\d+\s*\n\s*1 Regular Language and Finite Automata[^\n]*\n', '\n', p)
    p = re.sub(r'Link to GfG corresponding Short Notes:[^\n]*', '', p)
    p = re.sub(r'Check Out Our GATE Courses[^\n]*', '', p)
    clean_pages.append(p)

full_text = '\n'.join(clean_pages)

# Let's split on Q1., Q2., ..., Q79.
# We can find all positions of `Q<num>.`
pattern = re.compile(r'(?:^|\n)\s*(Q(\d+)\..*?)(?=(?:\n\s*Q\d+\.|\Z))', re.DOTALL)
matches = list(pattern.finditer(full_text))

print(f"Found {len(matches)} question blocks")

parsed_questions = {}
for m in matches:
    q_full = m.group(1).strip()
    q_num = int(m.group(2))
    
    # Separate question text and options
    # Options usually start with (a), (b), (c), (d)
    # Let's find where options begin
    opt_a_match = re.search(r'(?:^|\n)\s*\([aA]\)[\.\:]?\s*', q_full)
    if opt_a_match:
        q_text = q_full[:opt_a_match.start()].strip()
        opts_block = q_full[opt_a_match.start():].strip()
        
        # Extract options (a), (b), (c), (d)
        opt_parts = re.split(r'(?:^|\n)\s*\(([a-dA-D])\)[\.\:]?\s*', opts_block)
        opts = []
        # opt_parts: ['', 'a', 'text a', 'b', 'text b', ...]
        for i in range(1, len(opt_parts), 2):
            letter = opt_parts[i].lower()
            text = opt_parts[i+1].strip()
            # Clean newlines inside option
            text = ' '.join(text.split())
            opts.append(text)
    else:
        q_text = q_full.strip()
        opts = []
        
    # Clean Q<num>. from beginning of q_text
    q_text = re.sub(r'^Q\d+\.\s*', '', q_text).strip()
    parsed_questions[q_num] = {
        'num': q_num,
        'question_text': q_text,
        'options': opts
    }

print(f"Total parsed: {len(parsed_questions)}")
for n in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
    if n in parsed_questions:
        q = parsed_questions[n]
        print(f"Q{n}: {q['question_text'][:50]} | opts count: {len(q['options'])}")
        for idx, o in enumerate(q['options']):
            print(f"   ({chr(97+idx)}) {o[:60]}")
