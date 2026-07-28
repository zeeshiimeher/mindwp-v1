import "@/styles/pages/fuc.css";

import { FucClosing } from "@/app/_fuc/FucClosing";
import { FucConsidered } from "@/app/_fuc/FucConsidered";
import { FucContext } from "@/app/_fuc/FucContext";
import { FucCrm } from "@/app/_fuc/FucCrm";
import { FucFaq } from "@/app/_fuc/FucFaq";
import { FucHero } from "@/app/_fuc/FucHero";
import { FucJudgement, FucStopping } from "@/app/_fuc/FucJudgement";
import { FucPermission, FucPurpose } from "@/app/_fuc/FucPurpose";
import { FucRecord } from "@/app/_fuc/FucRecord";
import { FucFit, FucResponsibility } from "@/app/_fuc/FucResponsibility";
import { buildSEO } from "@/lib/seo/metadata";

export const metadata = buildSEO({
  title: "Lead Follow-Up Automation for Service Businesses",
  description:
    "Lead follow-up automation for clinics and service businesses, keeping ownership, context and next actions visible through considered, human-led workflows.",
  path: "/services/follow-up-crm",
  // Draft route: not in navigation, not in the sitemap, not indexed until
  // release is explicitly authorised.
  noindex: true,
});

/**
 * Thirteen planned sections in nine surface environments.
 *
 *   §1        navy — the record opened with its important half unfilled
 *   §2–§3     white then paper, the set-piece carrying its contrast as a
 *             navy object rather than as a changed band
 *   §4–§5     one continuous mist environment — what decides a send
 *   §6        white, alone
 *   §7–§8     one unbroken navy act — the statement, then where it stops
 *   §9–§12    paper, white, mist, paper — the practical tail, deliberately calm
 *   §13       navy closure
 */
export default function FollowUpCrmPage() {
  return (
    <>
      <FucHero />

      <FucConsidered />
      <FucRecord />

      <FucPurpose />
      <FucPermission />

      <FucContext />

      <FucJudgement />
      <FucStopping />

      <FucCrm />
      <FucResponsibility />
      <FucFit />
      <FucFaq />

      <FucClosing />
    </>
  );
}
