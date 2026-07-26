# MindWP design authority

This document owns MindWP's durable visual judgement: shared brand grammar, art direction, meaning-bearing composition, page continuity, responsive intent, purposeful interaction and motion, visual-material choices, and rendered visual review.

It does not decide business truth, offer strategy, page meaning, claims, repository structure, CSS architecture, implementation commands, publication, or page state. Those decisions belong to [FOUNDATION.md](./FOUNDATION.md), [STRATEGY.md](./STRATEGY.md), the supplied page plan, [WRITING.md](./WRITING.md), and [ENGINEERING.md](./ENGINEERING.md).

This authority should improve when future execution exposes a repeatable design problem or a better durable principle. Do not turn one successful page, one technique, or one preference into a rule without evidence that it has a stable MindWP role. Only durable, cross-page principles belong here; lessons from individual rejected attempts are not preserved as design rules.

## The quality standard

MindWP's website should feel considered rather than assembled, while remaining clear, truthful, useful, and appropriate to a professional service business.

The intended qualities should be observable in the work:

- **Calm confidence:** priority is unmistakable without urgency theatre, visual noise, or exaggerated claims.
- **Commercial seriousness:** the page connects customer reality, the offer, proof, boundaries, and a useful next action.
- **Distinctive craft:** typography, spacing, hierarchy, media, edges, depth, and responsive behaviour feel deliberate.
- **Trustworthiness:** visual material never simulates proof, software capability, certainty, or operational detail that does not exist.
- **Clarity:** the main argument and important relationships can be understood before every paragraph is read.

Technical competence alone is not the standard. If an important composition is generic, visually thin, or structurally interchangeable with unrelated material, refine its underlying relationship and hierarchy rather than trying to rescue it with surface polish.

### Sector-flexible expression

MindWP's specialist depth is the precision of its thinking, not any one industry's aesthetic. Independent clinics are the primary audience and may lead audience language, content and proof; the visual grammar does not follow them. Clinic-first in audience only. sector-neutral in visual grammar. The global visual and verbal language — including artefacts, illustration, iconography and recurring examples — stays sector-neutral, so the same brand can credibly serve a clinic, a law boutique or an advisory firm. Sector imagery, terminology and visual material belong to industry pages and other page-specific work; they do not join the shared language by recurrence alone.

## Shared MindWP grammar

MindWP deliberately uses a recognisable visual family:

- navy, white, paper, and mist surface roles;
- serif and sans-serif typographic character;
- eyebrow, heading, and supporting-copy structures;
- centred, left-aligned, and split section introductions;
- consistent typography and spacing roles;
- stable container and readable-measure discipline;
- semantic sections and familiar web-layout foundations;
- a calm, familiar rhythm of surfaces across a page;
- deliberate family resemblance between pages.

These are foundations, not repetition failures. Do not count surface occurrences, eyebrow use, centred or left-aligned introductions, repeated typography roles, recurring section-header grammar, containers, cards, grids, or other familiar structures. Do not change colour, alignment, or heading placement merely to manufacture novelty.

Shared foundations create consistency. Meaning-specific composition creates distinctiveness.

### Structural foundations

Standard web foundations are valid, useful, and normally preferred.

Begin with:

- semantic `<section>` elements;
- the shared `.section` class for vertical rhythm and surface treatment;
- `.container` and its established width variants for alignment, gutters, and readable width;
- the shared section-introduction structures where they serve the material;
- Flex and Grid for normal layout relationships;
- familiar structures such as cards, lists, panels, tabs, timelines, and grouped content when the information genuinely has that structure.

Section introductions may be left-aligned, centred, split, embedded, or otherwise positioned according to the communication job. No alignment is inherently more original or more professional than another.

Do not seek originality by avoiding sections, containers, headings, introductions, Flex, Grid, cards, lists, or panels. Judge the hierarchy, proportion, relationships, reading path, responsive behaviour, and visual expression created within those foundations.

The introduction is not automatically the complete section design. The material after and around it should communicate the section's particular relationship.

Start with the existing shared foundations. Extend or depart from them only when the composition has a specific requirement they do not serve. A page-specific visual layer may break out of a container, introduce controlled layering, or establish a different spatial environment while the semantic structure and readable content remain sound.

