# Library build defaults

The reusable rules for building a library section. True for every wave, so a brief never restates
them.

[DESIGN.md](./DESIGN.md) owns what a good section is and wins wherever the two meet. These are
defaults for efficient building, not restrictions on visual exploration — **depart from any of them
when the concept needs it, and record the departure in the build report.**

Not here: wave sequencing, batch membership, review gates, selection rationale, or the contract for
a shared mechanism that has not been built yet. Those live in `planning/`.

## Rendering

- **Prefer Server Components for genuinely static sections.**
- **Use Client Components where interaction, browser APIs, GSAP, measurement or managed state
  require them** — and only for the part that requires them. A static section with one measured
  guard is a Server Component with a small client child, not a client section.
- Never make a section a Client Component for consistency. The split is informative.

## Styling

In this order of preference for any given job:

1. **the library's own visual primitives** — tokens, typography, spacing, widths, approved gradients;
2. **Tailwind** for useful structural composition — grid, flex, spacing, ordinary type and colour;
3. **library-local CSS**, co-located with the component and imported by it, for authored layout,
   unusual grids, named grid lines, responsive transformation, masks, clip paths, grain,
   scroll-driven animation, and anything a utility API would flatten;
4. **GSAP** where motion is part of the concept.

Never automatically apply: cards; rounded containers; gradients; eyebrow-and-headline intros;
entrance reveals; an identical spacing anatomy. Any of them is fine when chosen; none is a default.

The type scale boundary in `library.css` holds: headings and display roles come from the typography
foundation, `text-xs`–`text-xl` are for supporting copy, and there is no `text-2xl` on purpose.

## The foundation

**Use the library-local tokens and typography.** They live at `src/styles/foundation/tokens.css` and
`src/styles/foundation/typography.css`, are imported by `library.css` into `layer(mindwp)`, and carry
the palette, surfaces, spacing, radii, elevation, easings, durations, the approved gradient set, and
the display and body scales with their optical tracking and Fraunces variation axes.

**The local foundation snapshot is the build authority for library work.** If a primitive is not in
it, it does not exist for a library section — write library-local CSS instead.

**Do not inspect the website source to discover more primitives.** Not to check a value, not to find
a variable, not to see how a page uses one. Everything a build may reach for is inside `/library`,
and a snapshot is brought forward only by an explicitly authorised foundation-sync task.

Library-only rules stay in the library.

## W1 · Width and breakout vocabulary

Built by `SEC-182` and living in `src/styles/widths.css`, imported by `library.css` into
`layer(library)`. **The stylesheet is the authority on its own API**; this is the summary.

One default reading position and three declared escapes, and nothing else:

| Position     | Job                                                           |
| ------------ | ------------------------------------------------------------- |
| `measure`    | The reading column, ~65 characters. Every child gets it free. |
| `margin`     | Escape 1 — marginal figures, diagrams, sidenotes.             |
| `half-bleed` | Escape 2 — the shared content container. Artefact plates.     |
| `full-bleed` | Escape 3 — the grid's own edges.                              |

Usage:

- put `class="width-grid"` on the section root;
- ordinary children need **no attribute** — they sit at the measure;
- escape with `data-width="margin" | "half-bleed" | "full-bleed"`, and `data-width="measure"` where
  saying it is clearer than relying on it;
- a breakout that needs to re-expose the lines to its own children carries `data-width-subgrid`, so
  a caption returns to the measure through the same four names rather than a second mechanism;
- tune per section with `--width-pad`, `--width-measure`, `--width-margin-band`, `--width-half-bleed`.

Behaviour you inherit rather than implement: `margin` returns to `measure` below 57.5rem and
`half-bleed` returns to `measure` below 45rem, so the ladder never shows two steps that are nearly
the same, and narrow is honestly two positions.

Rules that hold for every user of it: **named grid lines, never negative margins**; **no `100vw`
anywhere**; and **adding a position is a decision, not an implementation detail** — one-sided bleed
belongs to `SEC-183` and must not be written speculatively.

Mapping to the taxonomy's `width` field, so the CSS and the metadata stay one language: `contained`
covers `measure` and `margin`; `wide` is `half-bleed`; `breakout` is any position escaping the
measure; `full-bleed` is the `full-bleed` position.

## Media and specimens

The objective is visual freedom and efficient section building, **not production asset management**.
The builder picks the most appropriate option for each section automatically, without asking.

- **Build an HTML/CSS specimen** when the concept concerns a document, interface, report, schedule,
  chart or specification — any artefact **whose internal structure matters**.
- **Use photography or an ordinary image** when the section needs visual mass, cropping, proportion,
  rhythm or media composition. Hand-drawing a photograph in CSS proves nothing.
- **Use a grey placeholder PNG** when the image content is not the point, or when a neutral
  placeholder makes the layout easier to judge.

| Category                       | Examples                                                  | Status                                            |
| ------------------------------ | --------------------------------------------------------- | ------------------------------------------------- |
| Approved demonstration sources | Unsplash, Pixabay                                         | **Allowed**, chosen freely, no approval needed.   |
| Reliable local specimens       | HTML/CSS artefacts, grey placeholders, files in `public/` | **Allowed**, preferred where structure matters.   |
| Arbitrary or unstable remotes  | Search-result URLs, temporary CDN links, hotlinked pages  | **Not used** — they break the catalogue silently. |

