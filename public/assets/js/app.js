"use strict";

const subjects = {
  "c-programming": {
    name: "C Programming",
    emoji: "💻",
    description: "Learn C fundamentals, pointers, arrays, functions and more.",
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
    emoji: "🌳",
    description: "Study linked lists, stacks, queues, trees and graphs.",
    topics: ["Time and Space Complexity", "Arrays", "Linked Lists", "Stacks", "Queues", "Trees and Binary Search Trees", "Heaps and Hashing", "Graphs"]
  },
  algorithms: {
    name: "Algorithms",
    emoji: "⚙️",
    description: "Practice sorting, searching, greedy algorithms and dynamic programming.",
    topics: ["Asymptotic Notations", "Searching and Sorting", "Divide and Conquer", "Greedy Algorithms", "Dynamic Programming", "Graph Algorithms", "Minimum Spanning Trees", "Shortest Path Algorithms", "Backtracking", "NP-Completeness"]
  },
  "operating-system": {
    name: "Operating System",
    emoji: "🖥️",
    description: "Understand processes, memory management and scheduling.",
    topics: ["Process and Threads", "CPU Scheduling", "Process Synchronization", "Deadlocks", "Memory Management", "Paging and Segmentation", "Virtual Memory", "File Systems", "Disk Scheduling"]
  },
  dbms: {
    name: "DBMS",
    emoji: "🗄️",
    description: "Learn SQL, normalization, transactions and relational models.",
    topics: ["ER Model", "Relational Model", "SQL Queries", "Relational Algebra", "Functional Dependencies", "Normalization", "Transactions", "Concurrency Control", "Indexing"]
  },
  "computer-networks": {
    name: "Computer Networks",
    emoji: "🌐",
    description: "Explore network layers, protocols, IP addressing and routing.",
    topics: ["Network Models: OSI and TCP/IP", "Data Link Layer", "Error Detection", "MAC and Ethernet", "IP Addressing and Subnetting", "Routing Algorithms", "TCP and UDP", "Application Layer", "Network Security Basics"]
  },
  "engineering-mathematics": {
    name: "Engineering Mathematics",
    emoji: "📐",
    description: "Practise mathematical concepts important for GATE CSE.",
    topics: ["Propositional and Predicate Logic", "Sets and Relations", "Combinatorics", "Graph Theory", "Linear Algebra", "Eigenvalues and Eigenvectors", "Probability", "Random Variables"]
  },
  "general-aptitude": {
    name: "General Aptitude",
    emoji: "🧠",
    description: "Improve verbal ability, numerical aptitude and reasoning.",
    topics: ["Numerical Calculation", "Percentages and Ratios", "Averages", "Time and Work", "Probability and Counting", "Logical Reasoning", "Verbal Aptitude", "Reading Comprehension"]
  },
  "theory-of-computation": {
    name: "Theory of Computation (TOC)",
    emoji: "🧮",
    description: "Learn automata, formal languages and computability.",
    topics: ["Finite Automata", "Regular Expressions", "Context Free Grammar", "Pushdown Automata", "Turing Machine", "Decidability", "Undecidability"]
  },
  "compiler-design": {
    name: "Compiler Design (CD)",
    emoji: "⚙️",
    description: "Learn compiler phases, parsing, code generation and optimization.",
    topics: ["Compiler Phases", "Lexical Analysis", "Regular Expressions", "Finite Automata", "Syntax Analysis and Parsing", "Context Free Grammar", "Top Down Parsing", "Bottom Up Parsing", "Syntax Directed Translation", "Intermediate Code Generation", "Code Optimization", "Code Generation"]
  },
  "computer-organization-and-architecture": {
    name: "Computer Organization and Architecture (COA)",
    emoji: "💻",
    description: "Learn computer architecture, memory, processors and I/O systems.",
    topics: ["Number Systems and Data Representation", "Boolean Algebra and Logic Circuits", "Instruction Set Architecture", "Addressing Modes", "CPU Organization", "Pipelining", "Memory Hierarchy", "Cache Memory", "Virtual Memory", "Input Output Organization", "Interrupts and DMA", "Multiprocessors"]
  },
  "digital-logic": {
    name: "Digital Logic (DL)",
    emoji: "🔌",
    description: "Learn logic gates, Boolean algebra, circuits and digital systems.",
    topics: ["Number Systems and Codes", "Boolean Algebra", "Logic Gates", "K-Maps", "Combinational Circuits", "Adders and Subtractors", "Multiplexers and Demultiplexers", "Encoders and Decoders", "Flip-Flops", "Registers and Counters", "Sequential Circuits", "Finite State Machines"]
  }
};

