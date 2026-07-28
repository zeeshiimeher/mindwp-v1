# MindWP documentation audit

Audit only. Nothing rewritten, no source touched. Outlines are collected in §12 rather than repeated per section.

Sizes: README 880 · Foundation 924 · Strategy 2,148 · Writing 1,317 · **Design 5,601** — 10,870 words. Design is 52% of the core and owns the least settled domain.

---

## 1. Executive verdict

**Foundation and Writing are close to right. README needs a trim. Strategy has one block that must leave. Design needs rebuilding, not editing.**

Three problems account for most of the excess.

**Design has become a post-mortem archive.** `DESIGN.md:7` states the policy plainly — *lessons from individual rejected attempts are not preserved as design rules* — then breaks it repeatedly. `## What makes a section look built` (213–231) says outright that its moves are "drawn from work that has actually passed review". `## Material expression` with `### How each material fails` (301–345) is a nine-item vocabulary with a failure mode attached to each. `## Four doctrine examples` (233–241) narrates how rules were discovered. Roughly 1,600 words of pattern catalogue inside a document that forbids pattern catalogues.

**One idea is stated seven times.** *Familiar foundations are not failures* appears at `41`, `60`, `98`, `143`, `158`, `172` and `366`. Its mirror — *different meanings should not receive the same treatment* — appears four times (`158`, `174`, `366`, `466`). Largest compression opportunity in the corpus, and removing it costs nothing.

**Two authorities argue the same case independently.** The reference-page rule exists in five places: `DESIGN.md:421–435`, `ENGINEERING.md:205–211`, `README.md:29`, and both the `mindwp-page-design` and `mindwp-design-eye` skills. Design and Engineering reach for the same reasoning. One owner, four pointers.

Nothing proposed for removal touches the website-led hierarchy, proof and claims discipline, privacy and consent, professional boundaries, service ownership, human accountability or platform posture — all of which sit in Foundation, Writing and Strategy.

## 2. Recommended documentation architecture

| Document | Owns | Change |
|---|---|---|
| README | Authority map, precedence, reading routes, skills | Light trim |
| FOUNDATION | Durable identity, buyer, truth, proof, privacy, professional boundaries, non-claims | Light trim |
| STRATEGY | Current commercial direction, offers, services, qualification, conversion, page roles, open decisions | Moderate; extract Homepage block |
| WRITING | Voice, claims phrasing, audience register, service phrasing risks | Moderate |
| DESIGN | Durable visual judgement only | Substantial rebuild |
| PAGE-PLANNING | Page meaning and planning contract | Unchanged this pass |
| ENGINEERING | Repository, CSS, responsive, a11y, motion mechanism, validation | Unchanged this pass |

Two rules should be made explicit and then relied on: **procedure belongs in skills, not authorities**; **implementation belongs in Engineering, not Design.**

## 3. README.md audit

**Strong.** The authority table (7–14), the seven-item precedence list (24–31) and the skills table (63–68) are current, accurate and used. Item 6 — a page becomes a reference only when the user names it — is the correct single home for a rule now scattered across five files.

**Must remain.** Precedence order; the page-plan boundary; source-and-renders describing implementation without redefining strategy; the skills table; the reading routes.

**Compress.** `## Current commercial commitments` (18–20) is a paragraph meaning "read Strategy" — fold into the table. `## Stability convention` (34–41) explains four labels at length; two sentences would do. The selection rule at `45` overlaps the routes beneath it.

**Move / Remove.** Nothing.

**Open.** Whether the reference-page rule is *stated* here and only pointed to elsewhere. Recommended: yes.

## 4. FOUNDATION.md audit

The strongest document in the set, and the one whose protections matter most.

**Strong.** `## Truth and proof` (33–41), `## Privacy and professional boundaries` (43–51) and `## Durable non-claims` (53–63) carry the invented-proof prohibition, the collective-voice limit, the automation-does-not-replace-judgement rule and the not-a-SaaS-product position. KEEP verbatim in substance.

**Must remain.** Website-led as an offer hierarchy (`15`); the buyer definition (`19`); connected capabilities as intentional and non-compulsory (`27–31`); everything in the three sections above.

