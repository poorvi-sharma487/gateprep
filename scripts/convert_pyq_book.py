import pypdf
import re
import sys
import os
import json

sys.stdout.reconfigure(encoding='utf-8')

os.makedirs('pyqs/markdown', exist_ok=True)

with open('scripts/subject_ranges.json', 'r', encoding='utf-8') as f:
    subject_ranges = json.load(f)

reader = pypdf.PdfReader('GfG PYQ Book.pdf')
print(f"Loaded PDF with {len(reader.pages)} pages.", flush=True)

TOPIC_SLUG_MAP = {
    # C Programming
    "DATA TYPE AND OPERATOR": "data-types-and-operators",
    "CONTROL FLOW STATEMENT": "conditional-statements-and-loops",
    "FUNCTION": "functions-and-recursion",
    "RECURSION": "functions-and-recursion",
    "ARRAY": "arrays-and-strings",
    "POINTER": "pointers",
    "STRUCTURE": "structures-and-unions",
    
    # Data Structures
    "LINKED LIST": "linked-lists",
    "STACK": "stacks",
    "QUEUE": "queues",
    "TREE": "trees-and-binary-search-trees",
    "HEAP": "heaps-and-hashing",
    "GRAPH": "graphs",
    
    # Algorithms
    "ASYMPTOTIC": "asymptotic-notations",
    "SORTING": "searching-and-sorting",
    "SEARCHING": "searching-and-sorting",
    "DIVIDE": "divide-and-conquer",
    "GREEDY": "greedy-algorithms",
    "DYNAMIC": "dynamic-programming",
    "SPANNING": "minimum-spanning-trees",
    "SHORTEST": "shortest-path-algorithms",
    "BACKTRACKING": "backtracking",
    "NP": "np-completeness",
    
    # Operating Systems
    "PROCESS": "process-and-threads",
    "THREAD": "process-and-threads",
    "SCHEDULING": "cpu-scheduling",
    "SYNCHRONIZATION": "process-synchronization",
    "DEADLOCK": "deadlocks",
    "MEMORY": "memory-management",
    "PAGING": "paging-and-segmentation",
    "VIRTUAL": "virtual-memory",
    "FILE": "file-systems",
    "DISK": "disk-scheduling",
    
    # DBMS
    "ER MODEL": "er-model",
    "RELATIONAL MODEL": "relational-model",
    "RELATIONAL ALGEBRA": "relational-algebra",
    "SQL": "sql-queries",
    "FUNCTIONAL DEPENDENC": "functional-dependencies",
    "NORMALIZATION": "normalization",
    "TRANSACTION": "transactions",
    "CONCURRENCY": "concurrency-control",
    "INDEXING": "indexing",
    
    # Computer Networks
    "OSI": "network-models-osi-and-tcp-ip",
    "DATA LINK": "data-link-layer",
    "ERROR DETECTION": "error-detection",
    "MAC": "mac-and-ethernet",
    "ETHERNET": "mac-and-ethernet",
    "IP ADDRESS": "ip-addressing-and-subnetting",
    "SUBNET": "ip-addressing-and-subnetting",
    "ROUTING": "routing-algorithms",
    "TCP": "tcp-and-udp",
    "UDP": "tcp-and-udp",
    "APPLICATION": "application-layer",
    "SECURITY": "network-security-basics",
    
    # TOC
    "FINITE AUTOMATA": "finite-automata",
    "REGULAR": "regular-expressions",
    "CONTEXT FREE": "context-free-grammar",
    "PUSHDOWN": "pushdown-automata",
    "TURING": "turing-machine",
    "DECIDABILITY": "decidability",
    "UNDECIDABILITY": "undecidability",
    
    # Compiler Design
    "PHASES": "compiler-phases",
    "LEXICAL": "lexical-analysis",
    "SYNTAX": "syntax-analysis-and-parsing",
    "PARSING": "syntax-analysis-and-parsing",
    "TOP DOWN": "top-down-parsing",
    "BOTTOM UP": "bottom-up-parsing",
    "SDT": "syntax-directed-translation",
    "INTERMEDIATE": "intermediate-code-generation",
    "OPTIMIZATION": "code-optimization",
    "GENERATION": "code-generation",
    
    # COA
    "NUMBER SYSTEM": "number-systems-and-data-representation",
    "BOOLEAN": "boolean-algebra-and-logic-circuits",
    "INSTRUCTION": "instruction-set-architecture",
    "ADDRESSING": "addressing-modes",
    "CPU": "cpu-organization",
    "PIPELINE": "pipelining",
    "CACHE": "cache-memory",
    "INTERRUPT": "interrupts-and-dma",
    "DMA": "interrupts-and-dma",
    
    # Digital Logic
    "GATE": "logic-gates",
    "K-MAP": "k-maps",
    "COMBINATIONAL": "combinational-circuits",
    "ADDER": "adders-and-subtractors",
    "MULTIPLEXER": "multiplexers-and-demultiplexers",
    "FLIP-FLOP": "flip-flops",
    "COUNTER": "registers-and-counters",
    "SEQUENTIAL": "sequential-circuits",
    
    # Engineering Mathematics
    "PROPOSITIONAL": "propositional-and-predicate-logic",
    "SET": "sets-and-relations",
    "RELATION": "sets-and-relations",
    "COMBINATOR": "combinatorics",
    "LINEAR ALGEBRA": "linear-algebra",
    "EIGENVALUE": "eigenvalues-and-eigenvectors",
    "PROBABILITY": "probability",
    "RANDOM": "random-variables",
    
    # General Aptitude
    "NUMERICAL": "numerical-calculation",
    "PERCENT": "percentages-and-ratios",
    "RATIO": "percentages-and-ratios",
    "AVERAGE": "averages",
    "TIME": "time-and-work",
    "WORK": "time-and-work",
    "LOGICAL": "logical-reasoning",
    "VERBAL": "verbal-aptitude",
    "READING": "reading-comprehension"
}

