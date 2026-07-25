"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

/**
 * The page's single motion island.
 *
 * Two jobs. It runs the shared annotation-motion language — copy settles, notes
 * arrive in sequence — and it arms the CSS scenes so they can play once when
 * they enter view.
 *
 * Arming matters for correctness, not polish. Every scene's base CSS is the
 * finished state, so without JavaScript or with reduced motion the page renders
 * complete. `data-sws-motion="active"` is only ever set here, and only when
 * motion is allowed, which is what lets the CSS hide a scene's moving parts
 * before their one-shot animation runs instead of popping backwards.
 *
 * Nothing on this page loops except the hero.
 */

function nestedItems(group: HTMLElement, attribute: string) {
  return Array.from(group.querySelectorAll<HTMLElement>(`[${attribute}]`));
}

function directItems(group: HTMLElement, attribute: string) {
  return Array.from(group.querySelectorAll<HTMLElement>(`:scope > [${attribute}]`));
}

export function SwsMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let context: ReturnType<typeof gsap.context> | undefined;
    let refreshFrame: number | undefined;

    const configureMotion = () => {
      if (refreshFrame !== undefined) window.cancelAnimationFrame(refreshFrame);
      context?.revert();
      document
        .querySelectorAll<HTMLElement>("[data-sws-scene]")
        .forEach((scene) => delete scene.dataset.scene);

      if (reducedMotion.matches) {
        root.dataset.swsMotion = "reduced";
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      root.dataset.swsMotion = "active";

      context = gsap.context(() => {
        const heroCopy = document.querySelector<HTMLElement>("[data-sws-hero-sequence]");
        const heroArt = document.querySelector<HTMLElement>("[data-sws-hero-art]");
        const heroRail = document.querySelector<HTMLElement>("[data-sws-hero-rail]");

        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        const heroItems = heroCopy ? nestedItems(heroCopy, "data-sws-hero-item") : [];
        if (heroItems.length > 0) {
          timeline.from(heroItems, {
            autoAlpha: 0.26,
            y: 18,
            duration: 0.68,
            stagger: 0.075,
            clearProps: "opacity,visibility,transform",
          });
        }
        if (heroArt) {
          timeline.from(
            heroArt,
            {
              autoAlpha: 0.2,
              y: 16,
              scale: 0.988,
              duration: 0.72,
              clearProps: "opacity,visibility,transform",
            },
            "-=0.46",
          );
        }
        const railItems = heroRail ? nestedItems(heroRail, "data-sws-hero-item") : [];
        if (railItems.length > 0) {
          timeline.from(
            railItems,
            {
              autoAlpha: 0.3,
              y: 12,
              duration: 0.52,
              stagger: 0.055,
              clearProps: "opacity,visibility,transform",
            },
            "-=0.3",
          );
        }

        gsap.utils.toArray<HTMLElement>("[data-sws-sequence]").forEach((group) => {
          const items = nestedItems(group, "data-sws-item");
          if (items.length === 0) return;
          gsap.from(items, {
            autoAlpha: 0.32,
            y: 18,
            duration: 0.64,
            stagger: 0.075,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: group, start: "top 87%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-sws-stagger]").forEach((group) => {
          const items = directItems(group, "data-sws-stagger-item");
          if (items.length === 0) return;
          gsap.from(items, {
            autoAlpha: 0.28,
            y: 14,
            duration: 0.58,
            stagger: 0.07,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: group, start: "top 89%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-sws-fade]").forEach((item) => {
          gsap.from(item, {
            autoAlpha: 0.45,
            y: 12,
            duration: 0.54,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: item, start: "top 91%", once: true },
          });
        });

        // The drawn scenes play themselves in CSS; this only says when.
        gsap.utils.toArray<HTMLElement>("[data-sws-scene]").forEach((scene) => {
          ScrollTrigger.create({
            trigger: scene,
            start: "top 82%",
            once: true,
            onEnter: () => {
              scene.dataset.scene = "in";
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
      context?.revert();
      delete root.dataset.swsMotion;
    };
  }, []);

  return null;
}
