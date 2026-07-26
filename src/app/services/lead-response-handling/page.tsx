import "@/styles/pages/lrh.css";

import { LrhAcknowledgement } from "@/app/_lrh/LrhAcknowledgement";
import { LrhContext } from "@/app/_lrh/LrhContext";
import { LrhFaq } from "@/app/_lrh/LrhFaq";
import { LrhAutomation, LrhHandoff } from "@/app/_lrh/LrhHandoff";
import { LrhHero } from "@/app/_lrh/LrhHero";
import { LrhClosing, LrhFit } from "@/app/_lrh/LrhJourney";
import { LrhMotion } from "@/app/_lrh/LrhMotion";
import { LrhOwnershipGap } from "@/app/_lrh/LrhOwnershipGap";
import { LrhRoutes } from "@/app/_lrh/LrhRoutes";
import { LrhSetup } from "@/app/_lrh/LrhSetup";
import { MissedCallsReturn } from "@/app/_lrh/MissedCallsReturn";
import { RequestsSwitchboard } from "@/app/_lrh/RequestsSwitchboard";
import { buildSEO } from "@/lib/seo/metadata";

export const metadata = buildSEO({
  title: "Lead Response Automation for Service Businesses",
  description:
    "Lead response automation for clinics and service businesses, connecting missed calls, forms and messages to acknowledgement, routing and human ownership.",
  path: "/services/lead-response-handling",
  // Draft route: not in navigation, not in the sitemap, not indexed until
  // release is explicitly authorised.
  noindex: true,
});

export default function LeadResponseHandlingPage() {
  return (
    <>
      <LrhHero />
      <LrhOwnershipGap />
      <LrhAcknowledgement />
      <LrhRoutes />
      <MissedCallsReturn />
      <RequestsSwitchboard />
      <LrhContext />
      <LrhHandoff />
      <LrhAutomation />
      <LrhSetup />
      <LrhFit />
      <LrhFaq />
      <LrhClosing />

      <LrhMotion />
    </>
  );
}
