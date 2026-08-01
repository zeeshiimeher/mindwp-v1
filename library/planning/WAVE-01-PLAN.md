# Wave 1 plan

The executable plan for the first 19 sections of the MindWP section library.

Library-local planning. Binding on library work and on nothing else. The design authority it serves
is [../DESIGN.md](../DESIGN.md); the concepts come from
[COMPONENT-LONGLIST.md](./COMPONENT-LONGLIST.md) and the selection from
[BUILD-SELECTION.md](./BUILD-SELECTION.md).

Research and selection are closed. Nothing in this file reopens them.

---

## Approved decisions

Settled by Zeeshan before the `SEC-182` build chat. Recorded here so no build reopens them. Each is
also applied inside the relevant brief.

1. **`SEC-162` is an ordered list of records, not a table.** Each record is a definition list of
   field/value pairs. One source order at every width. Field labels stay available per record. A
   desktop visual header row may be presentational. **A horizontally scrolling table is not an
   acceptable answer for this concept** — that is `SEC-067`'s contract, not this one.

2. **`SEC-107` must attempt a genuine ScrollTrigger pin first.** Sticky-plus-scrub must not silently
   replace the pinned concept. If the true pin fails the visual or technical gate, the component is
   **marked for revision and the failure is reported** — it is not quietly substituted. A sticky
   treatment may then be evaluated separately, as a variant or as a replacement proposal. Its
   `pinned` and `budget-captures-scroll` metadata **do not change** unless Zeeshan approves that
   conceptual change after review.

3. **Batch memberships and internal build orders in §7 are approved as written.** Neither changes
   during Wave 1.

4. **`SEC-182` does not create `bleed-left` or `bleed-right`.** One-sided bleed belongs to `SEC-183`.
   No speculative CSS API is introduced ahead of a real use: **`SEC-182` establishes only the
   positions it demonstrates.**

5. **`SEC-147` keeps its one-time counting interaction for the first build**, implemented as the
   planned small client island. Whether the static variant is visually better is judged **after** the
   build, from the built result, not decided in advance.

---

## 1 · Purpose of Wave 1

Wave 1 exists to answer questions that cannot be answered on paper:

1. **What does a section actually cost to build here?** The 101-concept selection is priced on
   estimates. Nineteen real builds turn those estimates into evidence.
2. **Does the foundation hold under real sections?** The system proofs verify that Tailwind, the
   token bridge, local CSS and GSAP behave. They do not verify that a composed section is pleasant
   to build on top of them.
3. **What does the intermediate width really cost?** 700–1100px is the band every concept in the
   longlist describes least confidently.
4. **What does the reduced-motion obligation really cost?** Roughly half the selected set is tagged
   as needing a separately designed static composition. That number has never been measured.
5. **Which shared mechanisms genuinely emerge?** Wave 1 is small enough that a wrong abstraction is
   cheap to undo and large enough that a repeated defect will show up twice.
6. **Does the collection read as designed, or as one anatomy with different content?** Nineteen
   sections is the first point at which that question can be asked honestly.

Wave 1 is **not** trying to be a usable page kit, and it is not trying to cover every category.

## 2 · Relationship to library/DESIGN.md

[../DESIGN.md](../DESIGN.md) owns what a good library section is. This plan owns how Wave 1 gets
built.

Where they meet:

- DESIGN.md says the library has meaningful visual freedom. This plan sets **defaults for efficient
  building** — not restrictions on visual exploration. A brief that says "Server Component,
  Tailwind" is a starting expectation. A build that needs a client island and 200 lines of local CSS
  to make the idea work should take them and say so.
- DESIGN.md says there is no default section anatomy. This plan therefore never specifies a shared
  section shell, intro block or spacing rhythm, and the shared mechanisms in §6 are deliberately
  chosen so that **none of them can impose one**.
- DESIGN.md says the 700–1100px band gets its own judgement. This plan makes it a review gate rather
  than a note.
- Where this plan and DESIGN.md disagree, DESIGN.md wins and this plan is wrong.

## 3 · Build defaults

Defaults for efficient building. Depart from any of them when the concept needs it, and record the
departure in the build report.

### Rendering

- **Prefer Server Components for genuinely static sections.** Most of Wave 1 is static.
- **Use Client Components where interaction, browser APIs, GSAP, measurement or managed state
  requires them** — and only for the part that requires them. A static section with one measured
  guard is a Server Component with a small client child, not a client section.
- Do not make every section a Client Component for consistency. Consistency of rendering model is
  not a value here; the split is informative.

### Styling

Use, in this order of preference for any given job:

- **the shared visual primitives** — tokens, typography, spacing, widths, approved gradients;
- **Tailwind** for useful structural composition — grid, flex, spacing, ordinary type and colour;
- **library-local CSS**, co-located with the component and imported by it, for authored layout,
  unusual grids, named grid lines, responsive transformation, masks, clip paths, grain, scroll-driven
  animation and anything a utility API would flatten;
- **GSAP** where motion is part of the concept.

Never automatically apply: cards; rounded containers; gradients; eyebrow-and-headline intros;
entrance reveals; an identical spacing anatomy. Any of them is fine when chosen; none is a default.

The type scale boundary already set in `library.css` holds: headings and display roles come from the
shared typography, `text-xs`–`text-xl` are for supporting copy, and there is no `text-2xl` on
purpose.

### Media and specimens

The objective is **visual freedom and efficient section building, not production asset management.**
The builder picks the most appropriate option for each section **automatically, without asking for
approval.**

All of these are available:

- HTML and CSS artefacts;
- locally created specimen images;
- locally stored image files, where stability is useful;
- simple grey placeholder PNGs;
- suitable images from **Unsplash**;
- suitable images from **Pixabay**.

**Not every image has to be a custom-built HTML or CSS artefact.** Choose by what the section is
actually about:

- **Build an HTML/CSS specimen** when the concept concerns a document, an interface, a report, a
  schedule, a chart, a specification, or any other artefact **whose internal structure matters**.
  That is what makes the specimen legible, re-dressable and honest about what it depicts.
- **Use photography or an ordinary image asset** when the section needs **visual mass, cropping,
  proportion, rhythm or media composition** rather than a detailed functional specimen. Hand-drawing
  a photograph in CSS proves nothing about a composition whose subject is the image.
- **Use a grey placeholder PNG** when the image content itself is not important, when the composition
  is being tested before final image selection, when a neutral placeholder makes the layout easier to
  judge, or when sourcing photography would add no useful information.

Unsplash and Pixabay images are acceptable for private library demonstrations. When using them:

- **select images that suit the composition** rather than defaulting to generic technology or office
  photography — a stock-looking image will make a good composition look templated;
- **avoid imagery that could be mistaken for a real MindWP client, team member or completed project**;
- **record the source URL or attribution** in a small code comment or in the build report, where
  practical;
- **avoid fragile search-result or temporary CDN URLs** — use a stable direct asset URL, or a local
  copy;
- **configure the library application appropriately** if `next/image` is used with an approved remote
  source;
- **fall back to a local copy or a grey placeholder** whenever a remote image proves unreliable.

Three categories, and only the third is prohibited:

| Category                       | Examples                                                  | Status                                                                           |
| ------------------------------ | --------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Approved demonstration sources | Unsplash, Pixabay                                         | **Allowed**, chosen freely, no approval needed.                                  |
| Reliable local specimens       | HTML/CSS artefacts, grey placeholders, files in `public/` | **Allowed**, and preferred where structure matters or stability is worth having. |
| Arbitrary or unstable remotes  | Search-result URLs, temporary CDN links, hotlinked pages  | **Not used** — they break the catalogue silently and later.                      |

A remote image **does not have to be downloaded into the repository before the section can be
judged.** Localise it when it proves unstable, or when the section is worth keeping stable long-term
— not as a precondition for review.

Remote **fonts and scripts** remain out: fonts come from the shared `next/font` setup, and there are
no CDN scripts.

### Catalogue identity

- Every built component uses its **permanent `SEC-nnn` ID**. The ID is the identity; the slug and
  the title are labels.
- Slug convention: `sec-nnn-short-kebab-title`, e.g. `sec-182-breakout-ladder`. Stable once
  published into the registry.
- Component file: `library/src/components/sections/SecNnnShortName.tsx`, with co-located
  `sec-nnn-short-name.css` where local CSS is used.
- Entries are appended to `ENTRIES` in the `sections` namespace. The `system` entries stay where they
  are; they are technical checks, not members of the collection.

### Responsive review

Every section is considered at four states:

| State            | Width       | What it has to prove                                 |
| ---------------- | ----------- | ---------------------------------------------------- |
| Wide desktop     | 1440        | The composition at its intended scale.               |
| Ordinary desktop | 1280        | That the composition is not tuned to one width.      |
| Intermediate     | 960 and 820 | That the 700–1100 band was designed, not inherited.  |
| Narrow           | 390         | That meaning, hierarchy and interaction all survive. |

This does not mean every state carries equal complexity. **A simple but intentionally composed
narrow version is a valid answer**; an accidental one is not.

### Reduced motion

Every moving section states, in its brief and again in its build report, which of these is true:

- **Same composition** — motion can be removed and the section is visually and informationally
  identical to its resting state; or
- **Separate composition** — reverting the motion leaves an incomplete or empty result, so a
  distinct static arrangement has been designed.

Disabling tweens is not an answer to either. The resting state is what renders first, without
JavaScript, and it is complete.

### Accessibility

Identify the semantic and keyboard contract **where the concept creates one**. Wave 1's real
contracts are:

- real table semantics (SEC-067);
- heading-contained accordion buttons with coordinated single-open state (SEC-082);
- numbered marker buttons opening note panels — related, but not an accordion (SEC-144);
- native range controls (SEC-133);
- focusable, labelled overflow regions (SEC-067, and any section that overflows);
- focus movement and retention (SEC-119, SEC-144);
- polite status announcement for changes with no non-visual equivalent (SEC-119, SEC-163);
- written alternatives for complex artefacts and diagrams (SEC-144, SEC-145, SEC-107);
- text integrity under splitting (SEC-193).

Do not convert this into a uniform checklist applied to every visual experiment. A static editorial
plate with correct headings and honest prose has met its contract in full.

### Lifecycle

Interactive and GSAP components define, in code and in the build report:

- setup and cleanup;
- breakpoint behaviour (which branch runs where);
- the reduced-motion branch;
- resize and refresh behaviour, including after webfont load;
- focus handling;
- React Strict Mode behaviour (double-invoked effects must not double-register anything);
- client-navigation cleanup (leaving the isolated route and returning must be clean).

`MotionProof` is the reference implementation for the GSAP half of this and should be read before
the first GSAP section is written.

### Completion standard

A section is complete when:

- its composition reads clearly;
- its demo content supports the design rather than fighting it;
- desktop is visually convincing;
- the intermediate and narrow states are designed;
- reduced motion works, where relevant;
- keyboard interaction works, where relevant;
- there are no console errors;
- there is no unintended page overflow at any reviewed width;
- animations and observers clean up;
- the catalogue entry and the isolated route both work;
- compromises are recorded.

