# Wave 1 dashboard

Status for the first nineteen sections. The one short file to open for current state.

This file holds status and sequencing only. What to build is in the briefs; what happened is in
[FINDINGS.md](./FINDINGS.md); how to build is [../../../BUILD-DEFAULTS.md](../../../BUILD-DEFAULTS.md).

**Why Wave 1 exists.** To answer what cannot be answered on paper: what a section actually costs to
build here; whether the foundation holds under real sections rather than system proofs; what the
700–1100 band really costs; what the reduced-motion obligation really costs; which shared mechanisms
genuinely emerge; and whether nineteen sections read as designed or as one anatomy with different
content. It is not trying to be a usable page kit, and not trying to cover every category.

## Now

| Field    | Value                                                |
| -------- | ---------------------------------------------------- |
| Wave     | 1                                                    |
| Gate     | Gate 0 pending                                       |
| Building | `SEC-182` · Three-Position Breakout Ladder · batch 0 |
| Status   | `review`                                             |
| Next     | Fresh `SEC-182` visual review                        |
| Blocker  | Zeeshan approval                                     |

## Progress

| ID        | Title                            | Batch | Status    | Note                              |
| --------- | -------------------------------- | ----- | --------- | --------------------------------- |
| `SEC-182` | Three-Position Breakout Ladder   | 0     | `review`  | Gated. Built W1. Awaiting Gate 0. |
| `SEC-001` | Standfirst Opener Plate          | 1     | `planned` | —                                 |
| `SEC-057` | Unequal Diptych                  | 1     | `planned` | —                                 |
| `SEC-162` | Deliverables Ledger              | 1     | `planned` | —                                 |
| `SEC-020` | Alternating Artefact Rows        | 1     | `planned` | Introduces W2, W5.                |
| `SEC-145` | Redacted Document Plate          | 2     | `planned` | —                                 |
| `SEC-070` | Recommended By Structure         | 2     | `planned` | —                                 |
| `SEC-147` | Evidence-Footed Figure Band      | 2     | `planned` | —                                 |
| `SEC-119` | Deterministic Engagement Stepper | 2     | `planned` | Introduces W8, local.             |
| `SEC-067` | Contained Matrix, Both Axes      | 2     | `planned` | Introduces W6.                    |
| `SEC-082` | Relocating Pane Accordion        | 3     | `planned` | Introduces W7 local, W14.         |
| `SEC-144` | Annotated Deliverable Plate      | 3     | `planned` | Extracts W7. Introduces W13.      |
| `SEC-133` | Single-Control Delta Slider      | 3     | `planned` | Introduces W11.                   |
| `SEC-163` | Alphabetical Capability Index    | 3     | `planned` | Extracts W8. Introduces W12.      |
| `SEC-098` | Deck That Accumulates            | 3     | `planned` | Introduces W9, local.             |
| `SEC-198` | CSS Reveal Ladder                | 4     | `planned` | First reuse of W1.                |
| `SEC-193` | Line-Masked Statement            | 4     | `planned` | Introduces W3, W10.               |
| `SEC-115` | Bounded Hold                     | 4     | `planned` | Introduces W4.                    |
| `SEC-107` | Held Interface, Moving Argument  | 4     | `planned` | `build-high`. Last in the wave.   |

## Status vocabulary

| Status     | Meaning                                                            |
| ---------- | ------------------------------------------------------------------ |
| `planned`  | Not started. No registry entry.                                    |
| `building` | A chat is working on it.                                           |
| `review`   | Built, captures taken, waiting for Zeeshan.                        |
| `approved` | Zeeshan has accepted it.                                           |
| `revise`   | Changes requested. Reason in `FINDINGS.md`.                        |
| `skipped`  | Not built this wave; returned to reserve. Reason in `FINDINGS.md`. |

