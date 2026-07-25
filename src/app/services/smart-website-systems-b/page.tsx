import "@/styles/pages/sws.css";
import "@/styles/pages/sws-b.css";

import { SwsArrivalContext } from "@/app/_sws/SwsArrivalContext";
import { SwsBeyondRedesignB } from "@/app/_sws/SwsBeyondRedesignB";
import { SwsBuiltWork } from "@/app/_sws/SwsBuiltWork";
import { SwsClosing } from "@/app/_sws/SwsClosing";
import { SwsDecisionStructure } from "@/app/_sws/SwsDecisionStructure";
import { SwsDeliberateSystem } from "@/app/_sws/SwsDeliberateSystem";
import { SwsDistinctivePresenceB } from "@/app/_sws/SwsDistinctivePresenceB";
import { SwsFaq } from "@/app/_sws/SwsFaq";
import { SwsFit } from "@/app/_sws/SwsFit";
import { SwsHeroB } from "@/app/_sws/SwsHeroB";
import { SwsMeaningfulMeasurement } from "@/app/_sws/SwsMeaningfulMeasurement";
import { SwsMotion } from "@/app/_sws/SwsMotion";
import { SwsPlanToSystemB } from "@/app/_sws/SwsPlanToSystemB";
import { SwsProofInContextB } from "@/app/_sws/SwsProofInContextB";
import { SwsPurposefulContentB } from "@/app/_sws/SwsPurposefulContentB";
import { SwsTechnicalFoundation } from "@/app/_sws/SwsTechnicalFoundation";
import { SwsUsefulActions } from "@/app/_sws/SwsUsefulActions";
import { buildSEO } from "@/lib/seo/metadata";

// Draft route: not yet added to live navigation or sitemap membership
// (src/config/routes.ts) or release-approved, so indexing stays off until
// that is explicitly authorised.
export const metadata = buildSEO({
  title: "Smart Website Systems",
  description:
    "MindWP's Smart Website Systems connect strategy, structure, content, design and enquiry handling around one customer decision — so specialist work reads as clearly as it deserves to.",
  path: "/services/smart-website-systems-b",
  noindex: true,
});

export default function SmartWebsiteSystemsBPage() {
  return (
    <>
      <SwsHeroB />
      <SwsBeyondRedesignB />
      <SwsDeliberateSystem />
      <SwsDecisionStructure />
      <SwsArrivalContext />
      <SwsPurposefulContentB />
      <SwsDistinctivePresenceB />
      <SwsProofInContextB />
      <SwsBuiltWork />
      <SwsUsefulActions />
      <SwsMeaningfulMeasurement />
      <SwsTechnicalFoundation />
      <SwsPlanToSystemB />
      <SwsFit />
      <SwsFaq />
      <SwsClosing />
      <SwsMotion />
    </>
  );
}