**Compress.** `15` closes on an argument against a "leakage or automation framing" as the organising thesis — a record of a rejected proposal, not durable identity. Keep the hierarchy rule, drop the rebuttal. `23` on industry specificity uses three sentences for one.

**Move.** The buyer-role list (`19`) partially duplicates `STRATEGY.md:74`; Foundation keeps the durable definition, Strategy names the current lane.

**Remove / Open.** Nothing. Foundation is doing its job. Estimated reduction: 10–15%.

## 5. STRATEGY.md audit

**Strong.** The settled-decisions table (9–17) is the best-designed block in the corpus — six decisions, no explanation, no restatement elsewhere. The service table (53–58) with an explicit boundary column is equally good. The useful-enquiry definition (`49`) is load-bearing and precise.

**Must remain.** Settled decisions; offer hierarchy and the four separately scoped services; the useful-enquiry boundary; pricing posture; open decisions (133–141); the affirmative reasons list (36–41) — a document that only records refusals gives nobody a reason to buy, and Strategy says so at `43`.

**Compress.** `## Current positioning` (22–24) restates the settled table and Foundation's identity. `18` explains the operating case behind the market decision — reasoning, not decision. In-lane/out-of-lane examples (78–82) are useful but overlong. `## Proof development` (121–131) restates Foundation's five proof forms and adds an availability-ordered list that is business development, not documentation; keep only *a thin proof surface is answered with more proof, never a weaker standard*. `## Implementation pathways` (101–105).

**Move.** `### Active Homepage direction` (26–28) — see §10.

**Remove.** `119` ("Page length, section count and visual structure follow the page job") is a design statement inside Strategy; one clause is enough as a boundary marker.

**Contradiction.** `26–28` grants an approved Homepage architecture and section order, while `README.md:29` states an existing page is never a template or automatic global rule.

**Open.** The strategic context holds that naming remains open for **Local SEO Authority** and **Reputation & Review**; Strategy records both as current public names with no note of that openness. Resolve before rewrite; rename neither during it. Estimated reduction: ~30%.

## 6. WRITING.md audit

**Strong.** `## Who MindWP's own pages address` (46–52) is the sharpest passage in the corpus — it separates MindWP's buyer from the client's customer or patient, then says explicitly that clinic-copy guidance does not license that register on MindWP's own pages. `## Service language` (74–80) gives each service its phrasing risk. `## Voice` (5–11) is concrete.

**Must remain.** Audience register; the four service phrasing risks including *Reputation & Review must not read as rating management*; concrete-language preference; tools-are-not-the-product.

**Compress.** `## Professional, privacy and consent boundaries` (54–62) restates much of `FOUNDATION.md:43–51`; Writing needs only the clinic-copy distinction and the consent phrasing rule. `## Tools, CRM, AI and automation` (64–72) overlaps Foundation's non-claims and Strategy's platform posture — keep the phrasing risks, drop the restated positions.

**Remove.** `## Final copy review` (98–110), a ten-item checklist. The clearest instance in the corpus of material inviting an executor to optimise for document compliance rather than judgement, and every item is already a rule earlier in the same file.

**Open.** None. Estimated reduction: 20–25%.

## 7. DESIGN.md audit

**Strong, and worth carrying forward.** Shared grammar versus page-specific composition as distinct layers (`43`, `170`); semantic sections, containers and headings as valid foundations (`45–64`); *the introduction is not the complete section design* (`62`); familiar techniques neither automatically good nor bad (`172`); quiet sections are valid (`156`); typography and surface communication roles (`66–100`); emerald as controlled attention (`104–119`); responsive design as recomposition (`380–395`); interaction and motion need a communication purpose and the static state must hold the meaning (`397–417`); truthful visual material (`18`, `285`).

**Must remain.** All of the above, plus the sector-neutral visual grammar rule (`25`) — clinic-first in audience, sector-neutral in visual language. Genuinely durable, and it appears nowhere else.

**Compress — the repetition.** Collapse `41`, `60`, `98`, `143`, `158`, `172`, `366` into one statement and its mirror at `158`, `174`, `366`, `466` into a second. Roughly 400 words for no loss.

