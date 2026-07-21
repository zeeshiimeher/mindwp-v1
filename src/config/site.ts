/** Site-wide constants. The single place for name, URL, and contact identity. */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindwp.com";

export const SITE = {
  name: "MindWP",
  /** Production origin — no trailing slash. Override with NEXT_PUBLIC_SITE_URL. */
  url: rawUrl.replace(/\/$/, ""),
  /** Public anchor line (CLAUDE.md and docs/STRATEGY.md). */
  tagline: "Work Comes In. Too Much Slips Away.",
  description:
    "Smart websites for specialist clinics and established service businesses — the site and the handling around every enquiry, designed together.",
  locale: "en",
} as const;

/** Build an absolute URL from a site-relative path (for canonical/OG/sitemap). */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean === "/" ? "" : clean}`;
}
