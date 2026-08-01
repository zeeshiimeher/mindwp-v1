import type { ComponentType } from "react";

/**
 * Catalogue registry.
 *
 * The structured, taxonomy-backed model. Every dimension below is a union of
 * the vocabulary defined in `library/planning/TAXONOMY.md`, so a mistyped value
 * is a build error rather than an orphan filter value that silently never
 * matches anything.
 *
 * Two namespaces, two shapes. `sections` entries are members of the collection
 * and carry the full taxonomy plus a permanent `SEC-nnn` id. `system` entries
 * are technical verification examples for this setup — proof that Tailwind, the
 * token bridge, local CSS and GSAP behave — and deliberately carry neither.
 *
 * Display tags are derived, never authored: `toTags()` is the only thing that
 * produces them, so a fact is recorded once and cannot disagree with itself.
 */

/** Permanent identity. Never reused, never renumbered. */
export type SectionId = `SEC-${string}`;

/** Ground a section is designed to sit on. Drives the catalogue frame only. */
export type SectionSurface = "page" | "card" | "mist" | "navy";

export type SectionNamespace = "system" | "sections";

/** Longlist families A–R. */
export type SectionCategory =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R";

/** What the section is built from. */
export type SectionMechanism =
  | "no-motion"
  | "css-motion"
  | "scroll-css"
  | "js-motion"
  | "gsap-core";

/** Spatial behaviour — the taxonomy's primary discriminator. */
export type SectionSpatial =
  | "static"
  | "sticky"
  | "pinned"
  | "horizontal"
  | "layered"
  | "swap-in-place"
  | "scroll-driven"
  | "user-driven";

/**
 * Width. `contained` covers the `measure` and `margin` positions of the width
 * vocabulary, `wide` is `half-bleed`, `breakout` is any position escaping the
 * measure, and `full-bleed` is the `full-bleed` position — so the CSS names in
 * `styles/widths.css` and this vocabulary stay one language.
 */
export type SectionWidth = "contained" | "wide" | "breakout" | "full-bleed";

export type SectionDensity = "low" | "medium" | "high";

export type SectionDifficulty = "low" | "medium" | "high" | "experimental";

export type SectionScrollBudget = "none" | "adds" | "captures";

/** `rm-designed` means a separately designed static composition, not disabled tweens. */
export type SectionReducedMotion = "rm-free" | "rm-designed";

export type SectionA11yWatch =
  | "kbd-path"
  | "text-integrity"
  | "motion-sensitive"
  | "semantics-fragile";

export type SectionStatus = "built" | "reviewed" | "revise";

/** Catalogue chrome. Shared by both namespaces, and what the routes render. */
type CatalogueChrome = {
  /** URL segment. Stable once published. */
  slug: string;
  title: string;
  /** Structural: what the composition **is**, not what it is for. */
  summary: string;
  surface: SectionSurface;
  /** True when the section reads correctly only with scroll room around it. */
  needsScrollRoom?: boolean;
  component: ComponentType;
};

export type SystemEntry = CatalogueChrome & {
  namespace: "system";
  /** What this proof verifies. Chrome labels, not taxonomy — system entries are
      not members of the collection and are not classified as if they were. */
  checks: readonly string[];
};

export type SectionEntry = CatalogueChrome & {
  namespace: "sections";
  id: SectionId;
  category: SectionCategory;
  mechanism: SectionMechanism;
  spatial: SectionSpatial;
  width: SectionWidth;
  density: SectionDensity;
  difficulty: SectionDifficulty;
  scrollBudget: SectionScrollBudget;
  reducedMotion: SectionReducedMotion;
  a11yWatch: readonly SectionA11yWatch[];
  status: SectionStatus;
  wave: number;
  batch: number;
  /** Only for the minority whose composition depends on a surface change. */
  surfaceCritical?: boolean;
};

export type CatalogueEntry = SystemEntry | SectionEntry;

/* Display spellings. The field values are short because they are read in code;
   the tags are the taxonomy's own written forms, because they are read on a
   chip. Kept here so the two can never drift. */
const DENSITY_TAG: Record<SectionDensity, string> = {
  low: "density-low",
  medium: "density-medium",
  high: "density-high",
};

const DIFFICULTY_TAG: Record<SectionDifficulty, string> = {
  low: "build-low",
  medium: "build-medium",
  high: "build-high",
  experimental: "experimental",
};

const BUDGET_TAG: Record<SectionScrollBudget, string> = {
  none: "budget-none",
  adds: "budget-adds-scroll",
  captures: "budget-captures-scroll",
};

/**
 * The catalogue's display chips, derived from the structured fields.
 *
 * One source of truth per fact: a section's mechanism is recorded once, as a
 * typed field, and the chip is a rendering of it. Nothing here is authored
 * separately and nothing can be forgotten when a field changes.
 */
export function toTags(entry: CatalogueEntry): string[] {
  if (entry.namespace === "system") return [...entry.checks];

  return [
    entry.mechanism,
    entry.spatial,
    entry.width,
    DENSITY_TAG[entry.density],
    DIFFICULTY_TAG[entry.difficulty],
    BUDGET_TAG[entry.scrollBudget],
    entry.reducedMotion,
    ...entry.a11yWatch,
    ...(entry.surfaceCritical ? ["surface-critical"] : []),
  ];
}

/** The permanent id where there is one, the slug where there is not. */
export function entryRef(entry: CatalogueEntry): string {
  return entry.namespace === "sections" ? `${entry.id} · ${entry.slug}` : entry.slug;
}

export function listEntries(entries: readonly CatalogueEntry[], namespace?: SectionNamespace) {
  return namespace ? entries.filter((entry) => entry.namespace === namespace) : [...entries];
}

export function getEntry(entries: readonly CatalogueEntry[], slug: string) {
  return entries.find((entry) => entry.slug === slug);
}

export function collectTags(entries: readonly CatalogueEntry[]) {
  return [...new Set(entries.flatMap(toTags))].sort();
}

/** Frame background for a given surface. Catalogue chrome, not section styling. */
export const SURFACE_CLASS: Record<SectionSurface, string> = {
  page: "bg-page",
  card: "bg-card",
  mist: "bg-mist",
  navy: "bg-navy on-dark",
};
