# Batch 1 — SEC-001 · SEC-057 · SEC-162 · SEC-020

Read [../../../BUILD-DEFAULTS.md](../../../BUILD-DEFAULTS.md) first; nothing in it is repeated here.

**Build order:** `SEC-001` → `SEC-057` → `SEC-162` → `SEC-020`. Three pure-static compositions
establish the house standard before `SEC-020` introduces the wave's first scroll-driven CSS.

**Depends on:** W1 (built). **Introduces:** W2, W5 — both at `SEC-020`, and both written
component-local. Status is in [DASHBOARD.md](./DASHBOARD.md); outcomes go in
[FINDINGS.md](./FINDINGS.md).

**Batch close.** The registry revision window closes at the end of this batch — this is the last
point at which the metadata model may be corrected.

---

## `SEC-001` · Standfirst Opener Plate

`A` · no-motion · static · build-low · slug `sec-001-standfirst-opener`

**Thesis.** Five distinct type registers stacked in one column — kicker, headline, standfirst,
attribution, body with a sunken cap — separated by a hairline. Hierarchy is the whole composition. No
image anywhere, and no eyebrow-headline-paragraph reflex: the standfirst is set larger and looser
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

**Semantics and keyboard.** The cap must be **presentational**: `::first-letter` with
`initial-letter`, inside `@supports`, falling back to a float with an explicit line-height. Never a
`<span>` — a marked-up cap reads as a separate token to assistive technology and breaks selection
across the first line.

**Risks.** `initial-letter` support; the float fallback drifting off the baseline at different font
sizes; the display scale's optical tracking passing a large negative letter-spacing down to small
text inside the same element (the `.catalogue-label` note in `foundation.css` records this exact
trap).

**Build notes.** Server Component. Tailwind for the stack; a few lines of local CSS for the cap.
Depends on nothing.

**Metadata.** `SEC-001` · `A` · `no-motion` · `static` · `contained` · `density-low` · `build-low` ·
`budget-none` · `rm-free` · `text-integrity` · batch 1.

**Review questions.** Are all five registers genuinely distinct? Does it read as an article opener or
as a marketing header? Is the cap an asset or a trick? Does the hung column survive 960?

**Extra completion criteria.** The cap is presentational and selectable as part of its sentence, and
the fallback is verified.

---

## `SEC-057` · Unequal Diptych

`E` · no-motion · static · build-low · slug `sec-057-unequal-diptych`

A static concept protected for range rather than score. If this one is not visually convincing, the
"hard static composition" correction in the selection did not take.

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

**Semantics and keyboard.** None beyond ordinary prose and `<figure>`. Because rank and relationship
are carried entirely by ratio and alignment — both invisible non-visually and both absent in one
column — the caption stack must read correctly as ordinary prose on its own.

**Risks.** Baseline sharing is arithmetic, not a property: it needs consistent line-height and
deliberate block offsets, and it breaks the moment a caption gains a line. Author the demo content to
the line counts the composition assumes, then test one caption with an extra line.

**Build notes.** Server Component. Tailwind grid; local CSS for baseline locking. Depends on nothing.

**Metadata.** `SEC-057` · `E` · `no-motion` · `static` · `contained` · `density-low` · `build-low` ·
`budget-none` · `rm-free` · batch 1.

**Review questions.** Is the asymmetry deliberate or accidental? Do the baselines actually align, at
every reviewed width? Does the narrow version read as designed? Could this hold four different
artefacts without redesign?

---

## `SEC-162` · Deliverables Ledger

`N` · no-motion · static · build-low · slug `sec-162-deliverables-ledger`

The wave's density register, and the first test of whether the shared type scale survives at
`density-high`.

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
- **a horizontally scrolling table is not an acceptable answer for this concept.** That is
  `SEC-067`'s contract; using it here would collapse two concepts into one and abandon the narrow
  composition this concept is partly about.

Why this is right: it gives exactly the narrow transformation the longlist asks for with one DOM and
no display hacks; it avoids the `semantics-fragile` trap of reshaping table elements with display
properties; and the concept is documentation of what arrives, not a data table whose cell
relationships need announcing. The taxonomy tags this `text-integrity`, not `semantics-fragile`,
which supports the reading.

**Risks.** Long strings pushing the ledger into horizontal overflow; the grid losing alignment when a
value wraps; tabular numerals not applying to the week column.

**Build notes.** Server Component. Local CSS for the record grid and the sprint rules; Tailwind for
type and spacing. Depends on nothing.

**Metadata.** `SEC-162` · `N` · `no-motion` · `static` · `contained` · `density-high` · `build-low` ·
`budget-none` · `rm-free` · `text-integrity` · batch 1.

**Review questions.** Does the density read as credibility or as a dump? Is the sprint rule doing
visible work? Does the narrow record form still feel like a ledger? Do the long strings break it?

---

## `SEC-020` · Alternating Artefact Rows

`B` · scroll-css · static · build-low · slug `sec-020-artefact-rows`

A full-width repeating row rather than a column set, and the wave's first scroll-driven CSS. It
introduces W2 and W5 at the cheapest possible cost.

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
`rm-designed`; if the build confirms same-composition, the metadata records `rm-free` and **the
discrepancy is reported in `FINDINGS.md` rather than silently reconciled**.

**Semantics and keyboard.** Rows are a list. **Handedness must be a layout decision over one authored
source order** — flipping sides by reordering source desynchronises reading order from DOM order. Use
grid placement per row parity.

**Risks.** The source-order trap above. The seam hairline failing to run continuously across row
gaps. View timelines unsupported in Firefox — W2 covers it.

### W2 — scroll-driven CSS fallback contract · introduced here

Three rules, and the failure they prevent is silent and identical every time: unstyled first paint,
or nothing at all in Firefox.

1. The **resting state is the CSS default**, and it is the finished state.
2. The animation is added inside `@supports (animation-timeline: view())`.
3. That `@supports` block is itself nested inside `@media (prefers-reduced-motion: no-preference)`.

### W5 — reduced-motion composition switch · introduced here

Two branches, because the wave has two mechanisms.

- **JavaScript sections** keep the existing `data-motion` contract: the static arrangement renders by
  default, and the client island sets `data-motion="on"` only after a `no-preference` match.
- **CSS scroll-timeline sections** cannot use that, and **must not rely on the global reduced-motion
  block in `foundation.css`** — forcing `animation-duration: 0.01ms` on a timeline-driven animation
  is not a defined way to cancel it. They gate the whole animation behind
  `prefers-reduced-motion: no-preference` instead, per W2.

This distinction is a Wave 1 finding. If it turns out to be wrong, that belongs in `FINDINGS.md`.

**Build notes.** Server Component, zero JavaScript. Local CSS for the seam, the row grid and the
timelines; Tailwind for type and spacing. Depends on W1; introduces W2 and W5.

**Metadata.** `SEC-020` · `B` · `scroll-css` · `static` · `wide` · `density-medium` · `build-low` ·
`budget-none` · `rm-designed` (confirm at build) · batch 1.

**Review questions.** Does the seam hold the rows together, or is it decoration? Do six rows read as
one composition or as six sections? Is the batched resolve legible as one group? Does the narrow
single column still have rhythm?
