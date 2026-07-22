# MindWP engineering authority

This document owns MindWP's repository-specific technical decisions: stack, source boundaries, semantic structure, CSS ownership, responsive implementation, accessibility, interaction states, motion lifecycle, privacy, routing, performance, tooling, and validation.

It does not decide business truth, public language, page meaning, visual hierarchy, or page-specific experience. Those decisions belong to [FOUNDATION.md](./FOUNDATION.md), [STRATEGY.md](./STRATEGY.md), [WRITING.md](./WRITING.md), the supplied page plan, and [DESIGN.md](./DESIGN.md). Execution skills apply these authorities; they do not replace them.

Current source and fresh renders own implemented reality. When implementation conflicts with a canonical document, report the drift to its owning authority rather than treating the source as a silent business or design decision.

## Stack and supported commands

| Layer      | Current decision                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------- |
| Framework  | Next.js App Router, React, and TypeScript                                                         |
| Rendering  | Server Components by default; bounded Client Components for real interaction or browser behaviour |
| Styling    | Custom CSS with a small global foundation and local page or component CSS                         |
| Motion     | CSS for simple state feedback; GSAP only in an isolated client boundary where its job warrants it |
| Fonts      | `next/font`, exposed through the shared typographic foundation                                    |
| Forms      | Server actions, Zod, Resend, and Cloudflare Turnstile verification                                |
| SEO        | Metadata API, JSON-LD helpers, sitemap, and robots                                                |
| Tests      | TypeScript, ESLint, structural source checks, and Playwright smoke and accessibility tests        |
| Deployment | The production adapter remains an explicit deployment decision                                    |

Tailwind is not part of the current architecture.

`package.json` owns the executable command definitions. The normal supported commands are:

| Command               | Purpose                                                                            |
| --------------------- | ---------------------------------------------------------------------------------- |
| `pnpm dev`            | Run the active site locally                                                        |
| `pnpm typecheck`      | Generate Next.js types and run TypeScript checks                                   |
| `pnpm lint`           | Run ESLint                                                                         |
| `pnpm check:skills`   | Validate repository skill structure                                                |
| `pnpm check:tools`    | Run Node tests for repository scripts                                              |
| `pnpm check`          | Run the current aggregate source and structural checks                             |
| `pnpm build`          | Produce a production Next.js build                                                 |
| `pnpm test`           | Run the Playwright suite against a production-like server                          |
| `pnpm capture:route`  | Capture a route into an external review directory                                  |
| `pnpm context:export` | Assemble an explicit derived orientation or focused context outside the repository |

Do not claim an undocumented or unavailable command as a required check. Lighthouse configuration is retained but is not a supported gate until its dependency and command are deliberately wired.

## Repository shape and source ownership

```text
src/
  app/          routes, layouts, metadata surfaces, sitemap, robots
  components/   stable shared behaviour and proven repeated UI
  config/       environment, public site identity, live navigation and routes
  content/      typed capability and industry data used by source
  lib/          contact, CTA, SEO, and focused utilities
  styles/       small global token, typography, layout, button, and form foundation
docs/           canonical project authorities and separately supplied page plans
.claude/skills/ specialised execution skills
scripts/        repository checks, context export, and capture capabilities
tests/          script, smoke, interaction, and accessibility coverage
```

Page-specific components, data, and CSS should stay near their route until reuse is proven. Archived audit inputs and any isolated old-site copy are preservation evidence, not importable application source or default implementation reference.

The implemented source roles are:

- `src/content/canonical.ts` owns typed capability and industry data consumed by code; it does not make every entry a live route.
- `src/config/routes.ts` owns live navigation and sitemap membership.
- `src/config/site.ts` owns public site identity and URL.
- `src/lib/cta/labels.ts` owns repeated CTA strings used by source.
- `src/lib/contact/*` and `src/app/contact/actions.ts` own contact validation and submission behaviour.
- `src/lib/seo/*` owns metadata and structured-data builders.
- `src/styles/tokens.css` owns stable global tokens and semantic aliases.
- The remaining global styles own proven shared typography, layout, button, form, and shell behaviour.

Canonical documents explain intended business, writing, planning, design, and engineering decisions. Source and renders show what a route currently implements. Neither a future content entry nor a documentation entry publishes a page.

## App Router and React boundaries

Keep route files focused on:

- metadata and JSON-LD;
- route-level data decisions;
- assembly of local page sections and interaction islands.

Do not publish empty placeholder routes. Use Metadata API helpers, `next/link` for internal navigation, and `next/image` or explicit intrinsic dimensions for public media. Add loading or error boundaries when asynchronous behaviour creates a real state to handle.

Server Components are the default. Use a Client Component only for real client state, browser APIs, measured layout, mobile navigation, disclosures, form state that cannot remain server-side, or pointer, scroll, and animation behaviour. Keep the boundary at the smallest useful interaction or section level, pass only required serialisable data, and clean up every observer, listener, media query, timer, and animation context it creates.

