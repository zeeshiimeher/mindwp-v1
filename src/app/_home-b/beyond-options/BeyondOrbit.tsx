"use client";

import { type KeyboardEvent, useState } from "react";

import { Icon } from "@/components/ui/Icon";

import { BeyondHeader } from "./BeyondHeader";
import { BEYOND_CAPABILITIES } from "./data";

/** Node centres, as percentages of the square map — a hub with three satellites. */
const NODE_POS = [
  { x: 50, y: 13 },
  { x: 15, y: 83 },
  { x: 85, y: 83 },
] as const;

/**
 * Variant B — Orbital system map.
 * The Smart Website sits at the centre; three capabilities orbit it and light
 * their connection when chosen, making "connects only where the journey needs it" spatial.
 */
export function BeyondOrbit() {
  const [index, setIndex] = useState(0);
  const active = BEYOND_CAPABILITIES[index];

  const onKey = (event: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = i;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) next = (i - 1 + BEYOND_CAPABILITIES.length) % BEYOND_CAPABILITIES.length;
    if (["ArrowRight", "ArrowDown"].includes(event.key)) next = (i + 1) % BEYOND_CAPABILITIES.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = BEYOND_CAPABILITIES.length - 1;
    setIndex(next);
    const tabs = event.currentTarget.closest("[role='tablist']")?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    tabs?.[next]?.focus();
  };

  return (
    <section id="beyond-orbit" className="section on-dark bw bwb">
      <BeyondHeader intro="The website stays at the centre. Each capability connects only where the journey needs it — select one to trace the link." />

      <div className="container bwb-layout container--split" data-home-b-fade>
        <div className="bwb-map" role="tablist" aria-label="Optional support beyond the website">
          <svg className="bwb-links" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
            {NODE_POS.map((pos, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={pos.x}
                y2={pos.y}
                className={`bwb-link${i === index ? " is-active" : ""}`}
              />
            ))}
          </svg>

          <span className="bwb-ring" aria-hidden="true" />

          <span className="bwb-hub" aria-hidden="true">
            <Icon name="globe" size={22} />
            <small>Smart Website</small>
          </span>

          {BEYOND_CAPABILITIES.map((cap, i) => (
            <button
              key={cap.slug}
              type="button"
              role="tab"
              id={`bwb-tab-${cap.slug}`}
              aria-controls="bwb-detail"
              aria-selected={i === index}
              tabIndex={i === index ? 0 : -1}
              className={`bwb-node bwb-node--${i + 1}${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
              onKeyDown={(event) => onKey(event, i)}
            >
              <span className="bwb-node__dot">
                <Icon name={cap.icon} size={20} />
              </span>
              <span className="bwb-node__label">{cap.displayName}</span>
            </button>
          ))}
        </div>

        <article
          className="bwb-detail"
          role="tabpanel"
          id="bwb-detail"
          aria-labelledby={`bwb-tab-${active.slug}`}
          tabIndex={0}
          key={active.slug}
        >
          <p className="bwb-detail__tag">{active.tag}</p>
          <h3>{active.displayName}</h3>

          <div className="bwb-detail__statements">
            <p className="bwb-detail__gap">
              <span aria-hidden="true">×</span>
              {active.problem}
            </p>
            <p className="bwb-detail__promise">
              <span aria-hidden="true">✓</span>
              {active.promise}
            </p>
          </div>

          <div className="bwb-detail__flow">
            <p className="home-b-artifact-label">The connection</p>
            <ol className="bwb-chips">
              {active.mechanism.map((step, i) => (
                <li key={step.label} className="bwb-chip">
                  <span className="bwb-chip__node">
                    <Icon name={step.icon} size={16} />
                  </span>
                  <span className="bwb-chip__label">{step.label}</span>
                  {i < active.mechanism.length - 1 && (
                    <span className="bwb-chip__link" aria-hidden="true">
                      <Icon name="arrow-right" size={14} />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <p className="bwb-detail__earns">{active.earns}</p>
        </article>
      </div>
    </section>
  );
}
