---
name: mindwp-design-page
description: Use when building the first approval-ready desktop visual draft for an approved MindWP page, reconstructing a concrete reference, redesigning a full page or section while preserving meaning, or creating a user-requested route variant. Performs meaning-first spatial composition, composition-first blocking, implementation, reference-blind critique, late brand calibration, and the quality-threshold loop before showing a draft.
---

# MindWP page design

Turn one short build request into a private page-specific composition, a coded desktop page, and an evidence-backed quality gate. Show the user only the first draft that clears that gate. The durable composition principles and first-draft standard live in `docs/DESIGN.md`; this skill owns the procedure.

The durable principle: meaning determines what must be communicated; the design process determines how those meanings share space, hierarchy, rhythm and visual form.

## Confirm the executable boundary

1. Read the visual-draft phase in `docs/PAGE-WORKFLOW.md`, the relevant `docs/PAGE-LEDGER.md` row, approved `page.md` meaning when present, `docs/DESIGN.md`, and the technical boundaries in `docs/ENGINEERING.md`. Read `docs/STRATEGY.md` only when no approved page record exists or a voice, claims or audience question arises that the record does not answer; an approved `page.md` is the meaning authority for a build.
2. Identify the exact page and intended route. Ask one narrow clarification only if the repository cannot resolve them unambiguously; never choose a page merely because its ledger row looks build-ready. Do not replace a visually approved route unless the user explicitly asks for a redesign or route variant.
3. Confirm that meaning is approved or supplied: central commercial argument, narrative progression, exact heading order, communication jobs, truth boundaries, CTA, essential neighbour meaning, copy status and technical constraints. Treat supporting payloads as a meaning reservoir, not visible content counts.
4. Exclude rejected, superseded, excluded and unclassified work from creative evidence. Never reuse a rejected draft as a refinement baseline.

Approval in another ledger dimension does not satisfy the meaning boundary. Stop only for missing page identity, a material meaning contradiction, an unavailable concrete reconstruction target, or a material decision the user explicitly retained.

Supported modes are a new page from approved meaning, concrete-reference reconstruction, full-page redesign, section redesign in page context, and a user-requested route variant.

## Begin from meaning and stable foundations

Build the initial working set from the approved meaning plus stable MindWP foundations: current tokens, typography character, shell behaviour, buttons, material quality and shared closing behaviour. Inspect current shared source directly. Focused brand evidence may be used now only when it isolates one of those foundations without exposing a complete accepted-page silhouette or section sequence.

Do not inspect complete Homepage or Local SEO Authority renders before fresh composition exists. Do not use `docs/existing-pages-audit.md` as default design input; consult its content-only digest only when a voice or truth question remains. Complete accepted-page renders enter later for quality calibration and accidental-duplication checks.

For concrete-reference reconstruction, inspect the user-supplied target at the start because reproducing that page is the task. This exception does not make complete Homepage or Local SEO renders early generative inputs for unrelated pages.

## Keep the three units distinct

- A **semantic landmark** is an ordered heading, communication job and truth boundary that must remain understandable.
- A **spatial construction or visual act** is a substantial composed experience that may contain several semantic landmarks.
- A **DOM or evidence unit** supports semantic implementation, testing or capture; it does not define the visible composition by default.

Place semantic landmarks inside an already-developed page composition. A landmark may integrate its heading into a larger construction without gaining an independent background, padded band, card, local grid, artefact or autonomous screenshot composition.

## Compose three to five substantial spatial constructions

For a complete full-page draft, privately resolve **three to five substantial spatial constructions before designing individual semantic sections**. For each construction, decide:

- the semantic relationship being communicated;
- what must be understood before detailed reading;
- the dominant visual mass;
- spatial geometry, axes and alignment behaviour;
- scale;
- crop, overlap, juxtaposition, continuity or interruption;
- which semantic landmarks live within it and how their headings integrate;
- how its reading behaviour differs from neighbouring constructions;
- which payload detail becomes selective public copy;
- which payload detail remains planning truth without requiring a visible object.

Use the count as a private forcing function for substantial page-level composition, not as a reusable layout pattern, public band count or semantic-section quota. Resolve the complete page silhouette, dominant, supporting and quiet moments, density changes and continuity across the constructions. Keep this composition brief private and temporary. Do not create a repository file, route, approval stage or user-facing explanation for it.

## Challenge the page-level composition

Test whether the constructions communicate the service before detailed reading, distribute mass according to commercial importance, and create genuinely different reading behaviour. Reject copied reference silhouettes, evenly weighted bands, isolated mini-sections hidden inside a shared background, or one metaphor forced through unrelated jobs. Revise the private composition until it offers a credible page-level answer.

## Block the composition before final copy

Work at the intended route, or the ordinary variant route the user explicitly named. Block the complete page in code at `1640px` using the exact heading order, minimal heading labels and only provisional supporting language.