**Compress — judgement blocks.** `## Compositional variables` (198–211), `## Compose continuity across the full page` (350–370) and `### Qualitative anti-generic questions` (455–467) are three overlapping lists of things to judge. One list.

**Move to Engineering.** Typography inheritance, BEM overrides and token instructions (`75–85`, `102`) — `ENGINEERING.md:108–138` already owns CSS ownership. Named classes `.section` and `.container` (`52–56`, `64`). Motion reject-list items duplicating `ENGINEERING.md:150–165`.

**Move to the page-design skill.** `### Rebuilding a section on an existing page` (287–299) — a procedure, and one that pins **surface** as a carry-forward. `### Work at page scale and focal-section scale` (242–256) is method. `## Judge rendered evidence` (437–453) duplicates the `mindwp-design-eye` skill and `ENGINEERING.md:213+`; Design keeps *what* to judge and surrenders *how to capture*.

**Remove.** `## Four doctrine examples` (233–241) — narrates how rules were discovered. `## What makes a section look built` (213–231) — seven named moves with an implicit quota ("one or two per page"). `## Material expression` and `### How each material fails` (301–345) — a section catalogue and the largest single block. `160–164` — page-scale prescription with an embedded quota ("at least one central section should feel like a genuine event"). `## Use a reference page carefully` (421–435) — reduce to a pointer.

**Contradictions.** Three, all listed in §9: the self-breaking policy at `7`, surface pinned at `293` versus contextual at `96`, and payload-naming at `307` versus adaptable-composition rendering at `439`.

**The distinction to preserve explicitly.** `eyebrow → heading → supporting paragraph` is not a design failure. It becomes limiting only when the whole section repeatedly resolves to *introduction → explanation → small object → next band*. Design currently gestures at this across several passages; the revised document should say it once, clearly.

Estimated reduction: ~60%.

## 8. Cross-document duplication

| Material | Appears in | Recommended owner |
|---|---|---|
| Reference page / existing implementation | Design 421–435 · Engineering 205–211 · README 29 · two skills | **README**, pointers elsewhere |
| Rendered-evidence capture order | Design 437–453 · Engineering 213+ · design-eye · page-build | **design-eye skill** |
| Typography inheritance and CSS ownership | Design 75–85, 102 · Engineering 108–138 | **Engineering** |
| Motion mechanism and reduced motion | Design 397–419 · Engineering 150–165 | **Engineering** (Design keeps purpose) |
| Truth and proof prohibitions | Foundation 39 · Strategy 131 · Writing 39 · Design 18, 285 | **Foundation**, short local applications |
| Five proof forms | Foundation 37 · Strategy 123–127 | **Foundation** |
| Buyer and audience definition | Foundation 19 · Strategy 74 | Foundation durable, Strategy current |
| Useful enquiry | Strategy 49 · Foundation 29 | **Strategy** |
| Sector-neutral visual grammar | Design 25 · Strategy 22 | **Design** for visual, Strategy for audience |

## 9. Contradictions and open decisions

1. **Design forbids what Design contains** — `7` versus `215`/`301–345`.
2. **Strategy grants Homepage architecture authority** that `README.md:29` denies.
3. **Surface pinned versus surface contextual** — `DESIGN.md:293` versus `96`.
4. **Service naming** — the strategic context holds Local SEO Authority and Reputation & Review open; Strategy records neither as open.
5. **Review offer** — paid or unpaid, commitment level, deliverable, response timing. `STRATEGY.md:139` correctly lists the label as open; the rest should be recorded as open too, and none settled during rewrite.
6. **Payload naming before exploration** — `307` versus `439`.

## 10. Homepage-specific material that must leave the core documents

**`STRATEGY.md:26–28` — `### Active Homepage direction`.** The only explicit Homepage block in the core set. It records an approved Homepage architecture and argument order, and belongs in a Homepage brief outside the core documents. Its destination is an owner decision; Homepage planning remains a separate task.