**Mapping to `registry.ts`**, which carries its own narrower `status` field: `planned` → no entry ·
`building` and `review` → `built` · `approved` → `reviewed` · `revise` → `revise` · `skipped` → no
entry.

**Who changes what.** A build chat moves its own rows `planned` → `building` → `review`, and appends
its own entries to `FINDINGS.md`. **`approved`, `revise` and `skipped` are set only by Zeeshan, or by
a review chat acting on his explicit decision.**

**When it is updated** — six events, and nothing else: a build starts · a build reaches review ·
Zeeshan approves · revision is requested · a component is skipped · a batch completes and the next
begins. Never after an ordinary code change.

## Batches and build order

**Approved decision 3.** Batch membership and the build order within each batch are approved as
written and **do not change during Wave 1**. The other four approved decisions are per-component and
live in the briefs they bind: 1 in `SEC-162`, 2 in `SEC-107`, 4 in `SEC-182`, 5 in `SEC-147`.

| Batch | Concepts                                                  | Build order                                               |
| ----- | --------------------------------------------------------- | --------------------------------------------------------- |
| 0     | `SEC-182`                                                 | — (alone, gated)                                          |
| 1     | `SEC-001` · `SEC-020` · `SEC-057` · `SEC-162`             | `SEC-001` → `SEC-057` → `SEC-162` → `SEC-020`             |
| 2     | `SEC-067` · `SEC-070` · `SEC-119` · `SEC-145` · `SEC-147` | `SEC-145` → `SEC-070` → `SEC-147` → `SEC-119` → `SEC-067` |
| 3     | `SEC-082` · `SEC-098` · `SEC-133` · `SEC-144` · `SEC-163` | `SEC-082` → `SEC-144` → `SEC-133` → `SEC-163` → `SEC-098` |
| 4     | `SEC-107` · `SEC-115` · `SEC-193` · `SEC-198`             | `SEC-198` → `SEC-193` → `SEC-115` → `SEC-107`             |

Why these orders: batch 1 ends on `SEC-020` because it introduces W2 and W5, and three pure-static
compositions establish the house standard first. Batch 2 runs low cost to high and ends on `SEC-067`,
which introduces W6 and carries the batch's only fragile layout. Batch 3 puts `SEC-082` immediately
before `SEC-144` so the W7 extraction happens while the first implementation is fresh, and ends on
`SEC-098`, its only scroll-driven member. Batch 4 opens with the zero-JavaScript `SEC-198`, then GSAP
entry motion, then the bounded pin that establishes W4, then the wave's only `build-high` section
last — which also honours the rule that two `build-high` sections never run consecutively.

**One chat per batch.** Do not build all nineteen in one context.

## Gates

**Gate 0 — `SEC-182` visual approval · blocking.** No other section starts until it is approved.
Approval is explicit, and the gate is not "does it work":

- does the width vocabulary read as a **system** rather than a run of one-off widths;
- are the escape steps visibly distinct at 1440, 1280, 960 and 820;
- does the measure hold, and does every caption return inside it;
- is the narrow collapse to two positions honest;
- is the CSS vocabulary something the next eighteen builds will actually want to use.

**Gates 1–4 — end of each batch.** Per section: captures at 1440, 1280, 960, 820 and 390 full page; a
reduced-motion capture where it moves; console clean on load, on interaction and on leaving and
re-entering the route; no horizontal page overflow at any width; a keyboard walk where there is a
keyboard contract; the section's own review questions answered. Per batch: the catalogue home read
top to bottom **with the batch composed beside everything built so far** — the only place visual
sameness becomes visible; shared-mechanism verdicts confirmed or corrected; cost recorded against the
estimate.

**Gate 5 — final Wave 1 review.** Writes `REVIEW.md`, which does not exist before then.

## Shared-mechanism ledger

Status only. Contracts live in the brief that introduces them until they are built and reviewed, then
move to `BUILD-DEFAULTS.md`. Evidence and verdict corrections go in `FINDINGS.md`.

