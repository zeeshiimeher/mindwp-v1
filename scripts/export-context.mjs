#!/usr/bin/env node

import { randomUUID } from "node:crypto";
import { constants } from "node:fs";
import { lstat, open, readFile, realpath, rename, unlink } from "node:fs/promises";
import { basename, dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const defaultRepositoryRoot = resolve(scriptDirectory, "..");

const ORIENTATION_SOURCES = [
  "docs/README.md",
  "docs/FOUNDATION.md",
  "docs/STRATEGY.md",
  "docs/WRITING.md",
  "docs/PAGE-PLANNING.md",
  "docs/DESIGN.md",
];

const FOCUSED_BASE_SOURCES = ["docs/README.md"];

const SKILL_SOURCES = new Map([
  ["mindwp-design-build", ".agents/skills/mindwp-design-build/SKILL.md"],
  ["mindwp-frontend-quality", ".agents/skills/mindwp-frontend-quality/SKILL.md"],
]);

function normalizeTask(value) {
  return value?.replace(/\s+/g, " ").trim();
}

function requireValue(args, index, option) {
  const value = args[index + 1];
  if (!value || value.startsWith("--")) throw new Error(`Missing value for ${option}.`);
  return value;
}

export function parseContextArguments(args, { repositoryRoot = defaultRepositoryRoot } = {}) {
  let profile = "orientation";
  let profileSeen = false;
  let pagePlan;
  let repository = false;
  let foundation = false;
  let strategy = false;
  let writing = false;
  let pagePlanning = false;
  let design = false;
  let engineering = false;
  let task;
  let outputPath;
  let overwrite = false;
  const requestedSkills = [];

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === "--") continue;

    if (!argument.startsWith("--")) {
      if (profileSeen) throw new Error(`Unexpected positional argument '${argument}'.`);
      profile = argument;
      profileSeen = true;
      continue;
    }

    if (argument === "--page-plan") {
      pagePlan = requireValue(args, index, argument);
      index += 1;
    } else if (argument === "--skill") {
      requestedSkills.push(requireValue(args, index, argument));
      index += 1;
    } else if (argument === "--task") {
      task = requireValue(args, index, argument);
      index += 1;
    } else if (argument === "--output") {
      outputPath = resolve(requireValue(args, index, argument));
      index += 1;
    } else if (argument === "--repository") {
      repository = true;
    } else if (argument === "--foundation") {
      foundation = true;
    } else if (argument === "--strategy") {
      strategy = true;
    } else if (argument === "--writing") {
      writing = true;
    } else if (argument === "--page-planning") {
      pagePlanning = true;
    } else if (argument === "--design") {
      design = true;
    } else if (argument === "--engineering") {
      engineering = true;
    } else if (argument === "--overwrite") {
      overwrite = true;
    } else {
      throw new Error(`Unknown context option: ${argument}`);
    }
  }

  if (!new Set(["orientation", "focused"]).has(profile)) {
    throw new Error(`Unknown context profile '${profile}'. Use orientation or focused.`);
  }
  if (overwrite && !outputPath) throw new Error("--overwrite requires --output.");

  const unknownSkill = requestedSkills.find((skill) => !SKILL_SOURCES.has(skill));
  if (unknownSkill) {
    throw new Error(
      `Unknown execution skill '${unknownSkill}'. Use ${[...SKILL_SOURCES.keys()].join(" or ")}.`,
    );
  }

  if (profile === "orientation") {
    const focusedOptions = [
      pagePlan && "--page-plan",
      repository && "--repository",
      foundation && "--foundation",
      strategy && "--strategy",
      writing && "--writing",
      pagePlanning && "--page-planning",
      design && "--design",
      requestedSkills.length && "--skill",
    ].filter(Boolean);
    if (focusedOptions.length) {
      throw new Error(`${focusedOptions.join(", ")} may be used only with the focused profile.`);
    }
  }

  const skills = [...SKILL_SOURCES.keys()].filter((skill) => requestedSkills.includes(skill));

  return {
    design,
    engineering,
    foundation,
    outputPath,
    overwrite,
    pagePlanning,
    pagePlanPath: pagePlan ? resolve(pagePlan) : undefined,
    profile,
    repository,
    repositoryRoot: resolve(repositoryRoot),
    skills,
    strategy,
    task: normalizeTask(task),
    writing,
  };
}

function canonicalSource(path) {
  return { absolutePath: undefined, label: path, path };
}

