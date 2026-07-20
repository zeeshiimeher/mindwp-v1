import assert from "node:assert/strict";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import { validateSkills } from "../../scripts/check-skills.mjs";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

async function withSkillFixture(run) {
  const fixtureRoot = await mkdtemp(join(tmpdir(), "mindwp-skill-check-"));

  try {
    await cp(resolve(repositoryRoot, ".agents"), resolve(fixtureRoot, ".agents"), {
      recursive: true,
    });
    await run(fixtureRoot);
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
}

test("the four consolidated MindWP skills are structurally valid", async () => {
  const issues = await validateSkills(repositoryRoot);
  assert.deepEqual(issues, []);
});

test("skill validation protects routing markers, retired names, and implicit use", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    const routerPath = resolve(fixtureRoot, ".agents/skills/mindwp-site/SKILL.md");
    const router = await readFile(routerPath, "utf8");
    await writeFile(routerPath, router.replaceAll("mindwp-design-page", "missing-design-skill"));

    const issues = await validateSkills(fixtureRoot);
    assert.ok(
      issues.some((issue) => issue.includes("missing workflow marker 'mindwp-design-page'")),
    );
  });

  await withSkillFixture(async (fixtureRoot) => {
    const designPath = resolve(fixtureRoot, ".agents/skills/mindwp-design-page/SKILL.md");
    const design = await readFile(designPath, "utf8");
    await writeFile(designPath, `${design}\nRetired: mindwp-build-page\n`);

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("retired skill 'mindwp-build-page'")));
  });

  await withSkillFixture(async (fixtureRoot) => {
    const planPath = resolve(fixtureRoot, ".agents/skills/mindwp-plan-page/SKILL.md");
    const plan = await readFile(planPath, "utf8");
    await writeFile(
      planPath,
      plan
        .replaceAll("semantic landmark", "visual section")
        .replaceAll("essential public meaning and truth boundary", "combined payload field"),
    );

    const issues = await validateSkills(fixtureRoot);
    assert.ok(
      issues.some((issue) => issue.includes("missing workflow marker 'semantic landmark'")),
    );
    assert.ok(
      issues.some((issue) =>
        issue.includes("missing workflow marker 'essential public meaning and truth boundary'"),
      ),
    );
  });

  await withSkillFixture(async (fixtureRoot) => {
    const metadataPath = resolve(
      fixtureRoot,
      ".agents/skills/mindwp-finish-page/agents/openai.yaml",
    );
    const metadata = await readFile(metadataPath, "utf8");
    await writeFile(metadataPath, `${metadata}\npolicy:\n  allow_implicit_invocation: false\n`);

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("must allow implicit routing")));
  });
});

