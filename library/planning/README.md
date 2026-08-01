# Library planning

What each planning document is, and when it may be read.

Build rules are not here — [../BUILD-DEFAULTS.md](../BUILD-DEFAULTS.md) owns those, and
[../CLAUDE.md](../CLAUDE.md) owns the reading rules. This file is a map and nothing else.

**Current wave: Wave 1** → [waves/wave-01/DASHBOARD.md](./waves/wave-01/DASHBOARD.md)

## Active

| File                                       | Owns                                                     | Read when                                                                                                             |
| ------------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [ARCHITECTURE.md](./ARCHITECTURE.md)       | The approved application architecture and its exclusions | The architecture is questioned or extended.                                                                           |
| [TAXONOMY.md](./TAXONOMY.md)               | Categories, permanent ids, tag vocabulary, concept rules | Revising the taxonomy; adding or changing a vocabulary value; judging concept versus variant; planning a new concept. |
| [BUILD-SELECTION.md](./BUILD-SELECTION.md) | Which of the 216 ids are selected, reserve, merged       | Planning a wave; promoting a reserve concept.                                                                         |

**Writing an ordinary registry entry does not require the taxonomy.** The metadata a component needs
is already carried by its brief; `registry.ts` types every value, so a wrong one is a build error.

## Waves

`waves/wave-01/`

| File                                         | Owns                                                  |
| -------------------------------------------- | ----------------------------------------------------- |
| [DASHBOARD.md](./waves/wave-01/DASHBOARD.md) | Status. The one short file to open for current state. |
| [SEC-182.md](./waves/wave-01/SEC-182.md)     | The gated batch 0 brief.                              |
| [BATCH-01.md](./waves/wave-01/BATCH-01.md)   | Briefs for `SEC-001` · `057` · `162` · `020`.         |
| [BATCH-02.md](./waves/wave-01/BATCH-02.md)   | Briefs for `SEC-145` · `070` · `147` · `119` · `067`. |
| [BATCH-03.md](./waves/wave-01/BATCH-03.md)   | Briefs for `SEC-082` · `144` · `133` · `163` · `098`. |
| [BATCH-04.md](./waves/wave-01/BATCH-04.md)   | Briefs for `SEC-198` · `193` · `115` · `107`.         |
| [FINDINGS.md](./waves/wave-01/FINDINGS.md)   | What actually happened. Append-only.                  |

`REVIEW.md` is written at Gate 5 and does not exist before then.

## Reference

`reference/` holds provenance — the research, the full longlist and the selection method. **Never
read during a build.** See [reference/README.md](./reference/README.md) for what each file is and
whether it is still binding.

## One job each

No two active files own the same thing. Visual direction is `DESIGN.md`. Build rules are
`BUILD-DEFAULTS.md`. Architecture is `ARCHITECTURE.md`. Vocabulary is `TAXONOMY.md`. Selection is
`BUILD-SELECTION.md`. Sequencing and status are the wave dashboard. What to build is a brief. What
happened is `FINDINGS.md`.
