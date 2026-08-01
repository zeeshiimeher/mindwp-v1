# Library architecture

The approved architecture for the MindWP section library. Settled by Zeeshan; recorded here so later
work does not reopen it.

This file is library-local planning. It is not a website design or engineering authority.
[docs/DESIGN.md](../../docs/DESIGN.md) and [docs/ENGINEERING.md](../../docs/ENGINEERING.md) keep that
authority for the live website, and nothing here changes them.

## Purpose

A private laboratory for building full-section React components properly, at real scale, in a real
browser — a set selected from a researched concept longlist, sized by the quality of the set rather
than to a target number.

Its output is visual and implementation reference: a catalogue of section compositions, spatial
behaviours and interactions that can be looked at, scrolled through, and judged. It exists so that
section design decisions for MindWP pages can be made against built evidence rather than
imagination.

## Approved architecture

`/library/` becomes a **separate Next.js application** — React, TypeScript, App Router — with its own
`package.json` and its own dependencies.

It is **not** added to the root pnpm workspace initially. It is installed and run on its own.

### As built

The foundation now exists and runs. Recorded here as fact, not as implementation documentation — the
application code is the authority on itself.

- Standalone Next.js application with React, TypeScript and the App Router.
- **Tailwind mapped to MindWP's CSS variables**, so the library styles in the real design system
  rather than a parallel one.
- **Library-local CSS** alongside it for work a utility API would flatten.
- **GSAP with `useGSAP`**, so timelines are scoped and reverted by the component lifecycle.
- **Live imports of the website's `tokens.css` and `typography.css`**, with the same `next/font`
  setup — the cross-root CSS import that the repository audit flagged as unverified now works.
- **A catalogue index plus an isolated route per section.**
- **Local linting and formatting**, independent of the root pipeline.
- **Separate development and production outputs**, so nothing collides with the website's.

The catalogue currently holds only `system` entries — technical checks that the foundation behaves.
The section collection has not started, and the registry's `tags` field is a deliberate placeholder
until the researched taxonomy lands.

## Styling and motion

- **Tailwind CSS** for fast visual composition. This is a library-local exception; the live MindWP
  website remains on handwritten CSS for now.
- **Library-local CSS** wherever CSS is the better tool — unusual composition, complex responsive
  behaviour, anything a utility API would flatten.
- **GSAP** for justified animation, including scroll, sticky, pinned and horizontal experiences. GSAP
  is used where its job warrants it, not as a default.

Neither Tailwind nor GSAP is compulsory for a section. A static, CSS-only section is a legitimate
and often better answer.

## Relationship with MindWP tokens and typography

The library reuses MindWP's existing foundations where practical, so that what is built here is
judged in the real design system rather than in a substitute one:

- `src/styles/tokens.css` — palette, surfaces, spacing, radii, elevation, easings, durations.
- `src/styles/typography.css` — display and body scales, optical tracking, Fraunces variation axes.
- The `next/font` setup from `src/app/layout.tsx`, so `--font-fraunces` and `--font-inter` resolve
  and the type scale renders as it does on the website. Being a Next.js application is what makes
  this possible.

**Tailwind maps to those variables rather than creating a second visual system.** A token bridge
points Tailwind's colour, spacing, radius, easing and duration scales at the existing CSS variables.
The display and body type scales stay in `typography.css`; they carry fluid clamps, per-step tracking
and variation axes that a utility scale would flatten.

The library never edits shared CSS. Library-only rules stay in the library.

## Why not a workspace package initially

Registering `/library/` in `pnpm-workspace.yaml` would put its dependencies in the root lockfile and
make CI's `pnpm install --frozen-lockfile` install the whole laboratory on every run of the website's
pipeline. Keeping it out costs a second `node_modules` and keeps the website's install, lockfile and
CI completely untouched.

This is reversible. Revisit only if duplicate `node_modules` becomes a real problem.

## Inspiration library, not a production system

The library is **primarily a visual inspiration and implementation-reference catalogue**. It is not a
mandatory production component system, and no website page is obliged to use anything in it.

A library component does not have to move directly into the live website. Selected ideas may later be
copied, adapted, or rebuilt from scratch in handwritten CSS for a page that needs them. Rebuilding is
an expected and acceptable outcome, not a failure — the value delivered here is the design decision
and the proven composition, not the file.

Because of that, Tailwind in the library does not imply Tailwind on the website, and the two styling
approaches are allowed to differ.

## Production and deployment separation

The library stays outside the live website, its navigation, its sitemap, indexing, deployment and the
root CI. This is structural rather than procedural:

- it sits outside `src/`, so the website's `next build` never compiles it;
- it is absent from `pnpm-workspace.yaml`, so root `pnpm install --frozen-lockfile` never installs it;
- `eslint.config.mjs`, `tsconfig.json` and `.prettierignore` already exclude `library`;
- it is never added to `src/config/routes.ts`, so it cannot reach navigation or the sitemap;
- when a deployment adapter is chosen for the website, scoping it to the root application is an
  explicit part of that decision.

## Current exclusions

Out of scope for the library: heroes, navigation, footers, contact forms, general form systems,
cookie notices, login and account interfaces, complete dashboards, full application screens, complete
pages, and production website integration.

A dashboard-like composition may appear as a visual section concept where it genuinely fits the
material, but the library does not become a product-dashboard collection.

## Planned catalogue direction

**Not implemented.** Recorded as intent so the catalogue is not designed twice.

The research found every large visual catalogue converging independently on a **three-tier preview
ladder**, and it is the direction to take here:

**poster index → live item page → standalone full-section route**

A still or short poster-framed recording in the index; a live preview on the item page; and a
chrome-less standalone route where the section gets the whole window. Grids never carry live frames.
Beyond cost, this resolves a real conflict for free: the long index wants `content-visibility: auto`
for scroll performance, which GSAP's documentation says breaks ScrollTrigger measurement — and under
the ladder the index and the section never render on the same page.

The isolated route per section already in place is the third tier.

## Deferred

Still open:

- **Recording the Tailwind exception in `docs/ENGINEERING.md`.** That document states Tailwind is not
  part of the architecture. The exception is approved, and the library application now exists, so
  this is due — but it is a core-document change and belongs to a task that explicitly authorises it.
- **Whether library components mirror the website's runtime** — Server Components, `next/image`,
  `next/link` — or are simply client components.
- **Content policy**: real MindWP copy versus neutral placeholder content in built sections.
- **When the researched taxonomy replaces the registry's placeholder `tags` field**, and whether
  permanent `SEC-nnn` ids become part of the catalogue's data.
- **Whether `/library` is ever published**, privately or otherwise. Currently it is not.

Resolved since this file was written: the cross-root CSS import works and is in use; the Tailwind
token bridge exists; the custom catalogue is built rather than Storybook or Ladle; local ports,
scripts and dev ergonomics are settled.

- **Whether `/library/` is ever published**, privately or otherwise. Currently it is not.

## Status of this file

Library-local planning. Binding on library work, and on nothing else.