| #   | Mechanism                                 | Introduced at | Verdict           | Status  |
| --- | ----------------------------------------- | ------------- | ----------------- | ------- |
| W1  | Width and breakout vocabulary             | `SEC-182`     | shared now        | built   |
| W2  | Scroll-driven CSS fallback contract       | `SEC-020`     | shared now        | pending |
| W3  | GSAP scope, registration and cleanup      | `SEC-193`     | shared now        | pending |
| W4  | Pin and scrub lifecycle                   | `SEC-115`     | shared now        | pending |
| W5  | Reduced-motion composition switch         | `SEC-020`     | shared now        | pending |
| W6  | Labelled focusable overflow region        | `SEC-067`     | shared now        | pending |
| W7  | Controlled single-selection and ID wiring | `SEC-082`     | extract `SEC-144` | pending |
| W8  | Polite status announcer                   | `SEC-119`     | extract `SEC-163` | pending |
| W9  | Sticky-stack measurement guard            | `SEC-098`     | extract post-wave | pending |
| W10 | Whole-line mask with intact source text   | `SEC-193`     | extract post-wave | pending |
| W11 | Native range comparison control           | `SEC-133`     | local, deliberate | pending |
| W12 | Filter state and dim-in-place             | `SEC-163`     | local, deliberate | pending |
| W13 | Artefact annotation marker placement      | `SEC-144`     | local, deliberate | pending |
| W14 | Responsive media relocation               | `SEC-082`     | local, deliberate | pending |

No section in Wave 1 depends on another section's **composition**. The only dependencies are
mechanisms, which is the point.

## Registry revision window

The structured, taxonomy-backed registry model began during the `SEC-182` build and is implemented.
**One revision window remains open, closing at the end of Batch 1**, while there are few entries to
correct. After that the model is stable for the wave.

## Wave 1 is complete when

- all nineteen sections meet the completion standard in `BUILD-DEFAULTS.md`;
- W1 has been used by at least three sections;
- every Wave 1 entry carries the full registry metadata;
- every shared mechanism above has a confirmed or corrected verdict, with evidence in `FINDINGS.md`;
- every section has its five captures, plus reduced-motion captures where relevant;
- every moving section has stated **same composition** or **separate composition**, and its metadata
  agrees with the statement;
- the catalogue home reads top to bottom with no console errors and no horizontal overflow;
- every compromise, brief departure and disagreement is recorded;
- actual build cost per section is recorded against its `difficulty` estimate.

## Gate 5 agenda

Performed in the final review chat, not before, and written into `REVIEW.md`.

1. Actual build cost against the estimates, per section and per difficulty band.
2. Whether the selected 101 still feels realistic — if Wave 1 ran materially over, move concepts to
   reserve rather than building them worse.
3. Intermediate-width failure patterns, and whether they share a cause.
4. Reduced-motion cost. Hypothesis: it is concentrated almost entirely in pinned work, and
   entry-resolution sections are effectively `rm-free` once the resting state is the CSS default.
5. Which shared mechanisms genuinely emerged — including any declared shared that were not, and any
   local decision that should have been shared.
6. Over-abstraction or visual sameness. Read the nineteen beside one another: has a default anatomy
   appeared that nobody decided on?
7. Category and visual-register balance across what now exists.
8. Selected concepts that should move to reserve.
9. Reserve concepts that should be promoted — through the coverage test only.
10. Catalogue metadata and filtering needs. Nineteen entries is around where an unfiltered index
    stops being browsable.
11. The poster → item page → standalone-route ladder. Only the third tier exists.
12. How the sections behave composed beside one another — the condition under which scroll-capturing
    sections fail. Wave 1 holds two.

Two questions have a build-time answer that is **reported, not acted on**: the `SEC-107` pin outcome
and the `SEC-147` counter judgement. Both are findings for this review, not licence to change a
concept mid-wave.
