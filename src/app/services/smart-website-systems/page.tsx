import "./smart-website-systems.css";

import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { buildSEO } from "@/lib/seo/metadata";
import { faqSchema, serviceSchema } from "@/lib/seo/schema";

import { SwsAlignment } from "./_components/SwsAlignment";
import { SwsAutomation } from "./_components/SwsAutomation";
import { SwsClosing } from "./_components/SwsClosing";
import { SwsFaq } from "./_components/SwsFaq";
import { SwsFit } from "./_components/SwsFit";
import { SwsHero } from "./_components/SwsHero";
import { SwsMotion } from "./_components/SwsMotion";
import { SwsReputation } from "./_components/SwsReputation";
import { SwsSystem } from "./_components/SwsSystem";
import { SwsWork } from "./_components/SwsWork";
import { SWS_FAQS } from "./content";

const path = "/services/smart-website-systems";
const description =
  "Smart Website Systems is MindWP's principal engagement: a premium business website connected to the way enquiries are received, answered, owned and followed up.";

export const metadata: Metadata = buildSEO({
  title: "Smart Website Systems",
  description,
  path,
  // Draft route: kept out of navigation, the sitemap and indexing until
  // release is explicitly authorised.
  noindex: true,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: "Smart Website Systems", description, path }),
          faqSchema([...SWS_FAQS]),
        ]}
      />

      <SwsHero />
      <SwsSystem />
      <SwsAutomation />
      <SwsReputation />
      <SwsWork />
      <SwsAlignment />
      <SwsFit />
      <SwsFaq />
      <SwsClosing />

      <SwsMotion />
    </>
  );
}
