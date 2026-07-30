---
name: mindwp-design-eye
description: Use to judge whether a built MindWP page or section is visually good — reading fresh captures at full-page and section scale, censusing reading paths and cross-page repetition, and ranking what is weak and why. Available after a build or whenever a visual verdict is wanted; supports bounded section review. This is a visual verdict, not an implementation review.
---

# MindWP design eye

Judge the render. Implementation success and visual success are different judgements, and this skill only makes the second one.

Judge against the criteria in this skill. Write no code and change no files.

## Capture, then read in order

```
pnpm capture:route -- --sections <route> <output-dir-outside-repo>
pnpm capture:route -- --desktop --sections / <output-dir-outside-repo>   # benchmark, when needed
```

Read in this order, and do not skip ahead:

1. the complete desktop page;
2. the complete 400px page;
3. the section contact sheet;
4. selected sections at full resolution — **only after** the full-page read.

Page rhythm, accumulated fatigue and emphasis distribution do not exist in section crops. A section that reads well alone can still be the fourth of its kind.

**Judge at the width the page is actually reviewed at.** The capture defaults are a convenience, not the truth of the page. Where the user supplies renders or names a review width, use it — a composition that reads correctly at one width can look thin or crowded at another, and a verdict given at a width nobody looks at is a verdict about a different page. Say which widths the verdict rests on.

Where the user asks for a bounded review — one section, one question, one comparison — answer that scope. Read enough of the page to place the section in it, and say what you did not review rather than expanding into a full verdict.

Thumbnails distort. They make type look smaller and contrast look weaker than it is, and they flatter compositions that fail up close. Confirm any suspected craft problem at full resolution before naming it, and say when a thumbnail impression did not survive.

## What to judge

1. **Full-page rhythm** — does depth vary with importance, or does every section run to roughly the same band?
2. **Payload legibility** — is each section's relationship visible in the render, or only in the copy? Cover the paragraphs and check what is left.
3. **Focal treatment** — where the specification named a focal moment, is it carried by real material rather than by height? Where it named none, does the page still read as coherent and deliberately quiet rather than undecided?
4. **Quiet or unfinished** — where a section is calm, does it read as a decision or as an absence? An unfinished section and a deliberately quiet one look identical in a specification and different in a render.
5. **Object craft** — is each payload legible against its own background, uncropped at its intended width, and understandable before the copy beside it? Look specifically for objects at the same value as their ground, text clipped by an overlapping neighbour, ghost type too faint to read, shapes carrying no relationship, and interface fragments too small to inspect.
6. **Mobile transformation** — is the central relationship preserved or thoughtfully simplified, or fragmented into an automatic stack?
7. **Reading paths** — the strongest test available, and the one an impression of variety survives. For each section, name what the visitor actually does: read one long thing, compare two, scan labelled items, inspect an artefact, follow a sequence, weigh a choice, operate something. Then count the distinct answers. A page can carry a grid, a radial diagram, a row of panels, a tab set and an accordion and ask for the same behaviour five times — read a short label, read a short description, repeat. That page is one section repeated, however different the drawings are. Judge the behaviour, not the component.
8. **Repeated anatomy** — two further censuses, reported as numbers rather than impressions:
   - **Within the page** — how many sections open the same way, and how many share the same body skeleton? A page whose sections mostly run eyebrow → heading → narrow lede → contained payload → closing note is an article with figures, however varied the payloads are.
   - **Across sibling pages** — is any construction here substantially the same object as one on another MindWP page, with only the words changed? Check the hero specifically: sibling pages that all open with the same arrangement announce themselves identically whatever follows. Shared surfaces, grammar and primitives are house language and are correct. A reproduced payload or a reproduced hero is not, and both are easiest to miss when competently executed, because they look proven.
9. **Spatial decision** — does the page's use of the viewport read as chosen? Where every section sits in the same envelope, at the same width, with nothing ever leaving its container, is that a judgement about the material or a default nobody set? Compare against sibling pages: an envelope identical across several pages is usually inherited rather than decided. A contained page is a legitimate answer; an unconsidered one is not.
10. **Motion and interaction** — does either clarify something, or does it animate a static layout? Judge what the movement or the state actually explains: if the page reads the same with it removed, it is decoration, which is permitted but should not be mistaken for design work. Check that essential meaning is not held behind a state the visitor may never open, and that foundational reveal motion has not been reinvented locally.
11. **Emphasis inflation** — does every section given focal scale contain a payload that earns it? `.section--focal` only changes padding and gap; on a small payload it produces empty space, not emphasis.
12. **Divergence** — where the built page departs from the approved composition or specification, name the departure and say whether the render justifies it. The render is the evidence of quality; the specification is the evidence of intent, and where they disagree, say which one is wrong.

## Rank, do not list

Return findings ordered by how much they cost the page, each with:

- what is wrong, in the render;
- why it matters to a visitor or to the commercial argument;
- the design decision that owns it — payload, hierarchy, weight, surface, or craft;
- whether it needs a redesign or a repair.

A list of equally-weighted observations is the same failure this skill exists to find. If three things are wrong and one of them is the page, say which.

Name what is working too, specifically enough to keep. A verdict that only removes gives the next pass nothing to build on.

## What not to reward

Do not score similarity to another page's constructions. Where the user has named a reference page, it sets the standard of **resolution** a section should reach, not the set of objects it should contain. A page that reproduces another's fans, tabs, browser scenes and hero mechanism has copied an anatomy, not met a standard. Where no reference has been named, judge against the criteria in this skill alone — do not go and find one.

Equally, do not treat familiar foundations as failures. Repeated surfaces, recurring eyebrow-and-heading grammar, cards, grids and centred introductions are shared MindWP language. Flatness is different meanings receiving the same inner hierarchy, weight and reading behaviour — not a page that looks like itself.

**Counts are diagnostic evidence, never quotas.** State them where they make a pattern undeniable — how many sections open alike, how many reading paths exist, how many pages share a hero. Do not convert them into a score, a target, a required number of environments, widths, focal moments or interactions, or a rule that consecutive sections must differ.
