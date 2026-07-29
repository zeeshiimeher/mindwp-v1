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

  await expect(
    page.getByRole("heading", { level: 1, name: /Smart websites and connected enquiry systems/ }),
  ).toHaveCount(1);
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

  // Existing Attention is now a six-cell lattice of peers, not a tab set: all
  // six read at once and none of them is a control.
  await expect(page.locator("#attention .att__cell")).toHaveCount(6);
  await expect(page.locator("#attention")).toContainText("The exact search");
  await expect(page.locator("#attention")).toContainText("The remembered name");
  await expect(page.locator("#attention").getByRole("tab")).toHaveCount(0);

  // New enquiries leads the set: the connected services open on the moment the
  // website itself produces, not on phone answering.
  const systemTablist = page.getByRole("tablist", { name: "Connected services" });
  await expect(systemTablist.getByRole("tab")).toHaveCount(5);
  const firstSystemTab = page.getByRole("tab", { name: "New enquiries" });
  await expect(firstSystemTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel", { name: "New enquiries" })).toContainText(
    "Forms and messages land in a shared inbox",
  );
  await firstSystemTab.focus();
  await page.keyboard.press("ArrowDown");
  const missedCallsTab = page.getByRole("tab", { name: "Missed calls" });
  await expect(missedCallsTab).toHaveAttribute("aria-selected", "true");
  await expect(missedCallsTab).toBeFocused();
  await page.keyboard.press("End");
  await expect(page.getByRole("tab", { name: "Reviews" })).toBeFocused();
  await page.keyboard.press("Home");
  await expect(firstSystemTab).toBeFocused();

  // Compounding is a composition, not a third tab set: the website answer and
  // all three extensions read at once, with no control to operate. The three
  // are annotations on the answer, so the count is deliberately 3 and not 4.
  await expect(page.locator("#compounding .cmpd__answer")).toHaveCount(1);
  await expect(page.locator("#compounding .cmpd__extensions li")).toHaveCount(3);
  await expect(page.locator("#compounding blockquote")).toContainText(
    "Are these the right people to help me",
  );
  // The speaker attribution is load-bearing: without it the question reads as
  // the page addressing the visitor rather than quoting their customer.
  await expect(page.locator("#compounding figcaption")).toHaveText(
    "Your customer, before they get in touch",
  );
  await expect(page.locator("#compounding")).toContainText(
    "Demonstration wording — the kind of client-site and enquiry copy MindWP produces, not a client's live system.",
  );
  await expect(page.locator("#compounding")).toContainText(
    "None requires a website rebuild or the purchase of every other service.",
  );
  await expect(page.locator("#compounding").getByRole("tab")).toHaveCount(0);

  const faqButton = page.getByRole("button", {
    name: "Do I have to take everything?",
  });
  await expect(faqButton).toHaveAttribute("aria-expanded", "false");
  await faqButton.click();
  await expect(faqButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("region", { name: "Do I have to take everything?" })).toBeVisible();
  // The footer carries the approved positioning line, not the meta description.
  await expect(page.locator("footer")).toContainText(
    "Website and enquiry systems for clinics and expert-led businesses",
  );
});

test("system moments keep a single segment row at tablet width", async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const systemTabs = page.getByRole("tablist", { name: "Connected services" });
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

    await expect(page.locator("#attention .att__cell")).toHaveCount(6);

    await expect(page.locator("#attention")).toContainText("The exact search");
    const newEnquiriesHead = page.getByRole("button", { name: "New enquiries", exact: true });
    await expect(newEnquiriesHead).toBeVisible();
    await expect(newEnquiriesHead).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#compounding")).toContainText("The website answers it");

    await expect(page.locator("#attention")).toContainText("The remembered name");

    const newEnquiriesBody = page.locator("#system-body-new-enquiries");
    const reviewsBody = page.locator("#system-body-reviews");
    await expect(newEnquiriesBody).toBeVisible();
    expect(await newEnquiriesBody.getAttribute("inert")).toBeNull();
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
    await expect(newEnquiriesHead).toHaveAttribute("aria-expanded", "false");
    await expect(newEnquiriesBody).not.toBeVisible();
    expect(await newEnquiriesBody.getAttribute("inert")).not.toBeNull();

    await expect(page.locator("#compounding")).toContainText(
      "Continues the step the page names",
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

  // The attention lattice has no controls to keep visible — the cells must
  // simply stay inside their column.
  const cells = page.locator("#attention .att__cell");
  await expect(cells).toHaveCount(6);
  await expectHorizontallyContained(cells.last(), page.locator("#attention .att"));

  const accordionRows = page.locator(".home-systems__row-head");
  await expect(accordionRows).toHaveCount(5);
  const followUpHead = page.getByRole("button", { name: "Follow-up", exact: true });
  await followUpHead.click();
  await expect(followUpHead).toHaveAttribute("aria-expanded", "true");
  await expectHorizontallyContained(followUpHead, page.locator(".home-systems__accordion"));

  // Compounding has no controls to keep visible — the answer and its
  // annotations must simply stay inside their column at full body size.
  const extensions = page.locator("#compounding .cmpd__extensions li");
  await expect(extensions).toHaveCount(3);
  await expectHorizontallyContained(extensions.last(), page.locator("#compounding .cmpd"));
  await expectHorizontallyContained(
    page.locator("#compounding .cmpd__answer"),
    page.locator("#compounding .cmpd"),
  );
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
