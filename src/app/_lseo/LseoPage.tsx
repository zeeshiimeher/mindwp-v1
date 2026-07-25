import "@/styles/pages/lseo.css";

import { LseoAuthority } from "./LseoAuthority";
import { LseoFaq } from "./LseoFaq";
import { LseoHero } from "./LseoHero";
import { LseoInformation } from "./LseoInformation";
import { LseoIntent } from "./LseoIntent";
import { LseoClosing, LseoFit, LseoStart } from "./LseoJourney";
import { LseoLayers } from "./LseoLayers";
import { LseoManagement } from "./LseoManagement";
import { LseoMeasures } from "./LseoMeasures";
import { LseoMotion } from "./LseoMotion";
import { LseoPages } from "./LseoPages";
import { LseoProfile } from "./LseoProfile";
import { LseoProof } from "./LseoProof";
import { LseoRankings } from "./LseoRankings";

/**
 * Local SEO Authority — isolated `lseo-legacy` variant.
 *
 * Section order follows the revised plan: discovered → matched → inspected →
 * verified → trusted → strengthened → measured → maintained → prioritised →
 * reviewed. The live route is untouched.
 */
export function LseoPage() {
  return (
    <>
      <LseoHero />
      <LseoRankings />
      <LseoIntent />
      <LseoLayers />
      <LseoProfile />
      <LseoPages />
      <LseoInformation />
      <LseoProof />
      <LseoAuthority />
      <LseoMeasures />
      <LseoManagement />
      <LseoStart />
      <LseoFit />
      <LseoFaq />
      <LseoClosing />
      <LseoMotion />
    </>
  );
}
