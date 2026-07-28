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
Primary payload   what the section is materially made of
Shows             the specific instance, state or artefact on screen — not a category
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

Every substantial section names what it is materially made of. Naming it is the point at which "text in a column" stops being the default answer.

There is no fixed list to choose from, and `DESIGN.md` deliberately does not keep one — a taxonomy becomes a menu, and a menu gets worked through. A payload might be a constructed scene, real evidence or media, a model of relationships, language at artefact scale, a spatial sequence, or nothing but well-set copy and rules. Name what this material actually needs.

Three tests before a payload is accepted:

- **Sketchable in one sentence** without naming layout containers. "A track where four channels converge on one owner" passes. "A two-column split with a card on the right" does not — that is an arrangement, not a material.
- **Legible without its paragraph.** If the object only makes sense once the copy beside it is read, it has not externalised the relationship.
- **An instance, a state or an artefact — not a category.** Name the specific thing on screen. "A form that arrived at 11:47pm and the person who owns it in the morning" is an instance. "The kinds of enquiry that arrive" is a category, and a category has no shape, so it will be drawn as a box with a label on it. If the only available answer is a class of thing, the section will become a diagram no matter which material is named.

The third test is the one that catches a specification which passes everything else and still describes a flat page. Categories produce fields of marks standing for quantities nobody can verify, greeked lines standing for text nobody wrote, and equal boxes standing for ideas. Instances produce objects.

Where the material is genuinely quiet, copy and rules alone is a correct answer. When it is the answer for most of a page, say why the page's main meanings do not need stronger expression.

Naming a material is not a variety exercise. Two sections may correctly use the same material when their relationships are the same kind, and choosing a weaker payload because a stronger one is "already used" is a decision made for the wrong reason. Flatness is different meanings receiving the same inner hierarchy and reading path — not the same material appearing twice.

## Say how each section is built, not only what it means

A specification can name a correct payload for every section and still describe a flat page. `Built by` is where that is prevented: name the moves the section actually uses.

Moves worth having available — an interior, meaning a payload with its own ground and different values inside it · a contrasting object rather than a changed band · the middle of the type scale · one dominant element · a surface change from its neighbour · a non-standard opening · something breaking its container. This is a working list, not a checklist and not doctrine; a section needs the moves its material needs and no others.

Two things to get right at page scale:

- **Concentrate, don't spread.** A few sections carry the strong moves. Every section shouting is noise; no section doing anything is timid.
- **A quiet section says `Built by: nothing, deliberately`.** That is a valid and necessary answer. Leaving the row blank is not — blank reads as undecided, and undecided becomes flat.

If a section's only answer is "a heading, a paragraph and a list", it is either genuinely quiet or it is unfinished. Decide which, in writing, before it reaches build.

## Make one interaction decision for the whole page

Answer this once, explicitly, at page scale: **which single moment on this page is worth participating in — or why does this page have none?**

Answering it per section produces "none" every time, because no individual section ever needs interaction. The result is a page a visitor only reads.

This is a decision, not a quota. "None, because every relationship here is better shown than operated" is a complete answer and sometimes the right one. What is not acceptable is never asking.

Where the answer names a moment, state the interaction budget for the whole page alongside it, and for each interaction: what the visitor learns by doing it that they could not learn by looking, what the composition shows before any input, and what survives without script and under reduced motion. An interaction holding essential meaning behind a state the visitor may never open has hidden the page's argument.

## A reference page, only if the user names one

This is the stage that may use a quality reference — but **which page that is belongs to the user, and no document records it.** Do not pick one, and do not assume a page is exemplary because it exists or is live.

If the user names a page, capture it and read the capture first; open source only if implementation understanding is needed:

```
pnpm capture:route -- --desktop --sections <route> <output-dir-outside-repo>
```

Study the standard of resolution each section reaches and how weight is distributed across the page. Do not shop its constructions. Reuse one only when this material independently creates the same need.

When redesigning an existing page, capture that page regardless, and read the full page before the section crops.

## Rebuilding a section

This applies to rebuilding part of a page that is already built and staying. It does not apply to a page or a middle being designed from scratch — there, headings are outputs of the design and nothing is carried forward, so applying this rule instead is how a fresh design ends up re-decorating the old one.

A rebuild is a new concept, not a re-arrangement of the old one.

**Carry forward:** the section's job · its eyebrow and heading · anything the page plan pins. Keep its surface too, by default — change one section's ground and its neighbours change with it, so a surface change is a page decision rather than a section one. Make it deliberately or not at all.

**Everything else is free, and is where the new design comes from:** the payload, the data shape, the groupings, the counts, the labels, the supporting copy, the sequence.

These are kept for page reasons, not section reasons: eyebrow and heading hold the voice and the reader's place in the argument.

Before designing, write down what the material could *become*. Doing this after choosing a layout produces the old content in a new box.

## Design options must differ in substance

Each option must differ in **relationship and material**, not in container. Three arrangements of one content shape are one option presented three times.

Two checks: if two options could swap their copy without either breaking, they are one option. If two options name the same payload, they are one option.

## Check it against its neighbours

Judge every rebuilt section against the sections above and below it, never on its own. A section that is strong in isolation and wrong beside its neighbours has failed.

Name the neighbours in the specification, and say what changes at each boundary — surface, density, reading effort, or scale. A contact sheet shows this in one look; a section crop cannot show it at all.

## Who the page is for

Every MindWP page is read by a business owner deciding whether to buy — never by a patient or a client's customer. Design for that reader: describe what happens to an enquiry as the owner sees it, and keep the page out of the register of a clinic addressing its patients.

That reader already knows what a website is. A page that spends its weight explaining pages, forms and normal website anatomy is describing a web-design service, not the responsibility MindWP owns. A connected-service page should read as buyable against a capable existing website — do not design it as though a rebuild were a precondition.

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
