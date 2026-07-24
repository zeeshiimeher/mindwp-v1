"use client";

import { gsap } from "gsap";
import { type KeyboardEvent, useRef, useState } from "react";

import { focusAndRevealTab } from "@/app/_home-b/tabNavigation";
import { useResponsiveTabOrientation } from "@/app/_home-b/useResponsiveTabOrientation";
import { Icon } from "@/components/ui/Icon";

import { BeyondHeader } from "./BeyondHeader";
import { BEYOND_CAPABILITIES } from "./data";
import { usePlayOnVisible } from "./usePlayOnVisible";

/**
 * Variant D — Hybrid console/dossier.
 * One capability list and one selection state; only the chrome adapts.
 * Desktop reads as the console (segmented tabs → wide stage). Below the
 * same 48rem cut the console tabs use elsewhere, it becomes stacked
 * dossiers — each row opens its own content in place, accordion-style.
 */
export function BeyondHybrid() {
  const orientation = useResponsiveTabOrientation();
  const isStacked = orientation === "horizontal";

  const [openSlug, setOpenSlug] = useState<string>(BEYOND_CAPABILITIES[0].slug);
  const activeIndex = Math.max(
    BEYOND_CAPABILITIES.findIndex((cap) => cap.slug === openSlug),
    0,
  );
  const active = BEYOND_CAPABILITIES[activeIndex];
  const flowRef = useRef<HTMLOListElement | null>(null);

  usePlayOnVisible(
    flowRef,
    () => {
      if (isStacked) return;
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
    [active.slug, isStacked],
  );

  const onKey = (event: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = i;
    if (event.key === "ArrowLeft") next = (i - 1 + BEYOND_CAPABILITIES.length) % BEYOND_CAPABILITIES.length;
    if (event.key === "ArrowRight") next = (i + 1) % BEYOND_CAPABILITIES.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = BEYOND_CAPABILITIES.length - 1;
    setOpenSlug(BEYOND_CAPABILITIES[next].slug);
    const tabs = event.currentTarget
      .closest("[role='tablist']")
      ?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    if (tabs) focusAndRevealTab(tabs, next);
  };

  return (
    <section id="beyond-hybrid" className="section on-dark bw bwd">
      <BeyondHeader intro="Pick a capability on desktop, or open any one on the phone — the gap it closes stays one tap away either way." />

      {isStacked ? (
        <div className="container bwc-stack" data-home-b-fade>
          {BEYOND_CAPABILITIES.map((cap, i) => {
            const open = cap.slug === openSlug;
            return (
              <article key={cap.slug} className={`bwc-row${open ? " is-open" : ""}`}>
                <h3 className="bwc-row__heading">
                  <button
                    type="button"
                    id={`bwd-head-${cap.slug}`}
                    className="bwc-row__head"
                    aria-expanded={open}
                    aria-controls={`bwd-body-${cap.slug}`}
                    onClick={() => setOpenSlug(open ? "" : cap.slug)}
                  >
                    <span className="bwc-row__num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="bwc-row__icon">
                      <Icon name={cap.icon} size={22} />
                    </span>
                    <span className="bwc-row__id">
                      <small>{cap.tag}</small>
                      <strong>{cap.displayName}</strong>
                    </span>
                    <span className="bwc-row__promise">{cap.promise}</span>
                    <span className="bwc-row__chevron" aria-hidden="true">
                      <Icon name="arrow-right" size={18} />
                    </span>
                  </button>
                </h3>

                <div
                  className="bwc-row__body"
                  id={`bwd-body-${cap.slug}`}
                  role="region"
                  aria-labelledby={`bwd-head-${cap.slug}`}
                >
                  <div className="bwc-row__inner">
                    <div className="bwc-row__gap">
                      <p className="home-b-artifact-label">The gap today</p>
                      <p className="bwc-row__gap-text">
                        <span aria-hidden="true">×</span>
                        {cap.problem}
                      </p>
                      <p className="bwc-row__earns">{cap.earns}</p>
                    </div>

                    <div className="bwc-row__flow">
                      <p className="home-b-artifact-label">How it works</p>
                      <ol className="bwc-flow">
                        <span className="bwc-flow__rail" aria-hidden="true" />
                        <span className="bwc-flow__progress" aria-hidden="true" />
                        {cap.mechanism.map((step) => (
                          <li key={step.label} className="bwc-flow__step">
                            <span className="bwc-flow__node" aria-hidden="true">
                              <Icon name={step.icon} size={18} />
                            </span>
                            <span className="bwc-flow__copy">
                              <strong>{step.label}</strong>
                              <small>{step.note}</small>
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="container" data-home-b-fade>
          <div className="bwa-segments" role="tablist" aria-label="Optional support beyond the website">
            {BEYOND_CAPABILITIES.map((cap, i) => (
              <button
                key={cap.slug}
                type="button"
                role="tab"
                id={`bwd-tab-${cap.slug}`}
                aria-controls="bwd-stage"
                aria-selected={i === activeIndex}
                tabIndex={i === activeIndex ? 0 : -1}
                className={`bwa-segment${i === activeIndex ? " is-active" : ""}`}
                onClick={() => setOpenSlug(cap.slug)}
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
            id="bwd-stage"
            aria-labelledby={`bwd-tab-${active.slug}`}
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
      )}
    </section>
  );
}
