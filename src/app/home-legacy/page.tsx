import "@/styles/pages/home-legacy.css";

import { HomeAttention } from "@/app/_home-legacy/HomeAttention";
import { HomeAuthority } from "@/app/_home-legacy/HomeAuthority";
import { HomeCompounding } from "@/app/_home-legacy/HomeCompounding";
import { HomeContext } from "@/app/_home-legacy/HomeContext";
import { HomeFaq } from "@/app/_home-legacy/HomeFaq";
import { HomeHero } from "@/app/_home-legacy/HomeHero";
import { HomeClosing, HomeFit, HomeReview } from "@/app/_home-legacy/HomeJourney";
import { HomeMotion } from "@/app/_home-legacy/HomeMotion";
import {
  HomeAfterEnquiry,
  HomeBeyondWebsite,
  HomeDistance,
  HomeOneSystem,
} from "@/app/_home-legacy/HomeSystems";
import { HomeWork } from "@/app/_home-legacy/HomeWork";
import { buildSEO } from "@/lib/seo/metadata";

/**
 * Frozen visual comparison copy of the accepted pre-redesign Homepage
 * (git tag `homepage-v1`). Its classes are namespaced `hl-` so later work on
 * the live Homepage cannot alter it. Not a public route: excluded from
 * LIVE_ROUTES, navigation and the sitemap, and served noindex.
 */
export const metadata = buildSEO({
  title: "Homepage (legacy comparison)",
  description: "Internal visual comparison copy of the pre-redesign MindWP homepage.",
  path: "/home-legacy",
  noindex: true,
});

export default function HomeLegacyPage() {
  return (
    <>
      <HomeHero />
      <HomeAttention />
      <HomeDistance />
      <HomeAfterEnquiry />
      <HomeOneSystem />
      <HomeBeyondWebsite />
      <HomeAuthority />
      <HomeWork />
      <HomeContext />
      <HomeCompounding />
      <HomeFit />
      <HomeReview />
      <HomeFaq />
      <HomeClosing />
      <HomeMotion />
    </>
  );
}