### Typography character and inheritance

MindWP's typography combines editorial character with operational clarity.

- **Fraunces** carries major ideas, emotional emphasis, important turns, and editorial character.
- **Inter** carries explanation, evidence, navigation, labels, controls, and operational detail.
- **Italics** should signal meaningful contrast, qualification, or a change in thought. They should not be added routinely as decoration.
- **Readable measure** matters as much as font size. Explanatory copy should remain easy to follow rather than expanding merely because space is available.

When implementing, begin with the global semantic typography for `h1`–`h4`, paragraphs, body copy, and established supporting roles.

Do not redefine font sizes in page-specific BEM selectors merely because a new section is being styled. Introduce a different scale, style, measure, or behaviour only when the composition requires a deliberate typographic role.

When an override is justified:

1. Prefer the existing typography scale and tokens.
2. Prefer an established reusable typography role when the same need already exists.
3. Use a page-specific treatment only for a genuinely composition-specific role.

Page CSS may still control colour, width, alignment, emphasis, wrapping, and responsive behaviour where required. The aim is inheritance before specialisation, not a prohibition against purposeful typography.

### Surface and colour roles

MindWP's recurring surfaces have recognisable communication roles:

- **Navy** carries conviction, control, connected-system logic, decisive moments, and strong closure.
- **Paper** supports editorial explanation, argument, and calm long-form clarity.
- **Mist** supports quieter evidence, reflection, qualification, and transitions.
- **White** provides clarity, contrast, and contained material within lighter environments.

These roles guide judgement rather than enforcing a fixed page sequence. A surface may support another job when the complete composition justifies it.

Recurring brand surfaces are not generic-design failures. A long page may reuse navy, paper, mist, or white several times. Do not alternate surfaces mechanically, and do not introduce extra colours merely to make neighbouring sections look different.

A background change can support progression, but it is not a substitute for hierarchy, scale, density, relationship, or focal emphasis.

Use existing semantic colour tokens before introducing raw values. Read `tokens.css` when exact values or the complete token inventory are needed; do not duplicate the complete token system here or inside page-specific styles.

### Emerald as controlled attention

Emerald is a controlled attention colour.

Use it for:

- eyebrows, marks, rules, and small emphasis;
- connection paths and meaningful system relationships;
- active, selected, success, or status states;
- focus treatment and accessibility feedback;
- selected high-priority actions;
- small operational fills inside truthful visual material.

Emerald may fill a primary CTA on a dark surface when that action deserves clear priority. It may also fill a small component whose state or role requires it.

Do not use emerald as a large decorative section surface or repeatedly fill ordinary cards, panels, and containers with it. Its strength comes from controlled use and clear priority.

### Edge, depth, and material character

MindWP's material character should feel refined without becoming ornamental.

Prefer:

- hairline borders;
- restrained radii;
- subtle surface contrast;
- controlled shadows;
- intentional layering;
- clear spacing and proportion;
- depth that communicates belonging, priority, state, or interaction.

Use controlled shadows and gradients. Overlap, rotation, layering, and curvature are valid when they communicate relationship, belonging, sequence, or depth; they fail when added to make a composition appear premium. The test is whether removing the effect would cost the reader information.

Premium character should come primarily from typography, scale, proportion, spacing, hierarchy, material contrast, and careful responsive behaviour. Restraint should not become visual thinness: important material still needs sufficient scale, contrast, depth, evidence, or spatial presence to carry its job.

A depth effect that is invisible against its own background is not restraint — it is an unfinished object. Check the rendered contrast, not the intent.

### Page-scale character

A coherent MindWP page may repeat its typography, introductions, surfaces, containers, and familiar structural grammar. That repetition produces brand recognition.

The complete page should not give every section the same scale, density, visual importance, or reading path.

Use page-level judgement to establish:

- changes in emphasis and atmosphere;
- shifts between dense and quiet material;
- differences in reading effort;
- meaningful continuity between connected ideas;
- stronger focal treatment for commercially important, proof-bearing, or meaning-critical material;
- calm supporting treatment where spectacle would add no value.

