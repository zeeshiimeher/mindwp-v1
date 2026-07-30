import "./smart-website-systems.css";

import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { buildSEO } from "@/lib/seo/metadata";
import { faqSchema, serviceSchema } from "@/lib/seo/schema";

import { SwsAlignment } from "./_components/SwsAlignment";
import { SwsAutomation } from "./_components/SwsAutomation";
import { SwsCarrying } from "./_components/SwsCarrying";
import { SwsClosing } from "./_components/SwsClosing";
import { SwsFaq } from "./_components/SwsFaq";
import { SwsFit } from "./_components/SwsFit";
import { SwsHero } from "./_components/SwsHero";
import { SwsIncidents } from "./_components/SwsIncidents";
import { SwsMoment } from "./_components/SwsMoment";
import { SwsMotion } from "./_components/SwsMotion";
import { SwsReputation } from "./_components/SwsReputation";
import { SwsSystem } from "./_components/SwsSystem";
import { SwsThread } from "./_components/SwsThread";
import { SwsVerdict } from "./_components/SwsVerdict";
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

      {/* Sections 2, 3, 5, 6, 9 and 11 were deleted for full rebuild against
          their new rhetorical jobs — the approved narrative order is restored
          when each returns. Nothing from the old implementations is retained,
          so the rebuilds start from their datashapes rather than from a
          composition that is already in the way. */}
      <SwsHero />
      <SwsIncidents />
      <SwsVerdict />
      <SwsSystem />
      <SwsMoment />
      <SwsCarrying />
      <SwsAutomation />
      <SwsReputation />
      <SwsThread />
      <SwsWork />
      <SwsAlignment />
      <SwsFit />
      <SwsFaq />
      <SwsClosing />

      <SwsMotion />
    </>
  );
}
