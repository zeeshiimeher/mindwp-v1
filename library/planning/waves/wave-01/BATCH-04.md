# Batch 4 — SEC-198 · SEC-193 · SEC-115 · SEC-107

Read [../../../BUILD-DEFAULTS.md](../../../BUILD-DEFAULTS.md) first; nothing in it is repeated here.

**Build order:** `SEC-198` → `SEC-193` → `SEC-115` → `SEC-107`. The zero-JavaScript section opens the
batch, then GSAP entry motion, then the bounded pin that establishes W4, then the wave's only
`build-high` section last — by which point everything it depends on exists. This also honours the
rule that two `build-high` sections never run consecutively.

**Depends on:** W1, W2, W5 (built in earlier batches). **Introduces:** W3, W10 at `SEC-193`; W4 at
`SEC-115`. Status is in [DASHBOARD.md](./DASHBOARD.md); outcomes go in [FINDINGS.md](./FINDINGS.md).

---

## `SEC-198` · CSS Reveal Ladder

`Q` · scroll-css · scroll-driven · build-low · slug `sec-198-css-reveal-ladder`

**The implementation model is the concept**: zero JavaScript, off-main-thread sequencing, no library
lifecycle. The direct counterpart to `SEC-193`.

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

**Build notes.** Server Component, zero JavaScript. Local CSS entirely; Tailwind for spacing and type
inside blocks. Depends on W1, W2, W5.

**Metadata.** `SEC-198` · `Q` · `scroll-css` · `scroll-driven` · `contained` · `density-medium` ·
`build-low` · `budget-none` · `rm-free` · batch 4.

**Review questions.** Does the ladder create pace or just delay? Is the Firefox resting state a
credible section in its own right? Do the two figure escapes feel placed or arbitrary? Is it
obviously cheaper than the GSAP equivalent?

---

## `SEC-193` · Line-Masked Statement

`Q` · gsap-core · static · build-medium · slug `sec-193-line-masked-statement`

The **re-split contract** — on font load and container change — is part of the concept, and it is the
wave's only text-integrity hazard.

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

### W3 — GSAP scope, registration and cleanup · introduced here

The pattern already exists in `MotionProof`. What is missing is **one plugin-registration module so
`registerPlugin` is called once**, and a written convention so three GSAP sections do not invent three
lifecycles. Everything is created inside a `useGSAP` scope so it reverts cleanly.

### W10 — whole-line mask with intact source text · local, extract post-wave

Mask whole lines, never characters; the intact sentence stays exposed to assistive technology; no
unsplit flash before script runs. The second user (`SEC-196`, `SEC-201`, `SEC-202`) is not in Wave 1,
so it stays local.

**Build notes.** Client Component. Local CSS for the masks; Tailwind for the field and qualifier.
Depends on W3 and W5; introduces W10 (local).

**Metadata.** `SEC-193` · `Q` · `gsap-core` · `static` · `contained` · `density-low` ·
`build-medium` · `budget-none` · `rm-designed` (confirm — likely `rm-free`) · batch 4.

**Review questions.** Does it read as craft or as a heading animation? Is there any flash on a cold
load? Does the re-split survive a slow font? Does a screen reader get one sentence?

---

## `SEC-115` · Bounded Hold

`J` · gsap-core · pinned · build-medium · slug `sec-115-bounded-hold`

**The scroll budget is the design decision.** It exists to define what a minimal, released pin looks
like, so the library has a budget discipline rather than an open-ended pinned corridor.

**Thesis.** A pin with a deliberately short, **declared** range — roughly one viewport of extra
distance — that resolves exactly one thing and then releases. Skimming is never punished because
there is almost nothing to skim past.

**Demo content.** **Recommendation: build the diagram-completion variant**, not the figure-resolve
one. A CSS or SVG diagram completing across the range says the same thing about the mechanism without
putting an invented number at display scale, which sits closer to the demo-content boundary. The
figure variant stays available.

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

**Risks.** Hard-coded pixel end values desynchronise from content at other widths and after font load.

### W4 — pin and scrub lifecycle · introduced here

The single most defect-prone thing in the wave. The contract:

- **function-based** start and end values, never fixed pixels;
- `ScrollTrigger.refresh()` after webfont load;
- everything created inside `gsap.matchMedia()` within a `useGSAP` scope, so the branch reverts
  cleanly — `MotionProof` is the working reference;
- no ancestor transform or `will-change` anywhere above the pinned element;
- verify Strict Mode double-invocation registers one trigger, not two;
- verify client navigation away and back leaves no pin spacer behind.

**Build notes.** Client Component. Local CSS for the stage and diagram; Tailwind for the surround.
Depends on W3 and W5; introduces W4.

**Metadata.** `SEC-115` · `J` · `gsap-core` · `pinned` · `contained` · `density-low` ·
`build-medium` · `budget-captures-scroll` · `rm-designed` · batch 4.

**Review questions.** Does the hold read as intentional or as a stall? Is one viewport the right
budget — would half be better? Does the surrounding page staying visible do the work claimed for it?
Would you accept this cost on a real page?

---

## `SEC-107` · Held Interface, Moving Argument · **last in the wave**

`J` · gsap-core · pinned · build-high · slug `sec-107-held-interface`

The wave's only `build-high` section, and the one whose cost estimate is least trustworthy. Its
question is exactly **what a pin really costs in a React lifecycle.** Built last, so W1, W3, W4 and W5
all exist first.

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
  viewport units are throttled — a further argument for dropping the hold below the split breakpoint
  rather than adapting it.

**Approved decision 2 — the pin is not optional.** This section **must attempt a genuine
ScrollTrigger pin first**. Sticky-plus-scrub is a different spatial contract, and it **must not
silently replace the pinned concept** because it happens to be easier to land.

- If the true pin passes the visual and technical gate, the concept is proven and the wave has its
  answer.
- If the true pin **fails** either gate, the component is **marked `revise` and the failure is
  reported in `FINDINGS.md`** — what broke, at which width, and what was tried. It is not quietly
  substituted with something that looks similar.
- A sticky treatment may then be evaluated **separately**, as a variant of this concept or as a
  replacement proposal, and judged on its own.
- **The `pinned` and `budget-captures-scroll` metadata do not change** as a side effect of an
  implementation difficulty. Changing them is a conceptual change to the section and to the
  selection's scroll-capturing count, and needs Zeeshan's approval after review.

**Build notes.** Client Component. Local CSS throughout for the frame, the stacked states and the
grid; Tailwind for copy blocks. Depends on W3, W4, W5.

**Metadata.** `SEC-107` · `J` · `gsap-core` · `pinned` · `contained` · `density-medium` ·
`build-high` · `budget-captures-scroll` · `rm-designed` · `kbd-path`, `motion-sensitive` · batch 4.
`spatial` and `scrollBudget` are fixed by approved decision 2 and are not changed by the build.

**Review questions.** Does the surface read as one continuous object, or as three screenshots? Is the
40/60 the right split? Does the un-held composition stand on its own? **What did the pin actually
cost** — in build time and in defects?
