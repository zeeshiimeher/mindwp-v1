#!/usr/bin/env node

import { access, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const defaultRepositoryRoot = resolve(scriptDirectory, "..");

const PROFILE_SOURCES = {
  planning: ["docs/STRATEGY.md"],
  design: ["docs/DESIGN.md", "docs/ENGINEERING.md", ".agents/skills/mindwp-design-page/SKILL.md"],
  finish: ["docs/STRATEGY.md", "docs/DESIGN.md", "docs/ENGINEERING.md"],
  audit: ["docs/STRATEGY.md", "docs/DESIGN.md", "docs/ENGINEERING.md"],
};

function isOutsideRepository(outputPath, repositoryRoot) {
  const relation = relative(resolve(repositoryRoot), resolve(outputPath));
  return relation === ".." || relation.startsWith(`..${sep}`);
}

function assertPageId(pageId) {
  if (!/^[a-z0-9-]+$/.test(pageId ?? "")) {
    throw new Error("Page id must use lowercase letters, digits, and hyphens only.");
  }
}

function normalizeSessionValue(value) {
  return value?.replace(/\s+/g, " ").trim();
}

function frontmatterValue(document, key) {
  const frontmatter = document.match(/^---\n([\s\S]*?)\n---(?:\n|$)/)?.[1];
  const match = frontmatter?.match(new RegExp(`^\\s*${key}:\\s*(.+)$`, "m"));
  return match?.[1]?.trim().replace(/^['"]|['"]$/g, "");
}

function normalizeLedgerCell(value) {
  return value.replaceAll("**", "").replaceAll("`", "").trim();
}

export function pageRecordHasApprovedMeaning(pageRecord, ledger) {
  const route = frontmatterValue(pageRecord, "route");
  if (!route) return false;

  return ledger.split("\n").some((line) => {
    if (!line.trim().startsWith("|")) return false;

    const cells = line
      .split("|")
      .slice(1, -1)
      .map((cell) => normalizeLedgerCell(cell));

    return cells[1] === route && cells[2]?.toLowerCase() === "approved";
  });
}

export function parseContextArguments(args, { repositoryRoot = defaultRepositoryRoot } = {}) {
  let pageId;
  let profile = "planning";
  let outputPath;
  let mode;
  let scope;
  let task;

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--") {
      continue;
    } else if (["--profile", "--output", "--mode", "--scope", "--task"].includes(arg)) {
      const value = args[index + 1];
      if (!value || value.startsWith("--")) throw new Error(`Missing value for ${arg}.`);
      if (arg === "--profile") profile = value;
      if (arg === "--output") outputPath = resolve(value);
      if (arg === "--mode") mode = value;
      if (arg === "--scope") scope = value;
      if (arg === "--task") task = value;
      index += 1;
    } else if (arg.startsWith("--")) {
      throw new Error(`Unknown context option: ${arg}`);
    } else if (!pageId) {
      pageId = arg;
    } else {
      throw new Error(
        "Usage: context:page <page-id> [--profile <name>] [--mode <mode>] [--scope <scope>] [--task <task>] [--output <path>]",
      );
    }
  }

  assertPageId(pageId);
  if (!(profile in PROFILE_SOURCES)) {
    throw new Error(
      `Unknown profile '${profile}'. Use ${Object.keys(PROFILE_SOURCES).join(", ")}.`,
    );
  }
  if (outputPath && !isOutsideRepository(outputPath, repositoryRoot)) {
    throw new Error(`Context output must stay outside the repository: ${outputPath}`);
  }

  return {
    mode,
    outputPath,
    pageId,
    profile,
    repositoryRoot: resolve(repositoryRoot),
    scope,
    task,
  };
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export async function buildPageContext({
  mode,
  pageId,
  profile,
  repositoryRoot = defaultRepositoryRoot,
  scope,
  task,
}) {
  assertPageId(pageId);
  if (!(profile in PROFILE_SOURCES)) throw new Error(`Unknown context profile: ${profile}`);

  const pagePath = `docs/pages/${pageId}/page.md`;
  const hasPageRecord = await exists(resolve(repositoryRoot, pagePath));
  const pageRecord = hasPageRecord
    ? await readFile(resolve(repositoryRoot, pagePath), "utf8")
    : undefined;
  const ledger = await readFile(resolve(repositoryRoot, "docs/PAGE-LEDGER.md"), "utf8");
  const hasApprovedPageRecord =
    pageRecord !== undefined && pageRecordHasApprovedMeaning(pageRecord, ledger);
  const sources = ["docs/PAGE-WORKFLOW.md", "docs/PAGE-LEDGER.md"];

  if (hasPageRecord) sources.push(pagePath);
  if (profile === "design" && !hasApprovedPageRecord) sources.push("docs/STRATEGY.md");
  sources.push(...PROFILE_SOURCES[profile]);

  const sections = [];
  for (const source of sources) {
    const content = await readFile(resolve(repositoryRoot, source), "utf8");
    sections.push(`## Source: ${source}\n\n${content.trim()}\n`);
  }

  const sessionBoundary = [
    ["Mode", mode],
    ["Scope", scope],
    ["Exact task", task],
  ]
    .map(([label, value]) => [label, normalizeSessionValue(value)])
    .filter(([, value]) => value);

  const header = [`# MindWP page context: ${pageId}`, "", `Profile: ${profile}`, ""];
  if (sessionBoundary.length) {
    header.push(
      "## Session boundary (non-authoritative)",
      "",
      ...sessionBoundary.map(([label, value]) => `- ${label}: ${value}`),
      "",
      "These values describe the current handoff only. Durable state remains in the ledger and its owning authorities; an active page record may preserve page-specific meaning or a compact boundary.",
      "This packet supplies evidence; it does not replace the private design synthesis or phase-appropriate evidence review required by the active phase.",
      "",
    );
  }

  return [
    ...header,
    "This is a restartable, non-authoritative context packet. Treat the ledger as state authority and each standing document only as authority for its own subject. A page record appears when present; verify implemented reality from current source and renders.",
    "",
    ...sections,
  ].join("\n");
}

export async function runContextExport(args) {
  const options = parseContextArguments(args);
  const context = await buildPageContext(options);

  if (options.outputPath) {
    await writeFile(options.outputPath, `${context.trimEnd()}\n`);
    console.log(options.outputPath);
  } else {
    process.stdout.write(`${context.trimEnd()}\n`);
  }
}

const isMain = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;

if (isMain) {
  await runContextExport(process.argv.slice(2));
}
