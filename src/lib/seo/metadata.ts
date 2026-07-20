import type { Metadata } from "next";

import { absoluteUrl, SITE } from "@/config/site";

export interface SeoInput {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/services/local-seo-authority". */
  path: string;
  /** Absolute or site-relative OG image. Defaults to the site OG. */
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article";
}

/**
 * Single metadata builder for every page. Sets canonical, Open Graph and
 * Twitter cards from one source so pages can't drift. Title is templated
 * `"<title> · MindWP"` (the home page passes the bare brand line).
 */
export function buildSEO({
  title,
  description,
  path,
  ogImage,
  noindex = false,
  type = "website",
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage ? (ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage)) : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type,
      url,
      siteName: SITE.name,
      title,
      description,
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/** Root metadata defaults (applied in app/layout.tsx). */
export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s · ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
};