## Semantic structure and source order

Use one meaningful semantic structure across widths unless the content itself genuinely differs. Responsive CSS may change layout and visual order, but the DOM must retain a coherent reading, focus, and assistive-technology order.

- Use landmarks and headings that reflect the document, not the desired screenshot grouping.
- Use links for navigation and buttons for actions or state changes.
- Do not give static material arrows, lift, cursors, or control semantics that imply unavailable interaction.
- Keep information available without hover, animation, or pointer precision.
- Give meaningful media useful alternative text; keep decorative layers out of the accessibility tree.
- Do not apply control labels or roles to generic illustration merely to describe its appearance.
- Preserve visible focus, usable contrast, practical touch targets, keyboard operation, and clear open, selected, loading, success, and error states where they exist.

Fix semantic structure and source order before using CSS ordering or breakpoint patches to conceal a problem.

## Components, data, and types

Prefer direct local implementation while a visual or content structure is unique. Share a component when behaviour repeats, semantics are stable, accessibility or state logic is easy to get wrong, or sharing removes duplication without flattening page-specific design intent.

Avoid marketing-section factories, speculative prop APIs, barrel files used only for indirection, and type machinery that does not protect a real domain boundary.

Type stable domain facts such as live routes, canonical capabilities, industry data, CTA labels, SEO inputs, environment variables, contact schemas, and server-action results. Canonical content is descriptive data, not a constraint on page, section, or object counts. Validate external and user-provided data at its boundary.

## CSS ownership

Use the narrowest durable owner:

| Owner                          | Responsibility                                                                                       |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Global tokens                  | Stable palette, surface, type, spacing, container, radius, shadow, easing, duration, and focus roles |
| Global typography and layout   | Adopted shared grammar and reusable structural roles                                                 |
| Shared component CSS           | Proven repeated behaviour, semantics, and states                                                     |
| Page CSS                       | Page-specific responsive treatment and local visual rules                                            |
| Section or local component CSS | Isolated behaviour or a bounded reusable part                                                        |

The shared `.section`, `.container`, typographic, eyebrow, and introduction roles are available foundations, not compulsory page anatomy. A page may use several containers, full-width surfaces, local breakouts, or a simpler structure while retaining the shared system.

Prefer class selectors with low, predictable specificity. Name classes for a durable role rather than a transient position. Use modifiers for real variants, avoid incidental DOM-depth selectors, and keep `!important` for the rare case where an external or deliberately dominant layer requires it. Page CSS must not reach into unrelated shared-shell behaviour.

Common ownership rules:

- a parent flow owns spacing between siblings, normally through `gap`;
- a section owns pacing between its direct content groups;
- a container owns width and inline inset;
- global semantic roles own ordinary typography;
- page CSS owns justified local treatment;
- component CSS owns repeated isolated behaviour;
- overflow belongs on the smallest decorative or intentionally scrollable layer that needs it.

Do not hide horizontal overflow on the page merely to mask incorrect geometry. Remove wrappers, overrides, duplicate declarations, and breakpoint patches only when they have no remaining visible or behavioural job.

Promote a page-local token, selector, or component only when a genuine repeated role or explicit project decision supports it. Recurrence across two accepted pages alone is not enough.

## Layout and responsive implementation

Use intrinsic Grid and Flexbox behaviour before accumulating breakpoint overrides. `minmax()`, flexible tracks, wrapping, `clamp()`, logical properties, and content-aware sizing should carry ordinary interpolation.

Breakpoints belong where content, geometry, interaction, or readability fails—not to a universal device list. Establish credible narrow-width source order and behaviour while an implementation remains adaptable. At smaller widths, simplify supporting decoration, crop, layering, density, or local arrangement while preserving the accepted meaning and priority defined by Design and the page plan.

Natural linear stacking is valid when the relationship is linear. It is not a sufficient repair when it destroys comparison, sequence, causality, proof association, ownership, or priority. Fix the owning structure or responsive rule instead of converting every fragment into a uniform card.

Containers are alignment roles, not visual cages. Full-width and contained layers may coexist when each has a clear technical owner. Avoid absolute positioning for ordinary document flow; when overlap or layering is intentional, reserve space, define the containing block, test text growth, and confine clipping and stacking contexts.

Exact breakpoints, grids, and responsive transformations remain local unless adopted as a global source role. Capture viewport presets are review conveniences, not implementation requirements.

## Interaction, motion, and reduced motion

Implement every state that the real interaction exposes: hover, focus-visible, active, open, selected, keyboard, touch, loading, success, and error as applicable. Keep hover enhancement subordinate to a complete non-hover state, and do not animate non-interactive material as though it were actionable.