const appRoot = new URL("../../", document.currentScript.src).pathname;
const views = [...document.querySelectorAll("[data-view]")];
const navLinks = [...document.querySelectorAll("[data-nav]")];
const globalStatus = document.getElementById("globalStatus");
let statusTimer;
let quizQuestions = [];
let currentQuestion = 0;
let quizScore = 0;
let selectedAnswer = -1;
let answered = false;

function apiUrl(path) {
  return `${appRoot}${path.replace(/^\/+/, "")}`;
}

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
    logoutButton.hidden = !authenticated;
  } catch (error) {
    console.error("Session status error:", error);
    accountLinks.forEach(link => {
      link.hidden = false;
    });
    logoutButton.hidden = true;
    setGlobalStatus("Could not check your account session. Please confirm the GATEPrep server is available.");
  }
}

async function logout() {
  const button = document.querySelector("[data-logout]");
  button.disabled = true;

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
    button.disabled = false;
  }
}

function setGlobalStatus(message) {
  globalStatus.textContent = message;
  globalStatus.hidden = false;
  window.clearTimeout(statusTimer);
  statusTimer = window.setTimeout(() => {
    globalStatus.hidden = true;
  }, 5000);
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
  const [route = "home", ...params] = routeParts();
  const resolvedRoute = route === "login" || route === "signup" ? "auth" : route;
  const viewName = ["home", "auth", "subjects", "dashboard", "progress", "contact"].includes(resolvedRoute)
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

  const activeNav = viewName === "subject" || viewName === "practice" ? "subjects" : viewName === "auth" ? route : viewName;
  navLinks.forEach(link => {
    if (link.dataset.nav === activeNav) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (viewName === "subjects") {
    document.getElementById("subjectSearch").focus({ preventScroll: true });
  } else if (viewName === "subject") {
    renderSubject(params[0] || "");
  } else if (viewName === "practice") {
    startPractice(params[0] || "", params[1] || "");
  } else if (viewName === "dashboard") {
    loadQuizHistory("dashboard");
  } else if (viewName === "progress") {
    loadQuizHistory("progress");
  }

  const titles = {
    home: "GATEPrep | Prepare Smarter",
    auth: "GATEPrep | Account",
    subjects: "GATEPrep | Subjects",
    subject: "GATEPrep | Subject Learning",
    practice: "GATEPrep | Practice",
    dashboard: "GATEPrep | Dashboard",
    progress: "GATEPrep | Progress",
    contact: "GATEPrep | Contact"
  };
  document.title = titles[viewName] || "GATEPrep";
}

function makeSubjectCard(slug, subject) {
  const card = document.createElement("article");
  card.className = "subject-card";

  const icon = document.createElement("span");
  icon.className = "subject-emoji";
  icon.textContent = subject.emoji;

  const title = document.createElement("h2");
  title.textContent = subject.name;

  const description = document.createElement("p");
  description.textContent = subject.description;

  const count = document.createElement("p");
  count.className = "topic-count";
  count.textContent = `Topics: ${subject.topics.length}`;

  const button = document.createElement("a");
  button.className = "button button-primary";
  button.href = `#subject/${encodeURIComponent(slug)}`;
  button.textContent = "Explore subject →";

  card.append(icon, title, description, count, button);
  return card;
}

function renderSubjects() {
  const grid = document.getElementById("subjectGrid");
  grid.replaceChildren();
  Object.entries(subjects).forEach(([slug, subject]) => {
    grid.appendChild(makeSubjectCard(slug, subject));
  });
  filterSubjects();

  const dashboardGrid = document.getElementById("dashboardSubjects");
  dashboardGrid.replaceChildren();
  Object.entries(subjects).forEach(([slug, subject]) => {
    const link = document.createElement("a");
    link.href = `#subject/${encodeURIComponent(slug)}`;

    const title = document.createElement("strong");
    title.textContent = `${subject.emoji} ${subject.name}`;

    const topics = document.createElement("span");
    topics.textContent = `${subject.topics.length} learning topics`;
    link.append(title, topics);
    dashboardGrid.appendChild(link);
  });
}

function filterSubjects() {
  const value = document.getElementById("subjectSearch").value.trim().toLowerCase();
  const cards = [...document.querySelectorAll("#subjectGrid .subject-card")];
  let matches = 0;

  cards.forEach((card, index) => {
    const subject = Object.values(subjects)[index];
    const visible = `${subject.name} ${subject.description}`.toLowerCase().includes(value);
    card.hidden = !visible;
    if (visible) matches++;
  });

  document.getElementById("noSubjects").hidden = matches !== 0;
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
  grid.replaceChildren();
  status.textContent = "";

  if (!subject) {
    hero.replaceChildren();
    const title = document.createElement("h1");
    title.textContent = "Subject not found";
    const description = document.createElement("p");
    description.textContent = "Please return to All Subjects and choose a subject.";
    hero.append(title, description);
    return;
  }

  const title = document.createElement("h1");
  title.textContent = `${subject.emoji} ${subject.name}`;
  const description = document.createElement("p");
  description.textContent = subject.description;
  hero.replaceChildren(title, description);

  subject.topics.forEach(topic => {
    const card = document.createElement("article");
    card.className = "topic-card";

    const heading = document.createElement("h3");
    heading.textContent = `📘 ${topic}`;
    const detail = document.createElement("p");
    detail.textContent = "Study this topic with a lecture and your own notes.";

    const actions = document.createElement("div");
    actions.className = "topic-actions";
    const video = document.createElement("a");
    video.className = "button button-primary";
    video.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`GATE CSE ${subject.name} ${topic}`)}`;
    video.target = "_blank";
    video.rel = "noopener noreferrer";
    video.textContent = "▶ Find videos";

    const guideButton = document.createElement("button");
    guideButton.className = "button button-secondary";
    guideButton.type = "button";
    guideButton.textContent = "📝 Study guide";
    const guide = document.createElement("p");
    guide.className = "topic-notes";
    guide.hidden = true;
    guide.textContent = "Review the core concepts, make concise notes, solve practice questions, and revisit any mistakes.";
    guideButton.addEventListener("click", () => {
      guide.hidden = !guide.hidden;
    });

    const practice = document.createElement("a");
    practice.className = "button button-secondary";
    practice.href = `#practice/${encodeURIComponent(slug)}/${encodeURIComponent(topicSlug(topic))}`;
    practice.textContent = "🎯 Practice questions";

    actions.append(video, guideButton, practice);
    card.append(heading, detail, actions, guide);
    grid.appendChild(card);
  });
}

