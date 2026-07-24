import "@/styles/pages/home-b.css";

import type { Metadata } from "next";

import { BeyondWebsiteOptions } from "@/app/_home-b/beyond-options/BeyondWebsiteOptions";
import { CompoundOptions } from "@/app/_home-b/compound-options/CompoundOptions";
import { HomeAttention } from "@/app/_home-b/HomeAttention";
import { HomeAuthority } from "@/app/_home-b/HomeAuthority";
import { HomeContext } from "@/app/_home-b/HomeContext";
import { HomeFaq } from "@/app/_home-b/HomeFaq";
import { HomeHero } from "@/app/_home-b/HomeHero";
import { HomeClosing, HomeFit, HomeReview } from "@/app/_home-b/HomeJourney";
import { HomeMotion } from "@/app/_home-b/HomeMotion";
import {
  HomeAfterEnquiry,
  HomeBeyondWebsite,
  HomeDistance,
  HomeOneSystem,
} from "@/app/_home-b/HomeSystems";
import { HomeWork } from "@/app/_home-b/HomeWork";
import { buildSEO } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSEO({
  title: "Home (Draft B)",
  description: "Internal working clone of the Homepage for exploring section redesigns.",
  path: "/home-b",
  noindex: true,
});

export default function HomePageB() {
  return (
    <>
      <HomeHero />
      <HomeAttention />
      <HomeDistance />
      <HomeAfterEnquiry />
      <HomeOneSystem />
      <HomeBeyondWebsite />
      <BeyondWebsiteOptions />
      <HomeAuthority />
      <HomeWork />
      <HomeContext />
      <CompoundOptions />
      <HomeFit />
      <HomeReview />
      <HomeFaq />
      <HomeClosing />
      <HomeMotion />
    </>
  );
}