Not every section needs a bespoke visual concept. Quiet sections are valid and necessary. Distinctiveness should be concentrated where the meaning benefits from a stronger composition rather than distributed as decoration across every section.

A page becomes compositionally flat when different meanings repeatedly receive the same introduction-to-payload relationship, the same internal hierarchy, and the same visual weight. It does not become flat merely because it uses familiar foundations or recurring brand surfaces.

**Focal treatment follows focal payload.** Additional height, padding, or motion cannot be the primary source of emphasis. Before giving a section focal scale, identify the dominant object, the relationship it reveals, and why it needs that scale. A small payload inside a tall band is not a focal section; it is empty space.

Across a substantial service page, section depth should vary according to importance and payload. Focal sections should be capable of occupying most or all of a desktop viewport when their composition warrants it. At least one central section should feel like a genuine event rather than another content band.

These are proportions to judge, not measurements to hit. Do not lengthen a quiet section to reach a target depth.

The exact measure, scale, position, and relationship between an introduction and the material around it remain contextual. Shared grammar creates coherence; the meaning-bearing experience after and around it creates distinction.

## From meaning to composition

Three layers stay distinct: **shared grammar** provides the recognisable MindWP foundations, **composition** expresses the hierarchy and relationship specific to this material, and **technique** supplies the tools — grid, flex, cards, lists, panels, tabs, diagrams, layering, motion.

A technique is neither a concept nor a defect by itself. Equal cards suit genuine peers, a timeline suits a sequence, a plain horizontal band suits a quiet transition. Reuse an inner pattern when the underlying relationship really is the same.

The failure is unjustified functional sameness: meaningfully different material receiving the same inner hierarchy, payload structure, scale, and reading path, while palette or decoration creates only the appearance of variety.

Meaning determines what must be communicated. It does not predetermine the component used to communicate it.

For important or uncertain material, reason through this bridge:

> section job → intended visitor change → essential meaning or proof → relationship that should become visible → focal hierarchy → eye path → spatial behaviour → content adaptation → relationship with neighbouring material → narrow-width transformation → purposeful motion or interaction

The visitor change should be concrete. After this material, should the visitor understand a distinction, trust a claim, compare alternatives, see causality, recognise ownership, follow a sequence, inspect proof, choose a path, or feel ready to act?

The relationship might be:

- comparison, peerhood, or contrast;
- sequence, accumulation, or causality;
- a whole and its parts;
- evidence and conclusion;
- context and focal point;
- choice, threshold, or consequence;
- responsibility, handoff, or connection;
- expectation and resolution;
- continuity or a deliberate interruption.

Choose a relationship because it clarifies the material, not because it suggests an attractive artefact. Treat metaphors in copy as meaning cues rather than compulsory visual instructions.

### Compositional variables

Use these as dimensions for judgement, not a checklist or library of layouts:

- **Priority:** scale, span, contrast, negative space, and visual anchoring.
- **Direction:** alignment, orientation, and sequence.
- **Belonging:** containment, breakout, and adjacency.
- **Dependency:** overlap, layering, and depth.
- **Pace and effort:** density, repetition, and negative space.
- **Page relationship:** continuity, interruption, and transition.

Changing one or two variables purposefully can establish hierarchy without adding cards, panels, interfaces, or decoration.

Additional ingredients are valid when they improve the central relationship, and decorative when they only accompany it. Count is not the test. A section carrying an important meaning with nothing but copy, rules, and spacing is under-built for the same reason a section stacked with unrelated artefacts is over-built.

## What makes a section look built

A page can satisfy every rule above and still read like a well-set article: one column of type at one x-position, on one ground, at two sizes. That is the most common way MindWP work goes wrong, and it is a craft failure rather than a reasoning failure. These are the moves that fix it, and each is drawn from work that has actually passed review.

**Give the payload an interior.** An object with an edge and no fill disappears — the light surfaces span only a few points of lightness and the raised shadow is intentionally faint. A payload that carries its own ground, and holds something with a different value inside it, reads as an object. Three or four value steps inside one payload is what separates a designed section from a bordered paragraph.

