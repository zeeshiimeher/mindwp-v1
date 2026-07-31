"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

/**
 * Page entry and section reveal for Smart Website Systems.
 *
 * This is the shared foundational convention (docs/ENGINEERING.md) applied to
 * this route's own attributes: the hero resolves on load, everything else
 * reveals once as it arrives. Targets are namespaced `data-sws-*` so page
 * motion can never reach the shared shell, and the whole context reverts on
 * unmount or when the reduced-motion preference changes.
 *
 * Rest state is the finished composition. Nothing here is required to read the
 * page — with motion reduced or JavaScript unavailable, every section is
 * already in its settled state.
 */
function items(group: HTMLElement, attribute: string) {
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

      if (reducedMotion.matches) {
        root.dataset.swsMotion = "reduced";
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      root.dataset.swsMotion = "active";
      context = gsap.context(() => {
        const heroCopy = document.querySelector<HTMLElement>("[data-sws-hero-sequence]");
        const heroArtGroup = document.querySelector<HTMLElement>("[data-sws-hero-artifacts]");
        const heroCopyItems = heroCopy ? items(heroCopy, "data-sws-hero-item") : [];
        const heroArtifacts = heroArtGroup ? items(heroArtGroup, "data-sws-hero-artifact") : [];

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
              duration: 0.6,
              clearProps: "opacity,visibility,transform",
            },
            "-=0.44",
          );
        }

        gsap.utils.toArray<HTMLElement>("[data-sws-sequence]").forEach((group) => {
          const targets = items(group, "data-sws-sequence-item");
          if (targets.length === 0) return;

          gsap.from(targets, {
            autoAlpha: 0.35,
            y: 18,
            duration: 0.64,
            stagger: 0.075,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: group, start: "top 87%", once: true },
          });
        });

        // The one scrubbed moment on the page. Only the routes are tied to the
        // scrub: a drawn line that redraws when the reader scrolls back up
        // reads as the diagram responding, whereas copy that fades out again
        // reads as a bug — so the chips and the record use the ordinary
        // one-shot reveal instead.
        const converge = document.querySelector<HTMLElement>("[data-sws-converge]");
        if (converge) {
          const chips = items(converge, "data-sws-converge-chip");
          const routes = items(converge, "data-sws-converge-path");
          const target = converge.querySelector<HTMLElement>("[data-sws-converge-target]");

          if (chips.length > 0) {
            gsap.from(chips, {
              autoAlpha: 0.25,
              x: -18,
              duration: 0.6,
              stagger: 0.09,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
              scrollTrigger: { trigger: converge, start: "top 82%", once: true },
            });
          }

          if (target) {
            gsap.from(target, {
              autoAlpha: 0.25,
              scale: 0.975,
              duration: 0.7,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
              scrollTrigger: { trigger: converge, start: "top 70%", once: true },
            });
          }

          if (routes.length > 0) {
            gsap.from(routes, {
              strokeDashoffset: 1,
              duration: 1,
              stagger: 0.12,
              ease: "none",
              scrollTrigger: {
                trigger: converge,
                start: "top 76%",
                end: "bottom 78%",
                scrub: 0.4,
              },
            });
          }
        }

        gsap.utils.toArray<HTMLElement>("[data-sws-fade]").forEach((item) => {
          gsap.from(item, {
            autoAlpha: 0.4,
            y: 14,
            duration: 0.62,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: item, start: "top 90%", once: true },
          });
        });

        // Hairline rules draw out from the left rather than fading: a ledger
        // that rules itself as it arrives. Rest state is the finished rule, so
        // the script-free and reduced-motion renders show every row complete.
        gsap.utils.toArray<HTMLElement>("[data-sws-rules]").forEach((group) => {
          const rules = items(group, "data-sws-rule");
          if (rules.length === 0) return;

          gsap.from(rules, {
            scaleX: 0,
            duration: 0.8,
            stagger: 0.06,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: { trigger: group, start: "top 88%", once: true },
          });
        });

        // Drift, then realignment. Each ring starts at the offset its own ghost
        // still marks and eases back onto the shared centre — slow and without
        // overshoot, because the section is describing something that happened
        // gradually rather than something springing into place.
        const alignment = document.querySelector<HTMLElement>("[data-sws-align]");
        if (alignment) {
          const rings = items(alignment, "data-sws-align-ring");
          const vectors = items(alignment, "data-sws-align-vector");

          const timeline = gsap.timeline({
            scrollTrigger: { trigger: alignment, start: "top 76%", once: true },
          });

          if (vectors.length > 0) {
            timeline.from(vectors, {
              autoAlpha: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
              clearProps: "opacity,visibility",
            });
          }
          if (rings.length > 0) {
            timeline.from(
              rings,
              {
                x: (_index, target: HTMLElement) => Number(target.dataset.driftX ?? 0),
                y: (_index, target: HTMLElement) => Number(target.dataset.driftY ?? 0),
                duration: 1.5,
                stagger: 0.16,
                ease: "power2.inOut",
                clearProps: "transform",
              },
              0.4,
            );
          }
        }

        gsap.utils.toArray<HTMLElement>("[data-sws-stagger]").forEach((group) => {
          const targets = directItems(group, "data-sws-stagger-item");
          if (targets.length === 0) return;

          gsap.from(targets, {
            autoAlpha: 0.3,
            y: 14,
            duration: 0.58,
            stagger: 0.065,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: group, start: "top 89%", once: true },
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