function readableName(slug) {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function showPracticeError(message) {
  document.getElementById("questionNumber").textContent = "Notice";
  document.getElementById("questionText").textContent = message;
  document.getElementById("answerOptions").replaceChildren();
  document.getElementById("quizFeedback").textContent = "";
  document.getElementById("checkAnswer").hidden = true;
  document.getElementById("nextQuestion").hidden = true;
  document.getElementById("practiceStatus").textContent =
    "Practice questions depend on the GATEPrep backend and PostgreSQL question bank.";
}

async function startPractice(subjectSlug, topic) {
  const quizPanel = document.getElementById("quizPanel");
  const resultPanel = document.getElementById("quizResult");
  const title = document.getElementById("practiceTitle");
  quizPanel.hidden = false;
  resultPanel.hidden = true;
  document.getElementById("quizProgress").style.width = "0%";
  document.getElementById("scoreLabel").textContent = "Score: 0";

  if (!subjectSlug || !topic) {
    title.textContent = "Practice questions";
    showPracticeError("Choose a subject topic before starting practice.");
    return;
  }

  title.textContent = `${readableName(subjectSlug)}: ${readableName(topic)}`;
  document.getElementById("questionNumber").textContent = "Loading questions...";
  document.getElementById("questionText").textContent = "Connecting to the question bank...";
  document.getElementById("checkAnswer").hidden = true;
  document.getElementById("nextQuestion").hidden = true;
  document.getElementById("practiceStatus").textContent =
    "Practice questions are provided by the GATEPrep question-bank API. A backend is required.";

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
      const options = typeof item.options === "string" ? JSON.parse(item.options) : item.options;
      if (!Array.isArray(options)) {
        throw new Error("A question has invalid answer options.");
      }
      return {
        question: item.question_text,
        options,
        answer: Number(item.correct_option),
        explanation: item.explanation || ""
      };
    });

    if (quizQuestions.length === 0) {
      showPracticeError("No questions are available for this topic in the question bank.");
      return;
    }

    document.getElementById("practiceStatus").textContent = "";
    currentQuestion = 0;
    quizScore = 0;
    loadQuestion();
  } catch (error) {
    console.error("Practice loading error:", error);
    showPracticeError("Could not load questions. This feature needs a running GATEPrep backend and question database.");
  }
}

