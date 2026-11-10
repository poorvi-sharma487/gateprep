const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const markedContent = fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'vendor', 'marked.min.js'), 'utf8');
const katex = require('../public/assets/vendor/katex.min.js');

const markedModule = { exports: {} };
const runMarked = new Function('module', 'exports', markedContent);
runMarked(markedModule, markedModule.exports);
const marked = markedModule.exports.marked || markedModule.exports;

function cleanQuestionText(rawText) {
  if (typeof rawText !== 'string' || !rawText.trim()) return '';
  let text = rawText;

  text = text
    .replace(/\bmicro\s*-\s*\n?\s*operations\b/gi, 'micro-operations')
    .replace(/(\b[a-zA-Z]+)\s*-\s*\n\s*([a-zA-Z]+\b)/g, '$1$2')
    .replace(/\bcylind\s+er\b/gi, 'cylinder')
    .replace(/\bre\s+move\b/gi, 'remove')
    .replace(/\b128\s*byte\s*-\s*block\b/gi, '128-byte block')
    .replace(/\b8\s*-\s*bytes\b/gi, '8-bytes')
    .replace(/(\d+)\s*-\s*bytes\b/gi, '$1-bytes')
    .replace(/([A-Za-z0-9])\s*←\s*([A-Za-z0-9])/g, '$1 ← $2');

  return text;
}

function ensureCodeBlockFormatting(rawText) {
  if (typeof rawText !== 'string' || !rawText.trim()) return '';
  let text = cleanQuestionText(rawText);

  if (text.includes('```')) return text;

  const lines = text.split(/\r?\n/);
  const result = [];
  let inCode = false;
  let codeBuf = [];

  const isMathLine = (t) => {
    if (/[√≤≥±≠≈∑∫⋅∞]/.test(t)) return true;
    if (/^(?:Note|where|Let|Since|At\s+[a-z]\s*=|Hence|Therefore|Using|We|If)\b/i.test(t)) return true;
    if (/\b(?:dC|dq|ddq|dx|dy|dt|C\(q\)|f\(x\))\b/.test(t)) return true;
    if (/=/.test(t) && !/[;{}()]/.test(t) && !/^(?:int|char|float|void|double|struct|typedef)\b/.test(t)) {
      return true;
    }
    return false;
  };

  const isCodeLine = (line) => {
    const t = line.trim();
    if (!t) return inCode;
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
    // Compound assignment inside code
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

function renderInlineContent(rawText, { katexInstance = katex, markedInstance = marked } = {}) {
  if (typeof rawText !== 'string' || !rawText.trim()) return '';

  let text = String(rawText).trim();
  text = text.replace(/^(?:\(?[A-Da-d]\)?[\.\:]?)\s*/, '').trim();

  const mathInlines = [];
  text = text.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => {
    mathInlines.push(math.trim());
    return `%%MATH_INLINE_${mathInlines.length - 1}%%`;
  });
  text = text.replace(/(^|[^\\])\$([^\$\n]+?)\$/g, (match, prefix, math) => {
    mathInlines.push(math.trim());
    return `${prefix}%%MATH_INLINE_${mathInlines.length - 1}%%`;
  });

  let html = '';
  if (markedInstance && typeof markedInstance.parseInline === 'function') {
    html = markedInstance.parseInline(text);
  } else {
    html = text;
  }

  html = html.replace(/%%MATH_INLINE_(\d+)%%/g, (_, idx) => {
    const mathCode = mathInlines[Number(idx)];
    if (!mathCode) return '';
    try {
      return katexInstance.renderToString(mathCode, { displayMode: false, throwOnError: false });
    } catch (e) {
      return mathCode;
    }
  });

  return html.replace(/<\/?p>/gi, '').trim();
}

function renderRichContent(rawText, { katexInstance = katex, markedInstance = marked } = {}) {
  if (typeof rawText !== 'string' || !rawText.trim()) return '';

  let text = ensureCodeBlockFormatting(rawText);

  const mathBlocks = [];
  const mathInlines = [];

  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
    mathBlocks.push(math.trim());
    return `%%MATH_BLOCK_${mathBlocks.length - 1}%%`;
  });
  text = text.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => {
    mathBlocks.push(math.trim());
    return `%%MATH_BLOCK_${mathBlocks.length - 1}%%`;
  });

  text = text.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => {
    mathInlines.push(math.trim());
    return `%%MATH_INLINE_${mathInlines.length - 1}%%`;
  });
  text = text.replace(/(^|[^\\])\$([^\$\n]+?)\$/g, (match, prefix, math) => {
    mathInlines.push(math.trim());
    return `${prefix}%%MATH_INLINE_${mathInlines.length - 1}%%`;
  });

  let html = '';
  if (markedInstance && typeof markedInstance.parse === 'function') {
    html = markedInstance.parse(text, { gfm: true, breaks: false });
  } else {
    html = text;
  }

  html = html.replace(/%%MATH_BLOCK_(\d+)%%/g, (_, idx) => {
    const mathCode = mathBlocks[Number(idx)];
    if (!mathCode) return '';
    try {
      const rendered = katexInstance.renderToString(mathCode, { displayMode: true, throwOnError: false });
      return `<div class="katex-display-wrap">${rendered}</div>`;
    } catch (e) {
      return mathCode;
    }
  });

  html = html.replace(/%%MATH_INLINE_(\d+)%%/g, (_, idx) => {
    const mathCode = mathInlines[Number(idx)];
    if (!mathCode) return '';
    try {
      return katexInstance.renderToString(mathCode, { displayMode: false, throwOnError: false });
    } catch (e) {
      return mathCode;
    }
  });

  html = html.replace(/(<table[\s\S]*?<\/table>)/gi, '<div class="table-responsive">$1</div>');
  return html;
}