**`DESIGN.md:160–164`** — page-scale depth prescriptions. Not named as Homepage material, but derived from page audits and functioning as page architecture.

**`DESIGN.md:287–299`** — the rebuild procedure, written from one page's rebuild.

`STRATEGY.md:111` ("Home orients the buyer to MindWP…") is a one-line page *role* in an IA list and may stay.

## 11. Engineering or planning material that must leave the core documents

From Design: typography inheritance and BEM instruction (`75–85`), token-before-raw-value instruction (`102`), named foundation classes (`52–56`, `64`), motion-mechanism items duplicating `ENGINEERING.md:150–165`, and the capture procedure (`441–451`).

From Strategy: `119`'s design statement, reduced to a boundary marker.

Nothing should move *into* Design, Strategy or Writing from Page Planning or Engineering. Both remain unchanged this pass.

## 12. Proposed compact outline for each revised document

**README** — Authority table · Precedence · Reference-page rule (single home) · Stability labels · Reading routes · Skills table.

**FOUNDATION** — Website-led identity and offer hierarchy · Buyer principles · Why connected capabilities are intentional · Truth and proof · Privacy and professional boundaries · Durable non-claims.

**STRATEGY** — Settled decisions · Positioning · Why MindWP is different · Offer architecture and the four services with boundaries · Useful enquiry · Audience and qualification · Delivery, ownership and pricing · Conversion direction · Page roles · Proof standard · Open decisions.

**WRITING** — Voice · Who MindWP's pages address · Concrete language · Claims phrasing (Foundation pointer plus Writing-specific rules) · Service phrasing risks · Clinic-copy boundary · Repetition control.

**DESIGN** — Quality standard · Sector-neutral visual grammar · Shared foundations, and why they are not failures (once) · Composition expresses the material's relationship · Weight, payload and quiet sections · Page continuity · Responsive recomposition · Interaction and motion purpose · Truthful visual material · Judging rendered evidence (criteria only).

## 13. Recommended compression level

| Document | Now | Target | Level |
|---|---|---|---|
| README | 880 | 600–750 | Light |
| FOUNDATION | 924 | 750–900 | Light |
| STRATEGY | 2,148 | 1,300–1,600 | Moderate |
| WRITING | 1,317 | 900–1,100 | Moderate |
| DESIGN | 5,601 | 1,800–2,400 | Substantial rebuild |

Core set: 10,870 → roughly 5,400–6,750. Ranges, not targets.

## 14. Owner decisions required before rewriting

1. Where does `Active Homepage direction` go — and is its extraction in scope for the rewrite, or for the separate Homepage task?
2. Are Local SEO Authority and Reputation & Review recorded in Strategy as names currently open?
3. Does the reference-page rule live once in README, with pointers from Design and Engineering?
4. Does `mindwp-design-eye` own the rendered-evidence procedure, leaving Design the judgement criteria?
5. Does Design retain any material or payload vocabulary, or none?
6. Do rebuild and page-scale procedures move to `mindwp-page-design`, or leave the documentation entirely?
7. Confirm the Review's commercial terms stay open and unsettled by the rewrite.

## 15. Recommended rewrite order

1. **Foundation** — smallest change, and it sets the floor the others defer to.
2. **Strategy** — after the Homepage extraction is decided; its boundaries determine what Writing and Design must not restate.
3. **Writing** — depends on Foundation's proof and privacy wording being final.
4. **Design** — the largest rebuild; needs the other three settled so it can point rather than restate.
5. **README** — last, because it maps whatever the other four became.

## 16. Recommended next action

Owner approval or revision of this audit. Nothing should be rewritten until the §14 decisions are answered — particularly 1, 3 and 5, which each change what the revised Design document is allowed to contain.

## What is done

- Audited the five core documents in full; read Page Planning, Engineering and all four skills only to locate authority boundaries and duplication.
- Classified the significant material and recorded nine cross-document duplications, six contradictions or open decisions, compression ranges and a rewrite order.
- Created only `docs/DOCS-AUDIT.md` — no other file, no source, no Homepage inspection.

## What is next

- Owner approval or revision, then answers to the §14 decisions before any rewriting begins.
