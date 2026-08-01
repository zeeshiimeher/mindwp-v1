# MindWP section library

A private laboratory for full-section React components: content, feature, card and grid,
three-column, tabs and accordion, split, bento, slider, sticky, pinned, horizontal-scroll,
GSAP scroll and layered motion sections.

Heroes, navigation, footers, contact forms and complete pages are out of scope.

## Not the website

This directory is separate from the MindWP website in `src/`. It is not a public route, not in
navigation, not in the sitemap, not indexed, not deployed, and not a mandatory production component
system. It does not set design rules for website pages — [docs/DESIGN.md](../docs/DESIGN.md) and
[docs/ENGINEERING.md](../docs/ENGINEERING.md) keep that authority.

Treat it as an inspiration catalogue and a place to build sections properly before deciding whether
any of them belong on a page.

## Architecture

A standalone Next.js application — React, TypeScript, App Router — with its own `package.json`,
outside the root pnpm workspace. It is built and running:

- Tailwind mapped to MindWP's CSS variables rather than a second visual system;
- library-local CSS where CSS is the better tool;
- GSAP with `useGSAP` for justified motion;
- live imports of the website's `tokens.css` and `typography.css`, and the same `next/font` setup;
- a catalogue index plus an isolated route per section;
- its own linting and formatting;
- development and production outputs kept separate from the website's.

[planning/ARCHITECTURE.md](./planning/ARCHITECTURE.md) records the decision and what remains
deliberately deferred.

## Current phase

The technical foundation exists. The section collection has not started — the catalogue currently
holds only `system` entries that verify the foundation works.

Concept research and selection are complete or in progress in `planning/`, which owns the section
families, permanent IDs and tags. The catalogue's `tags` field is a deliberate placeholder until that
taxonomy lands.

- [planning/ARCHITECTURE.md](./planning/ARCHITECTURE.md) — the approved architecture.
- [planning/REPOSITORY-AUDIT.md](./planning/REPOSITORY-AUDIT.md) — the completed factual audit that
  led to it.
- [planning/RESEARCH.md](./planning/RESEARCH.md) — external research findings.
- [planning/TAXONOMY.md](./planning/TAXONOMY.md) — section categories, IDs and tags.
- [planning/COMPONENT-LONGLIST.md](./planning/COMPONENT-LONGLIST.md) — the researched section
  concepts.
- [planning/SHORTLIST-METHOD.md](./planning/SHORTLIST-METHOD.md) — how the initial build set is
  selected.
- [planning/BUILD-SELECTION.md](./planning/BUILD-SELECTION.md) — the selection itself.

These are working records, not design authorities.
