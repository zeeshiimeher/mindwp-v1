import "./local-seo-authority.css";

import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { buildSEO } from "@/lib/seo/metadata";
import { faqSchema, serviceSchema } from "@/lib/seo/schema";

import { LocalSeoAuthorityPage } from "./_components/LocalSeoAuthorityPage";
import { LOCAL_SEO_FAQS } from "./content";

const path = "/services/local-seo-authority";
const description =
  "Local SEO Authority connects local discovery, relevant service pages, visible proof and ongoing verification to a website built to support the decision.";

export const metadata: Metadata = buildSEO({
  title: "Local SEO Authority",
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
          faqSchema([...LOCAL_SEO_FAQS]),
        ]}
      />
      <LocalSeoAuthorityPage />
    </>
  );
}