When using Unsplash or Pixabay: choose images that suit the composition rather than generic
technology or office photography; avoid anything that could be mistaken for a real MindWP client,
team member or project; record the source in a code comment or the build report; use a stable direct
asset URL or a local copy, never a fragile search-result URL; configure the application if
`next/image` is used with a remote source; fall back to a local copy or a grey placeholder whenever a
remote proves unreliable. A remote image does not have to be localised before the section can be
judged.

Remote **fonts and scripts stay out** — fonts come from the shared `next/font` setup, and there are
no CDN scripts.

## Demo content

**`docs/WRITING.md` does not apply to the library.** Library demo content has one job: to expose the
composition. The builder writes it automatically, without asking.

Neutral service names, sample process steps, placeholder deliverables, specimen table data, example
figures, fictional names where a layout needs names, invented document specimens, and labels such as
**Example**, **Specimen** or **Demo** are all available.

Write it to the shape the composition needs — the right number of lines, the right word lengths, the
right density, a long entry where a long entry is the risk. **Content that is uniformly tidy will
hide exactly the layout failures the library exists to find.**

One boundary: **do not present fictional testimonials, outcomes, awards or figures as real MindWP
evidence.** Invented material stays visibly invented.

No planning time is spent controlling placeholder prose.

## Catalogue identity and the registry

- Every built component uses its **permanent `SEC-nnn` id**. The id is the identity; slug and title
  are labels.
- Slug: `sec-nnn-short-kebab-title`, e.g. `sec-182-breakout-ladder`. Stable once published.
- Component: `src/components/sections/SecNnnShortName.tsx`, with a co-located
  `sec-nnn-short-name.css` where local CSS is used.
- Entries are appended to `ENTRIES` in the `sections` namespace. The `system` entries stay as they
  are — technical checks, not members of the collection.
- **`src/lib/registry.ts` is the authority on the metadata model.** Every field is a typed union, so
  a wrong value is a build error. Display tags are derived by `toTags()` and are never authored.
- The brief's **Metadata** line carries the exact values for the entry. Copy them; do not re-derive
  them from the taxonomy.

## Responsive review

Every section is considered at four states:

| State            | Width       | What it has to prove                                 |
| ---------------- | ----------- | ---------------------------------------------------- |
| Wide desktop     | 1440        | The composition at its intended scale.               |
| Ordinary desktop | 1280        | That the composition is not tuned to one width.      |
| Intermediate     | 960 and 820 | That the 700–1100 band was designed, not inherited.  |
| Narrow           | 390         | That meaning, hierarchy and interaction all survive. |

States do not carry equal complexity. **A simple but intentionally composed narrow version is a valid
answer**; an accidental one is not.

## Reduced motion

Every moving section states, in its brief and again in its build report, which is true:

- **Same composition** — remove the motion and the section is visually and informationally identical
  to its resting state; or
- **Separate composition** — reverting the motion leaves an incomplete or empty result, so a distinct
  static arrangement has been designed.

Disabling tweens answers neither. **The resting state is what renders first, without JavaScript, and
it is complete.**

## Accessibility

Identify the semantic and keyboard contract **where the concept creates one**, and build it properly.

Do not convert this into a uniform checklist applied to every visual experiment. A static editorial
plate with correct headings and honest prose has met its contract in full.

## Lifecycle

Interactive and GSAP components define, in code and in the build report: setup and cleanup;
breakpoint behaviour; the reduced-motion branch; resize and refresh behaviour including after webfont
load; focus handling; React Strict Mode behaviour, where double-invoked effects must not
double-register anything; and client-navigation cleanup, so leaving the isolated route and returning
is clean.

`MotionProof` is the reference implementation for the GSAP half of this.

## Validation and captures

```bash
pnpm typecheck && pnpm lint && pnpm format:check
```

Captures for review, per section — 1440, 1280, 960, 820, 390 full page, plus a reduced-motion capture
where the section moves:

```bash
pnpm capture sec-182-breakout-ladder --full --width 1440
```

Also `--width 1280`, `--width 960`, `--width 820`, `--narrow`, and `--reduced-motion` where the
section moves. `screenshots/` is gitignored — captures are evidence for a review, not repository
content.

## Completion standard

A section is complete when:

- its composition reads clearly;
- its demo content supports the design rather than fighting it;
- desktop is visually convincing;
- the intermediate and narrow states are designed;
- reduced motion works, where relevant;
- keyboard interaction works, where relevant;
- there are no console errors, on load, on interaction, and on leaving and re-entering the route;
- there is no unintended horizontal overflow at any reviewed width;
- animations and observers clean up;
- the catalogue entry and the isolated route both work;
- compromises are recorded.

## How a shared mechanism reaches this file

A mechanism is written **component-local in the brief that introduces it**, and moves into this file
**only after it has been built and reviewed**. Nothing is documented here as a default before it
exists. The wave dashboard tracks which mechanisms are pending, built, confirmed or corrected.

**There is no universal section framework, and no shared mechanism may grow into one.** Nothing here
specifies a section shell, an intro block or a spacing rhythm, and a mechanism that starts asking for
markup or layout opinions has stopped being a mechanism. `DESIGN.md` says there is no default section
anatomy; this is how that survives contact with reuse.
