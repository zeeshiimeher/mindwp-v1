import assert from "node:assert/strict";
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import {
  buildPageContext,
  pageRecordHasApprovedMeaning,
  parseContextArguments,
} from "../../scripts/export-page-context.mjs";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

test("planning context contains meaning authority and the active page record only", async () => {
  const context = await buildPageContext({
    pageId: "lead-response-handling",
    profile: "planning",
    repositoryRoot,
  });

  assert.match(context, /## Source: docs\/PAGE-WORKFLOW\.md/);
  assert.match(context, /## Source: docs\/STRATEGY\.md/);
  assert.match(context, /## Source: docs\/pages\/lead-response-handling\/page\.md/);
  assert.doesNotMatch(context, /## Source: docs\/DESIGN\.md/);
  assert.doesNotMatch(context, /## Source: docs\/ENGINEERING\.md/);
  assert.doesNotMatch(context, /prototype\.md/);
});

test("design context contains the complete visual-draft authority set", async () => {
  const context = await buildPageContext({
    pageId: "lead-response-handling",
    profile: "design",
    repositoryRoot,
  });

  assert.doesNotMatch(context, /## Source: docs\/STRATEGY\.md/);
  assert.match(context, /## Source: docs\/DESIGN\.md/);
  assert.match(context, /## Source: docs\/ENGINEERING\.md/);
  assert.match(context, /## Source: docs\/pages\/lead-response-handling\/page\.md/);
  assert.match(context, /## Source: \.agents\/skills\/mindwp-design-page\/SKILL\.md/);
  assert.match(context, /Build the approved Lead Response page/);
  assert.match(context, /Homepage and Local SEO Authority/);
  assert.match(context, /semantic landmark/);
  assert.match(context, /spatial construction or visual act/);
  assert.match(context, /three to five substantial spatial constructions/);
  assert.match(context, /entry → copy → payload renderer/);
  assert.match(context, /reference-blind composition critique/);
  assert.match(context, /independent read-only visual critic/);
  assert.match(context, /discard and recompose/);
  assert.match(context, /User-visible drafts are approved or rejected/);

  const meaningPosition = context.indexOf("## Source: docs/pages/lead-response-handling/page.md");
  const designPosition = context.indexOf("## Source: docs/DESIGN.md");
  const skillPosition = context.indexOf("## Source: .agents/skills/mindwp-design-page/SKILL.md");
  assert.ok(meaningPosition < designPosition);
  assert.ok(designPosition < skillPosition);
});

test("finish and audit profiles contain production authorities and the meaning record", async () => {
  for (const profile of ["finish", "audit"]) {
    const context = await buildPageContext({
      pageId: "lead-response-handling",
      profile,
      repositoryRoot,
    });

    assert.match(context, /## Source: docs\/STRATEGY\.md/);
    assert.match(context, /## Source: docs\/DESIGN\.md/);
    assert.match(context, /## Source: docs\/ENGINEERING\.md/);
    assert.match(context, /## Source: docs\/pages\/lead-response-handling\/page\.md/);
    assert.match(context, /verify implemented reality from current source and renders/);
  }
});

test("context export tolerates a page without a page record", async () => {
  const context = await buildPageContext({
    pageId: "page-without-record",
    profile: "design",
    repositoryRoot,
  });

  assert.match(context, /# MindWP page context: page-without-record/);
  assert.doesNotMatch(context, /docs\/pages\/page-without-record\/page\.md/);
  assert.match(context, /## Source: docs\/STRATEGY\.md/);
});

test("a present but unapproved page record does not suppress strategy", async () => {
  const fixtureRoot = await mkdtemp(join(tmpdir(), "mindwp-context-check-"));

  try {
    await cp(resolve(repositoryRoot, "docs"), resolve(fixtureRoot, "docs"), {
      recursive: true,
    });
    await cp(resolve(repositoryRoot, ".agents"), resolve(fixtureRoot, ".agents"), {
      recursive: true,
    });
    await mkdir(resolve(fixtureRoot, "docs/pages/draft-page"), { recursive: true });
    await writeFile(
      resolve(fixtureRoot, "docs/pages/draft-page/page.md"),
      "---\npage_id: draft-page\ntitle: Draft page\nroute: /draft-page\n---\n\n# Draft page\n",
    );

    const ledgerPath = resolve(fixtureRoot, "docs/PAGE-LEDGER.md");
    const ledger = await readFile(ledgerPath, "utf8");
    await writeFile(
      ledgerPath,
      ledger.replace(
        "\n## Update rule",
        "\n| **Draft page** | `/draft-page` | draft | not started | not started | not started | not started | not approved | none | Meaning is not approved. |\n\n## Update rule",
      ),
    );

    const context = await buildPageContext({
      pageId: "draft-page",
      profile: "design",
      repositoryRoot: fixtureRoot,
    });

    assert.match(context, /## Source: docs\/pages\/draft-page\/page\.md/);
    assert.match(context, /## Source: docs\/STRATEGY\.md/);
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
});

test("approved meaning requires a matching approved ledger row", async () => {
  const pageRecord = "---\nroute: /example\n---\n";
  assert.equal(
    pageRecordHasApprovedMeaning(pageRecord, "| **Example** | `/example` | approved | rendered |"),
    true,
  );
  assert.equal(
    pageRecordHasApprovedMeaning(pageRecord, "| **Example** | `/example` | draft | rendered |"),
    false,
  );
  assert.equal(
    pageRecordHasApprovedMeaning(pageRecord, "| **Other** | `/other` | approved | rendered |"),
    false,
  );
});

test("drafting principles, record schema, and procedure remain in their owning authorities", async () => {
  const [design, skill, workflow, engineering, template, pageRecord] = await Promise.all([
    readFile(resolve(repositoryRoot, "docs/DESIGN.md"), "utf8"),
    readFile(resolve(repositoryRoot, ".agents/skills/mindwp-design-page/SKILL.md"), "utf8"),
    readFile(resolve(repositoryRoot, "docs/PAGE-WORKFLOW.md"), "utf8"),
    readFile(resolve(repositoryRoot, "docs/ENGINEERING.md"), "utf8"),
    readFile(resolve(repositoryRoot, "docs/pages/_templates/page.md"), "utf8"),
    readFile(resolve(repositoryRoot, "docs/pages/lead-response-handling/page.md"), "utf8"),
  ]);

  assert.match(design, /Keep three units distinct/);
  assert.match(design, /Whole-page composition precedes and outranks landmark development/);
  assert.match(design, /After the new composition passes a reference-blind full-page review/);
  assert.match(skill, /For each construction, decide:/);
  assert.match(skill, /minimal heading labels and only provisional supporting language/);
  assert.match(skill, /Run the reference-blind composition critique/);
  assert.match(template, /Essential public meaning and truth boundary \| Supporting reservoir/);
  assert.match(pageRecord, /Essential public meaning and truth boundary/);
  assert.match(pageRecord, /Supporting reservoir/);
  assert.doesNotMatch(workflow, /For each construction, decide:/);
  assert.doesNotMatch(engineering, /three to five substantial spatial constructions/);
  assert.doesNotMatch(engineering, /entry → copy → payload renderer/);
});

test("optional session boundary is portable and non-authoritative", async () => {
  const context = await buildPageContext({
    pageId: "home",
    profile: "design",
    repositoryRoot,
    mode: "section redesign in page context",
    scope: "homepage certainty section",
    task: "build one stronger composition without changing approved meaning",
  });

  assert.match(context, /## Session boundary \(non-authoritative\)/);
  assert.match(context, /- Mode: section redesign in page context/);
  assert.match(context, /- Scope: homepage certainty section/);
  assert.match(
    context,
    /- Exact task: build one stronger composition without changing approved meaning/,
  );
  assert.match(context, /does not replace the private design synthesis/);
  assert.match(context, /phase-appropriate evidence review/);

  const contextWithoutBoundary = await buildPageContext({
    pageId: "home",
    profile: "planning",
    repositoryRoot,
  });
  assert.doesNotMatch(contextWithoutBoundary, /## Session boundary/);
});

test("session boundary values stay on one Markdown line", async () => {
  const context = await buildPageContext({
    pageId: "home",
    profile: "planning",
    repositoryRoot,
    task: "review the section\n- injected field",
  });

  assert.match(context, /- Exact task: review the section - injected field/);
  assert.doesNotMatch(context, /\n- injected field/);
});

test("context arguments reject unsafe page ids, retired profiles, and repository output", () => {
  assert.throws(
    () => parseContextArguments(["../home"], { repositoryRoot }),
    /lowercase letters, digits, and hyphens/,
  );

  for (const retiredProfile of ["production", "claude-design"]) {
    assert.throws(
      () =>
        parseContextArguments(["home", "--profile", retiredProfile], {
          repositoryRoot,
        }),
      /Unknown profile/,
    );
  }

  assert.throws(
    () =>
      parseContextArguments(
        ["home", "--output", `${repositoryRoot}/docs/generated-home-context.md`],
        { repositoryRoot },
      ),
    /outside the repository/,
  );
});

test("design context accepts a user-requested normal variant route as session scope", async () => {
  const options = parseContextArguments(
    [
      "--",
      "lead-response-handling",
      "--profile",
      "design",
      "--mode",
      "user-requested route variant",
      "--scope",
      "/services/lead-response-handling-variant-2",
      "--task",
      "build a different complete desktop visual draft",
      "--output",
      "/tmp/mindwp-lead-response-variant-2-context.md",
    ],
    { repositoryRoot },
  );

  assert.equal(options.pageId, "lead-response-handling");
  assert.equal(options.profile, "design");
  assert.equal(options.mode, "user-requested route variant");
  assert.equal(options.scope, "/services/lead-response-handling-variant-2");
  assert.equal(options.task, "build a different complete desktop visual draft");
  assert.equal(options.outputPath, "/tmp/mindwp-lead-response-variant-2-context.md");

  const context = await buildPageContext(options);
  assert.match(context, /- Scope: \/services\/lead-response-handling-variant-2/);
  assert.match(context, /## Source: docs\/pages\/lead-response-handling\/page\.md/);
  assert.doesNotMatch(context, /prototype\.md/);
});
