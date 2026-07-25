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

/**
 * SWS's own `data-sws-*` reveal contract — a parallel system to Home's
 * `data-home-*` motion, not a shared import, so each page's motion lifecycle
 * stays independently scoped and disposable.
 *
 * Two tiers: the ordinary scroll-triggered fade/stagger baseline (sequence,
 * stagger, fade) gives the page one consistent, restrained rhythm. On top of
 * that, `data-sws-linedraw` is the one deliberately bespoke moment reused
 * across the page's three structural diagrams (Deliberate System, Decision
 * Structure, From Plan to Working System) — a connecting stroke that draws in
 * once, because those three sections are specifically about a connection or
 * threshold becoming visible. Reduced motion and no-JS both resolve to the
 * complete, fully connected static state.
 */
export function SwsMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let context: ReturnType<typeof gsap.context> | undefined;
    let refreshFrame: number | undefined;

    const configureMotion = () => {
      if (refreshFrame !== undefined) window.cancelAnimationFrame(refreshFrame);
      context?.revert();

      if (reducedMotion.matches) {
        root.dataset.swsMotion = "reduced";
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      root.dataset.swsMotion = "active";

      context = gsap.context(() => {
        const heroCopy = document.querySelector<HTMLElement>("[data-sws-hero-sequence]");
        const heroArtifactGroup = document.querySelector<HTMLElement>("[data-sws-hero-artifacts]");
        const heroCopyItems = heroCopy ? nestedItems(heroCopy, "data-sws-hero-item") : [];
        const heroArtifacts = heroArtifactGroup
          ? nestedItems(heroArtifactGroup, "data-sws-hero-artifact")
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
              stagger: 0.07,
              clearProps: "opacity,visibility,transform",
            },
            "-=0.42",
          );
        }

        const sequences = gsap.utils.toArray<HTMLElement>("[data-sws-sequence]");
        sequences.forEach((group) => {
          const items = nestedItems(group, "data-sws-sequence-item");
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

        const staggerGroups = gsap.utils.toArray<HTMLElement>("[data-sws-stagger]");
        staggerGroups.forEach((group) => {
          const items = directItems(group, "data-sws-stagger-item");
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

        const accentItems = gsap.utils.toArray<HTMLElement>("[data-sws-fade]");
        accentItems.forEach((item) => {
          gsap.from(item, {
            autoAlpha: 0.45,
            y: 12,
            duration: 0.54,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: item, start: "top 91%", once: true },
          });
        });

        const diagrams = gsap.utils.toArray<HTMLElement>("[data-sws-linedraw]");
        diagrams.forEach((diagram) => {
          const line = diagram.querySelector<SVGPathElement | SVGLineElement>(
            "[data-sws-linedraw-path]",
          );
          const nodes = nestedItems(diagram, "data-sws-linedraw-node");
          if (!line) return;

          const length =
            "getTotalLength" in line ? (line as SVGPathElement).getTotalLength() : undefined;

          const tl = gsap.timeline({
            scrollTrigger: { trigger: diagram, start: "top 80%", once: true },
          });

          if (length !== undefined) {
            tl.fromTo(
              line,
              { strokeDasharray: length, strokeDashoffset: length },
              { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut" },
            );
          } else {
            tl.from(line, { autoAlpha: 0, duration: 0.6, ease: "power2.out" });
          }

          if (nodes.length > 0) {
            tl.from(
              nodes,
              {
                // Opacity only: these nodes carry their position via an SVG
                // `transform="translate(...)"` attribute, and animating GSAP's
                // own `scale`/CSS `transform` alongside that attribute
                // corrupts the translate once the tween clears — every node
                // collapses toward the same spot. autoAlpha never touches
                // `transform`, so positioning stays intact.
                autoAlpha: 0,
                duration: 0.42,
                stagger: 0.16,
                ease: "power2.out",
                clearProps: "opacity,visibility",
              },
              "-=0.5",
            );
          }
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
