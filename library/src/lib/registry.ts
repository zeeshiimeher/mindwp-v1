import type { ComponentType } from "react";

/**
 * Catalogue registry.
 *
 * Shape only. The section taxonomy — families, the researched concept longlist
 * and the selection that follows from it — is owned by `library/planning/` and
 * is not guessed here. `tags` is intentionally a loose string list so that a
 * real taxonomy can replace it without reworking the catalogue.
 */

/** Ground a section is designed to sit on. Drives the catalogue frame only. */
export type SectionSurface = "page" | "card" | "mist" | "navy";

/**
 * `system` entries are technical verification examples for this setup — proof
 * that Tailwind, the token bridge, local CSS and GSAP behave. They are not
 * members of the section collection and carry no permanent section id.
 */
export type SectionNamespace = "system" | "sections";

export type SectionEntry = {
  /** URL segment. Stable, and the catalogue's only identifier. */
  slug: string;
  namespace: SectionNamespace;
  title: string;
  /** One line: what the section is for, not how it is built. */
  summary: string;
  /** Placeholder classification until the researched taxonomy lands. */
  tags: string[];
  surface: SectionSurface;
  /** True when the section reads correctly only with scroll room around it. */
  needsScrollRoom?: boolean;
  component: ComponentType;
};

export function listEntries(entries: readonly SectionEntry[], namespace?: SectionNamespace) {
  return namespace ? entries.filter((entry) => entry.namespace === namespace) : [...entries];
}

export function getEntry(entries: readonly SectionEntry[], slug: string) {
  return entries.find((entry) => entry.slug === slug);
}

export function collectTags(entries: readonly SectionEntry[]) {
  return [...new Set(entries.flatMap((entry) => entry.tags))].sort();
}

/** Frame background for a given surface. Catalogue chrome, not section styling. */
export const SURFACE_CLASS: Record<SectionSurface, string> = {
  page: "bg-page",
  card: "bg-card",
  mist: "bg-mist",
  navy: "bg-navy on-dark",
};
