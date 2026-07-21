import assert from "node:assert/strict";
import { cp, mkdir, mkdtemp, readFile, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import { validateSkills } from "../../scripts/check-skills.mjs";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

async function withSkillFixture(run) {
  const fixtureRoot = await mkdtemp(join(tmpdir(), "mindwp-skill-check-"));

  try {
    await cp(resolve(repositoryRoot, ".claude"), resolve(fixtureRoot, ".claude"), {
      recursive: true,
    });
    await run(fixtureRoot);
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
}

test("all active MindWP skills are structurally valid", async () => {
  assert.deepEqual(await validateSkills(repositoryRoot), []);
});

test("validation discovers skills instead of enforcing a fixed suite", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    const skillDirectory = resolve(fixtureRoot, ".claude/skills/mindwp-extra-review");
    await mkdir(resolve(skillDirectory, "agents"), { recursive: true });
    await writeFile(
      resolve(skillDirectory, "SKILL.md"),
      "---\nname: mindwp-extra-review\ndescription: Use when checking an isolated MindWP review concern.\n---\n\n# Extra review\n\nInspect the supplied concern.\n",
    );
    await writeFile(
      resolve(skillDirectory, "agents/openai.yaml"),
      'interface:\n  display_name: "MindWP Extra Review"\n  short_description: "Review one isolated MindWP concern"\n  default_prompt: "Use $mindwp-extra-review to inspect this isolated concern."\n',
    );

    assert.deepEqual(await validateSkills(fixtureRoot), []);
  });
});

test("validation reports missing required files", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    await mkdir(resolve(fixtureRoot, ".claude/skills/mindwp-incomplete"), { recursive: true });

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.includes("mindwp-incomplete: missing SKILL.md."));
  });
});

test("validation rejects malformed or mismatched skill metadata", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    const skillPath = resolve(fixtureRoot, ".claude/skills/mindwp-design-build/SKILL.md");
    await writeFile(
      skillPath,
      "---\nname: wrong_name\ndescription:\nunknown: value\n---\n\n# Broken\n",
    );

    const metadataPath = resolve(
      fixtureRoot,
      ".claude/skills/mindwp-design-build/agents/openai.yaml",
    );
    await writeFile(
      metadataPath,
      'interface:\n  display_name: Plan\n  default_prompt: "Plan this."\n',
    );

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("frontmatter name is 'wrong_name'")));
    assert.ok(issues.some((issue) => issue.includes("description is missing or empty")));
    assert.ok(issues.some((issue) => issue.includes("unsupported frontmatter field 'unknown'")));
    assert.ok(issues.some((issue) => issue.includes("frontmatter name must use lowercase")));
    assert.ok(issues.some((issue) => issue.includes("interface.display_name must be quoted")));
    assert.ok(issues.some((issue) => issue.includes("missing interface.short_description")));
    assert.ok(issues.some((issue) => issue.includes("must mention $mindwp-design-build")));
  });
});

test("validation detects duplicate skill definitions", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    const original = resolve(fixtureRoot, ".claude/skills/mindwp-design-build");
    const duplicate = resolve(fixtureRoot, ".claude/skills/mindwp-design-build-copy");
    await cp(original, duplicate, { recursive: true });

    const issues = await validateSkills(fixtureRoot);
    assert.ok(
      issues.some((issue) => issue.includes("duplicate skill definition 'mindwp-design-build'")),
    );
  });
});

test("validation detects unfinished placeholders", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    const skillPath = resolve(fixtureRoot, ".claude/skills/mindwp-design-build/SKILL.md");
    const skill = await readFile(skillPath, "utf8");
    await writeFile(skillPath, `${skill}\nTODO: finish this instruction.\n`);

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("contains an unfinished placeholder")));
  });
});

test("validation resolves local Markdown and metadata references", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    const skillPath = resolve(fixtureRoot, ".claude/skills/mindwp-design-build/SKILL.md");
    const skill = await readFile(skillPath, "utf8");
    await writeFile(skillPath, `${skill}\n[Missing reference](./references/missing.md)\n`);

    const metadataPath = resolve(
      fixtureRoot,
      ".claude/skills/mindwp-design-build/agents/openai.yaml",
    );
    const metadata = await readFile(metadataPath, "utf8");
    await writeFile(metadataPath, `${metadata}  icon_small: "./assets/missing.svg"\n`);

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("unresolved local reference")));
    assert.ok(issues.some((issue) => issue.includes("unresolved metadata reference")));
  });
});

test("validation rejects local references outside the repository", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    const externalRoot = await mkdtemp(join(tmpdir(), "mindwp-external-reference-"));
    try {
      const externalFile = resolve(externalRoot, "outside.md");
      await writeFile(externalFile, "outside\n");
      const skillPath = resolve(fixtureRoot, ".claude/skills/mindwp-design-build/SKILL.md");
      const skill = await readFile(skillPath, "utf8");
      await writeFile(skillPath, `${skill}\n[External](${externalFile})\n`);

      const issues = await validateSkills(fixtureRoot);
      assert.ok(issues.some((issue) => issue.includes("local reference escapes")));
    } finally {
      await rm(externalRoot, { recursive: true, force: true });
    }
  });
});

test("validation rejects escaping metadata and symlinked skill directories", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    const outsideIcon = resolve(fixtureRoot, "outside.svg");
    await writeFile(outsideIcon, "<svg/>\n");
    const metadataPath = resolve(
      fixtureRoot,
      ".claude/skills/mindwp-design-build/agents/openai.yaml",
    );
    const metadata = await readFile(metadataPath, "utf8");
    await writeFile(metadataPath, `${metadata}  icon_small: "../../../outside.svg"\n`);

    const linkedSkill = resolve(fixtureRoot, ".claude/skills/mindwp-linked");
    await symlink(resolve(fixtureRoot, ".claude/skills/mindwp-design-build"), linkedSkill);

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("metadata reference escapes")));
    assert.ok(
      issues.some((issue) => issue.includes("skill directories must not be symbolic links")),
    );
  });
});

test("validation requires metadata assets to be files", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    const assetsDirectory = resolve(fixtureRoot, ".claude/skills/mindwp-design-build/assets");
    await mkdir(assetsDirectory, { recursive: true });
    const metadataPath = resolve(
      fixtureRoot,
      ".claude/skills/mindwp-design-build/agents/openai.yaml",
    );
    const metadata = await readFile(metadataPath, "utf8");
    await writeFile(metadataPath, `${metadata}  icon_small: "./assets"\n`);

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("must resolve to a file")));
  });
});

test("validation reports unresolved referenced skills", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    const skillPath = resolve(fixtureRoot, ".claude/skills/mindwp-design-build/SKILL.md");
    const skill = await readFile(skillPath, "utf8");
    await writeFile(skillPath, `${skill}\nUse $mindwp-missing-helper when required.\n`);

    const issues = await validateSkills(fixtureRoot);
    assert.ok(issues.some((issue) => issue.includes("unresolved skill reference")));
  });
});

test("validation does not enforce doctrine phrases or heading order", async () => {
  await withSkillFixture(async (fixtureRoot) => {
    const skillPath = resolve(fixtureRoot, ".claude/skills/mindwp-design-build/SKILL.md");
    const skill = await readFile(skillPath, "utf8");
    await writeFile(
      skillPath,
      skill
        .replace("## Refine from rendered evidence", "## Review visible evidence")
        .replace("important focal sections", "relevant focal sections"),
    );

    assert.deepEqual(await validateSkills(fixtureRoot), []);
  });
});
