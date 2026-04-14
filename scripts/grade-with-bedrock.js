#!/usr/bin/env node
/**
 * Grade exercise answers using AWS Bedrock (Claude).
 * Reads .md files, extracts <!-- answer --> content, sends to Bedrock with rubric; exits 0 if all pass, 1 otherwise.
 *
 * Usage: node scripts/grade-with-bedrock.js [path1 path2 ...]
 * Example: node scripts/grade-with-bedrock.js exercises/ch01/ex_1.md exercises/ch01/ex_2.md
 *
 * Requires: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION (or .env).
 * Optional: BEDROCK_MODEL_ID (default anthropic.claude-3-haiku-20240307-v1:0)
 */
const fs = require('fs');
const path = require('path');
const { BedrockRuntimeClient, InvokeModelCommand } = require('@aws-sdk/client-bedrock-runtime');

const MODEL_ID = process.env.BEDROCK_MODEL_ID || 'anthropic.claude-3-haiku-20240307-v1:0';

function loadEnv() {
  const envPath = path.join(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    for (const line of content.split('\n')) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
      if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
    }
  }
}

function parseMd(pathToFile) {
  const content = fs.readFileSync(pathToFile, 'utf8');
  const qMatch = content.match(/<!-- question -->\s*([\s\S]*?)<!-- \/question -->/);
  const aMatch = content.match(/<!-- answer -->\s*([\s\S]*?)<!-- \/answer -->/);
  return {
    question: qMatch ? qMatch[1].trim() : '',
    answer: aMatch ? aMatch[1].trim() : '',
  };
}

const DEFAULT_RUBRIC = 'Pass if the answer is substantive, on-topic, and addresses the question. Reply with exactly one word: PASS or FAIL.';

async function gradeOne(client, filePath) {
  const absPath = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(absPath)) {
    console.error('File not found:', filePath);
    return false;
  }
  const { question, answer } = parseMd(absPath);
  if (!answer || !answer.replace(/\s/g, '').length) {
    console.error('No answer in', filePath);
    return false;
  }
  const prompt = `You are grading a student's written answer to an exercise.

Question:
${question}

Rubric: ${DEFAULT_RUBRIC}

Student's answer:
${answer}

Your verdict (exactly PASS or FAIL):`;

  const body = {
    anthropic_version: 'bedrock-2023-05-31',
    max_tokens: 10,
    messages: [{ role: 'user', content: prompt }],
  };
  const response = await client.send(
    new InvokeModelCommand({
      modelId: MODEL_ID,
      contentType: 'application/json',
      accept: 'application/json',
      body: JSON.stringify(body),
    })
  );
  const out = JSON.parse(new TextDecoder().decode(response.body));
  const text = out.content?.[0]?.text?.trim().toUpperCase() || '';
  const pass = text.startsWith('PASS');
  console.log(filePath, pass ? 'PASS' : 'FAIL', text.slice(0, 50));
  return pass;
}

async function main() {
  loadEnv();
  const files = process.argv.slice(2).filter(Boolean);
  if (files.length === 0) {
    console.error('Usage: node grade-with-bedrock.js <path1> [path2 ...]');
    process.exit(2);
  }
  const region = process.env.AWS_REGION || 'us-east-1';
  const client = new BedrockRuntimeClient({ region });
  let allPass = true;
  for (const f of files) {
    try {
      const pass = await gradeOne(client, f);
      if (!pass) allPass = false;
    } catch (err) {
      console.error(f, 'Error:', err.message);
      allPass = false;
    }
  }
  process.exit(allPass ? 0 : 1);
}

main();
