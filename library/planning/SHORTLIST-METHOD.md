# Selection method

How the strongest initial build set is selected from the concepts in
[COMPONENT-LONGLIST.md](./COMPONENT-LONGLIST.md).

This file defines the method. The selection itself lives in
[BUILD-SELECTION.md](./BUILD-SELECTION.md).

Library-local planning, not a website authority.

## The count is an outcome

**There is no target number of builds.** The selected set may be smaller or larger than a hundred.
The number is decided after the work, not before it, from:

- duplicate and variant review;
- category coverage;
- familiar-pattern range;
- ambition review;
- implementation cost;
- accessibility and performance risk;
- MindWP relevance;
- the quality of the resulting set read as a whole.

A larger selection is not a failure of triage, and a smaller one is not a failure of nerve. Either
can be right. What would be wrong is choosing the number first and then justifying it.

## Principles

**Scores rank; a person selects.** No concept enters or leaves the set because arithmetic said so.
The scoring exists to make a large list comparable and to force the weak ones to be defended out
loud — not to produce the answer.

**Stillness is a design choice, not a missing feature.** A static editorial section that is correctly
still must be able to score full marks. Any method that rewards motion per se will quietly convert
this library into a motion collection, which is the outcome to avoid.

**Familiarity is not a penalty.** A card grid whose value is that it can be re-dressed twenty ways is
worth more than an experiment that can only ever be itself. Cards, grids, tabs, accordions, splits,
sliders and rails are first-class.

**Risk is flagged, never auto-rejected.** High accessibility, performance or maintenance risk changes
how a concept is built and how many of its kind are kept. It does not disqualify it.

**The selection is a set, not a ranking.** The final places are decided by what the set is missing,
not by what scored next.

## Pass 1 — Triage

One quick whole-concept judgement per entry, no scoring. Roughly a minute each.

| Band  | Meaning                                                       |
| ----- | ------------------------------------------------------------- |
| **A** | Clearly wanted. Would be missed if absent.                    |
| **B** | Plausible. Needs comparison against its neighbours to decide. |
| **C** | Weak, redundant, or thin. Parked, not deleted.                |

Roughly a third, a half and a sixth of the list is the shape this usually takes. Treat that only as a
loose warning signal, not a quota — if band A swallows most of the list, the triage was probably too
generous and is worth redoing against a harder question (_would I regret not having built this?_),
but a genuinely strong longlist may legitimately produce a fat band A.

Band C is revisited once, at pass 6. Concepts are only ever rejected with a reason written down.

## Pass 2 — Scoring

Applied to bands A and B. Five scores of 1–5 and four flags.

### Scores

| #   | Dimension                        | Covers                                             | 5 means                                                                                   |
| --- | -------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1   | **Usefulness**                   | usefulness                                         | A real page repeatedly needs this job done.                                               |
| 2   | **Visual and composition range** | visual potential, styling range, composition range | One concept can produce many genuinely different-looking sections.                        |
| 3   | **Distinctiveness and impact**   | distinctiveness, inspiration value, desktop impact | Building it teaches or shows something the set does not already have.                     |
| 4   | **Interaction fit**              | interaction value                                  | Its level of activity — **including deliberately none** — is exactly right.               |
| 5   | **Feasibility**                  | implementation feasibility, maintainability        | Buildable cleanly within a bounded implementation cycle, and still legible in six months. |

Dimension 4 is the guard rail. It scores whether the chosen level of reader activity serves the
reading, not how much movement there is. A still section with correct stillness scores 5. A section
that animates because it can scores 2.

### Flags

| Flag              | Values                                              |
| ----------------- | --------------------------------------------------- |
| **Narrow width**  | credible · needs invention · no credible direction  |
| **Accessibility** | low · medium · high, with a one-line reason         |
| **Performance**   | low · medium · high, with a one-line reason         |
| **Overlap**       | none · partial with `SEC-nnn` · high with `SEC-nnn` |

A concept flagged **no credible direction** at narrow width cannot be selected until a direction is
invented for it, however well it scored. That is the one hard gate, because every section must
survive on a phone.

### Reading the scores

Sum is a sorting aid only. Two things matter more than the total:

- a **1 or 2 on dimension 5** means the concept costs more than it returns unless dimensions 2 and 3
  are both 5;
- a **1 or 2 on dimension 2** means the concept is a one-look section, which is acceptable only if
  dimension 3 is high — this is where genuinely experimental work legitimately sits.

