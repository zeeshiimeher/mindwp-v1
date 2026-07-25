"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

/**
 * Page-level reveal choreography for Lead Response & Handling.
 *
 * Same contract as the Homepage's motion controller — groups opt in through
 * data attributes rather than components importing an animation API — with one
 * addition this page needs: `[data-lrh-draw]` drives a `--lrh-draw` custom
 * property from 0 to 1 once on entry, so a stroke that carries meaning (the
 * acknowledged track in Missed Calls, the firming rule in Response Setup) can
 * draw itself in CSS without a second observer per section.
 *
 * Every animated state is a *from* tween with `clearProps`, so the rendered
 * DOM without JS — and under reduced motion, where nothing is registered — is
 * already the finished composition.
 */
function nestedItems(group: HTMLElement, attribute: string) {
  return Array.from(group.querySelectorAll<HTMLElement>(`[${attribute}]`));
}

function directItems(group: HTMLElement, attribute: string) {
  return Array.from(group.querySelectorAll<HTMLElement>(`:scope > [${attribute}]`));
}

export function LrhMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let context: ReturnType<typeof gsap.context> | undefined;
    let refreshFrame: number | undefined;

    const configureMotion = () => {
      if (refreshFrame !== undefined) window.cancelAnimationFrame(refreshFrame);
      context?.revert();

      if (reducedMotion.matches) {
        root.dataset.lrhMotion = "reduced";
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      root.dataset.lrhMotion = "active";

      context = gsap.context(() => {
        const heroCopy = document.querySelector<HTMLElement>("[data-lrh-hero-sequence]");
        const heroArtGroup = document.querySelector<HTMLElement>("[data-lrh-hero-artifacts]");
        const heroCopyItems = heroCopy ? nestedItems(heroCopy, "data-lrh-hero-item") : [];
        const heroArtifacts = heroArtGroup
          ? nestedItems(heroArtGroup, "data-lrh-hero-artifact")
          : [];

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
              clearProps: "opacity,visibility,transform",
            },
            "-=0.42",
          );
        }

        gsap.utils.toArray<HTMLElement>("[data-lrh-sequence]").forEach((group) => {
          const items = nestedItems(group, "data-lrh-sequence-item");
          if (items.length === 0) return;

          gsap.from(items, {
            autoAlpha: 0.35,
            y: 18,
            duration: 0.64,
            stagger: 0.075,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: group, start: "top 87%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-lrh-stagger]").forEach((group) => {
          const items = directItems(group, "data-lrh-stagger-item");
          if (items.length === 0) return;

          gsap.from(items, {
            autoAlpha: 0.3,
            y: 14,
            duration: 0.58,
            stagger: 0.065,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: group, start: "top 89%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-lrh-fade]").forEach((item) => {
          gsap.from(item, {
            autoAlpha: 0.45,
            y: 12,
            duration: 0.54,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: item, start: "top 91%", once: true },
          });
        });

        // Meaning-bearing strokes: the line itself is the argument, so it is
        // drawn rather than faded, and only once.
        gsap.utils.toArray<HTMLElement>("[data-lrh-draw]").forEach((item) => {
          gsap.fromTo(
            item,
            { "--lrh-draw": 0 },
            {
              "--lrh-draw": 1,
              duration: 1.15,
              ease: "power2.inOut",
              scrollTrigger: { trigger: item, start: "top 82%", once: true },
            },
          );
        });
      }, document.body);

      refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    configureMotion();
    reducedMotion.addEventListener("change", configureMotion);

    return () => {
      reducedMotion.removeEventListener("change", configureMotion);
      if (refreshFrame !== undefined) window.cancelAnimationFrame(refreshFrame);
      context?.revert();
      delete root.dataset.lrhMotion;
    };
  }, []);

  return null;
}
