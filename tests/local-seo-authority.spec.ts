import { expect, test } from "@playwright/test";

import { LIVE_ROUTES } from "../src/config/routes";

const ROUTE = "/services/local-seo-authority";

test("the unpublished Local SEO production route renders its approved structure", async ({
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
  await expect(page.getByRole("heading", { level: 1, name: /Your busiest street/ })).toHaveCount(1);
  await expect(page.locator("header.site-header")).toHaveClass(/site-header--on-dark/);
  await expect(page.locator("html")).toHaveAttribute("data-lseo-motion", "reduced");

  const sectionIds = await page
    .locator("main#main > section")
    .evaluateAll((sections) => sections.map((section) => section.id));
  expect(sectionIds).toEqual([
    "hero",
    "decision",
    "kept-promises",
    "operating-model",
    "search-intent",
    "consistency",
    "visible-proof",
    "foundation",
    "ongoing",
    "scope",
    "review",
    "fit",
    "faq",
    "closing",
  ]);

  await expect(page.getByText("Illustrative framework", { exact: true })).toBeVisible();
  await expect(page.getByText(/Explained everything before starting/)).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Request a Visibility & Enquiry Review", exact: true }),
  ).toHaveCount(2);
  await expect(
    page.getByRole("link", { name: "Request a Review", exact: true }),
  ).toHaveCount(2);
});

test("Local SEO intent tabs and FAQ are keyboard and pointer operable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(ROUTE);

  const homeServices = page.getByRole("tab", { name: "Home services" });
  const clinics = page.getByRole("tab", { name: "Specialist clinics" });
  await expect(clinics).toHaveAttribute("aria-selected", "true");

  await homeServices.click();
  await expect(homeServices).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel", { name: "Home services" })).toContainText(
    "boiler replacement nearby",
  );

  await page.keyboard.press("ArrowRight");
  await expect(clinics).toBeFocused();
  await expect(clinics).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel", { name: "Specialist clinics" })).toContainText(
    "dental implants near New Malden",
  );

  const secondFaq = page.locator("#faq details").nth(1);
  await expect(secondFaq).not.toHaveAttribute("open", "");
  await secondFaq.locator("summary").click();
  await expect(secondFaq).toHaveAttribute("open", "");
  await expect(secondFaq).toContainText("Not automatically");
});

test("Local SEO motion and interaction targets follow the page semantics", async ({ page }) => {
  await page.setViewportSize({ width: 1640, height: 1100 });
  await page.goto(ROUTE);

  await expect(page.locator("html")).toHaveAttribute("data-lseo-motion", "active");
  await expect(page.locator("main .container--content")).toHaveCount(0);
  await expect(page.locator("[data-lseo-reveal-item]")).toHaveCount(0);
  await expect(page.locator("[data-lseo-hero-sequence] > [data-lseo-sequence-item]")).toHaveCount(
    5,
  );
  await expect(
    page.locator("[data-lseo-hero-artifact-sequence] > [data-lseo-hero-artifact-item]"),
  ).toHaveCount(4);
  await expect(page.locator("#consistency [data-lseo-stagger-item]")).toHaveCount(5);
  await expect(page.locator("#scope [data-lseo-stagger-item]")).toHaveCount(8);

  const homeServices = page.getByRole("tab", { name: "Home services" });
  await homeServices.click();
  await expect(page.locator(".lseo-intent__panel")).toHaveCSS("animation-name", "none");
  await expect(page.locator("[data-lseo-tab-copy]")).toHaveCSS(
    "animation-name",
    "lseo-tab-copy-in",
  );
  await expect(page.locator("[data-lseo-tab-card]").first()).toHaveCSS(
    "animation-name",
    "lseo-tab-card-in",
  );

  const intentCard = page.locator("[data-lseo-tab-card]").first();
  await intentCard.scrollIntoViewIfNeeded();
  await page.waitForTimeout(450);
  await intentCard.hover();
  await expect(intentCard).not.toHaveCSS("transform", "none");

  const heading = page.locator(".lseo-hero h1");
  const desktopSize = await heading.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).fontSize),
  );
  await page.setViewportSize({ width: 400, height: 860 });
  const mobileSize = await heading.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).fontSize),
  );
  expect(mobileSize).toBeLessThan(desktopSize);
  expect(mobileSize).toBeLessThanOrEqual(48);
});

test("Local SEO mobile composition is contained and reduced motion is complete", async ({
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

  await expect(page.locator("html")).toHaveAttribute("data-lseo-motion", "reduced");
  await expect(page.locator(".lseo-intent__panel")).toHaveCSS("animation-name", "none");
  await expect(page.locator("[data-lseo-tab-copy]")).toHaveCSS("animation-name", "none");
  await expect(page.locator("[data-lseo-tab-card]").first()).toHaveCSS("animation-name", "none");
  await expect(page.locator("[data-lseo-sequence-item]").first()).toHaveCSS("transform", "none");
  await expect(page.locator(".lseo-tending__line-fill")).toHaveCSS("transform", "none");
  await expect(page.locator(".lseo-consistency__cards > li")).toHaveCount(5);
  await expect(page.locator(".lseo-scope__list > li")).toHaveCount(8);
});
