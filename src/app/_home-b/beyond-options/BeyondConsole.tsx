"use client";

import { gsap } from "gsap";
import { type KeyboardEvent, useRef, useState } from "react";

import { Icon } from "@/components/ui/Icon";

import { BeyondHeader } from "./BeyondHeader";
import { BEYOND_CAPABILITIES } from "./data";
import { usePlayOnVisible } from "./usePlayOnVisible";

/**
 * Variant A — Diagnostic console.
 * A full-width segmented control chooses a capability; a wide two-part stage
 * pairs the "gap it closes" narrative with an animated vertical work-flow.
 */
export function BeyondConsole() {
  const [index, setIndex] = useState(0);
  const active = BEYOND_CAPABILITIES[index];
  const flowRef = useRef<HTMLOListElement | null>(null);

  usePlayOnVisible(
    flowRef,
    () => {
      const flow = flowRef.current;
      if (!flow) return;
      const progress = flow.querySelector<HTMLElement>(".bwa-flow__progress");
      const nodes = gsap.utils.toArray<HTMLElement>(".bwa-flow__step", flow);
      if (!progress || nodes.length === 0) return;

      nodes.forEach((node) => node.classList.add("is-dim"));
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.set(progress, { scaleY: 0, transformOrigin: "50% 0%" });

      nodes.forEach((node, i) => {
        const dot = node.querySelector(".bwa-flow__node");
        tl.to(progress, { scaleY: (i + 1) / nodes.length, duration: 0.42, ease: "none" })
          .call(() => node.classList.remove("is-dim"), undefined, ">-0.18")
          .fromTo(dot, { scale: 1 }, { scale: 1.16, duration: 0.18 }, "<")
          .to(dot, { scale: 1, duration: 0.2 });
      });

      return () => {
        tl.kill();
        nodes.forEach((node) => node.classList.remove("is-dim"));
      };
    },
    [index],
  );

  const onKey = (event: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = i;
    if (event.key === "ArrowLeft") next = (i - 1 + BEYOND_CAPABILITIES.length) % BEYOND_CAPABILITIES.length;
    if (event.key === "ArrowRight") next = (i + 1) % BEYOND_CAPABILITIES.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = BEYOND_CAPABILITIES.length - 1;
    setIndex(next);
    const tabs = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    tabs?.[next]?.focus();
  };

  return (
    <section id="beyond-console" className="section on-dark bw bwa">
      <BeyondHeader intro="Pick a capability to see the exact gap it closes — and how the handling becomes something a customer can feel." />

      <div className="container" data-home-b-fade>
        <div
          className="bwa-segments"
          role="tablist"
          aria-label="Optional support beyond the website"
        >
          {BEYOND_CAPABILITIES.map((cap, i) => (
            <button
              key={cap.slug}
              type="button"
              role="tab"
              id={`bwa-tab-${cap.slug}`}
              aria-controls="bwa-stage"
              aria-selected={i === index}
              tabIndex={i === index ? 0 : -1}
              className={`bwa-segment${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
              onKeyDown={(event) => onKey(event, i)}
            >
              <span className="bwa-segment__icon">
                <Icon name={cap.icon} size={18} />
              </span>
              <span className="bwa-segment__text">
                <small>{cap.tag}</small>
                <strong>{cap.displayName}</strong>
              </span>
            </button>
          ))}
        </div>

        <article
          className="bwa-stage"
          role="tabpanel"
          id="bwa-stage"
          aria-labelledby={`bwa-tab-${active.slug}`}
          tabIndex={0}
          key={active.slug}
        >
          <div className="bwa-stage__narrative">
            <span className="bwa-stage__badge">
              <Icon name={active.icon} size={20} />
            </span>
            <h3>{active.displayName}</h3>

            <div className="bwa-contrast">
              <div className="bwa-contrast__row bwa-contrast__row--gap">
                <span aria-hidden="true">×</span>
                <div>
                  <small>The gap today</small>
                  <p>{active.problem}</p>
                </div>
              </div>
              <div className="bwa-contrast__row bwa-contrast__row--fix">
                <span aria-hidden="true">✓</span>
                <div>
                  <small>What it changes</small>
                  <p>{active.promise}</p>
                </div>
              </div>
            </div>

            <p className="bwa-stage__earns">{active.earns}</p>
          </div>

          <div className="bwa-stage__flow">
            <p className="home-b-artifact-label">How it works</p>
            <ol className="bwa-flow" ref={flowRef}>
              <span className="bwa-flow__rail" aria-hidden="true" />
              <span className="bwa-flow__progress" aria-hidden="true" />
              {active.mechanism.map((step) => (
                <li key={step.label} className="bwa-flow__step">
                  <span className="bwa-flow__node" aria-hidden="true">
                    <Icon name={step.icon} size={18} />
                  </span>
                  <div className="bwa-flow__copy">
                    <strong>{step.label}</strong>
                    <small>{step.note}</small>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
}
