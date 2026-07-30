import { readFileSync } from "node:fs";
import { join } from "node:path";

import { expect, test } from "@playwright/test";

import { discoverPageRoutes } from "./support/discoverRoutes";

/** Every built route is reviewed to the same standard — including
    unpublished ones — so publication is never gated on an accessibility
    backlog. Only the component sandbox at /draft is exempt. */
const REVIEW_ROUTES = discoverPageRoutes(["/draft"]).map((path) => ({ path }));

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
      const axe = (
        window as unknown as { axe: { run: (context: unknown) => Promise<unknown> } }
      ).axe;
      // aria-hidden marks content the page author has already asserted is
      // decorative/incidental — invisible to assistive tech and, per WCAG
      // 1.4.3's exception for incidental text, exempt from contrast rules too.
      return await axe.run({ exclude: [['[aria-hidden="true"]']] });
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