## 4 · Demo-content policy

**`docs/WRITING.md` does not apply to the library.** It owns the live website's voice and its
business-owner reader. Library demo content has a different job: to expose the composition.

The builder writes neutral placeholder or demo copy for each component, automatically, without
asking. It may include:

- neutral service names and capability labels;
- sample process steps and illustrative schedules;
- placeholder deliverables and specimen table data;
- example figures, clearly presented as demo data;
- fictional names where a layout genuinely requires names;
- redacted or invented document specimens;
- labels such as **Example**, **Specimen**, **Demo** or **Illustrative** where they help.

Write it to the shape the composition needs — the right number of lines, the right word lengths, the
right density, a long entry where a long entry is the risk. Content that is uniformly tidy will hide
exactly the layout failures the library is meant to find.

The library is private, so demo content does not need to read like final website copy, and **no
planning time should be spent controlling placeholder prose.**

One boundary: **do not present fictional testimonials, outcomes, awards or figures as real MindWP
evidence.** Invented material stays visibly invented — a specimen label, an obviously fictional
client name, a figure with a demo foot line. This costs nothing and prevents a private laboratory
from becoming a source of accidental claims.

Otherwise the builder has full freedom.

## 5 · Catalogue metadata recommendation

### Recommended model

The smallest structured model Wave 1 needs: **seventeen core typed fields**, plus the retained
catalogue-chrome fields listed beneath the table. Every vocabulary is already defined in
[TAXONOMY.md](./TAXONOMY.md) and should be typed as a union rather than a free string, so a typo is a
build error rather than an orphan filter value.

