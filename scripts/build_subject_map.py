import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/page_headers.json', 'r', encoding='utf-8') as f:
    headers = json.load(f)

# Define subjects in sequence with known starting markers
subject_defs = [
    ("c-programming", "C Programming", 5),
    ("data-structures", "Data Structures", 51),
    ("algorithms", "Algorithms", 95),
    ("digital-logic", "Digital Logic", 151),
    ("theory-of-computation", "Theory of Computation", 195),
    ("compiler-design", "Compiler Design", 252),
    ("operating-system", "Operating Systems", 293),
    ("dbms", "Database Management Systems", 367),
    ("computer-organization-and-architecture", "Computer Organization & Architecture", 451),
    ("computer-networks", "Computer Networks", 529),
    ("discrete-mathematics", "Discrete Mathematics", 583),
    ("engineering-mathematics", "Engineering Mathematics", 643),
    ("general-aptitude", "General Aptitude", 685)
]

total_pages = len(headers)
subject_ranges = []

for idx, (slug, name, start_page) in enumerate(subject_defs):
    if idx + 1 < len(subject_defs):
        end_page = subject_defs[idx + 1][2] - 1
    else:
        end_page = total_pages
    subject_ranges.append({
        "slug": slug,
        "name": name,
        "start_page": start_page,
        "end_page": end_page,
        "page_count": end_page - start_page + 1
    })

print(json.dumps(subject_ranges, indent=2))
with open('scripts/subject_ranges.json', 'w', encoding='utf-8') as f:
    json.dump(subject_ranges, f, indent=2)
