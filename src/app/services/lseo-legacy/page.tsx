import type { Metadata } from "next";

import { LSEO_FAQS } from "@/app/_lseo/content";
import { LseoPage } from "@/app/_lseo/LseoPage";
import { JsonLd } from "@/components/JsonLd";
import { buildSEO } from "@/lib/seo/metadata";
import { faqSchema, serviceSchema } from "@/lib/seo/schema";

/**
 * Isolated variant route. Deliberately noindex, absent from the route registry,
 * the sitemap and every navigation surface — the live Local SEO Authority page
 * at /services/local-seo-authority is unchanged.
 */
const path = "/services/lseo-legacy";
const description =
  "Local SEO services for clinics and expert-led businesses, aligning Google Business Profile, website pages, business information and genuine reviews.";

export const metadata: Metadata = buildSEO({
  title: "Local SEO Services for Clinics & Expert-Led Businesses",
  description,
  path,
  noindex: true,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: "Local SEO Authority", description, path }),
          faqSchema([...LSEO_FAQS]),
        ]}
      />
      <LseoPage />
    </>
  );
}
