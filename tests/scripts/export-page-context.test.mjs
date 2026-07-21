import assert from "node:assert/strict";
import { link, mkdtemp, readFile, rm, stat, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import {
  buildContext,
  contextSourceList,
  parseContextArguments,
  runContextExport,
} from "../../scripts/export-context.mjs";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const generatedAt = new Date("2026-07-20T12:00:00.000Z");

function options(args) {
  return parseContextArguments(args, { repositoryRoot });
}

test("orientation exports the canonical memory set in deterministic order", async () => {
  const parsed = options([]);
  const context = await buildContext(parsed, { generatedAt });

  assert.deepEqual(
    contextSourceList(parsed).map((source) => source.label),
    [
      "docs/README.md",
      "docs/FOUNDATION.md",
      "docs/STRATEGY.md",
      "docs/WRITING.md",
      "docs/PAGE-PLANNING.md",
      "docs/DESIGN.md",
    ],
  );
  assert.match(context, /^# DERIVED MINDWP CONTEXT — NON-AUTHORITATIVE/m);
  assert.match(context, /Generated: 2026-07-20T12:00:00.000Z/);
  assert.doesNotMatch(context, /## Source: docs\/ENGINEERING\.md/);
  assert.doesNotMatch(context, /## Source: AGENTS\.md/);
  assert.ok(
    contextSourceList(parsed).every(
      (source) =>
        !source.label.includes("PAGE-WORKFLOW") &&
        !source.label.includes("PAGE-LEDGER") &&
        !source.label.includes("export-page-context"),
    ),
  );
});

test("orientation includes Engineering only when requested", async () => {
  const parsed = options(["orientation", "--engineering"]);
  const context = await buildContext(parsed, { generatedAt });
  assert.equal(contextSourceList(parsed).at(-1).label, "docs/ENGINEERING.md");
  assert.match(context, /## Source: docs\/ENGINEERING\.md/);
});

test("focused base accepts an explicit page plan and zero skills", async () => {
  const fixture = await mkdtemp(join(tmpdir(), "mindwp-focused-context-"));
  try {
    const pagePlan = resolve(fixture, "synthetic-page.md");
    await writeFile(pagePlan, "# Synthetic page\n\nMeaning stays page-specific.\n");

    const parsed = options(["focused", "--page-plan", pagePlan]);
    assert.deepEqual(parsed.skills, []);
    const context = await buildContext(parsed, { generatedAt });
    assert.deepEqual(
      contextSourceList(parsed).map((source) => source.label),
      [
        "docs/README.md",
        "docs/FOUNDATION.md",
        "supplied page plan",
        "docs/WRITING.md",
        "docs/DESIGN.md",
      ],
    );
    assert.match(context, /Meaning stays page-specific\./);
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});

test("focused optional sources and skills use deterministic order", async () => {
  const parsed = options([
    "focused",
    "--skill",
    "mindwp-frontend-quality",
    "--repository",
    "--engineering",
    "--skill",
    "mindwp-design-build",
    "--strategy",
    "--skill",
    "mindwp-design-build",
  ]);
  await buildContext(parsed, { generatedAt });

  assert.deepEqual(
    contextSourceList(parsed).map((source) => source.label),
    [
      "docs/README.md",
      "AGENTS.md",
      "docs/FOUNDATION.md",
      "docs/STRATEGY.md",
      "docs/WRITING.md",
      "docs/DESIGN.md",
      "docs/ENGINEERING.md",
      ".agents/skills/mindwp-design-build/SKILL.md",
      ".agents/skills/mindwp-frontend-quality/SKILL.md",
    ],
  );
});

test("focused permits either single execution skill", () => {
  for (const skill of ["mindwp-design-build", "mindwp-frontend-quality"]) {
    const parsed = options(["focused", "--skill", skill]);
    assert.deepEqual(parsed.skills, [skill]);
    assert.equal(contextSourceList(parsed).at(-1).path, `.agents/skills/${skill}/SKILL.md`);
  }
});

test("export preserves complete canonical source bodies", async () => {
  const foundation = await readFile(resolve(repositoryRoot, "docs/FOUNDATION.md"), "utf8");
  const context = await buildContext(options([]), { generatedAt });
  assert.ok(context.includes(`## Source: docs/FOUNDATION.md\n\n${foundation}`));
});

test("task boundaries are normalised and remain non-authoritative", async () => {
  const context = await buildContext(
    options(["focused", "--task", "Review this page\n  without inventing strategy"]),
    { generatedAt },
  );
  assert.match(context, /## Task boundary \(non-authoritative\)/);
  assert.match(context, /Review this page without inventing strategy/);
  assert.doesNotMatch(context, /Review this page\n/);
});

test("arguments reject unknown profiles, options, skills, and profile-inapplicable flags", () => {
  assert.throws(() => options(["planning"]), /Unknown context profile/);
  assert.throws(() => options(["orientation", "--unknown"]), /Unknown context option/);
  assert.throws(() => options(["focused", "--skill", "mindwp-missing"]), /Unknown execution skill/);
  assert.throws(() => options(["orientation", "--repository"]), /focused profile/);
  assert.throws(() => options(["orientation", "--overwrite"]), /requires --output/);
});

test("missing requested sources fail loudly", async () => {
  const missingPlan = resolve(tmpdir(), "mindwp-context-plan-does-not-exist.md");
  await assert.rejects(
    () => buildContext(options(["focused", "--page-plan", missingPlan]), { generatedAt }),
    /Missing requested context source: supplied page plan/,
  );
});

test("stdout is the default output", async () => {
  let output = "";
  await runContextExport(["orientation"], {
    generatedAt,
    repositoryRoot,
    stdout: { write: (value) => (output += value) },
  });
  assert.match(output, /^# DERIVED MINDWP CONTEXT — NON-AUTHORITATIVE/);
});

test("external output refuses replacement unless overwrite is explicit", async () => {
  const fixture = await mkdtemp(join(tmpdir(), "mindwp-context-output-"));
  try {
    const outputPath = resolve(fixture, "context.md");
    let notice = "";
    await runContextExport(["orientation", "--output", outputPath], {
      generatedAt,
      repositoryRoot,
      stdout: { write: (value) => (notice += value) },
    });
    assert.equal(notice, `${outputPath}\n`);
    assert.match(await readFile(outputPath, "utf8"), /DERIVED MINDWP CONTEXT/);

    await assert.rejects(
      () =>
        runContextExport(["orientation", "--output", outputPath], {
          generatedAt,
          repositoryRoot,
          stdout: { write() {} },
        }),
      /already exists/,
    );

    await runContextExport(["orientation", "--output", outputPath, "--overwrite"], {
      generatedAt,
      repositoryRoot,
      stdout: { write() {} },
    });
    assert.equal((await stat(outputPath)).mode & 0o777, 0o600);
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});

test("overwrite replaces an external hard link without mutating its source", async () => {
  const fixture = await mkdtemp(join(tmpdir(), "mindwp-context-hardlink-"));
  try {
    const sourcePath = resolve(fixture, "source.md");
    const outputPath = resolve(fixture, "context.md");
    await writeFile(sourcePath, "preserve this source\n", { mode: 0o644 });
    await link(sourcePath, outputPath);

    await runContextExport(["orientation", "--output", outputPath, "--overwrite"], {
      generatedAt,
      repositoryRoot,
      stdout: { write() {} },
    });

    assert.equal(await readFile(sourcePath, "utf8"), "preserve this source\n");
    assert.match(await readFile(outputPath, "utf8"), /DERIVED MINDWP CONTEXT/);
    assert.equal((await stat(outputPath)).mode & 0o777, 0o600);
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});

test("repository destinations and output symlinks are rejected", async () => {
  await assert.rejects(
    () =>
      runContextExport(
        ["orientation", "--output", resolve(repositoryRoot, "docs/generated-context.md")],
        { generatedAt, repositoryRoot, stdout: { write() {} } },
      ),
    /outside the repository/,
  );

  const fixture = await mkdtemp(join(tmpdir(), "mindwp-context-symlink-"));
  try {
    const target = resolve(fixture, "target.md");
    const link = resolve(fixture, "output.md");
    await writeFile(target, "keep\n");
    await symlink(target, link);
    await assert.rejects(
      () =>
        runContextExport(["orientation", "--output", link, "--overwrite"], {
          generatedAt,
          repositoryRoot,
          stdout: { write() {} },
        }),
      /symbolic link/,
    );
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});

test("a symlinked parent cannot route output back into the repository", async () => {
  const fixture = await mkdtemp(join(tmpdir(), "mindwp-context-parent-"));
  try {
    const link = resolve(fixture, "repository-link");
    await symlink(repositoryRoot, link);
    await assert.rejects(
      () =>
        runContextExport(["orientation", "--output", resolve(link, "generated-context.md")], {
          generatedAt,
          repositoryRoot,
          stdout: { write() {} },
        }),
      /outside the repository/,
    );
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});

test("a missing output parent fails without creating directories", async () => {
  const fixture = await mkdtemp(join(tmpdir(), "mindwp-context-parent-missing-"));
  try {
    const outputPath = resolve(fixture, "missing", "context.md");
    await assert.rejects(
      () =>
        runContextExport(["orientation", "--output", outputPath], {
          generatedAt,
          repositoryRoot,
          stdout: { write() {} },
        }),
      /parent must already exist/,
    );
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});
