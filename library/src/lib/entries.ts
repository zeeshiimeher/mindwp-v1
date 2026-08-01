import { Sec182BreakoutLadder } from "@/components/sections/Sec182BreakoutLadder";
import { GradientProof } from "@/components/system/GradientProof";
import { LocalCssProof } from "@/components/system/LocalCssProof";
import { MotionProof } from "@/components/system/MotionProof";
import { TokenProof } from "@/components/system/TokenProof";

import type { CatalogueEntry } from "./registry";

/**
 * The catalogue's data.
 *
 * `system` entries come first: technical checks that the foundation works.
 * They are not members of the section collection, carry no permanent id, and
 * are not classified against the taxonomy.
 *
 * The collection itself follows, in the `sections` namespace, each entry
 * carrying its permanent `SEC-nnn` id and the full structured taxonomy from
 * `library/planning/TAXONOMY.md`. Display tags are derived from those fields by
 * `toTags()` and are never written here.
 */
export const ENTRIES: readonly CatalogueEntry[] = [
  {
    slug: "system-tokens",
    namespace: "system",
    title: "Tailwind and token bridge",
    summary:
      "Mapped surfaces, text colours, the emerald ladder, radii and the spacing scale, on light and dark ground.",
    checks: ["tailwind", "tokens", "typography", "responsive-grid", "light-and-dark"],
    surface: "page",
    component: TokenProof,
  },
  {
    slug: "system-local-css",
    namespace: "system",
    title: "Tailwind with library-local CSS",
    summary:
      "Utilities carry the structure; a local stylesheet carries one art-directed object with clip-path, masking and layering.",
    checks: ["tailwind", "local-css", "pseudo-elements", "masking", "art-direction"],
    surface: "mist",
    component: LocalCssProof,
  },
  {
    slug: "system-gradients",
    namespace: "system",
    title: "Controlled gradient foundation",
    summary:
      "Eleven navy and neutral gradient, mask and texture tokens, each shown beside the solid surface it would replace.",
    checks: ["gradients", "tokens", "navy", "masking", "grain", "light-and-dark"],
    surface: "page",
    component: GradientProof,
  },
  {
    slug: "system-motion",
    namespace: "system",
    title: "GSAP ScrollTrigger and reduced motion",
    summary:
      "A bounded pinned stage on scrub, scoped and fully reverted, with a static branch that carries the same meaning.",
    checks: ["gsap", "scrolltrigger", "pinned", "reduced-motion", "client-island"],
    surface: "navy",
    needsScrollRoom: true,
    component: MotionProof,
  },

  {
    id: "SEC-182",
    slug: "sec-182-breakout-ladder",
    namespace: "sections",
    title: "Three-position breakout ladder",
    summary:
      "A measured reading column down a wide named-line grid, with exactly three declared escape positions — margin, half-bleed, full-bleed — and a return to the measure after each.",
    category: "P",
    mechanism: "no-motion",
    spatial: "static",
    width: "breakout",
    density: "medium",
    difficulty: "low",
    scrollBudget: "none",
    reducedMotion: "rm-free",
    a11yWatch: [],
    status: "built",
    wave: 1,
    batch: 0,
    surface: "page",
    component: Sec182BreakoutLadder,
  },
];