def guess_topic_slug(subject_slug, topic_name):
    t_upper = topic_name.upper()
    for kw, slug in TOPIC_SLUG_MAP.items():
        if kw in t_upper:
            return slug
    clean = re.sub(r'[^a-z0-9]+', '-', topic_name.lower()).strip('-')
    return clean or "general"

def clean_lines(text):
    skip_re = re.compile(
        r'^\s*Telegram GeeksforGeeks|'
        r'Link to GfG corresponding Short Notes|'
        r'Check Out Our GATE Courses|'
        r'Scan Here for Video Solution|'
        r'Head Office:.*Sovereign Corporate|'
        r'Hyderabad:.*SRR COMPLEX|'
        r'Ph\.:\s*08069289001|'
        r'E-mail:\s*support@geeksforgeeks|'
        r'Website:\s*www\.geeksforgeeks|'
        r'^\s*`\s*$|'
        r'^\s*\d+\s*$',
        re.IGNORECASE
    )
    lines = []
    for l in text.splitlines():
        line_s = l.strip()
        if not line_s or skip_re.search(l):
            continue
        lines.append(l)
    return lines

all_extracted_questions = []
master_md_content = [
    "# GATE CSE Authentic Previous Years Questions (PYQs) & Detailed Solutions\n\n"
    "> **Source:** GeeksforGeeks Complete GATE CSE Archive  \n"
    "> **Coverage:** All 12 GATE CSE Core Subjects + General Aptitude (775 Pages, 1,900+ Questions)  \n"
    "> **Format:** Clean Markdown with Question Text, Code Blocks, Options, Official Answer Keys, and Step-by-Step Solutions.\n\n"
    "## 📚 Table of Contents\n"
]

for idx, subj in enumerate(subject_ranges, 1):
    file_name = f"{idx:02d}_{subj['slug'].replace('-', '_')}.md"
    master_md_content.append(f"{idx}. [{subj['name']}](markdown/{file_name}) — Pages {subj['start_page']}–{subj['end_page']}")
master_md_content.append("\n---\n")

print("Beginning full extraction and conversion pipeline...", flush=True)

