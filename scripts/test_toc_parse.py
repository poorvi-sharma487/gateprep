import pypdf
import re

reader = pypdf.PdfReader(r'C:\Users\HP\Downloads\GfG PYQ Book.pdf')

# Combine text of pages 196 to 211 (Pages 197 to 212 in PDF viewer)
# Note: Page index 196 is page 197
pages_text = []
for p in range(196, 211):
    pages_text.append(reader.pages[p].extract_text())

full_text = '\n'.join(pages_text)

# Let's clean headers / footers
full_text = re.sub(r'\n\s*\d+\s*\n\s*THEORY OF COMPUTATION\s*\n\s*Link to GfG[^\n]*\n', '\n', full_text)
full_text = re.sub(r'Check Out Our GATE Courses[^\n]*', '', full_text)

# Find all questions: Q1., Q2., ..., Q79.
# Notice questions might be split across pages
q_splits = re.split(r'\n\s*(Q\d+\.)', full_text)

print(f"Total parts split: {len(q_splits)}")

questions = []
for i in range(1, len(q_splits), 2):
    q_num_str = q_splits[i] # e.g. "Q1."
    q_content = q_splits[i+1] # text until next Q
    q_num = int(re.search(r'\d+', q_num_str).group(0))
    questions.append((q_num, q_content))

print(f"Extracted {len(questions)} questions")
for q_num, content in questions[:7]:
    lines = [l.strip() for l in content.splitlines() if l.strip()]
    opts = [l for l in lines if re.match(r'^\([a-d]\)', l, re.I)]
    print(f"Q{q_num}: lines={len(lines)}, opts={opts}")
