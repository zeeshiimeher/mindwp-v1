#!/usr/bin/env node

import { access, readdir, readFile, realpath, stat } from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const defaultRepositoryRoot = resolve(scriptDirectory, "..");

const PLACEHOLDER_PATTERN =
  /\b(?:TODO|TBD|FIXME|XXX)\b|\{\{[^}]+\}\}|\[(?:insert|placeholder)\b[^\]]*\]/i;
const REQUIRED_INTERFACE_FIELDS = ["display_name", "short_description", "default_prompt"];
const SKILL_NAME_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function unquote(value) {
  const trimmed = value.trim();
  const quoted = trimmed.match(/^(["'])([\s\S]*)\1$/);
  return quoted ? quoted[2] : trimmed;
}

function parseFlatMapping(source, label, issues, { allowedKeys } = {}) {
  const values = new Map();

  for (const [index, rawLine] of source.split(/\r?\n/).entries()) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const match = rawLine.match(/^([a-zA-Z][\w-]*):\s*(.*)$/);
    if (!match) {
      issues.push(`${label}: invalid mapping at line ${index + 1}.`);
      continue;
    }

    const [, key, rawValue] = match;
    if (values.has(key)) issues.push(`${label}: duplicate '${key}' definition.`);
    if (allowedKeys && !allowedKeys.has(key)) {
      issues.push(`${label}: unsupported frontmatter field '${key}'.`);
    }
    const trimmedValue = rawValue.trim();
    if (
      trimmedValue &&
      (/^[\[\]{|}>]/.test(trimmedValue) ||
        (/^["']/.test(trimmedValue) && !/^(?:"[^"]*"|'[^']*')$/.test(trimmedValue)))
    ) {
      issues.push(`${label}: '${key}' must be a single string scalar.`);
    }
    values.set(key, unquote(rawValue));
  }

  return values;
}

function parseMetadata(source, skillName, issues) {
  const lines = source.split(/\r?\n/);
  const topLevel = new Set();
  const interfaceValues = new Map();
  let section;

  if (lines.some((line) => line.includes("\t"))) {
    issues.push(`${skillName}: agents/openai.yaml must use spaces, not tabs.`);
  }

  for (const [index, rawLine] of lines.entries()) {
    if (!rawLine.trim() || rawLine.trimStart().startsWith("#")) continue;

    const topMatch = rawLine.match(/^([a-zA-Z][\w-]*):\s*(.*)$/);
    if (topMatch) {
      const [, key, trailing] = topMatch;
      if (topLevel.has(key)) {
        issues.push(`${skillName}: agents/openai.yaml duplicates top-level '${key}'.`);
      }
      topLevel.add(key);
      section = key;
      if (trailing.trim()) {
        issues.push(`${skillName}: agents/openai.yaml '${key}' must be a mapping.`);
      }
      continue;
    }

    const nestedMatch = rawLine.match(/^  ([a-zA-Z][\w-]*):\s*(.*)$/);
    if (!nestedMatch) {
      if (!/^\s{4,}-\s|^\s{4,}[a-zA-Z][\w-]*:\s*/.test(rawLine)) {
        issues.push(`${skillName}: invalid agents/openai.yaml structure at line ${index + 1}.`);
      }
      continue;
    }

    if (!section) {
      issues.push(`${skillName}: agents/openai.yaml has a field without a parent mapping.`);
      continue;
    }

    if (section === "interface") {
      const [, key, rawValue] = nestedMatch;
      if (interfaceValues.has(key)) {
        issues.push(`${skillName}: agents/openai.yaml duplicates interface.${key}.`);
      }
      if (!rawValue.trim()) {
        issues.push(`${skillName}: agents/openai.yaml interface.${key} must be a scalar.`);
      } else if (!/^(?:"[^"]*"|'[^']*')$/.test(rawValue.trim())) {
        issues.push(`${skillName}: agents/openai.yaml interface.${key} must be quoted.`);
      }
      interfaceValues.set(key, unquote(rawValue));
    }
  }

  if (!topLevel.has("interface")) {
    issues.push(`${skillName}: agents/openai.yaml is missing the interface mapping.`);
  }

  for (const field of REQUIRED_INTERFACE_FIELDS) {
    if (!interfaceValues.get(field)?.trim()) {
      issues.push(`${skillName}: agents/openai.yaml is missing interface.${field}.`);
    }
  }

  return interfaceValues;
}

function isWithin(path, parent) {
  const relation = relative(parent, path);
  return relation === "" || (!relation.startsWith(`..${sep}`) && relation !== "..");
}

function localMarkdownReferences(source) {
  const references = [];
  const linkPattern = /\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g;

  for (const match of source.matchAll(linkPattern)) {
    const reference = match[1].replace(/^<|>$/g, "").split("#", 1)[0];
    if (
      reference &&
      !reference.startsWith("#") &&
      !/^[a-z][a-z0-9+.-]*:/i.test(reference) &&
      !reference.includes("<") &&
      !reference.includes(">")
    ) {
      references.push(reference);
    }
  }

  return references;
}

async function validateLocalReferences({
  source,
  sourceDirectory,
  repositoryRoot,
  skillName,
  issues,
}) {
  for (const reference of localMarkdownReferences(source)) {
    const target = resolve(sourceDirectory, reference);
    if (!isWithin(target, repositoryRoot)) {
      issues.push(`${skillName}: local reference escapes the repository: '${reference}'.`);
    } else if (!(await exists(target))) {
      issues.push(`${skillName}: unresolved local reference '${reference}'.`);
    } else {
      const [realRepository, realTarget] = await Promise.all([
        realpath(repositoryRoot),
        realpath(target),
      ]);
      if (!isWithin(realTarget, realRepository)) {
        issues.push(
          `${skillName}: local reference resolves outside the repository: '${reference}'.`,
        );
      }
    }
  }
}

function referencedSkills(source) {
  const references = new Set();
  for (const match of source.matchAll(/\$(mindwp-[a-z0-9-]+)\b|`(mindwp-[a-z0-9-]+)`/g)) {
    references.add(match[1] ?? match[2]);
  }
  return references;
}

export async function validateSkills(repositoryRoot = defaultRepositoryRoot) {
  const issues = [];
  const skillsRoot = resolve(repositoryRoot, ".claude/skills");

  if (!(await exists(skillsRoot))) {
    return ["Missing .claude/skills directory."];
  }

  const entries = [];
  for (const entry of await readdir(skillsRoot, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    if (entry.isSymbolicLink()) {
      issues.push(`${entry.name}: skill directories must not be symbolic links.`);
    } else if (entry.isDirectory()) {
      entries.push(entry.name);
    } else {
      issues.push(`${entry.name}: unsupported entry in .claude/skills; expected a directory.`);
    }
  }
  entries.sort();
  const definitions = new Map();
  const skillReferences = new Map();

  for (const skillName of entries) {
    if (!SKILL_NAME_PATTERN.test(skillName)) {
      issues.push(`${skillName}: directory name must use lowercase hyphen-case.`);
    }

    const skillDirectory = resolve(skillsRoot, skillName);
    const skillPath = resolve(skillDirectory, "SKILL.md");
    const metadataPath = resolve(skillDirectory, "agents/openai.yaml");

    if (!(await exists(skillPath))) {
      issues.push(`${skillName}: missing SKILL.md.`);
      continue;
    }
    if (!(await exists(metadataPath))) {
      issues.push(`${skillName}: missing agents/openai.yaml.`);
      continue;
    }

    const skill = await readFile(skillPath, "utf8");
    const frontmatterMatch = skill.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    if (!frontmatterMatch) {
      issues.push(`${skillName}: invalid YAML frontmatter boundary.`);
      continue;
    }

    const frontmatter = parseFlatMapping(frontmatterMatch[1], `${skillName} frontmatter`, issues, {
      allowedKeys: new Set(["name", "description"]),
    });
    const name = frontmatter.get("name");
    const description = frontmatter.get("description");

    if (name !== skillName) {
      issues.push(`${skillName}: frontmatter name is '${name || "missing"}'.`);
    }
    if (name && !SKILL_NAME_PATTERN.test(name)) {
      issues.push(`${skillName}: frontmatter name must use lowercase hyphen-case.`);
    }
    if (!description?.trim()) {
      issues.push(`${skillName}: description is missing or empty.`);
    }
    if (name) {
      const priorDirectory = definitions.get(name);
      if (priorDirectory) {
        issues.push(
          `${skillName}: duplicate skill definition '${name}' also appears in '${priorDirectory}'.`,
        );
      } else {
        definitions.set(name, skillName);
      }
    }

    if (PLACEHOLDER_PATTERN.test(skill)) {
      issues.push(`${skillName}: contains an unfinished placeholder.`);
    }
    skillReferences.set(skillName, referencedSkills(skill));
    if (skill.split(/\r?\n/).length > 500) {
      issues.push(`${skillName}: SKILL.md exceeds 500 lines.`);
    }

    await validateLocalReferences({
      source: skill,
      sourceDirectory: skillDirectory,
      repositoryRoot: resolve(repositoryRoot),
      skillName,
      issues,
    });

    const metadata = await readFile(metadataPath, "utf8");
    const interfaceValues = parseMetadata(metadata, skillName, issues);
    const defaultPrompt = interfaceValues.get("default_prompt");
    const shortDescription = interfaceValues.get("short_description");

    if (defaultPrompt && !defaultPrompt.includes(`$${skillName}`)) {
      issues.push(`${skillName}: interface.default_prompt must mention $${skillName}.`);
    }
    if (shortDescription && (shortDescription.length < 25 || shortDescription.length > 64)) {
      issues.push(`${skillName}: interface.short_description must be 25-64 characters.`);
    }
    if (PLACEHOLDER_PATTERN.test(metadata)) {
      issues.push(`${skillName}: agents/openai.yaml contains an unfinished placeholder.`);
    }

    for (const field of ["icon_small", "icon_large"]) {
      const reference = interfaceValues.get(field);
      if (!reference) continue;

      const target = resolve(skillDirectory, reference);
      if (!isWithin(target, skillDirectory)) {
        issues.push(
          `${skillName}: metadata reference escapes the skill directory: '${reference}'.`,
        );
      } else if (!(await exists(target))) {
        issues.push(`${skillName}: unresolved metadata reference '${reference}'.`);
      } else {
        const [realSkillDirectory, realTarget] = await Promise.all([
          realpath(skillDirectory),
          realpath(target),
        ]);
        if (!isWithin(realTarget, realSkillDirectory)) {
          issues.push(
            `${skillName}: metadata reference resolves outside the skill directory: '${reference}'.`,
          );
        } else if (!(await stat(realTarget)).isFile()) {
          issues.push(`${skillName}: metadata reference must resolve to a file: '${reference}'.`);
        }
      }
    }
  }

  for (const [skillName, references] of skillReferences) {
    for (const reference of references) {
      if (!definitions.has(reference)) {
        issues.push(`${skillName}: unresolved skill reference '${reference}'.`);
      }
    }
  }

  const codexSkillsRoot = resolve(repositoryRoot, ".agents/skills");
  if (await exists(codexSkillsRoot)) {
    const duplicateShims = (await readdir(codexSkillsRoot, { withFileTypes: true }))
      .filter(
        (entry) =>
          (entry.isDirectory() || entry.isSymbolicLink()) && entry.name.startsWith("mindwp-"),
      )
      .map((entry) => entry.name)
      .sort();

    if (duplicateShims.length > 0) {
      issues.push(
        `Duplicate MindWP skill shims exist under .agents/skills: ${duplicateShims.join(", ")}.`,
      );
    }
  }

  return issues;
}

export async function runSkillValidation() {
  const issues = await validateSkills();
  if (issues.length) {
    for (const issue of issues) console.error(`- ${issue}`);
    process.exitCode = 1;
    return;
  }

  const skillsRoot = resolve(defaultRepositoryRoot, ".claude/skills");
  const skillCount = (await readdir(skillsRoot, { withFileTypes: true })).filter(
    (entry) => entry.isDirectory() && !entry.name.startsWith("."),
  ).length;
  console.log(`Validated ${skillCount} structurally sound MindWP skills.`);
}

const isMain = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;

if (isMain) {
  await runSkillValidation();
}
