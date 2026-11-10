"use strict";

// Lucide Icon SVG Paths Dictionary (100% Offline & Instant Rendering)
const LUCIDE_ICONS = {
  "graduation-cap": '<path d="M21.42 10.922a1 1 0 0 0-.019-.838L12.83 2.18a2 2 0 0 0-1.66 0L2.6 10.084a1 1 0 0 0 0 1.832l8.57 7.908a2 2 0 0 0 1.66 0l8.57-7.908a1 1 0 0 0 .02-.994z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  "home": '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  "layout-dashboard": '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  "trending-up": '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  "mail": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/>',
  "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
  "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  "check": '<polyline points="20 6 9 17 4 12"/>',
  "check-circle-2": '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  "x-circle": '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
  "search": '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "target": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  "play": '<polygon points="6 3 20 12 6 21 6 3"/>',
  "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  "trophy": '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  "clock": '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  "flame": '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  "sparkles": '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>',
  "rotate-ccw": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  "eye": '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  "eye-off": '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>',
  "menu": '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "layers": '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  "help-circle": '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/>',
  "bot": '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  "send": '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  "bookmark": '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>',
  "code-2": '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>',
  "network": '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  "cpu": '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
  "monitor": '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
  "database": '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  "globe": '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  "calculator": '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
  "brain": '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 4v16"/>',
  "binary": '<rect x="14" y="14" width="4" height="6" rx="2"/><rect x="6" y="4" width="4" height="6" rx="2"/><path d="M6 20h4"/><path d="M14 10h4"/><path d="M6 14h2v6"/><path d="M14 4h2v6"/>',
  "file-code-2": '<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m5 12-3 3 3 3"/><path d="m9 18 3-3-3-3"/>',
  "server": '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  "zap": '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
};

function getLucideSvg(name, size = 20, className = "") {
  const content = LUCIDE_ICONS[name] || LUCIDE_ICONS["book-open"];
  return `<svg class="lucide lucide-${name} ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${content}</svg>`;
}

const subjects = {
  "c-programming": {
    name: "C Programming",
    icon: "code-2",
    description: "Learn C fundamentals, pointers, arrays, functions and memory management.",
    topics: [
      "Data Types & Operators",
      "Conditional Statements and Loops",
      "Functions and Recursion",
      "Arrays and Strings",
      "Pointers",
      "Structures and Unions",
      "Dynamic Memory Allocation",
      "Storage Classes",
      "C Output and Tracing"
    ]
  },
  "data-structures": {
    name: "Data Structures",
    icon: "network",
    description: "Study linked lists, stacks, queues, trees, heaps and graph structures.",
    topics: [
      "Time and Space Complexity",
      "Arrays",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Trees and Binary Search Trees",
      "Heaps and Hashing",
      "Graphs"
    ]
  },
  algorithms: {
    name: "Algorithms",
    icon: "cpu",
    description: "Practice sorting, asymptotic analysis, greedy algorithms and dynamic programming.",
    topics: [
      "Asymptotic Notations",
      "Searching and Sorting",
      "Divide and Conquer",
      "Greedy Algorithms",
      "Dynamic Programming",
      "Graph Algorithms",
      "Minimum Spanning Trees",
      "Shortest Path Algorithms",
      "Backtracking",
      "NP-Completeness"
    ]
  },
  "operating-system": {
    name: "Operating System",
    icon: "monitor",
    description: "Understand processes, CPU scheduling, synchronization, deadlocks and memory.",
    topics: [
      "Process and Threads",
      "CPU Scheduling",
      "Process Synchronization",
      "Deadlocks",
      "Memory Management",
      "Paging and Segmentation",
      "Virtual Memory",
      "File Systems",
      "Disk Scheduling"
    ]
  },
  dbms: {
    name: "DBMS",
    icon: "database",
    description: "Learn SQL, normalization, relational algebra, transactions and indexing.",
    topics: [
      "ER Model",
      "Relational Model",
      "SQL Queries",
      "Relational Algebra",
      "Functional Dependencies",
      "Normalization",
      "Transactions",
      "Concurrency Control",
      "Indexing"
    ]
  },
  "computer-networks": {
    name: "Computer Networks",
    icon: "globe",
    description: "Explore network models, TCP/IP, IP addressing, subnetting and routing.",
    topics: [
      "Network Models: OSI and TCP/IP",
      "Data Link Layer",
      "Error Detection",
      "MAC and Ethernet",
      "IP Addressing and Subnetting",
      "Routing Algorithms",
      "TCP and UDP",
      "Application Layer",
      "Network Security Basics"
    ]
  },
  "engineering-mathematics": {
    name: "Engineering Mathematics",
    icon: "calculator",
    description: "Practice discrete math, linear algebra, eigenvalues and probability.",
    topics: [
      "Propositional and Predicate Logic",
      "Sets and Relations",
      "Combinatorics",
      "Graph Theory",
      "Linear Algebra",
      "Eigenvalues and Eigenvectors",
      "Probability",
      "Random Variables"
    ]
  },
  "general-aptitude": {
    name: "General Aptitude",
    icon: "brain",
    description: "Improve verbal ability, numerical calculations, ratios and logical reasoning.",
    topics: [
      "Numerical Calculation",
      "Percentages and Ratios",
      "Averages",
      "Time and Work",
      "Probability and Counting",
      "Logical Reasoning",
      "Verbal Aptitude",
      "Reading Comprehension"
    ]
  },
  "theory-of-computation": {
    name: "Theory of Computation (TOC)",
    icon: "binary",
    description: "Learn finite automata, regular expressions, context free grammars and Turing machines.",
    topics: [
      "Finite Automata",
      "Regular Expressions",
      "Context Free Grammar",
      "Pushdown Automata",
      "Turing Machine",
      "Decidability",
      "Undecidability"
    ]
  },
  "compiler-design": {
    name: "Compiler Design (CD)",
    icon: "file-code-2",
    description: "Learn compiler phases, lexical analysis, parsers and code optimization.",
    topics: [
      "Compiler Phases",
      "Lexical Analysis",
      "Regular Expressions",
      "Finite Automata",
      "Syntax Analysis and Parsing",
      "Context Free Grammar",
      "Top Down Parsing",
      "Bottom Up Parsing",
      "Syntax Directed Translation",
      "Intermediate Code Generation",
      "Code Optimization",
      "Code Generation"
    ]
  },
  "computer-organization-and-architecture": {
    name: "Computer Organization (COA)",
    icon: "server",
    description: "Learn processor architecture, instruction sets, pipelining and cache hierarchy.",
    topics: [
      "Number Systems and Data Representation",
      "Boolean Algebra and Logic Circuits",
      "Instruction Set Architecture",
      "Addressing Modes",
      "CPU Organization",
      "Pipelining",
      "Memory Hierarchy",
      "Cache Memory",
      "Virtual Memory",
      "Input Output Organization",
      "Interrupts and DMA",
      "Multiprocessors"
    ]
  },
  "digital-logic": {
    name: "Digital Logic (DL)",
    icon: "zap",
    description: "Learn logic gates, Boolean algebra, K-maps, combinational circuits and flip-flops.",
    topics: [
      "Number Systems and Codes",
      "Boolean Algebra",
      "Logic Gates",
      "K-Maps",
      "Combinational Circuits",
      "Adders and Subtractors",
      "Multiplexers and Demultiplexers",
      "Encoders and Decoders",
      "Flip-Flops",
      "Registers and Counters",
      "Sequential Circuits",
      "Finite State Machines"
    ]
  }
};

const views = [...document.querySelectorAll("[data-view]")];
const navLinks = [...document.querySelectorAll("[data-nav]")];
const globalStatus = document.getElementById("globalStatus");
const mobileNavToggle = document.getElementById("mobileNavToggle");
const primaryNav = document.getElementById("primaryNav");

let statusTimer;
let quizQuestions = [];
let currentQuestion = 0;
let quizScore = 0;
let selectedAnswer = -1;
let answered = false;

// AI State
let activeAiQuestion = null;
let aiSelectedAnswer = -1;
let aiAnswered = false;
let currentDoubtContext = null;
const doubtHistory = [];

function apiUrl(path) {
  const clean = String(path || "").replace(/^\/+/, "");
  return `/${clean}`;
}

async function parseJsonResponse(res) {
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return await res.json();
  }
  const rawText = await res.text();
  let cleanMessage = rawText.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (cleanMessage.length > 120) cleanMessage = cleanMessage.slice(0, 120) + "...";
  throw new Error(`Server returned HTTP ${res.status}${cleanMessage ? `: ${cleanMessage}` : ""}`);
}

// Mobile Menu Drawer Handler
function toggleMobileNav(forceState) {
  if (!primaryNav || !mobileNavToggle) return;
  const isOpen = typeof forceState === "boolean" ? forceState : !primaryNav.classList.contains("is-open");
  primaryNav.classList.toggle("is-open", isOpen);
  mobileNavToggle.setAttribute("aria-expanded", String(isOpen));
  mobileNavToggle.innerHTML = isOpen ? getLucideSvg("x", 24) : getLucideSvg("menu", 24);
}

if (mobileNavToggle) {
  mobileNavToggle.innerHTML = getLucideSvg("menu", 24);
  mobileNavToggle.addEventListener("click", () => toggleMobileNav());
}

document.addEventListener("click", (e) => {
  if (primaryNav && primaryNav.classList.contains("is-open")) {
    if (!primaryNav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
      toggleMobileNav(false);
    }
  }
});

async function refreshSessionState() {
  const accountLinks = navLinks.filter(link => ["login", "signup"].includes(link.dataset.nav));
  const logoutButton = document.querySelector("[data-logout]");

  try {
    const response = await fetch(apiUrl("api/session"), { credentials: "same-origin" });
    if (!response.ok) {
      throw new Error(`Session API returned HTTP ${response.status}.`);
    }

    const data = await response.json();
    const authenticated = data.authenticated === true;
    accountLinks.forEach(link => {
      link.hidden = authenticated;
    });
    if (logoutButton) {
      logoutButton.hidden = !authenticated;
    }
  } catch (error) {
    console.error("Session status error:", error);
    accountLinks.forEach(link => {
      link.hidden = false;
    });
    if (logoutButton) {
      logoutButton.hidden = true;
    }
  }
}

async function logout() {
  const button = document.querySelector("[data-logout]");
  if (button) button.disabled = true;

  try {
    const response = await fetch(apiUrl("logout"), {
      method: "POST",
      credentials: "same-origin"
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || `Logout API returned HTTP ${response.status}.`);
    }

    await refreshSessionState();
    navigate("home");
    setGlobalStatus(result.message || "Logged out successfully.");
  } catch (error) {
    console.error("Logout error:", error);
    setGlobalStatus("Could not log out. Please try again.");
  } finally {
    if (button) button.disabled = false;
  }
}

function setGlobalStatus(message) {
  if (!globalStatus) return;
  globalStatus.textContent = message;
  globalStatus.hidden = false;
  window.clearTimeout(statusTimer);
  statusTimer = window.setTimeout(() => {
    globalStatus.hidden = true;
  }, 4000);
}

function routeParts() {
  return window.location.hash.slice(1).split("/").filter(Boolean).map(part => {
    try {
      return decodeURIComponent(part);
    } catch (error) {
      return part;
    }
  });
}

function navigate(route) {
  window.location.hash = route;
}

