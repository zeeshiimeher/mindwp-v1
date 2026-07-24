"use client";

import { gsap } from "gsap";
import { useRef } from "react";

import { Icon } from "@/components/ui/Icon";

import { CompoundHeader } from "./CompoundHeader";
import { COMPOUND_CLOSE, COMPOUNDERS, LAUNCH_NODE } from "./data";
import { usePlayOnVisible } from "./usePlayOnVisible";

/**
 * Option 1 — Compounding stack.
 * A launched-site base with compounding layers that build upward as it plays,
 * while a value rail rises alongside — accumulation you can see, not a list.
 */
export function CompoundStack() {
  const stageRef = useRef<HTMLDivElement>(null);

  usePlayOnVisible(
    stageRef,
    () => {
      const stage = stageRef.current;
      if (!stage) return;
      const blocks = gsap.utils.toArray<HTMLElement>(".cxs-block", stage);
      const fill = stage.querySelector<HTMLElement>(".cxs-rail__fill");
      if (blocks.length === 0) return;

      const bottomUp = [...blocks].reverse();
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(bottomUp, {
        autoAlpha: 0,
        y: 26,
        duration: 0.5,
        stagger: 0.12,
        clearProps: "opacity,visibility,transform",
      });
      if (fill) {
        tl.from(
          fill,
          { scaleY: 0, duration: bottomUp.length * 0.12 + 0.35, ease: "power2.out" },
          0,
        );
      }

      return () => tl.kill();
    },
    [],
  );

  const layers = [...COMPOUNDERS].reverse();

  return (
    <section id="compound-stack" className="section cx cxs">
      <CompoundHeader />

      <div className="container cxs-stage" ref={stageRef} data-home-b-fade>
        <div className="cxs-panel">
          <div className="cxs-rail" aria-hidden="true">
            <span className="cxs-rail__arrow">
              <Icon name="arrow-right" size={14} />
            </span>
            <span className="cxs-rail__track" />
            <span className="cxs-rail__fill" />
          </div>

          <ol className="cxs-stack">
            {layers.map((item) => (
              <li key={item.label} className="cxs-block">
                <span className="cxs-block__plus" aria-hidden="true">
                  +
                </span>
                <span className="cxs-block__icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <div className="cxs-block__text">
                  <strong>{item.label}</strong>
                  <small>{item.note}</small>
                </div>
              </li>
            ))}
            <li className="cxs-block cxs-block--base">
              <span className="cxs-block__icon cxs-block__icon--base">
                <Icon name={LAUNCH_NODE.icon} size={20} />
              </span>
              <div className="cxs-block__text">
                <strong>{LAUNCH_NODE.label}</strong>
                <small>{LAUNCH_NODE.note}</small>
              </div>
            </li>
          </ol>
        </div>

        <p className="cxs-close">{COMPOUND_CLOSE}</p>
      </div>
    </section>
  );
}