Establish page silhouette, spatial masses, axes and alignment changes, overlap and crop, density, dominant/supporting/quiet moments, and continuity between related meanings. Use semantic HTML and the live shared foundation, including `.container` where it serves as an anchor, but do not let baseline markup, final body copy, full payload lists or payload-derived components generate the geometry.

Capture one cheap full-page block without section crops:

```bash
pnpm capture:route -- --desktop <route> /tmp/<draft-name>-block
```

Judge the thumbnail silhouette and mass distribution. Recompose the block before detailed craft when the construction is weak. This remains private work at the same route and creates no experiment lane or public approval gate.

## Build the complete desktop page

After the spatial structure works, complete the desktop art direction and rewrite supporting copy to serve it. Preserve the exact approved heading order, communication jobs, commercial progression, truth boundaries, CTA and essential neighbour meaning.

Synthesize or omit supporting payload detail publicly when the protected meaning remains clear. Keep every essential communication job, claim, truth boundary, distinction and CTA publicly understandable. A supporting payload bullet does not require public text, a visual object, a component, an interaction or a separate layout. Keep one viable semantic structure across widths, with page-local components and CSS owning the original composition.

Defer detailed responsive implementation, interaction refinement, motion, accessibility hardening, performance work, cleanup and release decisions to `mindwp-finish-page`. Do not add the route to navigation or sitemap, deploy it, or decide indexing, canonical or publication policy unless the user explicitly includes release work.

## Run the reference-blind composition critique

Capture the new `1640px` full page without accepted-page reference material in the review packet. When delegation is available, give an **independent read-only visual critic** only:

- the new full-page screenshot; and
- the page's central commercial job.

Do not provide complete accepted-page screenshots, section crops, the private composition brief, the intended solution or the designing agent's diagnosis. Ask the critic to judge silhouette, hierarchy, distribution of mass, repeated section anatomy, visual specificity, and whether the service can be understood before every paragraph is read. Treat findings as evidence, not a vote; the designing agent owns the judgement.

Apply the explicit inner-composition test. A surface change has not solved the problem when several landmarks still repeat:

`entry → copy → payload renderer`

Shared backgrounds, unequal cards, documents, photography or reduced colour alternation do not make interchangeable inner experiences specific. If that anatomy still constructs the page, **discard and recompose** internally at page or construction level.

## Calibrate with accepted MindWP references

Only after the reference-blind composition review passes, inspect the complete accepted Homepage and Local SEO Authority renders in their ledger-permitted **brand/quality reference** role. Prefer proven-current evidence from `docs/reference/`; capture fresh `1640px` renders when the stored evidence is absent or stale.

Use those full pages to calibrate overall craft, MindWP character and finishing discipline, and to detect accidental reuse of an accepted silhouette, scene rhythm or inner composition. Transfer typography character, palette roles, clarity, restraint, shell behaviour and material quality. Treat page-specific hero mechanisms, artefact families, scene sequences and silhouettes as occupied territory.

Then capture the complete page and useful act or DOM/evidence crops:

```bash
pnpm capture:route -- --desktop --sections <route> /tmp/<draft-name>
```

Use crops to verify semantic jobs, truth, copy fit and local craft in whole-page context. Do not require every semantic landmark to look like an autonomous composition merely because the DOM or capture tool can isolate it.

If late calibration or evidence review exposes generic, repetitive, visually thin, copied or sub-threshold work, discard and recompose, repeat the reference-blind review on the new full page, and recalibrate. **Do not use a fixed iteration count**, and do not show discarded drafts to the user.

## Present the first qualifying draft

Present only the first threshold-passing full-page render and the smallest useful evidence. Do not describe discarded drafts or return the private composition brief.

User-visible drafts have two default decisions:

- **Approve:** record visual approval and move to `mindwp-finish-page`.
- **Reject:** record the draft as rejected and excluded from creative evidence. Do not carry its presentation into a replacement.

Targeted refinement happens only when the user explicitly asks to change a visible draft. In that case, preserve only the parts the user retained, revise the requested scope in full-page context, recapture the coupled evidence, and return the new draft for another decision.

Record **Desktop draft: rendered** and **Visual decision: pending** only after the qualifying fresh evidence exists. Never infer production finish, final audit, publication or release.

## Handle specialised modes

- **Concrete-reference reconstruction:** inspect the target first, record its role and width, map visible hierarchy and relationships, then reconstruct them semantically. Treat wraps and page height as evidence rather than fixed geometry.
- **Full-page redesign:** preserve approved meaning, diagnose the current page at full-page scale, exclude rejected presentation logic, then run the complete meaning-first composition procedure.
- **Section redesign:** use only when the user explicitly requests targeted refinement; inspect the full page, preserve adjacent jobs, compose the requested scope in context, and recapture the whole-page consequence. The three-to-five full-page construction count does not apply.
- **Route variant:** build at the exact ordinary route named by the user without experiment infrastructure or prototype lineage.

End with the rendered outcome, relevant source and capture paths, material risks, `What is done`, and `What is next`.