function renderRoute() {
  toggleMobileNav(false);
  const [route = "home", ...params] = routeParts();
  const resolvedRoute = route === "login" || route === "signup" ? "auth" : route;
  const validViews = ["home", "auth", "subjects", "dashboard", "progress", "contact", "ai-pyq", "doubt-solver", "pyq-tests"];
  const viewName = validViews.includes(resolvedRoute)
    ? resolvedRoute
    : resolvedRoute === "subject" || resolvedRoute === "practice"
      ? resolvedRoute
      : "home";

  if (viewName === "auth") {
    const authMode = route === "login" ? "login" : "signup";
    setAuthMode(authMode);
  }

  views.forEach(view => {
    view.hidden = view.dataset.view !== viewName;
  });
  document.body.dataset.currentView = viewName;

  const activeNav = viewName === "subject" || viewName === "practice" ? "subjects" : viewName === "auth" ? route : viewName;
  navLinks.forEach(link => {
    if (link.dataset.nav === activeNav) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (viewName === "subjects") {
    const search = document.getElementById("subjectSearch");
    if (search) search.focus({ preventScroll: true });
  } else if (viewName === "subject") {
    renderSubject(params[0] || "");
  } else if (viewName === "practice") {
    startPractice(params[0] || "", params[1] || "");
  } else if (viewName === "dashboard") {
    loadQuizHistory("dashboard");
  } else if (viewName === "progress") {
    loadQuizHistory("progress");
  } else if (viewName === "ai-pyq") {
    initAiPyqView();
  } else if (viewName === "doubt-solver") {
    initDoubtSolverView();
  } else if (viewName === "pyq-tests") {
    initPyqTestsView();
  }

  const titles = {
    home: "GATEPrep | Prepare Smarter",
    auth: "GATEPrep | Account",
    subjects: "GATEPrep | Subjects",
    subject: "GATEPrep | Subject Learning",
    practice: "GATEPrep | Practice",
    dashboard: "GATEPrep | Dashboard",
    progress: "GATEPrep | Progress",
    contact: "GATEPrep | Contact",
    "ai-pyq": "GATEPrep | AI GATE PYQ Generator",
    "doubt-solver": "GATEPrep | AI Doubt Solver",
    "pyq-tests": "GATEPrep | Authentic PYQs & Mock Tests"
  };
  document.title = titles[viewName] || "GATEPrep";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function makeSubjectCard(slug, subject) {
  const card = document.createElement("article");
  card.className = "subject-card";

  const header = document.createElement("div");
  header.className = "subject-card-header";

  const iconBox = document.createElement("div");
  iconBox.className = "subject-icon-box";
  iconBox.innerHTML = getLucideSvg(subject.icon, 24);

  const title = document.createElement("h2");
  title.textContent = subject.name;

  header.append(iconBox, title);

  const description = document.createElement("p");
  description.textContent = subject.description;

  const footer = document.createElement("div");
  footer.className = "subject-card-footer";

  const countPill = document.createElement("span");
  countPill.className = "topic-count-pill";
  countPill.innerHTML = `${getLucideSvg("layers", 14)} ${subject.topics.length} Topics`;

  const button = document.createElement("a");
  button.className = "button button-primary";
  button.href = `#subject/${encodeURIComponent(slug)}`;
  button.innerHTML = `Explore ${getLucideSvg("arrow-right", 16)}`;

  footer.append(countPill, button);
  card.append(header, description, footer);
  return card;
}

function renderSubjects() {
  const grid = document.getElementById("subjectGrid");
  if (grid) {
    grid.replaceChildren();
    Object.entries(subjects).forEach(([slug, subject]) => {
      grid.appendChild(makeSubjectCard(slug, subject));
    });
    filterSubjects();
  }

  const dashboardGrid = document.getElementById("dashboardSubjects");
  if (dashboardGrid) {
    dashboardGrid.replaceChildren();
    Object.entries(subjects).forEach(([slug, subject]) => {
      const link = document.createElement("a");
      link.className = "dashboard-subject-link";
      link.href = `#subject/${encodeURIComponent(slug)}`;

      const info = document.createElement("div");
      info.className = "dashboard-subject-info";
      info.innerHTML = `
        <span class="subject-icon-box" style="width:34px;height:34px;border-radius:8px;">${getLucideSvg(subject.icon, 18)}</span>
        <div>
          <strong>${subject.name}</strong>
          <div><span>${subject.topics.length} learning topics</span></div>
        </div>
      `;

      const arrow = document.createElement("span");
      arrow.innerHTML = getLucideSvg("arrow-right", 16);
      arrow.style.color = "var(--text-subtle)";

      link.append(info, arrow);
      dashboardGrid.appendChild(link);
    });
  }
}

function filterSubjects() {
  const searchInput = document.getElementById("subjectSearch");
  if (!searchInput) return;
  const value = searchInput.value.trim().toLowerCase();
  const cards = [...document.querySelectorAll("#subjectGrid .subject-card")];
  let matches = 0;

  cards.forEach((card, index) => {
    const subject = Object.values(subjects)[index];
    const visible = `${subject.name} ${subject.description}`.toLowerCase().includes(value);
    card.hidden = !visible;
    if (visible) matches++;
  });

  const noSubjects = document.getElementById("noSubjects");
  if (noSubjects) noSubjects.hidden = matches !== 0;
}

function topicSlug(topic) {
  return topic.toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function renderSubject(slug) {
  const subject = subjects[slug];
  const hero = document.getElementById("subjectHero");
  const grid = document.getElementById("topicGrid");
  const status = document.getElementById("subjectStatus");
  if (!grid || !hero) return;

  grid.replaceChildren();
  if (status) status.textContent = "";

  if (!subject) {
    hero.replaceChildren();
    const title = document.createElement("h1");
    title.textContent = "Subject not found";
    const description = document.createElement("p");
    description.textContent = "Please return to All Subjects and select a valid subject.";
    hero.append(title, description);
    return;
  }

  hero.innerHTML = `
    <div class="subject-hero-icon">${getLucideSvg(subject.icon, 32)}</div>
    <div>
      <h1>${subject.name}</h1>
      <p>${subject.description}</p>
    </div>
  `;

  subject.topics.forEach(topic => {
    const card = document.createElement("article");
    card.className = "topic-card";

    const title = document.createElement("div");
    title.className = "topic-card-title";
    title.innerHTML = `${getLucideSvg("book-open", 18)} <span>${topic}</span>`;

    const detail = document.createElement("p");
    detail.textContent = "Study core concepts, watch video lectures, and practice GATE questions.";

    const actions = document.createElement("div");
    actions.className = "topic-actions";

    const video = document.createElement("a");
    video.className = "button button-primary";
    video.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`GATE CSE ${subject.name} ${topic}`)}`;
    video.target = "_blank";
    video.rel = "noopener noreferrer";
    video.innerHTML = `${getLucideSvg("play", 15)} Find videos`;

    const guideButton = document.createElement("button");
    guideButton.className = "button button-secondary";
    guideButton.type = "button";
    guideButton.innerHTML = `${getLucideSvg("file-text", 15)} Study guide`;

    const guide = document.createElement("div");
    guide.className = "topic-notes";
    guide.hidden = true;
    guide.textContent = "Review core definitions, note down key formulas and time complexities, and practice previous-year GATE questions.";

    guideButton.addEventListener("click", () => {
      guide.hidden = !guide.hidden;
    });

    const practice = document.createElement("a");
    practice.className = "button button-secondary";
    practice.href = `#practice/${encodeURIComponent(slug)}/${encodeURIComponent(topicSlug(topic))}`;
    practice.innerHTML = `${getLucideSvg("target", 15)} Practice questions`;

    actions.append(video, guideButton, practice);
    card.append(title, detail, actions, guide);
    grid.appendChild(card);
  });
}

function readableName(slug) {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function showPracticeError(message) {
  const numElem = document.getElementById("questionNumber");
  const textElem = document.getElementById("questionText");
  const optionsElem = document.getElementById("answerOptions");
  const feedbackElem = document.getElementById("quizFeedback");
  const checkBtn = document.getElementById("checkAnswer");
  const nextBtn = document.getElementById("nextQuestion");
  const statusElem = document.getElementById("practiceStatus");

  if (numElem) numElem.textContent = "Notice";
  if (textElem) textElem.textContent = message;
  if (optionsElem) optionsElem.replaceChildren();
  if (feedbackElem) feedbackElem.textContent = "";
  if (checkBtn) checkBtn.hidden = true;
  if (nextBtn) nextBtn.hidden = true;
  if (statusElem) statusElem.textContent = "Please choose a topic with available questions.";
}

let practiceAnswers = {};
let practiceChecked = {};

function saveCurrentPracticeInput() {
  const item = quizQuestions[currentQuestion];
  if (!item) return;
  const isNat = item.type === "NAT" || (!Array.isArray(item.options) || item.options.length < 2);
  if (isNat) {
    const input = document.getElementById("practiceNatInput");
    if (input && input.value.trim() !== "") {
      practiceAnswers[currentQuestion] = input.value.trim();
    }
  } else {
    const checked = document.querySelector("input[name='answer']:checked");
    if (checked) {
      practiceAnswers[currentQuestion] = Number(checked.value);
    }
  }
}

function prevQuestion() {
  saveCurrentPracticeInput();
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function nextQuestion() {
  saveCurrentPracticeInput();
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showQuizResult();
  }
}

function clearPracticeResponse() {
  delete practiceAnswers[currentQuestion];
  delete practiceChecked[currentQuestion];
  loadQuestion();
}

function jumpToPracticeQuestion(index) {
  if (index < 0 || index >= quizQuestions.length || index === currentQuestion) return;
  saveCurrentPracticeInput();
  currentQuestion = index;
  loadQuestion();
}

async function startPractice(subjectSlug, topic) {
  const quizPanel = document.getElementById("quizPanel");
  const resultPanel = document.getElementById("quizResult");
  const title = document.getElementById("practiceTitle");
  const progressFill = document.getElementById("quizProgress");
  const scoreLabel = document.getElementById("scoreLabel");

  if (quizPanel) quizPanel.hidden = false;
  if (resultPanel) resultPanel.hidden = true;
  if (progressFill) progressFill.style.width = "0%";
  if (scoreLabel) scoreLabel.innerHTML = `${getLucideSvg("target", 14)} Score: 0`;

  if (!subjectSlug || !topic) {
    if (title) title.textContent = "Practice questions";
    showPracticeError("Choose a subject topic before starting practice.");
    return;
  }

  if (title) title.textContent = `${readableName(subjectSlug)}: ${readableName(topic)}`;
  const qNum = document.getElementById("questionNumber");
  const qText = document.getElementById("questionText");
  if (qNum) qNum.textContent = "Loading questions...";
  if (qText) qText.textContent = "Connecting to question bank...";

  const checkBtn = document.getElementById("checkAnswer");
  const nextBtn = document.getElementById("nextQuestion");
  const prevBtn = document.getElementById("prevQuestion");
  if (checkBtn) checkBtn.hidden = true;
  if (nextBtn) nextBtn.hidden = true;
  if (prevBtn) prevBtn.disabled = true;

  try {
    const response = await fetch(
      `${apiUrl("api/questions")}?subject=${encodeURIComponent(subjectSlug)}&topic=${encodeURIComponent(topic)}`
    );
    if (!response.ok) {
      throw new Error(`Question bank returned HTTP ${response.status}.`);
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error("Question bank returned an invalid response.");
    }

    quizQuestions = data.map(item => {
      let options = [];
      try {
        options = typeof item.options === "string" ? JSON.parse(item.options) : item.options;
      } catch (e) {
        options = [];
      }
      if (!Array.isArray(options)) options = [];

      const isSingleLetter = options.length > 0 && options.every(o => /^[A-D]$/i.test(String(o).trim()));
      const isNat = item.type === "NAT" || options.length < 2 || isSingleLetter;

      return {
        id: item.id,
        question: item.question_text,
        options: isNat ? [] : options,
        type: isNat ? "NAT" : (item.type || "MCQ"),
        answer: Number(item.correct_option),
        answer_key: item.answer_key || "",
        explanation: item.explanation || "",
        difficulty: item.difficulty || "medium",
        marks: item.marks || 2,
        gate_year: item.gate_year || "GATE CSE"
      };
    });

    if (quizQuestions.length === 0) {
      showPracticeError("No questions are available for this specific topic yet.");
      return;
    }

    const practiceStatus = document.getElementById("practiceStatus");
    if (practiceStatus) practiceStatus.textContent = "";
    practiceAnswers = {};
    practiceChecked = {};
    currentQuestion = 0;
    quizScore = 0;
    loadQuestion();
  } catch (error) {
    console.error("Practice loading error:", error);
    showPracticeError("Could not load practice questions. Please check server connectivity.");
  }
}

function loadQuestion() {
  if (!quizQuestions.length) return;
  const item = quizQuestions[currentQuestion];
  if (!item) return;

  const qNum = document.getElementById("questionNumber");
  const scoreLabel = document.getElementById("scoreLabel");
  const progressFill = document.getElementById("quizProgress");
  const qText = document.getElementById("questionText");
  const optionsElem = document.getElementById("answerOptions");
  const feedback = document.getElementById("quizFeedback");
  const checkBtn = document.getElementById("checkAnswer");
  const nextBtn = document.getElementById("nextQuestion");
  const prevBtn = document.getElementById("prevQuestion");

  if (qNum) {
    qNum.innerHTML = `${getLucideSvg("file-text", 14)} Question ${currentQuestion + 1} of ${quizQuestions.length} <span class="accuracy-badge ${item.difficulty === 'hard' ? 'low' : item.difficulty === 'medium' ? 'mid' : 'high'}" style="margin-left:8px;text-transform:capitalize;">${item.difficulty}</span>`;
  }
  if (scoreLabel) {
    scoreLabel.innerHTML = `${getLucideSvg("target", 14)} Score: ${quizScore}`;
  }
  if (progressFill) {
    progressFill.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
  }

  // Render question jump palette bar
  const paletteBar = document.getElementById("practicePaletteBar");
  if (paletteBar) {
    paletteBar.replaceChildren();
    quizQuestions.forEach((_, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `practice-palette-btn ${idx === currentQuestion ? "is-active" : ""}`;
      if (practiceChecked[idx]) {
        btn.classList.add(practiceChecked[idx].isCorrect ? "is-correct" : "is-wrong");
      }
      btn.textContent = idx + 1;
      btn.title = `Go to Question ${idx + 1}`;
      btn.addEventListener("click", () => jumpToPracticeQuestion(idx));
      paletteBar.appendChild(btn);
    });
  }

  if (qText) {
    qText.innerHTML = renderRichContent(item.question);
  }

  const isNat = item.type === "NAT" || (!Array.isArray(item.options) || item.options.length < 2);
  const alreadyChecked = practiceChecked[currentQuestion];
  const savedAns = practiceAnswers[currentQuestion];

  if (optionsElem) {
    optionsElem.replaceChildren();
    if (isNat) {
      const natBox = document.createElement("div");
      natBox.className = "practice-nat-box";
      natBox.innerHTML = `
        <label for="practiceNatInput">Numerical Answer Type (NAT):</label>
        <input type="text" id="practiceNatInput" class="practice-nat-input" placeholder="Enter numerical value (e.g. 5)" value="${escapeHtml(String(savedAns !== undefined ? savedAns : ''))}" autocomplete="off" ${alreadyChecked ? 'disabled' : ''} />
      `;
      optionsElem.appendChild(natBox);
      const input = natBox.querySelector("#practiceNatInput");
      if (input && !alreadyChecked) {
        input.addEventListener("input", (e) => {
          practiceAnswers[currentQuestion] = e.target.value.trim();
        });
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            checkAnswer();
          }
        });
      }
    } else {
      item.options.forEach((option, index) => {
        const isSelected = savedAns === index;
        const plateClass = `plate-${String.fromCharCode(97 + (index % 4))}`;
        const label = document.createElement("label");
        label.className = `answer-option ${plateClass} ${isSelected ? "is-selected" : ""}`;
        if (alreadyChecked) {
          if (index === item.answer) label.classList.add("is-correct");
          else if (isSelected) label.classList.add("is-wrong");
        }

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = String(index);
        radio.checked = isSelected;
        if (alreadyChecked) radio.disabled = true;

        if (!alreadyChecked) {
          radio.addEventListener("change", () => {
            practiceAnswers[currentQuestion] = index;
            document.querySelectorAll(".answer-option").forEach(choice => choice.classList.remove("is-selected"));
            label.classList.add("is-selected");
          });
        }

        const letterSpan = document.createElement("span");
        letterSpan.className = "option-letter";
        letterSpan.textContent = `${String.fromCharCode(65 + index)}.`;

        const textSpan = document.createElement("span");
        textSpan.className = "option-text";
        textSpan.innerHTML = renderInlineContent(option);

        label.append(radio, letterSpan, textSpan);
        optionsElem.appendChild(label);
      });
    }
  }

  // Feedback State
  if (feedback) {
    if (alreadyChecked) {
      feedback.className = `quiz-feedback ${alreadyChecked.isCorrect ? "is-good" : "is-bad"}`;
      feedback.innerHTML = alreadyChecked.htmlFeedback;
    } else {
      feedback.textContent = "";
      feedback.className = "quiz-feedback";
    }
  }

  // Navigation Buttons
  if (checkBtn) {
    checkBtn.hidden = !!alreadyChecked;
    checkBtn.innerHTML = `${getLucideSvg("check-circle-2", 16)} Check answer`;
  }
  if (prevBtn) {
    prevBtn.disabled = currentQuestion === 0;
  }
  if (nextBtn) {
    nextBtn.hidden = false;
    nextBtn.innerHTML = currentQuestion === quizQuestions.length - 1
      ? `${getLucideSvg("trophy", 16)} View final results`
      : `Next question ${getLucideSvg("arrow-right", 16)}`;
  }
}

function checkAnswer() {
  if (practiceChecked[currentQuestion]) return;
  const feedback = document.getElementById("quizFeedback");
  const item = quizQuestions[currentQuestion];
  const isNat = item.type === "NAT" || (!Array.isArray(item.options) || item.options.length < 2);

  if (isNat) {
    const natInput = document.getElementById("practiceNatInput");
    const val = natInput ? natInput.value.trim() : (practiceAnswers[currentQuestion] || "");
    if (!val) {
      if (feedback) {
        feedback.className = "quiz-feedback is-bad";
        feedback.innerHTML = `${getLucideSvg("help-circle", 18)} <span>Please enter a numerical answer.</span>`;
      }
      return;
    }

    practiceAnswers[currentQuestion] = val;
    if (natInput) natInput.disabled = true;

    const uNum = parseFloat(val);
    const expected = item.answer_key || item.correct_answer || item.answer;
    const kNum = parseFloat(String(expected));
    let isCorrect = false;

    if (!isNaN(uNum) && !isNaN(kNum) && Math.abs(uNum - kNum) <= 0.05) {
      isCorrect = true;
    } else if (val.toLowerCase() === String(expected || "").trim().toLowerCase()) {
      isCorrect = true;
    }

    if (isCorrect) {
      quizScore++;
    }

    const htmlFeedback = isCorrect
      ? `${getLucideSvg("check-circle-2", 18)} <div><strong>Correct!</strong> Your numerical answer is exact.<div class="rich-content" style="margin-top:6px;">${renderRichContent(formatStepByStepSolution(item.explanation || ""))}</div></div>`
      : `${getLucideSvg("x-circle", 18)} <div><strong>Incorrect.</strong> Correct numerical answer is <strong>${escapeHtml(String(expected || "See explanation"))}</strong>.<div class="rich-content" style="margin-top:6px;">${renderRichContent(formatStepByStepSolution(item.explanation || ""))}</div></div>`;

    practiceChecked[currentQuestion] = { isCorrect, htmlFeedback };

    const scoreLabel = document.getElementById("scoreLabel");
    if (scoreLabel) {
      scoreLabel.innerHTML = `${getLucideSvg("target", 14)} Score: ${quizScore}`;
    }

    if (feedback) {
      feedback.className = `quiz-feedback ${isCorrect ? "is-good" : "is-bad"}`;
      feedback.innerHTML = htmlFeedback;
    }

    const checkBtn = document.getElementById("checkAnswer");
    if (checkBtn) checkBtn.hidden = true;

    // Update palette button
    const paletteBtn = document.querySelectorAll(".practice-palette-btn")[currentQuestion];
    if (paletteBtn) {
      paletteBtn.classList.add(isCorrect ? "is-correct" : "is-wrong");
    }
    return;
  }

  // MCQ
  const selected = practiceAnswers[currentQuestion];
  if (selected === undefined || selected < 0) {
    if (feedback) {
      feedback.className = "quiz-feedback is-bad";
      feedback.innerHTML = `${getLucideSvg("help-circle", 18)} <span>Please select an option first.</span>`;
    }
    return;
  }

  const isCorrect = selected === item.answer;
  if (isCorrect) {
    quizScore++;
  }

  document.querySelectorAll(".answer-option").forEach((label, index) => {
    const radio = label.querySelector("input");
    if (radio) radio.disabled = true;
    if (index === item.answer) label.classList.add("is-correct");
    else if (index === selected) label.classList.add("is-wrong");
  });

  const correctOptText = (item.options && item.options[item.answer]) ? escapeHtml(item.options[item.answer]) : "";
  const htmlFeedback = isCorrect
    ? `${getLucideSvg("check-circle-2", 18)} <div><strong>Correct!</strong><div class="rich-content" style="margin-top:6px;">${renderRichContent(formatStepByStepSolution(item.explanation || ""))}</div></div>`
    : `${getLucideSvg("x-circle", 18)} <div><strong>Incorrect.</strong> Correct answer is <strong>${String.fromCharCode(65 + item.answer)}. ${correctOptText}</strong>.<div class="rich-content" style="margin-top:6px;">${renderRichContent(formatStepByStepSolution(item.explanation || ""))}</div></div>`;

  practiceChecked[currentQuestion] = { isCorrect, htmlFeedback };

  const scoreLabel = document.getElementById("scoreLabel");
  if (scoreLabel) {
    scoreLabel.innerHTML = `${getLucideSvg("target", 14)} Score: ${quizScore}`;
  }

  if (feedback) {
    feedback.className = `quiz-feedback ${isCorrect ? "is-good" : "is-bad"}`;
    feedback.innerHTML = htmlFeedback;
  }

  const checkBtn = document.getElementById("checkAnswer");
  if (checkBtn) checkBtn.hidden = true;

  // Update palette button
  const paletteBtn = document.querySelectorAll(".practice-palette-btn")[currentQuestion];
  if (paletteBtn) {
    paletteBtn.classList.add(isCorrect ? "is-correct" : "is-wrong");
  }
}

