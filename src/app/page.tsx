import "@/styles/pages/home.css";

import { HomeAttention } from "@/app/_home/HomeAttention";
import { HomeAuthority } from "@/app/_home/HomeAuthority";
import { HomeContext } from "@/app/_home/HomeContext";
import { HomeFaq } from "@/app/_home/HomeFaq";
import { HomeHero } from "@/app/_home/HomeHero";
import { HomeClosing, HomeFit, HomeOwnershipSection, HomeReview } from "@/app/_home/HomeJourney";
import { HomeMotion } from "@/app/_home/HomeMotion";
import {
  HomeAfterEnquiry,
  HomeBeyondWebsite,
  HomeDistance,
  HomeOneSystem,
} from "@/app/_home/HomeSystems";
import { HomeWork } from "@/app/_home/HomeWork";

export default function HomePage() {
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
      <HomeOwnershipSection />
      <HomeFit />
      <HomeReview />
      <HomeFaq />
      <HomeClosing />
      <HomeMotion />
    </>
  );
}
