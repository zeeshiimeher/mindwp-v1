# Wave 1 findings

What actually happened. Append-only — entries are added, never edited out.

This is where a build records what the brief could not predict: departures, compromises,
disagreements with the brief, shared-mechanism verdicts, and cost against the `difficulty` estimate.
Status belongs in [DASHBOARD.md](./DASHBOARD.md); this file holds evidence.

A build chat appends **its own entries only**.

## Entry format

```markdown
### SEC-nnn · short title · batch n · <date>

- **Departures** — what was built differently from the brief, and why.
- **Compromises** — what is not right yet, and what it would cost to fix.
- **Mechanism verdict** — for any W-n introduced, extracted or consumed: confirmed, corrected, or
  not needed.
- **Cost** — actual against the `difficulty` estimate.
- **Open question** — anything for the batch gate or for Gate 5.
```

Gate entries use the same shape with a `### Gate n` heading, and record the batch-level judgements:
the catalogue home read as a collection, mechanism verdicts confirmed, and cost across the batch.

## Findings to carry to Gate 5

Named in advance because they are decided by a build and must be **reported, not acted on**:

- **`SEC-107`** — whether the genuine ScrollTrigger pin passed or failed, at which width, and what
  was tried. Its `pinned` and `budget-captures-scroll` metadata do not change as a side effect.
- **`SEC-147`** — whether the hand-written counting island was worth its JavaScript, judged from the
  built result.
- **`SEC-020`** — whether reduced motion is genuinely **same composition**. The longlist tags it
  `rm-designed`; if the build confirms `rm-free`, the metadata records `rm-free` and the discrepancy
  is reported here rather than silently reconciled.

---

## SEC-182 · Three-Position Breakout Ladder · batch 0

Built and awaiting Gate 0. **The build's own report is not yet recorded here**; the review chat that
decides Gate 0 should append it, along with the answers to the brief's five review questions.

Recorded from the implementation during the documentation migration, as fact rather than judgement:

- **W1 exists** as `src/styles/widths.css`, imported by `library.css` into `layer(library)`, holding
  exactly the four demonstrated positions — `measure`, `margin`, `half-bleed`, `full-bleed` — and no
  others. No `bleed-left` / `bleed-right` was written, per approved decision 4.
- **It is CSS, not a React wrapper**, as the brief required. The API is a `width-grid` class,
  `data-width` on escaping children only, and `data-width-subgrid` for a breakout that re-exposes the
  lines to its own children.
- **The convergence rule is implemented** as two declared collapses: `margin` returns to `measure`
  below 57.5rem, and `half-bleed` returns to `measure` below 45rem.
- **The registry model is implemented.** `src/lib/registry.ts` carries the typed unions and derives
  display tags through `toTags()`; `SEC-182` is its first `sections` entry. The one revision window
  closes at the end of Batch 1.
