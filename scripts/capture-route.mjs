#!/usr/bin/env node

import { execFile } from "node:child_process";
import { lstat, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join, relative, resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";
import { promisify } from "node:util";

import { chromium } from "playwright";

const execFileAsync = promisify(execFile);

const COMPACT_VIEWPORTS = [
  { name: "1640", width: 1640, height: 1100 },
  { name: "400", width: 400, height: 860 },
];

const DESKTOP_VIEWPORTS = [{ name: "1640", width: 1640, height: 1100 }];

const FULL_VIEWPORTS = [
  { name: "1920", width: 1920, height: 1080 },
  { name: "1640", width: 1640, height: 1100 },
  { name: "1280", width: 1280, height: 960 },
  { name: "1024", width: 1024, height: 900 },
  { name: "766", width: 766, height: 900 },
  { name: "400", width: 400, height: 860 },
  { name: "1640-reduced-motion", width: 1640, height: 1100, reducedMotion: true },
  { name: "400-reduced-motion", width: 400, height: 860, reducedMotion: true },
];

const CAPTURE_MARKER = ".mindwp-capture.json";
const CAPTURE_OWNER = "mindwp-route-capture";

function isOutsideRepository(outputDir, repositoryRoot) {
  const relation = relative(resolve(repositoryRoot), resolve(outputDir));
  return relation === ".." || relation.startsWith(`..${sep}`);
}

function safeFilePart(value) {
  return value
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

export function routeSlug(source) {
  const url = new URL(source, "http://localhost");
  const path = decodeURIComponent(url.pathname).replace(/^\/+|\/+$/g, "");
  return safeFilePart(path ? basename(path) : "home") || "route";
}

export function captureViewports(full = false, desktopOnly = false) {
  const viewports = desktopOnly ? DESKTOP_VIEWPORTS : full ? FULL_VIEWPORTS : COMPACT_VIEWPORTS;
  return viewports.map((viewport) => ({ ...viewport }));
}

export function shouldCaptureSectionsAtViewport(viewport) {
  return (
    !viewport.reducedMotion &&
    COMPACT_VIEWPORTS.some((defaultViewport) => defaultViewport.name === viewport.name)
  );
}

export function shouldCreateSectionAuditSheet({ allSections = false, sectionIds = [] } = {}) {
  return allSections || sectionIds.length > 1;
}

export async function readGitSourceState(cwd = process.cwd()) {
  const unavailable = {
    kind: "unavailable",
    repositoryRoot: null,
    commit: null,
    tree: null,
    worktree: "unavailable",
    identifier: null,
  };

  const runGit = async (args) => {
    const { stdout } = await execFileAsync("git", args, {
      cwd,
      encoding: "utf8",
      maxBuffer: 16 * 1024 * 1024,
    });
    return stdout.trim();
  };

  let repositoryRoot;
  try {
    repositoryRoot = await runGit(["rev-parse", "--show-toplevel"]);
  } catch {
    return unavailable;
  }

  const [commit, tree, status] = await Promise.all([
    runGit(["rev-parse", "HEAD"]).catch(() => null),
    runGit(["rev-parse", "HEAD^{tree}"]).catch(() => null),
    runGit(["status", "--porcelain=v1", "--untracked-files=all"]).catch(() => null),
  ]);
  const worktree = status === null ? "unavailable" : status ? "dirty" : "clean";
  const shortCommit = commit?.slice(0, 12) ?? "unborn";

  return {
    kind: "git",
    repositoryRoot,
    commit,
    tree,
    worktree,
    identifier: worktree === "dirty" ? `${shortCommit}+dirty` : shortCommit,
  };
}

export function parseCaptureArguments(
  args,
  {
    cwd = process.cwd(),
    baseUrl = "http://localhost:3000",
    defaultRoute = "/",
    defaultOutputName = "mindwp-route-screenshots",
    filenamePrefix,
  } = {},
) {
  const positional = [];
  const sectionIds = [];
  let allSections = false;
  let desktopOnly = false;
  let full = false;

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--") {
      continue;
    } else if (arg === "--full") {
      full = true;
    } else if (arg === "--desktop") {
      desktopOnly = true;
    } else if (arg === "--sections") {
      allSections = true;
    } else if (arg === "--section") {
      const sectionId = args[index + 1];
      if (!sectionId || sectionId.startsWith("--")) {
        throw new Error("Capture option --section requires a section id");
      }

      const normalizedId = sectionId.replace(/^#/, "").trim();
      if (!normalizedId) {
        throw new Error("Capture option --section requires a section id");
      }

      sectionIds.push(normalizedId);
      index += 1;
    } else if (arg.startsWith("--")) {
      throw new Error(`Unknown capture option: ${arg}`);
    } else {
      positional.push(arg);
    }
  }

  if (allSections && sectionIds.length > 0) {
    throw new Error("Use either --sections or one or more --section options, not both");
  }

  if (full && desktopOnly) {
    throw new Error("Use either --desktop or --full, not both");
  }

  if (positional.length > 2) {
    throw new Error(
      "Usage: capture-route [--desktop | --full] [--sections | --section <id>...] <route-or-url> [output-directory]",
    );
  }

  const source = positional[0] ?? defaultRoute;
  const url = new URL(source, baseUrl).toString();
  const outputDir = resolve(positional[1] ?? join(tmpdir(), defaultOutputName));

  if (!isOutsideRepository(outputDir, cwd)) {
    throw new Error(`Screenshot output must stay outside the repository: ${outputDir}`);
  }

  return {
    allSections,
    desktopOnly,
    filenamePrefix: filenamePrefix ?? routeSlug(url),
    full,
    outputDir,
    sectionIds: [...new Set(sectionIds)],
    sourceDirectory: resolve(cwd),
    url,
  };
}

export async function prepareCaptureOutput(outputDir) {
  let stats;
  try {
    stats = await lstat(outputDir);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }

  if (stats) {
    let marker;
    try {
      marker = JSON.parse(await readFile(join(outputDir, CAPTURE_MARKER), "utf8"));
    } catch {
      throw new Error(`Refusing to replace a directory not owned by MindWP capture: ${outputDir}`);
    }

    if (!stats.isDirectory() || stats.isSymbolicLink() || marker.owner !== CAPTURE_OWNER) {
      throw new Error(`Refusing to replace a directory not owned by MindWP capture: ${outputDir}`);
    }

    await rm(outputDir, { recursive: true, force: true });
  }

  await mkdir(outputDir, { recursive: true });
  await writeFile(
    join(outputDir, CAPTURE_MARKER),
    `${JSON.stringify({ owner: CAPTURE_OWNER, version: 1 }, null, 2)}\n`,
  );
}

async function settle(page) {
  await page.waitForLoadState("networkidle");
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = Math.max(Math.floor((page.viewportSize()?.height ?? 900) * 0.7), 420);

  for (let y = 0; y <= height; y += step) {
    await page.evaluate((nextY) => window.scrollTo({ top: nextY, behavior: "instant" }), y);
    await page.waitForTimeout(120);
  }

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(250);
}

async function clearTransientFocus(page) {
  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function createSectionAuditSheet({
  browser,
  filenamePrefix,
  outputDir,
  route,
  sectionCaptures,
  viewport,
}) {
  const cards = await Promise.all(
    sectionCaptures.map(async (capture) => ({
      ...capture,
      dataUrl: `data:image/png;base64,${(await readFile(capture.path)).toString("base64")}`,
    })),
  );
  const columnCount = viewport.width <= 500 ? 3 : 2;
  const sheetPath = join(outputDir, `${filenamePrefix}-${viewport.name}-section-audit-sheet.png`);
  const sheetPage = await browser.newPage({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 1,
  });

  try {
    await sheetPage.setContent(
      `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>MindWP section audit sheet</title>
          <style>
            * { box-sizing: border-box; }
            body {
              margin: 0;
              background: #e7ecea;
              color: #0a1d2f;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            }
            .sheet-header {
              display: flex;
              align-items: end;
              justify-content: space-between;
              gap: 32px;
              padding: 32px 36px 24px;
              background: #071a2d;
              color: white;
            }
            h1 { margin: 0 0 6px; font-size: 28px; line-height: 1.1; }
            p { margin: 0; color: #b9c9d4; font-size: 15px; }
            .viewport {
              flex: none;
              color: #53d8ad;
              font-size: 16px;
              font-weight: 700;
            }
            main {
              display: grid;
              grid-template-columns: repeat(${columnCount}, minmax(0, 1fr));
              align-items: start;
              gap: 24px;
              padding: 28px;
            }
            article {
              min-width: 0;
              overflow: hidden;
              border: 1px solid #c7d1cd;
              border-radius: 10px;
              background: white;
              box-shadow: 0 8px 22px rgb(7 26 45 / 8%);
            }
            .section-label {
              display: flex;
              align-items: center;
              gap: 10px;
              padding: 11px 14px;
              border-bottom: 1px solid #dbe2df;
              font-size: 14px;
              font-weight: 700;
            }
            .section-number { color: #148766; font-variant-numeric: tabular-nums; }
            figure { margin: 0; background: #f7f8f7; }
            img { display: block; width: 100%; height: auto; }
          </style>
        </head>
        <body>
          <header class="sheet-header">
            <div>
              <h1>Section audit sheet</h1>
              <p>${escapeHtml(route)} · review the full page first, then triage sections here</p>
            </div>
            <div class="viewport">${escapeHtml(viewport.name)}px source</div>
          </header>
          <main>
            ${cards
              .map(
                ({ dataUrl, id, index }) => `
                  <article>
                    <div class="section-label">
                      <span class="section-number">${String(index).padStart(2, "0")}</span>
                      <span>${escapeHtml(id)}</span>
                    </div>
                    <figure><img src="${dataUrl}" alt="" /></figure>
                  </article>`,
              )
              .join("")}
          </main>
        </body>
      </html>`,
      { waitUntil: "load" },
    );
    await sheetPage.screenshot({ path: sheetPath, fullPage: true, animations: "disabled" });
  } finally {
    await sheetPage.close();
  }

  return sheetPath;
}

export async function captureRoute({
  allSections = false,
  desktopOnly = false,
  filenamePrefix,
  full,
  outputDir,
  sectionIds = [],
  sourceDirectory = process.cwd(),
  url,
}) {
  await prepareCaptureOutput(outputDir);

  const browser = await chromium.launch();
  const manifest = {
    source: url,
    route: new URL(url).pathname,
    sourceState: await readGitSourceState(sourceDirectory),
    outputDirectory: outputDir,
    capturePlan: {
      desktopOnly,
      fullMatrix: full,
      allSections,
      sectionIds,
      sectionAuditSheets: shouldCreateSectionAuditSheet({ allSections, sectionIds }),
    },
    captures: [],
  };

  try {
    const viewports = captureViewports(full, desktopOnly);

    for (const viewport of viewports) {
      const { name, width, height, reducedMotion = false } = viewport;
      const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });

      try {
        if (reducedMotion) await page.emulateMedia({ reducedMotion: "reduce" });

        const response = await page.goto(url, { waitUntil: "networkidle" });
        if (!response?.ok()) {
          throw new Error(`Capture route returned HTTP ${response?.status() ?? "unknown"}: ${url}`);
        }

        await settle(page);

        const prefix = join(outputDir, `${filenamePrefix}-${name}`);
        const fullPagePath = `${prefix}.png`;
        await clearTransientFocus(page);
        await page.screenshot({ path: fullPagePath, fullPage: true, animations: "disabled" });

        const sectionCaptures = [];
        let sectionAuditSheetPath = null;
        const documentMetrics = await page.evaluate(() => ({
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          scrollHeight: document.documentElement.scrollHeight,
        }));

        if ((allSections || sectionIds.length > 0) && shouldCaptureSectionsAtViewport(viewport)) {
          await page.addStyleTag({
            content: `
              .site-header, .skip-link { display: none !important; }
              *, *::before, *::after {
                animation-duration: 0s !important;
                scroll-behavior: auto !important;
                transition-duration: 0s !important;
              }
            `,
          });

          const sections = await page.locator("main > section").all();
          const foundSectionIds = new Set();

          for (let index = 0; index < sections.length; index += 1) {
            const sectionId = (await sections[index].getAttribute("id")) ?? `section-${index + 1}`;
            if (!allSections && !sectionIds.includes(sectionId)) continue;

            const sectionFilePart = safeFilePart(sectionId) || `section-${index + 1}`;
            const sectionPath = `${prefix}-section-${index + 1}-${sectionFilePart}.png`;
            await clearTransientFocus(page);
            await sections[index].screenshot({ path: sectionPath, animations: "disabled" });
            sectionCaptures.push({ id: sectionId, index: index + 1, path: sectionPath });
            foundSectionIds.add(sectionId);
          }

          const missingSectionIds = sectionIds.filter(
            (sectionId) => !foundSectionIds.has(sectionId),
          );
          if (missingSectionIds.length > 0) {
            throw new Error(`Capture section id(s) not found: ${missingSectionIds.join(", ")}`);
          }

          if (shouldCreateSectionAuditSheet({ allSections, sectionIds })) {
            sectionAuditSheetPath = await createSectionAuditSheet({
              browser,
              filenamePrefix,
              outputDir,
              route: manifest.route,
              sectionCaptures,
              viewport,
            });
          }
        }

        manifest.captures.push({
          name,
          viewport: { width, height },
          reducedMotion,
          fullPagePath,
          sectionCaptures,
          sectionAuditSheetPath,
          documentMetrics,
          hasHorizontalOverflow: documentMetrics.scrollWidth > documentMetrics.clientWidth,
        });
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }

  await writeFile(join(outputDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  return outputDir;
}

export async function runCapture(args, defaults) {
  const options = parseCaptureArguments(args, defaults);
  const outputDir = await captureRoute(options);
  console.log(outputDir);
  return outputDir;
}

const isMain = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;

if (isMain) {
  await runCapture(process.argv.slice(2));
}
