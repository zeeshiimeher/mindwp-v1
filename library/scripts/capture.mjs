/**
 * Capture catalogue entries as screenshots, for reviewing and auditing sections
 * without scrolling through them by hand.
 *
 * Desktop is the default and the priority: 1440×900. Narrow is a deliberate
 * opt-in for the few sections where narrow behaviour is actually the question,
 * not a second pass that every capture pays for.
 *
 *   pnpm capture                      every entry, 1440
 *   pnpm capture system-tokens        one entry, 1440
 *   pnpm capture --full               full-page rather than one viewport
 *   pnpm capture --narrow             adds a 390 pass
 *   pnpm capture --width 1680         a different desktop width
 *   pnpm capture --reduced-motion     capture the static branch instead
 *
 * Servers: if a catalogue is already running on the dev port it is reused, so a
 * `pnpm dev` session you are working in is never disturbed. Otherwise a
 * production server is started on its own port, used, and shut down again —
 * which is also much faster, because dev mode compiles each route on first
 * request. Set LIBRARY_URL to point at something else entirely.
 */
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { argv, cwd, env, exit } from "node:process";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

// Resolved from this file rather than from PATH, so the script also works when
// it is run directly with node instead of through `pnpm capture`.
const NEXT_BIN = fileURLToPath(new URL("../node_modules/.bin/next", import.meta.url));

const DEV_URL = env.LIBRARY_URL ?? "http://localhost:3100";
const CAPTURE_PORT = Number(env.LIBRARY_CAPTURE_PORT ?? 3101);
const OUT = "screenshots";

const DESKTOP = { width: 1440, height: 900 };
const NARROW = { width: 390, height: 844 };

const args = argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const value = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : Number(args[i + 1]);
};

const slugs = args.filter((a) => !a.startsWith("--") && !/^\d+$/.test(a));
const fullPage = flag("full");
const withNarrow = flag("narrow");
const reducedMotion = flag("reduced-motion") ? "reduce" : "no-preference";
const desktop = { width: value("width", DESKTOP.width), height: value("height", DESKTOP.height) };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function isUp(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(1500) });
    return res.ok;
  } catch {
    return false;
  }
}

/** Reuse whatever is already serving; otherwise run our own, on our own port. */
async function ensureServer() {
  if (await isUp(DEV_URL)) {
    console.log(`Using the catalogue already running at ${DEV_URL}`);
    return { url: DEV_URL, stop: null };
  }

  const url = `http://localhost:${CAPTURE_PORT}`;
  console.log(`Nothing on ${DEV_URL}. Starting a production server on ${url}`);
  const child = spawn(NEXT_BIN, ["start", "--port", String(CAPTURE_PORT)], {
    stdio: ["ignore", "ignore", "pipe"],
    shell: false,
    env,
    cwd: cwd(),
  });
  let stderr = "";
  child.stderr.on("data", (d) => (stderr += d));

  for (let i = 0; i < 40; i += 1) {
    if (await isUp(url)) return { url, stop: () => child.kill() };
    if (child.exitCode !== null) break;
    await sleep(250);
  }
  child.kill();
  console.error(
    `Could not start a server on ${CAPTURE_PORT}.` +
      `\nIf there is no production build yet, run: pnpm build` +
      (stderr ? `\n${stderr.trim().split("\n").slice(0, 5).join("\n")}` : ""),
  );
  exit(1);
}

/**
 * Wait for what actually affects a screenshot — webfonts resolved and one frame
 * painted — rather than for the network to go idle. A Next dev server keeps HMR
 * traffic flowing, so `networkidle` waits for a quiet moment that never quite
 * arrives and costs seconds per route.
 */
async function settle(page) {
  await page.evaluate(
    () =>
      new Promise((resolve) => {
        document.fonts.ready.then(() => requestAnimationFrame(() => resolve()));
      }),
  );
}

/** Ask the running catalogue what it holds, so this never duplicates the registry. */
async function discoverSlugs(page, base) {
  await page.goto(`${base}/`, { waitUntil: "load" });
  const found = await page.evaluate(() =>
    [...document.querySelectorAll('a[href^="/s/"]')].map((a) => a.getAttribute("href").slice(3)),
  );
  if (found.length === 0) console.error(`No entries found at ${base}/ — is the catalogue healthy?`);
  return found;
}

async function capture(browser, base, viewport, label, targets) {
  const context = await browser.newContext({ viewport, reducedMotion });
  const page = await context.newPage();
  for (const slug of targets) {
    await page.goto(`${base}/s/${slug}`, { waitUntil: "load" });
    await settle(page);
    const suffix = reducedMotion === "reduce" ? "-static" : "";
    const path = `${OUT}/${slug}-${label}${suffix}.png`;
    await page.screenshot({ path, fullPage });
    console.log(`  ${path}`);
  }
  await context.close();
}

const server = await ensureServer();
const browser = await chromium.launch();
const started = Date.now();

try {
  const probe = await browser.newPage();
  const targets = slugs.length ? slugs : await discoverSlugs(probe, server.url);
  await probe.close();

  if (targets.length > 0) {
    await mkdir(OUT, { recursive: true });
    console.log(`Capturing ${targets.length} entr${targets.length === 1 ? "y" : "ies"}`);
    await capture(browser, server.url, desktop, `${desktop.width}`, targets);
    if (withNarrow) await capture(browser, server.url, NARROW, `${NARROW.width}`, targets);
    console.log(`Done in ${((Date.now() - started) / 1000).toFixed(1)}s`);
  }
} finally {
  await browser.close();
  server.stop?.();
}
