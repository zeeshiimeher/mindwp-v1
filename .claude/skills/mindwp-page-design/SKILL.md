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
Built by          which visual moves give it presence (see below)
Opening           standard eyebrow-heading-lede, or how it differs
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

## Say how each section is built, not only what it means

A specification can name a correct payload for every section and still describe a flat page. `Built by` is where that is prevented. Name the moves the section actually uses — `DESIGN.md`'s *What makes a section look built* has the full set:

an interior (a payload with its own ground and different values inside it) · a contrasting object rather than a changed band · the middle of the type scale · one dominant element · a surface change from its neighbour · a non-standard opening · something breaking its container.

Two things to get right at page scale:

- **Concentrate, don't spread.** One or two sections carry the big moves. A page where every section breaks its container is noise, and a page where none does is timid.
- **A quiet section says `Built by: nothing, deliberately`.** That is a valid and necessary answer. Leaving the row blank is not — blank reads as undecided, and undecided becomes flat.

If a section's only answer is "a heading, a paragraph and a list", it is either genuinely quiet or it is unfinished. Decide which, in writing, before it reaches build.

## A reference page, only if the user names one

This is the stage that may use a quality reference — but **which page that is belongs to the user, and no document records it.** Do not pick one, and do not assume a page is exemplary because it exists or is live.

If the user names a page, capture it and read the capture first; open source only if implementation understanding is needed:

```
pnpm capture:route -- --desktop --sections <route> <output-dir-outside-repo>
```

Study the standard of resolution each section reaches and how weight is distributed across the page. Do not shop its constructions. Reuse one only when this material independently creates the same need.

When redesigning an existing page, capture that page regardless, and read the full page before the section crops.

## Rebuilding a section

A rebuild is a new concept, not a re-arrangement of the old one.

**Carry forward four things:** the section's job · its eyebrow and heading · its surface · anything the page plan pins.

**Everything else is free, and is where the new design comes from:** the payload, the data shape, the groupings, the counts, the labels, the supporting copy, the sequence.

The four are kept for page reasons, not section reasons. Eyebrow and heading hold the voice and the reader's place in the argument. Surface holds the page's rhythm — change one section's ground and two neighbours change with it, so that is a page decision, not yours to make inside a section brief.

Before designing, write down what the material could *become*. Doing this after choosing a layout produces the old content in a new box.

## Design options must differ in substance

Each option must differ in **relationship and material**, not in container. Three arrangements of one content shape are one option presented three times.

Two checks: if two options could swap their copy without either breaking, they are one option. If two options name the same payload, they are one option.

## Check it against its neighbours

Judge every rebuilt section against the sections above and below it, never on its own. A section that is strong in isolation and wrong beside its neighbours has failed.

Name the neighbours in the specification, and say what changes at each boundary — surface, density, reading effort, or scale. A contact sheet shows this in one look; a section crop cannot show it at all.

## Who the page is for

Every MindWP page is read by a business owner deciding whether to buy — never by a patient or a client's customer. Design for that reader: describe what happens to an enquiry as the owner sees it, and keep the page out of the register of a clinic addressing its patients. A page for one supporting service should still make the case for the website that carries it.

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
