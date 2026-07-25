import { expect, test } from "@playwright/test";

import { LIVE_ROUTES } from "../src/config/routes";

const ROUTE = "/services/smart-website-systems";

/** The approved plan, in order. Surfaces are asserted alongside so a section
    cannot quietly change background and break the navy/light rhythm. */
const APPROVED_SECTIONS = [
  ["sws-hero", "on-navy"],
  ["beyond-redesign", "on-paper"],
  ["deliberate-system", "on-mist"],
  ["decision-structure", "on-white"],
  ["arrival-context", "on-paper"],
  ["purposeful-content", "on-mist"],
  ["distinctive-presence", "on-navy"],
  ["proof-in-context", "on-paper"],
  ["built-work", "on-white"],
  ["useful-actions", "on-mist"],
  ["meaningful-measurement", "on-paper"],
  ["technical-foundation", "on-white"],
  ["working-system", "on-navy"],
  ["right-fit", "on-mist"],
  ["straight-answers", "on-white"],
  ["enquiry-review", "on-paper"],
] as const;

test("the unpublished Smart Website Systems route renders its approved structure", async ({
  page,
}) => {
  const jsErrors: string[] = [];
  const brokenResources: string[] = [];

  page.on("pageerror", (error) => jsErrors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400 && !response.url().includes("_rsc=")) {
      brokenResources.push(`${response.status()} ${response.url()}`);
    }
  });

  await page.emulateMedia({ reducedMotion: "reduce" });
  const response = await page.goto(ROUTE);

  expect(response?.status()).toBeLessThan(400);
  expect(jsErrors).toEqual([]);
  expect(brokenResources).toEqual([]);

  expect(LIVE_ROUTES.some((route) => route.path === ROUTE)).toBe(false);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(
    page.getByRole("heading", { level: 1, name: /Turn specialist work into a website/ }),
  ).toHaveCount(1);

  const sections = await page
    .locator("main#main > section")
    .evaluateAll((nodes) => nodes.map((node) => [node.id, node.className] as const));

  expect(sections.map(([id]) => id)).toEqual(APPROVED_SECTIONS.map(([id]) => id));
  for (const [index, [, surface]] of APPROVED_SECTIONS.entries()) {
    expect(sections[index]?.[1], `${sections[index]?.[0]} must use ${surface}`).toContain(surface);
  }
});

test("Smart Website Systems is absent from live navigation and the sitemap", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Smart Website Systems" })).toHaveCount(0);

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).not.toContain(ROUTE);
});

test("the discipline selector adds emphasis without hiding any summary", async ({ page }) => {
  await page.goto(ROUTE);

  const buttons = page.locator(".disc__list button");
  await expect(buttons).toHaveCount(5);
  await expect(buttons.first()).toHaveAttribute("aria-pressed", "true");

  // Every summary is readable whatever is selected — the control must never gate copy.
  const summaries = page.locator(".disc__list > li > p");
  await expect(summaries).toHaveCount(5);
  for (let index = 0; index < 5; index += 1) {
    await expect(summaries.nth(index)).toBeVisible();
    await expect(summaries.nth(index)).toHaveCSS("opacity", "1");
  }

  await buttons.nth(3).click();
  await expect(buttons.nth(3)).toHaveAttribute("aria-pressed", "true");
  await expect(buttons.first()).toHaveAttribute("aria-pressed", "false");
});

test("built work keeps list semantics inside its scroll container", async ({ page }) => {
  await page.goto(ROUTE);

  const rail = page.locator(".sws-work__rail");
  await expect(rail).toHaveAttribute("role", "group");
  await expect(rail).toHaveCSS("overflow-x", "auto");

  // The list must keep its implicit semantics; role=group on the <ul> would
  // strip listitem from every child, which is what axe caught.
  expect(await page.locator(".sws-work__track").getAttribute("role")).toBeNull();
  await expect(rail.getByRole("listitem")).toHaveCount(8);
  await expect(page.locator(".sws-work__track > li")).toHaveCount(8);
  await expect(page.locator(".sws-work__stamp").first()).toHaveText("Placeholder");
});

test("mobile composition is contained and reduced motion shows the finished state", async ({
  page,
}) => {
  await page.setViewportSize({ width: 400, height: 860 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(ROUTE);

  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.scrollWidth).toBe(dimensions.clientWidth);

  await expect(page.locator("html")).toHaveAttribute("data-sws-motion", "reduced");

  // Scenes resolve to their complete state rather than an armed, hidden one.
  await expect(page.locator(".wsc__station").first()).toHaveCSS("opacity", "1");
  await expect(page.locator(".rank__own")).toHaveCSS("opacity", "1");
  await expect(page.locator(".rmap li").first()).toHaveCSS("opacity", "1");
  await expect(page.locator(".stop__route-ghost")).toHaveCSS("opacity", "1");

  // The narrow authored artwork replaces the wide one rather than scaling it.
  await expect(page.locator(".hsc__svg--narrow")).toBeVisible();
  await expect(page.locator(".hsc__svg--wide")).toBeHidden();
  await expect(page.locator(".wsc__svg--narrow")).toBeVisible();
  await expect(page.locator(".wsc__svg--wide")).toBeHidden();
});
