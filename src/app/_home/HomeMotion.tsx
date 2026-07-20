"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function directItems(group: HTMLElement, attribute: string) {
  return Array.from(group.querySelectorAll<HTMLElement>(`:scope > [${attribute}]`));
}

function nestedItems(group: HTMLElement, attribute: string) {
  return Array.from(group.querySelectorAll<HTMLElement>(`[${attribute}]`));
}

export function HomeMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let context: ReturnType<typeof gsap.context> | undefined;
    let motionMedia: ReturnType<typeof gsap.matchMedia> | undefined;
    let refreshFrame: number | undefined;

    const configureMotion = () => {
      if (refreshFrame !== undefined) window.cancelAnimationFrame(refreshFrame);
      motionMedia?.revert();
      context?.revert();

      if (reducedMotion.matches) {
        root.dataset.homeMotion = "reduced";
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      root.dataset.homeMotion = "active";
      motionMedia = gsap.matchMedia();

      context = gsap.context(() => {
        const heroCopy = document.querySelector<HTMLElement>("[data-home-hero-sequence]");
        const heroArtifactGroup = document.querySelector<HTMLElement>("[data-home-hero-artifacts]");
        const heroJourney = document.querySelector<HTMLElement>("[data-home-hero-journey]");
        const heroCopyItems = heroCopy ? nestedItems(heroCopy, "data-home-hero-item") : [];
        const heroArtifacts = heroArtifactGroup
          ? nestedItems(heroArtifactGroup, "data-home-hero-artifact")
          : [];
        const heroJourneyItems = heroJourney ? nestedItems(heroJourney, "data-home-hero-item") : [];

        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(heroCopyItems, {
            autoAlpha: 0.28,
            y: 18,
            duration: 0.68,
            stagger: 0.075,
            clearProps: "opacity,visibility,transform",
          })
          .from(
            heroArtifacts,
            {
              autoAlpha: 0.24,
              y: 14,
              scale: 0.985,
              duration: 0.58,
              stagger: 0.07,
              clearProps: "opacity,visibility,transform",
            },
            "-=0.42",
          )
          .from(
            heroJourneyItems,
            {
              autoAlpha: 0.32,
              y: 12,
              duration: 0.52,
              stagger: 0.055,
              clearProps: "opacity,visibility,transform",
            },
            "-=0.3",
          );

        const sequences = gsap.utils.toArray<HTMLElement>("[data-home-sequence]");
        sequences.forEach((group) => {
          const items = nestedItems(group, "data-home-sequence-item");
          if (items.length === 0) return;

          gsap.from(items, {
            autoAlpha: 0.35,
            y: 18,
            duration: 0.64,
            stagger: 0.075,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: group,
              start: "top 87%",
              once: true,
            },
          });
        });

        const staggerGroups = gsap.utils.toArray<HTMLElement>("[data-home-stagger]");
        staggerGroups.forEach((group) => {
          const items = directItems(group, "data-home-stagger-item");
          if (items.length === 0) return;

          gsap.from(items, {
            autoAlpha: 0.3,
            y: 14,
            duration: 0.58,
            stagger: 0.065,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: group,
              start: "top 89%",
              once: true,
            },
          });
        });

        const accentItems = gsap.utils.toArray<HTMLElement>("[data-home-fade]");
        accentItems.forEach((item) => {
          gsap.from(item, {
            autoAlpha: 0.45,
            y: 12,
            duration: 0.54,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: item,
              start: "top 91%",
              once: true,
            },
          });
        });

        motionMedia?.add("(max-width: 48rem)", () => {
          const journey = document.querySelector<HTMLElement>("[data-home-journey]");
          if (!journey) return;

          gsap.set(journey, {
            "--journey-progress": 0,
            "--journey-progress-position": "0%",
          });
          gsap.to(journey, {
            "--journey-progress": 1,
            "--journey-progress-position": "100%",
            ease: "none",
            scrollTrigger: {
              trigger: journey,
              start: "top 75%",
              end: "bottom 40%",
              scrub: 0.3,
            },
          });
        });
      }, document.body);

      refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    configureMotion();
    reducedMotion.addEventListener("change", configureMotion);

    return () => {
      reducedMotion.removeEventListener("change", configureMotion);
      if (refreshFrame !== undefined) window.cancelAnimationFrame(refreshFrame);
      motionMedia?.revert();
      context?.revert();
      delete root.dataset.homeMotion;
    };
  }, []);

  return null;
}
