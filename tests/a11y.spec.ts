import { readFileSync } from "node:fs";
import { join } from "node:path";

import { expect, test } from "@playwright/test";

import { LIVE_ROUTES } from "../src/config/routes";

const REVIEW_ROUTES = [
  ...LIVE_ROUTES,
  { path: "/services/local-seo-authority", changeFrequency: "monthly", priority: 0 },
] as const;

const axeSource = readFileSync(join(process.cwd(), "node_modules/axe-core/axe.min.js"), "utf8");

type AxeViolation = {
  id: string;
  impact: string | null;
  help: string;
  nodes: { target: string[]; failureSummary: string }[];
};
type AxeResult = { violations: AxeViolation[] };

for (const route of REVIEW_ROUTES) {
  test(`a11y: ${route.path} has no serious or critical violations`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route.path);
    await page.addScriptTag({ content: axeSource });

    const result = (await page.evaluate(async () => {
      const axe = (window as unknown as { axe: { run: (context: Document) => Promise<unknown> } })
        .axe;
      return await axe.run(document);
    })) as AxeResult;

    const serious = result.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );
    expect(
      serious.map((violation) => ({
        id: violation.id,
        help: violation.help,
        nodes: violation.nodes.map((node) => ({
          target: node.target,
          failureSummary: node.failureSummary,
        })),
      })),
    ).toEqual([]);
  });
}