async function showQuizResult() {
  const quizPanel = document.getElementById("quizPanel");
  const resultPanel = document.getElementById("quizResult");
  const progressFill = document.getElementById("quizProgress");
  const resultText = document.getElementById("resultText");

  if (quizPanel) quizPanel.hidden = true;
  if (resultPanel) resultPanel.hidden = false;
  if (progressFill) progressFill.style.width = "100%";

  const accuracy = Math.round((quizScore / quizQuestions.length) * 100);
  if (resultText) {
    resultText.innerHTML = `You scored <strong>${quizScore}</strong> out of <strong>${quizQuestions.length}</strong> questions.<br>Accuracy: <strong>${accuracy}%</strong>. Saving your score...`;
  }

  const [route, subjectSlug, topic] = routeParts();
  if (route !== "practice" || !subjectSlug || !topic) {
    if (resultText) {
      resultText.innerHTML = `You scored <strong>${quizScore}</strong> out of <strong>${quizQuestions.length}</strong>. Accuracy: <strong>${accuracy}%</strong>.`;
    }
    return;
  }

  try {
    const response = await fetch(apiUrl("api/quiz-results"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify({
        subject: subjectSlug,
        topic,
        score: quizScore,
        totalQuestions: quizQuestions.length
      })
    });
    if (!response.ok) {
      throw new Error(`Result API returned HTTP ${response.status}.`);
    }
    if (resultText) {
      resultText.innerHTML = `You scored <strong>${quizScore}</strong> out of <strong>${quizQuestions.length}</strong> questions.<br>Accuracy: <strong>${accuracy}%</strong>.<br><span style="color:var(--success);font-weight:600;">Result saved to your profile!</span>`;
    }
  } catch (error) {
    console.error("Quiz result save error:", error);
    if (resultText) {
      resultText.innerHTML = `You scored <strong>${quizScore}</strong> out of <strong>${quizQuestions.length}</strong> questions.<br>Accuracy: <strong>${accuracy}%</strong>.<br><span style="color:var(--text-muted);font-size:13px;">(Log in to permanently track your scores across sessions)</span>`;
    }
  }
}

function renderHistoryRows(container, data) {
  if (!container) return;
  container.replaceChildren();
  if (!data.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.style.textAlign = "center";
    cell.style.color = "var(--text-muted)";
    cell.style.padding = "24px";
    cell.textContent = "No quiz attempts recorded yet. Start practicing to track progress!";
    row.appendChild(cell);
    container.appendChild(row);
    return;
  }

  data.forEach(item => {
    const row = document.createElement("tr");
    const acc = Number(item.accuracy || 0);
    const badgeClass = acc >= 75 ? "high" : acc >= 50 ? "mid" : "low";

    const formattedDate = item.attempted_at
      ? new Date(item.attempted_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
      : "—";

    row.innerHTML = `
      <td><strong>${readableName(String(item.subject_slug || ""))}</strong></td>
      <td>${readableName(String(item.topic_slug || ""))}</td>
      <td>${item.score} / ${item.total_questions}</td>
      <td><span class="accuracy-badge ${badgeClass}">${acc.toFixed(1)}%</span></td>
      <td style="color:var(--text-muted);">${formattedDate}</td>
    `;
    container.appendChild(row);
  });
}

async function loadQuizHistory(viewName) {
  const isProgress = viewName === "progress";
  const status = document.getElementById(isProgress ? "progressStatus" : "dashboardHistoryStatus");
  const table = document.getElementById(isProgress ? "progressHistory" : "dashboardHistory");
  if (status) status.textContent = "Loading performance records...";
  if (table) table.replaceChildren();

  if (isProgress) {
    const tQuizzes = document.getElementById("totalQuizzes");
    const tQuestions = document.getElementById("totalQuestions");
    const avgAcc = document.getElementById("averageAccuracy");
    if (tQuizzes) tQuizzes.textContent = "—";
    if (tQuestions) tQuestions.textContent = "—";
    if (avgAcc) avgAcc.textContent = "—";
  } else {
    const dQuestions = document.getElementById("dashboardQuestions");
    const dAcc = document.getElementById("dashboardAccuracy");
    if (dQuestions) dQuestions.textContent = "—";
    if (dAcc) dAcc.textContent = "—";
  }

  try {
    const response = await fetch(apiUrl("api/quiz-results"), { credentials: "same-origin" });
    if (!response.ok) {
      throw new Error(`Progress API returned HTTP ${response.status}.`);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error("Progress API returned invalid data.");
    }

    const totalQuestions = data.reduce((sum, item) => sum + Number(item.total_questions || 0), 0);
    const average = data.length
      ? data.reduce((sum, item) => sum + Number(item.accuracy || 0), 0) / data.length
      : 0;

    if (isProgress) {
      const tQuizzes = document.getElementById("totalQuizzes");
      const tQuestions = document.getElementById("totalQuestions");
      const avgAcc = document.getElementById("averageAccuracy");
      if (tQuizzes) tQuizzes.textContent = String(data.length);
      if (tQuestions) tQuestions.textContent = String(totalQuestions);
      if (avgAcc) avgAcc.textContent = `${average.toFixed(1)}%`;
      if (status) status.textContent = data.length ? `You have completed ${data.length} quiz session${data.length === 1 ? "" : "s"}.` : "No quiz attempts recorded yet.";
    } else {
      const dQuestions = document.getElementById("dashboardQuestions");
      const dAcc = document.getElementById("dashboardAccuracy");
      const dProg = document.getElementById("dashboardProgressStatus");
      if (dQuestions) dQuestions.textContent = String(totalQuestions);
      if (dAcc) dAcc.textContent = `${average.toFixed(1)}%`;
      if (dProg) dProg.textContent = data.length ? `You have completed ${data.length} practice session${data.length === 1 ? "" : "s"}.` : "Start your first practice session to see insights.";
      if (status) status.textContent = data.length ? `Total sessions: ${data.length}` : "No attempts recorded yet.";
    }
    renderHistoryRows(table, data);
  } catch (error) {
    console.error("Progress loading error:", error);
    if (status) status.textContent = "Log in to track and view your quiz history.";
  }
}

// ==========================================================================
// NVIDIA AI PYQ Generator Controller
// ==========================================================================

let selectedAiDiff = "medium";

function initAiPyqView() {
  const subjectSelect = document.getElementById("aiPyqSubject");
  const topicSelect = document.getElementById("aiPyqTopic");
  if (!subjectSelect || !topicSelect) return;

  if (subjectSelect.options.length === 0) {
    Object.entries(subjects).forEach(([slug, sub]) => {
      const opt = document.createElement("option");
      opt.value = slug;
      opt.textContent = sub.name;
      subjectSelect.appendChild(opt);
    });

    subjectSelect.addEventListener("change", () => {
      updateAiTopics(subjectSelect.value);
    });

    updateAiTopics(subjectSelect.value);
  }

  // Difficulty button group
  const diffGroup = document.getElementById("aiDiffGroup");
  if (diffGroup) {
    diffGroup.querySelectorAll(".ai-diff-btn").forEach(btn => {
      btn.onclick = () => {
        diffGroup.querySelectorAll(".ai-diff-btn").forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        selectedAiDiff = btn.dataset.diff;
      };
    });
  }
}

function updateAiTopics(subjectSlug) {
  const topicSelect = document.getElementById("aiPyqTopic");
  if (!topicSelect) return;
  topicSelect.replaceChildren();

  const sub = subjects[subjectSlug];
  if (sub && Array.isArray(sub.topics)) {
    sub.topics.forEach(t => {
      const opt = document.createElement("option");
      opt.value = topicSlug(t);
      opt.textContent = t;
      topicSelect.appendChild(opt);
    });
  }
}

async function handleGenerateAiPyq() {
  const subjectSelect = document.getElementById("aiPyqSubject");
  const topicSelect = document.getElementById("aiPyqTopic");
  const focusInput = document.getElementById("aiPyqFocus");
  const generateBtn = document.getElementById("aiGenerateBtn");
  const generateBtnText = document.getElementById("aiGenerateBtnText");
  const card = document.getElementById("aiGeneratedCard");

  if (!subjectSelect || !topicSelect || !generateBtn) return;

  const subject = subjectSelect.value;
  const topic = topicSelect.value;
  const focusTopic = focusInput ? focusInput.value.trim() : "";

  generateBtn.disabled = true;
  if (generateBtnText) generateBtnText.textContent = "Generating with Nemotron AI...";

  try {
    const res = await fetch(apiUrl("api/ai/generate-pyq"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject,
        topic,
        difficulty: selectedAiDiff,
        focusTopic
      })
    });

    const data = await parseJsonResponse(res);
    if (!res.ok || !data.success || !data.question) {
      throw new Error(data.message || "Could not generate question.");
    }

    activeAiQuestion = {
      ...data.question,
      subject_slug: subject,
      topic_slug: topic
    };

    renderGeneratedAiQuestion(activeAiQuestion);
    if (card) {
      card.hidden = false;
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } catch (err) {
    console.error("AI PYQ Error:", err);
    setGlobalStatus("Failed to generate AI question: " + err.message);
  } finally {
    generateBtn.disabled = false;
    if (generateBtnText) generateBtnText.textContent = "Generate GATE PYQ";
  }
}

function renderGeneratedAiQuestion(q) {
  aiSelectedAnswer = -1;
  aiAnswered = false;

  const yearPill = document.getElementById("aiCardYear");
  const subPill = document.getElementById("aiCardSubject");
  const diffPill = document.getElementById("aiCardDiff");
  const qText = document.getElementById("aiQuestionText");
  const optionsWrap = document.getElementById("aiAnswerOptions");
  const feedback = document.getElementById("aiQuizFeedback");
  const checkBtn = document.getElementById("aiCheckAnswerBtn");
  const saveBtn = document.getElementById("aiSaveQuestionBtn");

  if (yearPill) yearPill.textContent = q.gate_year || "GATE Standard";
  if (subPill) subPill.textContent = subjects[q.subject_slug]?.name || q.subject_slug;
  if (diffPill) {
    diffPill.textContent = q.difficulty;
    diffPill.className = `accuracy-badge ${q.difficulty === 'hard' ? 'low' : q.difficulty === 'easy' ? 'high' : 'mid'}`;
  }
  if (qText) {
    qText.innerHTML = `<div class="rich-content">${renderRichContent(q.question_text)}</div>`;
  }

  if (optionsWrap) {
    optionsWrap.replaceChildren();
    q.options.forEach((opt, idx) => {
      const plateClass = `plate-${String.fromCharCode(97 + (idx % 4))}`;
      const label = document.createElement("label");
      label.className = `answer-option ${plateClass}`;

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "ai-opt";
      radio.value = String(idx);

      radio.addEventListener("change", () => {
        aiSelectedAnswer = idx;
        document.querySelectorAll("#aiAnswerOptions .answer-option").forEach(choice => choice.classList.remove("is-selected"));
        label.classList.add("is-selected");
      });

      const letterSpan = document.createElement("span");
      letterSpan.className = "option-letter";
      letterSpan.textContent = `${String.fromCharCode(65 + idx)}.`;

      const textSpan = document.createElement("span");
      textSpan.className = "option-text";
      textSpan.innerHTML = renderInlineContent(opt);

      label.append(radio, letterSpan, textSpan);
      optionsWrap.appendChild(label);
    });
  }

  if (feedback) {
    feedback.textContent = "";
    feedback.className = "quiz-feedback";
  }
  if (checkBtn) {
    checkBtn.disabled = false;
    checkBtn.textContent = "Check answer";
  }
  if (saveBtn) {
    saveBtn.disabled = false;
    saveBtn.innerHTML = `${getLucideSvg("bookmark", 14)} Save to Practice Bank`;
  }
}

function checkAiAnswer() {
  if (aiAnswered || !activeAiQuestion) return;
  const feedback = document.getElementById("aiQuizFeedback");

  if (aiSelectedAnswer < 0) {
    if (feedback) {
      feedback.className = "quiz-feedback is-bad";
      feedback.innerHTML = `${getLucideSvg("help-circle", 18)} <span>Please select an option before checking.</span>`;
    }
    return;
  }

  aiAnswered = true;
  document.querySelectorAll("#aiAnswerOptions .answer-option").forEach((label, idx) => {
    const radio = label.querySelector("input");
    if (radio) radio.disabled = true;
    if (idx === activeAiQuestion.correct_option) label.classList.add("is-correct");
    else if (idx === aiSelectedAnswer) label.classList.add("is-wrong");
  });

  if (aiSelectedAnswer === activeAiQuestion.correct_option) {
    if (feedback) {
      feedback.className = "quiz-feedback is-good";
      feedback.innerHTML = `${getLucideSvg("check-circle-2", 18)} <div><strong>Correct Answer!</strong><div class="rich-content" style="margin-top:6px;">${renderRichContent(formatStepByStepSolution(activeAiQuestion.explanation || ""))}</div></div>`;
    }
  } else {
    if (feedback) {
      feedback.className = "quiz-feedback is-bad";
      feedback.innerHTML = `${getLucideSvg("x-circle", 18)} <div><strong>Incorrect.</strong> Correct option is <strong>${String.fromCharCode(65 + activeAiQuestion.correct_option)}. ${escapeHtml(activeAiQuestion.options[activeAiQuestion.correct_option])}</strong>.<div class="rich-content" style="margin-top:6px;">${renderRichContent(formatStepByStepSolution(activeAiQuestion.explanation || ""))}</div></div>`;
    }
  }

  const checkBtn = document.getElementById("aiCheckAnswerBtn");
  if (checkBtn) checkBtn.disabled = true;
}

async function saveGeneratedAiQuestion() {
  if (!activeAiQuestion) return;
  const saveBtn = document.getElementById("aiSaveQuestionBtn");
  if (saveBtn) saveBtn.disabled = true;

  try {
    const res = await fetch(apiUrl("api/ai/save-question"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(activeAiQuestion)
    });

    const data = await parseJsonResponse(res);
    if (!res.ok) throw new Error(data.message || "Failed to save question.");

    if (saveBtn) {
      saveBtn.innerHTML = `${getLucideSvg("check", 14)} Saved to Practice Bank!`;
    }
    setGlobalStatus(data.message || "Question saved to practice bank!");
  } catch (err) {
    console.error("Save question error:", err);
    setGlobalStatus("Could not save question: " + err.message);
    if (saveBtn) saveBtn.disabled = false;
  }
}

// ==========================================================================
// NVIDIA AI Doubt Solver Controller
// ==========================================================================

function initDoubtSolverView() {
  // Update sticky active exam banner
  updateActiveExamBanner();

  if (currentDoubtContext) {
    const chatSubSelect = document.getElementById("chatSubjectSelect");
    if (chatSubSelect && currentDoubtContext.subject) {
      for (let i = 0; i < chatSubSelect.options.length; i++) {
        if (chatSubSelect.options[i].text.toLowerCase().includes(currentDoubtContext.subject.toLowerCase()) ||
            currentDoubtContext.subject.toLowerCase().includes(chatSubSelect.options[i].text.toLowerCase())) {
          chatSubSelect.selectedIndex = i;
          break;
        }
      }
    }

    addChatMessage("user", `I have a doubt on this GATE question:\n\n${currentDoubtContext.question}`);
    askDoubtSolver(`Please provide a step-by-step conceptual derivation, explain the theory, and identify the correct option for this GATE question:\n\n${currentDoubtContext.question}`, currentDoubtContext.subject);
    currentDoubtContext = null;
  }
}

