"use client";

import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import { STATION_PROGRESS } from "@/app/_home/compoundGeometry";

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

      gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);
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

        // Compounding: above 64rem one enquiry travels the circuit while the
        // section passes through the viewport. Everything hangs off that single
        // journey — each trace draws, each station lights as the enquiry reaches
        // it, and its entry in the ledger fills — because the accumulation is the
        // section's argument and it has to be tied to travel rather than played on
        // arrival.
        //
        // Station progress values come from the artwork's own geometry, so a
        // station lights at the moment the enquiry is actually on it.
        //
        // Everything rests complete, so the script-free and reduced-motion renders
        // keep the finished circuit. Below 64rem the section is a numbered
        // sequence and has nothing to travel.
        motionMedia?.add("(min-width: 64rem)", () => {
          const circuit = document.querySelector<HTMLElement>("[data-home-circuit]");
          const rail = circuit?.querySelector<SVGPathElement>("#cmpd-loop");
          const token = circuit?.querySelector<SVGCircleElement>("[data-home-token]");
          if (!circuit || !rail || !token) return;

          const traces = Array.from(circuit.querySelectorAll<SVGPathElement>("[data-home-trace]"));
          const stations = nestedItems(circuit, "data-home-station");
          const assets = nestedItems(circuit, "data-home-asset");
          const progress = stations.map((_, index) =>
            Number(STATION_PROGRESS[index] ?? (index + 1) / stations.length),
          );

          gsap.set([...stations, ...assets], { "--lit": 0 });
          gsap.set(traces, { drawSVG: "0%" });

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: circuit,
              start: "top 76%",
              end: "bottom 64%",
              scrub: 0.55,
            },
          });

          // One unit of timeline is one lap, so a station's progress fraction is
          // also its position in the timeline.
          timeline.to(
            token,
            {
              motionPath: { path: rail, align: rail, alignOrigin: [0.5, 0.5], start: 0, end: 1 },
              duration: 1,
            },
            0,
          );

          traces.forEach((trace) => {
            const lap = Number(trace.dataset.lap ?? 0);
            // The base trace is drawn by the enquiry itself; the outer two are the
            // body the route gains, so they follow from the turns.
            timeline.to(trace, { drawSVG: "100%", duration: lap === 0 ? 1 : 0.55 }, lap * 0.34);
          });

          stations.forEach((station, index) => {
            timeline.to(station, { "--lit": 1, duration: 0.06 }, progress[index]);
          });

          assets.forEach((asset, index) => {
            timeline.to(asset, { "--lit": 1, duration: 0.08 }, progress[index]);
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
