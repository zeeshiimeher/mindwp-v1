# Batch 3 — SEC-082 · SEC-144 · SEC-133 · SEC-163 · SEC-098

Read [../../../BUILD-DEFAULTS.md](../../../BUILD-DEFAULTS.md) first; nothing in it is repeated here.

**Build order:** `SEC-082` → `SEC-144` → `SEC-133` → `SEC-163` → `SEC-098`. `SEC-082` sits
immediately before `SEC-144` so the W7 extraction happens while the first implementation is still
fresh, and the batch ends on its only scroll-driven member.

**Depends on:** W1, W2, W5 (built in earlier batches). **Extracts:** W7 at `SEC-144`, W8 at
`SEC-163`. **Introduces:** W9, W11, W12, W13, W14. Status is in [DASHBOARD.md](./DASHBOARD.md);
outcomes go in [FINDINGS.md](./FINDINGS.md).

---

## `SEC-082` · Relocating Pane Accordion

`G` · css-motion · swap-in-place · build-medium · slug `sec-082-relocating-pane`

**Responsive transformation is the concept** — the wave's only section whose narrow form is the point
rather than a consequence.

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

The heading levels, the row markup and the panel placement all belong to this section.

**Risks.** The sticky pane. A tall sticky media pane keeps a large composited surface alive for the
whole section and **must stop being sticky the moment the columns stack**, or it pins over the text.
With the grid approach, sticky exists only in the wide branch — which is the reason to prefer it.

### W7 — controlled single-selection state and ID wiring · written local here

Headless. **Shares only**: controlled selected state, stable panel ids, `aria-expanded`,
`aria-controls`. It **must not impose** heading levels, accordion row markup, panel placement, marker
placement or layout — its two users compose completely differently, and it exists to keep the wiring
correct, not to make them alike.

Write that part so extraction at `SEC-144` is mechanical: state and id wiring in one place, **with no
markup or layout opinions inside it.**

### W14 — responsive media relocation · local, deliberately

It is the entire concept of `SEC-082`. Abstracting it would produce one relocation behaviour for a
library that should contain several.

**Build notes.** Client Component. Local CSS for the relocation grid and container query; Tailwind
for the rows. Depends on nothing; introduces W7 (local) and W14.

**Metadata.** `SEC-082` · `G` · `css-motion` · `swap-in-place` · `contained` · `density-medium` ·
`build-medium` · `budget-none` · `rm-free` · `kbd-path` · batch 3.

**Review questions.** Do the two compositions both read as designed? Is the transformation legible
when you resize past the threshold? Is the pane ever empty or doubled? Does the keyboard path reach
every row and every pane?

---

## `SEC-144` · Annotated Deliverable Plate

`M` · css-motion · user-driven · build-medium · slug `sec-144-annotated-plate`

The reader interrogates one artefact rather than comparing several, and the note text is authored to
stand alone — a content-model change, not a styling one.

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
- **W7 is extracted from `SEC-082` at this point.** It supplies the selected state, the stable panel
  ids, `aria-expanded` and `aria-controls`, and **nothing about markup, marker placement, panel
  placement or layout** — all of which this section owns. If extraction turns out to need a markup
  opinion, the verdict was wrong: record that in `FINDINGS.md` rather than widening the abstraction;
- the standing prose **is** the artefact's long description, and is referenced as such rather than
  duplicated in an alt string.

**Risks.** Marker positions expressed in absolute pixels drift the moment the plate scales — use
percentages against the plate's own box. Markers colliding at intermediate widths. The note column
changing height and moving the plate.

### W13 — artefact annotation marker placement · local, deliberately

Marker position is composition. Only the controlled selection state and id wiring underneath it (W7)
is shared.

**Build notes.** Client Component. Local CSS for the plate, markers and frame; Tailwind for the note
column and prose. Depends on W7; introduces W13.

**Metadata.** `SEC-144` · `M` · `css-motion` · `user-driven` · `contained` · `density-medium` ·
`build-medium` · `budget-none` · `rm-free` · `kbd-path`, `semantics-fragile` · batch 3.

**Review questions.** Does the plate read as a real deliverable? Do markers sit where the eye wants
them, at all four widths? Does the section still argue with the image ignored? Is the numbered-list
narrow form a design or a fallback?

---

## `SEC-133` · Single-Control Delta Slider

`L` · js-motion · user-driven · build-medium · slug `sec-133-delta-slider`

The control model is the concept, and the before/after family has no maintained equivalent in any
surveyed catalogue.

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

**Implementation direction.** The input's value writes a custom property on the frame; the after layer
is clipped with `clip-path: inset(...)` from that property. No layout thrash, no measurement.

