import { LocalCssProof } from "@/components/system/LocalCssProof";
import { MotionProof } from "@/components/system/MotionProof";
import { TokenProof } from "@/components/system/TokenProof";

import type { SectionEntry } from "./registry";

/**
 * The catalogue's data.
 *
 * Everything here is currently in the `system` namespace: technical checks that
 * the foundation works. The section collection itself is not started, and its
 * families, ids and tags are owned by `library/planning/`. When that research
 * lands, section entries are appended to this array in the `sections`
 * namespace — the catalogue routes need no change to receive them.
 */
export const ENTRIES: readonly SectionEntry[] = [
  {
    slug: "system-tokens",
    namespace: "system",
    title: "Tailwind and token bridge",
    summary:
      "Mapped surfaces, text colours, the emerald ladder, radii and the spacing scale, on light and dark ground.",
    tags: ["tailwind", "tokens", "typography", "responsive-grid", "light-and-dark"],
    surface: "page",
    component: TokenProof,
  },
  {
    slug: "system-local-css",
    namespace: "system",
    title: "Tailwind with library-local CSS",
    summary:
      "Utilities carry the structure; a local stylesheet carries one art-directed object with clip-path, masking and layering.",
    tags: ["tailwind", "local-css", "pseudo-elements", "masking", "art-direction"],
    surface: "mist",
    component: LocalCssProof,
  },
  {
    slug: "system-motion",
    namespace: "system",
    title: "GSAP ScrollTrigger and reduced motion",
    summary:
      "A bounded pinned stage on scrub, scoped and fully reverted, with a static branch that carries the same meaning.",
    tags: ["gsap", "scrolltrigger", "pinned", "reduced-motion", "client-island"],
    surface: "navy",
    needsScrollRoom: true,
    component: MotionProof,
  },
];
