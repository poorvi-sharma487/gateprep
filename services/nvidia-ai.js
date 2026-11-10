"use strict";

const NVIDIA_API_URL = process.env.NVIDIA_API_URL || "https://integrate.api.nvidia.com/v1/chat/completions";
const DEFAULT_MODEL = process.env.NVIDIA_MODEL || "nvidia/nemotron-3.5-bolt-e4b";
const DEFAULT_API_KEY = process.env.NVIDIA_API_KEY || "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";

function cleanJsonText(rawText) {
  if (typeof rawText !== "string") return null;

  // Remove <thought>...</thought> and <think>...</think> reasoning blocks if present
  let text = rawText.replace(/<(?:think|thought)>[\s\S]*?<\/(?:think|thought)>/gi, "").trim();

  // Strip outer markdown code fences only (never strip ``` inside JSON)
  if (text.startsWith("```")) {
    text = text.replace(/^```(?:json)?\s*\r?\n/i, "").replace(/\r?\n```\s*$/i, "").trim();
  }

  const firstOpen = text.indexOf("{");
  const lastClose = text.lastIndexOf("}");

  let candidate = text;
  if (firstOpen !== -1 && lastClose !== -1 && lastClose > firstOpen) {
    candidate = text.substring(firstOpen, lastClose + 1);
  }

  // 1. Direct parse attempt
  try {
    return JSON.parse(candidate);
  } catch (e1) {
    // 2. Fix invalid backslash escapes produced by LLMs (e.g. \% -> %, etc.)
    try {
      const sanitized = candidate.replace(/\\([^"\\\/bfnrtu])/g, "$1");
      return JSON.parse(sanitized);
    } catch (e2) {
      // 3. Regex fallback
      try {
        const qMatch = candidate.match(/"question_text"\s*:\s*"([\s\S]*?)(?<!\\)"/);
        const expMatch = candidate.match(/"explanation"\s*:\s*"([\s\S]*?)(?<!\\)"/);
        const optMatch = candidate.match(/"options"\s*:\s*\[([\s\S]*?)\]/);
        const corrMatch = candidate.match(/"correct_option"\s*:\s*([0-3A-Da-d]|"[^"]*")/);
        if (qMatch && optMatch) {
          const rawOpts = optMatch[1]
            .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
            .map(o => o.trim().replace(/^"|"$/g, ""));
          return {
            question_text: qMatch[1].replace(/\\n/g, "\n").replace(/\\"/g, '"'),
            options: rawOpts,
            correct_option: corrMatch ? corrMatch[1].replace(/"/g, "") : 0,
            explanation: expMatch ? expMatch[1].replace(/\\n/g, "\n").replace(/\\"/g, '"') : ""
          };
        }
      } catch (e3) {
        // fall through
      }
    }
  }

  return null;
}

async function generateGatePyq({
  subject = "c-programming",
  topic = "pointers",
  difficulty = "medium",
  focusTopic = "",
  apiKey = DEFAULT_API_KEY,
  model = DEFAULT_MODEL
} = {}) {
  const prompt = `You are a distinguished IIT professor and GATE CSE paper setter.
Generate ONE authentic, technically rigorous GATE CSE Multiple-Choice Question (MCQ).
Subject: ${subject}
Topic: ${topic}
${focusTopic ? `Specific Focus / Concept: ${focusTopic}` : ""}
Target Difficulty: ${difficulty}

Requirements:
1. Question text should be clear and realistic to GATE standards.
   CRITICAL FOR CODE SNIPPETS: Whenever the question involves code (e.g. C, Python, SQL, Pseudocode), you MUST enclose the code inside triple backtick markdown code blocks with the language tag (e.g. \`\`\`c\\n#include <stdio.h>\\n...\\n\`\`\`). Never output raw unformatted code lines in question_text.
   CRITICAL FOR MATH: Format mathematical variables and equations with standard LaTeX ($inline$ and $$block$$).
2. Exactly 4 unambiguous options (A, B, C, D).
   CRITICAL FOR OPTIONS: Options array should contain ONLY the option value itself (e.g. "4", "3", "O(n \\\\log n)"). Do NOT prefix options with letters like "A." or "(A)".
3. The correct option index (0 for A, 1 for B, 2 for C, 3 for D).
4. Detailed, step-by-step conceptual explanation with formulas, code walkthrough, or derivation.
5. Difficulty rating ("easy", "medium", or "hard").
6. Real or realistic GATE tag, e.g. "GATE 2023", "GATE 2021", or "GATE Standard".

Respond ONLY with a valid JSON object in this exact schema without markdown codeblocks or preamble:
{
  "question_text": "...",
  "options": ["...", "...", "...", "..."],
  "correct_option": 0,
  "explanation": "...",
  "difficulty": "${difficulty}",
  "gate_year": "GATE 2023"
}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 28000);

  try {
    const response = await fetch(NVIDIA_API_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content: "You are an expert GATE CSE paper setter. You always output valid, raw JSON with keys: question_text, options, correct_option, explanation, difficulty, gate_year. No markdown, no prose."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.5,
        max_tokens: 900
      })
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      throw new Error(`NVIDIA API returned HTTP ${response.status}: ${errorBody.slice(0, 200)}`);
    }

    const data = await response.json();
    const rawContent = data?.choices?.[0]?.message?.content || "";
    const parsed = cleanJsonText(rawContent);

    if (!parsed || !parsed.question_text || !Array.isArray(parsed.options) || parsed.options.length < 2) {
      throw new Error("NVIDIA AI response could not be parsed into a valid GATE question format.");
    }

    let correctIdx = 0;
    if (typeof parsed.correct_option === "number") {
      correctIdx = parsed.correct_option;
    } else if (typeof parsed.correct_option === "string") {
      const trimmed = parsed.correct_option.trim();
      if (/^[0-3]$/.test(trimmed)) {
        correctIdx = parseInt(trimmed, 10);
      } else if (/^[A-D]$/i.test(trimmed)) {
        correctIdx = trimmed.toUpperCase().charCodeAt(0) - 65;
      } else {
        const matchIdx = parsed.options.findIndex(opt => String(opt).trim().toLowerCase() === trimmed.toLowerCase());
        correctIdx = matchIdx >= 0 ? matchIdx : 0;
      }
    }
    if (correctIdx < 0 || correctIdx >= parsed.options.length) {
      correctIdx = 0;
    }

    return {
      question_text: parsed.question_text,
      options: parsed.options,
      correct_option: correctIdx,
      explanation: parsed.explanation || "No explanation provided.",
      difficulty: parsed.difficulty || difficulty,
      gate_year: parsed.gate_year || parsed.year || "GATE Standard"
    };
  } catch (err) {
    clearTimeout(timeoutId);
    console.warn("NVIDIA AI generate error, falling back to authentic GATE question archive:", err.message);
    try {
      const fs = require('fs');
      const path = require('path');
      const dbPath = path.resolve(__dirname, '..', 'pyqs', 'gate_pyqs_database.json');
      if (fs.existsSync(dbPath)) {
        const pyqs = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        const filtered = pyqs.filter(q => {
          if (subject && q.subject_slug !== subject && q.subject_name?.toLowerCase() !== subject.toLowerCase()) return false;
          if (difficulty && difficulty !== 'all' && q.difficulty !== difficulty) return false;
          return Array.isArray(q.options) && q.options.length >= 2;
        });
        const pool = filtered.length > 0 ? filtered : pyqs.filter(q => Array.isArray(q.options) && q.options.length >= 2);
        if (pool.length > 0) {
          const picked = pool[Math.floor(Math.random() * pool.length)];
          return {
            question_text: picked.question_text,
            options: picked.options,
            correct_option: picked.correct_option ?? 0,
            explanation: picked.explanation || "Official solution from GATE CSE Archive.",
            difficulty: picked.difficulty || difficulty || "medium",
            gate_year: picked.gate_year || "GATE Standard"
          };
        }
      }
    } catch (e2) {
      console.warn("Archive fallback error:", e2.message);
    }
    throw err;
  }
}

async function solveGateDoubt({
  message,
  subject = "GATE CSE",
  topic = "General",
  contextQuestion = null,
  history = [],
  apiKey = DEFAULT_API_KEY,
  model = DEFAULT_MODEL
} = {}) {
  const systemPrompt = `You are "GATEPrep AI Doubt Solver", an elite GATE CSE mentor and top IIT ranker.
Your purpose is to help GATE computer science students thoroughly understand difficult concepts, algorithms, numericals, and theory.
Current Subject Context: ${subject}
Current Topic Context: ${topic}
${contextQuestion ? `Context Question: "${contextQuestion}"` : ""}

Guidelines:
1. Provide accurate, crystal-clear, step-by-step mathematical and conceptual explanations.
2. Format all mathematical variables and formulas in standard LaTeX: use $inline$ (e.g. $p_i$, $O(n \\log n)$, $T(n) = 2T(n/2) + n$) and $$block$$ for display equations.
3. Use Markdown tables (| col1 | col2 |) with clear headers when presenting comparisons, simulations, or trace tables.
4. Use clean Markdown headings (### Concept, ### Step-by-Step Derivation, ### Common GATE Traps) and bold keywords (**Key Term**) to structure the response.
5. If discussing code or data structures, provide clean, syntax-highlighted code blocks with language tag (e.g. \`\`\`c or \`\`\`python).
6. Do not use emojis anywhere in your response. Keep tone professional, authoritative, and helpful.`;

  const messages = [
    { role: "system", content: systemPrompt }
  ];

  if (Array.isArray(history)) {
    for (const h of history.slice(-6)) {
      if (h.role && h.content) {
        messages.push({
          role: h.role === "assistant" ? "assistant" : "user",
          content: String(h.content).slice(0, 1000)
        });
      }
    }
  }

  messages.push({
    role: "user",
    content: message
  });

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 28000);

  try {
    const response = await fetch(NVIDIA_API_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.6,
        max_tokens: 1024
      })
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      throw new Error(`NVIDIA API returned HTTP ${response.status}: ${errorBody.slice(0, 200)}`);
    }

    const data = await response.json();
    let content = data?.choices?.[0]?.message?.content || "";

    // Remove <thought> or <think> tags if model produces thinking output
    content = content.replace(/<(?:think|thought)>[\s\S]*?<\/(?:think|thought)>/gi, "").trim();

    return {
      reply: content,
      model: data.model || model,
      usage: data.usage || null
    };
  } catch (err) {
    clearTimeout(timeoutId);
    console.warn("NVIDIA AI doubt solver error, providing conceptual guidance:", err.message);
    return {
      reply: `### Conceptual Guidance & Derivation Approach\n\n**Subject Context:** ${subject} &bull; ${topic}\n\nWe encountered a temporary network delay with the remote AI solver. Here is how to analyze this GATE question systematically:\n\n1. **Core Property**: Identify the governing theorem or definition (e.g. Master Theorem for recursions, LR parsing table conflict rules, or IEEE-754 format breakdown).\n2. **Step-by-Step Check**: Work through the variables or code line by line, maintaining a trace table.\n3. **Negative Marking Caution**: Avoid wild guessing on questions with 1/3 penalty unless two choices can be eliminated definitively.\n\n*Please ask again or retry for an interactive step-by-step AI derivation.*`,
      model: "offline-fallback",
      usage: null
    };
  }
}

module.exports = {
  generateGatePyq,
  solveGateDoubt,
  cleanJsonText,
  DEFAULT_API_KEY,
  DEFAULT_MODEL,
  NVIDIA_API_URL
};
