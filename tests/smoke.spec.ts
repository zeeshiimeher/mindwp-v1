import { expect, test, type Locator } from "@playwright/test";

import { LIVE_ROUTES } from "../src/config/routes";

async function expectHorizontallyContained(child: Locator, parent: Locator) {
  const [childBox, parentBox] = await Promise.all([child.boundingBox(), parent.boundingBox()]);
  expect(childBox).not.toBeNull();
  expect(parentBox).not.toBeNull();
  expect(childBox!.x).toBeGreaterThanOrEqual(parentBox!.x - 1);
  expect(childBox!.x + childBox!.width).toBeLessThanOrEqual(
    parentBox!.x + parentBox!.width + 1,
  );
}

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

test("homepage follows the approved reference structure", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: /A smarter website/ })).toHaveCount(1);
  await expect(page.locator("header.site-header")).toHaveClass(/site-header--on-dark/);

  const sectionIds = await page
    .locator("main#main > section")
    .evaluateAll((sections) => sections.map((section) => section.id));
  expect(sectionIds).toEqual([
    "hero",
    "attention",
    "distance",
    "after-enquiry",
    "one-system",
    "beyond-website",
    "local-authority",
    "work",
    "context",
    "compounding",
    "fit",
    "review",
    "faq",
    "closing",
  ]);

  const attentionTablist = page.getByRole("tablist", { name: "Where existing attention arrives" });
  await expect(attentionTablist).toHaveAttribute("aria-orientation", "vertical");

  const expectAttentionTab = async (name: string) => {
    const tab = page.getByRole("tab", { name });
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(tab).toBeFocused();
  };

  const firstAttentionTab = page.getByRole("tab", { name: "The exact search" });
  await expect(firstAttentionTab).toHaveAttribute("aria-selected", "true");
  await firstAttentionTab.focus();
  await page.keyboard.press("ArrowRight");
  await expectAttentionTab("The local search");
  await expect(page.getByRole("tabpanel", { name: "The local search" })).toContainText(
    "Nearby and looking, not yet convinced.",
  );
  await page.keyboard.press("ArrowUp");
  await expectAttentionTab("The exact search");
  await page.keyboard.press("ArrowLeft");
  await expectAttentionTab("The remembered name");
  await page.keyboard.press("ArrowDown");
  await expectAttentionTab("The exact search");
  await page.keyboard.press("End");
  await expectAttentionTab("The remembered name");
  await page.keyboard.press("Home");
  await expectAttentionTab("The exact search");

  const systemTablist = page.getByRole("tablist", { name: "Support beyond the website" });
  await expect(systemTablist.getByRole("tab")).toHaveCount(5);
  const firstSystemTab = page.getByRole("tab", { name: "Missed calls" });
  await expect(firstSystemTab).toHaveAttribute("aria-selected", "true");
  await firstSystemTab.focus();
  await page.keyboard.press("ArrowDown");
  const enquiriesTab = page.getByRole("tab", { name: "New enquiries" });
  await expect(enquiriesTab).toHaveAttribute("aria-selected", "true");
  await expect(enquiriesTab).toBeFocused();
  await expect(page.getByRole("tabpanel", { name: "New enquiries" })).toContainText(
    "Forms and messages land in a shared inbox",
  );
  await page.keyboard.press("End");
  await expect(page.getByRole("tab", { name: "One record" })).toBeFocused();
  await page.keyboard.press("Home");
  await expect(firstSystemTab).toBeFocused();

  const compoundingTablist = page.getByRole("tablist", { name: "What compounds after launch" });
  await expect(compoundingTablist).toBeVisible();
  const proofTab = page.getByRole("tab", { name: "Proof builds" });
  await expect(proofTab).toHaveAttribute("aria-selected", "true");
  await proofTab.focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tab", { name: "Local presence" })).toBeFocused();
  await page.keyboard.press("End");
  await expect(page.getByRole("tab", { name: "Channels compound" })).toBeFocused();
  await page.keyboard.press("Home");
  await expect(proofTab).toBeFocused();

  const faqButton = page.getByRole("button", {
    name: "Do I have to take the supporting services?",
  });
  await expect(faqButton).toHaveAttribute("aria-expanded", "false");
  await faqButton.click();
  await expect(faqButton).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByRole("region", { name: "Do I have to take the supporting services?" }),
  ).toBeVisible();
  await expect(page.locator("footer")).toContainText(
    "Smart websites for established service businesses and expert-led businesses",
  );
});

