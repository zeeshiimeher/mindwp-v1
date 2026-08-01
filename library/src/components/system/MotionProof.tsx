"use client";

import "./motion-proof.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * System check C — GSAP, ScrollTrigger, scope cleanup and reduced motion.
 *
 * Proves four things at once:
 *
 *   1. GSAP loads and animates inside a Client Component;
 *   2. `ScrollTrigger` registers and can pin a bounded stage;
 *   3. every tween, trigger and pin spacer is created inside a scope that is
 *      fully reverted on unmount, so nothing leaks into the catalogue shell;
 *   4. the reduced-motion branch produces a stable, complete result — the same
 *      three panels, readable in normal flow, with no pin and no scrub.
 *
 * The static arrangement is what renders first and what renders without
 * JavaScript. Motion is added afterwards, never depended on.
 *
 * Uses GSAP's official React integration. `useGSAP` runs the callback inside a
 * `gsap.context()` scoped to `rootRef` and reverts that context on unmount,
 * which is what removes the timeline, the ScrollTrigger and its pin spacer when
 * the route changes. The `matchMedia` instance is created inside that context,
 * so it is collected and reverted with it — behaviour that is asserted rather
 * than assumed, in the cleanup check that accompanies this file.
 *
 * Technical verification only. Not a section, and not a first component.
 */

const PANELS = [
  {
    label: "Bounded",
    title: "The pin has an end",
    body: "The stage pins for two extra viewport heights and releases. Scroll before and after the section is untouched, and the catalogue shell never moves.",
  },
  {
    label: "Scoped",
    title: "Everything reverts",
    body: "Tweens, the timeline, the trigger and the pin spacer are created inside a matchMedia scope. Leaving the route reverts the scope and removes all of it.",
  },
  {
    label: "Optional",
    title: "Motion is the enhancement",
    body: "Reduced motion resolves to this same set of panels, stacked and fully readable. Nothing is revealed by scrolling that is otherwise hidden.",
  },
] as const;

export function MotionProof() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const stage = stageRef.current;
      if (!root || !stage) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const panels = gsap.utils.toArray<HTMLElement>(".motion-panel", root);
        const rails = gsap.utils.toArray<HTMLElement>(".motion-rail > li", root);
        if (panels.length === 0) return;

        root.dataset.motion = "on";

        // Absolute positioning only exists in the animated branch, so the resting
        // state has to be established here rather than in CSS.
        gsap.set(panels, { autoAlpha: 0, yPercent: 6 });
        gsap.set(panels[0], { autoAlpha: 1, yPercent: 0 });
        gsap.set(rails, { "--rail-progress": 0 });
        gsap.set(rails[0], { "--rail-progress": 1 });

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: `+=${(panels.length - 1) * 100}%`,
            pin: stage,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.5,
          },
        });

        panels.forEach((panel, index) => {
          if (index === 0) return;
          const previous = panels[index - 1];
          timeline
            .to(previous, { autoAlpha: 0, yPercent: -6 }, index - 1)
            .to(rails[index - 1], { "--rail-progress": 0 }, index - 1)
            .to(panel, { autoAlpha: 1, yPercent: 0 }, index - 1)
            .to(rails[index], { "--rail-progress": 1 }, index - 1);
        });

        // Returned cleanup runs when the query stops matching and on revert, so
        // the static branch is restored rather than left half-animated.
        return () => {
          root.dataset.motion = "off";
        };
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        root.dataset.motion = "off";
      });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="motion-proof on-dark bg-navy" data-motion="off">
      <div ref={stageRef} className="motion-stage py-step-9">
        <div className="mx-auto w-full max-w-content px-page-margin">
          <p className="eyebrow">System check C</p>
          <h2>
            Scroll-led, <em>and still readable standing still.</em>
          </h2>
          <p className="text-lead measure-intro mt-step-4">
            A pinned stage that cycles three panels on scrub. With reduced motion it is three panels
            in a column, saying exactly the same thing.
          </p>

          <div className="motion-panels mt-step-7">
            {PANELS.map((panel) => (
              <article
                key={panel.label}
                className="motion-panel rounded-lg border border-navy-hairline bg-navy-panel p-step-7 shadow-focal-inverse"
              >
                <p className="eyebrow">{panel.label}</p>
                <h3 className="mt-step-3">{panel.title}</h3>
                <p className="measure-copy mt-step-4">{panel.body}</p>
              </article>
            ))}
          </div>

          <ol className="motion-rail mt-step-6">
            {PANELS.map((panel) => (
              <li key={panel.label}>{panel.label}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
