# Batch 2 — SEC-145 · SEC-070 · SEC-147 · SEC-119 · SEC-067

Read [../../../BUILD-DEFAULTS.md](../../../BUILD-DEFAULTS.md) first; nothing in it is repeated here.

**Build order:** `SEC-145` → `SEC-070` → `SEC-147` → `SEC-119` → `SEC-067`. Low cost to high, ending
on the batch's only genuinely fragile layout.

**Depends on:** W1, W5 (built in earlier batches). **Introduces:** W6 at `SEC-067`, and W8
component-local at `SEC-119`. Status is in [DASHBOARD.md](./DASHBOARD.md); outcomes go in
[FINDINGS.md](./FINDINGS.md).

---

## `SEC-145` · Redacted Document Plate

`M` · no-motion · static · build-low · slug `sec-145-redacted-document`

The proof family's cheapest member and its most distinctive device.

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

**Semantics and keyboard.** The document is a complex artefact: it needs a real written description,
not an alt string. Because it is CSS-built, the honest answer is that the document's text **is** the
description and the redaction bars carry `aria-hidden`, with a caption explaining what was removed
and why.

**Risks.** Bars that do not sit on the baselines read as damage — this is the whole concept and the
only real risk. Also: a redacted specimen that is CSS text still contains the "redacted" text in the
DOM unless it is genuinely absent. **Author the specimen with the fields absent, not covered.**

**Build notes.** Server Component. Local CSS for the document specimen and the bars; Tailwind for the
field and caption. Depends on W1.

**Metadata.** `SEC-145` · `M` · `no-motion` · `static` · `contained` · `density-low` · `build-low` ·
`budget-none` · `rm-free` · `surfaceCritical: true` · batch 2.

**Review questions.** Do the bars read as composition or as censorship? Is the plate convincingly a
document? Does the navy field earn itself? Does the one-up narrow state still argue anything?

---

## `SEC-070` · Recommended By Structure

`F` · no-motion · static · build-low · slug `sec-070-recommended-by-structure`

The cheapest way to prove the library can express emphasis without a badge.

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

**Semantics and keyboard.** The recommended column is **authored first in source** and only moved to
the centre on wide screens — visual reordering alone would leave source order disagreeing with the
argument. If any interactive element is added, check that the visual reorder has not produced a
confusing tab order.

**Risks.** The surface step being too subtle to read as intentional, or too strong and reading as a
card. `surface-critical`: this depends on a real value step, so it must be judged against the actual
surface tokens rather than assumed.

**Build notes.** Server Component. Tailwind grid with local CSS for the vertical offset and the
column ordering. Depends on nothing.

**Metadata.** `SEC-070` · `F` · `no-motion` · `static` · `contained` · `density-medium` ·
`build-low` · `budget-none` · `rm-free` · `surfaceCritical: true` · batch 2.

**Review questions.** Is the recommendation unmistakable without a label? Does the geometry read as
confident or as a mistake? Does 900 hold the ratio? Does the narrow stack still recommend?

---

## `SEC-147` · Evidence-Footed Figure Band

`M` · js-motion · static · build-low · slug `sec-147-evidence-footed-figures`

Tests whether a small hand-written client island is cheaper than GSAP for one small job — a
deliberate counter-sample to the wave's three GSAP sections.

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

**Approved decision 5 — the counting interaction is kept for this first build.** Server Component
with **one small client island** for the counter — `IntersectionObserver` plus
`requestAnimationFrame`, with explicit disconnect and cancel on unmount. **Do not use GSAP:** the
concept is one count, `js-motion` means GSAP would improve it rather than that it is required, and
building it by hand is the informative choice. Whether the no-count static variant is visually better
is judged **after** the build, from the built result — it is not pre-empted, and if the island costs
more than a GSAP tween would, that is a Wave 1 finding worth having. Record the judgement in
`FINDINGS.md`.

**Build notes.** Server Component with one client island. Tailwind for the band; local CSS for the
hairline divisions and tabular figures. Depends on W5.

**Metadata.** `SEC-147` · `M` · `js-motion` · `static` · `wide` · `density-medium` · `build-low` ·
`budget-none` · `rm-designed` (confirm — likely `rm-free`) · batch 2.

**Review questions.** Does the foot line look structural or apologetic? Do the figures hold at 2 × 2?
Is the count worth its JavaScript? Would the no-count-at-all variant be better?

---

## `SEC-119` · Deterministic Engagement Stepper

`K` · css-motion · user-driven · build-low · slug `sec-119-engagement-stepper`

Reader-driven pacing with **no scroll budget and no pin arithmetic at all** — the counter-argument to
scroll-led process sections, and the wave's first managed React state.

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

### W8 — polite status announcer · introduced here, component-local

A visually hidden `aria-live="polite"` region that is a **sibling of the changing content, never the
content itself**. Written as a self-contained module so extraction at `SEC-163` is mechanical.

**Build notes.** Client Component. Tailwind for the frame; local CSS for the segmented rule and the
stacked-panel grid. Depends on nothing; introduces W8 locally.

**Metadata.** `SEC-119` · `K` · `css-motion` · `user-driven` · `contained` · `density-medium` ·
`build-low` · `budget-none` · `rm-free` · `kbd-path` · batch 2.

**Review questions.** Does the counter chrome carry enough weight to be the left third? Does the
locked height feel deliberate or empty on the shortest step? Is arrow-key traversal discoverable?
Does it read as a stepper rather than as tabs?

---

## `SEC-067` · Contained Matrix, Both Axes

`F` · no-motion · sticky · build-medium · slug `sec-067-contained-matrix`

The implementation model is the concept, and it is the one dense form the research says is
historically fragile. Getting it right once gives the library a reusable answer for every later
comparison.

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

**Semantics and keyboard.** The wave's strictest contract:

- a real `<table>` with `<caption>`, `<th scope="col">` and `<th scope="row">`;
- **never** reshaped with display properties — `semantics-fragile` means exactly this;
- the scroll region (W6) carries `tabindex="0"`, `role="region"` and an accessible name;
- a visible focus indicator on the region itself.

**Risks.** Two intersecting sticky axes inside an overflow container is the most
compositing-expensive dense form there is, and it is historically fragile in iOS Safari. Sticky `th`
needs `border-collapse: separate` with `border-spacing: 0`, and hairlines drawn with box-shadow or
pseudo-elements rather than borders. The top-left cell needs the highest stacking order of the four
sticky states.

### W6 — labelled focusable overflow region · introduced here

Six lines, no visual opinion, and wrong by default every time it is rewritten. **A scroll region
without `tabindex="0"`, a role and an accessible name is unreachable by keyboard in Safari**, so
later columns simply cannot be read. All three are required together, with a visible focus indicator
on the region.

**Build notes.** Server Component — no JavaScript is required for any of it. Local CSS throughout;
this is precisely the case Tailwind would flatten. Depends on nothing; introduces W6.

**Metadata.** `SEC-067` · `F` · `no-motion` · `sticky` · `contained` · `density-high` ·
`build-medium` · `budget-none` · `rm-free` · `kbd-path`, `semantics-fragile` · batch 2.

**Review questions.** Does the contained region read as deliberate or as a broken table? Do both
sticky axes hold at every width? Do sentences instead of ticks change what the section argues? Is the
region's focus state obvious?