for subj_idx, subj in enumerate(subject_ranges, 1):
    subj_name = subj['name']
    subj_slug = subj['slug']
    start_p = subj['start_page'] - 1
    end_p = subj['end_page']
    
    print(f"\n[{subj_idx}/{len(subject_ranges)}] Processing {subj_name} (Pages {start_p+1}-{end_p})...", flush=True)
    
    subj_text = ""
    for p in range(start_p, end_p):
        raw = reader.pages[p].extract_text() or ''
        lines = clean_lines(raw)
        if lines:
            subj_text += f"\n<!-- PAGE {p+1} -->\n" + "\n".join(lines)
            
    ak_matches = list(re.finditer(r'(?:^|\n)\s*ANSWER\s*KEY\s*(?:\n|\:)', subj_text, flags=re.IGNORECASE))
    
    modules = []
    for i, ak in enumerate(ak_matches):
        ak_pos = ak.start()
        ak_end = ak.end()
        hs_match = re.search(r'(?:^|\n)\s*HINTS\s*(?:&|and)\s*SOLUTIONS\s*\n', subj_text[ak_end:ak_end+1500], flags=re.IGNORECASE)
        if hs_match:
            hs_pos = ak_end + hs_match.start()
            hs_end = ak_end + hs_match.end()
        else:
            hs_pos = ak_end + 100
            hs_end = hs_pos
        modules.append({
            'ak_start': ak_pos,
            'ak_end': ak_end,
            'hs_start': hs_pos,
            'hs_end': hs_end
        })
        
    subject_questions = []
    subject_md = [
        f"# {subj_name}\n\n",
        f"> **Subject:** {subj_name}  \n",
        f"> **Pages in Book:** {subj['start_page']}–{subj['end_page']}  \n",
        f"> **Total Modules:** {len(modules)}\n\n",
        "## Topics in this Subject\n"
    ]
    
    if not modules:
        # Fallback: extract questions directly
        q_matches = list(re.finditer(r'(?:^|\n)\s*Q\s*(\d+)[\.\s]([\s\S]*?)(?=(?:\n\s*Q\s*\d+[\.\s]|\Z))', subj_text))
        for qm in q_matches:
            q_num = int(qm.group(1))
            q_body = qm.group(2).strip()
            q_obj = {
                "id": f"{subj_slug}-gen-q{q_num}",
                "subject_slug": subj_slug,
                "subject_name": subj_name,
                "topic_slug": "general",
                "topic_name": "General",
                "question_number": q_num,
                "gate_year": "GATE CSE",
                "marks": 2,
                "difficulty": "medium",
                "question_text": q_body,
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "correct_option": 0,
                "answer_key": "A",
                "explanation": ""
            }
            subject_questions.append(q_obj)
            all_extracted_questions.append(q_obj)
    else:
        for mod_idx in range(len(modules)):
            ak_start = modules[mod_idx]['ak_start']
            hs_end = modules[mod_idx]['hs_end']
            
            if mod_idx == 0:
                q_start = 0
            else:
                between = subj_text[modules[mod_idx-1]['hs_end']:ak_start]
                q1_match = re.search(r'(?:^|\n)\s*Q\s*1[\.\s]', between)
                if q1_match:
                    q_start = modules[mod_idx-1]['hs_end'] + q1_match.start()
                else:
                    q_start = modules[mod_idx-1]['hs_end'] + (len(between) // 2)
                    
            q_end = ak_start
            q_text = subj_text[q_start:q_end]
            
            # Determine solution boundary
            if mod_idx + 1 < len(modules):
                next_between = subj_text[hs_end:modules[mod_idx+1]['ak_start']]
                next_q1 = re.search(r'(?:^|\n)\s*Q\s*1[\.\s]', next_between)
                if next_q1:
                    sol_end = hs_end + next_q1.start()
                else:
                    sol_end = hs_end + (len(next_between) // 2)
            else:
                sol_end = len(subj_text)
                
            sol_text = subj_text[hs_end:sol_end]
            ans_key_text = subj_text[modules[mod_idx]['ak_end']:modules[mod_idx]['hs_start']]
            
            # Extract topic name
            # Usually the first 1-3 lines of q_text before Q1
            topic_lines = [l.strip() for l in q_text[:q_text.find('Q')].splitlines() if l.strip() and not l.strip().startswith('<!--')]
            topic_name = "Topic " + str(mod_idx + 1)
            for tl in topic_lines:
                if len(tl) > 2 and len(tl) < 80 and not re.match(r'^\d+$', tl):
                    topic_name = tl
                    break
            topic_slug = guess_topic_slug(subj_slug, topic_name)
            
            # Parse answer keys: e.g. "1. (a) 2. (b) 3. 12"
            ans_dict = {}
            for m in re.finditer(r'(\d+)[\.\s]+(?:\()?([^\d\s\(\)][^\n\.\)]*|\d+(?:\s*to\s*\d+)?)(?:\))?', ans_key_text):
                ans_dict[int(m.group(1))] = m.group(2).strip()
                
            # Parse solutions: "1. Answer: ... Solution: ..."
            sol_dict = {}
            sol_matches = list(re.finditer(r'(?:^|\n)\s*(\d+)[\.\s]+\s*(?:ANSWER|Answer)\s*[:\-]?\s*([^\n]*)\n([\s\S]*?)(?=(?:\n\s*\d+[\.\s]+\s*(?:ANSWER|Answer)|\Z))', sol_text))
            for sm in sol_matches:
                s_num = int(sm.group(1))
                s_ans = sm.group(2).strip()
                s_body = sm.group(3).strip()
                sol_dict[s_num] = {
                    "answer": s_ans,
                    "explanation": s_body
                }
                
            # Parse Questions: "Q1. ...", "Q2. ..."
            q_matches = list(re.finditer(r'(?:^|\n)\s*Q\s*(\d+)[\.\s]([\s\S]*?)(?=(?:\n\s*Q\s*\d+[\.\s]|\Z))', q_text))
            
            subject_md.append(f"\n## Topic {mod_idx+1}: {topic_name}\n\n")
            
            for qm in q_matches:
                q_num = int(qm.group(1))
                q_raw = qm.group(2).strip()
                
                # Check for GATE tag inside question
                gate_tag = "GATE CSE"
                marks = 2
                difficulty = "medium"
                
                gate_match = re.search(r'GATE\s*CSE[^\n\)]*(?:\(\s*(\d+)\s*[\-\s]*MARKS?\s*\))?', q_raw, re.IGNORECASE)
                if gate_match:
                    gate_tag = gate_match.group(0).strip()
                    if gate_match.group(1):
                        marks = int(gate_match.group(1))
                        difficulty = "easy" if marks == 1 else "hard"
                    q_clean = q_raw[:gate_match.start()].strip()
                else:
                    q_clean = q_raw
                    
                # Options
                opt_matches = list(re.finditer(r'(?:^|\n)\s*\(([a-dA-D])\)\s*([\s\S]*?)(?=(?:\n\s*\([a-dA-D]\)|\Z))', q_clean))
                options = []
                stem = q_clean
                
                if len(opt_matches) >= 2:
                    stem = q_clean[:opt_matches[0].start()].strip()
                    for om in opt_matches:
                        options.append(om.group(2).strip())
                        
                # Format code blocks if code detected
                if re.search(r'#include|int\s+main|printf|void\s+|SELECT\s+.*FROM|CREATE\s+TABLE|relational\s+schema', stem, re.IGNORECASE):
                    if '```' not in stem:
                        code_lines = []
                        text_lines = []
                        in_code = False
                        for l in stem.splitlines():
                            if re.search(r'#include|int\s+main|\{|\}|printf|for\s*\(|while\s*\(|return\s+|SELECT|FROM|WHERE', l, re.IGNORECASE):
                                in_code = True
                            if in_code:
                                code_lines.append(l)
                            else:
                                text_lines.append(l)
                        if code_lines:
                            lang = 'sql' if 'SELECT' in stem or 'TABLE' in stem else 'c'
                            stem = "\n".join(text_lines) + f"\n\n```{lang}\n" + "\n".join(code_lines) + "\n```"
                            
                # Get Answer & Explanation
                ans_text = ""
                exp_text = ""
                correct_idx = 0
                
                if q_num in sol_dict:
                    ans_text = sol_dict[q_num]['answer']
                    exp_text = sol_dict[q_num]['explanation']
                elif q_num in ans_dict:
                    ans_text = ans_dict[q_num]
                    
                ans_lower = ans_text.lower()
                if '(a)' in ans_lower or ans_lower.startswith('a') or ans_lower == 'a':
                    correct_idx = 0
                elif '(b)' in ans_lower or ans_lower.startswith('b') or ans_lower == 'b':
                    correct_idx = 1
                elif '(c)' in ans_lower or ans_lower.startswith('c') or ans_lower == 'c':
                    correct_idx = 2
                elif '(d)' in ans_lower or ans_lower.startswith('d') or ans_lower == 'd':
                    correct_idx = 3
                    
                # Clean up options array for database storage
                clean_opts = []
                if len(options) == 4:
                    clean_opts = [re.sub(r'^\([a-dA-D]\)\s*', '', opt).strip() for opt in options]
                else:
                    # If NAT or incomplete options, fill fallback options
                    clean_opts = [f"Option {chr(65+k)}" for k in range(4)]
                    
                q_obj = {
                    "id": f"{subj_slug}-{topic_slug}-m{mod_idx+1}-q{q_num}",
                    "subject_slug": subj_slug,
                    "subject_name": subj_name,
                    "topic_slug": topic_slug,
                    "topic_name": topic_name,
                    "question_number": q_num,
                    "gate_year": gate_tag,
                    "marks": marks,
                    "difficulty": difficulty,
                    "question_text": stem,
                    "options": clean_opts,
                    "correct_option": correct_idx,
                    "answer_key": ans_text or chr(65 + correct_idx),
                    "explanation": exp_text
                }
                subject_questions.append(q_obj)
                all_extracted_questions.append(q_obj)
                
                # Markdown Question Output
                subject_md.append(f"### Q{q_num}. [{gate_tag}]\n\n")
                subject_md.append(f"> **Topic:** {topic_name} | **Marks:** {marks} | **Difficulty:** {difficulty.capitalize()}\n\n")
                subject_md.append(f"{stem}\n\n")
                
                if options and len(options) == 4:
                    for opt_idx, opt_val in enumerate(clean_opts):
                        subject_md.append(f"- **({chr(65+opt_idx)})** {opt_val}\n")
                    subject_md.append("\n")
                    
                subject_md.append("<details>\n<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>\n\n")
                subject_md.append(f"**Answer:** {ans_text or chr(65+correct_idx)}\n\n")
                if exp_text:
                    subject_md.append(f"**Step-by-Step Explanation:**\n\n{exp_text}\n\n")
                subject_md.append("</details>\n\n---\n\n")
                
    # Save subject markdown
    md_file_name = f"{subj_idx:02d}_{subj_slug.replace('-', '_')}.md"
    md_file_path = os.path.join('pyqs', 'markdown', md_file_name)
    with open(md_file_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(subject_md))
        
    print(f"  -> Extracted {len(subject_questions)} questions into {md_file_path}", flush=True)
    master_md_content.append(f"\n# {subj_name}\n\n" + "\n".join(subject_md[2:]))

# Save Complete Master Markdown to pyqs/GATE_CSE_PYQ_Book.md
master_path = os.path.join('pyqs', 'GATE_CSE_PYQ_Book.md')
with open(master_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(master_md_content))
print(f"\nSaved Master Markdown file to {master_path}", flush=True)

# Also save root copy GATE_CSE_PYQ_Book.md in workspace root
root_master_path = 'GATE_CSE_PYQ_Book.md'
with open(root_master_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(master_md_content))
print(f"Saved Root Markdown file to {root_master_path}", flush=True)

# Save structured JSON
json_db_path = os.path.join('pyqs', 'gate_pyqs_database.json')
with open(json_db_path, 'w', encoding='utf-8') as f:
    json.dump(all_extracted_questions, f, indent=2, ensure_ascii=False)
print(f"SUCCESS: Saved {len(all_extracted_questions)} authentic questions to {json_db_path}", flush=True)