**Let the object carry the contrast, not the band.** When a composition needs a dark ground, a dark panel on the page's existing surface is usually better than changing the section's surface — it keeps the page's rhythm intact and gives the object the widest value step available.

**Use the middle of the type scale.** Flat sections jump from a display heading straight to body copy. The scale has usable steps between them; a payload with its own heading level reads as a thing rather than as more paragraph.

**Make something large.** Every page needs at least one section where a single element is unmistakably dominant — an object, a figure, a line of type at artefact scale. Uniform politeness across a whole page reads as timidity.

**Change the ground under the reader.** Neighbouring sections should not share a surface. Where several surfaces are in rotation, the page changes beneath the reader at every step without any section having to shout.

**Vary how sections open.** The standard eyebrow–heading–lede opening is correct and should recur — but not eleven times running. A section may open on a statement alone, on its artefact, or with the heading set beside the payload rather than above it. This matters most where payloads are similar; a page with genuinely varied payloads can repeat one opening throughout and still feel various.

**Let something break its container.** A full-bleed band, a payload crossing the container edge, an oversized numeral bleeding past its column: one or two per page, as punctuation.

None of this is a quota. A quiet section needs none of it, and adding all six to every section produces noise rather than craft. But an important section that has none of them is almost certainly flat.

## Four doctrine examples

These examples clarify judgement. They are not layouts to reproduce.

- **Quiet section that passes:** a mist surface uses a familiar centred eyebrow, heading, and short supporting paragraph to clarify a professional boundary. The message is singular, the reading effort is intentionally low, and no artefact is added merely to make it look designed.
- **Dominant section that fails:** a commercially important explanation of *why* enquiries break down becomes four equal icon cards. The material is causal, and equal cards flatten causality into four peers of the same weight — the copy could be swapped for unrelated agency copy unchanged. The defect is the mismatch, not the cards: the same equal-card set is correct where the items genuinely are peers, such as the distinct ways attention arrives. Larger shadows or a navy background would not solve the causal case.
- **Coherent long page that passes:** familiar surfaces and introduction grammar recur, while a few consequential moments receive meaning-specific scale, proof, or spatial relationships. Supporting passages stay calm, related ideas connect, and the page builds toward its action without demanding novelty from every section.
- **Superficially varied page that fails:** colours, alignments, panel shapes, and decorative styles alternate, but every section still opens into an interchangeable cluster of short items with the same weight and reading path. The page is cosmetically varied and experientially repetitive.

## Work at page scale and focal-section scale

Work recursively between page scale and focal-section scale.

1. Establish a provisional full-page progression and rhythm from the page job and the narrative.
2. Develop the important or uncertain section compositions early, and draft their real content alongside them.
3. Let those sections revise the page — grouping, pacing, scale, proof placement, neighbouring transitions.
4. Establish credible narrow-width behaviour while the concepts are still adaptable.
5. Repeat until neither scale is merely accommodating decisions frozen at the other.

Neither scale precedes or outranks the other. A page assembled from isolated strong sections and a polished silhouette containing weak ones fail the same way, from opposite directions.

A planned section is meaning material, not a mandatory horizontal band. Several sections may share one visual environment when they form a continuous meaning or experience. Shared colour or a common container is not sufficient: every important meaning unit within the group still needs a clear hierarchy, role, and transition.

Separate horizontal sections remain valid when the argument, hierarchy, atmosphere, or reading behaviour genuinely changes.

## Develop content and composition together

Preserve:

- facts;
- approved claims;
- search intent;
- genuine proof;
- professional, clinical, legal, privacy, and consent boundaries;
- wording explicitly marked fixed.

Where the page plan allows, adapt:

- headings;
- explanatory copy;
- grouping;
- sequence;
- depth;
- supporting points;
- presentation format.

Use credible real content early. Do not write and freeze the complete body copy before major compositions exist. Do not build empty visual containers and force unrelated copy into them.

Let composition expose a better communication structure: shorten repetition, deepen a necessary distinction, regroup related evidence, or rewrite adaptable copy for a clearer eye path. Let content expose where the composition is too shallow, misleading, or decorative. The final implemented copy belongs to the design-and-build scope and should not remain filler for a mandatory later finishing stage.