function loadQuestion() {
  const item = quizQuestions[currentQuestion];
  selectedAnswer = -1;
  answered = false;
  document.getElementById("questionNumber").textContent =
    `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  document.getElementById("scoreLabel").textContent = `Score: ${quizScore}`;
  document.getElementById("quizProgress").style.width =
    `${(currentQuestion / quizQuestions.length) * 100}%`;
  document.getElementById("questionText").textContent = item.question;

  const options = document.getElementById("answerOptions");
  options.replaceChildren();
  item.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "answer-option";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = String(index);
    radio.addEventListener("change", () => {
      selectedAnswer = index;
      document.querySelectorAll(".answer-option").forEach(choice => choice.classList.remove("is-selected"));
      label.classList.add("is-selected");
    });
    label.append(radio, document.createTextNode(`${String.fromCharCode(65 + index)}. ${option}`));
    options.appendChild(label);
  });

  const feedback = document.getElementById("quizFeedback");
  feedback.textContent = "";
  feedback.className = "quiz-feedback";
  document.getElementById("checkAnswer").hidden = false;
  document.getElementById("nextQuestion").hidden = true;
}

function checkAnswer() {
  if (answered) return;
  if (selectedAnswer < 0) {
    document.getElementById("quizFeedback").textContent = "Please select an answer first.";
    return;
  }

  answered = true;
  const item = quizQuestions[currentQuestion];
  document.querySelectorAll(".answer-option").forEach((label, index) => {
    const radio = label.querySelector("input");
    radio.disabled = true;
    if (index === item.answer) label.classList.add("is-correct");
    else if (index === selectedAnswer) label.classList.add("is-wrong");
  });

  const feedback = document.getElementById("quizFeedback");
  if (selectedAnswer === item.answer) {
    quizScore++;
    feedback.className = "quiz-feedback is-good";
    feedback.textContent = `Correct answer! ${item.explanation}`;
  } else {
    feedback.className = "quiz-feedback is-bad";
    feedback.textContent = `Incorrect. Correct answer: ${String.fromCharCode(65 + item.answer)}. ${item.options[item.answer]}. ${item.explanation}`;
  }

  document.getElementById("scoreLabel").textContent = `Score: ${quizScore}`;
  document.getElementById("checkAnswer").hidden = true;
  const next = document.getElementById("nextQuestion");
  next.hidden = false;
  next.textContent = currentQuestion === quizQuestions.length - 1 ? "View result" : "Next question →";
}

function nextQuestion() {
  if (!answered) return;
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showQuizResult();
  }
}

async function showQuizResult() {
  document.getElementById("quizPanel").hidden = true;
  document.getElementById("quizResult").hidden = false;
  document.getElementById("quizProgress").style.width = "100%";
  const accuracy = Math.round((quizScore / quizQuestions.length) * 100);
  const resultText = document.getElementById("resultText");
  resultText.textContent = `You scored ${quizScore} out of ${quizQuestions.length}. Accuracy: ${accuracy}%. Saving your result...`;

  const [route, subjectSlug, topic] = routeParts();
  if (route !== "practice" || !subjectSlug || !topic) {
    resultText.textContent = `You scored ${quizScore} out of ${quizQuestions.length}. Accuracy: ${accuracy}%. This result was not saved.`;
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
    resultText.textContent = `You scored ${quizScore} out of ${quizQuestions.length}. Accuracy: ${accuracy}%. Your result has been saved.`;
  } catch (error) {
    console.error("Quiz result save error:", error);
    resultText.textContent = `You scored ${quizScore} out of ${quizQuestions.length}. Accuracy: ${accuracy}%. Your score was not saved; saving it requires login and the GATEPrep backend.`;
  }
}

function renderHistoryRows(container, data) {
  container.replaceChildren();
  data.forEach(item => {
    const row = document.createElement("tr");
    const values = [
      readableName(String(item.subject_slug || "")),
      readableName(String(item.topic_slug || "")),
      `${item.score} / ${item.total_questions}`,
      `${Number(item.accuracy).toFixed(2)}%`,
      item.attempted_at ? new Date(item.attempted_at).toLocaleString() : ""
    ];
    values.forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    container.appendChild(row);
  });
}

async function loadQuizHistory(viewName) {
  const isProgress = viewName === "progress";
  const status = document.getElementById(isProgress ? "progressStatus" : "dashboardHistoryStatus");
  const table = document.getElementById(isProgress ? "progressHistory" : "dashboardHistory");
  status.textContent = "Loading quiz history...";
  table.replaceChildren();

  if (isProgress) {
    document.getElementById("totalQuizzes").textContent = "—";
    document.getElementById("totalQuestions").textContent = "—";
    document.getElementById("averageAccuracy").textContent = "—";
  } else {
    document.getElementById("dashboardQuestions").textContent = "—";
    document.getElementById("dashboardAccuracy").textContent = "—";
  }

  try {
    const response = await fetch(apiUrl("api/quiz-results"), { credentials: "same-origin" });
    if (!response.ok) {
      throw new Error(`Progress API returned HTTP ${response.status}.`);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error("Progress API returned an invalid response.");
    }

    const totalQuestions = data.reduce((sum, item) => sum + Number(item.total_questions || 0), 0);
    const average = data.length
      ? data.reduce((sum, item) => sum + Number(item.accuracy || 0), 0) / data.length
      : 0;

    if (isProgress) {
      document.getElementById("totalQuizzes").textContent = String(data.length);
      document.getElementById("totalQuestions").textContent = String(totalQuestions);
      document.getElementById("averageAccuracy").textContent = `${average.toFixed(2)}%`;
      status.textContent = data.length ? `You have attempted ${data.length} quiz${data.length === 1 ? "" : "zes"}.` : "No quiz attempts have been recorded.";
    } else {
      document.getElementById("dashboardQuestions").textContent = String(totalQuestions);
      document.getElementById("dashboardAccuracy").textContent = `${average.toFixed(2)}%`;
      document.getElementById("dashboardProgressStatus").textContent =
        data.length ? `You have attempted ${data.length} quiz${data.length === 1 ? "" : "zes"}.` : "No quiz attempts have been recorded.";
      status.textContent = data.length ? `Total quiz attempts: ${data.length}` : "No quiz attempts have been recorded.";
    }
    renderHistoryRows(table, data);
  } catch (error) {
    console.error("Progress loading error:", error);
    status.textContent = "Progress is unavailable. It requires a logged-in account and the GATEPrep backend with its database.";
    if (!isProgress) {
      document.getElementById("dashboardProgressStatus").textContent =
        "Progress requires a logged-in account and the GATEPrep backend.";
    }
  }
}

async function submitAccountForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const isSignup = form.id === "signupForm";
  const status = document.getElementById("authStatus");
  const fields = new FormData(form);
  const payload = Object.fromEntries(fields.entries());
  status.textContent = "Connecting to the GATEPrep account service...";

  try {
    const response = await fetch(apiUrl(isSignup ? "signup" : "login"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify(payload)
    });
    const result = await response.json().catch(() => ({}));

if (!response.ok) {
  status.textContent = `Error ${response.status}: ${result.message || "Unknown server error"}`;
  console.error("Account API error:", response.status, result);
  return;
}

status.textContent = result.message || "Account request completed.";

if (!isSignup && result.redirect) {
  await refreshSessionState();
  navigate("dashboard");
}
} catch (error) {
  console.error("Account request error:", error);
  status.textContent = "Could not reach the GATEPrep account service. Login and signup need a running backend.";
}
}

async function submitContactForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.getElementById("contactStatus");
  const fields = new FormData(form);
  status.textContent = "Sending your message...";

  try {
    const response = await fetch(apiUrl("api/contact"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(fields.entries()))
    });
    if (!response.ok) {
      status.textContent = response.status === 404 || response.status === 405 || response.status === 501
        ? "Your message was not sent. Message delivery requires the GATEPrep contact API."
        : "The GATEPrep server could not save your message.";
      return;
    }
    const result = await response.json();
    status.textContent = result.message || "Your message was sent.";
    form.reset();
  } catch (error) {
    console.error("Contact request error:", error);
    status.textContent = "Your message was not sent. A running GATEPrep backend is required.";
  }
}

function setAuthMode(mode) {
  const signup = mode === "signup";
  document.getElementById("signupForm").hidden = !signup;
  document.getElementById("loginForm").hidden = signup;
  document.getElementById("authHeading").textContent = signup ? "Start your GATE preparation" : "Welcome back";
  document.getElementById("authStatus").textContent = "";
  document.querySelectorAll("[data-auth-mode]").forEach(button => {
    const active = button.dataset.authMode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

document.getElementById("subjectSearch").addEventListener("input", filterSubjects);
document.getElementById("signupForm").addEventListener("submit", submitAccountForm);
document.getElementById("loginForm").addEventListener("submit", submitAccountForm);
document.getElementById("contactForm").addEventListener("submit", submitContactForm);
document.querySelector("[data-logout]").addEventListener("click", logout);
document.getElementById("checkAnswer").addEventListener("click", checkAnswer);
document.getElementById("nextQuestion").addEventListener("click", nextQuestion);
document.getElementById("restartQuiz").addEventListener("click", () => {
  if (quizQuestions.length) {
    currentQuestion = 0;
    quizScore = 0;
    document.getElementById("quizPanel").hidden = false;
    document.getElementById("quizResult").hidden = true;
    loadQuestion();
  }
});

document.querySelectorAll("[data-auth-mode]").forEach(button => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

document.querySelectorAll("[data-toggle-password]").forEach(button => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.togglePassword);
    input.type = input.type === "password" ? "text" : "password";
    button.textContent = input.type === "password" ? "Show" : "Hide";
  });
});

document.querySelectorAll("[data-backend-notice]").forEach(button => {
  button.addEventListener("click", () => setGlobalStatus(button.dataset.backendNotice));
});

window.addEventListener("hashchange", renderRoute);
renderSubjects();
renderRoute();
refreshSessionState();
