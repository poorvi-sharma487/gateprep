import pypdf
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
reader = pypdf.PdfReader('GfG PYQ Book.pdf')

with open('scripts/subject_ranges.json', 'r', encoding='utf-8') as f:
    subject_ranges = json.load(f)

for subj in subject_ranges:
    print(f"\n==================== {subj['name']} (Pages {subj['start_page']}-{subj['end_page']}) ====================")
    for p in range(subj['start_page'] - 1, subj['end_page']):
        text = reader.pages[p].extract_text() or ''
        lines = [l.strip() for l in text.splitlines() if l.strip()]
        for l in lines[:8]:
            l_up = l.upper()
            if any(term in l_up for term in [
                'DATA TYPE', 'CONTROL FLOW', 'FUNCTION', 'RECURSION', 'ARRAY', 'POINTER', 'STRUCTURE',
                'LINKED LIST', 'STACK', 'QUEUE', 'TREE', 'GRAPH', 'HASH', 'HEAP',
                'ASYMPTOTIC', 'DIVIDE', 'GREEDY', 'DYNAMIC PROGRAMMING', 'SORTING', 'SEARCHING',
                'NUMBER SYSTEM', 'BOOLEAN', 'LOGIC GATES', 'COMBINATIONAL', 'SEQUENTIAL',
                'REGULAR', 'GRAMMAR', 'TURING', 'DECIDABILITY', 'AUTOMATA',
                'LEXICAL', 'PARSING', 'SYNTAX', 'CODE GENERATION', 'CODE OPTIMIZATION', 'RUNTIME',
                'PROCESS', 'SCHEDULING', 'SYNCHRONIZATION', 'DEADLOCK', 'MEMORY', 'VIRTUAL MEMORY', 'FILE', 'DISK',
                'ER MODEL', 'RELATIONAL', 'NORMALIZATION', 'TRANSACTION', 'CONCURRENCY', 'SQL', 'INDEXING', 'FILE ORG',
                'PIPELINE', 'CACHE', 'INSTRUCTION', 'ADDRESSING', 'CPU', 'INTERRUPT', 'DMA',
                'OSI', 'TCP', 'IP ADDRESS', 'ROUTING', 'DATA LINK', 'PHYSICAL LAYER', 'NETWORK LAYER', 'TRANSPORT', 'APPLICATION LAYER',
                'PROBABILITY', 'LINEAR ALGEBRA', 'CALCULUS', 'GRAPH THEORY', 'SET THEORY', 'COMBINATOR',
                'VERBAL', 'QUANTITATIVE', 'REASONING', 'APTITUDE'
            ]) and len(l) < 70 and not l.startswith('Q') and 'GATE' not in l_up and 'OPTION' not in l_up and 'LINK TO' not in l_up and 'CHECK OUT' not in l_up and 'SCAN' not in l_up:
                print(f"  Page {p+1}: {l}")
                break
