import "./home-b.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AfterEnquiryB } from "./_sections/AfterEnquiryB";
import { BeforeEnquiryB } from "./_sections/BeforeEnquiryB";
import { BMotion } from "./_sections/BMotion";
import { ClearOwnershipB } from "./_sections/ClearOwnershipB";
import { ClosingCtaB } from "./_sections/ClosingCtaB";
import { ConnectedPivotB } from "./_sections/ConnectedPivotB";
import { ExistingAttentionB } from "./_sections/ExistingAttentionB";
import { HeroB } from "./_sections/HeroB";
import { ReviewOfferB } from "./_sections/ReviewOfferB";
import { RightFitB } from "./_sections/RightFitB";
import { SelectedWorkB } from "./_sections/SelectedWorkB";
import { SmartWebsiteB } from "./_sections/SmartWebsiteB";
import { StraightAnswersB } from "./_sections/StraightAnswersB";
import { SupportingServicesB } from "./_sections/SupportingServicesB";

/**
 * DRAFT — Homepage Variant B. Isolated design draft, deliberately kept out of
 * navigation, the sitemap (config/routes.ts), indexing (noindex below) and
 * production (env gate). Not linked from any live surface.
 */
export const metadata: Metadata = {
  title: { absolute: "Homepage — Variant B (draft) · MindWP" },
  description: "Internal design draft. Not indexed, not published.",
  robots: { index: false, follow: false },
};

export default function HomeBDraftPage() {
  const draftsEnabled =
    process.env.NODE_ENV !== "production" || process.env.ENABLE_DRAFTS === "true";
  if (!draftsEnabled) notFound();

  return (
    <>
      <HeroB />
      <ExistingAttentionB />
      <BeforeEnquiryB />
      <AfterEnquiryB />
      <ConnectedPivotB />
      <SmartWebsiteB />
      <SupportingServicesB />
      <SelectedWorkB />
      <ClearOwnershipB />
      <RightFitB />
      <ReviewOfferB />
      <StraightAnswersB />
      <ClosingCtaB />
      <BMotion />
    </>
  );
}
