"use strict";

const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const canonicalSubjectTopics = {
  "c-programming": [
    { slug: "data-types-and-operators", keywords: ["data type", "operator", "ascii", "sizeof", "precedence", "bitwise", "int ", "char ", "float "] },
    { slug: "conditional-statements-and-loops", keywords: ["switch", "case", "for(", "while(", "do-while", "break", "continue", "if(", "else"] },
    { slug: "functions-and-recursion", keywords: ["recursion", "recursive", "function", "return", "activation record", "call stack", "parameter", "fun(", "foo("] },
    { slug: "arrays-and-strings", keywords: ["array", "string", "strcpy", "strlen", "matrix", "char str", "arr[", "2d array"] },
    { slug: "pointers", keywords: ["pointer", "ptr", "*ptr", "&", "dereference", "address", "malloc", "calloc", "null pointer"] },
    { slug: "structures-and-unions", keywords: ["struct", "union", "typedef", "member", "structure"] },
    { slug: "dynamic-memory-allocation", keywords: ["malloc", "calloc", "realloc", "free(", "heap memory"] },
    { slug: "storage-classes", keywords: ["static", "extern", "auto", "register", "storage class", "scope", "lifetime"] },
    { slug: "c-output-and-tracing", keywords: ["printf", "output of the program", "tracing", "printed by"] }
  ],
  "data-structures": [
    { slug: "time-and-space-complexity", keywords: ["complexity", "time complexity", "space complexity", "omega", "theta", "big-o"] },
    { slug: "arrays", keywords: ["array", "dimension", "row-major", "column-major", "sparse matrix"] },
    { slug: "linked-lists", keywords: ["linked list", "singly linked", "doubly linked", "circular linked", "node", "head"] },
    { slug: "stacks", keywords: ["stack", "push", "pop", "postfix", "prefix", "infix", "parentheses", "evaluat"] },
    { slug: "queues", keywords: ["queue", "dequeue", "enqueue", "circular queue", "priority queue"] },
    { slug: "trees-and-binary-search-trees", keywords: ["tree", "binary tree", "bst", "avl", "traversal", "inorder", "preorder", "postorder", "height", "leaf"] },
    { slug: "heaps-and-hashing", keywords: ["heap", "max-heap", "min-heap", "hash", "collision", "linear probing", "chaining"] },
    { slug: "graphs", keywords: ["graph", "bfs", "dfs", "topological", "bipartite", "cycle", "vertex", "edges"] }
  ],
  "algorithms": [
    { slug: "asymptotic-notations", keywords: ["asymptotic", "recurrence", "master theorem", "growth rate", "big-o", "theta"] },
    { slug: "searching-and-sorting", keywords: ["sort", "quicksort", "mergesort", "heapsort", "insertion sort", "binary search"] },
    { slug: "divide-and-conquer", keywords: ["divide and conquer", "strassen", "binary search", "merge sort"] },
    { slug: "greedy-algorithms", keywords: ["greedy", "huffman", "fractional knapsack", "activity selection", "job sequencing"] },
    { slug: "dynamic-programming", keywords: ["dynamic programming", "0/1 knapsack", "lcs", "matrix chain", "bellman", "floyd"] },
    { slug: "graph-algorithms", keywords: ["graph", "bfs", "dfs", "strongly connected", "topological sort"] },
    { slug: "minimum-spanning-trees", keywords: ["minimum spanning tree", "mst", "kruskal", "prim"] },
    { slug: "shortest-path-algorithms", keywords: ["shortest path", "dijkstra", "bellman-ford", "floyd-warshall"] },
    { slug: "backtracking", keywords: ["backtracking", "n-queens", "hamiltonian", "subset sum"] },
    { slug: "np-completeness", keywords: ["np-complete", "np-hard", "reduction", "polynomial time", "sat", "clique"] }
  ],
  "operating-system": [
    { slug: "process-and-threads", keywords: ["process", "thread", "fork", "pcb", "context switch", "zombie", "orphan"] },
    { slug: "cpu-scheduling", keywords: ["scheduling", "round robin", "sjf", "fcfs", "turnaround time", "waiting time"] },
    { slug: "process-synchronization", keywords: ["synchronization", "semaphore", "mutex", "critical section", "peterson", "producer-consumer"] },
    { slug: "deadlocks", keywords: ["deadlock", "banker", "resource allocation", "safe state", "wait-for"] },
    { slug: "memory-management", keywords: ["memory", "fragmentation", "buddy system", "first fit", "best fit"] },
    { slug: "paging-and-segmentation", keywords: ["paging", "page table", "tlb", "segmentation", "page size"] },
    { slug: "virtual-memory", keywords: ["virtual memory", "page fault", "lru", "fifo", "optimal page", "belady", "thrashing"] },
    { slug: "file-systems", keywords: ["file system", "inode", "directory", "contiguous allocation", "indexed allocation"] },
    { slug: "disk-scheduling", keywords: ["disk", "sstf", "scan", "c-scan", "look", "c-look", "cylinder", "seek time"] }
  ],
  "dbms": [
    { slug: "er-model", keywords: ["er diagram", "entity", "relationship", "cardinality", "weak entity", "participation"] },
    { slug: "relational-model", keywords: ["relational model", "superkey", "candidate key", "primary key", "foreign key", "referential integrity"] },
    { slug: "sql-queries", keywords: ["sql", "select", "group by", "having", "join", "nested query", "aggregate"] },
    { slug: "relational-algebra", keywords: ["relational algebra", "tuple relational calculus", "domain relational", "projection", "cartesian"] },
    { slug: "functional-dependencies", keywords: ["functional dependency", "closure", "minimal cover", "attribute closure", "lossless"] },
    { slug: "normalization", keywords: ["1nf", "2nf", "3nf", "bcnf", "normalization", "dependency preserving"] },
    { slug: "transactions", keywords: ["transaction", "acid", "serializability", "conflict serializable", "view serializable", "schedule"] },
    { slug: "concurrency-control", keywords: ["concurrency", "2pl", "two-phase locking", "timestamp", "deadlock", "strict 2pl"] },
    { slug: "indexing", keywords: ["b-tree", "b+ tree", "index", "dense index", "sparse index", "hashing", "bucket"] }
  ],
  "computer-networks": [
    { slug: "network-models-osi-and-tcp-ip", keywords: ["osi", "layer", "physical layer", "framing", "baud rate", "bit rate", "nyquist", "shannon"] },
    { slug: "data-link-layer", keywords: ["data link", "flow control", "stop and wait", "go back n", "selective repeat", "sliding window"] },
    { slug: "error-detection", keywords: ["error detection", "crc", "checksum", "hamming code", "parity"] },
    { slug: "mac-and-ethernet", keywords: ["mac", "ethernet", "csma/cd", "exponential backoff", "collision", "aloha"] },
    { slug: "ip-addressing-and-subnetting", keywords: ["ip address", "subnet", "cidr", "mask", "ipv4", "ipv6", "supernetting", "nat"] },
    { slug: "routing-algorithms", keywords: ["routing", "distance vector", "link state", "ospf", "rip", "bgp", "dijkstra"] },
    { slug: "tcp-and-udp", keywords: ["tcp", "udp", "handshake", "congestion control", "window size", "port", "sequence number"] },
    { slug: "application-layer", keywords: ["application layer", "dns", "http", "smtp", "ftp", "dhcp"] },
    { slug: "network-security-basics", keywords: ["rsa", "cryptography", "firewall", "public key", "cipher", "encryption"] }
  ],
  "theory-of-computation": [
    { slug: "finite-automata", keywords: ["dfa", "nfa", "finite automata", "transition", "states", "minimal dfa"] },
    { slug: "regular-expressions", keywords: ["regular expression", "regular language", "pumping lemma for regular", "myhill-nerode"] },
    { slug: "context-free-grammar", keywords: ["cfg", "context free grammar", "ambiguous", "derivation", "cfl", "chomsky"] },
    { slug: "pushdown-automata", keywords: ["pda", "pushdown automata", "npda", "dpda"] },
    { slug: "turing-machine", keywords: ["turing machine", "recursively enumerable", "recursive language", "halting problem"] },
    { slug: "decidability", keywords: ["decidable", "undecidable", "membership problem", "emptiness"] },
    { slug: "undecidability", keywords: ["undecidability", "rice's theorem", "post correspondence problem", "pcp"] }
  ],
  "compiler-design": [
    { slug: "compiler-phases", keywords: ["phases of compiler", "pass", "front end", "back end", "symbol table"] },
    { slug: "lexical-analysis", keywords: ["lexical", "lexer", "token", "lexeme", "regular expression in lexer"] },
    { slug: "syntax-analysis-and-parsing", keywords: ["syntax analysis", "parser", "first and follow", "parsing table"] },
    { slug: "top-down-parsing", keywords: ["ll(1)", "top down", "recursive descent", "left recursion", "left factoring"] },
    { slug: "bottom-up-parsing", keywords: ["lr(0)", "slr(1)", "clr(1)", "lalr(1)", "shift reduce", "handle", "bottom up"] },
    { slug: "syntax-directed-translation", keywords: ["sdt", "s-attributed", "l-attributed", "inherited", "synthesized", "semantic"] },
    { slug: "intermediate-code-generation", keywords: ["intermediate code", "three address code", "quadruple", "triple", "dag"] },
    { slug: "code-optimization", keywords: ["optimization", "common subexpression", "dead code", "loop invariant", "constant folding"] },
    { slug: "code-generation", keywords: ["code generation", "register allocation", "liveness", "activation record"] }
  ],
  "computer-organization-and-architecture": [
    { slug: "number-systems-and-data-representation", keywords: ["2's complement", "ieee 754", "floating point", "overflow", "endian", "hexadecimal"] },
    { slug: "instruction-set-architecture", keywords: ["instruction format", "opcode", "risc", "cisc", "instruction cycle"] },
    { slug: "addressing-modes", keywords: ["addressing mode", "immediate", "register indirect", "indexed", "relative addressing"] },
    { slug: "cpu-organization", keywords: ["alu", "accumulator", "control unit", "hardwired", "microprogrammed", "datapath"] },
    { slug: "pipelining", keywords: ["pipeline", "hazard", "stall", "throughput", "speedup", "branch prediction"] },
    { slug: "memory-hierarchy", keywords: ["memory hierarchy", "hit ratio", "miss penalty", "access time"] },
    { slug: "cache-memory", keywords: ["cache", "direct mapped", "set associative", "write through", "write back", "tag"] },
    { slug: "virtual-memory", keywords: ["virtual memory", "tlb", "page table", "inverted page table"] },
    { slug: "input-output-organization", keywords: ["i/o", "programmed i/o", "memory mapped i/o", "isolated i/o"] },
    { slug: "interrupts-and-dma", keywords: ["dma", "interrupt", "vectored", "cycle stealing", "burst mode", "handshaking"] }
  ],
  "digital-logic": [
    { slug: "number-systems-and-codes", keywords: ["number system", "binary", "hexadecimal", "gray code", "bcd", "1's complement", "2's complement"] },
    { slug: "boolean-algebra", keywords: ["boolean algebra", "demorgan", "sop", "pos", "canonical", "minterm", "maxterm"] },
    { slug: "logic-gates", keywords: ["nand", "nor", "xor", "universal gate", "tri-state", "logic gate"] },
    { slug: "k-maps", keywords: ["k-map", "karnaugh", "prime implicant", "essential prime", "don't care"] },
    { slug: "combinational-circuits", keywords: ["combinational", "half adder", "full adder", "lookahead", "subtractor"] },
    { slug: "multiplexers-and-demultiplexers", keywords: ["multiplexer", "mux", "demux", "decoder", "encoder", "priority encoder"] },
    { slug: "flip-flops", keywords: ["flip flop", "jk", "sr", "d flip flop", "t flip flop", "master slave", "setup time", "hold time"] },
    { slug: "registers-and-counters", keywords: ["counter", "mod-", "ripple counter", "synchronous counter", "johnson", "ring counter", "register"] },
    { slug: "sequential-circuits", keywords: ["sequential circuit", "state diagram", "mealy", "moore", "fsm", "state table"] }
  ],
  "discrete-mathematics": [
    { slug: "propositional-and-predicate-logic", keywords: ["propositional", "tautology", "predicate", "quantifier", "validity", "modus ponens", "equivalence"] },
    { slug: "sets-and-relations", keywords: ["set", "subset", "power set", "relation", "equivalence relation", "partial order", "poset", "lattice"] },
    { slug: "combinatorics", keywords: ["permutation", "combination", "pigeonhole", "generating function", "recurrence", "inclusion exclusion"] },
    { slug: "graph-theory", keywords: ["graph", "eulerian", "hamiltonian", "planar", "chromatic number", "tree", "degree", "isomorphism", "clique"] }
  ],
  "engineering-mathematics": [
    { slug: "linear-algebra", keywords: ["matrix", "determinant", "rank", "system of linear equations", "gaussian elimination"] },
    { slug: "eigenvalues-and-eigenvectors", keywords: ["eigenvalue", "eigenvector", "characteristic equation", "cayley-hamilton", "diagonaliz"] },
    { slug: "probability", keywords: ["probability", "conditional probability", "bayes theorem", "independent events"] },
    { slug: "random-variables", keywords: ["random variable", "expectation", "variance", "poisson", "normal distribution", "binomial", "uniform"] }
  ],
  "general-aptitude": [
    { slug: "numerical-calculation", keywords: ["number", "digit", "fraction", "integer", "hcf", "lcm", "arithmetic"] },
    { slug: "percentages-and-ratios", keywords: ["percentage", "ratio", "proportion", "profit", "loss", "discount"] },
    { slug: "averages", keywords: ["average", "mean", "median", "mode", "weighted average"] },
    { slug: "time-and-work", keywords: ["work", "speed", "distance", "train", "time and work", "pipes and cistern", "relative speed"] },
    { slug: "probability-and-counting", keywords: ["probability", "dice", "coins", "cards", "permutation", "combination in aptitude"] },
    { slug: "logical-reasoning", keywords: ["syllogism", "blood relation", "seating arrangement", "direction", "series", "coding decoding", "data interpretation"] },
    { slug: "verbal-aptitude", keywords: ["grammar", "vocabulary", "synonym", "antonym", "analogy", "fill in the blank", "sentence correction"] },
    { slug: "reading-comprehension", keywords: ["passage", "reading comprehension", "inference", "author implies"] }
  ]
};