test("system moments keep a single segment row at tablet width", async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const systemTabs = page.getByRole("tablist", { name: "Support beyond the website" });
  await expect(systemTabs).toBeVisible();
  const segmentTabs = systemTabs.getByRole("tab");
  await expect(segmentTabs).toHaveCount(5);
  const segmentTops = await segmentTabs.evaluateAll((elements) =>
    elements.map((element) => Math.round(element.getBoundingClientRect().top)),
  );
  expect(new Set(segmentTops).size).toBe(1);
  await expect(page.locator(".home-systems__stage")).toBeVisible();
});

test("homepage tab navigation remains usable on mobile", async ({ browser, baseURL }) => {
  const context = await browser.newContext({
    baseURL,
    hasTouch: true,
    viewport: { width: 400, height: 860 },
  });
  const page = await context.newPage();

  try {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const leakTabs = page.getByRole("tablist", { name: "Where existing attention arrives" });
    const compoundTabs = page.getByRole("tablist", { name: "What compounds after launch" });

    await expect(leakTabs).toBeVisible();
    await expect(compoundTabs).toBeVisible();
    await expect(leakTabs).toHaveAttribute("aria-orientation", "horizontal");

    const touchActions = await Promise.all(
      [leakTabs, compoundTabs].map((rail) =>
        rail.evaluate((element) => getComputedStyle(element).touchAction),
      ),
    );
    expect(touchActions).toEqual(["auto", "auto"]);

    const leakRailMetrics = await leakTabs.evaluate((element) => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    }));
    expect(leakRailMetrics.scrollWidth).toBeGreaterThan(leakRailMetrics.clientWidth);

    await expect(page.getByRole("tab", { name: "The exact search" })).toBeVisible();
    const missedCallsHead = page.getByRole("button", { name: "Missed calls", exact: true });
    await expect(missedCallsHead).toBeVisible();
    await expect(missedCallsHead).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("tab", { name: "Proof builds" })).toBeVisible();

    const lastLeakTab = page.getByRole("tab", { name: "The remembered name" });
    await lastLeakTab.tap();
    await expect(lastLeakTab).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel", { name: "The remembered name" })).toContainText(
      "They come back later, still undecided.",
    );

    const missedCallsBody = page.locator("#system-body-missed-calls");
    const reviewsBody = page.locator("#system-body-reviews");
    await expect(missedCallsBody).toBeVisible();
    expect(await missedCallsBody.getAttribute("inert")).toBeNull();
    await expect(reviewsBody).not.toBeVisible();
    expect(await reviewsBody.getAttribute("inert")).not.toBeNull();

    const reviewsHead = page.getByRole("button", { name: "Reviews", exact: true });
    await reviewsHead.tap();
    await expect(reviewsHead).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("region", { name: "Reviews", exact: true })).toContainText(
      "Good work ends quietly",
    );
    await expect(reviewsBody).toBeVisible();
    expect(await reviewsBody.getAttribute("inert")).toBeNull();
    await expect(missedCallsHead).toHaveAttribute("aria-expanded", "false");
    await expect(missedCallsBody).not.toBeVisible();
    expect(await missedCallsBody.getAttribute("inert")).not.toBeNull();

    const channelsTab = page.getByRole("tab", { name: "Channels compound" });
    await channelsTab.tap();
    await expect(channelsTab).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel", { name: "Channels compound" })).toContainText(
      "Search, referrals and ads",
    );

    const viewportWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const pageWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(pageWidth).toBe(viewportWidth);

    await page.setViewportSize({ width: 360, height: 800 });
    const narrowViewportWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const narrowPageWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(narrowPageWidth).toBe(narrowViewportWidth);
  } finally {
    await context.close();
  }
});

