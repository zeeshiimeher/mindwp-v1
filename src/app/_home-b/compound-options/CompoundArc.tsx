"use client";

import { gsap } from "gsap";
import { useRef } from "react";

import { Icon } from "@/components/ui/Icon";

import { CompoundHeader } from "./CompoundHeader";
import { COMPOUND_CLOSE, COMPOUNDERS, LAUNCH_NODE } from "./data";
import { usePlayOnVisible } from "./usePlayOnVisible";

/** Node placements along the top semicircle (percent of the 400×220 frame). */
const NODE_POS = [
  { x: 12.1, y: 55.8 },
  { x: 34.4, y: 19.0 },
  { x: 65.7, y: 19.0 },
  { x: 87.9, y: 55.8 },
] as const;

/**
 * Option 2 — Accumulation arc.
 * A qualitative sweep — launch to "keeps building" — that draws in and lights
 * each compounding factor as it passes. No numbers; accumulation made visible.
 */
export function CompoundArc() {
  const stageRef = useRef<HTMLDivElement>(null);

  usePlayOnVisible(
    stageRef,
    () => {
      const stage = stageRef.current;
      if (!stage) return;
      const fill = stage.querySelector<SVGPathElement>(".cxa-fill");
      const nodes = gsap.utils.toArray<HTMLElement>(".cxa-node", stage);
      if (!fill || nodes.length === 0) return;

      const len = fill.getTotalLength();
      nodes.forEach((node) => node.classList.add("is-dim"));
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.set(fill, { strokeDasharray: len, strokeDashoffset: len });
      tl.to(fill, { strokeDashoffset: 0, duration: 1.7, ease: "none" });

      nodes.forEach((node, i) => {
        const dot = node.querySelector(".cxa-node__dot");
        tl.call(() => node.classList.remove("is-dim"), undefined, 0.25 + i * 0.36)
          .fromTo(dot, { scale: 1 }, { scale: 1.16, duration: 0.18 }, "<")
          .to(dot, { scale: 1, duration: 0.2 });
      });

      return () => {
        tl.kill();
        nodes.forEach((node) => node.classList.remove("is-dim"));
      };
    },
    [],
  );

  return (
    <section id="compound-arc" className="section cx cxa">
      <CompoundHeader />

      <div className="container cxa-stage" ref={stageRef} data-home-b-fade>
        <div className="cxa-frame">
          <svg className="cxa-arc" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <path className="cxa-track" d="M30 200 A170 170 0 0 1 370 200" />
            <path className="cxa-fill" d="M30 200 A170 170 0 0 1 370 200" />
          </svg>

          <span className="cxa-end cxa-end--start">Launch day</span>
          <span className="cxa-end cxa-end--finish">Keeps building</span>

          {COMPOUNDERS.map((item, i) => (
            <div
              key={item.label}
              className="cxa-node"
              style={{ left: `${NODE_POS[i].x}%`, top: `${NODE_POS[i].y}%` }}
            >
              <span className="cxa-node__dot">
                <Icon name={item.icon} size={18} />
              </span>
              <span className="cxa-node__label">{item.short}</span>
            </div>
          ))}

          <span className="cxa-base" aria-hidden="true">
            <Icon name={LAUNCH_NODE.icon} size={18} />
          </span>
        </div>

        <p className="cxa-close">{COMPOUND_CLOSE}</p>
      </div>
    </section>
  );
}