export function contextSourceList(options) {
  if (options.profile === "orientation") {
    const sources = ORIENTATION_SOURCES.map(canonicalSource);
    if (options.engineering) sources.push(canonicalSource("docs/ENGINEERING.md"));
    return sources;
  }

  const sources = FOCUSED_BASE_SOURCES.map(canonicalSource);
  if (options.repository) sources.push(canonicalSource("AGENTS.md"));
  if (options.foundation) sources.push(canonicalSource("docs/FOUNDATION.md"));
  if (options.strategy) sources.push(canonicalSource("docs/STRATEGY.md"));
  if (options.writing) sources.push(canonicalSource("docs/WRITING.md"));
  if (options.pagePlanning) sources.push(canonicalSource("docs/PAGE-PLANNING.md"));
  if (options.pagePlanPath) {
    sources.push({
      absolutePath: options.pagePlanPath,
      label: "supplied page plan",
    });
  }
  if (options.design) sources.push(canonicalSource("docs/DESIGN.md"));
  if (options.engineering) sources.push(canonicalSource("docs/ENGINEERING.md"));
  for (const skill of options.skills) sources.push(canonicalSource(SKILL_SOURCES.get(skill)));
  return sources;
}

async function readContextSource(source, repositoryRoot) {
  const path = source.absolutePath ?? resolve(repositoryRoot, source.path);
  try {
    return await readFile(path, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new Error(`Missing requested context source: ${source.label}`);
    }
    throw error;
  }
}

export async function buildContext(options, { generatedAt = new Date() } = {}) {
  const sources = contextSourceList(options);
  const sections = [];

  for (const source of sources) {
    const body = await readContextSource(source, options.repositoryRoot);
    sections.push(`## Source: ${source.label}\n\n${body}${body.endsWith("\n") ? "" : "\n"}`);
  }

  const header = [
    "# DERIVED MINDWP CONTEXT — NON-AUTHORITATIVE",
    "",
    "This export contains complete canonical source bodies for portability. It does not replace those sources, infer project state, or create new doctrine.",
    "",
    `Profile: ${options.profile}`,
    `Generated: ${generatedAt.toISOString()}`,
  ];

  if (options.task) {
    header.push("", "## Task boundary (non-authoritative)", "", options.task);
  }

  return `${header.join("\n")}\n\n${sections.join("\n")}\n`;
}

function isWithin(path, parent) {
  const relation = relative(parent, path);
  return relation === "" || (!relation.startsWith(`..${sep}`) && relation !== "..");
}

async function writeExternalFile({ content, outputPath, overwrite, repositoryRoot }) {
  const resolvedRepository = resolve(repositoryRoot);
  const resolvedOutput = resolve(outputPath);
  if (isWithin(resolvedOutput, resolvedRepository)) {
    throw new Error(`Context output must stay outside the repository: ${resolvedOutput}`);
  }

  let realRepository;
  let realParent;
  try {
    [realRepository, realParent] = await Promise.all([
      realpath(resolvedRepository),
      realpath(dirname(resolvedOutput)),
    ]);
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new Error(`Context output parent must already exist: ${dirname(resolvedOutput)}`);
    }
    throw error;
  }

  if (isWithin(realParent, realRepository)) {
    throw new Error(`Context output must stay outside the repository: ${resolvedOutput}`);
  }

  let outputStat;
  try {
    outputStat = await lstat(resolvedOutput);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }

  if (outputStat?.isSymbolicLink()) {
    throw new Error(`Refusing to write context through a symbolic link: ${resolvedOutput}`);
  }
  if (outputStat && !outputStat.isFile()) {
    throw new Error(`Context output must be a regular file: ${resolvedOutput}`);
  }
  if (outputStat && !overwrite) {
    throw new Error(
      `Context output already exists; pass --overwrite to replace it: ${resolvedOutput}`,
    );
  }

  if (!overwrite) {
    const handle = await open(
      resolvedOutput,
      constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW,
      0o600,
    );
    try {
      await handle.writeFile(content, "utf8");
    } finally {
      await handle.close();
    }
    return;
  }

  const temporaryPath = resolve(
    dirname(resolvedOutput),
    `.${basename(resolvedOutput)}.${process.pid}.${randomUUID()}.tmp`,
  );
  let temporaryCreated = false;
  try {
    const handle = await open(
      temporaryPath,
      constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW,
      0o600,
    );
    temporaryCreated = true;
    try {
      await handle.writeFile(content, "utf8");
      await handle.sync();
    } finally {
      await handle.close();
    }
    await rename(temporaryPath, resolvedOutput);
    temporaryCreated = false;
  } finally {
    if (temporaryCreated) await unlink(temporaryPath).catch(() => {});
  }
}

export async function runContextExport(
  args,
  { repositoryRoot = defaultRepositoryRoot, stdout = process.stdout, generatedAt } = {},
) {
  const options = parseContextArguments(args, { repositoryRoot });
  const context = await buildContext(options, { generatedAt: generatedAt ?? new Date() });

  if (options.outputPath) {
    await writeExternalFile({
      content: context,
      outputPath: options.outputPath,
      overwrite: options.overwrite,
      repositoryRoot: options.repositoryRoot,
    });
    stdout.write(`${options.outputPath}\n`);
  } else {
    stdout.write(context);
  }

  return { context, options };
}

const isMain = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;

if (isMain) {
  try {
    await runContextExport(process.argv.slice(2));
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