## Pass 3 — Category balance

Sort the provisional selections by taxonomy category and compare against the shape the taxonomy set
out.

Check for the specific distortions the longlist was built to avoid:

- card and grid concepts crowding out everything else;
- GSAP and scroll-driven concepts crowding out static composition;
- pinned, horizontal and scroll-capturing concepts dominating — they fail by accumulation, so their
  share of the set matters more than any individual decision;
- sliders and carousels appearing several times with no real behavioural difference;
- editorial and typography-led sections thinning out because they score less dramatically than motion
  work — a known failure mode of any scored method, and the reason this pass exists;
- dense-information, comparison, proof and process sections being under-represented despite being the
  sections a service business actually needs.

Rebalance by promoting from reserve and demoting to it, not by lowering the bar within a category.

## Pass 4 — Duplicate and variant review

Re-apply the concept-versus-variant rule from the taxonomy to the provisional set **and to the
reserve**. Concepts that read as distinct in isolation often collapse once seen side by side, and a
reserve that quietly holds cosmetic duplicates will feed them back into the set the first time a
selection fails.

For each cluster of near-neighbours, ask what a reader actually _does_ differently. If the answer is
only "it looks different", merge.

Merging is recorded as `MERGE → SEC-nnn`, and the absorbed concept's distinguishing idea is written
into the surviving entry's variant list. Nothing is lost; it stops being a separate build.

## Pass 5 — Ambition review

Count the ambitious and high-risk selections and decide the appetite deliberately rather than by
accident.

The set needs enough ambitious work to make the laboratory worth running, and few enough
artwork-specific one-offs that it stays a library rather than a gallery. Judge by reading the
selected set as a whole and asking two questions:

- would a designer looking at this collection find anything memorable, or only competence?
- how many of these can only ever be themselves — cannot accept substantially different content
  without being redesigned, cannot be re-dressed?

Every high-risk selection needs a named reason it is worth the cost, and a note on what its
reduced-motion and keyboard behaviour will have to be. If the ambitious count is very low, the method
has been too cautious; a set of uniformly safe sections would be a failure of nerve. If the one-off
count is high, the set has drifted from library toward showreel.

Do not overcorrect for the anti-motion sentiment in the research. It is a reliable floor of risk, not
a mandate for stillness.

## Pass 6 — Coverage and gap review

Read the provisional set as a whole and ask what is missing:

- a communication job with no section that does it;
- a spatial behaviour represented only once;
- a surface or density register that never appears;
- a mechanism — static, CSS, React, GSAP — that is under-represented;
- something from band C that turns out to be the only answer to a real gap — rescue it here.

This pass resolves the final shape of the set. It answers _what does the set need_, not _what scored
next_.

## Pass 7 — Final judgement

Zeeshan reviews the set and overrides freely. Overrides are recorded with a reason so the method can
be corrected, not so the decision can be justified.

The scores do not need to agree with the outcome.

## Marking

Every permanent ID ends the process with exactly one status:

| Mark                | Meaning                                                        |
| ------------------- | -------------------------------------------------------------- |
| **SELECTED**        | In the initial build set.                                      |
| **RESERVE**         | Not now. First candidate if a selection fails during building. |
| **REJECT**          | Not building it. Requires a written reason.                    |
| **MERGE → SEC-nnn** | Absorbed. Its idea moves into the named concept's variants.    |

Statuses live alongside the entry, keyed by permanent ID. IDs are never reused or renumbered.
Selected + reserve + reject + merge must equal the longlist total.

## Build waves

Build the set in waves rather than committing to all of it up front.

**Wave size is evidence-based, not fixed.** Size the first wave so that it covers the widest spread of
categories, mechanisms and difficulty the set contains — enough variety that the review afterwards is
informative — while staying small enough that being wrong is cheap.

**The first wave is balanced, not front-loaded with the hardest work.** It should hold, in roughly
this proportion: familiar low-risk baselines that establish the house style and prove the foundation
under real sections; medium interactive work that exercises state, disclosure and reader-driven
behaviour; and a smaller number of uncertain or high-risk concepts that test where the real cost
lies. Leading with the hardest builds would stall the wave and teach nothing about the ordinary case,
which is most of the set.

After the first wave, re-run passes 3, 5 and 6 against real evidence and move concepts between
selected and reserve. The method is expected to be wrong about some things; it is designed so that
being wrong is cheap.