test("design skill validation protects the complete pre-approval quality gate", async () => {
  const protectedMarkers = [
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
    "Synthesize or omit supporting payload detail publicly",
    "Keep every essential communication job, claim, truth boundary, distinction and CTA publicly understandable",
    "reference-blind composition critique",
    "Do not provide complete accepted-page screenshots, section crops, the private composition brief",
    "entry → copy → payload renderer",
    "Shared backgrounds, unequal cards, documents, photography or reduced colour alternation",
    "independent read-only visual critic",
    "Only after the reference-blind composition review passes",
    "discard and recompose",
    "Do not use a fixed iteration count",
    "**Approve:** record visual approval and move to `mindwp-finish-page`.",
    "**Reject:** record the draft as rejected and excluded from creative evidence. Do not carry its presentation into a replacement.",
    "Targeted refinement happens only when the user explicitly asks",
  ];

  for (const marker of protectedMarkers) {
    await withSkillFixture(async (fixtureRoot) => {
      const designPath = resolve(fixtureRoot, ".agents/skills/mindwp-design-page/SKILL.md");
      const design = await readFile(designPath, "utf8");
      assert.ok(design.includes(marker), `Fixture is missing protected marker '${marker}'`);
      await writeFile(designPath, design.replaceAll(marker, "removed quality-gate marker"));

      const issues = await validateSkills(fixtureRoot);
      assert.ok(
        issues.some((issue) => issue.includes(`missing workflow marker '${marker}'`)),
        `Expected validation to protect '${marker}'`,
      );
    });
  }

  await withSkillFixture(async (fixtureRoot) => {
    const metadataPath = resolve(
      fixtureRoot,
      ".agents/skills/mindwp-design-page/agents/openai.yaml",
    );
    const metadata = await readFile(metadataPath, "utf8");
    await writeFile(
      metadataPath,
      metadata.replace("three to five private spatial constructions", "one section component"),
    );

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("must begin from page-level constructions")));
  });

  await withSkillFixture(async (fixtureRoot) => {
    const metadataPath = resolve(
      fixtureRoot,
      ".agents/skills/mindwp-design-page/agents/openai.yaml",
    );
    const metadata = await readFile(metadataPath, "utf8");
    await writeFile(
      metadataPath,
      metadata.replace("reference-blind composition critique", "reference-led section review"),
    );

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("must protect reference-blind critique")));
  });

  await withSkillFixture(async (fixtureRoot) => {
    const metadataPath = resolve(
      fixtureRoot,
      ".agents/skills/mindwp-design-page/agents/openai.yaml",
    );
    const metadata = await readFile(metadataPath, "utf8");
    await writeFile(
      metadataPath,
      metadata.replace(
        "before showing the first qualifying draft.",
        "before showing the first qualifying draft, then refine it from a 1640px render.",
      ),
    );

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("must not reduce the quality gate")));
  });

  await withSkillFixture(async (fixtureRoot) => {
    const designPath = resolve(fixtureRoot, ".agents/skills/mindwp-design-page/SKILL.md");
    const design = await readFile(designPath, "utf8");
    const reordered = design
      .replace("## Begin from meaning and stable foundations", "## temporary-late-calibration")
      .replace(
        "## Calibrate with accepted MindWP references",
        "## Begin from meaning and stable foundations",
      )
      .replace("## temporary-late-calibration", "## Calibrate with accepted MindWP references");
    await writeFile(designPath, reordered);

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("blind critique, and late calibration")));
  });

  await withSkillFixture(async (fixtureRoot) => {
    const designPath = resolve(fixtureRoot, ".agents/skills/mindwp-design-page/SKILL.md");
    const design = await readFile(designPath, "utf8");
    const inverted = design
      .replace(
        "supports semantic implementation, testing or capture; it does not define the visible composition by default",
        "supports semantic implementation, testing or capture; it must define the visible composition",
      )
      .replace(
        "**Approve:** record visual approval and move to `mindwp-finish-page`.",
        "**Approve:** record the draft as rejected and excluded from creative evidence.",
      )
      .replace(
        "**Reject:** record the draft as rejected and excluded from creative evidence. Do not carry its presentation into a replacement.",
        "**Reject:** record visual approval and move to `mindwp-finish-page`.",
      );
    await writeFile(designPath, inverted);

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("it does not define the visible composition")));
    assert.ok(issues.some((issue) => issue.includes("**Approve:** record visual approval")));
    assert.ok(issues.some((issue) => issue.includes("**Reject:** record the draft as rejected")));
  });
});

test("short page prompts have one explicit route and outcome", async () => {
  const workflow = await readFile(resolve(repositoryRoot, "docs/PAGE-WORKFLOW.md"), "utf8");

  const routes = [
    ["Plan a new service page.", "mindwp-plan-page"],
    ["Build the approved Lead Response page.", "mindwp-design-page"],
    [
      "Build a different Lead Response variant at /services/lead-response-handling-variant-2.",
      "mindwp-design-page",
    ],
    ["Finish and audit the Lead Response page.", "mindwp-finish-page"],
  ];

  for (const [prompt, skill] of routes) {
    const row = workflow.split("\n").find((line) => line.includes(`\`${prompt}\``));
    assert.ok(row, `Missing workflow route for '${prompt}'`);
    assert.match(row, new RegExp(skill));
  }

  const leadResponseRow = workflow
    .split("\n")
    .find((line) => line.includes("`Build the approved Lead Response page.`"));
  assert.match(leadResponseRow, /begin from approved meaning/);
  assert.match(leadResponseRow, /spatial constructions/);
  assert.match(leadResponseRow, /reference-blind composition critique/);
  assert.match(leadResponseRow, /late brand calibration/);
  assert.match(leadResponseRow, /first qualifying render/);

  assert.doesNotMatch(workflow, /refine once/);

  const decisionSection = workflow.match(
    /## 5\. User visual decision([\s\S]*?)## 6\. Finish production/,
  )?.[1];
  assert.ok(decisionSection, "Missing user visual decision section");
  assert.match(decisionSection, /\*\*Approve:\*\*/);
  assert.match(decisionSection, /\*\*Reject:\*\*/);
  assert.match(decisionSection, /Targeted refinement happens only when the user explicitly asks/);
  assert.doesNotMatch(decisionSection, /^\s*- \*\*Revise:\*\*/m);
});