Supporting planning detail is not a required public-copy count or a required number of visual objects. It may be synthesised or omitted when the essential meaning, claim, proof, boundary, distinction, and action remain understandable.

Never invent unavailable proof, metrics, testimonials, systems, client results, or operational detail to complete a visual idea.

### Rebuilding a section on an existing page

This applies to rebuilding one or more sections of a page that is already built and staying. A new page designed from a supplied plan follows that plan instead, where headings are adaptable unless marked fixed ([PAGE-PLANNING.md](./PAGE-PLANNING.md)).

A rebuild is a new concept, not a re-arrangement of the old one.

Carry forward exactly four things: the section's **job**, its **eyebrow and heading**, its **surface**, and anything the page plan pins. Everything below that line is free — the payload, the data shape, the groupings, the counts, the labels, the supporting copy, the sequence — and it is usually where the new design comes from.

Those four are kept for reasons that belong to the page rather than to the section. The eyebrow and heading hold the page's voice and tell the reader where they are in the argument. The surface holds the page's rhythm: change one section's ground and two neighbours change with it, so a surface change is a page decision, not a section decision. Everything else is local, and preserving it is what produces three arrangements of one fixed idea.

Ask what the material could become before asking how to lay it out. If two proposed directions could swap their copy without either breaking, they are one direction.

Judge a rebuilt section against the sections above and below it, never on its own. A section that is strong in isolation and wrong beside its neighbours has failed, and a contact sheet shows this in one look where a section crop cannot.

## Material expression

Composition decides how material is arranged. This decides what the material *is*.

Visual material should make meaning easier to perceive, evidence easier to inspect, or an action easier to understand. Choose it by the meaning being carried and the register the moment needs.

Name the primary payload before drawing the section. A substantial section may be carried by:

- **constructed interface** — a token-built scene demonstrating real system behaviour;
- **real evidence** — photography, shipped work, or permissioned proof;
- **node model** — weighted entities and visible connections;
- **icon-carried set** — genuine peers distinguished by authored marks;
- **depth set** — overlap, rotation, or stagger expressing belonging, sequence, or hierarchy;
- **state surface** — tabs, selection, or another meaningful state change;
- **type as object** — language operating at artefact scale rather than as ordinary body copy;
- **spatial sequence** — a path, threshold, track, or transformation made visible;
- **bare typeset arrangement** — copy and rules carrying a deliberately quiet transition.

Choose the material because it externalises the section's relationship, not because the page needs another visual technique. The list is a vocabulary, not an inventory to work through, and it is open — a payload that externalises its relationship well and belongs to none of these categories is still correct.

Bare typeset arrangements are the quiet register. If they dominate a substantial page, explain why the main meanings do not require stronger material expression.

**A named object succeeds only when its central relationship is legible in the render, survives responsive transformation, and remains meaningful without decorative explanation.** Naming a payload does not make it good. An object that needs its supporting paragraph to be understood has not externalised anything.

The recurring failures are craft failures, not vocabulary failures: an object at the same value as its own background, text clipped by an overlapping neighbour, ghost typography too faint to read, a shape carrying no relationship, an interface fragment too small to inspect, or a diagram that needs prose to explain what it depicts.

### How each material fails

Interface fragments are one legitimate mode, not the default. Illustration suits ownership, situations, and relationships that an interface cannot express; drawn with MindWP's restraint and palette around specific situations, it should never lapse into generic stock character art. A precise MindWP illustration style is deliberately not defined here — establish it through real page work before treating any of it as a rule.