**Risks.** Styling a native range across browsers while keeping the focus ring. The clip seam showing
a subpixel gap. The two states differing so subtly that the section proves nothing.

### W11 — native range comparison control · local, deliberately

It is a native `<input type="range">` plus a clip driven by a custom property. There is nothing to
abstract that the platform does not already provide, and wrapping it would hide the element that
carries the accessibility.

**Build notes.** Client Component. Local CSS for the frame, clip and track; Tailwind for the
surrounding composition. Depends on nothing; introduces W11.

**Metadata.** `SEC-133` · `L` · `js-motion` · `user-driven` · `contained` · `density-low` ·
`build-medium` · `budget-none` · `rm-free` · `kbd-path` · batch 3.

**Review questions.** Is the delta readout evidence or decoration? Does the visible track read better
than a hidden handle? Is the focus state obvious on both states? Does the narrow layout keep the
readout clear of the finger?

---

## `SEC-163` · Alphabetical Capability Index

`N` · css-motion · user-driven · build-medium · slug `sec-163-capability-index`

**The zero-reflow rule is the concept** — the reader keeps the whole surface area in view while
narrowing it, which is a different reading activity from a grid that re-lays.

**Thesis.** Every capability in one ungrouped alphabetical list, with an instant keyword filter that
**dims non-matches in place with zero reflow**, and a live result count written into the heading.
Nothing moves; contrast alone does the filtering.

**Demo content.** Sixty to seventy neutral capability names, genuinely alphabetical, with varied
lengths. The heading reads as a live sentence: "Sixty-eight capabilities, nine matching your term."

**Desktop.** Four columns of hairline-small names filling the contained width. A single
rule-underlined filter field above. No card, no border, no search icon.

**700–1100.** Four columns become three around 1000. Column count changing is a layout change, not a
reflow of the filtered result — the two must not be confused. **The filter must never cause the
column count to change.**

**Narrow.** Two columns. Filter field pinned to the top of the **section**, not the viewport.

**Motion.** Non-matching entries drop to a dim tint over about 150ms while matches hold full
contrast. **No item changes position.**

**Reduced motion.** **Same composition.** The tint applies instantly instead of over 150ms.

**Semantics and keyboard.** Dimming has no non-visual equivalent, so:

- the result count lives in a **polite live region — W8, extracted here from `SEC-119`**;
- dimmed entries must either keep sufficient contrast **or be honestly removed from the accessibility
  tree**. Recommendation: dim below contrast and mark non-matches `aria-hidden="true"`, since the
  items are plain text and not focusable. If they ever become links, add `inert` too;
- the filter field is a real labelled `<input>`, not a styled div.

**Risks.** A live region that fires on every keystroke and floods the screen reader — **debounce the
announcement, not the filtering.** Column balance shifting when text lengths vary. `aria-hidden` on
focusable content.

### W12 — filter state and dim-in-place · local, deliberately

The zero-reflow rule **is** the concept. A generic filter primitive would be built around reflow and
would flatten it. Revisit only when a second filtering section (`SEC-035`, `SEC-038`) exists.

**Build notes.** Client Component. Local CSS for the columns and the dim state; Tailwind for the
field and heading. Depends on W8; introduces W12.

**Metadata.** `SEC-163` · `N` · `css-motion` · `user-driven` · `contained` · `density-high` ·
`build-medium` · `budget-none` · `rm-free` · `kbd-path` · batch 3.

**Review questions.** Does zero reflow feel better than a reflowing filter, or just different? Is
breadth legible before you type? Does the live-sentence heading work or read as a gimmick? Are the
columns balanced at three and two?

---

## `SEC-098` · Deck That Accumulates

`I` · scroll-css · sticky · build-medium · slug `sec-098-accumulating-deck`

A sticky deck that gives an ordered argument felt weight **without taking the page's scroll away** —
the baseline of its register, built before its ambitious members (`SEC-100`, `SEC-105`).

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
it is exactly the failure the longlist names.

### W9 — sticky-stack measurement guard · local, extract post-wave

The card-exceeds-viewport threshold must come from measured content height, not viewport units. The
second user (`SEC-100`, `SEC-105`) is not in Wave 1, so it stays local — but **write it as a
self-contained module so extraction is mechanical.**

**Build notes.** Server Component with one client child. Local CSS for the sticky stack and
timelines; Tailwind for card interiors. Depends on W2 and W5; introduces W9 (local).

**Metadata.** `SEC-098` · `I` · `scroll-css` · `sticky` · `contained` · `density-medium` ·
`build-medium` · `budget-none` · `rm-designed` (confirm at build) · batch 3.

**Review questions.** Is the stepped edge readable as a count of five? Does it feel like accumulation
or like cards disappearing? Does the fallback trigger at the right point? Does it cost the page any
sense of length — it should not.
