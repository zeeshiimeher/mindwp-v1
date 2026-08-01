# Library design

The design authority for the private MindWP section library in `/library/`.

## What this governs

This document governs **the section library only**. It changes nothing about the live MindWP
website, and it is not a second opinion on it.

The live website keeps its own authorities. `docs/DESIGN.md`, `docs/ENGINEERING.md`,
`docs/WRITING.md`, `docs/FOUNDATION.md`, `docs/STRATEGY.md`, page plans and live-page conventions
own website pages and are **not** design, writing or composition authorities over anything built
here. Nothing in this file is a proposal to change them.

The library **reuses selected primitives** from the website — colour and surface tokens, typography
and fonts, spacing and width variables, the approved gradient set, and hard-won accessibility and
lifecycle knowledge. Reusing a primitive is not inheriting a section anatomy. The website's page
rhythm, section skeletons, copy voice, composition rules and production-component restrictions do
not follow the tokens across the boundary.

`CLAUDE.md` still applies to repository safety, authorisation and working practice. It is not a
design authority for the library.

## Purpose

The library is:

- a **visual composition laboratory** — a place to find out what an idea actually looks like;
- an **inspiration and implementation-reference catalogue**;
- somewhere familiar and experimental full-section ideas are built at real scale, on real tokens;
- a way to judge an idea **in a browser** rather than through a written description of it.

The library is **not**:

- a mandatory production component system;
- obliged to follow the live website's current section patterns;
- a promise that anything built here ships.

A section that is later adapted, partially reused, or completely rebuilt from scratch for a page has
done its job. The deliverable is the design decision and the proven composition, not the file.

## Visual freedom

The library exists because the alternative — arguing about section design in prose — does not work.
It only pays for itself if what gets built is worth looking at.

- **Composed, visually intentional sections are the goal.** Competent is not the bar.
- **Visual range matters as much as implementation range.** A catalogue of correct sections that all
  look related has failed even if every one of them works.
- **Familiar structures are first-class.** A card grid, a split, a table, an accordion, a rail. They
  are transformed through typography, scale, density, surface, alignment, rule and composition —
  not apologised for.
- **Experimental structures are first-class too**, where they teach something or produce a memorable
  result. Narrow range is an acceptable price for genuine distinctiveness.
- **There is no default section anatomy.** Eyebrow, headline, paragraph, three cards, CTA must never
  become the repeated skeleton of this collection. If two unrelated sections are reaching for the
  same opening five elements, one of them is not designed yet.
- **A category does not determine an appearance.** The communication job says what the reader has to
  come away with, never what the section looks like.
  - a comparison may be editorial, spatial, dense, interactive or highly visual;
  - proof does not have to be cards or testimonials;
  - a process does not have to be numbered boxes;
  - an index does not have to be a list.
- **A section may be still, interactive or motion-led.** Stillness is a design decision, not an
  animation that was never finished.
- **Design should read as authored**, not assembled from default components.

## Relationship to the MindWP visual foundation

The library styles in the real system rather than a substitute: MindWP's palette, typography, fonts,
selected spacing and width foundations, the approved gradients, and the same general quality
expectations.

That is a **starting vocabulary, not a ceiling.**

The library may:

- push scale, proportion, density, whitespace and composition further than the live website does;
- use unusual grids, overlap, breakout, full-bleed, sticky, pinned, horizontal and interactive
  structures;
- write library-local CSS wherever a utility API would flatten the idea;
- use GSAP where motion is part of the concept rather than a coat of polish;
- produce sections that would not drop onto the current homepage unchanged.

Production adaptation later — or a complete recode in handwritten CSS — is an expected outcome, not
a defect in the original.

The library never edits shared CSS. Library-only rules stay in the library.

## Surfaces and gradients

Solid surfaces are the default. `bg-navy` is the normal way to make a section navy.

The approved shared set is navy tonal depth and light neutral washes, already proven side by side
against the solid surfaces they would replace. They are **optional compositional tools**: reach for
one when a large surface is reading as a flat slab, when a section needs to hand off into the
surface below it, or when directional light is part of the composition.

- Do not apply a gradient by reflex to every section, card, heading or control.
- Navy-to-emerald, teal-to-midnight, mesh and generic colourful SaaS gradients are **outside** the
  approved shared set.
- The expressive treatments — atmosphere, vignette, side-light — need a specific visual reason and a
  place on the page worth spending.
- If you cannot name the problem the gradient solves, use the solid colour.

Which tokens exist, which are utilities and which are deliberately variable-only is recorded beside
the CSS, not here.

## Responsive direction

The library is **desktop-composition-led, not desktop-only.**

- **Desktop is designed, not enlarged.** A wide layout that is only the narrow one with more air is
  not a desktop composition.
- **The 700–1100px band gets its own judgement.** It is where most compositions quietly fail — two
  columns that no longer have room to be two columns, a ladder whose steps converge, a table that
  has stopped fitting and not yet transformed. It is reviewed as a state in its own right, never
  assumed to be handled by the breakpoint either side of it.
- **A narrow layout may be a materially different composition.** Preserving the desktop silhouette
  at all costs is not required.
- **What must be preserved is content meaning, hierarchy and interaction access.** Everything the
  reader can learn and do at width, they can learn and do narrow.
- **A simple but intentionally composed narrow form is a good answer.** Some experimental wide
  concepts should resolve into something plainer — designed plain, not degraded.

## Motion and interaction

- **Motion belongs to the concept or it does not belong.** Added afterwards as polish, it is
  decoration and will read as decoration.
- **User-driven, CSS-driven and GSAP-driven work are all legitimate**, and the library should hold
  all three rather than converge on one.
- **Not every section needs an entrance animation.** Most do not.
- Motion earns its place when it creates **hierarchy, continuity, comparison, state change or
  spatial understanding** — when removing it removes information rather than sparkle.
- **Motion must never delay access to the section's content.** The resting state is what renders
  first, without JavaScript, and it is complete.
- **Reduced motion may require a separately designed composition**, not a disabled tween. Reverting
  a scrub or a pin can leave an empty stage; that stage has to have been designed.
- **Ambitious motion concepts stay valid even when they cost more to build.** Cost is a sequencing
  decision, not a veto.
- **The library must not become dominated by pinned or scroll-capturing work.** These fail by
  accumulation rather than individually, so their share of the collection matters more than the
  quality of any one of them.

## Library quality

A built section is judged on:

- **visual composition** — does it read as designed;
- **desktop presence** — is the wide state genuinely composed;
- **usefulness of the concept** — is there a real job it does well;
- **range** — how far it can be re-dressed and re-contented before it breaks;
- **responsive judgement** — especially the intermediate band;
- **interaction quality** where the concept has interaction;
- **reduced-motion result** where the concept moves;
- **technical stability** — no console errors, no unintended overflow, clean teardown;
- **contribution** — does it add something meaningfully different to the catalogue, or is it a
  variant of something already built.

The last one is the tiebreaker. A well-built section that duplicates a register the catalogue
already holds is worth less than a rougher one that opens a register it does not.

## What this document is not

Not a live-website design document. Not a page-planning method. Not a copywriting guide. Not a
generic accessibility checklist. Not an implementation manual. Not a component recipe.

Per-wave build defaults, shared mechanisms and component briefs live in
[planning/WAVE-01-PLAN.md](./planning/WAVE-01-PLAN.md).