- **Constructed interface** fails when it is a frame chosen because the work is web-based, or a dashboard, control, or tiny UI fabricated to make a service look tangible. Ask what the scene proves; if the answer is "that we build websites", it is decoration. It also fails when rendered too small to inspect.
- **Real evidence** should be large and legible enough to judge, cropped for the important content rather than a convenient centre, and kept connected to the claim it supports. Document-like evidence can make a real deliverable or decision inspectable — never invent paperwork to imply rigour.
- **Node model** fails when the diagram requires more interpretation than the written point would.
- **Icon-carried set** fails when the items are not genuine peers: equal weight then flattens sequence, causality, or priority into a grid.
- **Depth set** fails when overlap clips content, or when the stacked objects sit at the same value as their own ground and disappear.
- **State surface** fails when it simulates functionality the service does not provide, or when the essential meaning exists only in a state the visitor may never open.
- **Type as object** fails when display treatment substitutes for an argument.
- **Spatial sequence** fails when the path is drawn but the relationship along it is not — a line connecting two labels is not a sequence.
- **Abstract and code-native artwork** may express concepts, tone, or invisible relationships, and creates depth, connection, or atmosphere when those qualities support the argument. Do not present it as evidence, force one metaphor across unrelated material, or treat decoration as proof of design.
- **Motion-led explanation** may clarify state, causality, connection, or spatial continuity. The static equivalent must retain the essential meaning.

Mixed visual languages are valid when each form has a distinct job and the page still feels coherent.

Cards, lists, grids, panels, timelines, browser frames, and interfaces remain available primitives. Use them because the information or interaction has that structure, not because they create the appearance of a designed payload.

## Compose continuity across the full page

A complete page should make its commercial progression, changes of argument, proof, and intended action perceptible without assigning equal visual weight to every section.

Judge:

- narrative progression and changes in visitor understanding;
- visual anticipation and payoff;
- continuity between genuinely related ideas;
- deliberate interruption when the argument changes;
- shifts in scale, density, surface, and reading effort;
- focal, supporting, and quiet roles without quotas;
- placement and legibility of proof;
- preparation for the primary action;
- accumulated visual and cognitive fatigue.

A long page, many sections, recurring surfaces, or several horizontal bands are not defects. Adjacent sections do not need to look different merely because they are adjacent. Ask whether recurrence provides useful continuity or gives genuinely different meanings the same treatment and weight.

Necessary cautions can still flatten progression when several versions of the same boundary each claim focal headline scale or a long pause. Consolidate them, let some recede into supporting copy, or place them beside the claim they qualify when that keeps the argument moving. Check this again at narrow widths, where stacked sections amplify equal weight and duration.

The strongest transferability and originality questions belong primarily to major, proof-bearing, or meaning-critical compositions. A quiet section may appropriately resemble another MindWP section.

### Separate narrative acts from surface rhythm

Narrative acts organise what the visitor learns and how the commercial argument progresses. Surface environments — navy, paper, mist, imagery, gradients, and overlays — control atmosphere, emphasis, contrast, and visual pacing.

These systems should inform each other, but they must not map one-to-one. One narrative act may move through several surfaces, while one surface environment may carry meanings from more than one act.

Do not assign one background to each act or treat every surface change as a narrative boundary. Compose the surface rhythm across the complete page, using recurrence, shared environments, and selective dark returns according to the communication need.

## Design responsive transformation early

Major compositions need a credible narrow-width reading order while their concepts remain adaptable. Responsive design is recomposition, not automatic shrinking or stacking.

Mobile should preserve:

- meaning and truthful boundaries;
- priority and focal hierarchy;
- comparison, sequence, causality, or other essential relationships;
- proof and its connection to the relevant claim;
- the intended action;
- essential interaction.

Natural linear stacking is valid when the meaning is linear. Reject stacking or uniform card conversion when it destroys comparison, causality, sequence, proof association, ownership, or hierarchy.

Reorder presentation, simplify supporting decoration, change crop, reduce layering, or replace a dense visual explanation when necessary, while keeping the underlying reading order and meaning coherent. Use intermediate breakpoints because content or geometry needs them, not because a fixed device list requires them.

## Give interaction and motion a real job

Interaction and motion may serve:

- orientation;
- state;
- causality;
- connection;
- meaningful emphasis;
- spatial continuity.

The static composition must remain complete. Essential meaning cannot depend on hover, animation, or a transient state without an equivalent accessible form.

Reject:

- blanket reveal animation;
- hover movement on non-interactive material;
- motion used to rescue a weak static composition;
- constant or distracting ambient movement;
- long waits or scroll behaviour that removes orientation;
- interaction that simulates functionality the service does not provide.

