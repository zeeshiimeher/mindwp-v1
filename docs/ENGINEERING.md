# MindWP engineering

This is the authority for stack, source ownership, rendering boundaries, routing, privacy, performance, and validation. Business facts come from [STRATEGY.md](./STRATEGY.md); visual decisions come from [DESIGN.md](./DESIGN.md).

## Stack

| Layer      | Decision                                                                   |
| ---------- | -------------------------------------------------------------------------- |
| Framework  | Next.js App Router, React, and TypeScript                                  |
| Rendering  | Server Components by default; small Client Components for real interaction |
| Styling    | Custom CSS: global foundation plus local page/component CSS                |
| Motion     | CSS for simple feedback; GSAP only in isolated signature interactions      |
| Fonts      | `next/font`, selected by the page art direction                            |
| Forms      | Server actions, Zod, Resend, and Cloudflare Turnstile                      |
| SEO        | Metadata API, JSON-LD helpers, sitemap, and robots                         |
| Tests      | TypeScript, ESLint, source checks, Playwright smoke/accessibility tests    |
| Deployment | Decide and validate the production adapter before deployment work          |

Tailwind is not part of the rebuilt visual architecture.

## Page implementation order

Use the simple phase boundary in [PAGE-WORKFLOW.md](./PAGE-WORKFLOW.md). In engineering terms, a major page moves through these responsibilities:

1. Confirm that meaning and content architecture are approved.
2. Build the complete desktop draft directly in semantic local source through the `mindwp-design-page` procedure, and present only its first qualifying `1640px` result for the user's visual decision.
3. After visual approval, complete responsive CSS, client-side islands, interaction states, motion, accessibility, performance and source cleanup.
4. Run full technical checks and the final rendered audit.
5. Promote repeated behavior or tokens only after the finished page proves them.

The desktop draft must be truthful and stable enough to render, but it is not required to complete production hardening before the user can judge the visual direction.

Do not create a component library or content schema before the homepage establishes the real patterns.

## Source shape

```text
src/
  app/          routes, layouts, metadata surfaces, sitemap, robots
  components/   stable shared behavior and proven repeated UI
  config/       environment, site identity, live navigation/routes
  content/      business capability and industry data
  lib/          contact, SEO, and focused utilities
  styles/       small global design foundation
docs/           standing authorities, page workflow/ledger, and optional active page records
.agents/        project procedural skill suite and routing metadata
```

Page-specific components, data, and CSS should live near the route until reuse is proven.

`_dev-reference/current-site/` is an isolated old-site copy. Keep it intact. Do not import from it, lint it, or treat it as current authority; inspect it only when the user explicitly requests comparison or reference work.

## Source of truth

- `docs/STRATEGY.md` owns business, offer, public language, claims, and IA intent.
- `docs/DESIGN.md` owns visual and CSS decisions.
- `docs/pages/<page>/page.md` is an optional approved-meaning or compact page-boundary record, not implemented-source authority.
- `docs/PAGE-WORKFLOW.md` owns the page process; `docs/PAGE-LEDGER.md` owns independent meaning, desktop-draft, visual-decision, production-finish, final-audit, publication, and reference states.
- `src/content/canonical.ts` owns typed capability and industry data used by code.
- `src/config/routes.ts` owns **live** navigation and sitemap routes only.
- `src/config/site.ts` owns public site identity and URL.
- `src/lib/cta/labels.ts` owns repeated CTA strings.
- `src/lib/contact/*` and `src/app/contact/actions.ts` own contact behavior.
- `src/lib/seo/*` owns metadata and structured-data builders.

Documentation explains intent. Current source and renders own implemented reality; the ledger owns approval and reference state. Comments must point to current documents only.

## App Router

Routes stay thin:

- metadata and JSON-LD;
- page-level data decisions;
- composition of local sections.

Do not publish empty placeholder routes. A future service or industry may exist in canonical content without an App Router page, navigation link, or sitemap entry.

Use Metadata API helpers, `next/link` for internal navigation, and `next/image` or explicit dimensions for public media. Add loading/error boundaries only where asynchronous behavior makes them useful.

