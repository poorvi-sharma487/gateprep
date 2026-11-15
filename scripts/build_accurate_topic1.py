import pypdf
import re
import json

reader = pypdf.PdfReader(r'C:\Users\HP\Downloads\GfG PYQ Book.pdf')

# Pages 197 to 212 (index 196 to 211)
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
# In sol_text after HINTS AND SOLUTIONS:
# 1. Answer : B,D ... 2. Answer ; C ...
# Let's split by regex: \n\s*(\d+)\s*\.\s*Answer
exp_parts = re.split(r'\n\s*(\d+)\s*\.\s*Answer\s*[:;]?', sol_text[ak_match.end():] if ak_match else sol_text)
explanations = {}
for i in range(1, len(exp_parts), 2):
    num = int(exp_parts[i])
    exp = exp_parts[i+1].strip()
    # clean trailing headers
    exp = re.sub(r'\n\s*\d+\s*\n\s*THEORY OF COMPUTATION[^\n]*', '', exp)
    exp = re.sub(r'Link to GfG[^\n]*', '', exp)
    explanations[num] = exp

print(f"Extracted {len(answer_keys)} answer keys and {len(explanations)} explanations.")

# Now parse questions
pattern = re.compile(r'(?:^|\n)\s*Q\s*(\d+)[\.\s]+', re.DOTALL)
split_indices = []
for m in pattern.finditer(full_text):
    split_indices.append((int(m.group(1)), m.start(), m.end()))

parsed_data = {}
for i in range(len(split_indices)):
    q_num, start, end = split_indices[i]
    next_start = split_indices[i+1][1] if i + 1 < len(split_indices) else len(full_text)
    q_body = full_text[end:next_start].strip()
    
    # Strip any trailing GATE tags like "GATE CSE – 2012 SET-1 MCQ (1-MARKS)"
    q_body = re.sub(r'\n\s*GATE\s*CSE[^\n]*', '', q_body)
    
    # Identify options
    # Some options: (a) or (a). or a) or (a) ... (b) on same line
    # Let's look for standard (a) or (a). or a).
    opt_a_match = re.search(r'(?:^|\n)\s*(?:\([aA]\)|a\)\.?|\([aA]\)\.)\s*', q_body)
    if opt_a_match:
        q_text = q_body[:opt_a_match.start()].strip()
        opts_block = q_body[opt_a_match.start():].strip()
        
        # Split on option markers: (a), (b), (c), (d), or b)., etc.
        opt_parts = re.split(r'(?:^|\n|\s{2,})\s*(?:\(([a-dA-D])\)[\.\:]?|([a-dA-D])\)[\.\:]?)\s*', opts_block)
        
        # Filter and reconstruct
        opts = []
        cur_opt = ''
        for piece in opt_parts:
            if not piece: continue
            if piece.lower() in ['a', 'b', 'c', 'd'] and len(piece) == 1:
                if cur_opt:
                    opts.append(' '.join(cur_opt.split()))
                    cur_opt = ''
            else:
                cur_opt += ' ' + piece
        if cur_opt:
            opts.append(' '.join(cur_opt.split()))
            
        # Clean options: remove any trailing "GATE CSE..."
        clean_opts = []
        for o in opts:
            o = re.sub(r'GATE\s*CSE[^\n]*', '', o).strip()
            if o:
                clean_opts.append(o)
        opts = clean_opts
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
        
    # Determine correct_option index (for single answer)
    correct_opt = 0
    if ans_key:
        first_letter = re.search(r'[a-dA-D]', ans_key)
        if first_letter:
            correct_opt = ord(first_letter.group(0).lower()) - ord('a')
            
    parsed_data[q_num] = {
        'num': q_num,
        'question_text': q_text,
        'options': opts,
        'answer_key': ans_key,
        'correct_option': correct_opt,
        'type': q_type,
        'explanation': explanations.get(q_num, '')
    }

print(f"Parsed {len(parsed_data)} questions.")

# Let's inspect options count breakdown
opt_counts = {}
for q in parsed_data.values():
    c = len(q['options'])
    opt_counts[c] = opt_counts.get(c, 0) + 1
print("Options counts distribution across 79 questions:", opt_counts)

# Save to scratch json
with open(r'C:\Users\HP\.gemini\antigravity\scratch\gateprep\parsed_topic1.json', 'w', encoding='utf8') as f:
    json.dump(parsed_data, f, indent=2, ensure_ascii=False)
print("Saved parsed_topic1.json successfully.")
