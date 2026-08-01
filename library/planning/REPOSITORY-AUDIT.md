# Library repository audit

Working record for the private section laboratory in `/library/`. Factual state of the repository at
the time of inspection, plus architecture options and the decisions still open.

This is not a design authority and must not be cited as one. It expires once the architecture is
chosen and the real configuration exists.

Inspected at commit `7ac888d` on a clean worktree. No application source, dependency, shared CSS,
route or canonical document was changed by this audit.

## Automatic context findings

Supplied automatically, without opening a file:

- `CLAUDE.md` in full, as project instructions.
- Environment: working directory, git repository, branch `main`, git user, platform, date.
- Git status snapshot (`M docs/DESIGN.md`) and the five most recent commit subjects.
- Skill names and one-line descriptions only — no skill bodies. Two are MindWP-specific:
  `mindwp-design-eye` and `mindwp-frontend-quality`.
- Tool availability, including a deferred-tool registry and a WordPress/Bricks MCP server.
- A project memory directory path. No memory content was present.

Not supplied automatically: `docs/README.md`, `docs/DESIGN.md`, `docs/ENGINEERING.md`, any other
canonical document, `package.json`, any configuration, any source file, and any directory listing.
Everything below came from opening files during this audit.

Manually inspected: `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml` (dependency search only),
`tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `.prettierrc.json`, `.prettierignore`,
`.gitignore`, `.ignore`, `.rgignore`, `.env.example`, `README.md`, `AGENTS.md`,
`.github/workflows/ci.yml`, `src/app/layout.tsx`, `src/app/globals.css`, `src/app/robots.ts`,
`src/app/sitemap.ts`, `src/config/routes.ts`, `src/styles/tokens.css`, `src/styles/typography.css`,
selector inventories for `src/styles/layout.css` and `src/styles/buttons.css`,
`src/app/draft/library/`, and repository folder structure. `docs/DESIGN.md` and
`docs/ENGINEERING.md` were read for shared visual foundations and repository boundaries.

Deliberately not inspected: Foundation, Strategy, Writing, Rationale, Information Architecture,
`docs/README.md`, page plans, website pages, page-specific components and CSS, archived material.

## Repository stack

| Layer      | Current state                                                            |
| ---------- | ------------------------------------------------------------------------ |
| React      | 19.2.6 (`react`, `react-dom`)                                            |
| Next.js    | 16.2.6, App Router, Server Components by default                         |
| TypeScript | 5.9.3, `strict`, `@/*` → `./src/*`                                       |
| Package    | pnpm 11.1.0, Node ≥ 20 locally, Node 24 in CI                            |
| Runtime    | `clsx` 2.1.1, `gsap` ^3.15.0, `resend` 6.12.3, `zod` 4.4.3               |
| Styling    | Hand-written CSS. No CSS framework, no CSS-in-JS, no CSS Modules in use  |
| Fonts      | `next/font/google` — Fraunces (variable) and Inter                       |
| Quality    | ESLint 9 flat config, Prettier 3.8.3, Playwright 1.60 with `axe-core`    |
| CI         | `pnpm check` + `pnpm build`, then `pnpm test`, on push to `main` and PRs |
| Deployment | No adapter configured. No `wrangler`, `vercel`, `netlify` or OpenNext    |

`pnpm-workspace.yaml` exists but declares no `packages:` key. It is used only for pnpm 11
`allowBuilds` decisions. This is currently a single-package repository, not a multi-package
workspace.

`next.config.ts` sets a strict CSP, including `font-src 'self' data:`, so the deployed site cannot
load fonts from an external CDN.

## Tailwind status

Not installed, not configured, not used. Zero matches for `tailwind` in both `package.json` and
`pnpm-lock.yaml`. No `tailwind.config.*`, no `@tailwind`/`@import "tailwindcss"` directive anywhere.

`docs/ENGINEERING.md` states plainly: **"Tailwind is not part of the current architecture."** See the
conflicts section below — this is the one genuine blocker.

## GSAP status

Installed and in real use. `gsap` 3.15.0, with the full plugin set present in the installed package:
`ScrollTrigger`, `ScrollSmoother`, `SplitText`, `Flip`, `Draggable`, `Observer`, `MorphSVGPlugin`,
`ScrollToPlugin`, plus `DrawSVGPlugin` and `MotionPathPlugin`.

The website currently imports `gsap/ScrollTrigger`, `gsap/DrawSVGPlugin` and `gsap/MotionPathPlugin`
across seven client islands. `docs/ENGINEERING.md` requires GSAP to be loaded only inside the client
island that uses it, with timelines, observers and media-query branches cleaned up and a
`prefers-reduced-motion` branch that resolves to the same information.

No other animation library is installed — no Framer Motion, Motion, React Spring, Lenis, Three.js,
Emotion, styled-components or vanilla-extract.

## Available shared foundations

`src/app/globals.css` imports, in order: `tokens.css`, `typography.css`, `layout.css`,
`buttons.css`, `form.css`. It then adds a reset and the `.on-dark` / `.on-mist` context utilities.

- `src/styles/tokens.css` — palette, semantic surface/text aliases, a controlled emerald opacity
  ladder, `--font-display` / `--font-body`, container widths, `--page-margin`, reading measures,
  `--space-1`…`--space-10`, radii, a three-step elevation scale, easings and durations.
- `src/styles/typography.css` — display and body scales as `font:` shorthands with fluid `clamp()`,
  per-step optical tracking, and Fraunces `SOFT`/`WONK` variation-axis settings.
- `src/styles/layout.css` — `.section` (+ `--focal`, `--quiet`), `.container` (+ `--narrow`,
  `--content`, `--wide`, `--split`, `--flow`), `.section-intro`, `.section-title-group`, plus the
  site shell (header, nav, drawer, footer, skip link).
- `src/styles/buttons.css` — `.btn` with `-lg`, `-sm`, `-outline`, `-link`, `-on-dark`,
  `-ghost-dark`.

**Font coupling is the key constraint.** `tokens.css` resolves `--font-display` and `--font-body`
through `var(--font-fraunces)` and `var(--font-inter)`, which are injected onto `<html>` by
`next/font/google` in `src/app/layout.tsx`. Fraunces is loaded with the `SOFT`, `WONK` and `opsz`
axes and both styles, and `typography.css` depends on those axes resolving. Any host that is not a
Next.js application must reproduce that font setup itself, and a static webfont substitute would not
carry the axes.

## Isolation already present in the repository

`/library/` does not exist yet, but three root config files have excluded it since the initial
commit:

- `eslint.config.mjs` → `ignores: ["library/**", …]`
- `tsconfig.json` → `exclude: ["node_modules", "_dev-reference", "library"]`
- `.prettierignore` → `/library/`

So `pnpm lint`, `pnpm typecheck` and `pnpm format` already skip this directory. `.gitignore` does
**not** list `/library/`, so its contents will be tracked in git.

`src/app/draft/library/` already exists: eight preserved Lead Response & Handling variants with a
self-contained `library.css`, marked `noindex: true` and absent from `LIVE_ROUTES`. It is a
precedent for private variant work, and also a name that will collide conversationally with
`/library/`.

## Architecture options

### Option A — separate Vite React application in `/library/`

- **Isolation** — complete. Different build tool, different root; `next build` never sees it.
- **Shared CSS reuse** — tokens, typography, layout and buttons import fine as plain CSS, but the
  font variables they depend on do not exist. Fraunces with `SOFT`/`WONK`/`opsz` and Inter would
  have to be self-hosted and re-declared, duplicating what `next/font` does today and creating a
  second source of typographic truth.
- **Dependency ownership** — its own `package.json` and lockfile. Clean.
- **Local development** — fastest dev server of the three.
- **Catalogue suitability** — best fit for Storybook or Ladle if an external catalogue is wanted.
- **Deployment risk** — effectively zero.
- **Complexity** — low to start, but introduces a second React runtime model in one repository.
- **Future maintenance** — components are not portable to the site without rewriting anything that
  touches `next/font`, `next/image`, `next/link` or Server Components.
- **Hidden from production** — yes, structurally.

### Option B — separate Next.js application in `/library/`

- **Isolation** — complete for the same reason as A: a distinct application root that the site's
  `next build` never compiles.
- **Shared CSS reuse** — the best of the three. `next/font/google` reproduces the exact Fraunces
  axis configuration, so `tokens.css` and `typography.css` work unmodified with no second font
  definition.
- **Dependency ownership** — its own `package.json`. Registering it in `pnpm-workspace.yaml` would
  deduplicate `node_modules` but would also make CI's `pnpm install --frozen-lockfile` install every
  laboratory dependency on each run, and put them in the root lockfile. Keeping it out of the
  workspace costs a second `node_modules` and keeps CI untouched.
- **Local development** — a second `next dev` on its own port. Slower than Vite, same as the site.
- **Catalogue suitability** — good with a custom catalogue; Storybook is possible but heavier here
  than on Vite.
- **Deployment risk** — effectively zero, provided the eventual deployment adapter is scoped to the
  root application.
- **Complexity** — moderate. One extra Next application to keep on a compatible version.
- **Future maintenance** — components stay copy-paste portable into `src/`, which matters if the
  laboratory ever feeds the website.
- **Hidden from production** — yes, structurally.

### Option C — private development-only route in the existing application

- **Isolation** — weakest. The components live inside `src/app/`, so they are part of the same
  application, the same lint and typecheck surface, and the same build graph.
- **Shared CSS reuse** — trivially perfect; everything is already in scope.
- **Dependency ownership** — none of its own. Every laboratory dependency becomes a website
  dependency.
- **Local development** — simplest; no extra server.
- **Catalogue suitability** — fine. `src/app/draft/library/page.tsx` already demonstrates the
  pattern.
- **Deployment risk** — the real problem. `noindex` is a request to crawlers, not access control;
  the route is compiled into the production bundle and publicly reachable unless actively gated.
  Around one hundred sections of laboratory code and CSS would ship inside the website.
- **Complexity** — lowest now, highest later.
- **Future maintenance** — laboratory churn lands in the website's source, lint, typecheck, build
  time and test surface.
- **Hidden from production** — only through ongoing vigilance (environment-gated `notFound()` or an
  excluded route group), which contradicts the spirit of the repository rule that draft and variant
  work stays out of deployment.

## Recommended option

**Option B — a separate Next.js application inside `/library/`, with its own `package.json`, not
registered as a pnpm workspace package.**

The decisive reason is not speed of setup; it is that Option B is the only choice that gets both
halves of the requirement. Option C reuses the foundations perfectly but cannot be kept out of
production without permanent care. Option A is perfectly isolated but breaks the typography
foundation, which is precisely the thing worth reusing — a laboratory that renders in a substitute
typeface is not testing MindWP's design system.

Option B is isolated for the same structural reason as Option A — a separate application root that
`next build` never traverses — while `next/font/google` lets `tokens.css` and `typography.css` be
consumed exactly as the website consumes them. It also keeps anything built here portable into
`src/` without a rewrite.

Its costs are honest and small: a second `next dev` process, a second `node_modules`, and one more
Next.js version to keep aligned.

Not chosen as a workspace package initially, because that would put laboratory dependencies into the
root lockfile and install them on every CI run. Revisit only if duplicate `node_modules` becomes a
genuine problem.

## Shared CSS and token reuse

Intended approach, to be verified before it is relied on:

- Import `src/styles/tokens.css` and `src/styles/typography.css` into the laboratory's global
  stylesheet by relative path, so there is one source of truth and the laboratory inherits token
  changes.
- Import `layout.css` selectively or not at all. It carries the site shell (header, nav, drawer,
  footer) that the laboratory does not need, alongside the `.section` / `.container` roles that it
  does.
- Reproduce the `next/font/google` Fraunces and Inter setup from `src/app/layout.tsx` in the
  laboratory's root layout, including the `SOFT`, `WONK` and `opsz` axes.
- Never edit the shared CSS files from inside `/library/`. Laboratory-only rules stay local.

**Unverified assumption:** that a Next application rooted at `/library/` can `@import` a CSS file
that sits outside its own root. This is normal bundler behaviour, but it has not been tested here
and should be confirmed with a small spike before the architecture is committed. If it does not
resolve cleanly, the alternatives are a symlink, a `outputFileTracingRoot`-style configuration, or a
copied snapshot of the tokens — the last of which trades live inheritance for drift.

On Tailwind, if it is approved: it should consume the existing CSS variables rather than restate the
palette and type scale. Tailwind 4 configures through CSS and can map its theme onto variables that
already exist, so a thin token bridge — colour, spacing, radius, easing and duration utilities
pointing at `tokens.css` — is the correct shape. A bridge is worth building only once real component
work shows which utilities are actually reached for; writing it up front would guess. The display
and body type scales should stay in `typography.css` rather than being reimplemented as utilities,
because they carry fluid clamps, per-step tracking and variation axes that a utility scale would
flatten.

## Catalogue technology

**Recommendation: no external catalogue tool. Build a custom catalogue.**

Full-section components need a real viewport, real scroll, real sticky and pinned behaviour, and
real GSAP `ScrollTrigger` context. Storybook's canvas is optimised for small isolated components in
an iframe and works against scroll-driven and pinned work — exactly the families this library is
being built for. Ladle is lighter but is Vite-only, so it cannot host a Next application.

A route per section plus an index page gives full-page fidelity, costs almost nothing, and is
already a proven pattern in this repository at `src/app/draft/library/page.tsx`. Revisit Storybook
only if per-component prop controls and written documentation become a genuine need.

## Risks and conflicts

1. **Tailwind contradicts `docs/ENGINEERING.md` (blocking).** That document owns repository-specific
   technical decisions and states that Tailwind is not part of the current architecture. Its scope
   does not carve out `/library/`. Tailwind cannot be introduced anywhere in this repository until
   Zeeshan either scopes that statement to the website or amends it. Reported rather than
   reconciled.
2. **Two styling systems create a migration tax.** If the website is hand-written CSS and the
   laboratory is Tailwind, every component that moves from laboratory to page is a rewrite. Whether
   that is acceptable depends on whether the library is inspiration only or a real component source
   — see the decisions below.
3. **Repository shape.** The `docs/ENGINEERING.md` source-ownership tree does not include a
   top-level `/library/`. Adding one is a repository-shape change that document should eventually
   acknowledge.
4. **Name collision.** `src/app/draft/library/` already exists and holds unrelated preserved LRH
   variants. The two will be confused in conversation. Consider renaming one, later, as a separate
   task.
5. **Font-variable coupling.** Any host that is not Next.js silently loses the Fraunces axes. Type
   would still render, which makes this failure quiet rather than loud.
6. **Deployment adapter is still undecided.** There is nothing to exclude `/library/` from yet. When
   the adapter is chosen, scoping it to the root application must be an explicit part of that
   decision, not an assumption.
7. **Git tracking.** `.gitignore` does not cover `/library/`, so the catalogue will be committed.
   That is probably correct for a catalogue with lasting value, but it is a decision, not a default.

## How it stays out of production

With Option B, isolation is structural rather than procedural:

- outside `src/`, so `next build` never compiles it;
- not in `pnpm-workspace.yaml`, so `pnpm install --frozen-lockfile` in CI never installs it;
- already excluded by `eslint.config.mjs`, `tsconfig.json` and `.prettierignore`;
- never added to `LIVE_ROUTES`, so it cannot enter navigation or the sitemap;
- CI runs `pnpm check`, `pnpm build` and `pnpm test` at the repository root only;
- when a deployment adapter is chosen, it is scoped to the root application and `/library/` is added
  to whatever ignore file that adapter uses.

## Decisions still needed before researching 200 concepts

1. **Tailwind scope.** Approve or refuse Tailwind inside `/library/`, and amend `docs/ENGINEERING.md`
   accordingly. Blocking — it changes what a researched concept is expected to be built with.
2. **Purpose contract.** Is the library inspiration only, or a real source of components for
   website pages? This decides how much the migration tax in risk 2 matters, and therefore how
   freely Tailwind and laboratory-only patterns can be used.
3. **Architecture sign-off.** Confirm Option B, or choose otherwise.
4. **Runtime parity.** May laboratory components use Server Components, `next/image` and `next/link`
   — that is, does the laboratory mirror the website's runtime, or is everything a client component?
5. **Content policy.** Do sections use real MindWP copy and claims, or neutral placeholder content?
   Real copy pulls Writing and Strategy authority into what is meant to be a visual laboratory.
6. **Token consumption.** Live import of the shared CSS, which inherits site changes and can break
   the laboratory, versus a snapshot copy, which is stable but drifts.
7. **Taxonomy and selection.** The section families to research, and the criteria that cut 200
   concepts to 100 builds. Without these, research produces a list that cannot be prioritised.
8. **Dependency ownership.** Standalone install versus pnpm workspace member.

## Assumptions the next research chat may safely use

- React 19.2.6 and Next.js 16.2.6, App Router, TypeScript strict, pnpm.
- GSAP 3.15.0 is available with `ScrollTrigger`, `ScrollSmoother`, `SplitText`, `Flip`, `Draggable`,
  `Observer`, `MorphSVG`, `ScrollTo`, `DrawSVG` and `MotionPath`. Scroll-driven, pinned and
  horizontal-scroll families are all technically viable.
- No other animation library is installed, and none is assumed.
- A token, spacing, elevation, easing and duration system already exists in `src/styles/tokens.css`,
  and a fluid display/body type scale exists in `src/styles/typography.css`. Research does not need
  to invent either.
- `/library/` is private: not a route, not in navigation, not in the sitemap, not indexed, not
  deployed.
- Heroes, navigation, footers, contact forms, complete pages and production integration are out of
  scope.
- The build stack, and specifically whether Tailwind is permitted, is **not** settled. Research
  should describe concepts in terms of structure, composition and motion behaviour, not in terms of
  a specific styling API.
