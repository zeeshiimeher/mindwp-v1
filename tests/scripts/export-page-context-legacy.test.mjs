import assert from "node:assert/strict";
import { dirname, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import { buildPageContext, parseContextArguments } from "../../scripts/export-page-context.mjs";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

test("the preserved legacy context exporter remains importable during coexistence", async () => {
  const context = await buildPageContext({
    pageId: "home",
    profile: "planning",
    repositoryRoot,
  });

  assert.match(context, /# MindWP page context: home/);
  assert.match(context, /## Source: docs\/PAGE-WORKFLOW\.md/);
  assert.match(context, /## Source: docs\/STRATEGY\.md/);
});

test("the preserved legacy exporter still rejects invalid ids and repository output", () => {
  assert.throws(
    () => parseContextArguments(["../home"], { repositoryRoot }),
    /lowercase letters, digits, and hyphens/,
  );
  assert.throws(
    () =>
      parseContextArguments(
        ["home", "--output", resolve(repositoryRoot, "docs/legacy-context.md")],
        { repositoryRoot },
      ),
    /outside the repository/,
  );
});
