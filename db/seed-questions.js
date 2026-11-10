"use strict";

const seedQuestions = [
  // C Programming
  {
    subject_slug: "c-programming",
    topic_slug: "data-types-and-operators",
    question_text: "What is the output of printf(\"%d\", 8 / 3); in C?",
    options: ["2", "2.66", "3", "Error"],
    correct_option: 0,
    explanation: "Both operands are integers, so integer division truncates to 2.",
    difficulty: "easy"
  },
  {
    subject_slug: "c-programming",
    topic_slug: "data-types-and-operators",
    question_text: "What is the output of printf(\"%d\", 5 > 3); in C?",
    options: ["0", "1", "5", "3"],
    correct_option: 1,
    explanation: "A true relational expression evaluates to 1 in C.",
    difficulty: "easy"
  },
  {
    subject_slug: "c-programming",
    topic_slug: "data-types-and-operators",
    question_text: "Which operator has higher precedence in C?",
    options: ["+", "*", "=", "||"],
    correct_option: 1,
    explanation: "Multiplication has higher precedence than addition, assignment, and logical OR.",
    difficulty: "medium"
  },
  {
    subject_slug: "c-programming",
    topic_slug: "data-types-and-operators",
    question_text: "What is the result of 7 % 3 in C?",
    options: ["1", "2", "3", "0"],
    correct_option: 0,
    explanation: "The modulo operator returns remainder: 7 = 3*2 + 1.",
    difficulty: "easy"
  },
  {
    subject_slug: "c-programming",
    topic_slug: "pointers",
    question_text: "In C, if ptr is an int*, what does *(ptr + 1) access?",
    options: [
      "The value at the next 1 byte address",
      "The value at the next integer element in memory",
      "The address of ptr plus one bit",
      "Undefined syntax error"
    ],
    correct_option: 1,
    explanation: "Pointer arithmetic automatically scales by sizeof(*ptr), so ptr + 1 points to the next integer element.",
    difficulty: "medium"
  },
  {
    subject_slug: "c-programming",
    topic_slug: "pointers",
    question_text: "What is the type of NULL pointer constant in standard C?",
    options: ["int", "(void*)0", "char*", "unsigned long"],
    correct_option: 1,
    explanation: "NULL is defined in standard C libraries typically as ((void *)0) or integer 0.",
    difficulty: "easy"
  },
  {
    subject_slug: "c-programming",
    topic_slug: "arrays-and-strings",
    question_text: "How is a C string terminated in memory?",
    options: ["\\n", "\\0 (null character)", "EOF", "$"],
    correct_option: 1,
    explanation: "Strings in C are arrays of characters terminated by the null character '\\0'.",
    difficulty: "easy"
  },
  {
    subject_slug: "c-programming",
    topic_slug: "functions-and-recursion",
    question_text: "Which data structure is implicitly used by the system to manage recursive function calls?",
    options: ["Queue", "Call Stack", "Heap", "Hash Map"],
    correct_option: 1,
    explanation: "Function call frames with parameters and return addresses are pushed onto the call stack.",
    difficulty: "easy"
  },

  // DBMS
  {
    subject_slug: "dbms",
    topic_slug: "er-model",
    question_text: "Which symbol represents an entity in an ER diagram?",
    options: ["Oval", "Rectangle", "Diamond", "Circle"],
    correct_option: 1,
    explanation: "A rectangle represents an entity in standard ER notation.",
    difficulty: "easy"
  },
  {
    subject_slug: "dbms",
    topic_slug: "er-model",
    question_text: "Which symbol represents a relationship in an ER diagram?",
    options: ["Rectangle", "Oval", "Diamond", "Triangle"],
    correct_option: 2,
    explanation: "A diamond is used to represent a relationship between entities in an ER diagram.",
    difficulty: "easy"
  },
  {
    subject_slug: "dbms",
    topic_slug: "relational-model",
    question_text: "In the relational model, a row in a table is called a:",
    options: ["Attribute", "Tuple", "Domain", "Schema"],
    correct_option: 1,
    explanation: "A row in a relational database table is formally called a tuple.",
    difficulty: "easy"
  },
  {
    subject_slug: "dbms",
    topic_slug: "relational-model",
    question_text: "Which key uniquely identifies each row in a relation?",
    options: ["Foreign key", "Primary key", "Non-key attribute", "Duplicate key"],
    correct_option: 1,
    explanation: "A primary key is an attribute or set of attributes that uniquely identifies each tuple.",
    difficulty: "easy"
  },
  {
    subject_slug: "dbms",
    topic_slug: "sql-queries",
    question_text: "Which SQL command is used to retrieve data from a table?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    correct_option: 2,
    explanation: "SELECT queries and retrieves data from database tables.",
    difficulty: "easy"
  },
  {
    subject_slug: "dbms",
    topic_slug: "sql-queries",
    question_text: "Which SQL clause is used to filter rows based on a condition?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "SELECT"],
    correct_option: 1,
    explanation: "The WHERE clause filters rows matching a predicate.",
    difficulty: "easy"
  },
  {
    subject_slug: "dbms",
    topic_slug: "normalization",
    question_text: "Which normal form requires each attribute to contain atomic values?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correct_option: 0,
    explanation: "1NF (First Normal Form) requires that all domain values are atomic.",
    difficulty: "easy"
  },
  {
    subject_slug: "dbms",
    topic_slug: "transactions",
    question_text: "Which ACID property ensures that a transaction is completed entirely or not at all?",
    options: ["Consistency", "Isolation", "Atomicity", "Durability"],
    correct_option: 2,
    explanation: "Atomicity ensures 'all or nothing' execution of transaction operations.",
    difficulty: "easy"
  },

  // Data Structures
  {
    subject_slug: "data-structures",
    topic_slug: "time-and-space-complexity",
    question_text: "What is the worst-case time complexity of searching an element in a balanced Binary Search Tree (AVL tree)?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct_option: 1,
    explanation: "A balanced BST guarantees height O(log n), so search takes O(log n) in the worst case.",
    difficulty: "easy"
  },
  {
    subject_slug: "data-structures",
    topic_slug: "arrays",
    question_text: "What is the time complexity to access an element at index i in an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(i)"],
    correct_option: 0,
    explanation: "Arrays allow random access via base_address + i * element_size in constant O(1) time.",
    difficulty: "easy"
  },
  {
    subject_slug: "data-structures",
    topic_slug: "linked-lists",
    question_text: "To delete a node after a given pointer p in a singly linked list, which operation is performed?",
    options: ["p = p->next", "p->next = p->next->next", "free(p)", "p->next = NULL"],
    correct_option: 1,
    explanation: "Bypassing the next node by setting p->next = p->next->next removes it from the list in O(1) time.",
    difficulty: "easy"
  },
  {
    subject_slug: "data-structures",
    topic_slug: "stacks",
    question_text: "Which principle does a Stack follow?",
    options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "Priority Based", "Random Access"],
    correct_option: 1,
    explanation: "Stacks strictly follow Last In, First Out (LIFO).",
    difficulty: "easy"
  },
  {
    subject_slug: "data-structures",
    topic_slug: "queues",
    question_text: "What is the primary characteristic of a FIFO data structure?",
    options: ["Last inserted is removed first", "First inserted is removed first", "Elements are sorted automatically", "Only binary values allowed"],
    correct_option: 1,
    explanation: "A Queue is a First In First Out (FIFO) data structure where insertion happens at the rear and deletion at the front.",
    difficulty: "easy"
  },
  {
    subject_slug: "data-structures",
    topic_slug: "trees-and-binary-search-trees",
    question_text: "Which tree traversal of a Binary Search Tree (BST) visits nodes in ascending sorted order?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correct_option: 1,
    explanation: "In-order traversal (Left, Root, Right) of a BST produces elements in strictly ascending sorted order.",
    difficulty: "easy"
  },

  // Algorithms
  {
    subject_slug: "algorithms",
    topic_slug: "asymptotic-notations",
    question_text: "Which asymptotic notation represents the tight asymptotic bound?",
    options: ["Big-O (O)", "Big-Omega (Ω)", "Big-Theta (Θ)", "Little-o (o)"],
    correct_option: 2,
    explanation: "Big-Theta (Θ) defines an asymptotically tight bound sandwiched between upper and lower constants.",
    difficulty: "easy"
  },
  {
    subject_slug: "algorithms",
    topic_slug: "searching-and-sorting",
    question_text: "What is the worst-case time complexity of standard QuickSort without random pivot selection?",
    options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"],
    correct_option: 2,
    explanation: "When partitions are extremely unbalanced (such as already sorted arrays with first element as pivot), QuickSort degrades to O(n²).",
    difficulty: "medium"
  },
  {
    subject_slug: "algorithms",
    topic_slug: "greedy-algorithms",
    question_text: "Which algorithm finds the Minimum Spanning Tree of a connected undirected graph using a greedy approach?",
    options: ["Bellman-Ford", "Kruskal's Algorithm", "Floyd-Warshall", "Breadth First Search"],
    correct_option: 1,
    explanation: "Both Kruskal's and Prim's algorithms are greedy methods to construct a Minimum Spanning Tree (MST).",
    difficulty: "easy"
  },
  {
    subject_slug: "algorithms",
    topic_slug: "dynamic-programming",
    question_text: "What are the two key properties required for a problem to be solved using Dynamic Programming?",
    options: [
      "Optimal Substructure and Overlapping Subproblems",
      "Greedy Choice and Divide and Conquer",
      "Backtracking and Recursion",
      "Randomization and Hashing"
    ],
    correct_option: 0,
    explanation: "Dynamic programming applies when subproblems overlap and an optimal solution exhibits optimal substructure.",
    difficulty: "easy"
  },

  // Operating System
  {
    subject_slug: "operating-system",
    topic_slug: "process-and-threads",
    question_text: "What is shared among multiple threads belonging to the same process?",
    options: ["Program Counter", "Stack", "Code and Heap segments", "CPU Registers"],
    correct_option: 2,
    explanation: "Threads of a process share address space (code, data, heap) and open files, but maintain private stacks and register sets.",
    difficulty: "medium"
  },
  {
    subject_slug: "operating-system",
    topic_slug: "cpu-scheduling",
    question_text: "Which CPU scheduling algorithm can lead to the 'convoy effect'?",
    options: ["Round Robin (RR)", "First-Come First-Served (FCFS)", "Shortest Job First (SJF)", "Priority Scheduling"],
    correct_option: 1,
    explanation: "In FCFS, when a long CPU-bound process holds the CPU, short I/O bound processes queue behind it, causing the convoy effect.",
    difficulty: "easy"
  },
  {
    subject_slug: "operating-system",
    topic_slug: "deadlocks",
    question_text: "Which condition is NOT one of Coffman's four necessary conditions for a deadlock?",
    options: ["Mutual Exclusion", "Hold and Wait", "Preemption", "Circular Wait"],
    correct_option: 2,
    explanation: "The condition is 'No Preemption', meaning resources cannot be forcibly seized from a holding process.",
    difficulty: "medium"
  },
  {
    subject_slug: "operating-system",
    topic_slug: "memory-management",
    question_text: "What hardware component translates virtual addresses to physical addresses at runtime?",
    options: ["ALU", "TLB only", "MMU (Memory Management Unit)", "DMA Controller"],
    correct_option: 2,
    explanation: "The Memory Management Unit (MMU) handles address translation between virtual and physical memory.",
    difficulty: "easy"
  },

  // Computer Networks
  {
    subject_slug: "computer-networks",
    topic_slug: "network-models-osi-and-tcp-ip",
    question_text: "Which layer in the OSI model is responsible for end-to-end reliable delivery and flow control?",
    options: ["Network Layer", "Transport Layer", "Data Link Layer", "Session Layer"],
    correct_option: 1,
    explanation: "The Transport Layer (layer 4) ensures end-to-end delivery, segmentation, flow control, and error recovery.",
    difficulty: "easy"
  },
  {
    subject_slug: "computer-networks",
    topic_slug: "ip-addressing-and-subnetting",
    question_text: "How many total IP addresses are available in a subnet with prefix /28?",
    options: ["14", "16", "32", "64"],
    correct_option: 1,
    explanation: "32 - 28 = 4 host bits. Total addresses = 2^4 = 16 (with 14 usable for host machines).",
    difficulty: "easy"
  },
  {
    subject_slug: "computer-networks",
    topic_slug: "tcp-and-udp",
    question_text: "How many packets are exchanged in a standard TCP connection establishment handshake?",
    options: ["2 (SYN, ACK)", "3 (SYN, SYN-ACK, ACK)", "4 (SYN, ACK, FIN, ACK)", "1 (SYN)"],
    correct_option: 1,
    explanation: "TCP uses a three-way handshake: Client SYN -> Server SYN-ACK -> Client ACK.",
    difficulty: "easy"
  },

  // Engineering Mathematics
  {
    subject_slug: "engineering-mathematics",
    topic_slug: "linear-algebra",
    question_text: "If a square matrix A has determinant det(A) = 0, which statement is TRUE?",
    options: ["A is invertible", "A is singular and has no inverse", "All eigenvalues are 1", "A must be the zero matrix"],
    correct_option: 1,
    explanation: "A matrix with zero determinant cannot be inverted and is termed singular.",
    difficulty: "easy"
  },
  {
    subject_slug: "engineering-mathematics",
    topic_slug: "probability",
    question_text: "If a fair die is rolled once, what is the probability of rolling a prime number?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correct_option: 2,
    explanation: "The prime numbers on a 6-sided die are 2, 3, 5 (3 outcomes). P = 3/6 = 1/2.",
    difficulty: "easy"
  },

  // General Aptitude
  {
    subject_slug: "general-aptitude",
    topic_slug: "numerical-calculation",
    question_text: "If an item is bought for $80 and sold for $100, what is the profit percentage?",
    options: ["20%", "25%", "15%", "30%"],
    correct_option: 1,
    explanation: "Profit = 100 - 80 = 20. Profit % = (20 / 80) * 100 = 25%.",
    difficulty: "easy"
  },
  {
    subject_slug: "general-aptitude",
    topic_slug: "logical-reasoning",
    question_text: "Find the next number in the series: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "48"],
    correct_option: 1,
    explanation: "Differences are +4, +6, +8, +10, so next difference is +12. 30 + 12 = 42.",
    difficulty: "easy"
  },

  // Theory of Computation
  {
    subject_slug: "theory-of-computation",
    topic_slug: "finite-automata",
    question_text: "Which language class is recognized by a Deterministic Finite Automaton (DFA)?",
    options: ["Regular Languages", "Context-Free Languages", "Context-Sensitive Languages", "Recursively Enumerable"],
    correct_option: 0,
    explanation: "Finite automata (DFA and NFA) characterize the class of Regular Languages.",
    difficulty: "easy"
  },
  {
    subject_slug: "theory-of-computation",
    topic_slug: "regular-expressions",
    question_text: "Which language is generated by the regular expression (0+1)*?",
    options: [
      "All binary strings of even length",
      "All binary strings including the empty string",
      "Only strings ending with 1",
      "Non-empty binary strings only"
    ],
    correct_option: 1,
    explanation: "(0+1)* generates the set of all binary strings over alphabet {0, 1}, including epsilon (empty string).",
    difficulty: "easy"
  },

  // Compiler Design
  {
    subject_slug: "compiler-design",
    topic_slug: "compiler-phases",
    question_text: "What is the output produced by the Lexical Analysis phase?",
    options: ["Parse Tree", "Stream of Tokens", "Intermediate Code", "Machine Assembly"],
    correct_option: 1,
    explanation: "Lexical analysis (scanner) converts source characters into a stream of meaningful tokens.",
    difficulty: "easy"
  },
  {
    subject_slug: "compiler-design",
    topic_slug: "lexical-analysis",
    question_text: "Which formal model is used to implement lexical analyzers (like Lex/Flex)?",
    options: ["Pushdown Automata", "Deterministic Finite Automata (DFA)", "Turing Machine", "Linear Bounded Automata"],
    correct_option: 1,
    explanation: "Lexical analyzers use regular expressions compiled into DFAs for fast token recognition.",
    difficulty: "easy"
  },

  // Computer Organization & Architecture
  {
    subject_slug: "computer-organization-and-architecture",
    topic_slug: "pipelining",
    question_text: "In a k-stage instruction pipeline with cycle time τ, what is the ideal speedup over an unpipelined processor for a large number of instructions n?",
    options: ["k", "k * τ", "n / k", "1 / k"],
    correct_option: 0,
    explanation: "As n approaches infinity, the theoretical maximum speedup of a k-stage pipeline approaches k.",
    difficulty: "medium"
  },
  {
    subject_slug: "computer-organization-and-architecture",
    topic_slug: "cache-memory",
    question_text: "Which cache mapping technique allows any main memory block to be placed in any cache line?",
    options: ["Direct Mapped", "Fully Associative", "2-Way Set Associative", "Sector Mapped"],
    correct_option: 1,
    explanation: "In fully associative cache mapping, any block can reside in any line without fixed set restrictions.",
    difficulty: "easy"
  },

  // Digital Logic
  {
    subject_slug: "digital-logic",
    topic_slug: "logic-gates",
    question_text: "Which logic gate outputs 0 only when all its inputs are 1?",
    options: ["NOR", "NAND", "XOR", "AND"],
    correct_option: 1,
    explanation: "A NAND gate gives 0 (low) when all inputs are 1 (high), and 1 for all other input combinations.",
    difficulty: "easy"
  },
  {
    subject_slug: "digital-logic",
    topic_slug: "boolean-algebra",
    question_text: "According to De Morgan's Law, what is the complement of (A + B)?",
    options: ["A' + B'", "A' . B'", "A . B", "(A . B)'"],
    correct_option: 1,
    explanation: "De Morgan's first theorem states: (A + B)' = A' . B'.",
    difficulty: "easy"
  }
];

module.exports = { seedQuestions };