function assignCanonicalTopic(subjectSlug, questionText, originalTopicSlug) {
  const topics = canonicalSubjectTopics[subjectSlug];
  if (!topics || topics.length === 0) {
    return originalTopicSlug || "general";
  }

  const qLower = (questionText || "").toLowerCase();
  let bestTopic = null;
  let bestMatchCount = 0;

  for (const t of topics) {
    let matchCount = 0;
    for (const kw of t.keywords) {
      if (qLower.includes(kw.toLowerCase())) {
        matchCount++;
      }
    }
    if (matchCount > bestMatchCount) {
      bestMatchCount = matchCount;
      bestTopic = t.slug;
    }
  }

  if (bestTopic) return bestTopic;

  const orig = (originalTopicSlug || "").toLowerCase();
  for (const t of topics) {
    if (orig.includes(t.slug) || t.slug.includes(orig)) {
      return t.slug;
    }
  }

  return topics[0].slug;
}

function seedPyqs(dbPath) {
  const targetDb = dbPath || path.resolve(__dirname, '..', 'db', 'gateprep.sqlite');
  console.log(`Opening SQLite database at: ${targetDb}`);
  
  const db = new Database(targetDb);
  db.pragma('journal_mode = WAL');

  try { db.exec("ALTER TABLE questions ADD COLUMN gate_year TEXT"); } catch (e) {}
  try { db.exec("ALTER TABLE questions ADD COLUMN marks INTEGER DEFAULT 2"); } catch (e) {}

  const jsonPath = path.resolve(__dirname, '..', 'pyqs', 'gate_pyqs_database.json');
  if (!fs.existsSync(jsonPath)) {
    throw new Error(`PYQ JSON database not found at: ${jsonPath}`);
  }

  const rawData = fs.readFileSync(jsonPath, 'utf8');
  const pyqs = JSON.parse(rawData);
  console.log(`Loaded ${pyqs.length} authentic PYQs from JSON database.`);

  // Delete old dummy questions
  db.exec("DELETE FROM questions");

  const insertStmt = db.prepare(`
    INSERT OR IGNORE INTO questions (
      subject_slug, topic_slug, question_text, options,
      correct_option, explanation, difficulty, gate_year, marks
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  let insertedCount = 0;
  const runBatch = db.transaction((questions) => {
    for (const q of questions) {
      if (!q.question_text || !q.question_text.trim()) continue;

      const canonicalTopic = assignCanonicalTopic(q.subject_slug, q.question_text, q.topic_slug);
      const optionsJson = JSON.stringify(
        Array.isArray(q.options) && q.options.length >= 2 ? q.options : ['A', 'B', 'C', 'D']
      );

      const correctOption = typeof q.correct_option === 'number' && q.correct_option >= 0 && q.correct_option <= 3
        ? q.correct_option
        : 0;

      const difficulty = ['easy', 'medium', 'hard'].includes(q.difficulty)
        ? q.difficulty
        : 'medium';

      const fullExplanation = q.explanation
        ? `[Official GATE Answer: ${q.answer_key || ''}]\n\n${q.explanation}`
        : (q.answer_key ? `Official GATE Answer: ${q.answer_key}` : '');

      try {
        insertStmt.run(
          q.subject_slug,
          canonicalTopic,
          q.question_text.trim(),
          optionsJson,
          correctOption,
          fullExplanation,
          difficulty,
          q.gate_year || 'GATE CSE',
          Number(q.marks) || 2
        );
        insertedCount++;
      } catch (err) {
        console.error(`Failed to insert question ${q.id}:`, err.message);
      }
    }
  });

  runBatch(pyqs);
  console.log(`Seeding complete! Successfully seeded ${insertedCount} authentic GATE questions.`);
  db.close();
  return { totalSeeded: insertedCount };
}

if (require.main === module) {
  seedPyqs();
}

module.exports = { seedPyqs };
