#!/usr/bin/env node
/**
 * Generates docs/README.md (AIMA home) and docs/chapters/chapter-NN.md for each chapter,
 * embedding exercise markdown from exercises/chNN/ex_*.md (sorted by number).
 *
 * Usage: node scripts/generate-aima-docs.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DOCS = path.join(ROOT, "docs");
const CHAPTERS_DIR = path.join(DOCS, "chapters");

/** @type {{ num: number, title: string, part: string, partTitle: string }[]} */
const CHAPTERS = [
  { num: 1, title: "Introduction", part: "I", partTitle: "Artificial Intelligence" },
  { num: 2, title: "Intelligent Agents", part: "I", partTitle: "Artificial Intelligence" },
  { num: 3, title: "Solving Problems by Searching", part: "II", partTitle: "Problem-Solving" },
  { num: 4, title: "Search in Complex Environments", part: "II", partTitle: "Problem-Solving" },
  { num: 5, title: "Adversarial Search and Games", part: "II", partTitle: "Problem-Solving" },
  { num: 6, title: "Constraint Satisfaction Problems", part: "II", partTitle: "Problem-Solving" },
  { num: 7, title: "Logical Agents", part: "III", partTitle: "Knowledge, Reasoning, and Planning" },
  { num: 8, title: "First-Order Logic", part: "III", partTitle: "Knowledge, Reasoning, and Planning" },
  { num: 9, title: "Inference in First-Order Logic", part: "III", partTitle: "Knowledge, Reasoning, and Planning" },
  { num: 10, title: "Knowledge Representation", part: "III", partTitle: "Knowledge, Reasoning, and Planning" },
  { num: 11, title: "Automated Planning", part: "III", partTitle: "Knowledge, Reasoning, and Planning" },
  { num: 12, title: "Quantifying Uncertainty", part: "IV", partTitle: "Uncertain Knowledge and Reasoning" },
  { num: 13, title: "Probabilistic Reasoning", part: "IV", partTitle: "Uncertain Knowledge and Reasoning" },
  { num: 14, title: "Probabilistic Reasoning over Time", part: "IV", partTitle: "Uncertain Knowledge and Reasoning" },
  { num: 15, title: "Probabilistic Programming", part: "IV", partTitle: "Uncertain Knowledge and Reasoning" },
  { num: 16, title: "Making Simple Decisions", part: "IV", partTitle: "Uncertain Knowledge and Reasoning" },
  { num: 17, title: "Making Complex Decisions", part: "IV", partTitle: "Uncertain Knowledge and Reasoning" },
  { num: 18, title: "Multiagent Decision Making", part: "IV", partTitle: "Uncertain Knowledge and Reasoning" },
  { num: 19, title: "Learning from Examples", part: "V", partTitle: "Machine Learning" },
  { num: 20, title: "Learning Probabilistic Models", part: "V", partTitle: "Machine Learning" },
  { num: 21, title: "Deep Learning", part: "V", partTitle: "Machine Learning" },
  { num: 22, title: "Reinforcement Learning", part: "V", partTitle: "Machine Learning" },
  { num: 23, title: "Natural Language Processing", part: "VI", partTitle: "Communicating, Perceiving, and Acting" },
  { num: 24, title: "Deep Learning for Natural Language Processing", part: "VI", partTitle: "Communicating, Perceiving, and Acting" },
  { num: 25, title: "Computer Vision", part: "VI", partTitle: "Communicating, Perceiving, and Acting" },
  { num: 26, title: "Robotics", part: "VI", partTitle: "Communicating, Perceiving, and Acting" },
];

function chDir(n) {
  return `ch${String(n).padStart(2, "0")}`;
}

function listExerciseFiles(chNum) {
  const dir = path.join(ROOT, "exercises", chDir(chNum));
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /^ex_\d+\.md$/.test(f))
    .sort((a, b) => {
      const na = parseInt(a.replace(/^ex_|\.md$/g, ""), 10);
      const nb = parseInt(b.replace(/^ex_|\.md$/g, ""), 10);
      return na - nb;
    });
}

