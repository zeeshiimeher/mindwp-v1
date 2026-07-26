import "@/styles/pages/lrh.css";
import "@/styles/pages/lrh-rebuild.css";

import { LrhAcknowledgement } from "@/app/_lrh/LrhAcknowledgement";
import { LrhContext } from "@/app/_lrh/LrhContext";
import { LrhFaq } from "@/app/_lrh/LrhFaq";
import { LrhAutomation, LrhHandoff } from "@/app/_lrh/LrhHandoff";
import { LrhHero } from "@/app/_lrh/LrhHero";
import { LrhClosing, LrhFit } from "@/app/_lrh/LrhJourney";
import { LrhMissedCalls } from "@/app/_lrh/LrhMissedCalls";
import { LrhMotion } from "@/app/_lrh/LrhMotion";
import { LrhOwnershipGap } from "@/app/_lrh/LrhOwnershipGap";
import { LrhRequests } from "@/app/_lrh/LrhRequests";
import { LrhRoutes } from "@/app/_lrh/LrhRoutes";
import { LrhSetup } from "@/app/_lrh/LrhSetup";
import { ContextForm } from "@/app/_lrh/rebuild/ContextForm";
import { ContextThreshold } from "@/app/_lrh/rebuild/ContextThreshold";
import { MissedCallsLedger } from "@/app/_lrh/rebuild/MissedCallsLedger";
import { MissedCallsReturn } from "@/app/_lrh/rebuild/MissedCallsReturn";
import { OwnershipHandover } from "@/app/_lrh/rebuild/OwnershipHandover";
import { OwnershipNamed } from "@/app/_lrh/rebuild/OwnershipNamed";
import { RequestsSlips } from "@/app/_lrh/rebuild/RequestsSlips";
import { RequestsSwitchboard } from "@/app/_lrh/rebuild/RequestsSwitchboard";
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

      {/* Rebuilt sections 5, 6, 7 and 8, two complete designs each. Each one is
          drop-in: lift the component and its stylesheet block into place and
          delete the section it replaces. Everything from here down comes out
          once the four directions are chosen. */}
      <MissedCallsLedger />
      <LrhMissedCalls />
      <LrhRequests />
      <RequestsSlips />
      <ContextForm />
      <ContextThreshold />
      <OwnershipHandover />
      <OwnershipNamed />

      <LrhMotion />
    </>
  );
}
