# MindWP section library

A private laboratory for full-section React components — content, feature, card and grid, split,
bento, tabs and accordion, slider, sticky, pinned, horizontal-scroll, and motion-led sections — built
at real scale, on the real design system, so a section can be judged in a browser rather than in
prose.

Heroes, navigation, footers, contact forms and complete pages are out of scope.

## Not the website

Separate from the MindWP website in `src/`. Not a public route, not in navigation, not in the
sitemap, not indexed, not deployed, and not a mandatory production component system. A section that
is later adapted, partially reused or completely rebuilt for a page has done its job.

## Running it

A standalone Next.js application with its own `package.json`, outside the root pnpm workspace.

```bash
pnpm install && pnpm dev
```

Then `http://localhost:3100`. Also available: `pnpm build`, `pnpm typecheck`, `pnpm lint`,
`pnpm format:check`, and `pnpm capture <slug> --full --width 1440`.

## Documents

- [CLAUDE.md](./CLAUDE.md) — working boundary and reading rules.
- [DESIGN.md](./DESIGN.md) — the library's design authority.
- [BUILD-DEFAULTS.md](./BUILD-DEFAULTS.md) — the reusable build rules.
- [planning/README.md](./planning/README.md) — the planning map, and what is happening now.