Design owns the communication purpose of interaction and motion. Engineering owns the mechanism, state correctness, lifecycle, accessibility, and performance:

- use CSS transitions for simple local feedback;
- load GSAP only inside the client island that uses it;
- scope animation targets so page-local behaviour cannot affect the shared shell;
- clean up timelines, observers, listeners, media-query branches, and delayed work;
- stop work when its target is absent or outside its useful lifecycle;
- ensure the static result contains the complete meaning;
- make `prefers-reduced-motion` resolve to the same information and a stable usable state.

Do not use motion to conceal loading, ordering, layout, or hierarchy defects.

## Forms and privacy

The contact action is the only public mutation until the implemented scope changes.

- Validate submitted data server-side with the canonical contact schema.
- Verify anti-spam tokens on the server and protect against duplicate submissions.
- Return useful field, delivery, and recovery errors without exposing private configuration.
- Never log submitted personal data.
- Never claim successful delivery when transport is unavailable or fails.
- Keep destination addresses, credentials, API keys, and private platform details in server-only environment variables.
- Do not place personal founder information in public config, client bundles, examples, errors, metadata, or source-controlled defaults.

Public platform naming follows Strategy and Writing. Private implementation details may support setup, proposals, and handover without becoming public positioning.

## Routing, SEO, and publication

Separate future content data from live routes. Navigation and sitemap generation must use the same built, explicitly approved route list rather than parallel catalogues of placeholders.

A draft route, variant, page plan, or completed implementation does not imply navigation, sitemap, indexing, canonical, deployment, or publication approval. Change those surfaces only when the task explicitly includes release work.

Internal links and fragment targets must resolve correctly from every route where they appear; do not assume that a Homepage-relative fragment works from a nested page.

Structured data must reflect visible, supportable content. Never add invented ratings, reviews, prices, locations, results, guarantees, or service capabilities. Metadata and schema should use the shared builders where their semantics fit rather than duplicating route-local implementations.

## Performance

Keep visual ambition measurable:

- identify and size the likely LCP asset;
- reserve media space and prevent avoidable layout shift;
- use responsive optimised images and appropriate loading priority;
- keep JavaScript inside earned client islands;
- load GSAP only where used;
- stop observers and animation work outside their useful lifecycle;
- avoid persistent filters, canvases, large raster layers, or render loops without proven value;
- test text growth, interaction responsiveness, and layout stability at narrow widths.

Treat large page components or CSS files as diagnosis prompts, not automatic refactor targets. Split code when it creates a clearer ownership boundary, reusable behaviour, safer state, or more maintainable testing—not merely to reduce line count.

## Accepted implementation evidence

Homepage and Local SEO are accepted quality, family-resemblance, and implementation evidence. Their durable engineering lessons are already distilled into this authority. They are not default reading, templates, pattern libraries, or sources of universal breakpoints, grids, animation choreography, section anatomy, or page-local CSS devices.

Inspect either implementation only when directly editing or auditing it, answering a named implementation question, diagnosing a specific regression, or responding to an explicit user request. A technique may transfer when the new implementation independently needs it. Availability or recurrence alone does not make it global.

## Validation and rendered evidence

Match validation to the risk and the kind of claim:

- For deterministic behaviour and bug fixes, establish a focused failing test or reproducible check when practical, correct the root owner, then run the relevant wider checks.
- For CSS, responsive, interaction, or motion defects, use the affected viewport and state as evidence. Repair the owning structure or rule and recapture coupled widths or states.
- For semantics and accessibility, combine source inspection with keyboard, state, and automated checks appropriate to the affected surface.
- For documentation, skill, exporter, validator, or script work, run structural tests and reference checks without enforcing prose or design doctrine.
- Base completion claims on fresh output. Record unsupported or unavailable checks separately from failures introduced by the change.

Repository-authority, skill, and tool changes normally require:

```bash
git diff --check
pnpm check:skills
pnpm check:tools
```

Application source, dependency, route, component, or CSS changes normally require the relevant focused check followed by:

```bash
pnpm check
pnpm build
pnpm test
```

Select the rendered evidence the change needs. The capture tool is an optional capability:

```bash
pnpm capture:route -- /route /tmp/mindwp-route-review
pnpm capture:route -- --full /route /tmp/mindwp-route-risk-review
pnpm capture:route -- --section proof /route /tmp/mindwp-proof-review
```

Capture output must stay outside the repository. The default desktop/mobile pair, the wider matrix, reduced-motion captures, and section crops are convenient options rather than mandatory packets. The current all-section and targeted-section modes use direct `main > section` elements as their capture boundary; that DOM boundary is not proof that every planned meaning needs its own visible section or crop.

Use a live browser when static images cannot verify focus, keyboard, touch, disclosure, form, motion, or state behaviour. A successful check or build does not establish visual acceptance, and visual readiness does not imply publication approval.