| Field           | Type                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`            | `` `SEC-${string}` `` — permanent, the real identity                                                          |
| `slug`          | string — URL segment, stable                                                                                  |
| `namespace`     | `"sections"` (existing field; `"system"` keeps the four proofs)                                               |
| `title`         | string                                                                                                        |
| `category`      | `"A"`–`"R"`                                                                                                   |
| `summary`       | string — the structural summary: what the composition **is**, not what it is for                              |
| `mechanism`     | `no-motion` · `css-motion` · `scroll-css` · `js-motion` · `gsap-core`                                         |
| `spatial`       | `static` · `sticky` · `pinned` · `horizontal` · `layered` · `swap-in-place` · `scroll-driven` · `user-driven` |
| `width`         | `contained` · `wide` · `breakout` · `full-bleed`                                                              |
| `density`       | `low` · `medium` · `high`                                                                                     |
| `difficulty`    | `low` · `medium` · `high` · `experimental`                                                                    |
| `scrollBudget`  | `none` · `adds` · `captures`                                                                                  |
| `reducedMotion` | `rm-free` · `rm-designed`                                                                                     |
| `a11yWatch`     | array of `kbd-path` · `text-integrity` · `motion-sensitive` · `semantics-fragile`                             |
| `status`        | `built` · `reviewed` · `revise` — lifecycle                                                                   |
| `wave`          | number                                                                                                        |
| `batch`         | number — `0` for `SEC-182`                                                                                    |

Keep the existing `surface`, `needsScrollRoom` and `component` fields: they are catalogue chrome, and
they work.

Two notes that keep this small:

- **`tags` becomes derived, not authored.** A `toTags(entry)` helper builds the display list from the
  typed fields, so `TagList`, `collectTags` and the index filter keep working unchanged and there is
  one source of truth per fact.
- **`surfaceCritical?: boolean`** is the only extra flag worth carrying; the rest of the taxonomy's
  surface dimension is a variant axis and does not belong in the registry.

### When to implement it: **during the `SEC-182` build**

**The trade-off.**

- _Before `SEC-182`_ — the schema would be designed with zero real section entries in existence, and
  it delays the wave's first and most important visual gate for a data-modelling task. It also risks
  the classic failure: a model that is right about the taxonomy and wrong about what the catalogue
  chrome actually needs to render.
- _After the first batch_ — five entries would already be registered under the loose `tags: string[]`
  shape and would need retrofitting, along with any chrome that reads them. That is small churn but
  real, and worse: the first batch review happens **without** the fields that review is supposed to
  consult. Judging scroll budget and reduced-motion cost across a batch is much harder when neither
  is recorded.
- _During `SEC-182`_ — `SEC-182` is the first `sections`-namespace entry, so the registry has to gain
  a section row anyway. Adding the typed fields at that moment costs one pass over one entry, and it
  makes `SEC-182` the worked example every later build prompt can point at.

The obvious objection to "during" is that a schema derived from one sample generalises badly. It does
not apply here: **the fields are not being invented from `SEC-182`.** Every vocabulary comes from
TAXONOMY.md, which was derived from 216 concepts. `SEC-182` instantiates the model; it does not
design it.

Allow exactly one revision window: the schema may be corrected at the **end of batch 1**, while there
are five entries rather than nineteen. After that it is stable for the wave.

**Not in scope for this chat.** The schema is not implemented here.

## 6 · Shared mechanisms

Three verdicts, applied to each mechanism:

- **Shared now** — implemented once as shared code, at or before its first Wave 1 use.
- **Shared at second use** — built component-local first, extracted when a second real use arrives.
  Nothing is abstracted from one example.
- **Local** — deliberately never abstracted, because the abstraction would reduce visual range.

The bias is toward _shared now_ only where a defect would otherwise repeat invisibly, and toward
_local_ everywhere the mechanism is the composition. **There is no universal section framework, and
none of these may grow into one.**

### Shared now

| #   | Mechanism                            | Introduced at | Why now                                                                                                                                                                                                                                    |
| --- | ------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| W1  | Width and breakout vocabulary        | `SEC-182`     | Three Wave 1 sections and much of the rest of the 101 need named escape widths. Re-deriving them per section guarantees a run of one-off widths — exactly what `SEC-182` exists to prevent. CSS only; see §10.                             |
| W2  | Scroll-driven CSS fallback contract  | `SEC-020`     | `SEC-020`, `SEC-098` and `SEC-198` all use view timelines. The failure — unstyled first paint, or nothing at all in Firefox — is silent and identical every time.                                                                          |
| W3  | GSAP scope, registration and cleanup | `SEC-193`     | The pattern already exists in `MotionProof`. What is missing is one plugin-registration module so `registerPlugin` is called once, and a written convention so three GSAP sections do not invent three lifecycles.                         |
| W4  | Pin and scrub lifecycle              | `SEC-115`     | The single most defect-prone thing in the wave: function-based ranges, refresh after webfont load, ancestor-transform breakage, Strict Mode double-registration, pin-spacer flow effects. Two Wave 1 users and five more in the selection. |
| W5  | Reduced-motion composition switch    | `SEC-020`     | Every moving section needs the same contract, and the CSS-timeline case needs a rule the existing `data-motion` convention does not yet cover (see below).                                                                                 |
| W6  | Labelled focusable overflow region   | `SEC-067`     | A scroll region without `tabindex`, a role and an accessible name is unreachable by keyboard in Safari. Six lines, no visual opinion, and wrong by default every time it is rewritten.                                                     |

**W1 — width and breakout vocabulary.** Named grid lines in one library-local stylesheet, plus the
existing width tokens. **Four positions, and only four**: one default measure plus three declared
escape positions.

| Position     | Role                                             |
| ------------ | ------------------------------------------------ |
| `measure`    | The default reading column.                      |
| `margin`     | Escape 1 — measure plus a symmetric margin band. |
| `half-bleed` | Escape 2 — the contained/wide container width.   |
| `full-bleed` | Escape 3 — edge to edge.                         |

Grid lines, never negative margins inside padded wrappers, because those do not compose.

**No one-sided bleed utilities are created here.** `bleed-left` / `bleed-right` belong to `SEC-183`
and must not be written speculatively ahead of that use — see approved decision 4.

Mapping to the taxonomy's `width` tag, so the CSS names and the metadata vocabulary do not drift into
two languages: taxonomy `contained` covers `measure` and `margin`; taxonomy `wide` is `half-bleed`;
taxonomy `breakout` is any position escaping the measure; taxonomy `full-bleed` is the `full-bleed`
position.

**W2 — scroll-driven CSS fallback contract.** Three rules: the **resting state is the CSS default**
and is the finished state; the animation is added inside
`@supports (animation-timeline: view())`; and that `@supports` block is itself nested inside
`@media (prefers-reduced-motion: no-preference)`.

**W5 — reduced-motion composition switch.** Two branches, because the wave has two mechanisms.
JavaScript sections keep the existing `data-motion` contract: the static arrangement renders by
default, and the client island sets `data-motion="on"` only after a `no-preference` match. CSS
scroll-timeline sections cannot use that, and **must not rely on the global reduced-motion block in
`foundation.css`** — forcing `animation-duration: 0.01ms` on a timeline-driven animation is not a
defined way to cancel it. They gate the whole animation behind `prefers-reduced-motion: no-preference`
instead, per W2. This distinction is a Wave 1 finding and belongs in the build report if it turns out
to be wrong.

### Shared at second use

| #   | Mechanism                                       | Local at  | Extract at | Note                                                                                                                                                                                                                                                                                                                              |
| --- | ----------------------------------------------- | --------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W7  | Controlled single-selection state and ID wiring | `SEC-082` | `SEC-144`  | Headless. **Shares only**: controlled selected state, stable panel IDs, `aria-expanded`, `aria-controls`. **Must not impose** heading levels, accordion row markup, panel placement, marker placement or layout — its two users compose completely differently, and it exists to keep the wiring correct, not to make them alike. |
| W8  | Polite status announcer                         | `SEC-119` | `SEC-163`  | A visually hidden `aria-live="polite"` region that is a sibling of the changing content, never the content itself.                                                                                                                                                                                                                |
| W9  | Sticky-stack measurement guard                  | `SEC-098` | post-wave  | The card-exceeds-viewport threshold must come from measured content height, not viewport units. Second user (`SEC-100`, `SEC-105`) is not in Wave 1, so it stays local — but written as a self-contained module so extraction is mechanical.                                                                                      |
| W10 | Whole-line mask with intact source text         | `SEC-193` | post-wave  | Mask whole lines, never characters; the intact sentence stays exposed to assistive technology; no unsplit flash before script runs. Second user (`SEC-196`, `SEC-201`, `SEC-202`) is not in Wave 1.                                                                                                                               |

### Local, deliberately

| #   | Mechanism                            | Where     | Why not shared                                                                                                                                                                                                                 |
| --- | ------------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| W11 | Native range comparison control      | `SEC-133` | It is a native `<input type="range">` plus a clip driven by a custom property. There is nothing to abstract that the platform does not already provide, and wrapping it would hide the element that carries the accessibility. |
| W12 | Filter state and dim-in-place        | `SEC-163` | The zero-reflow rule **is** the concept. A generic filter primitive would be built around reflow and would flatten it. Revisit only when a second filtering section (`SEC-035`, `SEC-038`) exists.                             |
| W13 | Artefact annotation marker placement | `SEC-144` | Marker position is composition. Only the controlled selection state and ID wiring underneath it (W7) is shared.                                                                                                                |
| W14 | Responsive media relocation          | `SEC-082` | It is the entire concept of `SEC-082`. Abstracting it would produce one relocation behaviour for a library that should contain several.                                                                                        |

## 7 · Sequencing and dependencies

### Order

**`SEC-182` first, alone, gated.** No other section begins until it is built and visually reviewed.

| Batch | Concepts                                                  | Build order within the batch                              |
| ----- | --------------------------------------------------------- | --------------------------------------------------------- |
| 0     | `SEC-182`                                                 | —                                                         |
| 1     | `SEC-001` · `SEC-020` · `SEC-057` · `SEC-162`             | `SEC-001` → `SEC-057` → `SEC-162` → `SEC-020`             |
| 2     | `SEC-067` · `SEC-070` · `SEC-119` · `SEC-145` · `SEC-147` | `SEC-145` → `SEC-070` → `SEC-147` → `SEC-119` → `SEC-067` |
| 3     | `SEC-082` · `SEC-098` · `SEC-133` · `SEC-144` · `SEC-163` | `SEC-082` → `SEC-144` → `SEC-133` → `SEC-163` → `SEC-098` |
| 4     | `SEC-193` · `SEC-198` · `SEC-107` · `SEC-115`             | `SEC-198` → `SEC-193` → `SEC-115` → `SEC-107`             |

Batch membership is fixed by the approved wave, and the within-batch orders below are **approved as
written** (decision 3). Neither changes during Wave 1. The reasoning is recorded so a later wave can
reuse it:

- **Batch 1** ends on `SEC-020` because it introduces W2 and W5, and the three pure-static
  compositions before it establish the house standard first.
- **Batch 2** runs low cost to high and ends on `SEC-067`, which introduces W6 and carries the
  batch's only genuinely fragile layout.
- **Batch 3** puts `SEC-082` immediately before `SEC-144` so the W7 extraction happens while the
  first implementation is still fresh, and ends on `SEC-098`, the batch's only scroll-driven member.
- **Batch 4** opens with the zero-JavaScript `SEC-198`, then GSAP entry motion, then the bounded pin
  that establishes W4, then the wave's only `build-high` section last — by which point everything it
  depends on exists. This also honours the recorded rule that two `build-high` sections never run
  consecutively.

### Dependency graph

| Section   | Depends on | Introduces      |
| --------- | ---------- | --------------- |
| `SEC-182` | —          | W1              |
| `SEC-001` | —          | —               |
| `SEC-057` | —          | —               |
| `SEC-162` | —          | —               |
| `SEC-020` | W1         | W2, W5          |
| `SEC-145` | W1         | —               |
| `SEC-070` | —          | —               |
| `SEC-147` | W5         | —               |
| `SEC-119` | —          | W8 (local)      |
| `SEC-067` | —          | W6              |
| `SEC-082` | —          | W7 (local), W14 |
| `SEC-144` | W7         | W13             |
| `SEC-133` | —          | W11             |
| `SEC-163` | W8         | W12             |
| `SEC-098` | W2, W5     | W9              |
| `SEC-198` | W1, W2, W5 | —               |
| `SEC-193` | W3, W5     | W10             |
| `SEC-115` | W3, W5     | W4              |
| `SEC-107` | W3, W4, W5 | —               |

No section in Wave 1 depends on another section's **composition**. The only dependencies are
mechanisms, which is the point.

## 8 · Review gates

### Gate 0 — `SEC-182` visual approval · **blocking**

`SEC-182` is built, captured and reviewed by Zeeshan before any other section starts. Approval is
explicit. The gate is not "does it work" — it is:

- does the width vocabulary read as a **system** rather than as a run of one-off widths;
- are the escape steps visibly distinct at 1440, 1280, 960 and 820;
- does the measure hold and does every caption return inside it;
- is the narrow collapse to two positions honest;
- is the CSS vocabulary something the next eighteen builds will actually want to use.

If the vocabulary is wrong, it is cheaper to redo it now than to unpick it from four batches.

### Gates 1–4 — end of each batch

Each batch ends with a review before the next begins. Per section:

- captures at 1440, 1280, 960, 820 and 390, full page;
- a reduced-motion capture where the section moves;
- console clean on load, on interaction, and on leaving and re-entering the isolated route;
- no horizontal page overflow at any of the five widths;
- a keyboard walk where the section has a keyboard contract;
- the section's own review questions from §10 answered.

Per batch:

- the catalogue home read top to bottom, **with the batch composed beside everything built so far** —
  this is the only place visual sameness becomes visible;
- shared-mechanism verdicts confirmed or corrected;
- cost recorded against the estimate.

Capture commands, using the existing script:

```bash
pnpm capture sec-182-breakout-ladder --full --width 1440
```

```bash
pnpm capture sec-182-breakout-ladder --full --width 960
```

```bash
pnpm capture sec-182-breakout-ladder --full --narrow
```

```bash
pnpm capture sec-182-breakout-ladder --full --reduced-motion
```

### Gate 5 — final Wave 1 review

The whole wave read as a collection. Feeds §12.

## 9 · Model and chat split

### Models

**Opus 5, high reasoning effort** for:

- this planning pass;
- shared mechanisms whose defects would propagate — W1, W4, and the W2/W5 reduced-motion contract;
- the difficult pinned and reduced-motion design decisions — `SEC-107`, `SEC-115`, `SEC-193`;
- the final Wave 1 cross-component review.

**Sonnet 5, maximum effort** for:

- approved individual component builds;
- static, CSS and bounded React implementation;
- validation and targeted correction.

**Do not use Opus 5 maximum effort by default.** It is not the right tier for building an approved,
well-specified section, and using it as the standing default removes the signal that a decision is
genuinely hard.

Applied to the batches: the `SEC-182` chat and the batch 4 chat run on **Opus 5 high** (they carry
W1, W4, W10 and both pin decisions). Batches 1–3 run on **Sonnet 5 max effort**, escalating to Opus
only for a specific blocked decision.

### Chats

Seven chats. **Do not build all nineteen components in one context.**

1. **Library design and Wave 1 planning** — this chat.
2. **`SEC-182`** — alone, ending at the approval gate.
3. **Batch 1.**
4. **Batch 2.**
5. **Batch 3.**
6. **Batch 4.**
7. **Final Wave 1 review.**

### What a build prompt should carry

- the individual longlist entry for each component in the batch;
- its Wave 1 brief from §10;
- the relevant parts of [../DESIGN.md](../DESIGN.md) — purpose, visual freedom, responsive
  direction, motion, quality;
- the taxonomy definitions actually in play (the component's category, and its tag dimensions);
- the shared mechanisms it depends on and any it introduces;
- the current implementation state — registry shape, `library.css`, `foundation.css`, the width
  vocabulary once it exists, and any shared mechanism already built.

**Do not require a build agent to reread the complete longlist**, BUILD-SELECTION.md, RESEARCH.md or
the full taxonomy. A batch prompt is four or five entries plus their briefs.

---

## 10 · Per-component briefs

Each brief's primary source is the concept's longlist entry. Where a brief adds direction, it adds it
inside the concept; where it recommends something the longlist does not say, it says so. **Do not
flatten an unusual concept into a generic implementation.** If a brief and the longlist entry
disagree, the longlist entry wins and the disagreement is reported.

---

### `SEC-182` · Three-Position Breakout Ladder · **batch 0, gated**

`P` · no-motion · static · build-low · slug `sec-182-breakout-ladder`

The most detailed brief in the wave, because this is the only component whose output other components
inherit.

**Why Wave 1, and why first.** It is a width vocabulary before it is a section. Built later, four
batches of one-off widths would already exist. `BUILD-SELECTION.md` calls it the highest-leverage
entry in the whole 101.

**Thesis.** A measured reading column running down a wide named-line grid, with exactly **three
declared escape positions**. Every figure lands on one of the three, so a breakout reads as a step in
a system rather than as a width somebody chose that day. Emphasis is expressed by _which step a
figure takes_. The closure is the concept: a fourth ad-hoc width would destroy it.

**The width vocabulary (W1).** One default measure plus three declared escape positions. **`SEC-182`
establishes only the positions it demonstrates** (decision 4) — the vocabulary and the section are
the same four names, and nothing is defined ahead of a real use.

| Position     | Value                                       | Job                                                |
| ------------ | ------------------------------------------- | -------------------------------------------------- |
| `measure`    | `min(100%, --measure-copy)` ≈ 65 characters | Prose. The default for everything.                 |
| `margin`     | measure plus a symmetric margin band        | Escape 1 — diagrams, sidenotes, small figures.     |
| `half-bleed` | `--container-content` / `--container-wide`  | Escape 2 — artefact plates. The taxonomy's `wide`. |
| `full-bleed` | Container edge to edge                      | Escape 3 — one image or one surface change.        |

**No one-sided bleed.** `bleed-left` and `bleed-right` are **not created here**. They are `SEC-183`'s
concept, and writing a speculative CSS API for them now would put an untested, undemonstrated
position into the shared stylesheet before any section proves what it should do.

Implementation direction:

- **One CSS grid on the section root, with named lines.** Every child defaults to `grid-column:
measure`; a position class moves it. This is the only structure that composes — negative margins
  inside a padded wrapper cannot, because each breakout would have to know its ancestor's padding,
  which is the risk the longlist names.
- **Reusable CSS, not a React wrapper.** A new library-local stylesheet (`src/styles/widths.css`,
  imported by `library.css` into `layer(library)`) holding the grid definition and the position
  classes. Custom properties for the tunable parts. **`SEC-182` must not become a mandatory React
  wrapper** — it is a composition reference and a width proof, and a wrapper component would quietly
  become the section framework DESIGN.md forbids.
- Not Tailwind `@utility`: a named-line grid position is not one declaration, and the whole
  vocabulary should be legible in one file.
- The three page-margin and container tokens already exist. Nothing new is added to shared CSS.

**Demo content.** A long service explanation — a fictional "engagement shaping" method — long enough
that the measure is genuinely tested by several paragraphs between escapes. Three figures, one per
step: a small CSS-drawn phase diagram at `margin`; a document or interface plate at `half-bleed`; and
at `full-bleed` either a photograph or one flat surface panel — this is the one step whose job is
visual mass rather than internal structure, so a real image is the natural choice. Every caption
returns to `measure`. Give at least one paragraph a long unbroken token so the measure's overflow
behaviour is exercised.

**Desktop (1440, 1280).** Prose column centred in a wide grid. Escapes appear in ascending order the
first time — `margin`, then `half-bleed`, then `full-bleed` — so the ladder is legible as a ladder,
then at least one out-of-order return later so it is clear the order is not a rule. Every figure is
followed by a return to the measure within one block.

**700–1100.** The band where this concept is most at risk: as the container narrows toward the
measure, `margin` and `half-bleed` converge and the ladder loses a rung by arithmetic rather than by
design. Direction:

- define `margin` as a **fixed** escape (measure plus a clamped band) so it stays visibly distinct
  rather than tracking the container;
- let `half-bleed` track the container minus page margin;
- when they would land within roughly one page-margin of each other, **drop `margin`** — it falls
  back to `measure` — rather than allow two steps to look accidentally identical. Three distinct
  steps or two honest ones; never two that are nearly the same.

`full-bleed` works at any width, so the band reads as measure → half-bleed → full-bleed.

**Narrow (390).** Two positions: `measure` and `full-bleed`. The `margin` figure becomes an inline
aside at full measure. Captions stay with their figures.

**Interaction or motion.** None. This is a still composition and should be judged as one.

**Reduced motion.** Not applicable — `rm-free`, nothing moves.

**Semantics and keyboard.** Ordinary prose semantics. Figures are `<figure>` / `<figcaption>`. No
keyboard contract.

**Risks.**

- Negative margins instead of grid lines — the failure the longlist names. Grid lines only.
- `100vw` adds a horizontal scrollbar's width on desktop. Use the grid's `full-bleed` line, not
  viewport units.
- The vocabulary quietly growing a fifth position during a later build. Adding a position is a
  decision, not an implementation detail — which is exactly why the one-sided bleed pair waits for
  `SEC-183`.

**Runtime.** Server Component.

**Styling.** Local CSS carries the grid and the positions; Tailwind carries ordinary spacing and type
inside the blocks.

**Depends on.** Nothing. **Introduces** W1.

**Metadata.** `SEC-182` · `P` · `no-motion` · `static` · `breakout` · `density-medium` · `build-low` ·
`budget-none` · `rm-free` · no a11y watch · batch 0.

**Review questions.**

1. Do the three steps read as a system, or as three widths?
2. Is each step visibly distinct at 1440, 1280, 960 and 820?
3. Does the measure hold, and does every caption return to it?
4. Is the two-position narrow collapse honest, or degraded?
5. Would you reach for this CSS in the next section without changing it?

**Complete when.** The general completion standard, plus: the width vocabulary exists as documented
reusable CSS holding exactly the four demonstrated positions and no others; the
`margin`/`half-bleed` convergence rule is implemented and visible in the 820 capture; the metadata
model from §5 is implemented and `SEC-182` is its first entry.

---

### `SEC-001` · Standfirst Opener Plate · batch 1

`A` · no-motion · static · build-low · slug `sec-001-standfirst-opener`

**Why Wave 1.** A pure-typography opener with no media at all. It sets the house standard for type,
measure and rule, and it is the cheapest possible test of whether the shared display scale composes
at section size.

**Thesis.** Five distinct type registers stacked in one column — kicker, headline, standfirst,
attribution, body with a sunken cap — separated by a hairline. Hierarchy is the whole composition.
No image anywhere, and no eyebrow-headline-paragraph reflex: the standfirst is set larger and looser
than body and is doing real work.

**Demo content.** A method-section opener. Kicker `Method`; a balanced two-line headline; a
three-line standfirst; an attribution line that is clearly demo (`Specimen · delivery team note`);
two or three body paragraphs, the first starting with the cap.

**Desktop.** One column hung on the left grid columns rather than centred. Headline at display scale
with balanced wrapping. Standfirst indented to the measure. Hairline crossing the full container
beneath it. Cap sunk three lines into the first paragraph.

**700–1100.** The column stops being hung and the kicker moves above the headline earlier than at
narrow. The hairline still crosses the container, not the measure — the width difference between the
two is the composition's only remaining tension at this width, so it must stay visible.

**Narrow.** Rule edge to edge, cap drops two lines, kicker above the headline.

**Interaction or motion.** None.

**Reduced motion.** Not applicable.

**Semantics and keyboard.** The cap must be **presentational**: `::first-letter` with
`initial-letter`, inside `@supports`, falling back to a float with an explicit line-height. Never a
`<span>` — a marked-up cap reads as a separate token to assistive technology and breaks selection
across the first line.

**Risks.** `initial-letter` support; the float fallback drifting off the baseline at different
font sizes; the display scale's optical tracking passing a large negative letter-spacing down to
small text inside the same element (the `.catalogue-label` note in `foundation.css` records this
exact trap).

**Runtime.** Server Component.

**Styling.** Tailwind for the stack; a few lines of local CSS for the cap.

**Depends on.** Nothing.

**Metadata.** `SEC-001` · `A` · `no-motion` · `static` · `contained` · `density-low` · `build-low` ·
`budget-none` · `rm-free` · `text-integrity` · batch 1.

**Review questions.** Are all five registers genuinely distinct? Does it read as an article opener or
as a marketing header? Is the cap an asset or a trick? Does the hung column survive 960?

**Complete when.** The general completion standard, plus: the cap is presentational and selectable as
part of its sentence, and the fallback is verified.

---

### `SEC-057` · Unequal Diptych · batch 1

`E` · no-motion · static · build-low · slug `sec-057-unequal-diptych`

**Why Wave 1.** The most reliable premium composition the research found, and a static concept
protected for range rather than score. If this one is not visually convincing, the "hard static
composition" correction in the selection did not take.

**Thesis.** Two regions at a deliberately unequal ratio sharing one baseline grid. The narrow side
carries only a caption stack or spec list; the wide side carries the artefact. Asymmetry and shared
baselines do the composing. **No decoration, no card, no border, no rounded container.**

**Demo content.** One deliverable — a CSS-built plan page, schedule or specification plate — plus
three short caption blocks on the narrow side: a label, a two-line note, and a small spec list.

**Desktop.** Roughly 38/62. The artefact runs the wide side's full height. The narrow side's three
blocks hang from the artefact's own baselines, locked top and bottom rather than evenly spaced.

**700–1100.** Holds two regions as long as the narrow side can carry its caption stack without the
lines breaking badly — roughly to 880. Below that it becomes the narrow composition. Do not let it
sit in a squeezed two-column state; the ratio argument is either legible or it is not being made.

**Narrow.** A different section, not a degraded one: artefact with the caption stack beneath it. The
ratio argument is not made, and that is stated rather than faked.

**Interaction or motion.** None.

**Reduced motion.** Not applicable.

**Semantics and keyboard.** None beyond ordinary prose and `<figure>`. Because rank and relationship
are carried entirely by ratio and alignment — both invisible non-visually and both absent in one
column — the caption stack must read correctly as ordinary prose on its own.

**Risks.** Baseline sharing is arithmetic, not a property: it needs consistent line-height and
deliberate block offsets, and it breaks the moment a caption gains a line. Author the demo content to
the line counts the composition assumes, then test one caption with an extra line.

**Runtime.** Server Component.

**Styling.** Tailwind grid; local CSS for baseline locking.

**Depends on.** Nothing.

**Metadata.** `SEC-057` · `E` · `no-motion` · `static` · `contained` · `density-low` · `build-low` ·
`budget-none` · `rm-free` · batch 1.

**Review questions.** Is the asymmetry deliberate or accidental? Do the baselines actually align, at
every reviewed width? Does the narrow version read as designed? Could this hold four different
artefacts without redesign?

---

### `SEC-162` · Deliverables Ledger · batch 1

`N` · no-motion · static · build-low · slug `sec-162-deliverables-ledger`

**Why Wave 1.** The wave's density register, and the first test of whether the shared type scale
survives at `density-high`.

**Thesis.** Every deliverable in an engagement, listed with format, owner, review cycle and week
number, deliberately unsummarised. **The refusal to condense is the argument.** The heading carries
the raw count.

**Demo content.** Roughly forty rows across twelve weeks. Realistic field lengths, including two or
three deliberately long format and owner strings so the character-budget risk is actually exercised
rather than designed around.

**Desktop.** One wide title column and four narrow ones. Week numbers ranged right in tabular
numerals. A heavier rule every fourth row marks the sprint boundary. Heading reads as a count —
"forty-one deliverables across twelve weeks".

**700–1100.** Five columns hold with tighter type down to roughly 860, then the record form takes
over. Do not introduce a horizontal scroll here — that is `SEC-067`'s answer, and repeating it would
make two concepts one.

**Narrow.** Week number becomes a leading hairline label above each record; the remaining fields
stack as label-and-value pairs in source order.

**Interaction or motion.** None.

**Reduced motion.** Not applicable.

**Semantics — approved decision 1.** **This is not a `<table>`.** Build it as an **ordered list of
records, each record a definition list** of field/value pairs, laid out as aligned columns at desktop
by CSS grid. Binding details:

- **one source order** at every width — the record order never changes, and no field is reordered
  between the desktop and narrow renderings;
- **field labels stay available per record**, so a record read on its own still says what each value
  is. At desktop they may be visually suppressed in favour of the header row, but never removed from
  the record;
- **the desktop header row may be presentational** — it labels the columns for a sighted reader and
  carries no semantic relationship the record itself does not already express;
- **a horizontally scrolling table is not an acceptable answer for this concept.** That is `SEC-067`'s
  contract; using it here would collapse two concepts into one and abandon the narrow composition
  this concept is partly about.

Why this is right: it gives exactly the narrow transformation the longlist asks for with one DOM and
no display hacks; it avoids the `semantics-fragile` trap of reshaping table elements with display
properties; and the concept is documentation of what arrives, not a data table whose cell
relationships need announcing. The taxonomy tags this `text-integrity`, not `semantics-fragile`,
which supports the reading.

**Risks.** Long strings pushing the ledger into horizontal overflow; the grid losing alignment when a
value wraps; tabular numerals not applying to the week column.

**Runtime.** Server Component.

**Styling.** Local CSS for the record grid and the sprint rules; Tailwind for type and spacing.

**Depends on.** Nothing.

**Metadata.** `SEC-162` · `N` · `no-motion` · `static` · `contained` · `density-high` · `build-low` ·
`budget-none` · `rm-free` · `text-integrity` · batch 1.

**Review questions.** Does the density read as credibility or as a dump? Is the sprint rule doing
visible work? Does the narrow record form still feel like a ledger? Do the long strings break it?

---

### `SEC-020` · Alternating Artefact Rows · batch 1

`B` · scroll-css · static · build-low · slug `sec-020-artefact-rows`

**Why Wave 1.** A full-width repeating row rather than a column set, and the wave's first
scroll-driven CSS. It introduces W2 and W5 at the cheapest possible cost.

**Thesis.** Six rows, each one claim paired with one real artefact, alternating side, all registering
against **one continuous hairline running the section's full height at the seam**. The seam is what
stops it being a template.

**Demo content.** Six capabilities, each with a one-line display-scale claim, a short paragraph, and
a CSS-built artefact at true proportion — a schedule, a report page, a form, a chart, a checklist, a
plan. Captions hang in the outer margin.

**Desktop.** Rows at roughly 55/45 with handedness flipping each row. Claim is one display line plus
a short paragraph. Artefact is a real deliverable at true proportion, never a stock photograph.

**700–1100.** Alternation survives as long as both sides are legible. Around 900 the artefact stops
reading at true proportion; below that, stack. Direction for the band: keep alternation but reduce
the artefact to its most legible fragment rather than shrinking the whole thing.

**Narrow.** Alternation has no honest narrow form. Every row becomes artefact above claim in one
column, and the seam rule moves to the leading edge.

**Motion.** Each row resolves once on entry, artefact settling a beat after its claim line, adjacent
rows batched so they read as one group rather than six unrelated animations. CSS view timelines, no
JavaScript.

**Reduced motion.** **Same composition.** With the animation gated off, the rows are already in their
settled state, because W2 makes the resting state the CSS default. Note that the longlist tags this
`rm-designed`; if the build confirms same-composition, the metadata should record `rm-free` and the
discrepancy should be reported rather than silently reconciled.

**Semantics and keyboard.** Rows are a list. **Handedness must be a layout decision over one authored
source order** — flipping sides by reordering source desynchronises reading order from DOM order.
Use grid placement per row parity.

**Risks.** The source-order trap above. The seam hairline failing to run continuously across row
gaps. View timelines unsupported in Firefox — W2 covers it.

**Runtime.** Server Component. Zero JavaScript.

**Styling.** Local CSS for the seam, the row grid and the timelines; Tailwind for type and spacing.

**Depends on.** W1. **Introduces** W2, W5.

**Metadata.** `SEC-020` · `B` · `scroll-css` · `static` · `wide` · `density-medium` · `build-low` ·
`budget-none` · `rm-designed` (confirm at build) · batch 1.

**Review questions.** Does the seam hold the rows together, or is it decoration? Do six rows read as
one composition or as six sections? Is the batched resolve legible as one group? Does the narrow
single column still have rhythm?

---

### `SEC-145` · Redacted Document Plate · batch 2

`M` · no-motion · static · build-low · slug `sec-145-redacted-document`

**Why Wave 1.** The proof family is the heaviest allocation in the selection and the one least
available anywhere else. This is its cheapest member and its most distinctive device.

**Thesis.** A genuine-looking client document as a plate, with identifying fields blocked out in
solid bars **set on the document's own baselines**, so the redaction reads as deliberate typographic
composition rather than as damage. The bars are the compositional rhythm.

**Demo content.** One or two invented document specimens built entirely in HTML and CSS at true page
proportion — an engagement scope, a review report. Redaction bars over names, addresses and figures,
aligned to the document's grid. Caption states what the document was for. **Everything invented and
visibly so** — a specimen label in the caption is enough.

**Desktop.** One or two documents at true page proportion on a wide neutral field, inset from the
container edge. Bars aligned to the document grid. A short caption block at the foot naming the
decision the document served. `surface-critical`: the navy-field-with-paper-plates variant is the one
to build, because the field is what makes the plate read as an object.

**700–1100.** Two-up becomes one-up around 900 rather than shrinking both below legibility.

**Narrow.** One document per screen at container width, caption directly beneath. **No scaling below
legible body size** — where the document cannot be read at that width, say so in an honest note
rather than shipping an illegible thumbnail.

**Interaction or motion.** None.

**Reduced motion.** Not applicable.

**Semantics and keyboard.** The document is a complex artefact: it needs a real written description,
not an alt string. Because it is CSS-built, the honest answer is that the document's text **is** the
description and the redaction bars carry `aria-hidden`, with a caption explaining what was removed
and why.

**Risks.** Bars that do not sit on the baselines read as damage — this is the whole concept and the
only real risk. Also: a redacted specimen that is CSS text still contains the "redacted" text in the
DOM unless it is genuinely absent. Author the specimen with the fields absent, not covered.

**Runtime.** Server Component.

**Styling.** Local CSS for the document specimen and the bars; Tailwind for the field and caption.

**Depends on.** W1.

**Metadata.** `SEC-145` · `M` · `no-motion` · `static` · `contained` · `density-low` · `build-low` ·
`budget-none` · `rm-free` · `surfaceCritical: true` · batch 2.

**Review questions.** Do the bars read as composition or as censorship? Is the plate convincingly a
document? Does the navy field earn itself? Does the one-up narrow state still argue anything?

---

### `SEC-070` · Recommended By Structure · batch 2

`F` · no-motion · static · build-low · slug `sec-070-recommended-by-structure`

**Why Wave 1.** Comparison is the family nearest-absent from every catalogue surveyed, and this is
the cheapest way to prove the library can express emphasis without a badge.

**Thesis.** Three approaches, where the recommended one is wider, taller and one surface step darker
than its neighbours — and carries **no badge, ribbon or "most popular" label**. The recommendation is
a fact of the layout. It survives a screenshot; a badge does not.

**Demo content.** Three engagement shapes with neutral names, each with a short positioning line,
four or five attributes, and one closing sentence. The recommended one carries one extra line per
row — that extra line is part of the emphasis.

**Desktop.** Three columns at roughly 1 : 1.4 : 1. The centre column starts higher and ends lower,
sits on the darker surface, and carries one extra line of type per row. The outer two stay flat
paper.

**700–1100.** Three columns hold to roughly 900. The ratio must not compress to the point where 1.4
reads as 1.1 — if it would, stack early rather than lose the emphasis. This is the band that decides
whether the concept works at all.

**Narrow.** Recommended column first, keeping its darker surface and larger type. The other two
follow at equal weight beneath it.

**Interaction or motion.** None.

**Reduced motion.** Not applicable.

**Semantics and keyboard.** The recommended column is **authored first in source** and only moved to
the centre on wide screens — visual reordering alone would leave source order disagreeing with the
argument. If any interactive element is added, check that the visual reorder has not produced a
confusing tab order.

**Risks.** The surface step being too subtle to read as intentional, or too strong and reading as a
card. `surface-critical`: this depends on a real value step, so it must be judged against the actual
surface tokens rather than assumed.

**Runtime.** Server Component.

**Styling.** Tailwind grid with local CSS for the vertical offset and the column ordering.

**Depends on.** Nothing.

**Metadata.** `SEC-070` · `F` · `no-motion` · `static` · `contained` · `density-medium` ·
`build-low` · `budget-none` · `rm-free` · `surfaceCritical: true` · batch 2.

**Review questions.** Is the recommendation unmistakable without a label? Does the geometry read as
confident or as a mistake? Does 900 hold the ratio? Does the narrow stack still recommend?

---

### `SEC-147` · Evidence-Footed Figure Band · batch 2

`M` · js-motion · static · build-low · slug `sec-147-evidence-footed-figures`

**Why Wave 1.** It tests whether a small hand-written client island is cheaper than GSAP for one
small job — a deliberate counter-sample to the wave's three GSAP sections.

**Thesis.** Four display-scale figures, each standing above a **permanently visible foot line** giving
source, period and denominator. The provenance is structural: the foot cannot be omitted without
changing the concept. Numerals count once on entry and never animate again.

**Demo content.** Four figures with clearly illustrative foot lines — "Demo data · rolling 12 months
· n = 41". No icons anywhere.

**Desktop.** A wide band of four columns divided by hairlines. Figure at display scale, unit small
beside it, then a two-line foot.

**700–1100.** Four columns become 2 × 2 around 1000. The foot line keeps its full length at every
width — truncating it removes the section's reason for existing.

**Narrow.** 2 × 2 or a single column of four, foot lines intact.

**Motion.** Each figure counts up once as its own column enters, then holds permanently. **No
re-trigger on scroll back** — a figure that re-animates reads as decoration rather than as an
established fact.

**Reduced motion.** **Same composition.** The final figure is what the server renders; the count
animates from a lower value only in the no-preference branch. With motion off, the true numbers are
simply there.

**Semantics and keyboard.** None. The numerals are ordinary text and must not be a live region — a
counting figure that announces every frame is worse than no animation.

**Risks.** Re-triggering; the count leaving a rounding artefact at the end; the observer not
disconnecting.

**Runtime — approved decision 5.** Server Component with **one small client island** for the counter —
`IntersectionObserver` plus `requestAnimationFrame`, with explicit disconnect and cancel on unmount.
**The counting interaction is kept for this first build.** Do not use GSAP: the concept is one count,
`js-motion` means GSAP would improve it rather than that it is required, and building it by hand is
the informative choice. Whether the no-count static variant is visually better is judged **after** the
build, from the built result — it is not pre-empted, and if the island costs more than a GSAP tween
would, that is a Wave 1 finding worth having.

**Styling.** Tailwind for the band; local CSS for the hairline divisions and tabular figures.

**Depends on.** W5.

**Metadata.** `SEC-147` · `M` · `js-motion` · `static` · `wide` · `density-medium` · `build-low` ·
`budget-none` · `rm-designed` (confirm — likely `rm-free`) · batch 2.

**Review questions.** Does the foot line look structural or apologetic? Do the figures hold at 2 × 2?
Is the count worth its JavaScript? Would the no-count-at-all variant be better?

---

### `SEC-119` · Deterministic Engagement Stepper · batch 2

`K` · css-motion · user-driven · build-low · slug `sec-119-engagement-stepper`

**Why Wave 1.** Reader-driven pacing with **no scroll budget and no pin arithmetic at all** — the
counter-argument to scroll-led process sections, and the wave's first managed React state.

**Thesis.** One step panel at a time inside a locked frame, advanced by real prev/next buttons and
arrow keys, with a large tabular "03 / 05" beside a segmented rule. Nothing responds to scroll, so it
behaves identically on a trackpad, a phone and a keyboard.

**Demo content.** Five engagement stages. Each: one outcome sentence, a short deliverable list, one
CSS-built artefact plate. Make the steps genuinely different lengths so the locked-height solution is
actually tested.

**Desktop.** Left third carries the counter, the step title and the two controls. Right two-thirds
carries the panel. **Panel height is locked to the tallest step so the page never jumps.**

**700–1100.** The third/two-thirds split holds to roughly 900; below that, counter and controls move
above the panel at full width. The locked height must be recomputed by layout, not by a stored pixel
value.

**Narrow.** Same frame at full width, counter and controls above the panel, **swipe added alongside
the buttons rather than replacing them**.

**Motion.** Incoming panel content shifts a few pixels in the direction of travel over a short
duration. The counter digit swaps with no animation at all.

**Reduced motion.** **Same composition.** The shift is a transition; removing it leaves the identical
panel.

**Semantics and keyboard.** The real contract of this section:

- prev/next are real `<button>`s, disabled or wrapped deliberately at the ends;
- arrow keys work when focus is inside the section;
- **focus is retained on the pressed control** — it must not jump into the panel;
- a **visually hidden `aria-live="polite"` status** (W8) announces "Step 3 of 5 — [title]". The panel
  itself must not be the live region, or every step change re-announces the whole panel;
- inactive panels are `inert` as well as hidden, so their content is not tabbable.

**Risks.** Height locking by JavaScript measurement is fragile. **Recommendation: no measurement at
all** — render all five panels stacked in one grid cell (`grid-area: 1 / 1`), inactive ones
`visibility: hidden` + `inert`. The container is naturally as tall as the tallest step, at every
width, after font load, with no JavaScript.

**Runtime.** Client Component.

**Styling.** Tailwind for the frame; local CSS for the segmented rule and the stacked-panel grid.

**Depends on.** Nothing. **Introduces** W8 (local).

**Metadata.** `SEC-119` · `K` · `css-motion` · `user-driven` · `contained` · `density-medium` ·
`build-low` · `budget-none` · `rm-free` · `kbd-path` · batch 2.

**Review questions.** Does the counter chrome carry enough weight to be the left third? Does the
locked height feel deliberate or empty on the shortest step? Is arrow-key traversal discoverable?
Does it read as a stepper rather than as tabs?

---

### `SEC-067` · Contained Matrix, Both Axes · batch 2

`F` · no-motion · sticky · build-medium · slug `sec-067-contained-matrix`

**Why Wave 1.** The implementation model is the concept, and it is the one dense form the research
says is historically fragile. Getting it right once gives the library a reusable answer for every
later comparison.

**Thesis.** **One real table** carrying the whole comparison inside a named, focusable scroll region,
so only the matrix moves sideways while heading, legend, footnotes and CTA reflow normally around it.
**The matrix never becomes cards at any width.** Hairline rules, tabular numerals, **words rather
than tick glyphs**.

**Demo content.** Four engagement options against ten to fourteen criteria. Cells contain short
sentences and phrases, not ticks — that is the concept. Include two or three long cells so the
column-width behaviour is exercised.

**Desktop.** Full container width. Sticky header row of the options and sticky first column of
criteria. Top-left cell stays blank. Legend above the region.

**700–1100.** The region begins scrolling horizontally inside itself while everything around it
reflows. This is the band where the containment idea first becomes visible, so it is the most
important capture for this section.

**Narrow.** Same behaviour at 320 up: the region scrolls inside itself, first column pinned so every
cell keeps its row label.

**Interaction or motion.** No motion. Scroll inside a contained region only.

**Reduced motion.** Not applicable.

**Semantics and keyboard.** The wave's strictest contract:

- a real `<table>` with `<caption>`, `<th scope="col">` and `<th scope="row">`;
- **never** reshaped with display properties — `semantics-fragile` means exactly this;
- the scroll region (W6) carries `tabindex="0"`, `role="region"` and an accessible name. Without all
  three, later columns are unreachable by keyboard in Safari;
- a visible focus indicator on the region itself.

**Risks.** Two intersecting sticky axes inside an overflow container is the most
compositing-expensive dense form there is, and it is historically fragile in iOS Safari. Sticky `th`
needs `border-collapse: separate` with `border-spacing: 0`, and hairlines drawn with box-shadow or
pseudo-elements rather than borders. The top-left cell needs the highest stacking order of the four
sticky states.

**Runtime.** Server Component. No JavaScript is required for any of it.

**Styling.** Local CSS throughout — this is precisely the case Tailwind would flatten.

**Depends on.** Nothing. **Introduces** W6.

**Metadata.** `SEC-067` · `F` · `no-motion` · `sticky` · `contained` · `density-high` ·
`build-medium` · `budget-none` · `rm-free` · `kbd-path`, `semantics-fragile` · batch 2.

**Review questions.** Does the contained region read as deliberate or as a broken table? Do both
sticky axes hold at every width? Do sentences instead of ticks change what the section argues? Is the
region's focus state obvious?

---

### `SEC-082` · Relocating Pane Accordion · batch 3

`G` · css-motion · swap-in-place · build-medium · slug `sec-082-relocating-pane`

**Why Wave 1.** **Responsive transformation is the concept** — the wave's only section whose narrow
form is the point rather than a consequence. It is also where W7's controlled selection state and ID
wiring is first written.

**Thesis.** A list of rows beside one persistent media pane. Opening a row changes the pane; below
the breakpoint that same pane **moves inside the open row**, so the small-screen version is a
different composition from identical markup. The pane changes parent — it is not hidden, duplicated
or dropped.

**Demo content.** Five service-line rows, each with a numbered summary, a short answer, and one
CSS-built artefact for the pane — a report page, a schedule, a chart, a form, a checklist.

**Desktop.** A narrow left column of numbered summary rows, one open by default. A large right pane
holding the open row's artefact. The pane is never empty and never shows more than one artefact.

**700–1100.** This band **is** the concept's demonstration. Recommendation: put the container-query
threshold at roughly 900–960, so both compositions are visible inside the reviewed band — the
two-column relocation above it, the pane-in-row below. Capture both sides of the threshold.

**Narrow.** The pane sits inside the open row, directly beneath its answer, list order untouched.

**Implementation direction — how the pane relocates without moving DOM.** Render each row's pane
**inside that row's markup**. In the wide branch, place the section as a grid with a list column and
a pane column, and give the open row's pane `grid-column: pane; grid-row: 1 / -1` so it visually
occupies the whole right column while living in the open row. In the narrow branch, it simply flows
where it is. One DOM, no duplication, no JavaScript node moves.

**Motion.** Only the media changes state. The answer text simply appears — **reading is never gated
on an animation finishing.**

**Reduced motion.** **Same composition.** The media cross-fade is a transition; removing it leaves an
instant swap of the identical layout.

**Semantics and keyboard.** This section keeps the **full accordion contract**:

- each row's **heading contains a `<button>`** with `aria-expanded` and `aria-controls`;
- state is managed in React — **never `details`/`summary`**, which cannot express single-open
  coordination;
- the panel is a region labelled by its button.

The heading levels, the row markup and the panel placement all belong to this section. Only the part
underneath — controlled selected state, stable panel IDs, `aria-expanded` and `aria-controls` — is
W7, written local here and extracted at `SEC-144`. Write that part so extraction is mechanical: state
and ID wiring in one place, **with no markup or layout opinions inside it.**

**Risks.** The sticky pane. A tall sticky media pane keeps a large composited surface alive for the
whole section and **must stop being sticky the moment the columns stack**, or it pins over the text.
With the grid approach, sticky exists only in the wide branch — which is the reason to prefer it.

**Runtime.** Client Component.

**Styling.** Local CSS for the relocation grid and container query; Tailwind for the rows.

**Depends on.** Nothing. **Introduces** W7 (local), W14.

**Metadata.** `SEC-082` · `G` · `css-motion` · `swap-in-place` · `contained` · `density-medium` ·
`build-medium` · `budget-none` · `rm-free` · `kbd-path` · batch 3.

**Review questions.** Do the two compositions both read as designed? Is the transformation legible
when you resize past the threshold? Is the pane ever empty or doubled? Does the keyboard path reach
every row and every pane?

---

### `SEC-144` · Annotated Deliverable Plate · batch 3

`M` · css-motion · user-driven · build-medium · slug `sec-144-annotated-plate`

**Why Wave 1.** The reader interrogates one artefact rather than comparing several, and the note text
is authored to stand alone — a content-model change, not a styling one. It is also where W7 gets
extracted.

**Thesis.** One large, real deliverable held at reading size with small numbered markers on it.
Activating a marker expands its note in place beside the plate. **A full written description sits
permanently beneath**, so the section argues correctly even with the image unseen.

**Demo content.** One CSS-built deliverable — a plan page or an interface capture — with five or six
numbered markers. Each note is two or three sentences that make sense read on their own, out of
order. The standing prose beneath is a genuine paragraph description of the artefact, not a caption.

**Desktop.** The artefact occupies roughly two thirds of a wide container inside a hairline frame,
markers on it. A right-hand column holds the active note. The permanent prose description sits under
the plate at measure.

**700–1100.** Two stages inside the band. Above roughly 1000: plate plus note column. Between 1000
and 760: note column moves beneath the plate, markers stay on the artefact. This is a real
intermediate composition, not a step on the way to narrow.

**Narrow.** Plate goes full width, markers become a numbered list beneath the image, each note opens
inline in document order.

**Motion.** The active note expands with a short height-and-opacity change while its marker gains
weight. Nothing else on the plate moves.

**Reduced motion.** **Same composition.** The expansion is a transition.

**Semantics and keyboard.** **This is not an accordion**, and must not be described or built as one.
It is a set of ordinary numbered marker buttons and their note panels. Hotspots are routinely built
as divs with click handlers, which strands keyboard and screen-reader users. Here:

- markers are real `<button>`s, authored in numbered order so tab order follows reading order rather
  than visual position — no heading wrapper, no accordion row;
- the controlled selection state and ID wiring come from W7, extracted from `SEC-082` at this point.
  W7 supplies the selected state, the stable panel IDs, `aria-expanded` and `aria-controls`, and
  **nothing about markup, marker placement, panel placement or layout** — all of which this section
  owns;
- the standing prose **is** the artefact's long description, and is referenced as such rather than
  duplicated in an alt string.

**Risks.** Marker positions expressed in absolute pixels drift the moment the plate scales — use
percentages against the plate's own box. Markers colliding at intermediate widths. The note column
changing height and moving the plate.

**Runtime.** Client Component.

**Styling.** Local CSS for the plate, markers and frame; Tailwind for the note column and prose.

**Depends on.** W7. **Introduces** W13.

**Metadata.** `SEC-144` · `M` · `css-motion` · `user-driven` · `contained` · `density-medium` ·
`build-medium` · `budget-none` · `rm-free` · `kbd-path`, `semantics-fragile` · batch 3.

**Review questions.** Does the plate read as a real deliverable? Do markers sit where the eye wants
them, at all four widths? Does the section still argue with the image ignored? Is the numbered-list
narrow form a design or a fallback?

---

### `SEC-133` · Single-Control Delta Slider · batch 3

`L` · js-motion · user-driven · build-medium · slug `sec-133-delta-slider`

**Why Wave 1.** The control model is the concept, and the before/after family has no maintained
equivalent in any surveyed catalogue. It is the cheapest way to prove the library can do state change
without a drag handle.

**Thesis.** One artefact frame holding both states, the boundary between them driven by **a single
visible native range control beneath the frame** rather than a hidden drag handle. The readout names
the measured delta at the handle's position, so the interaction produces **evidence** rather than a
party trick.

**Demo content.** One CSS-built artefact in two states — a document layout before and after
restructuring, or a report page before and after a redesign. A delta figure that follows the handle
and is clearly labelled demo data.

**Desktop.** A wide frame with both states stacked in one grid cell, the after state clipped against
the before. **Before** and **After** labels permanently in opposite top corners. The track runs the
full frame width beneath, with the delta figure at display scale to its left.

**700–1100.** Frame narrows; the delta numeral drops below display scale rather than wrapping. The
track stays full frame width. Check that the two states are still distinguishable at this size — if
they are not, the artefact is too detailed.

**Narrow.** Frame full width, track beneath as a large touch target, **delta readout moved above the
frame so a finger never covers it**.

**Interaction.** Nothing moves on its own. The seam and readout follow the input value. A short ease
on **keyboard steps only**, so an arrow press reads as a deliberate move while pointer dragging
tracks the finger exactly — implement by toggling a class on `keydown` versus `pointerdown`.

**Reduced motion.** **Same composition.** Remove the keyboard-step ease; everything else is direct
manipulation, which is not motion.

**Semantics and keyboard.** The native `<input type="range">` is **load-bearing**:

- it gives pointer, keyboard and assistive-technology access with no custom code;
- `aria-valuetext` should carry the delta in words, not the raw percentage;
- the focus ring must hold 3:1 against both states and against the track;
- a div with a `pointermove` listener would have no keyboard path, no announced value, and would
  compete with page scroll on touch. Not an option.

**Implementation direction.** The input's value writes a custom property on the frame; the after
layer is clipped with `clip-path: inset(...)` from that property. No layout thrash, no measurement.

**Risks.** Styling a native range across browsers while keeping the focus ring. The clip seam showing
a subpixel gap. The two states differing so subtly that the section proves nothing.

**Runtime.** Client Component.

**Styling.** Local CSS for the frame, clip and track; Tailwind for the surrounding composition.

**Depends on.** Nothing. **Introduces** W11 (local, deliberately).

**Metadata.** `SEC-133` · `L` · `js-motion` · `user-driven` · `contained` · `density-low` ·
`build-medium` · `budget-none` · `rm-free` · `kbd-path` · batch 3.

**Review questions.** Is the delta readout evidence or decoration? Does the visible track read better
than a hidden handle? Is the focus state obvious on both states? Does the narrow layout keep the
readout clear of the finger?

---

### `SEC-163` · Alphabetical Capability Index · batch 3

`N` · css-motion · user-driven · build-medium · slug `sec-163-capability-index`

**Why Wave 1.** **The zero-reflow rule is the concept** — the reader keeps the whole surface area in
view while narrowing it, which is a different reading activity from a grid that re-lays. It also
extracts W8.

**Thesis.** Every capability in one ungrouped alphabetical list, with an instant keyword filter that
**dims non-matches in place with zero reflow**, and a live result count written into the heading.
Nothing moves; contrast alone does the filtering.

**Demo content.** Sixty to seventy neutral capability names, genuinely alphabetical, with varied
lengths. The heading reads as a live sentence: "Sixty-eight capabilities, nine matching your term."

**Desktop.** Four columns of hairline-small names filling the contained width. A single
rule-underlined filter field above. No card, no border, no search icon.

**700–1100.** Four columns become three around 1000. Column count changing is a layout change, not a
reflow of the filtered result — the two must not be confused. The filter must never cause the column
count to change.

**Narrow.** Two columns. Filter field pinned to the top of the **section**, not the viewport.

**Motion.** Non-matching entries drop to a dim tint over about 150ms while matches hold full
contrast. **No item changes position.**

**Reduced motion.** **Same composition.** The tint applies instantly instead of over 150ms.

**Semantics and keyboard.** Dimming has no non-visual equivalent, so:

- the result count lives in a **polite live region** (W8, extracted here from `SEC-119`);
- dimmed entries must either keep sufficient contrast **or be honestly removed from the accessibility
  tree**. Recommendation: dim below contrast and mark non-matches `aria-hidden="true"`, since the
  items are plain text and not focusable. If they ever become links, add `inert` too;
- the filter field is a real labelled `<input>`, not a styled div.

**Risks.** A live region that fires on every keystroke and floods the screen reader — debounce the
announcement, not the filtering. Column balance shifting when text lengths vary. `aria-hidden` on
focusable content.

**Runtime.** Client Component.

**Styling.** Local CSS for the columns and the dim state; Tailwind for the field and heading.

**Depends on.** W8. **Introduces** W12 (local, deliberately).

**Metadata.** `SEC-163` · `N` · `css-motion` · `user-driven` · `contained` · `density-high` ·
`build-medium` · `budget-none` · `rm-free` · `kbd-path` · batch 3.

**Review questions.** Does zero reflow feel better than a reflowing filter, or just different? Is
breadth legible before you type? Does the live-sentence heading work or read as a gimmick? Are the
columns balanced at three and two?

---

### `SEC-098` · Deck That Accumulates · batch 3

`I` · scroll-css · sticky · build-medium · slug `sec-098-accumulating-deck`

**Why Wave 1.** A sticky deck that gives an ordered argument felt weight **without taking the page's
scroll away** — the baseline of its register, built before its ambitious members (`SEC-100`,
`SEC-105`).

**Thesis.** Each card sticks at the same top offset and the next slides over it with a small offset
and a slight scale-down, so a physical stack of five claims is built by the section's end and the
count is readable as a stepped edge. **Nothing is ever replaced or removed.**

**Demo content.** Five engagement stages. Each card: a number, a claim line and one CSS-built
artefact. Deliberately vary the card content length so the height-sensitivity risk is exercised.

**Desktop.** Full-measure cards at roughly three-quarter viewport height. The stack's stepped edge
grows at the top of the viewport.

**700–1100.** Same behaviour with reduced offsets. The stepped edge must remain readable as a count —
if the offsets shrink until the steps merge, reduce the card count rather than the offset.

**Narrow.** Same behaviour with reduced offsets, falling back to plainly stacked cards wherever a
card exceeds the viewport height.

**Motion.** Each outgoing card steps down in scale and loses a little contrast as it is covered, so
depth reads **without shadow theatre**. Driven by CSS view timelines per card.

**Reduced motion.** **Same composition, minus the depth cue.** `position: sticky` is layout, not
animation, and stays. The scale-and-contrast step is gated off. Confirm at build that the stack still
reads without it; if it does not, a separate composition is required and the metadata must say so.

**Semantics and keyboard.** Cards are a list. No keyboard contract.

**Risks — the one that matters.** Cards whose height changes with copy silently break the timing.
**The card-exceeds-viewport test must not be made against viewport units on mobile**, where the
toolbar retracting changes the value mid-scroll and dynamic viewport units are throttled. The
threshold must come from **measured content height**, recalculated on resize and font load.

**Implementation direction.** Server Component for the composition, plus **one small client child**
(W9) that observes the tallest card with a `ResizeObserver` and toggles a data attribute on the root
between the stacking and plain-stack branches. Rejected alternative: a `100svh`-based media query —
it is exactly the failure the longlist names. Write W9 as a self-contained module so extraction at
`SEC-100` is mechanical.

**Runtime.** Server Component with one client child.

**Styling.** Local CSS for the sticky stack and timelines; Tailwind for card interiors.

**Depends on.** W2, W5. **Introduces** W9 (local).

**Metadata.** `SEC-098` · `I` · `scroll-css` · `sticky` · `contained` · `density-medium` ·
`build-medium` · `budget-none` · `rm-designed` (confirm at build) · batch 3.

**Review questions.** Is the stepped edge readable as a count of five? Does it feel like accumulation
or like cards disappearing? Does the fallback trigger at the right point? Does it cost the page any
sense of length — it should not.

---

### `SEC-198` · CSS Reveal Ladder · batch 4

`Q` · scroll-css · scroll-driven · build-low · slug `sec-198-css-reveal-ladder`

**Why Wave 1.** **The implementation model is the concept**: zero JavaScript, off-main-thread
sequencing, no library lifecycle. It is the direct counterpart to `SEC-193` and the cheapest way to
open batch 4.

**Thesis.** A long argument in which paragraphs, hairline rules and figures each resolve at their own
point in the section's entry, establishing a **reading rhythm down a whole section** rather than
animating one element. The resting state, where unsupported, is fully resolved.

**Demo content.** A substantial explanatory passage — eight to ten blocks of prose, two hairline
rules, two figures. Long enough that the ladder is a rhythm and not a list of three fades.

**Desktop.** A measured text column with figures escaping to `margin` width at two declared
positions — **this consumes W1 and is the first proof that the vocabulary is reusable.** Each block
settles as it crosses the reading band; the section heading is already at rest.

**700–1100.** Identical behaviour at a narrower measure. The `margin` escape follows W1's convergence
rule, so where `margin` collapses to `measure`, the figures go inline and the ladder is unchanged.

**Narrow.** Identical behaviour, figures inline rather than marginal, same ladder, same source order.

**Motion.** Each element resolves opacity and a short rise across its own entry range. **Nothing is
withheld once past the band.**

**Reduced motion.** **Same composition.** Per W2/W5, the resting state is the CSS default and the
whole animation is nested inside `@media (prefers-reduced-motion: no-preference)` — it is never
"disabled", it simply does not exist in that branch.

**Semantics and keyboard.** None beyond ordinary prose and `<figure>`.

**Risks.** An entry range without a backwards fill paints the element unstyled on first paint. View
timelines are unsupported in Firefox. Both are answered by W2: visible resting state as the CSS
default, animation feature-detected on top. **Do not rely on the global reduced-motion rule in
`foundation.css`** — forcing `animation-duration` on a timeline-driven animation is not a defined way
to cancel it.

**Runtime.** Server Component. Zero JavaScript.

**Styling.** Local CSS entirely; Tailwind for spacing and type inside blocks.

**Depends on.** W1, W2, W5.

**Metadata.** `SEC-198` · `Q` · `scroll-css` · `scroll-driven` · `contained` · `density-medium` ·
`build-low` · `budget-none` · `rm-free` · batch 4.

**Review questions.** Does the ladder create pace or just delay? Is the Firefox resting state a
credible section in its own right? Do the two figure escapes feel placed or arbitrary? Is it obviously
cheaper than the GSAP equivalent?

---

### `SEC-193` · Line-Masked Statement · batch 4

`Q` · gsap-core · static · build-medium · slug `sec-193-line-masked-statement`

**Why Wave 1.** The **re-split contract** — on font load and container change — is part of the
concept, and it is the wave's only text-integrity hazard. It establishes W3 and W10.

**Thesis.** One display-scale sentence alone on the field, revealed **line by line** out of
overflow-clipped masks as the section enters. The movement follows the reading direction, so it reads
as craft rather than decoration. The unit of motion is the whole line — never the character.

**Demo content.** A three- or four-line positioning claim, plus a hairline rule and a small
attribution or qualifier that settles last. Nothing else in the section.

**Desktop.** Three or four lines at the top of the display scale, ranged left on a wide measure. The
hairline and qualifier beneath.

**700–1100.** Same masking on a narrower measure. Because lines are re-derived from the rendered
width, **no line count is hard-coded** — verify by resizing across the band and confirming the split
recomputes.

**Narrow.** Same again. If the sentence reaches six or seven lines, that is acceptable; if it reaches
ten, the demo sentence is too long and should be shortened rather than the type scaled down.

**Motion.** Each line clips upward into place on a short stagger, once. The qualifier arrives after
the last line.

**Reduced motion.** **Same composition.** The finished sentence is the resting state and is what the
server renders; the split and mask exist only in the no-preference branch.

**Semantics and keyboard — the real contract.** Per-character splitting is announced letter by letter
by JAWS/Chrome, Narrator/Edge, VoiceOver/macOS and TalkBack/Firefox. Therefore:

- **mask whole lines**, with the intact sentence exposed to assistive technology;
- GSAP's `SplitText` is available in the installed package (3.15.0) — use `mask: "lines"`,
  `autoSplit: true` and the `onSplit` callback to rebuild the timeline on re-split, and verify its
  `aria` handling with an actual screen-reader pass rather than trusting the default;
- **it must not flash unsplit before the script runs** — set the hidden state inside the same
  synchronous block that performs the split.

**Risks.** FOUC on first paint. `autoSplit` re-running and stacking timelines if the previous one is
not killed in `onSplit`. Font load changing the line count after the timeline is built. Strict Mode
double-registration.

**Runtime.** Client Component.

**Styling.** Local CSS for the masks; Tailwind for the field and qualifier.

**Depends on.** W3, W5. **Introduces** W10 (local).

**Metadata.** `SEC-193` · `Q` · `gsap-core` · `static` · `contained` · `density-low` ·
`build-medium` · `budget-none` · `rm-designed` (confirm — likely `rm-free`) · batch 4.

**Review questions.** Does it read as craft or as a heading animation? Is there any flash on a cold
load? Does the re-split survive a slow font? Does a screen reader get one sentence?

---

### `SEC-115` · Bounded Hold · batch 4

`J` · gsap-core · pinned · build-medium · slug `sec-115-bounded-hold`

**Why Wave 1.** **The scroll budget is the design decision.** It exists to define what a minimal,
released pin looks like, so the library has a budget discipline rather than an open-ended pinned
corridor. It establishes W4 before `SEC-107` needs it.

**Thesis.** A pin with a deliberately short, **declared** range — roughly one viewport of extra
distance — that resolves exactly one thing and then releases. Skimming is never punished because
there is almost nothing to skim past.

**Demo content.** **Recommendation: build the diagram-completion variant**, not the figure-resolve
one. A CSS or SVG diagram completing across the range says the same thing about the mechanism without
putting an invented number at display scale, which sits closer to the demo-content boundary in §4.
The figure variant stays available.

**Desktop.** A contained stage, **not full-bleed**, holding one large diagram centred with its source
line beneath. The surrounding page stays visible above and below throughout — that visibility is what
makes the hold read as bounded.

**700–1100.** The hold still runs but the stage narrows. Recommendation: keep the hold above roughly
860 and remove it below, so the removal threshold and the tablet breakpoint are the same decision
rather than two.

**Narrow.** The hold is removed and the same resolve runs on entry as an ordinary in-view animation,
which needs no extra scroll distance at all.

**Motion.** One property resolving across the range. Nothing else. No parallax, no secondary
elements, no counter.

**Reduced motion.** **Separate composition** — but a cheap one. No hold, no resolve: the contained
stage with the diagram already complete and its source line beneath. State it explicitly rather than
reverting the timeline.

**Semantics and keyboard.** The diagram needs a written alternative — a short prose statement of what
it shows, permanently visible or associated with the figure. No keyboard contract.

**Risks — and this is where W4 is written.** Hard-coded pixel end values desynchronise from content at
other widths and after font load. The lifecycle contract:

- **function-based** start and end values, never fixed pixels;
- `ScrollTrigger.refresh()` after webfont load;
- everything created inside `gsap.matchMedia()` within a `useGSAP` scope, so the branch reverts
  cleanly — `MotionProof` is the working reference;
- no ancestor transform or `will-change` anywhere above the pinned element;
- verify Strict Mode double-invocation registers one trigger, not two;
- verify client navigation away and back leaves no pin spacer behind.

**Runtime.** Client Component.

**Styling.** Local CSS for the stage and diagram; Tailwind for the surround.

**Depends on.** W3, W5. **Introduces** W4.

**Metadata.** `SEC-115` · `J` · `gsap-core` · `pinned` · `contained` · `density-low` ·
`build-medium` · `budget-captures-scroll` · `rm-designed` · batch 4.

**Review questions.** Does the hold read as intentional or as a stall? Is one viewport the right
budget — would half be better? Does the surrounding page staying visible do the work claimed for it?
Would you accept this cost on a real page?

---

### `SEC-107` · Held Interface, Moving Argument · batch 4

`J` · gsap-core · pinned · build-high · slug `sec-107-held-interface` · **last in the wave**

**Why Wave 1.** The wave's only `build-high` section, and the one whose cost estimate is least
trustworthy. `BUILD-SELECTION.md` names its question exactly: **what a pin really costs in a React
lifecycle.** Built last, so W1, W3, W4 and W5 all exist first.

**Thesis.** One real deliverable surface — a reporting view, a booking screen, a schedule — held at
large scale while the copy column scrolls past it, and **each copy block changes something inside
that same surface**: a panel cross-fades, a row lights, a sidebar swaps. Three states of one
interface, never three different screenshots. The continuity of a single artefact under state swaps
is the entire reason the concept exists.

**Demo content.** One CSS-built interface specimen — a scheduling or reporting view is the easiest to
make legible at scale — with three interior states. Three copy blocks, each naming the buyer question
its state answers. Everything visibly demo data.

**Desktop.** Roughly 40/60: narrow copy measure left, held surface right at a size that **reads as an
actual screen**. The reader meets the surface first, then reads down past it.

**700–1100.** Below the split breakpoint the whole hold is dropped. Recommendation: put the
breakpoint at roughly 1000 and treat 960 and 820 as captures of the **un-held** composition, since
that is what the band actually shows. Confirm the un-held version is genuinely designed and not a
leftover.

**Narrow.** Pin dropped entirely; the surface state relevant to each copy block renders inline above
it, same DOM order, no sticky frame.

**Implementation direction — one DOM, no node moves.** Author the section as
`copy1, state1, copy2, state2, copy3, state3` in source order. In the wide branch, a grid places all
three states into the same right-hand area (`grid-row: 1 / -1`, stacked in one cell) with the copy
blocks filling the left column in order; the frame chrome is drawn by the right column itself. In the
narrow and reduced-motion branches, everything simply flows in source order. **No `appendChild`, no
portals, no duplicated markup.**

**Motion.** Nothing moves position. The frame is still and only its contents cross-fade, with one
hairline highlight travelling between rows.

**Reduced motion.** **Separate composition, and a real one.** No pin, no cross-fade: the three states
render inline above their copy blocks in document order. This is the same composition the narrow
branch uses, which is why the branch is worth designing well.

**Semantics and keyboard.** The interface specimen is a complex artefact and needs a written
alternative — each state's copy block should say what its state shows, so the section argues with the
surface unseen. Nothing inside the specimen is interactive; it must not present fake controls that
suggest they can be operated.

**Risks — the reason this is `build-high`.**

- **The pin-spacer alters document flow**, and ScrollTrigger's pin wraps its target. **Pinning a grid
  item will break the grid placement above.** The answer to try is to nest the pinned element one
  level inside a stable grid cell, so the spacer sits inside that cell.
- Any ancestor `transform` or `will-change` silently breaks the fixed position.
- On mobile the held full-height frame visibly resizes as the toolbar retracts, because dynamic
  viewport units are throttled — which is a further argument for dropping the hold below the split
  breakpoint rather than adapting it.

**The pin is not optional — approved decision 2.** This section **must attempt a genuine ScrollTrigger
pin first**. Sticky-plus-scrub is a different spatial contract, and it **must not silently replace the
pinned concept** because it happens to be easier to land.

- If the true pin passes the visual and technical gate, the concept is proven and the wave has its
  answer.
- If the true pin **fails** either gate, the component is **marked for revision (`status: revise`) and
  the failure is reported** — what broke, at which width, and what was tried. It is not quietly
  substituted with something that looks similar.
- A sticky treatment may then be evaluated **separately**, as a variant of this concept or as a
  replacement proposal, and judged on its own.
- **The `pinned` and `budget-captures-scroll` metadata do not change** as a side effect of an
  implementation difficulty. Changing them is a conceptual change to the section and to the
  selection's scroll-capturing count, and it needs Zeeshan's approval after review.

**Runtime.** Client Component.

**Styling.** Local CSS throughout for the frame, the stacked states and the grid; Tailwind for copy
blocks.

**Depends on.** W3, W4, W5.

**Metadata.** `SEC-107` · `J` · `gsap-core` · `pinned` · `contained` · `density-medium` ·
`build-high` · `budget-captures-scroll` · `rm-designed` · `kbd-path`, `motion-sensitive` · batch 4.
`spatial` and `scrollBudget` are fixed by decision 2 and are not changed by the build.

**Review questions.** Does the surface read as one continuous object, or as three screenshots? Is the
40/60 the right split? Does the un-held composition stand on its own? **What did the pin actually
cost** — in build time and in defects?

---

## 11 · Wave 1 completion criteria

Wave 1 is complete when:

- all nineteen sections meet the completion standard in §3;
- the width vocabulary (W1) exists, is documented, and has been used by at least three sections;
- the catalogue metadata model from §5 is implemented and every Wave 1 entry carries it;
- every shared mechanism in §6 has a confirmed or corrected verdict, with evidence;
- every section has captures at 1440, 1280, 960, 820 and 390, plus reduced-motion captures where
  relevant;
- every moving section has stated **same composition** or **separate composition**, and the metadata
  agrees with the statement;
- the catalogue home reads top to bottom with no console errors and no horizontal overflow;
- every compromise, departure from a brief and disagreement with a longlist entry is recorded;
- actual build cost per section is recorded against its `difficulty` estimate.

## 12 · After Wave 1

**Defined here, performed later — in the final review chat, not in this one.**

The review covers:

1. **Actual component-building cost** against the estimates, per section and per difficulty band.
2. **Whether the selected 101 still feels realistic.** If Wave 1 ran materially over, the honest
   response is to move concepts to reserve, not to build them worse.
3. **Intermediate-width failure patterns** — what actually broke between 700 and 1100, and whether
   the failures share a cause.
4. **Reduced-motion cost.** Hypothesis to test: it is concentrated almost entirely in pinned work,
   and entry-resolution sections are effectively `rm-free` once the resting state is the CSS default.
   If that holds, a large part of the selection is cheaper than priced.
5. **Which shared mechanisms genuinely emerged** — including any that were declared shared and turned
   out not to be, and any component-local decision that should have been shared.
6. **Over-abstraction or visual sameness.** Read the nineteen composed beside one another. Does any
   default anatomy appear that nobody decided on?
7. **Category and visual-register balance** across what now exists.
8. **Selected concepts that should move to reserve** — anything Wave 1 showed to be weaker, more
   expensive or more duplicative than expected.
9. **Reserve concepts that should be promoted**, through the coverage test only — what job or spatial
   behaviour is missing — never because a reserve concept looked good in isolation.
10. **Catalogue metadata and filtering needs.** Nineteen entries is around where an unfiltered index
    stops being browsable; decide what the index actually needs to filter on.
11. **The poster → item page → standalone-route ladder.** The standalone route exists; the other two
    tiers do not. Decide whether nineteen live sections on one index page is still acceptable, and
    note that `content-visibility: auto` on a long index conflicts with ScrollTrigger measurement —
    which the ladder resolves for free.
12. **How sections behave composed beside one another** — the condition under which the research says
    scroll-capturing sections fail. Wave 1 holds two of them; judge whether two already feels like
    too many.

Two of these questions have a build-time answer that must be **reported, not acted on**: the
`SEC-107` pin outcome (decision 2) and the `SEC-147` counter judgement (decision 5). Both are
findings for this review, not licence to change a concept mid-wave.

**No planning decisions remain open.** The five that were carried out of the first planning pass are
settled and recorded in the Approved decisions block at the top of this file.

## Status of this file

Library-local planning. Binding on library work, and on nothing else. The runtime question (§3), the
content policy (§4) and the taxonomy-backed registry timing (§5) are settled here and are recorded in
[ARCHITECTURE.md](./ARCHITECTURE.md), which no longer lists them as deferred.
