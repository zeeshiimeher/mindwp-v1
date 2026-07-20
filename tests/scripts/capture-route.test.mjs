import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { access, mkdir, mkdtemp, readFile, realpath, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

import {
  captureViewports,
  parseCaptureArguments,
  prepareCaptureOutput,
  readGitSourceState,
  routeSlug,
  shouldCaptureSectionsAtViewport,
  shouldCreateSectionAuditSheet,
} from "../../scripts/capture-route.mjs";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const execFileAsync = promisify(execFile);

test("route capture accepts a route, full matrix, and external output", () => {
  const options = parseCaptureArguments(
    ["--", "--full", "/services/local-seo-authority", "/tmp/mindwp-local-seo-capture"],
    { cwd: repositoryRoot, baseUrl: "http://localhost:3000" },
  );

  assert.equal(options.url, "http://localhost:3000/services/local-seo-authority");
  assert.equal(options.outputDir, "/tmp/mindwp-local-seo-capture");
  assert.equal(options.filenamePrefix, "local-seo-authority");
  assert.equal(options.full, true);
  assert.equal(options.desktopOnly, false);
  assert.equal(options.allSections, false);
  assert.deepEqual(options.sectionIds, []);
});

test("route capture defaults to the efficient desktop and mobile pair", () => {
  assert.deepEqual(
    captureViewports(false).map(({ name }) => name),
    ["1640", "400"],
  );

  const fullNames = captureViewports(true).map(({ name }) => name);
  assert.ok(fullNames.includes("1024"));
  assert.ok(fullNames.includes("766"));
  assert.ok(fullNames.includes("1640-reduced-motion"));
  assert.ok(fullNames.includes("400-reduced-motion"));
});

test("route capture supports a 1640-only visual-draft pass", () => {
  const options = parseCaptureArguments(
    [
      "--desktop",
      "--sections",
      "/services/lead-response-handling-variant-2",
      "/tmp/mindwp-lead-response-variant-2",
    ],
    { cwd: repositoryRoot, baseUrl: "http://localhost:3000" },
  );

  assert.equal(options.desktopOnly, true);
  assert.equal(options.full, false);
  assert.equal(options.allSections, true);
  assert.equal(options.url, "http://localhost:3000/services/lead-response-handling-variant-2");
  assert.deepEqual(
    captureViewports(false, true).map(({ name }) => name),
    ["1640"],
  );

  assert.throws(
    () => parseCaptureArguments(["--desktop", "--full", "/"], { cwd: repositoryRoot }),
    /either --desktop or --full/,
  );
});

test("route capture supports explicit all-section and targeted-section crops", () => {
  const allSections = parseCaptureArguments(["--sections", "/"], {
    cwd: repositoryRoot,
    baseUrl: "http://localhost:3000",
  });
  assert.equal(allSections.allSections, true);
  assert.deepEqual(allSections.sectionIds, []);

  const targeted = parseCaptureArguments(
    ["--section", "hero", "--section", "proof", "/services/local-seo-authority"],
    { cwd: repositoryRoot, baseUrl: "http://localhost:3000" },
  );
  assert.equal(targeted.allSections, false);
  assert.deepEqual(targeted.sectionIds, ["hero", "proof"]);

  assert.throws(
    () => parseCaptureArguments(["--section"], { cwd: repositoryRoot }),
    /requires a section id/,
  );
});

test("section evidence stays scoped and adds a contact sheet only when useful", () => {
  assert.equal(shouldCreateSectionAuditSheet({ sectionIds: ["hero"] }), false);
  assert.equal(shouldCreateSectionAuditSheet({ sectionIds: ["hero", "proof"] }), true);
  assert.equal(shouldCreateSectionAuditSheet({ allSections: true }), true);

  assert.equal(shouldCaptureSectionsAtViewport({ name: "1640" }), true);
  assert.equal(shouldCaptureSectionsAtViewport({ name: "400" }), true);
  assert.equal(shouldCaptureSectionsAtViewport({ name: "1024" }), false);
  assert.equal(
    shouldCaptureSectionsAtViewport({ name: "400-reduced-motion", reducedMotion: true }),
    false,
  );
});

test("route capture derives stable names and rejects repository output", () => {
  assert.equal(routeSlug("http://localhost:3000/"), "home");
  assert.equal(
    routeSlug("http://localhost:3000/services/local-seo-authority?draft=1"),
    "local-seo-authority",
  );

  assert.throws(
    () =>
      parseCaptureArguments(["/", `${repositoryRoot}/artifacts/capture`], {
        cwd: repositoryRoot,
        baseUrl: "http://localhost:3000",
      }),
    /outside the repository/,
  );
});

test("capture cleanup replaces only directories owned by the capture tool", async () => {
  const fixtureRoot = await mkdtemp(join(tmpdir(), "mindwp-capture-tool-test-"));
  const unowned = join(fixtureRoot, "unowned");
  const owned = join(fixtureRoot, "owned");

  try {
    await mkdir(unowned);
    await writeFile(join(unowned, "keep.txt"), "keep\n");

    await assert.rejects(() => prepareCaptureOutput(unowned), /not owned by MindWP capture/);
    assert.equal(await readFile(join(unowned, "keep.txt"), "utf8"), "keep\n");

    await prepareCaptureOutput(owned);
    await writeFile(join(owned, "old.txt"), "old\n");
    await prepareCaptureOutput(owned);

    await assert.rejects(() => access(join(owned, "old.txt")));
    assert.match(
      await readFile(join(owned, ".mindwp-capture.json"), "utf8"),
      /mindwp-route-capture/,
    );
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
});

test("capture provenance records Git revision, tree, and dirty state when available", async () => {
  const fixtureRoot = await mkdtemp(join(tmpdir(), "mindwp-capture-git-test-"));

  try {
    assert.deepEqual(await readGitSourceState(fixtureRoot), {
      kind: "unavailable",
      repositoryRoot: null,
      commit: null,
      tree: null,
      worktree: "unavailable",
      identifier: null,
    });

    await execFileAsync("git", ["init", "--quiet"], { cwd: fixtureRoot });
    await execFileAsync("git", ["config", "user.email", "capture-test@mindwp.local"], {
      cwd: fixtureRoot,
    });
    await execFileAsync("git", ["config", "user.name", "MindWP capture test"], {
      cwd: fixtureRoot,
    });
    await writeFile(join(fixtureRoot, "page.txt"), "first\n");
    await execFileAsync("git", ["add", "page.txt"], { cwd: fixtureRoot });
    await execFileAsync("git", ["commit", "--quiet", "-m", "fixture"], {
      cwd: fixtureRoot,
    });

    const clean = await readGitSourceState(fixtureRoot);
    assert.equal(clean.kind, "git");
    assert.equal(clean.repositoryRoot, await realpath(fixtureRoot));
    assert.match(clean.commit, /^[0-9a-f]{40}$/);
    assert.match(clean.tree, /^[0-9a-f]{40}$/);
    assert.equal(clean.worktree, "clean");
    assert.equal(clean.identifier, clean.commit.slice(0, 12));

    await writeFile(join(fixtureRoot, "page.txt"), "changed\n");
    const dirty = await readGitSourceState(fixtureRoot);
    assert.equal(dirty.commit, clean.commit);
    assert.equal(dirty.tree, clean.tree);
    assert.equal(dirty.worktree, "dirty");
    assert.equal(dirty.identifier, `${clean.commit.slice(0, 12)}+dirty`);
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
});
