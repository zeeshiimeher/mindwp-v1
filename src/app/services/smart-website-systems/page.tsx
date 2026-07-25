import "@/styles/pages/sws.css";

import { SwsArrivalContext, SwsPurposefulContent } from "@/app/_sws/SwsAudience";
import { SwsClosing, SwsFit } from "@/app/_sws/SwsClose";
import {
  SwsMeasurement,
  SwsTechnicalFoundation,
  SwsUsefulActions,
} from "@/app/_sws/SwsDelivery";
import { SwsDistinctivePresence } from "@/app/_sws/SwsDistinctive";
import { SwsBuiltWork, SwsProofInContext } from "@/app/_sws/SwsEvidence";
import { SwsFaq } from "@/app/_sws/SwsFaq";
import {
  SwsBeyondRedesign,
  SwsDecisionStructure,
  SwsDeliberateSystem,
} from "@/app/_sws/SwsFoundations";
import { SwsHero } from "@/app/_sws/SwsHero";
import { SwsMotion } from "@/app/_sws/SwsMotion";
import { SwsWorkingSystem } from "@/app/_sws/SwsWorkingSystem";
import { buildSEO } from "@/lib/seo/metadata";

/**
 * Smart Website Systems — the principal offer.
 *
 * Still a draft route: deliberately absent from LIVE_ROUTES, the sitemap and
 * the navigation source, and carrying `noindex` until publication is approved.
 */
export const metadata = buildSEO({
  title: "Smart Website Systems",
  description:
    "Strategy, structure, content, design and build for service businesses whose work needs explaining — owned through to an enquiry a person can answer.",
  path: "/services/smart-website-systems",
  noindex: true,
});

export default function SmartWebsiteSystemsPage() {
  return (
    <>
      <SwsHero />
      <SwsBeyondRedesign />
      <SwsDeliberateSystem />
      <SwsDecisionStructure />
      <SwsArrivalContext />
      <SwsPurposefulContent />
      <SwsDistinctivePresence />
      <SwsProofInContext />
      <SwsBuiltWork />
      <SwsUsefulActions />
      <SwsMeasurement />
      <SwsTechnicalFoundation />
      <SwsWorkingSystem />
      <SwsFit />
      <SwsFaq />
      <SwsClosing />
      <SwsMotion />
    </>
  );
}
