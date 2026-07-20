import "@/styles/pages/home.css";

import { HomeAuthority } from "@/app/_home/HomeAuthority";
import { HomeContext } from "@/app/_home/HomeContext";
import { HomeFaq } from "@/app/_home/HomeFaq";
import { HomeHero } from "@/app/_home/HomeHero";
import {
  HomeBuilders,
  HomeClosing,
  HomeCompoundingSection,
  HomeFit,
  HomeReview,
} from "@/app/_home/HomeJourney";
import { HomeLeaks } from "@/app/_home/HomeLeaks";
import { HomeMotion } from "@/app/_home/HomeMotion";
import {
  HomeCertainty,
  HomeDistance,
  HomeFiveSystems,
  HomeOneSystem,
} from "@/app/_home/HomeSystems";
import { HomeWork } from "@/app/_home/HomeWork";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeLeaks />
      <HomeDistance />
      <HomeCertainty />
      <HomeOneSystem />
      <HomeFiveSystems />
      <HomeAuthority />
      <HomeWork />
      <HomeContext />
      <HomeCompoundingSection />
      <HomeBuilders />
      <HomeFit />
      <HomeReview />
      <HomeFaq />
      <HomeClosing />
      <HomeMotion />
    </>
  );
}
