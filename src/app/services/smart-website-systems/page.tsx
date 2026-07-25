import { buildSEO } from "@/lib/seo/metadata";

/**
 * Smart Website Systems — the principal offer.
 *
 * Emptied for a rebuild. Still a draft route: deliberately absent from
 * LIVE_ROUTES, the sitemap and the navigation source, and carries `noindex`
 * until publication is approved.
 */
export const metadata = buildSEO({
  title: "Smart Website Systems",
  description:
    "Strategy, structure, content, design and build for service businesses whose work needs explaining — owned through to an enquiry a person can answer.",
  path: "/services/smart-website-systems",
  noindex: true,
});

export default function SmartWebsiteSystemsPage() {
  return null;
}
