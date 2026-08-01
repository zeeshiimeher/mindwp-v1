import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

// The repository root, one level above this application.
const repositoryRoot = fileURLToPath(new URL("..", import.meta.url));

/**
 * Development and production write to different directories.
 *
 * They shared `.next` originally, which meant `pnpm build` deleted the running
 * dev server's own output from under it and left the session serving 500s until
 * it was restarted. Splitting the directory removes the interference entirely:
 * a production build can run at any time without touching a live dev session.
 *
 * `distDir` and the NODE_ENV values are both documented Next.js behaviour —
 * `next dev` sets `development`, `next build` and `next start` set `production`.
 * Selecting on NODE_ENV means a bare `next dev` is still isolated even when it
 * is run outside the package scripts. `LIBRARY_DIST_DIR` stays available as an
 * explicit override for tooling that needs to name the directory itself.
 */
const distDir =
  process.env.LIBRARY_DIST_DIR ?? (process.env.NODE_ENV === "development" ? ".next-dev" : ".next");

/**
 * Private section laboratory. This application is deliberately separate from the
 * MindWP website: it has its own dependencies, its own lockfile, its own port and
 * its own build output. It is never deployed, so this config stays minimal.
 *
 * `X-Robots-Tag` is belt-and-braces only. The real guarantee is structural — the
 * library is not a route of the website and is not deployed at all.
 */
const nextConfig: NextConfig = {
  devIndicators: false,
  distDir,

  /**
   * Turbopack's filesystem root, stated explicitly.
   *
   * Two lockfiles exist above this directory, so Next would otherwise infer this
   * value and warn every run. It must be the repository root and NOT /library:
   * styles/library.css imports the website's tokens.css and typography.css by
   * relative path, and PostCSS reads them through Turbopack's virtual
   * filesystem. Rooted at /library those reads are rejected —
   * `FileSystemPath("").join("../src/styles/tokens.css") leaves the filesystem
   * root` — which fails `next dev` outright.
   *
   * This is a filesystem boundary, not an application boundary. The library is
   * still a separate application: its own package.json, lockfile, node_modules,
   * build output and port. It reads exactly two shared CSS files and no
   * JavaScript from the website.
   */
  turbopack: { root: repositoryRoot },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