## React boundaries

Server Components are the default.

Use Client Components for:

- real stateful interaction;
- browser APIs or measured layout;
- mobile navigation or disclosures;
- form state that cannot remain server-side;
- GSAP and pointer/scroll behavior.

Keep client boundaries at the interaction or section level. Do not convert a page to a Client Component for convenience.

Pass only required serialisable data into client islands and clean up observers, listeners, timelines, and animation contexts.

## Components

Prefer direct, local composition while a visual pattern is unique.

Share a component when:

- behavior repeats;
- accessibility or state logic is easy to get wrong;
- semantics are stable;
- sharing reduces code without flattening the visual design.

Avoid marketing-section factories, speculative prop APIs, barrel files used only for indirection, and type machinery that does not protect a real domain boundary.

## Data and types

Type stable domain facts: live routes, canonical capabilities, industry data, CTA labels, SEO inputs, environment variables, contact schemas, and server-action results.

Canonical content is descriptive data, not an artificial constraint on how many pages or sections must exist. Do not encode strategy slogans as tuple-length type laws.

Validate external and user-provided data at its boundary. Keep the marketing surface static unless real behavior requires otherwise.

## Forms and privacy

The contact action is the only public mutation until scope changes.

- Validate all submitted fields server-side.
- Protect against duplicate and spam submissions.
- Return useful field and recovery errors.
- Never log submitted personal data.
- Never claim delivery when transport is unavailable.
- Keep destination addresses, API keys, and private platform details in server-only environment variables.
- Do not place personal founder information in public config, client bundles, examples, error messages, metadata, or source-controlled defaults.

Public platform naming follows strategy. Private implementation details may be used in proposals, setup, and handover without becoming website positioning.

## Routing and SEO

Separate future content data from live routes.

Navigation and sitemap generation must use only built, approved pages. Tests should audit the same live route list rather than maintain a separate catalogue of placeholders.

During visual drafting, build at the intended route or the ordinary variant route the user explicitly names, but keep it out of live navigation, sitemap and deployment. Defer indexing, canonical and publication decisions until visual approval and release scope; do not require experiment routing infrastructure for a requested variant.

Structured data must reflect visible, supportable content. Never add invented ratings, reviews, prices, locations, results, or guarantees.

## Performance

Visual ambition must remain measured:

- identify and size the LCP asset;
- reserve media space;
- use responsive optimized images;
- keep JavaScript inside earned islands;
- load GSAP only where used;
- stop observers and animation work outside their useful lifecycle;
- avoid persistent filters, canvases, or loops without proven value;
- verify layout shift and interaction responsiveness on mobile.

## Validation

Use the verification method that matches the work:

- For deterministic behavior changes and bug fixes, establish the expected behavior with a focused automated test or reproducible check before editing when practical. Confirm that it fails for the expected reason, fix the root owner, then run the targeted check followed by the relevant full gates.
- For visual composition, CSS, responsive, interaction, or motion defects, use the affected rendered viewport and state as the failing evidence. Diagnose the source owner, correct it coherently, and recapture coupled widths or states rather than forcing subjective visual work into an artificial unit test.
- Base completion claims on fresh output from the current changes. Separate technical validation, rendered readiness, explicit visual acceptance, and publication approval.
- Use a fresh independent review for material workflow or infrastructure changes when its risk justifies the extra pass. Parallel investigation is useful only when scopes are independent and cannot overwrite shared state.

Documentation, workflow, skill, validator or tool changes:

```bash
git diff --check
pnpm check:skills
pnpm check:tools
```

Desktop visual drafting must at minimum load the intended route successfully and produce the required `1640px` full-page and section evidence. Full hardening gates are deliberately deferred until the user approves the visual draft.

Work claimed as production-finished, including source, dependency, route, component or CSS changes within the finishing phase:

```bash
pnpm check
pnpm build
pnpm test
```

Major visual changes also require the screenshot and section-crop review defined in `docs/DESIGN.md`.

If a required check fails, fix the cause or report the exact blocker. Do not treat a successful build as visual approval.
