import "@/styles/pages/sws.css";

import { SwsArrivalContext } from "@/app/_sws/SwsArrivalContext";
import { SwsBeyondRedesign } from "@/app/_sws/SwsBeyondRedesign";
import { SwsBuiltWork } from "@/app/_sws/SwsBuiltWork";
import { SwsClosing } from "@/app/_sws/SwsClosing";
import { SwsDecisionStructure } from "@/app/_sws/SwsDecisionStructure";
import { SwsDeliberateSystem } from "@/app/_sws/SwsDeliberateSystem";
import { SwsDistinctivePresence } from "@/app/_sws/SwsDistinctivePresence";
import { SwsFaq } from "@/app/_sws/SwsFaq";
import { SwsFit } from "@/app/_sws/SwsFit";
import { SwsHero } from "@/app/_sws/SwsHero";
import { SwsMeasurement } from "@/app/_sws/SwsMeasurement";
import { SwsMotion } from "@/app/_sws/SwsMotion";
import { SwsProofInContext } from "@/app/_sws/SwsProofInContext";
import { SwsPurposefulContent } from "@/app/_sws/SwsPurposefulContent";
import { SwsTechnicalFoundation } from "@/app/_sws/SwsTechnicalFoundation";
import { SwsUsefulActions } from "@/app/_sws/SwsUsefulActions";
import { SwsWorkingSystem } from "@/app/_sws/SwsWorkingSystem";
import { buildSEO } from "@/lib/seo/metadata";

/**
 * Smart Website Systems — the principal offer.
 *
 * Draft route. It is deliberately absent from LIVE_ROUTES, the sitemap and the
 * navigation source, and carries `noindex` until publication is approved. That
 * is one decision expressed in three places on purpose: shipping the page and
 * publishing it are separate acts.
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
