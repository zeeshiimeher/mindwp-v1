"use client";

import { useState } from "react";

import { Icon } from "@/components/ui/Icon";

import { BeyondHeader } from "./BeyondHeader";
import { BEYOND_CAPABILITIES } from "./data";

/**
 * Variant C — Stacked dossiers.
 * All three capabilities stay visible and legible; opening one unfolds a rich
 * two-column dossier in place while the others compress rather than vanish.
 */
export function BeyondDossiers() {
  const [openSlug, setOpenSlug] = useState<string>(BEYOND_CAPABILITIES[0].slug);

  return (
    <section id="beyond-dossiers" className="section on-dark bw bwc">
      <BeyondHeader intro="Open any capability to see the gap it closes and how the handling stays visible from first contact to proof." />

      <div className="container bwc-stack" data-home-b-fade>
        {BEYOND_CAPABILITIES.map((cap, i) => {
          const open = cap.slug === openSlug;
          return (
            <article key={cap.slug} className={`bwc-row${open ? " is-open" : ""}`}>
              <h3 className="bwc-row__heading">
                <button
                  type="button"
                  id={`bwc-head-${cap.slug}`}
                  className="bwc-row__head"
                  aria-expanded={open}
                  aria-controls={`bwc-body-${cap.slug}`}
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

              <div className="bwc-row__body" id={`bwc-body-${cap.slug}`} role="region" aria-labelledby={`bwc-head-${cap.slug}`}>
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
    </section>
  );
}
