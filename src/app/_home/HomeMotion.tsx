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

        // GSAP warns on an empty target set, and a hero variant may legitimately
        // have no artifacts or no journey rail — only tween what exists.
        const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        if (heroCopyItems.length > 0) {
          heroTimeline.from(heroCopyItems, {
            autoAlpha: 0.28,
            y: 18,
            duration: 0.68,
            stagger: 0.075,
            clearProps: "opacity,visibility,transform",
          });
        }
        if (heroArtifacts.length > 0) {
          heroTimeline.from(
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
          );
        }
        if (heroJourneyItems.length > 0) {
          heroTimeline.from(
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
        }

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

        const orbitGroups = gsap.utils.toArray<HTMLElement>("[data-home-orbit]");
        orbitGroups.forEach((group) => {
          const rings = nestedItems(group, "data-home-orbit-ring");
          const items = nestedItems(group, "data-home-orbit-item");
          if (rings.length === 0 && items.length === 0) return;

          const orbitTimeline = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: group,
              start: "top 80%",
              once: true,
            },
          });

          if (rings.length > 0) {
            orbitTimeline.from(rings, {
              autoAlpha: 0,
              scale: 0.85,
              duration: 0.6,
              stagger: 0.1,
              clearProps: "opacity,visibility,transform",
            });
          }
          if (items.length > 0) {
            // Items are in reading order (arrive, 01, 02, 03, core), so the
            // stagger traces the same clockwise arrival the copy describes.
            orbitTimeline.from(
              items,
              {
                autoAlpha: 0,
                scale: 0.82,
                y: 10,
                duration: 0.5,
                stagger: 0.12,
                clearProps: "opacity,visibility,transform",
              },
              rings.length > 0 ? "-=0.35" : 0,
            );
          }
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

        // Built to stay useful: the two full-bleed rules draw out from the left
        // and the type rises behind them, so the section assembles its own plate
        // as it arrives. One timeline off the section, not one per element, so
        // the top and bottom rules stay related instead of firing a screen apart.
        //
        // Rest state is the finished composition — the rules carry no transform
        // in CSS — so the script-free and reduced-motion renders show the section
        // complete.
        const lasting = document.querySelector<HTMLElement>("[data-home-lasting]");
        if (lasting) {
          const rules = nestedItems(lasting, "data-home-rule");
          const lines = nestedItems(lasting, "data-home-lasting-item");

          const lastingTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: lasting,
              start: "top 78%",
              once: true,
            },
          });

          if (rules.length > 0) {
            lastingTimeline.from(
              rules,
              {
                scaleX: 0,
                duration: 0.85,
                stagger: 0.12,
                clearProps: "transform",
              },
              0,
            );
          }
          if (lines.length > 0) {
            lastingTimeline.from(
              lines,
              {
                autoAlpha: 0.25,
                y: 18,
                duration: 0.62,
                stagger: 0.09,
                clearProps: "opacity,visibility,transform",
              },
              0.15,
            );
          }
        }

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
