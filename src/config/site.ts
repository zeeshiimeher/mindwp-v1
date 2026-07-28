/** Site-wide constants. The single place for name, URL, and contact identity. */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindwp.com";

export const SITE = {
  name: "MindWP",
  /** Production origin — no trailing slash. Override with NEXT_PUBLIC_SITE_URL. */
  url: rawUrl.replace(/\/$/, ""),
  /**
   * Approved shared public identity (docs/STRATEGY.md). These three strings are
   * the business proposition, not page copy — the Homepage hero owns its own
   * headline and is deliberately not derived from the tagline.
   */
  tagline: "Smart websites and connected enquiry systems.",
  /**
   * Names the audience and the supported-growth posture. Deliberately omits any
   * company-age qualifier: docs/STRATEGY.md settles this as "established or
   * newer", which the Right fit section states in full.
   */
  description:
    "MindWP builds smart websites and connected enquiry systems for clinics and expert-led businesses, designed to support growth through better visibility, better handling and greater operational consistency.",
  /** Footer positioning line. Claims a supported mechanism, never an outcome. */
  footerLine:
    "Website and enquiry systems for clinics and expert-led businesses—helping improve visibility, enquiry handling and operational consistency.",
  locale: "en",
} as const;

/** Build an absolute URL from a site-relative path (for canonical/OG/sitemap). */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean === "/" ? "" : clean}`;
}
