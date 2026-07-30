import { readdirSync } from "node:fs";
import { join } from "node:path";

const appRoot = join(process.cwd(), "src/app");

/**
 * Every route Next.js will actually build a page for: every folder under
 * src/app containing a page.tsx/page.ts, skipping private folders (`_home`),
 * dynamic segments (`[slug]`), and anything under an excluded prefix.
 *
 * Reading this from the filesystem keeps tests aligned with real routes
 * instead of a hand-maintained list that drifts as pages are added or removed.
 */
export function discoverPageRoutes(excludePrefixes: string[] = []): string[] {
  function walk(directory: string, segments: string[]): string[] {
    const routes: string[] = [];

    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
      if (entry.name.startsWith("[")) continue;

      routes.push(...walk(join(directory, entry.name), [...segments, entry.name]));
    }

    if (readdirSync(directory).some((name) => name === "page.tsx" || name === "page.ts")) {
      routes.push(`/${segments.join("/")}`);
    }

    return routes;
  }

  return walk(appRoot, [])
    .filter((path) => !excludePrefixes.some((prefix) => path === prefix || path.startsWith(`${prefix}/`)))
    .sort();
}
