import pypdf
import re
import json

reader = pypdf.PdfReader(r'C:\Users\HP\Downloads\GfG PYQ Book.pdf')

# 1. Extract raw text from Topic 1: Pages 197 to 212 (index 196 to 211)
pages_text = []
for p in range(196, 211):
    pages_text.append(reader.pages[p].extract_text())

# Also extract solution pages: Pages 212 to 224 (index 211 to 223)
sol_text = []
for p in range(211, 224):
    sol_text.append(reader.pages[p].extract_text())

full_q_text = '\n'.join(pages_text)
full_sol_text = '\n'.join(sol_text)

print(f"Loaded questions text ({len(full_q_text)} chars), solutions text ({len(full_sol_text)} chars)")

# Let's inspect answer key mapping
# Page 212 contains:
# ANSWER KEY
# 1.(b,d) 2.(c) 3.(c,d) 4.(d) ... 79.(b)
ak_match = re.search(r'ANSWER KEY([\s\S]*?)HINTS AND SOLUTIONS', full_sol_text)
answer_keys = {}
if ak_match:
    raw_ak = ak_match.group(1)
    for m in re.finditer(r'(\d+)\s*\.\s*\(([^)]+)\)', raw_ak):
        q_num = int(m.group(1))
        ans = m.group(2).strip()
        answer_keys[q_num] = ans
    print(f"Extracted {len(answer_keys)} answer keys from ANSWER KEY section.")
    print("Q1-Q10 Answer keys:", {k: answer_keys[k] for k in range(1, 11) if k in answer_keys})