function generateChapterPage(meta) {
  const { num, title, part, partTitle } = meta;
  const files = listExerciseFiles(num);
  const relExBase = `../../exercises/${chDir(num)}`;
  const lines = [];
  lines.push(`# Chapter ${num} — ${title}`);
  lines.push("");
  lines.push(`**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part ${part} · ${partTitle}**`);
  lines.push("");
  lines.push(
    `**Work in this repo:** edit the markdown files under [\`exercises/${chDir(num)}/\`](${relExBase}/) (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.`,
  );
  lines.push("");
  lines.push(
    "*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*",
  );
  lines.push("");
  lines.push("[← AIMA home](../README.md)");
  lines.push("");
  lines.push("---");
  lines.push("");

  if (files.length === 0) {
    lines.push("*No exercise files found in this chapter folder.*");
    lines.push("");
    return lines.join("\n");
  }

  for (const fname of files) {
    const full = path.join(ROOT, "exercises", chDir(num), fname);
    const body = fs.readFileSync(full, "utf8").trimEnd();
    lines.push(`<a id="${fname.replace(".md", "")}"></a>`);
    lines.push("");
    lines.push(`[Open or edit \`${fname}\` in the repo](${relExBase}/${fname})`);
    lines.push("");
    lines.push(body);
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  return lines.join("\n");
}

function generateHome() {
  const lines = [];
  lines.push(`# Artificial Intelligence: A Modern Approach`);
  lines.push("");
  lines.push(`Student exercise hub for **Russell & Norvig**, *Artificial Intelligence: A Modern Approach* **(4th ed.)**`);
  lines.push("");
  lines.push("## Official resources");
  lines.push("");
  lines.push("- **Book site:** [aima.cs.berkeley.edu](https://aima.cs.berkeley.edu)");
  lines.push("- **Algorithms (PDF):** [Algorithms from AIMA](https://aima.cs.berkeley.edu/algorithms.pdf)");
  lines.push("- **Figures (PDF):** [Figures from AIMA](https://aima.cs.berkeley.edu/figures.pdf)");
  lines.push("- **Online exercises (companion site):** [aimacode.github.io/aima-exercises](https://aimacode.github.io/aima-exercises/)");
  lines.push("");
  lines.push("## This repository");
  lines.push("");
  lines.push(
    "- **Answer files:** [`exercises/chNN/ex_*.md`](../exercises/) — each file has a question block and an answer block. Fill answers, commit, and push.",
  );
  lines.push(
    "- **Forms UI:** In GitHub Codespaces / VS Code, the **AIMA Exercise Forms** extension (installed by the dev container) can help navigate exercises.",
  );
  lines.push(
    "- **Regenerate these docs:** from the repo root, run `npm run docs:generate` after exercise files change.",
  );
  lines.push("");
  lines.push("## Chapters and exercises");
  lines.push("");
  lines.push("| Ch | Chapter | All exercises on one page |");
  lines.push("|:-:|---|---|");

  for (const c of CHAPTERS) {
    const slug = `chapter-${String(c.num).padStart(2, "0")}.md`;
    lines.push(
      `| ${c.num} | ${c.title} | [Read chapter ${c.num}](chapters/${slug}) |`,
    );
  }

  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("[← Back to repository README](../README.md)");
  lines.push("");
  return lines.join("\n");
}

function main() {
  fs.mkdirSync(CHAPTERS_DIR, { recursive: true });
  for (const meta of CHAPTERS) {
    const slug = `chapter-${String(meta.num).padStart(2, "0")}.md`;
    const out = path.join(CHAPTERS_DIR, slug);
    fs.writeFileSync(out, generateChapterPage(meta), "utf8");
    console.warn("wrote", path.relative(ROOT, out));
  }
  fs.writeFileSync(path.join(DOCS, "README.md"), generateHome(), "utf8");
  console.warn("wrote", path.relative(ROOT, path.join(DOCS, "README.md")));
}

main();