Concentrate authored motion where it clarifies a relationship or state. The technical lifecycle, input states, accessibility, reduced-motion implementation, and performance constraints belong to Engineering.

## Use a reference page carefully

**Which page is a quality reference is the user's decision, and this document does not name one.** Some pages are stronger than others and that changes over time; a page named here would go stale and would quietly grant authority to work the user may already want rebuilt.

So: use a reference page when the user names one, and do not go looking for one otherwise. Never infer that a page is exemplary because it exists, because it is live, or because it is the largest.

When a reference page has been named, open a fresh section capture first and its source only when implementation understanding is necessary. The visual reference should lead — opening source first makes an executor imitate implementation detail instead of studying visual weight and page rhythm.

A reference is a quality standard, not an anatomy library. It is not a template, pattern library, creative brief, page-length or section-count target, required surface sequence, breakpoint rule, animation rule, or compositional ceiling.

Its exact fans, staircases, radial systems, tabs, browser scenes, mock interfaces, grids, breakout geometries, hero mechanisms, and motion choreography are page-specific. Study them for the standard of resolution they reach, and for what a section is made of and how much weight it carries. Reuse a construction when this material independently creates the same need; do not transplant its anatomy because it is available, and do not conclude that a new page needs the same objects.

A new page may differ substantially while remaining recognisably MindWP.

Do not promote a recurring value or device to a global design rule unless it is owned by a genuine shared foundation or explicitly adopted as a project decision.

## Judge rendered evidence

Rendering should begin while content and composition remain adaptable, not only after implementation appears complete.

A complete-page visual review normally needs, in this order:

1. a broad desktop full-page view;
2. a narrow or mobile full-page view;
3. a section contact sheet;
4. close inspection of important focal sections;
5. an intermediate width when the composition or breakpoint behaviour creates material risk.

Read the full page before the crops. Page rhythm, accumulated fatigue, and emphasis distribution are invisible in section crops, and a section that reads well alone can still be the fourth of its kind. Thumbnails also misrepresent type size and contrast in both directions — confirm a suspected craft problem at full resolution before naming it.

This is an evidence standard, not a screenshot packet or fixed capture count. A bounded section task needs only the coupled evidence necessary to judge its page-level consequence. Source code alone cannot prove visual quality.

Review first-glance hierarchy, commercial progression, focal weight, proof legibility, reading effort, neighbour transitions, responsive transformation, interaction intent, and accumulated fatigue. Current source and fresh renders own implemented reality when a particular page is being inspected.

### Qualitative anti-generic questions

Use these as judgement prompts, not scores, validators, or quotas:

- **Shared shell:** after ignoring the palette, typography, surface, alignment, and introduction grammar, does the important inner composition express this material's relationship?
- **Material:** does the relationship exist as something in the render, or only in the copy? Cover the paragraphs and check what is left.
- **Object craft:** is each payload legible against its own background, uncropped at its intended width, and understandable before the copy beside it is read?
- **Emphasis:** does every section given focal scale contain a payload that earns it, or is the extra depth carrying empty space?
- **Quiet or unfinished:** where a section is calm, is that a decision about the material, or the absence of one?
- **Meaning:** does the visual structure make a real comparison, sequence, dependency, proof relationship, or decision easier to understand, or merely decorate the copy?
- **Hierarchy:** is the most important idea or evidence visibly unmistakable?
- **Recurrence:** where a reading pattern repeats, does the material genuinely have the same role and structure? Where meanings differ, do their payload hierarchy, scale, and eye path differ for a reason?
- **Grouping:** does a shared environment create one continuous experience, or merely conceal ordinary independent bands inside a wrapper?
- **Truth:** does every apparent proof object contain real evidence or clearly identify itself as illustration?
- **Mobile:** is the central relationship preserved or thoughtfully simplified, rather than fragmented into an automatic stack?
- **Reference contamination:** was a recognisable construction from another page reused because this material independently needed it, or only because it was available?

No design rule should require surface counts, alternating alignments, card limits, fixed focal moments, a repetition budget, bespoke artwork for every section, or a prescribed number of concepts. Distinction is earned by meaning; coherence is not a failure of originality.