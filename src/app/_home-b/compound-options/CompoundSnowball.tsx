"use client";

import { gsap } from "gsap";
import { useRef } from "react";

import { Icon } from "@/components/ui/Icon";

import { CompoundHeader } from "./CompoundHeader";
import { COMPOUND_CLOSE, COMPOUNDERS, LAUNCH_NODE } from "./data";
import { usePlayOnVisible } from "./usePlayOnVisible";

/** Direction each chip gathers in from (positions live in CSS via cxb-chip--N). */
const CHIP_FROM = [
  { x: 0, y: -30 },
  { x: 30, y: 0 },
  { x: 0, y: 30 },
  { x: -30, y: 0 },
] as const;

/**
 * Option 3 — The snowball.
 * The launched site is a core that gathers real assets over time — proof,
 * presence, refinements, channel returns — growing and glowing as each attaches.
 */
export function CompoundSnowball() {
  const stageRef = useRef<HTMLDivElement>(null);

  usePlayOnVisible(
    stageRef,
    () => {
      const stage = stageRef.current;
      if (!stage) return;
      const core = stage.querySelector<HTMLElement>(".cxb-core");
      const glow = stage.querySelector<HTMLElement>(".cxb-core__glow");
      const chips = gsap.utils.toArray<HTMLElement>(".cxb-chip", stage);
      if (!core || chips.length === 0) return;

      chips.forEach((chip) => chip.classList.add("is-dim"));
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(core, { scale: 0.82 }, { scale: 1, duration: 1.5 }, 0);
      if (glow) tl.fromTo(glow, { opacity: 0.12, scale: 0.7 }, { opacity: 0.5, scale: 1, duration: 1.5 }, 0);

      chips.forEach((chip, i) => {
        const at = 0.35 + i * 0.3;
        tl.call(() => chip.classList.remove("is-dim"), undefined, at).fromTo(
          chip,
          { autoAlpha: 0, scale: 0.6, x: CHIP_FROM[i].x, y: CHIP_FROM[i].y },
          { autoAlpha: 1, scale: 1, x: 0, y: 0, duration: 0.5 },
          at,
        );
      });

      return () => {
        tl.kill();
        chips.forEach((chip) => chip.classList.remove("is-dim"));
      };
    },
    [],
  );

  return (
    <section id="compound-snowball" className="section cx cxb">
      <CompoundHeader />

      <div className="container cxb-stage" ref={stageRef} data-home-b-fade>
        <div className="cxb-field">
          <span className="cxb-core">
            <span className="cxb-core__glow" aria-hidden="true" />
            <span className="cxb-core__glyph">
              <Icon name={LAUNCH_NODE.icon} size={24} />
            </span>
            <small>Your site</small>
          </span>

          {COMPOUNDERS.map((item, i) => (
            <div key={item.label} className={`cxb-chip cxb-chip--${i}`}>
              <span className="cxb-chip__icon">
                <Icon name={item.icon} size={16} />
              </span>
              <span className="cxb-chip__label">{item.short}</span>
            </div>
          ))}
        </div>

        <p className="cxb-close">{COMPOUND_CLOSE}</p>
      </div>
    </section>
  );
}
