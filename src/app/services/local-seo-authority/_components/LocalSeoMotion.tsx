"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function directItems(group: HTMLElement, attribute: string) {
  return Array.from(group.querySelectorAll<HTMLElement>(`:scope > [${attribute}]`));
}

export function LocalSeoMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let context: ReturnType<typeof gsap.context> | undefined;
    let refreshFrame: number | undefined;

    const configure = () => {
      if (refreshFrame !== undefined) window.cancelAnimationFrame(refreshFrame);
      context?.revert();

      if (reducedMotion.matches) {
        root.dataset.lseoMotion = "reduced";
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      root.dataset.lseoMotion = "active";

      context = gsap.context(() => {
        const heroCopy = document.querySelector<HTMLElement>("[data-lseo-hero-sequence]");
        const heroArtifact = document.querySelector<HTMLElement>(
          "[data-lseo-hero-artifact-sequence]",
        );
        const heroCopyItems = heroCopy ? directItems(heroCopy, "data-lseo-sequence-item") : [];
        const heroArtifactItems = heroArtifact
          ? directItems(heroArtifact, "data-lseo-hero-artifact-item")
          : [];

        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(heroCopyItems, {
            y: 18,
            duration: 0.66,
            stagger: 0.075,
            clearProps: "transform",
          })
          .from(
            heroArtifactItems,
            {
              autoAlpha: 0.35,
              y: 14,
              duration: 0.56,
              stagger: 0.065,
              clearProps: "opacity,visibility,transform",
            },
            "-=0.38",
          );

        const introSequences = gsap.utils.toArray<HTMLElement>("[data-lseo-sequence]");
        introSequences.forEach((group) => {
          const items = directItems(group, "data-lseo-sequence-item");
          if (items.length === 0) return;

          gsap.from(items, {
            autoAlpha: 0.35,
            y: 18,
            duration: 0.64,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: group,
              start: "top 87%",
              once: true,
            },
          });
        });

        const staggerGroups = gsap.utils.toArray<HTMLElement>("[data-lseo-stagger]");
        staggerGroups.forEach((group) => {
          const items = directItems(group, "data-lseo-stagger-item");
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

        const accentItems = gsap.utils.toArray<HTMLElement>("[data-lseo-fade]");
        accentItems.forEach((item) => {
          gsap.from(item, {
            autoAlpha: 0.45,
            y: 12,
            duration: 0.52,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: item,
              start: "top 91%",
              once: true,
            },
          });
        });

        const timelineFill = document.querySelector<HTMLElement>("[data-lseo-timeline-fill]");
        if (timelineFill) {
          gsap.fromTo(
            timelineFill,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1.05,
              ease: "power2.out",
              scrollTrigger: {
                trigger: timelineFill,
                start: "top 88%",
                once: true,
              },
            },
          );
        }
      }, document.body);

      refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    configure();
    reducedMotion.addEventListener("change", configure);

    return () => {
      reducedMotion.removeEventListener("change", configure);
      if (refreshFrame !== undefined) window.cancelAnimationFrame(refreshFrame);
      context?.revert();
      delete root.dataset.lseoMotion;
    };
  }, []);

  return null;
}