function updateActiveExamBanner() {
  const banner = document.getElementById("activeExamBanner");
  if (!banner) return;

  const raw = localStorage.getItem("gateprep_active_mock_test");
  if (!currentMockTest && !raw) {
    banner.hidden = true;
    return;
  }

  const titleEl = document.getElementById("bannerExamTitle");
  const timerEl = document.getElementById("bannerExamTimer");
  const qNumEl = document.getElementById("bannerExamQNum");
  const totalEl = document.getElementById("bannerExamTotal");
  const returnBtn = document.getElementById("bannerReturnToExamBtn");

  const title = currentMockTest?.title || "GATE CSE Mock Test";
  const curQ = (currentMockTest?.currentIndex ?? 0) + 1;
  const totalQ = currentMockTest?.questions?.length || 65;

  if (titleEl) titleEl.textContent = title;
  if (qNumEl) qNumEl.textContent = curQ;
  if (totalEl) totalEl.textContent = totalQ;

  const hours = Math.floor(testSecondsRemaining / 3600);
  const minutes = Math.floor((testSecondsRemaining % 3600) / 60);
  const seconds = testSecondsRemaining % 60;
  if (timerEl) {
    timerEl.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  banner.hidden = false;

  if (returnBtn && !returnBtn.dataset.bound) {
    returnBtn.dataset.bound = "true";
    returnBtn.addEventListener("click", () => {
      navigate("pyq-tests");
    });
  }
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMathFallback(math) {
  if (typeof math !== "string") return "";
  return escapeHtml(math)
    .replace(/\^([0-9a-zA-Z\+\-]+)/g, "<sup>$1</sup>")
    .replace(/\_([0-9a-zA-Z\+\-]+)/g, "<sub>$1</sub>")
    .replace(/\\dots/g, "&hellip;")
    .replace(/\\le(?:ft)?/g, "&le;")
    .replace(/\\ge/g, "&ge;")
    .replace(/\\ne/g, "&ne;")
    .replace(/\\times/g, "&times;")
    .replace(/\\theta/gi, "&theta;")
    .replace(/\\alpha/gi, "&alpha;")
    .replace(/\\beta/gi, "&beta;")
    .replace(/\\in/g, "&isin;");
}

function parseFallbackMarkdown(src) {
  if (!src) return "";

  let html = src;

  // Code blocks: ```lang ... ```
  html = html.replace(/```([a-zA-Z0-9_\-\+]*)\r?\n([\s\S]*?)```/g, (_, lang, code) => {
    const langAttr = lang ? ` class="language-${escapeHtml(lang)}"` : "";
    return `\n<pre><code${langAttr}>${escapeHtml(code.trim())}</code></pre>\n`;
  });

  // Inline code: `...`
  html = html.replace(/`([^`\n]+)`/g, (_, code) => `<code>${escapeHtml(code)}</code>`);

  // Headings: ###, ##, #
  html = html.replace(/^####\s+(.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^###\s+(.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^##\s+(.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^#\s+(.+)$/gm, "<h1>$1</h1>");

  // Blockquotes: > ...
  html = html.replace(/^\>\s+(.+)$/gm, "<blockquote>$1</blockquote>");

  // GFM Tables: | ... |
  html = html.replace(/(?:^|\n)((?:\|[^\n]+\|\r?\n)+)/g, (match, tableBlock) => {
    const lines = tableBlock.trim().split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (lines.length < 2) return match;
    const parseCells = line => line.replace(/^\||\|$/g, "").split("|").map(c => c.trim());
    const headers = parseCells(lines[0]);
    const sep = lines[1];
    if (!sep.includes("-")) return match;
    const aligns = parseCells(sep).map(s => {
      if (/^:.*:$/.test(s)) return "center";
      if (/.*:$/.test(s)) return "right";
      if (/^:/.test(s)) return "left";
      return "left";
    });
    let out = "<table><thead><tr>";
    headers.forEach((h, i) => {
      const align = aligns[i] ? ` align="${aligns[i]}"` : "";
      out += `<th${align}>${escapeHtml(h)}</th>`;
    });
    out += "</tr></thead><tbody>";
    for (let i = 2; i < lines.length; i++) {
      const cells = parseCells(lines[i]);
      out += "<tr>";
      headers.forEach((_, colIdx) => {
        const val = cells[colIdx] || "";
        const align = aligns[colIdx] ? ` align="${aligns[colIdx]}"` : "";
        out += `<td${align}>${escapeHtml(val)}</td>`;
      });
      out += "</tr>";
    }
    out += "</tbody></table>";
    return "\n" + out + "\n";
  });

  // Bold & Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*\n]+)\*/g, "<em>$1</em>");

  // Lists: Unordered & Ordered
  html = html.replace(/^\s*[-*]\s+(.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, (match) => {
    if (match.includes("<ul>")) return match;
    return `<ul>${match}</ul>`;
  });
  html = html.replace(/<\/ul>\s*<ul>/g, "");

  // Paragraphs
  const blocks = html.split(/\n\n+/);
  html = blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return "";
    if (
      trimmed.startsWith("<h") ||
      trimmed.startsWith("<pre") ||
      trimmed.startsWith("<ul") ||
      trimmed.startsWith("<ol") ||
      trimmed.startsWith("<table") ||
      trimmed.startsWith("<blockquote") ||
      trimmed.startsWith("<div")
    ) {
      return trimmed;
    }
    return `<p>${trimmed.replace(/\n/g, " ")}</p>`;
  }).filter(Boolean).join("\n");

  return html;
}

window.copyCodeBlock = function(btn) {
  const wrapper = btn.closest(".code-block-wrapper");
  if (!wrapper) return;
  const code = wrapper.querySelector("pre code");
  if (!code) return;
  const text = code.innerText || code.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const span = btn.querySelector("span");
    const originalText = span ? span.textContent : "Copy";
    btn.innerHTML = `${getLucideSvg("check", 12)} <span>Copied!</span>`;
    setTimeout(() => {
      btn.innerHTML = `${getLucideSvg("file-text", 12)} <span>${originalText}</span>`;
    }, 2000);
  }).catch(err => {
    console.warn("Clipboard copy failed:", err);
  });
};

function cleanQuestionText(rawText) {
  if (typeof rawText !== "string" || !rawText.trim()) return "";
  let text = rawText;

  // Repair PDF line-break artifacts and broken word patterns
  text = text
    .replace(/\bmicro\s*-\s*\n?\s*operations\b/gi, "micro-operations")
    .replace(/(\b[a-zA-Z]+)\s*-\s*\n\s*([a-zA-Z]+\b)/g, "$1$2")
    .replace(/\bcylind\s+er\b/gi, "cylinder")
    .replace(/\bre\s+move\b/gi, "remove")
    .replace(/\b128\s*byte\s*-\s*block\b/gi, "128-byte block")
    .replace(/\b8\s*-\s*bytes\b/gi, "8-bytes")
    .replace(/(\d+)\s*-\s*bytes\b/gi, "$1-bytes")
    .replace(/([A-Za-z0-9])\s*←\s*([A-Za-z0-9])/g, "$1 ← $2");

  return text;
}

function ensureCodeBlockFormatting(rawText) {
  if (typeof rawText !== "string" || !rawText.trim()) return "";
  let text = cleanQuestionText(rawText);

  // If already fenced with ```, return text
  if (text.includes("```")) return text;

  // Split into lines
  const lines = text.split(/\r?\n/);
  const result = [];
  let inCode = false;
  let codeBuf = [];

  const isMathLine = (t) => {
    // If it has math-specific symbols or functions
    if (/[√≤≥±≠≈∑∫⋅∞]/.test(t)) return true;
    if (/^(?:Note|where|Let|Since|At\s+[a-z]\s*=|Hence|Therefore|Using|We|If)\b/i.test(t)) return true;
    if (/\b(?:dC|dq|ddq|dx|dy|dt|C\(q\)|f\(x\))\b/.test(t)) return true;
    // An algebraic equation without programming markers (no semicolon, no braces/parentheses, no C type)
    if (/=/.test(t) && !/[;{}()]/.test(t) && !/^(?:int|char|float|void|double|struct|typedef)\b/.test(t)) {
      return true;
    }
    return false;
  };

  const isCodeLine = (line) => {
    const t = line.trim();
    if (!t) return inCode; // Preserve blank lines inside code block
    if (isMathLine(t)) return false;

    // Micro-operations sequence
    if (/^(?:MBR|MAR|PC|IR|MDR|Memory|TEMP[12]?)\s*(?:←|<-|:=)/i.test(t)) return true;
    // Program segments / labels
    if (/^(?:P[1-9]|Segment\s*\d+|Algorithm|Function)\s*:/i.test(t)) return true;
    // Loops and conditionals in code
    if (/^(?:for|while|if|switch)\s*\(/.test(t)) return true;
    if (/^[{}]$/.test(t)) return true;
    // Statements strictly ending with semicolon
    if (/^[a-zA-Z_]\w*(?:\[[^\]]+\])?\s*(?:=|\+=|-=|\*=|\/=|%=)\s*[^;]+;$/.test(t)) return true;
    // Compound assignment statements inside loop/code (e.g. x +=A[i][j])
    if (/^[\w\d_\[\]]+\s*(?:\+=|-=|\*=|\/=)\s*[\w\d_\[\]\+\-\*\/]+;?$/.test(t)) return true;
    // C keywords and syntax
    if (/^(?:#include|int |void |char |float |double |struct |typedef |printf|scanf|return |malloc|calloc)/.test(t)) return true;
    if (/^(?:1\.\s+R\d|2\.\s+R\d|3\.\s+PC)/.test(t)) return true;
    return false;
  };

  const hasStrongCodeSignal = (buf) => {
    return buf.some(l => {
      const t = l.trim();
      return /^(?:#include|int |void |char |float |double |struct |typedef |printf|scanf|return |malloc|calloc)/.test(t) ||
             /^(?:for|while|if|switch)\s*\(/.test(t) ||
             /^(?:MBR|MAR|PC|IR|MDR|Memory)\s*(?:←|<-|:=)/i.test(t) ||
             /^(?:P[1-9]|Segment\s*\d+|Algorithm|Function)\s*:/i.test(t) ||
             /[{}]$/.test(t) ||
             /;$/.test(t);
    });
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isCodeLine(line)) {
      inCode = true;
      codeBuf.push(line);
    } else {
      if (inCode) {
        if (codeBuf.length >= 2 && hasStrongCodeSignal(codeBuf)) {
          result.push("```c\n" + codeBuf.join("\n").trim() + "\n```");
        } else {
          result.push(...codeBuf);
        }
        codeBuf = [];
        inCode = false;
      }
      result.push(line);
    }
  }

  if (inCode) {
    if (codeBuf.length >= 2 && hasStrongCodeSignal(codeBuf)) {
      result.push("```c\n" + codeBuf.join("\n").trim() + "\n```");
    } else {
      result.push(...codeBuf);
    }
  }

  return result.join("\n");
}

const SUBJECT_CLEAN_NAMES = [
  'ALGORITHMS?',
  'DATA STRUCTURES?',
  'OPERATING SYSTEMS?',
  'COMPUTER NETWORKS?',
  'DISCRETE MATHEMATICS',
  'ENGINEERING MATHEMATICS',
  'COMPILER DESIGN',
  'DIGITAL LOGIC',
  'C PROGRAMMING',
  'GENERAL APTITUDE',
  'THEORY OF COMPUTATION',
  'DATABASES?',
  'DBMS',
  'COMPUTER ORGANIZATION(?: AND ARCHITECTURE)?'
].join('|');

function cleanQuestionText(rawText) {
  if (typeof rawText !== 'string') return rawText;
  let s = rawText;
  // Fix broken spacing in common words from OCR/PDF artifacts
  s = s.replace(/\bu\s+ntil\b/gi, 'until');
  s = s.replace(/\bc\s+onst\b/gi, 'const');
  s = s.replace(/\bm\s+ultithreaded\b/gi, 'multithreaded');
  s = s.replace(/\bfo\s+r\b/gi, 'for');
  s = s.replace(/\bwhil\s+e\b/gi, 'while');
  s = s.replace(/\bretur\s+n\b/gi, 'return');
  s = s.replace(/\bint\s+eger\b/gi, 'integer');
  s = s.replace(/\bProces\s+s\b/gi, 'Process');
  s = s.replace(/\bprogra\s+m\b/gi, 'program');
  s = s.replace(/\bexpressio\s+n\b/gi, 'expression');
  s = s.replace(/\boperato\s+r\b/gi, 'operator');
  s = s.replace(/\bexecutio\s+n\b/gi, 'execution');
  s = s.replace(/\bfunctio\s+n\b/gi, 'function');
  s = s.replace(/\bvariabl\s+e\b/gi, 'variable');
  s = s.replace(/\bconditio\s+n\b/gi, 'condition');
  s = s.replace(/\bstate\s+s\b/gi, 'states');
  s = s.replace(/\btransactio\s+n\b/gi, 'transaction');
  s = s.replace(/\bschedul\s+e\b/gi, 'schedule');
  s = s.replace(/\brelatio\s+n\b/gi, 'relation');
  s = s.replace(/\bgra\s+ph\b/gi, 'graph');
  s = s.replace(/\bmatri\s+x\b/gi, 'matrix');
  s = s.replace(/\bstrin\s+g\b/gi, 'string');
  s = s.replace(/\bpoin\s+ter\b/gi, 'pointer');
  return s;
}

function cleanOptionText(rawText) {
  if (typeof rawText !== 'string') return rawText;
  let s = cleanQuestionText(rawText).trim();

  let prev = '';
  let iterations = 0;
  while (prev !== s && iterations < 12) {
    prev = s;
    iterations++;

    // Promotional and Answer key trailers
    s = s.replace(/\s+Check Out Our Gate Courses.*$/gi, '');
    s = s.replace(/\s+ANSWER KEY\s*:?[\s\S]*$/gi, '');
    s = s.replace(/\s+HINTS?\s*&?\s*SOLUTIONS?[\s\S]*$/gi, '');

    // Trailing page numbers + subject name, e.g. "328 OPERATING SYSTEMS", "558 COMPUTER NETWORK"
    s = s.replace(new RegExp(`\\s+\\d{1,4}\\s+(?:${SUBJECT_CLEAN_NAMES})\\s*$`, 'i'), '');
    s = s.replace(new RegExp(`\\s+(?:${SUBJECT_CLEAN_NAMES})\\s+\\d{1,4}\\s*$`, 'i'), '');
    s = s.replace(new RegExp(`\\s+(?:${SUBJECT_CLEAN_NAMES})\\s*$`, 'i'), '');

    // Trailing GATE year / type / mark tags
    s = s.replace(/\s+GATE\s*(?:CSE|IT|DA|CS|\d{4})[-\s\d\w(–—)\|:.]*(?:\(\s*\d+\s*[-–]?\s*MARKS?\s*\)|\d+\s*[-–]?\s*MARKS?)?[-\s\d\w(–—)\|:.]*$/gi, '');
    s = s.replace(/\s+(?:SET\s*[-–]\s*\d+\s*)?(?:MCQ|NAT|MSQ)\s*(?:\(\s*\d+\s*[-–]?\s*MARKS?\s*\)|\d+\s*[-–]?\s*MARKS?)?[-\s\d\w(–—)\|:.]*$/gi, '');

    // Stray trailing pipes or dashes
    s = s.replace(/\s*(?:\|\||\||-|–)\s*$/g, '');
    s = s.trim();
  }
  return s;
}

function formatStepByStepSolution(raw) {
  if (typeof raw !== 'string' || !raw.trim()) return '';

  let text = cleanQuestionText(raw).trim();

  // 1. Strip PDF page artifacts and book titles
  text = text.replace(/<!--\s*PAGE\s*\d+\s*-->/gi, '');
  text = text.replace(new RegExp(`\\s*\\b(?:${SUBJECT_CLEAN_NAMES})\\s+\\d{1,4}\\b`, 'gi'), '');
  text = text.replace(new RegExp(`\\s*\\b\\d{1,4}\\s+(?:${SUBJECT_CLEAN_NAMES})\\b`, 'gi'), '');
  text = text.replace(/\bGENERAL APTITUDE\b/gi, '');
  text = text.replace(/Check Out Our Gate Courses.*$/gim, '');

  // 2. Normalize OCR bullets (●, ?, •, ·, ▪) to markdown bullet lines
  text = text.replace(/^[ \t]*[●•▪·\?][ \t]+/gm, '\n* ');
  text = text.replace(/([^\n])[ \t]*[●•▪·][ \t]+/g, '$1\n\n* ');

  // 3. Format Methods (Method 1:, Method 2:, Alternative Approach:, Calculus Approach:)
  text = text.replace(/^[ \t]*(Method\s*\d+[^:\n]*:?|Alternative\s+Approach[^:\n]*:?)/gmi, '\n\n### 💡 $1\n\n');

  // 4. Format Steps (Step 1:, Step 2:, Step 3:, Case 1:, Case 2:)
  text = text.replace(/^[ \t]*(Step\s*\d+[^:\n]*:?|Case\s*\d+[^:\n]*:?)/gmi, '\n\n#### 🔷 $1\n\n');

  // 5. Format Given Data / Objective Function
  text = text.replace(/^[ \t]*(Given\s+Data:?|Given:?)/gmi, '\n\n### 📋 Given Data\n\n');
  text = text.replace(/^[ \t]*(Objective\s+Function[^:\n]*:?)/gmi, '\n\n* **$1** ');

  // 6. Ensure derivation / equation lines don't collapse into a single line
  const lines = text.split(/\r?\n/);
  const formattedLines = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const t = l.trim();
    if (/^[0-9a-zA-Z_()\+\-\*\/\s\.\√\≤\≥\=]+$/.test(t) && /=/.test(t) && t.length < 60 && !t.startsWith('#')) {
      formattedLines.push(t + '  ');
    } else {
      formattedLines.push(l);
    }
  }
  text = formattedLines.join('\n');

  // 7. Format Final Conclusion & Correct Option
  text = text.replace(/(?:\r?\n|^)\s*(Correct\s+Option\s*:?\s*\(?[A-D]\)?[\s\w\d\.\-]*)/gi, '\n\n---\n\n**✅ $1**\n\n');

  // Clean consecutive empty newlines
  text = text.replace(/\n{3,}/g, '\n\n').trim();

  return text;
}

function renderInlineContent(rawText) {
  if (typeof rawText !== "string" || !rawText.trim()) return "";

  let text = cleanOptionText(String(rawText)).trim();
  text = text.replace(/^(?:\(?[A-Da-d]\)?[\.\:]?)\s*/, "").trim();
  if (!text && rawText.trim()) text = cleanOptionText(rawText).trim();

  const mathInlines = [];
  text = text.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => {
    mathInlines.push(math.trim());
    return `%%MATH_INLINE_${mathInlines.length - 1}%%`;
  });
  text = text.replace(/(^|[^\\])\$([^\$\n]+?)\$/g, (match, prefix, math) => {
    mathInlines.push(math.trim());
    return `${prefix}%%MATH_INLINE_${mathInlines.length - 1}%%`;
  });

  let html = "";
  if (typeof window !== "undefined" && window.marked && typeof window.marked.parseInline === "function") {
    html = window.marked.parseInline(text);
  } else {
    html = escapeHtml(text)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
      .replace(/`([^`\n]+)`/g, "<code>$1</code>");
  }

  html = html.replace(/%%MATH_INLINE_(\d+)%%/g, (_, idx) => {
    const mathCode = mathInlines[Number(idx)];
    if (!mathCode) return "";
    if (typeof window !== "undefined" && window.katex && typeof window.katex.renderToString === "function") {
      try {
        return window.katex.renderToString(mathCode, { displayMode: false, throwOnError: false });
      } catch (e) {
        console.warn("KaTeX inline error:", e);
      }
    }
    return `<span class="math-fallback">${formatMathFallback(mathCode)}</span>`;
  });

  return html.replace(/<\/?p>/gi, "").trim();
}

function renderRichContent(rawText) {
  if (typeof rawText !== "string" || !rawText.trim()) return "";

  let cleaned = cleanQuestionText(rawText);
  let text = ensureCodeBlockFormatting(cleaned);

  const mathBlocks = [];
  const mathInlines = [];

  // 1. Protect multi-line / block math: $$...$$ or \[...\]
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
    mathBlocks.push(math.trim());
    return `%%MATH_BLOCK_${mathBlocks.length - 1}%%`;
  });
  text = text.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => {
    mathBlocks.push(math.trim());
    return `%%MATH_BLOCK_${mathBlocks.length - 1}%%`;
  });

  // 2. Protect inline math: $...$ or \(...\)
  text = text.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => {
    mathInlines.push(math.trim());
    return `%%MATH_INLINE_${mathInlines.length - 1}%%`;
  });
  text = text.replace(/(^|[^\\])\$([^\$\n]+?)\$/g, (match, prefix, math) => {
    mathInlines.push(math.trim());
    return `${prefix}%%MATH_INLINE_${mathInlines.length - 1}%%`;
  });

  // 3. Parse Markdown using marked if available, else fallback
  let html = "";
  if (typeof window !== "undefined" && window.marked && typeof window.marked.parse === "function") {
    html = window.marked.parse(text, { gfm: true, breaks: false });
  } else {
    html = parseFallbackMarkdown(text);
  }

  // 4. Restore block math with KaTeX
  html = html.replace(/%%MATH_BLOCK_(\d+)%%/g, (_, idx) => {
    const mathCode = mathBlocks[Number(idx)];
    if (!mathCode) return "";
    if (typeof window !== "undefined" && window.katex && typeof window.katex.renderToString === "function") {
      try {
        const rendered = window.katex.renderToString(mathCode, { displayMode: true, throwOnError: false });
        return `<div class="katex-display-wrap">${rendered}</div>`;
      } catch (e) {
        console.warn("KaTeX block error:", e);
      }
    }
    return `<div class="katex-display-wrap font-mono">${escapeHtml(mathCode)}</div>`;
  });

  // 5. Restore inline math with KaTeX
  html = html.replace(/%%MATH_INLINE_(\d+)%%/g, (_, idx) => {
    const mathCode = mathInlines[Number(idx)];
    if (!mathCode) return "";
    if (typeof window !== "undefined" && window.katex && typeof window.katex.renderToString === "function") {
      try {
        return window.katex.renderToString(mathCode, { displayMode: false, throwOnError: false });
      } catch (e) {
        console.warn("KaTeX inline error:", e);
      }
    }
    return `<span class="math-fallback">${formatMathFallback(mathCode)}</span>`;
  });

  // 6. Wrap all tables in .table-responsive for seamless mobile scrolling
  html = html.replace(/(<table[\s\S]*?<\/table>)/gi, '<div class="table-responsive">$1</div>');

  // 7. Enhance pre/code blocks into Modern IDE Code Window
  html = html.replace(/<pre><code(?:\s+class="language-([a-zA-Z0-9_\-\+]+)")?>([\s\S]*?)<\/code><\/pre>/gi, (match, lang, code) => {
    const rawLang = (lang || "c").toLowerCase();
    const fileName = rawLang === "sql" ? "query.sql" : rawLang === "python" || rawLang === "py" ? "solution.py" : rawLang === "cpp" ? "main.cpp" : "main.c";
    return `<div class="ide-code-window">
      <div class="ide-window-header">
        <div class="ide-window-controls">
          <span class="ide-dot ide-dot-red"></span>
          <span class="ide-dot ide-dot-yellow"></span>
          <span class="ide-dot ide-dot-green"></span>
        </div>
        <div class="ide-window-title">
          ${getLucideSvg("file-text", 13)}
          <span>${escapeHtml(fileName)}</span>
        </div>
        <div class="ide-window-actions">
          <button class="ide-copy-btn" type="button" onclick="copyIdeCode(this)">
            ${getLucideSvg("file-text", 12)}
            <span>Copy Code</span>
          </button>
        </div>
      </div>
      <div class="ide-window-body">
        <pre class="ide-pre"><code class="language-${escapeHtml(rawLang)}">${code}</code></pre>
      </div>
    </div>`;
  });

  return html;
}

window.copyIdeCode = function(btn) {
  if (!btn) return;
  const ideWindow = btn.closest(".ide-code-window");
  if (!ideWindow) return;
  const code = ideWindow.querySelector("pre code");
  if (!code) return;

  const textToCopy = code.innerText || code.textContent || "";
  navigator.clipboard.writeText(textToCopy).then(() => {
    const originalText = btn.innerHTML;
    btn.innerHTML = `${getLucideSvg("check-circle-2", 12)} <span>Copied!</span>`;
    setTimeout(() => {
      btn.innerHTML = originalText;
    }, 2000);
  }).catch(err => {
    console.warn("Failed to copy IDE code:", err);
  });
};

function addChatMessage(role, content) {
  const container = document.getElementById("chatMessages");
  if (!container) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = `chat-msg ${role === "user" ? "user-msg" : "ai-msg"}`;

  const avatar = document.createElement("div");
  avatar.className = "chat-avatar-mini";
  avatar.textContent = role === "user" ? "You" : "AI";

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble rich-content";
  bubble.innerHTML = renderRichContent(content);

  msgDiv.append(avatar, bubble);
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
  return bubble;
}

function addTypingIndicator() {
  const container = document.getElementById("chatMessages");
  if (!container) return null;

  const msgDiv = document.createElement("div");
  msgDiv.className = "chat-msg ai-msg typing-msg";

  const avatar = document.createElement("div");
  avatar.className = "chat-avatar-mini";
  avatar.textContent = "AI";

  const bubble = document.createElement("div");
  bubble.className = "typing-indicator";
  bubble.innerHTML = `
    <span>Nemotron is thinking</span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
  `;

  msgDiv.append(avatar, bubble);
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
  return msgDiv;
}

async function askDoubtSolver(userQuery, subject = "GATE CSE", contextQuestion = null) {
  const typingIndicator = addTypingIndicator();
  const sendBtn = document.getElementById("chatSendBtn");
  if (sendBtn) sendBtn.disabled = true;

  try {
    const res = await fetch(apiUrl("api/ai/doubt-solver"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: userQuery,
        subject,
        contextQuestion,
        history: doubtHistory
      })
    });

    const data = await parseJsonResponse(res);
    if (!res.ok || !data.success) {
      throw new Error(data.message || "Failed to reach AI mentor.");
    }

    if (typingIndicator) typingIndicator.remove();
    addChatMessage("assistant", data.reply);

    doubtHistory.push({ role: "user", content: userQuery });
    doubtHistory.push({ role: "assistant", content: data.reply });
  } catch (err) {
    console.error("Doubt solver error:", err);
    if (typingIndicator) typingIndicator.remove();
    addChatMessage("assistant", `I apologize, I could not process your query due to a connection issue: ${err.message}. Please try again.`);
  } finally {
    if (sendBtn) sendBtn.disabled = false;
  }
}

// ==========================================================================
// Account & Contact Form Handlers
// ==========================================================================

async function submitAccountForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const isSignup = form.id === "signupForm";
  const status = document.getElementById("authStatus");
  const fields = new FormData(form);
  const payload = Object.fromEntries(fields.entries());
  if (status) status.textContent = "Connecting to account service...";

  try {
    const response = await fetch(apiUrl(isSignup ? "signup" : "login"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify(payload)
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (status) status.textContent = result.message || `Error ${response.status}: Request failed`;
      return;
    }

    if (status) status.textContent = result.message || "Account request completed.";

    if (!isSignup && result.redirect) {
      await refreshSessionState();
      navigate("dashboard");
    } else if (isSignup) {
      setTimeout(() => {
        setAuthMode("login");
        const loginEmail = document.getElementById("loginEmail");
        if (loginEmail && payload.email) loginEmail.value = payload.email;
        if (status) status.textContent = "Account created successfully! Please log in to continue.";
      }, 1000);
    }
  } catch (error) {
    console.error("Account request error:", error);
    if (status) status.textContent = "Unable to connect to service. Please check your connection.";
  }
}

async function submitContactForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.getElementById("contactStatus");
  const fields = new FormData(form);
  if (status) status.textContent = "Sending your message...";

  try {
    const response = await fetch(apiUrl("api/contact"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(fields.entries()))
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (status) status.textContent = result.message || "Could not save message. Please try again.";
      return;
    }
    if (status) status.textContent = result.message || "Your message was sent successfully!";
    form.reset();
  } catch (error) {
    console.error("Contact request error:", error);
    if (status) status.textContent = "Could not send message. Please ensure the backend is running.";
  }
}

function setAuthMode(mode) {
  const signup = mode === "signup";
  const sForm = document.getElementById("signupForm");
  const lForm = document.getElementById("loginForm");
  const heading = document.getElementById("authHeading");
  const status = document.getElementById("authStatus");

  if (sForm) sForm.hidden = !signup;
  if (lForm) lForm.hidden = signup;
  if (heading) heading.textContent = signup ? "Create your account" : "Welcome back";
  if (status) status.textContent = "";

  document.querySelectorAll("[data-auth-mode]").forEach(button => {
    const active = button.dataset.authMode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

// ==========================================================================
// Event Listeners Initialization
// ==========================================================================

const searchInput = document.getElementById("subjectSearch");
if (searchInput) searchInput.addEventListener("input", filterSubjects);

const sForm = document.getElementById("signupForm");
if (sForm) sForm.addEventListener("submit", submitAccountForm);

const lForm = document.getElementById("loginForm");
if (lForm) lForm.addEventListener("submit", submitAccountForm);

const cForm = document.getElementById("contactForm");
if (cForm) cForm.addEventListener("submit", submitContactForm);

const logoutBtn = document.querySelector("[data-logout]");
if (logoutBtn) logoutBtn.addEventListener("click", logout);

const checkAnsBtn = document.getElementById("checkAnswer");
if (checkAnsBtn) checkAnsBtn.addEventListener("click", checkAnswer);

const nextQBtn = document.getElementById("nextQuestion");
if (nextQBtn) nextQBtn.addEventListener("click", nextQuestion);

const prevQBtn = document.getElementById("prevQuestion");
if (prevQBtn) prevQBtn.addEventListener("click", prevQuestion);

const clearPracticeBtn = document.getElementById("clearPracticeAnswer");
if (clearPracticeBtn) clearPracticeBtn.addEventListener("click", clearPracticeResponse);

const restartBtn = document.getElementById("restartQuiz");
if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    if (quizQuestions.length) {
      currentQuestion = 0;
      quizScore = 0;
      const qPanel = document.getElementById("quizPanel");
      const rPanel = document.getElementById("quizResult");
      if (qPanel) qPanel.hidden = false;
      if (rPanel) rPanel.hidden = true;
      loadQuestion();
    }
  });
}

// AI PYQ Generator Listeners
const aiGenBtn = document.getElementById("aiGenerateBtn");
if (aiGenBtn) aiGenBtn.addEventListener("click", handleGenerateAiPyq);

const aiCheckBtn = document.getElementById("aiCheckAnswerBtn");
if (aiCheckBtn) aiCheckBtn.addEventListener("click", checkAiAnswer);

const aiSaveBtn = document.getElementById("aiSaveQuestionBtn");
if (aiSaveBtn) aiSaveBtn.addEventListener("click", saveGeneratedAiQuestion);

const aiAskDoubtBtn = document.getElementById("aiAskDoubtBtn");
if (aiAskDoubtBtn) {
  aiAskDoubtBtn.addEventListener("click", () => {
    if (activeAiQuestion) {
      currentDoubtContext = {
        question: activeAiQuestion.question_text,
        subject: subjects[activeAiQuestion.subject_slug]?.name || "GATE CSE"
      };
      navigate("doubt-solver");
    }
  });
}

// Practice Mode "Ask AI Doubt Solver" Button
const practiceAskDoubtBtn = document.getElementById("practiceAskDoubtBtn");
if (practiceAskDoubtBtn) {
  practiceAskDoubtBtn.addEventListener("click", () => {
    if (quizQuestions.length && quizQuestions[currentQuestion]) {
      const q = quizQuestions[currentQuestion];
      const [route, subjectSlug] = routeParts();
      let prompt = `Question:\n${q.question}\n\n`;
      if (Array.isArray(q.options) && q.options.length > 0) {
        prompt += "Options:\n";
        q.options.forEach((opt, idx) => {
          prompt += `(${String.fromCharCode(65 + idx)}) ${opt}\n`;
        });
      } else {
        prompt += "Question Type: Numerical Answer Type (NAT) - Direct numerical response.\n";
      }
      currentDoubtContext = {
        question: prompt,
        subject: subjects[subjectSlug]?.name || "GATE CSE"
      };
      navigate("doubt-solver");
    }
  });
}

// Doubt Solver Chat Form Listeners
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatSubSelect = document.getElementById("chatSubjectSelect");
const chatClearBtn = document.getElementById("chatClearBtn");

if (chatForm && chatInput) {
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;

    const sub = chatSubSelect ? chatSubSelect.value : "GATE CSE";
    addChatMessage("user", query);
    chatInput.value = "";
    askDoubtSolver(query, sub);
  });

  // Enter to send (Shift+Enter for newline)
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      chatForm.dispatchEvent(new Event("submit"));
    }
  });
}

if (chatClearBtn) {
  chatClearBtn.addEventListener("click", () => {
    const container = document.getElementById("chatMessages");
    if (container) {
      container.innerHTML = `
        <div class="chat-msg ai-msg">
          <div class="chat-avatar-mini">AI</div>
          <div class="chat-bubble rich-content">
            <p><strong>Chat cleared.</strong> How can I assist you with your GATE CSE preparation?</p>
          </div>
        </div>
      `;
      doubtHistory.length = 0;
    }
  });
}

const chatFullscreenBtn = document.getElementById("chatFullscreenBtn");
const chatContainer = document.getElementById("chatContainer");

if (chatFullscreenBtn && chatContainer) {
  chatFullscreenBtn.addEventListener("click", () => {
    const isFull = chatContainer.classList.toggle("is-fullscreen");
    document.body.classList.toggle("chat-is-fullscreen", isFull);

    chatFullscreenBtn.innerHTML = isFull
      ? `<svg class="lucide lucide-minimize" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg> <span id="chatFullscreenLabel">Exit Fullscreen</span>`
      : `<svg class="lucide lucide-maximize" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg> <span id="chatFullscreenLabel">Full Screen</span>`;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && chatContainer.classList.contains("is-fullscreen")) {
      chatFullscreenBtn.click();
    }
  });
}

document.querySelectorAll(".quick-prompt-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const prompt = chip.dataset.prompt;
    if (prompt) {
      const sub = chatSubSelect ? chatSubSelect.value : "GATE CSE";
      addChatMessage("user", prompt);
      askDoubtSolver(prompt, sub);
    }
  });
});

document.querySelectorAll("[data-auth-mode]").forEach(button => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

document.querySelectorAll("[data-toggle-password]").forEach(button => {
  button.innerHTML = getLucideSvg("eye", 18);
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.togglePassword);
    if (!input) return;
    const isPass = input.type === "password";
    input.type = isPass ? "text" : "password";
    button.innerHTML = isPass ? getLucideSvg("eye-off", 18) : getLucideSvg("eye", 18);
    button.setAttribute("aria-label", isPass ? "Hide password" : "Show password");
  });
});

document.querySelectorAll("[data-backend-notice]").forEach(button => {
  button.addEventListener("click", () => setGlobalStatus(button.dataset.backendNotice));
});

// ==========================================================================
// Authentic GATE PYQs & TCS iON CBT Mock Test Engine
// ==========================================================================
let currentMockTest = null;
let testTimerInterval = null;
let testSecondsRemaining = 0;
let pyqStatsCache = null;

const ACTIVE_EXAM_STORAGE_KEY = "gateprep_active_mock_test";

function saveActiveExamState() {
  if (!currentMockTest) return;
  try {
    const payload = {
      testId: currentMockTest.testId,
      title: currentMockTest.title,
      mode: currentMockTest.mode,
      subject: currentMockTest.subject,
      topic: currentMockTest.topic,
      durationMinutes: currentMockTest.durationMinutes,
      totalMarks: currentMockTest.totalMarks,
      currentIndex: currentMockTest.currentIndex,
      answers: currentMockTest.answers,
      statusMap: currentMockTest.statusMap,
      timeRemaining: testSecondsRemaining,
      questions: currentMockTest.questions,
      savedAt: Date.now()
    };
    localStorage.setItem(ACTIVE_EXAM_STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn("Could not save active exam state:", err);
  }
}

function restoreActiveExamState() {
  try {
    const raw = localStorage.getItem(ACTIVE_EXAM_STORAGE_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    if (!saved || !saved.testId || !Array.isArray(saved.questions) || saved.questions.length === 0) {
      return false;
    }

    let remaining = saved.timeRemaining;
    if (saved.savedAt) {
      const elapsed = Math.floor((Date.now() - saved.savedAt) / 1000);
      remaining = Math.max(0, remaining - elapsed);
    }

    if (remaining <= 0) {
      localStorage.removeItem(ACTIVE_EXAM_STORAGE_KEY);
      return false;
    }

    currentMockTest = {
      testId: saved.testId,
      title: saved.title || "GATE Mock Test",
      mode: saved.mode || "full_gate",
      subject: saved.subject || "c-programming",
      topic: saved.topic || "",
      durationMinutes: saved.durationMinutes || 180,
      totalMarks: saved.totalMarks || 100,
      currentIndex: typeof saved.currentIndex === "number" ? saved.currentIndex : 0,
      answers: saved.answers || {},
      statusMap: saved.statusMap || {},
      questions: saved.questions
    };

    const setupSection = document.getElementById("testSetupSection");
    const arenaSection = document.getElementById("testArenaSection");
    const resultSection = document.getElementById("testResultSection");

    if (setupSection) setupSection.hidden = true;
    if (resultSection) resultSection.hidden = true;
    if (arenaSection) arenaSection.hidden = false;

    startArenaTimer(remaining);
    renderArenaPalette();
    renderArenaQuestion();
    ensureArenaControlsBound();
    return true;
  } catch (err) {
    console.warn("Could not restore active exam state:", err);
    return false;
  }
}

function toggleMobilePalette(forceState) {
  const col = document.getElementById("arenaPaletteColumn");
  const overlay = document.getElementById("tcsPaletteOverlay");
  if (!col) return;
  const isOpen = typeof forceState === "boolean" ? forceState : !col.classList.contains("mobile-open");
  col.classList.toggle("mobile-open", isOpen);
  if (overlay) overlay.hidden = !isOpen;
}

function ensureArenaControlsBound() {
  // Mobile Palette Drawer Toggle
  const togglePaletteBtn = document.getElementById("arenaTogglePaletteBtn");
  const closePaletteBtn = document.getElementById("closeMobilePaletteBtn");
  const paletteOverlay = document.getElementById("tcsPaletteOverlay");

  if (togglePaletteBtn && !togglePaletteBtn.dataset.bound) {
    togglePaletteBtn.dataset.bound = "true";
    togglePaletteBtn.addEventListener("click", () => toggleMobilePalette());
  }
  if (closePaletteBtn && !closePaletteBtn.dataset.bound) {
    closePaletteBtn.dataset.bound = "true";
    closePaletteBtn.addEventListener("click", () => toggleMobilePalette(false));
  }
  if (paletteOverlay && !paletteOverlay.dataset.bound) {
    paletteOverlay.dataset.bound = "true";
    paletteOverlay.addEventListener("click", () => toggleMobilePalette(false));
  }

  // Start Test Button
  const startBtn = document.getElementById("startMockTestBtn");
  if (startBtn && !startBtn.dataset.bound) {
    startBtn.dataset.bound = "true";
    startBtn.addEventListener("click", launchSelectedMockTest);
  }

  // Submit Early Button (triggers TCS summary modal)
  const submitEarlyBtn = document.getElementById("submitTestEarlyBtn");
  if (submitEarlyBtn && !submitEarlyBtn.dataset.bound) {
    submitEarlyBtn.dataset.bound = "true";
    submitEarlyBtn.addEventListener("click", openTcsSubmitModal);
  }

  // TCS Modal Cancel & Confirm
  const modalCancelBtn = document.getElementById("tcsModalCancelBtn");
  const modalCloseX = document.getElementById("tcsModalCloseX");
  const modalConfirmBtn = document.getElementById("tcsModalConfirmBtn");

  if (modalCancelBtn && !modalCancelBtn.dataset.bound) {
    modalCancelBtn.dataset.bound = "true";
    modalCancelBtn.addEventListener("click", closeTcsSubmitModal);
  }
  if (modalCloseX && !modalCloseX.dataset.bound) {
    modalCloseX.dataset.bound = "true";
    modalCloseX.addEventListener("click", closeTcsSubmitModal);
  }
  if (modalConfirmBtn && !modalConfirmBtn.dataset.bound) {
    modalConfirmBtn.dataset.bound = "true";
    modalConfirmBtn.addEventListener("click", () => {
      closeTcsSubmitModal();
      finishAndSubmitMockTest();
    });
  }

  // TCS iON Bottom Action Buttons
  const nextBtn = document.getElementById("arenaNextBtn");
  const reviewBtn = document.getElementById("arenaReviewBtn");
  const clearBtn = document.getElementById("arenaClearBtn");
  const prevBtn = document.getElementById("arenaPrevBtn");

  if (nextBtn && !nextBtn.dataset.bound) {
    nextBtn.dataset.bound = "true";
    nextBtn.addEventListener("click", tcsSaveAndNext);
  }

  if (reviewBtn && !reviewBtn.dataset.bound) {
    reviewBtn.dataset.bound = "true";
    reviewBtn.addEventListener("click", tcsMarkForReviewAndNext);
  }

  if (clearBtn && !clearBtn.dataset.bound) {
    clearBtn.dataset.bound = "true";
    clearBtn.addEventListener("click", tcsClearResponse);
  }

  if (prevBtn && !prevBtn.dataset.bound) {
    prevBtn.dataset.bound = "true";
    prevBtn.addEventListener("click", tcsPrevQuestion);
  }

  // Section Tabs (GA and CS)
  const tabGA = document.getElementById("tabSectionGA");
  const tabCS = document.getElementById("tabSectionCS");

  if (tabGA && !tabGA.dataset.bound) {
    tabGA.dataset.bound = "true";
    tabGA.addEventListener("click", () => switchTcsSection("ga"));
  }
  if (tabCS && !tabCS.dataset.bound) {
    tabCS.dataset.bound = "true";
    tabCS.addEventListener("click", () => switchTcsSection("cs"));
  }

  // "Ask AI Solver" Action Button on Question Bar
  const askAiBtn = document.getElementById("arenaAskAiBtn");
  if (askAiBtn && !askAiBtn.dataset.bound) {
    askAiBtn.dataset.bound = "true";
    askAiBtn.addEventListener("click", openExamAiDoubtDrawer);
  }

  // In-Exam AI Drawer Controls
  const closeAiDrawerBtn = document.getElementById("closeExamAiDrawerBtn");
  const drawerOverlay = document.getElementById("examAiDrawerOverlay");
  const drawerFullChatBtn = document.getElementById("drawerOpenFullChatBtn");

  if (closeAiDrawerBtn && !closeAiDrawerBtn.dataset.bound) {
    closeAiDrawerBtn.dataset.bound = "true";
    closeAiDrawerBtn.addEventListener("click", closeExamAiDoubtDrawer);
  }
  if (drawerOverlay && !drawerOverlay.dataset.bound) {
    drawerOverlay.dataset.bound = "true";
    drawerOverlay.addEventListener("click", closeExamAiDoubtDrawer);
  }
  if (drawerFullChatBtn && !drawerFullChatBtn.dataset.bound) {
    drawerFullChatBtn.dataset.bound = "true";
    drawerFullChatBtn.addEventListener("click", openFullDoubtSolverFromExam);
  }

  const drawerChatForm = document.getElementById("drawerChatForm");
  if (drawerChatForm && !drawerChatForm.dataset.bound) {
    drawerChatForm.dataset.bound = "true";
    drawerChatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      sendDrawerFollowup();
    });
  }

  // Retake button
  const retakeBtn = document.getElementById("retakeTestBtn");
  if (retakeBtn && !retakeBtn.dataset.bound) {
    retakeBtn.dataset.bound = "true";
    retakeBtn.addEventListener("click", () => {
      localStorage.removeItem(ACTIVE_EXAM_STORAGE_KEY);
      currentMockTest = null;
      const setupSection = document.getElementById("testSetupSection");
      const arenaSection = document.getElementById("testArenaSection");
      const resultSection = document.getElementById("testResultSection");
      if (setupSection) setupSection.hidden = false;
      if (arenaSection) arenaSection.hidden = true;
      if (resultSection) resultSection.hidden = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

async function initPyqTestsView() {
  ensureArenaControlsBound();

  const setupSection = document.getElementById("testSetupSection");
  const arenaSection = document.getElementById("testArenaSection");
  const resultSection = document.getElementById("testResultSection");

  // Check if an active exam was already running (Zero Data Loss)
  if (currentMockTest) {
    if (setupSection) setupSection.hidden = true;
    if (resultSection) resultSection.hidden = true;
    if (arenaSection) arenaSection.hidden = false;
    renderArenaPalette();
    renderArenaQuestion();
    return;
  }

  if (restoreActiveExamState()) {
    return;
  }

  // Otherwise, display setup panel
  if (setupSection) setupSection.hidden = false;
  if (arenaSection) arenaSection.hidden = true;
  if (resultSection) resultSection.hidden = true;

  // Load catalog stats
  try {
    const res = await fetch(apiUrl("api/pyqs/stats"));
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.stats) {
        pyqStatsCache = data.stats;
        const totalEl = document.getElementById("pyqStatTotal");
        if (totalEl) totalEl.textContent = data.stats.totalQuestions.toLocaleString();
      }
    }
  } catch (err) {
    console.warn("Could not load PYQ catalog stats:", err);
  }

  // Setup mode cards selection
  const modeCards = document.querySelectorAll(".test-mode-card");
  const subjectGroup = document.getElementById("filterSubjectGroup");
  modeCards.forEach(card => {
    if (card.dataset.bound) return;
    card.dataset.bound = "true";
    card.addEventListener("click", () => {
      modeCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      const radio = card.querySelector("input[type='radio']");
      if (radio) radio.checked = true;

      const mode = card.dataset.mode;
      if (subjectGroup) {
        subjectGroup.style.display = mode === "full_gate" ? "none" : "block";
      }
    });
  });
}

async function launchSelectedMockTest() {
  const startBtn = document.getElementById("startMockTestBtn");
  const selectedModeInput = document.querySelector("input[name='pyqMode']:checked");
  const mode = selectedModeInput ? selectedModeInput.value : "full_gate";
  const subject = document.getElementById("pyqSubjectSelect")?.value || "c-programming";
  const difficulty = document.getElementById("pyqDifficultySelect")?.value || "all";

  if (startBtn) {
    startBtn.disabled = true;
    startBtn.innerHTML = `Generating Official Exam Paper...`;
  }

  try {
    const res = await fetch(apiUrl("api/pyqs/generate-test"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode, subject, difficulty, count: mode === "full_gate" ? 65 : 15 })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || "Failed to generate mock test.");
    }

    const test = data.test;
    const statusMap = {};
    test.questions.forEach((q, idx) => {
      statusMap[q.id] = idx === 0 ? "not-answered" : "not-visited";
    });

    currentMockTest = {
      testId: test.testId,
      title: test.testTitle,
      mode: test.mode,
      subject: test.subject,
      topic: test.topic,
      durationMinutes: test.durationMinutes,
      questions: test.questions,
      totalMarks: test.totalMarks,
      currentIndex: 0,
      answers: {},
      statusMap
    };

    const setupSection = document.getElementById("testSetupSection");
    const arenaSection = document.getElementById("testArenaSection");
    const resultSection = document.getElementById("testResultSection");

    if (setupSection) setupSection.hidden = true;
    if (resultSection) resultSection.hidden = true;
    if (arenaSection) arenaSection.hidden = false;

    // Start timer & persist
    startArenaTimer(test.durationMinutes * 60);
    saveActiveExamState();

    // Render palette & initial question
    ensureArenaControlsBound();
    renderArenaPalette();
    renderArenaQuestion();

    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (err) {
    console.error("Launch Mock Test error:", err);
    alert(err.message || "Could not launch mock test. Please check connection.");
  } finally {
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.innerHTML = `<svg class="lucide lucide-play" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg> Start Timed Test`;
    }
  }
}

function startArenaTimer(totalSeconds) {
  if (testTimerInterval) clearInterval(testTimerInterval);
  testSecondsRemaining = totalSeconds;
  updateTimerDisplay();

  testTimerInterval = setInterval(() => {
    testSecondsRemaining--;
    updateTimerDisplay();
    updateActiveExamBanner();

    // Persist every 10 seconds for zero data loss
    if (testSecondsRemaining % 10 === 0) {
      saveActiveExamState();
    }

    if (testSecondsRemaining <= 0) {
      clearInterval(testTimerInterval);
      alert("Time is up! Your mock exam will be submitted automatically.");
      finishAndSubmitMockTest();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const display = document.getElementById("arenaTimerDisplay");
  const timerBox = document.getElementById("testTimerBox");
  if (!display) return;

  const hours = Math.floor(testSecondsRemaining / 3600);
  const minutes = Math.floor((testSecondsRemaining % 3600) / 60);
  const seconds = testSecondsRemaining % 60;

  display.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (timerBox) {
    if (testSecondsRemaining <= 300) {
      timerBox.classList.add("urgent");
    } else {
      timerBox.classList.remove("urgent");
    }
  }
}

function renderArenaPalette() {
  const grid = document.getElementById("arenaPaletteGrid");
  if (!grid || !currentMockTest) return;
  grid.replaceChildren();

  currentMockTest.questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tcs-p-btn";
    btn.textContent = idx + 1;
    btn.dataset.idx = idx;

    btn.addEventListener("click", () => {
      saveArenaCurrentResponse();
      currentMockTest.currentIndex = idx;
      if (currentMockTest.statusMap[q.id] === "not-visited") {
        currentMockTest.statusMap[q.id] = "not-answered";
      }
      saveActiveExamState();
      renderArenaQuestion();
      toggleMobilePalette(false);
      const arena = document.getElementById("testArenaSection");
      if (arena) arena.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    grid.appendChild(btn);
  });

  updateArenaPaletteStatus();
}

function renderArenaQuestion() {
  if (!currentMockTest || !currentMockTest.questions.length) return;
  const q = currentMockTest.questions[currentMockTest.currentIndex];
  if (!q) return;

  // Mark visited question as not-answered if it was not-visited
  if (currentMockTest.statusMap[q.id] === "not-visited") {
    currentMockTest.statusMap[q.id] = "not-answered";
  }

  // Update Headers & Profile
  const titleEl = document.getElementById("arenaTestTitle");
  const subtitleEl = document.getElementById("arenaPaperSubtitle");
  const counterEl = document.getElementById("arenaQuestionCounter");
  const marksBadge = document.getElementById("arenaMarksBadge");
  const marksPos = document.getElementById("arenaMarksPos");
  const marksNeg = document.getElementById("arenaMarksNeg");
  const qTypeEl = document.getElementById("arenaQType");
  const prevBtn = document.getElementById("arenaPrevBtn");
  const nextBtn = document.getElementById("arenaNextBtn");

  if (titleEl) titleEl.textContent = currentMockTest.title;
  if (subtitleEl) {
    subtitleEl.textContent = currentMockTest.mode === "full_gate"
      ? "Computer Science and Information Technology (CS)"
      : `${readableName(currentMockTest.subject)} - Practice Test`;
  }

  if (counterEl) counterEl.textContent = `Question No. ${currentMockTest.currentIndex + 1}`;
  if (marksBadge) marksBadge.textContent = q.gate_year || "GATE CSE";

  const isNat = q.type === "NAT" || (!Array.isArray(q.options) || q.options.length < 2);
  const marks = Number(q.marks) || 2;
  if (marksPos) marksPos.textContent = marks;
  if (marksNeg) marksNeg.textContent = isNat ? "0" : (marks === 1 ? "0.33" : "0.66");
  if (qTypeEl) qTypeEl.textContent = isNat ? "Numerical Answer Type (NAT)" : "Multiple Choice Question (MCQ)";

  if (prevBtn) prevBtn.disabled = currentMockTest.currentIndex === 0;
  if (nextBtn) {
    nextBtn.innerHTML = currentMockTest.currentIndex === currentMockTest.questions.length - 1
      ? `Save &amp; Submit Exam`
      : `Save &amp; Next &rarr;`;
  }

  // Section Tab & Palette section title highlight
  const isFullGate = currentMockTest.mode === "full_gate";
  const sectionTabs = document.getElementById("arenaSectionTabs");
  const tabGA = document.getElementById("tabSectionGA");
  const tabCS = document.getElementById("tabSectionCS");
  const palSecTitle = document.getElementById("arenaPaletteSectionName");

  if (isFullGate) {
    if (sectionTabs) sectionTabs.style.display = "flex";
    const isGA = currentMockTest.currentIndex < 10;
    if (tabGA) tabGA.classList.toggle("active", isGA);
    if (tabCS) tabCS.classList.toggle("active", !isGA);
    if (palSecTitle) {
      palSecTitle.textContent = isGA
        ? "Section: General Aptitude (GA)"
        : "Section: Computer Science & IT (CS)";
    }
  } else {
    if (sectionTabs) sectionTabs.style.display = "none";
    if (palSecTitle) {
      palSecTitle.textContent = `Section: ${readableName(currentMockTest.subject)}`;
    }
  }

  // Question Content with KaTeX & Modern IDE Code Window
  const qTextContainer = document.getElementById("arenaQuestionText");
  if (qTextContainer) {
    qTextContainer.innerHTML = renderRichContent(q.question_text);
  }

  // Render Options List or NAT Numeric Keypad
  const optionsContainer = document.getElementById("arenaOptionsList");
  if (optionsContainer) {
    optionsContainer.replaceChildren();

    if (isNat) {
      const currentAns = currentMockTest.answers[q.id] !== undefined ? currentMockTest.answers[q.id] : "";
      const natBox = document.createElement("div");
      natBox.className = "tcs-nat-container";
      natBox.innerHTML = `
        <div class="tcs-nat-heading">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
          <span>Numerical Answer Type (Use Virtual Keypad or Keyboard)</span>
        </div>
        <div class="tcs-nat-display-wrap">
          <input type="text" id="arenaNatInput" class="tcs-nat-input" value="${escapeHtml(String(currentAns))}" placeholder="Enter Value" autocomplete="off" />
        </div>
        <div class="tcs-nat-keypad">
          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('7')">7</button>
          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('8')">8</button>
          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('9')">9</button>
          <button type="button" class="tcs-key-btn action-btn clear-btn" onclick="clearTcsNatInput()">Clear</button>

          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('4')">4</button>
          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('5')">5</button>
          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('6')">6</button>
          <button type="button" class="tcs-key-btn action-btn" onclick="bkspTcsNat()">Bksp</button>

          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('1')">1</button>
          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('2')">2</button>
          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('3')">3</button>
          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('-')">&minus;</button>

          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('0')">0</button>
          <button type="button" class="tcs-key-btn" onclick="typeTcsNat('.')">.</button>
          <button type="button" class="tcs-key-btn" style="grid-column: span 2;" onclick="typeTcsNat('00')">00</button>
        </div>
      `;
      optionsContainer.appendChild(natBox);

      const natInput = natBox.querySelector("#arenaNatInput");
      if (natInput) {
        natInput.addEventListener("input", (e) => {
          const val = e.target.value.trim();
          if (val !== "") {
            currentMockTest.answers[q.id] = val;
            if (currentMockTest.statusMap[q.id] === "review") {
              currentMockTest.statusMap[q.id] = "review-answered";
            }
          } else {
            delete currentMockTest.answers[q.id];
          }
          updateArenaPaletteStatus();
          saveActiveExamState();
        });
      }
    } else {
      const currentAns = currentMockTest.answers[q.id];

      q.options.forEach((optText, optIdx) => {
        const plateClass = `plate-${String.fromCharCode(97 + (optIdx % 4))}`;
        const optItem = document.createElement("label");
        optItem.className = `tcs-option-label ${plateClass} ${currentAns === optIdx ? "is-selected" : ""}`;

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.className = "tcs-option-radio";
        radio.name = `tcs_opt_${q.id}`;
        radio.value = optIdx;
        radio.checked = currentAns === optIdx;

        const selectThisOption = () => {
          radio.checked = true;
          currentMockTest.answers[q.id] = optIdx;
          optionsContainer.querySelectorAll(".tcs-option-label").forEach(item => item.classList.remove("is-selected"));
          optItem.classList.add("is-selected");

          // If previously marked review without answer, upgrade to review-answered
          if (currentMockTest.statusMap[q.id] === "review") {
            currentMockTest.statusMap[q.id] = "review-answered";
          }
          updateArenaPaletteStatus();
          saveActiveExamState();
        };

        radio.addEventListener("change", selectThisOption);
        optItem.addEventListener("click", (e) => {
          if (e.target !== radio) {
            selectThisOption();
          }
        });

        const letter = document.createElement("span");
        letter.className = "tcs-option-letter";
        letter.textContent = `(${String.fromCharCode(65 + optIdx)})`;

        const text = document.createElement("span");
        text.className = "tcs-option-text";
        text.innerHTML = renderInlineContent(optText);

        optItem.append(radio, letter, text);
        optionsContainer.appendChild(optItem);
      });
    }
  }

  updateArenaPaletteStatus();
}

window.typeTcsNat = function(char) {
  const input = document.getElementById("arenaNatInput");
  if (!input || !currentMockTest) return;
  const q = currentMockTest.questions[currentMockTest.currentIndex];
  input.value += char;
  currentMockTest.answers[q.id] = input.value.trim();
  if (currentMockTest.statusMap[q.id] === "review") {
    currentMockTest.statusMap[q.id] = "review-answered";
  }
  updateArenaPaletteStatus();
  saveActiveExamState();
};

window.bkspTcsNat = function() {
  const input = document.getElementById("arenaNatInput");
  if (!input || !currentMockTest) return;
  const q = currentMockTest.questions[currentMockTest.currentIndex];
  input.value = input.value.slice(0, -1);
  const val = input.value.trim();
  if (val !== "") {
    currentMockTest.answers[q.id] = val;
  } else {
    delete currentMockTest.answers[q.id];
  }
  updateArenaPaletteStatus();
  saveActiveExamState();
};

window.clearTcsNatInput = function() {
  const input = document.getElementById("arenaNatInput");
  if (!input || !currentMockTest) return;
  const q = currentMockTest.questions[currentMockTest.currentIndex];
  input.value = "";
  delete currentMockTest.answers[q.id];
  updateArenaPaletteStatus();
  saveActiveExamState();
};

function saveArenaCurrentResponse() {
  if (!currentMockTest) return;
  const q = currentMockTest.questions[currentMockTest.currentIndex];
  if (!q) return;

  const natInput = document.getElementById("arenaNatInput");
  if (natInput) {
    const val = natInput.value.trim();
    if (val !== "") {
      currentMockTest.answers[q.id] = val;
    }
    return;
  }

  const checked = document.querySelector(`input[name='tcs_opt_${q.id}']:checked`);
  if (checked) {
    currentMockTest.answers[q.id] = Number(checked.value);
  }
}

function tcsSaveAndNext() {
  if (!currentMockTest) return;
  const q = currentMockTest.questions[currentMockTest.currentIndex];
  if (!q) return;

  const natInput = document.getElementById("arenaNatInput");
  let hasAnswer = false;

  if (natInput) {
    const val = natInput.value.trim();
    if (val !== "") {
      currentMockTest.answers[q.id] = val;
      hasAnswer = true;
    } else {
      delete currentMockTest.answers[q.id];
    }
  } else {
    const checked = document.querySelector(`input[name='tcs_opt_${q.id}']:checked`);
    if (checked) {
      currentMockTest.answers[q.id] = Number(checked.value);
      hasAnswer = true;
    }
  }

  if (hasAnswer) {
    currentMockTest.statusMap[q.id] = "answered";
  } else {
    // If not answered, mark as not-answered
    if (currentMockTest.statusMap[q.id] !== "review") {
      currentMockTest.statusMap[q.id] = "not-answered";
    }
  }

  if (currentMockTest.currentIndex < currentMockTest.questions.length - 1) {
    currentMockTest.currentIndex++;
    const nextQ = currentMockTest.questions[currentMockTest.currentIndex];
    if (currentMockTest.statusMap[nextQ.id] === "not-visited") {
      currentMockTest.statusMap[nextQ.id] = "not-answered";
    }
    saveActiveExamState();
    renderArenaQuestion();
  } else {
    saveActiveExamState();
    openTcsSubmitModal();
  }
}

function tcsMarkForReviewAndNext() {
  if (!currentMockTest) return;
  const q = currentMockTest.questions[currentMockTest.currentIndex];
  if (!q) return;

  const natInput = document.getElementById("arenaNatInput");
  let hasAnswer = false;

  if (natInput) {
    const val = natInput.value.trim();
    if (val !== "") {
      currentMockTest.answers[q.id] = val;
      hasAnswer = true;
    } else {
      delete currentMockTest.answers[q.id];
    }
  } else {
    const checked = document.querySelector(`input[name='tcs_opt_${q.id}']:checked`);
    if (checked) {
      currentMockTest.answers[q.id] = Number(checked.value);
      hasAnswer = true;
    } else {
      delete currentMockTest.answers[q.id];
    }
  }

  currentMockTest.statusMap[q.id] = hasAnswer ? "review-answered" : "review";

  if (currentMockTest.currentIndex < currentMockTest.questions.length - 1) {
    currentMockTest.currentIndex++;
    const nextQ = currentMockTest.questions[currentMockTest.currentIndex];
    if (currentMockTest.statusMap[nextQ.id] === "not-visited") {
      currentMockTest.statusMap[nextQ.id] = "not-answered";
    }
    saveActiveExamState();
    renderArenaQuestion();
  } else {
    saveActiveExamState();
    openTcsSubmitModal();
  }
}

function tcsClearResponse() {
  if (!currentMockTest) return;
  const q = currentMockTest.questions[currentMockTest.currentIndex];
  if (!q) return;

  delete currentMockTest.answers[q.id];
  currentMockTest.statusMap[q.id] = "not-answered";

  const natInput = document.getElementById("arenaNatInput");
  if (natInput) {
    natInput.value = "";
  }

  const optionsContainer = document.getElementById("arenaOptionsList");
  if (optionsContainer) {
    optionsContainer.querySelectorAll("input[type='radio']").forEach(r => { r.checked = false; });
    optionsContainer.querySelectorAll(".tcs-option-label").forEach(l => { l.classList.remove("is-selected"); });
  }

  updateArenaPaletteStatus();
  saveActiveExamState();
}

function tcsPrevQuestion() {
  if (!currentMockTest || currentMockTest.currentIndex <= 0) return;
  saveArenaCurrentResponse();
  currentMockTest.currentIndex--;
  saveActiveExamState();
  renderArenaQuestion();
}

function switchTcsSection(sectionKey) {
  if (!currentMockTest) return;
  saveArenaCurrentResponse();
  if (sectionKey === "ga") {
    currentMockTest.currentIndex = 0;
  } else if (sectionKey === "cs") {
    currentMockTest.currentIndex = Math.min(10, currentMockTest.questions.length - 1);
  }
  const targetQ = currentMockTest.questions[currentMockTest.currentIndex];
  if (currentMockTest.statusMap[targetQ.id] === "not-visited") {
    currentMockTest.statusMap[targetQ.id] = "not-answered";
  }
  saveActiveExamState();
  renderArenaQuestion();
}

function updateArenaPaletteStatus() {
  const grid = document.getElementById("arenaPaletteGrid");
  if (!grid || !currentMockTest) return;

  let answered = 0;
  let notAnswered = 0;
  let notVisited = 0;
  let review = 0;
  let reviewAnswered = 0;

  const buttons = grid.querySelectorAll(".tcs-p-btn");
  currentMockTest.questions.forEach((q, idx) => {
    const btn = buttons[idx];
    const status = currentMockTest.statusMap[q.id] || "not-visited";

    if (status === "answered") answered++;
    else if (status === "not-answered") notAnswered++;
    else if (status === "review") review++;
    else if (status === "review-answered") reviewAnswered++;
    else notVisited++;

    if (!btn) return;
    btn.className = `tcs-p-btn state-${status}`;
    if (idx === currentMockTest.currentIndex) {
      btn.classList.add("is-current");
    }
  });

  // Update Legend Live Counters
  const cntAnswered = document.getElementById("countAnswered");
  const cntNotAnswered = document.getElementById("countNotAnswered");
  const cntNotVisited = document.getElementById("countNotVisited");
  const cntReview = document.getElementById("countReview");
  const cntReviewAnswered = document.getElementById("countReviewAnswered");

  if (cntAnswered) cntAnswered.textContent = answered;
  if (cntNotAnswered) cntNotAnswered.textContent = notAnswered;
  if (cntNotVisited) cntNotVisited.textContent = notVisited;
  if (cntReview) cntReview.textContent = review;
  if (cntReviewAnswered) cntReviewAnswered.textContent = reviewAnswered;

  const quickCount = document.getElementById("paletteQuickCount");
  if (quickCount && currentMockTest) {
    quickCount.textContent = `${currentMockTest.currentIndex + 1}/${currentMockTest.questions.length}`;
  }
}

// In-Exam AI Doubt Drawer Logic (Zero Loss)
function openExamAiDoubtDrawer() {
  if (!currentMockTest) return;
  const q = currentMockTest.questions[currentMockTest.currentIndex];
  if (!q) return;

  saveActiveExamState();

  const drawer = document.getElementById("examAiDrawer");
  const snippet = document.getElementById("drawerQuestionSnippet");
  const aiResponse = document.getElementById("drawerAiResponse");

  if (drawer) {
    drawer.hidden = false;
    drawer.setAttribute("aria-hidden", "false");
  }

  // Format question with options or NAT note
  let formattedContext = `<div style="margin-bottom:8px;"><strong>Question:</strong></div><div style="margin-bottom:12px;">${renderRichContent(q.question_text)}</div>`;
  if (Array.isArray(q.options) && q.options.length > 0) {
    formattedContext += `<div style="margin-bottom:4px; font-weight:600;">Options:</div><ul style="padding-left:18px; margin:0;">`;
    q.options.forEach((opt, idx) => {
      formattedContext += `<li><strong>(${String.fromCharCode(65 + idx)})</strong> ${escapeHtml(opt)}</li>`;
    });
    formattedContext += `</ul>`;
  } else {
    formattedContext += `<div style="margin-bottom:4px; font-weight:600; color:var(--text-subtle);">Type: Numerical Answer Type (NAT)</div>`;
  }

  if (snippet) snippet.innerHTML = formattedContext;

  if (aiResponse) {
    aiResponse.innerHTML = `
      <div class="ai-loading-pulse" style="display:flex; align-items:center; gap:8px; color:var(--text-subtle);">
        <div class="spinner-dot"></div>
        <span>NVIDIA AI is analyzing question, code, and derivation...</span>
      </div>
    `;
  }

  let promptText = `[GATE CSE Question Assistance]\nQuestion:\n${q.question_text}\n`;
  if (Array.isArray(q.options) && q.options.length > 0) {
    promptText += `\nOptions:\n`;
    q.options.forEach((opt, idx) => {
      promptText += `(${String.fromCharCode(65 + idx)}) ${opt}\n`;
    });
  }
  promptText += `\nPlease explain the concept thoroughly, derive the solution step-by-step with all formulas, and verify the correct answer.`;

  // Fetch AI explanation with both message and query keys
  fetch(apiUrl("api/ai/doubt-solver"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: promptText,
      query: promptText,
      subject: q.subject_name || "GATE CSE",
      contextQuestion: q.question_text
    })
  }).then(async res => {
    const data = await res.json();
    const solution = data.reply || data.solution;
    if (res.ok && data.success && solution) {
      if (aiResponse) aiResponse.innerHTML = `<div class="drawer-bubble-ai">${renderRichContent(solution)}</div>`;
    } else {
      if (aiResponse) aiResponse.innerHTML = `<p style="color:#dc2626;">Could not fetch AI solution: ${escapeHtml(data.message || 'Unknown error')}</p>`;
    }
  }).catch(err => {
    if (aiResponse) aiResponse.innerHTML = `<p style="color:#dc2626;">Network error connecting to NVIDIA AI.</p>`;
  });
}

let drawerFollowupBusy = false;

async function sendDrawerFollowup() {
  if (!currentMockTest || drawerFollowupBusy) return;
  const q = currentMockTest.questions[currentMockTest.currentIndex];
  const input = document.getElementById("drawerFollowupInput");
  const sendBtn = document.getElementById("drawerFollowupSendBtn");
  const aiResponse = document.getElementById("drawerAiResponse");
  const userText = input ? input.value.trim() : "";
  if (!userText || !aiResponse) return;

  if (input) input.value = "";
  if (sendBtn) sendBtn.disabled = true;
  drawerFollowupBusy = true;

  // Append user bubble
  const userBubble = document.createElement("div");
  userBubble.className = "drawer-bubble-user";
  userBubble.textContent = `Q: ${userText}`;
  aiResponse.appendChild(userBubble);

  // Append thinking indicator
  const loadingBubble = document.createElement("div");
  loadingBubble.className = "ai-loading-pulse";
  loadingBubble.style.cssText = "display:flex; align-items:center; gap:8px; color:var(--text-subtle); margin:10px 0;";
  loadingBubble.innerHTML = `<div class="spinner-dot"></div><span>AI is answering your question...</span>`;
  aiResponse.appendChild(loadingBubble);

  const drawerBody = document.querySelector(".exam-ai-drawer-body");
  if (drawerBody) drawerBody.scrollTop = drawerBody.scrollHeight;

  try {
    const res = await fetch(apiUrl("api/ai/doubt-solver"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: userText,
        query: userText,
        subject: q.subject_name || "GATE CSE",
        contextQuestion: q.question_text
      })
    });
    const data = await res.json();
    loadingBubble.remove();

    const solution = data.reply || data.solution;
    const aiBubble = document.createElement("div");
    aiBubble.className = "drawer-bubble-ai";
    if (res.ok && data.success && solution) {
      aiBubble.innerHTML = renderRichContent(solution);
    } else {
      aiBubble.innerHTML = `<p style="color:#dc2626;">Error: ${escapeHtml(data.message || 'Could not fetch response')}</p>`;
    }
    aiResponse.appendChild(aiBubble);
    if (drawerBody) drawerBody.scrollTop = drawerBody.scrollHeight;
  } catch (err) {
    loadingBubble.remove();
    const errBubble = document.createElement("div");
    errBubble.className = "drawer-bubble-ai";
    errBubble.innerHTML = `<p style="color:#dc2626;">Network error communicating with AI Doubt Solver.</p>`;
    aiResponse.appendChild(errBubble);
  } finally {
    drawerFollowupBusy = false;
    if (sendBtn) sendBtn.disabled = false;
    if (input) input.focus();
  }
}

function closeExamAiDoubtDrawer() {
  const drawer = document.getElementById("examAiDrawer");
  if (drawer) {
    drawer.hidden = true;
    drawer.setAttribute("aria-hidden", "true");
  }
}

function openFullDoubtSolverFromExam() {
  if (!currentMockTest) return;
  const q = currentMockTest.questions[currentMockTest.currentIndex];
  if (!q) return;

  saveActiveExamState();
  closeExamAiDoubtDrawer();

  let prompt = `[GATE CSE Mock Exam Question]\n${q.question_text}\n\nOptions:\n`;
  if (Array.isArray(q.options)) {
    q.options.forEach((opt, idx) => {
      prompt += `(${String.fromCharCode(65 + idx)}) ${opt}\n`;
    });
  }
  prompt += `\nPlease explain the concept, step-by-step derivation, and identify the correct option.`;

  currentDoubtContext = {
    question: prompt,
    subject: q.subject_name || "GATE CSE"
  };

  navigate("doubt-solver");
}

// TCS Official Submit Modal
function openTcsSubmitModal() {
  if (!currentMockTest) return;
  saveArenaCurrentResponse();

  const modal = document.getElementById("tcsSubmitModal");
  const tbody = document.getElementById("tcsSummaryTableBody");
  if (!modal || !tbody) return;

  tbody.replaceChildren();

  const isFullGate = currentMockTest.mode === "full_gate";
  const sections = isFullGate
    ? [
        { name: "General Aptitude", questions: currentMockTest.questions.slice(0, 10) },
        { name: "Computer Science & IT", questions: currentMockTest.questions.slice(10) }
      ]
    : [
        { name: readableName(currentMockTest.subject), questions: currentMockTest.questions }
      ];

  let grandTotal = 0;
  let grandAns = 0;
  let grandNotAns = 0;
  let grandRev = 0;
  let grandRevAns = 0;
  let grandNotVis = 0;

  sections.forEach(sec => {
    let ans = 0, notAns = 0, rev = 0, revAns = 0, notVis = 0;
    sec.questions.forEach(q => {
      const s = currentMockTest.statusMap[q.id] || "not-visited";
      if (s === "answered") ans++;
      else if (s === "not-answered") notAns++;
      else if (s === "review") rev++;
      else if (s === "review-answered") revAns++;
      else notVis++;
    });

    grandTotal += sec.questions.length;
    grandAns += ans;
    grandNotAns += notAns;
    grandRev += rev;
    grandRevAns += revAns;
    grandNotVis += notVis;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="text-align:left; font-weight:600;">${escapeHtml(sec.name)}</td>
      <td>${sec.questions.length}</td>
      <td style="color:#15803d; font-weight:700;">${ans}</td>
      <td style="color:#b91c1c; font-weight:700;">${notAns}</td>
      <td style="color:#6d28d9; font-weight:700;">${rev}</td>
      <td style="color:#6d28d9; font-weight:700;">${revAns}</td>
      <td style="color:#64748b;">${notVis}</td>
    `;
    tbody.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.style.fontWeight = "800";
  totalRow.style.background = "#f8fafc";
  totalRow.innerHTML = `
    <td style="text-align:left;">Total</td>
    <td>${grandTotal}</td>
    <td style="color:#15803d;">${grandAns}</td>
    <td style="color:#b91c1c;">${grandNotAns}</td>
    <td style="color:#6d28d9;">${grandRev}</td>
    <td style="color:#6d28d9;">${grandRevAns}</td>
    <td style="color:#64748b;">${grandNotVis}</td>
  `;
  tbody.appendChild(totalRow);

  modal.hidden = false;
}

function closeTcsSubmitModal() {
  const modal = document.getElementById("tcsSubmitModal");
  if (modal) modal.hidden = true;
}

async function finishAndSubmitMockTest() {
  if (!currentMockTest) return;
  if (testTimerInterval) clearInterval(testTimerInterval);

  saveArenaCurrentResponse();
  closeTcsSubmitModal();
  closeExamAiDoubtDrawer();

  // In GATE CBT rules: Answers from "answered" AND "review-answered" are evaluated
  const submissionAnswers = {};
  currentMockTest.questions.forEach(q => {
    const status = currentMockTest.statusMap[q.id];
    if (status === "answered" || status === "review-answered") {
      const ans = currentMockTest.answers[q.id];
      if (ans !== undefined && ans !== null && String(ans).trim() !== "") {
        submissionAnswers[q.id] = ans;
      }
    }
  });

  const arenaSection = document.getElementById("testArenaSection");
  const resultSection = document.getElementById("testResultSection");

  try {
    const res = await fetch(apiUrl("api/pyqs/submit-test"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        testId: currentMockTest.testId,
        answers: submissionAnswers,
        questionIds: currentMockTest.questions ? currentMockTest.questions.map(q => q.id) : [],
        mode: currentMockTest.mode,
        subject: currentMockTest.subject,
        topic: currentMockTest.topic,
        title: currentMockTest.title
      })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || "Failed to submit exam.");
    }

    // Clean up persisted exam state
    localStorage.removeItem(ACTIVE_EXAM_STORAGE_KEY);
    const activeTestRef = currentMockTest;
    currentMockTest = null;
    updateActiveExamBanner();

    const report = data.report;

    if (arenaSection) arenaSection.hidden = true;
    if (resultSection) resultSection.hidden = false;

    // Render Score Summary
    const scoreVal = document.getElementById("resultScoreDisplay");
    const accVal = document.getElementById("resultAccuracyDisplay");
    const correctEl = document.getElementById("statCorrectCount");
    const wrongEl = document.getElementById("statWrongCount");
    const skipEl = document.getElementById("statSkippedCount");

    if (scoreVal) scoreVal.textContent = `${report.scoredMarks.toFixed(2)} / ${report.totalMarks}`;
    if (accVal) accVal.textContent = `Accuracy: ${report.accuracy}% &bull; Total Questions: ${report.totalQuestions}`;
    if (correctEl) correctEl.textContent = report.correctCount;
    if (wrongEl) wrongEl.textContent = report.wrongCount;
    if (skipEl) skipEl.textContent = report.unattemptedCount;

    // Render Detailed Explanations
    const reviewList = document.getElementById("resultReviewList");
    if (reviewList && Array.isArray(report.results)) {
      reviewList.replaceChildren();

      report.results.forEach((r, idx) => {
        const originalQ = activeTestRef.questions.find(q => q.id === r.id);
        const card = document.createElement("div");
        card.className = `review-item ${r.isCorrect ? "is-correct" : !r.isAttempted ? "is-skipped" : "is-wrong"}`;

        const isNat = originalQ?.type === "NAT" || (!Array.isArray(originalQ?.options) || originalQ?.options.length < 2);

        const statusTag = r.isCorrect
          ? `<span style="color:var(--success, #10b981); font-weight:700;">&#10004; Correct (+${r.maxMarks} Marks)</span>`
          : !r.isAttempted
            ? `<span style="color:#64748b; font-weight:700;">&#9711; Not Attempted (0 Marks)</span>`
            : `<span style="color:#e11d48; font-weight:700;">&#10008; Incorrect (${r.marksAwarded} Marks)</span>`;

        let userResponseText = '<em style="color:#94a3b8;">None</em>';
        if (r.userAnswer !== null && r.userAnswer !== undefined && String(r.userAnswer).trim() !== "") {
          if (isNat) {
            userResponseText = `<strong>${escapeHtml(String(r.userAnswer))}</strong>`;
          } else {
            const letter = String.fromCharCode(65 + Number(r.userAnswer));
            const optVal = originalQ?.options?.[r.userAnswer] || "";
            userResponseText = `<strong>(${letter})</strong> ${escapeHtml(optVal)}`;
          }
        }

        let correctResponseText = "";
        if (isNat) {
          correctResponseText = `<span style="color:var(--success, #10b981); font-weight:700;">${escapeHtml(String(r.officialAnswerKey || ''))}</span>`;
        } else {
          const letter = String.fromCharCode(65 + (typeof r.correctOption === "number" ? r.correctOption : 0));
          const optVal = originalQ?.options?.[r.correctOption] || "";
          correctResponseText = `<span style="color:var(--success, #10b981); font-weight:700;">(${letter})</span> ${escapeHtml(optVal)}`;
        }

        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:0.75rem;">
            <strong>Question ${idx + 1} &bull; ${originalQ?.gate_year || 'GATE CSE'} (${isNat ? 'NAT' : 'MCQ'})</strong>
            <div>${statusTag}</div>
          </div>
          <div class="rich-question-content" style="margin-bottom:1rem;">
            ${renderRichContent(originalQ?.question_text || '')}
          </div>
          <div style="margin-bottom:1rem; font-size:0.95rem; display:flex; flex-direction:column; gap:6px;">
            <div><strong>Your Response:</strong> ${userResponseText}</div>
            <div><strong>Correct Option / Value:</strong> ${correctResponseText}</div>
          </div>
          <details class="solution-details">
            <summary class="solution-summary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="solution-chevron"><path d="m9 18 6-6-6-6"/></svg>
              <span>View Step-by-Step Solution &amp; Derivation</span>
            </summary>
            <div class="solution-body">
              ${renderRichContent(formatStepByStepSolution(r.explanation || 'Official explanation from GfG GATE PYQ Archive.'))}
            </div>
          </details>
        `;

        reviewList.appendChild(card);
      });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (err) {
    console.error("Submit test error:", err);
    setGlobalStatus("Failed to submit test: " + (err.message || "Please check connection."));
    alert("Test Submission Error: " + (err.message || "Please check connection.") + "\n\nYour responses are saved safely in your browser. You can click Submit again to retry.");
  }
}

window.addEventListener("beforeunload", () => {
  if (currentMockTest) {
    saveActiveExamState();
  }
});

window.addEventListener("hashchange", renderRoute);

// Initial Load
ensureArenaControlsBound();
renderSubjects();
renderRoute();
refreshSessionState();

