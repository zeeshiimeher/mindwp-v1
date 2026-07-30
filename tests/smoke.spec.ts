import { expect, test } from "@playwright/test";

import { LIVE_ROUTES } from "../src/config/routes";
import { discoverPageRoutes } from "./support/discoverRoutes";

/** Every built route except the /draft component sandbox, so navigation and
    publication checks below cover new pages automatically. */
const BUILT_ROUTES = discoverPageRoutes(["/draft"]);

for (const route of LIVE_ROUTES) {
  test(`${route.path} renders cleanly`, async ({ page }) => {
    const jsErrors: string[] = [];
    const brokenResources: string[] = [];

    page.on("pageerror", (error) => jsErrors.push(error.message));
    page.on("response", (response) => {
      if (response.status() >= 400 && !response.url().includes("_rsc=")) {
        brokenResources.push(`${response.status()} ${response.url()}`);
      }
    });

    const response = await page.goto(route.path);
    expect(response?.status(), `HTTP status for ${route.path}`).toBeLessThan(400);
    expect(jsErrors, `uncaught JS errors on ${route.path}`).toEqual([]);
    expect(brokenResources, `broken resources on ${route.path}`).toEqual([]);
  });
}

test("skip link is the first focusable element", async ({ page }) => {
  await page.goto("/");
  const skipLink = page.getByRole("link", { name: "Skip to content" });
  await expect(skipLink).not.toBeInViewport();
  await page.keyboard.press("Tab");
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeInViewport();
});

test("homepage has no horizontal overflow on narrow viewports", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  for (const width of [400, 360]) {
    await page.setViewportSize({ width, height: 860 });
    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth, `overflow at ${width}px`).toBe(dimensions.clientWidth);
  }
});

test("homepage motion initializes without hiding reduced-motion content", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-home-motion", "active");

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-home-motion", "reduced");

  const hiddenRevealItemCount = await page
    .locator(
      "[data-home-hero-item], [data-home-hero-artifact], [data-home-sequence-item], [data-home-stagger-item], [data-home-fade]",
    )
    .evaluateAll(
      (items) =>
        items.filter(
          (item) =>
            getComputedStyle(item).opacity === "0" ||
            getComputedStyle(item).visibility === "hidden",
        ).length,
    );
  expect(hiddenRevealItemCount).toBe(0);
});

test("shared navigation fragment links resolve on every rendered route", async ({ page }) => {
  await page.goto("/");
  const homeIds = new Set(
    await page.locator("[id]").evaluateAll((elements) => elements.map((element) => element.id)),
  );

  for (const path of BUILT_ROUTES) {
    await page.goto(path);
    const pageIds =
      path === "/"
        ? homeIds
        : new Set(
            await page
              .locator("[id]")
              .evaluateAll((elements) => elements.map((element) => element.id)),
          );

    const hrefs = await page
      .locator("header.site-header a, footer a")
      .evaluateAll((anchors) =>
        anchors
          .map((anchor) => anchor.getAttribute("href") ?? "")
          .filter((href) => href.includes("#")),
      );
    expect(hrefs.length, `fragment links present on ${path}`).toBeGreaterThan(0);

    for (const href of hrefs) {
      const [base, fragment] = href.split("#");
      if (base !== "" && base !== "/") continue;
      const targetIds = base === "/" ? homeIds : pageIds;
      expect(targetIds.has(fragment), `${href} must resolve from ${path}`).toBe(true);
    }
  }
});

test("routes outside the live registry stay unpublished", async ({ page, request }) => {
  const livePaths = new Set(LIVE_ROUTES.map((route) => route.path));
  const unpublishedPaths = BUILT_ROUTES.filter((path) => !livePaths.has(path));
  expect(unpublishedPaths.length, "at least one unpublished route to review").toBeGreaterThan(0);

  const sitemap = await (await request.get("/sitemap.xml")).text();

  for (const path of unpublishedPaths) {
    const response = await page.goto(path);
    expect(response?.status(), `HTTP status for ${path}`).toBe(200);
    await expect(
      page.locator('meta[name="robots"]'),
      `robots meta for ${path}`,
    ).toHaveAttribute("content", /noindex/);

    const navHrefs = await page
      .locator("header.site-header a, footer a")
      .evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute("href") ?? ""));
    expect(navHrefs, `${path} must be absent from site navigation`).not.toContain(path);

    expect(sitemap, `${path} must be absent from sitemap.xml`).not.toContain(path);
  }
});
