/** Site-wide constants. The single place for name, URL, and contact identity. */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindwp.com";

export const SITE = {
  name: "MindWP",
  /** Production origin — no trailing slash. Override with NEXT_PUBLIC_SITE_URL. */
  url: rawUrl.replace(/\/$/, ""),
  /** Mirrors the live Homepage hero headline (docs/STRATEGY.md, Homepage positioning consequence). */
  tagline: "Smart websites for being found, understood and chosen.",
  /**
   * Names the audience the page itself leads with. Deliberately omits any
   * company-age qualifier: docs/STRATEGY.md settles this as "established or
   * newer", which the Right fit section states in full.
   */
  description:
    "Smart websites for independent clinics and specialist service businesses — the site and the handling around every enquiry, designed together.",
  /** Footer positioning line. Claims nothing beyond the approved scope. */
  footerLine:
    "Website strategy, design and implementation for service businesses where people choose carefully.",
  locale: "en",
} as const;

/** Build an absolute URL from a site-relative path (for canonical/OG/sitemap). */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean === "/" ? "" : clean}`;
}
