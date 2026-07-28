---
name: mindwp-page-build
description: Use when implementing an approved MindWP page or section design in source — building the components and page CSS, integrating responsive behaviour and motion, and refining from rendered evidence. Expects a design specification from mindwp-page-design or an explicit user decision; do not use it to decide the design.
---

# MindWP page build

Implement an approved design. Do not decide one.

Read `docs/ENGINEERING.md` for repository source, CSS, accessibility and validation rules. Read `docs/DESIGN.md` when a composition question arises during implementation. Do not open another page as a reference — the design is already decided, and a reference only invites drift at this stage.

## Implement what was approved

The approved specification owns payload type, hierarchy, the set-piece, section weight, the relationship each section embodies, and surface role.

Solve technical geometry freely: grid tracks, spacing, overflow, stacking, state handling, motion lifecycle, breakpoints.

**Do not silently substitute.** If a payload proves impractical, report the conflict and return to design. Replacing a named object with an easier text layout, dropping the set-piece, or downgrading a focal section to fit the available time is a design change made without a design decision — that is the failure this split exists to prevent.

Where implementation reveals that the design itself is wrong, say so with the evidence. That is useful, and it is not the same as quietly building something else.

## Two implementation situations

**Draft or variant exploration** — a first pass, or several variants built to compare. Favour creative range over full engineering rigour: a genuinely well-composed draft beats a technically tidy but timid one.

Still required in a draft: semantic colour, spacing, radius, shadow and motion tokens over raw values; inherited global typography roles; real semantic structure (heading order, landmarks, alt text, keyboard reachability); and page- or section-local CSS only — never edit shared global foundation files while exploring, so a rejected variant stays trivially discardable.

Can wait: exact CSS-ownership specificity, `minmax()` and grid-track precision, full hover coverage, exhaustive responsive tightening, replacing absolute-positioning shortcuts with flex or grid, complete interaction-state coverage, and the `pnpm check` / `build` / `test` gate.

A draft is not finished work. After the user approves and merges one, run `mindwp-frontend-quality`'s Finalize mode.

**Merge-ready build** — implementing what the user has already decided on. Follow `docs/ENGINEERING.md` in full.

## Start from the existing system

Before adding page-specific styling, inspect the relevant existing foundations — the actual token, typography, layout, button, form and global styles the task needs.

Default to: semantic HTML sections · `.section` for shared vertical rhythm · `.container` and its width variants · existing section-introduction structures · Flex and Grid for ordinary layout · global `h1`–`h4`, paragraph and body styles · semantic tokens · existing buttons, controls and utilities where their role matches.

Extend or depart only where the composition has a requirement they do not serve.

Inherit global typography before adding page-local typography. Do not put font sizes on page-specific BEM selectors by default; override a global role only for a deliberate difference in scale, measure, emphasis, wrapping or responsive behaviour.

Page classes should own relationships, geometry, hierarchy, state and responsive transformation — not duplicate the global token or typography system.

Local values remain acceptable for genuine component geometry, one-off proportions, controlled transparent tints, media treatment, or responsive calculations with no durable shared role. Do not promote a one-page need into a global token, utility or shared component without evidence of a stable cross-page role.

Use one meaningful source structure across widths. Keep client code inside earned interaction islands.

## Build the object, not the band

A section's named payload is the work. When implementation time runs short, the object is what must survive — not the padding around it.

The specification's `Built by` row is a build instruction, not a note. If it says the payload has an interior, give it a fill and something of a different value inside it. If it says something breaks its container, build the breakout. Delivering the section without those moves delivers a different, flatter section.

**Verify in the render that the relationship survived, move by move.** Markup that satisfies a named move is not the same as a render that shows it. A negative margin that breaks no visible edge, a fill within a step of its own ground, a "dominant" object that is not the largest thing in its band — each of these builds the instruction and loses the meaning. Before reporting, take each named move and each stated relationship, find it in the capture, and say where it is. Anything you cannot point at in the render did not get built, whatever the source says.

Five failures to check for in your own output before reporting:

- **Padding standing in for emphasis.** `.section--focal` only changes padding and gap. On a small payload it produces a taller band with more empty space, not a focal section. Every focal section needs a payload that earns it.
- **An object invisible against its own ground.** A card, panel or line whose value sits within a step or two of the surface behind it disappears in the render even though the markup is correct. On light surfaces the whole ladder spans a few points of lightness and `--elev-raised` is faint — an object there usually needs a fill *and* a hairline *and* a shadow, not one of the three.
- **Text clipped by an overlapping neighbour.** Rotation, overlap and stagger are the moves most likely to crop their own content. Check the widest and narrowest widths, not just the design width.
- **A missing middle.** Display heading straight to body copy, with nothing between, is the signature of a flat section. Use the scale's middle steps for payload headings.
- **A responsive block that never arrived.** A multi-column payload with no narrow-width rule will clip and crush at 400px while looking perfect at 1640. Capture both before reporting.

## Publication boundaries

Do not add draft work to navigation, the sitemap, indexing, canonical configuration, deployment or public release unless the user explicitly includes it.

## Refine from rendered evidence

Render while the implementation can still change. Capture the full page before the section crops.

```
pnpm capture:route -- --sections <route> <output-dir-outside-repo>
```

For a complete page, inspect a broad desktop full-page view, a narrow full-page view, the contact sheet, and then the important sections. For bounded work, inspect the changed scope and its page-level consequence.

Judge the visible result, not the explanation: hierarchy, payload legibility, proof treatment, functional repetition, neighbour transitions, accumulated fatigue, responsive transformation, readiness to act.

Recompose a weak section rather than rescuing it with spacing, borders, colour, shadow or decoration.

## Report

Changed source, rendered evidence, checks run, unresolved material, remaining risk, and any point where the implementation diverged from the approved design and why. Do not claim publication or a business decision the work did not establish.

Hand the finished page to `mindwp-design-eye` before calling it done.
