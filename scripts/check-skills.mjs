#!/usr/bin/env node

import { access, readdir, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const defaultRepositoryRoot = resolve(scriptDirectory, "..");

const EXPECTED_SKILLS = [
  "mindwp-site",
  "mindwp-plan-page",
  "mindwp-design-page",
  "mindwp-finish-page",
];

const REQUIRED_MARKERS = {
  "mindwp-site": ["mindwp-plan-page", "mindwp-design-page", "mindwp-finish-page"],
  "mindwp-plan-page": [
    "Plan meaning and content architecture only",
    "Do not propose visual territories",
    "If a build prompt names an already approved page, do not re-plan it",
    "semantic landmark",
    "essential public meaning and truth boundary",
    "Supporting payloads are a reservoir of meaning and truth",
    "Neighbour distinctions protect rhetorical progression",
  ],
  "mindwp-design-page": [
    "Begin from meaning and stable foundations",
    "Do not inspect complete Homepage or Local SEO Authority renders before fresh composition exists",
    "Homepage and Local SEO Authority",
    "semantic landmark",
    "spatial construction or visual act",
    "DOM or evidence unit",
    "supports semantic implementation, testing or capture; it does not define the visible composition by default",
    "three to five substantial spatial constructions before designing individual semantic sections",
    "Use the count as a private forcing function for substantial page-level composition, not as a reusable layout pattern, public band count or semantic-section quota",
    "## Challenge the page-level composition",
    "isolated mini-sections hidden inside a shared background",
    "Block the composition before final copy",
    "minimal heading labels and only provisional supporting language",
    "final body copy, full payload lists or payload-derived components generate the geometry",
    "Build the complete desktop page",
    "Synthesize or omit supporting payload detail publicly",
    "Keep every essential communication job, claim, truth boundary, distinction and CTA publicly understandable",
    "reference-blind composition critique",
    "Do not provide complete accepted-page screenshots, section crops, the private composition brief",
    "entry → copy → payload renderer",
    "Shared backgrounds, unequal cards, documents, photography or reduced colour alternation",
    "--desktop --sections",
    "independent read-only visual critic",
    "Only after the reference-blind composition review passes",
    "discard and recompose",
    "Do not use a fixed iteration count",
    "Present only the first threshold-passing",
    "User-visible drafts have two default decisions",
    "**Approve:** record visual approval and move to `mindwp-finish-page`.",
    "**Reject:** record the draft as rejected and excluded from creative evidence. Do not carry its presentation into a replacement.",
    "Targeted refinement happens only when the user explicitly asks",
  ],
  "mindwp-finish-page": [
    "Finish production",
    "Audit-only",
    "responsive",
    "Final audit",
    "must not flatten a distinctive page into the shared baseline",
  ],
};

const DESIGN_SEQUENCE_MARKERS = [
  "## Begin from meaning and stable foundations",
  "## Compose three to five substantial spatial constructions",
  "## Challenge the page-level composition",
  "## Block the composition before final copy",
  "## Build the complete desktop page",
  "## Run the reference-blind composition critique",
  "## Calibrate with accepted MindWP references",
];

const RETIRED_SKILL_REFERENCES = [
  "mindwp-build-page",
  "mindwp-css",
  "mindwp-rendered-review",
  "mindwp-claude-design-handoff",
];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function frontmatterValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^\\s*${key}:\\s*(.+)$`, "m"));
  return match?.[1]?.trim().replace(/^['"]|['"]$/g, "");
}

export async function validateSkills(repositoryRoot = defaultRepositoryRoot) {
  const issues = [];
  const skillsRoot = resolve(repositoryRoot, ".agents/skills");
  const entries = (await readdir(skillsRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort();

  const expected = [...EXPECTED_SKILLS].sort();
  if (JSON.stringify(entries) !== JSON.stringify(expected)) {
    issues.push(
      `Expected exactly ${EXPECTED_SKILLS.length} focused skills: ${EXPECTED_SKILLS.join(", ")}.`,
    );
  }

  for (const skillName of EXPECTED_SKILLS) {
    const skillPath = resolve(skillsRoot, skillName, "SKILL.md");
    const metadataPath = resolve(skillsRoot, skillName, "agents/openai.yaml");

    if (!(await exists(skillPath))) {
      issues.push(`${skillName}: missing SKILL.md.`);
      continue;
    }
    if (!(await exists(metadataPath))) {
      issues.push(`${skillName}: missing agents/openai.yaml.`);
      continue;
    }

    const skill = await readFile(skillPath, "utf8");
    const match = skill.match(/^---\n([\s\S]*?)\n---\n/);
    if (!match) {
      issues.push(`${skillName}: invalid YAML frontmatter boundary.`);
      continue;
    }

    const name = frontmatterValue(match[1], "name");
    const description = frontmatterValue(match[1], "description");
    if (name !== skillName)
      issues.push(`${skillName}: frontmatter name is '${name ?? "missing"}'.`);
    if (!description || description.includes("TODO")) {
      issues.push(`${skillName}: description is missing or unfinished.`);
    }
    if (/\bTODO\b/.test(skill)) issues.push(`${skillName}: contains an unfinished TODO.`);
    if (skill.split("\n").length > 500) issues.push(`${skillName}: SKILL.md exceeds 500 lines.`);

    const metadata = await readFile(metadataPath, "utf8");
    const defaultPrompt = frontmatterValue(metadata, "default_prompt");
    const shortDescription = frontmatterValue(metadata, "short_description");
    if (!defaultPrompt?.includes(`$${skillName}`)) {
      issues.push(`${skillName}: default_prompt must mention $${skillName}.`);
    }
    if (
      skillName === "mindwp-design-page" &&
      !defaultPrompt?.includes("three to five private spatial constructions")
    ) {
      issues.push("mindwp-design-page: default_prompt must begin from page-level constructions.");
    }
    if (
      skillName === "mindwp-design-page" &&
      !defaultPrompt?.includes("reference-blind composition critique")
    ) {
      issues.push("mindwp-design-page: default_prompt must protect reference-blind critique.");
    }
    if (
      skillName === "mindwp-design-page" &&
      /inspect the approved reference renders/i.test(defaultPrompt ?? "")
    ) {
      issues.push(
        "mindwp-design-page: default_prompt must not inspect accepted full-page references before composition.",
      );
    }
    if (
      skillName === "mindwp-design-page" &&
      /refine (?:it )?once|refine it from a 1640px render/i.test(defaultPrompt ?? "")
    ) {
      issues.push(
        "mindwp-design-page: default_prompt must not reduce the quality gate to one refinement.",
      );
    }
    if (!shortDescription || shortDescription.length < 25 || shortDescription.length > 64) {
      issues.push(`${skillName}: short_description must be 25-64 characters.`);
    }
    if (/allow_implicit_invocation:\s*false/.test(metadata)) {
      issues.push(`${skillName}: consolidated page skills must allow implicit routing.`);
    }

    for (const marker of REQUIRED_MARKERS[skillName] ?? []) {
      if (!skill.includes(marker)) {
        issues.push(`${skillName}: missing workflow marker '${marker}'.`);
      }
    }

    if (skillName === "mindwp-design-page") {
      const positions = DESIGN_SEQUENCE_MARKERS.map((marker) => skill.indexOf(marker));
      if (
        positions.some((position) => position < 0) ||
        positions.some((position, index) => index > 0 && position <= positions[index - 1])
      ) {
        issues.push(
          "mindwp-design-page: meaning, construction, challenge, blocking, build, blind critique, and late calibration must remain in order.",
        );
      }
    }

    for (const retiredName of RETIRED_SKILL_REFERENCES) {
      if (skill.includes(retiredName) || metadata.includes(retiredName)) {
        issues.push(`${skillName}: still references retired skill '${retiredName}'.`);
      }
    }
  }

  const claudeSkillsRoot = resolve(repositoryRoot, ".claude/skills");
  if (await exists(claudeSkillsRoot)) {
    const duplicateShims = (await readdir(claudeSkillsRoot, { withFileTypes: true }))
      .filter((entry) => entry.isDirectory() && entry.name.startsWith("mindwp-"))
      .map((entry) => entry.name)
      .sort();

    if (duplicateShims.length > 0) {
      issues.push(
        `Remove duplicate Claude skill shims; repository skills live only in .agents/skills: ${duplicateShims.join(", ")}.`,
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

  console.log(`Validated ${EXPECTED_SKILLS.length} focused MindWP skills.`);
}

const isMain = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;

if (isMain) {
  await runSkillValidation();
}
