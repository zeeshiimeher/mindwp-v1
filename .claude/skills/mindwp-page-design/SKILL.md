---
name: mindwp-page-design
description: Use when designing or redesigning a MindWP page or section — deciding art direction, section composition, page rhythm, and what each section is materially made of. Produces a reviewable design specification and no production code. Use before mindwp-page-build, and for direction-only, concept and critique requests.
---

# MindWP page design

Decide the design. Write no production code.

`docs/DESIGN.md` is the canonical design authority — read and apply it. This skill owns method, not doctrine, and does not restate it.

## Output a specification, not inspiration

The deliverable is a design a person can review and reject before anything is built. For each substantial section:

```
Job
Visitor change
Weight            quiet / supporting / focal / set-piece / closure
Surface
Primary payload   the named material (see DESIGN.md, Material expression)
Relationship      what the payload makes visible
First-glance read what a visitor understands before reading any copy
Evidence needed   real content, proof or media the section requires
Interaction       only when it carries meaning; otherwise "none"
Desktop           composition, dominant object, eye path
Mobile            what transforms, what is preserved, what is dropped
Risk              the thing most likely to fail, to verify in the render
```

At page scale, also decide: the complete surface rhythm · a weight map across all sections · which section is the set-piece · which passages are deliberately quiet · the interaction budget for the whole page · the mobile risks worth designing for now.

Quiet transitional sections need a row, not a concept. Say so explicitly rather than leaving them undecided — an unfinished section and a deliberately quiet one look identical in a specification and different in a render.

## Name the material before drawing

Every substantial section names its primary payload from `DESIGN.md`'s material vocabulary. Naming it is the point at which "text in a column" stops being the default answer.

Two tests before a payload is accepted:

- **Sketchable in one sentence** without naming layout containers. "A track where four channels converge on one owner" passes. "A two-column split with a card on the right" does not — that is an arrangement, not a material.
- **Legible without its paragraph.** If the object only makes sense once the copy beside it is read, it has not externalised the relationship.

Where the material is genuinely quiet, `bare typeset arrangement` is a correct answer. When it is the answer for most of a page, say why the page's main meanings do not need stronger expression.

## Open the accepted page at this stage

The Homepage is the accepted quality reference and this is the stage that may open it. Capture first, source only if implementation understanding is needed:

```
pnpm capture:route -- --desktop --sections / <output-dir-outside-repo>
```

Study the standard of resolution each section reaches and how weight is distributed across the page. Do not shop its constructions. Reuse one only when this material independently creates the same need.

When redesigning an existing page, capture that page too, and read the full page before the section crops.

## Design options must differ in substance

When proposing alternatives, each must differ in **relationship and material**, not in container. Three arrangements of one fixed content shape are one option presented three times.

Before proposing options, state what the content itself could become. A redesign carries forward the section's job, its truth boundaries, and anything the page plan explicitly pins. Labels, counts, groupings, sequence, and copy are free unless pinned — and are usually where a genuinely different design comes from.

## Protect meaning and truth

Identify what the supplied page plan marks fixed, adaptable, open, and unavailable. Preserve facts, search intent, approved claims, real proof, service ownership, and professional, privacy, consent, legal and clinical boundaries.

Never invent proof, metrics, interfaces, client results, operational detail, pricing, or professional capability to complete a design. A payload that needs evidence the business does not have is not a design decision — it is a request, and belongs in `Evidence needed`.

Plan rows are meaning material, not object counts.

## Work both scales

Establish a provisional page progression, develop the important or uncertain sections, then let their real needs revise the page. Continue until neither scale is merely accommodating decisions frozen at the other.

Do not design isolated strong sections and assemble them. Do not produce a page silhouette containing undecided sections.

## Stop and ask only when

- the page or scope cannot be identified;
- fixed material contradicts an authority;
- required proof or media is unavailable and the design depends on it;
- the user has retained a decision whose alternatives produce materially different work.

## Hand off

The specification is complete when every section has a named payload, a stated weight, and a mobile transformation, and the page has a set-piece and a rhythm. Report it for review.

Build begins only after that review. Pass approved work to `mindwp-page-build`.
