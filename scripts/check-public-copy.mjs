#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const ROOT = process.cwd();
const INPUTS = ["src/app", "src/components", "src/config/site.ts"];
const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx"]);

const RULES = [
  [/\bgo\s*high\s*level\b/i, "private platform name in public source"],
  [/\bhigh\s*level\b/i, "private platform name in public source"],
  [/\bGHL\b/, "private platform abbreviation in public source"],
  [/\bbook a demo\b/i, "SaaS-style CTA"],
  [/\bstart (a )?free trial\b/i, "SaaS-style CTA"],
  [/\bdominate google\b/i, "ranking hype"],
  [/\bguaranteed (leads|rankings|revenue|bookings|reviews)\b/i, "unsupported guarantee"],
  [/[a-z0-9._%+-]+@gmail\.com\b/i, "personal email address in public source"],
];

function stripComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/(^|[^:])\/\/[^\n]*/g, "$1 ");
}

function collect(path, files = []) {
  const absolute = join(ROOT, path);
  if (!existsSync(absolute)) return files;

  const stat = statSync(absolute);
  if (stat.isFile()) {
    if (EXTENSIONS.has(extname(absolute))) files.push(absolute);
    return files;
  }

  for (const name of readdirSync(absolute)) {
    collect(join(path, name), files);
  }
  return files;
}

let violations = 0;
const files = INPUTS.flatMap((input) => collect(input));

for (const file of files) {
  const lines = stripComments(readFileSync(file, "utf8")).split("\n");
  lines.forEach((line, index) => {
    for (const [pattern, reason] of RULES) {
      if (!pattern.test(line)) continue;
      console.error(`✗ ${relative(ROOT, file)}:${index + 1} — ${reason}`);
      violations += 1;
    }
  });
}

if (violations) {
  console.error(`\ncheck:copy failed — ${violations} public-copy issue(s).`);
  process.exit(1);
}

console.log(`check:copy passed — ${files.length} public source files scanned.`);