test("mobile tab compositions keep keyboard selection visible", async ({ page }) => {
  await page.setViewportSize({ width: 400, height: 860 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const leakTabs = page.getByRole("tablist", { name: "Where existing attention arrives" });
  const secondLeakTab = page.getByRole("tab", { name: "The local search" });
  await secondLeakTab.click();
  await page.keyboard.press("ArrowRight");
  const thirdLeakTab = page.getByRole("tab", { name: "The referral" });
  await expect(thirdLeakTab).toBeFocused();
  await expect(thirdLeakTab).toHaveAttribute("aria-selected", "true");
  await expectHorizontallyContained(thirdLeakTab, leakTabs);

  const accordionRows = page.locator(".home-systems__row-head");
  await expect(accordionRows).toHaveCount(5);
  const followUpHead = page.getByRole("button", { name: "Follow-up", exact: true });
  await followUpHead.click();
  await expect(followUpHead).toHaveAttribute("aria-expanded", "true");
  await expectHorizontallyContained(followUpHead, page.locator(".home-systems__accordion"));

  const compoundTabs = page.getByRole("tablist", { name: "What compounds after launch" });
  const localPresenceTab = page.getByRole("tab", { name: "Local presence" });
  await localPresenceTab.click();
  await page.keyboard.press("ArrowRight");
  const refinementsTab = page.getByRole("tab", { name: "Refinements stack" });
  await expect(refinementsTab).toBeFocused();
  await expect(refinementsTab).toHaveAttribute("aria-selected", "true");
  await expectHorizontallyContained(refinementsTab, compoundTabs);
});

test("mobile homepage content stays inside its sections", async ({ page }) => {
  await page.setViewportSize({ width: 400, height: 860 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const ledeBox = await page.locator(".home-hero__lede").boundingBox();
  expect(ledeBox).not.toBeNull();
  expect(ledeBox!.x + ledeBox!.width).toBeLessThanOrEqual(400);

  const [authorityBox, searchBox] = await Promise.all([
    page.locator("#local-authority").boundingBox(),
    page.locator(".home-authority__search").boundingBox(),
  ]);
  expect(authorityBox).not.toBeNull();
  expect(searchBox).not.toBeNull();
  expect(searchBox!.y + searchBox!.height).toBeLessThanOrEqual(
    authorityBox!.y + authorityBox!.height + 1,
  );

  for (const width of [400, 360]) {
    await page.setViewportSize({ width, height: 860 });
    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth).toBe(dimensions.clientWidth);
  }
});

test("homepage mobile journey progresses with scroll and respects reduced motion", async ({ page }) => {
  await page.setViewportSize({ width: 400, height: 860 });
  await page.goto("/");

  const journey = page.locator("[data-home-journey]");
  await expect(journey).toHaveCount(1);
  await journey.scrollIntoViewIfNeeded();
  await journey.evaluate((element) => {
    const documentBottom = window.scrollY + element.getBoundingClientRect().bottom;
    window.scrollTo({ top: documentBottom, behavior: "instant" });
  });
  await expect
    .poll(async () =>
      journey.evaluate((element) =>
        Number.parseFloat(getComputedStyle(element).getPropertyValue("--journey-progress")) || 0,
      ),
    )
    .toBeGreaterThan(0.9);

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect
    .poll(async () =>
      journey.evaluate((element) =>
        Number.parseFloat(getComputedStyle(element).getPropertyValue("--journey-progress")) || 0,
      ),
    )
    .toBe(1);
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

  for (const path of ["/", "/services/local-seo-authority"]) {
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

test("implemented local SEO route remains an unpublished review surface", async ({ page }) => {
  const response = await page.goto("/services/local-seo-authority");
  expect(response?.status()).toBe(200);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});

test("unpublished local SEO is absent from live navigation and sitemap", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Local SEO Authority" })).toHaveCount(0);

  const response = await request.get("/sitemap.xml");
  expect(response.ok()).toBe(true);
  expect(await response.text()).not.toContain("/services/local-seo-authority");
});
