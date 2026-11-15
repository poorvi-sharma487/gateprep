import pypdf
import re
import json

reader = pypdf.PdfReader(r'C:\Users\HP\Downloads\GfG PYQ Book.pdf')

# Let's extract pages 195 to 248
pages_data = []
for p_num in range(195, 248):
    t = reader.pages[p_num].extract_text()
    pages_data.append({'page': p_num + 1, 'text': t})

print(f"Loaded {len(pages_data)} pages from TOC (196-248)")

# Let's see all page headers or titles
for pd in pages_data:
    lines = [l.strip() for l in pd['text'].splitlines() if l.strip()]
    header = ' | '.join(lines[:3]) if lines else 'EMPTY'
    if any(k in pd['text'] for k in ['ANSWER KEY', 'Regular Language', 'Context Free', 'Turing', 'Decidability']):
        print(f"Page {pd['page']}: {header[:100]}")
