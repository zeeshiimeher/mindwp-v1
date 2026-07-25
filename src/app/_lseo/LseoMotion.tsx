"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function directItems(group: HTMLElement, attribute: string) {
  return Array.from(group.querySelectorAll<HTMLElement>(`:scope > [${attribute}]`));
}

/**
 * Entrance choreography for the variant. Every tween is a `from` off a visible
 * resting state, so the finished page is what renders without JS; reduced
 * motion reverts the context entirely rather than shortening durations.
 */
export function LseoMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let context: ReturnType<typeof gsap.context> | undefined;
    let refreshFrame: number | undefined;

    const configure = () => {
      if (refreshFrame !== undefined) window.cancelAnimationFrame(refreshFrame);
      context?.revert();

      if (reducedMotion.matches) {
        root.dataset.lsaMotion = "reduced";
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      root.dataset.lsaMotion = "active";

      context = gsap.context(() => {
        const heroCopy = document.querySelector<HTMLElement>("[data-lsa-hero-sequence]");
        const heroArtifact = document.querySelector<HTMLElement>(
          "[data-lsa-hero-artifact-sequence]",
        );
        const heroCopyItems = heroCopy ? directItems(heroCopy, "data-lsa-sequence-item") : [];
        const heroArtifactItems = heroArtifact
          ? directItems(heroArtifact, "data-lsa-hero-artifact-item")
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

        const introSequences = gsap.utils.toArray<HTMLElement>("[data-lsa-sequence]");
        introSequences.forEach((group) => {
          const items = directItems(group, "data-lsa-sequence-item");
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

        const staggerGroups = gsap.utils.toArray<HTMLElement>("[data-lsa-stagger]");
        staggerGroups.forEach((group) => {
          const items = [
            ...directItems(group, "data-lsa-stagger-item"),
            ...Array.from(
              group.querySelectorAll<HTMLElement>(":scope > * > [data-lsa-stagger-item]"),
            ),
          ];
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

        const accentItems = gsap.utils.toArray<HTMLElement>("[data-lsa-fade]");
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
      }, document.body);

      refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    configure();
    reducedMotion.addEventListener("change", configure);

    return () => {
      reducedMotion.removeEventListener("change", configure);
      if (refreshFrame !== undefined) window.cancelAnimationFrame(refreshFrame);
      context?.revert();
      delete root.dataset.lsaMotion;
    };
  }, []);

  return null;
}
