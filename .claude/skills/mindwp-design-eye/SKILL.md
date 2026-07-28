---
name: mindwp-design-eye
description: Use to judge whether a built MindWP page is visually good — reading fresh captures at full-page and section scale, ranking what is weak and why. Run after mindwp-page-build and before calling a page done. This is a visual verdict, not an implementation review.
---

# MindWP design eye

Judge the render. Implementation success and visual success are different judgements, and this skill only makes the second one.

Read `docs/DESIGN.md` for the standard. Write no code and change no files.

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

Thumbnails distort. They make type look smaller and contrast look weaker than it is, and they flatter compositions that fail up close. Confirm any suspected craft problem at full resolution before naming it, and say when a thumbnail impression did not survive.

## What to judge

1. **Full-page rhythm** — does depth vary with importance, or does every section run to roughly the same band?
2. **Payload legibility** — is each section's relationship visible in the render, or only in the copy? Cover the paragraphs and check what is left.
3. **Focal treatment** — where the specification named a focal moment, is it carried by real material rather than by height? Where it named none, does the page still read as coherent and deliberately quiet rather than undecided?
4. **Quiet or unfinished** — where a section is calm, does it read as a decision or as an absence? An unfinished section and a deliberately quiet one look identical in a specification and different in a render.
5. **Object craft** — is each payload legible against its own background, uncropped at its intended width, and understandable before the copy beside it? Look specifically for objects at the same value as their ground, text clipped by an overlapping neighbour, ghost type too faint to read, shapes carrying no relationship, and interface fragments too small to inspect.
6. **Mobile transformation** — is the central relationship preserved or thoughtfully simplified, or fragmented into an automatic stack?
7. **Repeated anatomy** — where a reading pattern recurs, do those sections genuinely share a role and structure? Two censuses, reported as numbers rather than as impressions, because an impression of variety survives a page that has none:
   - **Within the page** — how many sections open the same way, and how many share the same body skeleton? State the counts. A page whose sections mostly run eyebrow → heading → narrow lede → full-width payload → closing note is an article with figures, however varied the payloads are.
   - **Across service pages** — is any construction here substantially the same object as one on another MindWP service page, with only the words changed? Shared surfaces, grammar and primitives are the house language and are correct. A reproduced payload — same grid, same internal structure, same labelling device — is not, and it is easiest to miss when it is competently executed, because it looks proven.
8. **Emphasis inflation** — does every section given focal scale contain a payload that earns it? `.section--focal` only changes padding and gap; on a small payload it produces empty space, not emphasis.
9. **Divergence** — where the built page departs from the approved design specification, name the departure and say whether the render justifies it.

## Rank, do not list

Return findings ordered by how much they cost the page, each with:

- what is wrong, in the render;
- why it matters to a visitor or to the commercial argument;
- the design decision that owns it — payload, hierarchy, weight, surface, or craft;
- whether it needs a redesign or a repair.

A list of equally-weighted observations is the same failure this skill exists to find. If three things are wrong and one of them is the page, say which.

Name what is working too, specifically enough to keep. A verdict that only removes gives the next pass nothing to build on.

## What not to reward

Do not score similarity to another page's constructions. Where the user has named a reference page, it sets the standard of **resolution** a section should reach, not the set of objects it should contain. A page that reproduces another's fans, tabs, browser scenes and hero mechanism has copied an anatomy, not met a standard. Where no reference has been named, judge against `DESIGN.md` alone — do not go and find one.

Equally, do not treat familiar foundations as failures. Repeated surfaces, recurring eyebrow-and-heading grammar, cards, grids and centred introductions are shared MindWP language. Flatness is different meanings receiving the same inner hierarchy and weight — not a page that looks like itself.

Do not convert judgement into scores, counts or quotas.