test('ensureCodeBlockFormatting correctly wraps raw C code', () => {
  const rawQ = 'What will be the output of the following C code snippet?\n#include <stdio.h>\nint main() {\nint a = 10;\nint b = 3;\nint result = a / b + (a % b);\nprintf("%d", result);\nreturn 0;\n}';
  const formatted = ensureCodeBlockFormatting(rawQ);

  assert.match(formatted, /What will be the output/);
  assert.match(formatted, /```c\n#include <stdio\.h>/);
  assert.match(formatted, /return 0;\n}/);
});

test('ensureCodeBlockFormatting handles micro-operations and cleans broken words', () => {
  const rawQ = 'Consider the following sequence of micro -\noperations.\nMBR ← PC\nMAR ← X\nPC ← Y\nMemory ← MBR\nWhich one of the following is a possible operation?';
  const formatted = ensureCodeBlockFormatting(rawQ);

  assert.match(formatted, /micro-operations/);
  assert.match(formatted, /```c\nMBR ← PC/);
  assert.match(formatted, /Memory ← MBR\n```/);
});

test('ensureCodeBlockFormatting handles C loops and cleans cache block size', () => {
  const rawQ = 'A CPU has a 32KB direct mapped cache with 128 byte - block size. Consider the following two C code segments, P1 and P2.\nP1:\nfor(i=0; i<512; i++)\n{\nfor (j=0;j<512; j++)\n}\nx +=A[i][j]\n}\nThe value of the ratio M1 : M2 is ______ .';
  const formatted = ensureCodeBlockFormatting(rawQ);

  assert.match(formatted, /128-byte block/);
  assert.match(formatted, /```c\nP1:\nfor\(i=0;/);
});

test('renderRichContent with breaks:false allows smooth paragraph justification without br tags', () => {
  const text = 'Two tiles are missing in Panel I. Which one of the\noptions in Panel II is the appropriate choice for the\nmissing tiles?';
  const rendered = renderRichContent(text);
  assert.doesNotMatch(rendered, /<br\s*\/?>/i);
  assert.match(rendered, /<p>Two tiles are missing in Panel I\./);
  assert.match(rendered, /missing tiles\?<\/p>/);
});

test('renderInlineContent renders option text inline without p tags and strips duplicate letters', () => {
  assert.strictEqual(renderInlineContent('3'), '3');
  assert.strictEqual(renderInlineContent('A. 4'), '4');
  assert.strictEqual(renderInlineContent('(B) 10'), '10');

  const mathOpt = renderInlineContent('$O(n \\log n)$');
  assert.doesNotMatch(mathOpt, /<p>/);
  assert.match(mathOpt, /class="katex"/);
});

test('renderRichContent transforms complex prompt with LaTeX and GFM table', () => {
  const sample = `
- **Frames Available**: If frames are not full, load $p_i$ into an empty frame.
### Example Reference
Let the reference string $R = [7, 0, 1, 2, 0, 3, 0, 4, 2]$ and $M = 3$.

| Reference | Fault? |
|:---:|:---:|
| 7 | Yes |
`;

  const output = renderRichContent(sample);
  assert.match(output, /class="katex"/);
  assert.match(output, /<div class="table-responsive"><table/);
  assert.match(output, /<th align="center">Reference<\/th>/);
});

test('ensureCodeBlockFormatting does not wrap mathematical derivation or algebra into C code block', () => {
  const mathSnippet = `Step 2: Set the Derivative to Zero
For a local minimum or maximum, the first derivative must be zero:
4 − 100q2 = 0
4 = 100q2
4q2 = 100
q2 = 25
q = √25 = 5
(Note: We ignore q = -5 because production quantity cannot be negative.)`;
  const output = ensureCodeBlockFormatting(mathSnippet);
  assert.doesNotMatch(output, /```c/);
  assert.match(output, /4 − 100q2 = 0/);
});
