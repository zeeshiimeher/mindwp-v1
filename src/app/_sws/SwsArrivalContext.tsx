"use client";

import { type KeyboardEvent, useState } from "react";

import { focusAndRevealTab } from "@/app/_sws/tabNavigation";

interface Journey {
  slug: string;
  label: string;
  arrives: string;
  leadsWith: string;
}

/**
 * A horizontal signpost tab bar, not Home's segmented-console-plus-flow-rail:
 * one two-part panel (what they already know / the answer this page leads
 * with) rather than a three-node mechanism diagram. Same interaction family
 * as Home's tabs, deliberately simpler payload shape.
 */
const JOURNEYS: readonly Journey[] = [
  {
    slug: "referred",
    label: "Referred by someone",
    arrives:
      "They already trust whoever sent them, and expect the page to confirm what they were told — not introduce a different offer.",
    leadsWith:
      "A direct confirmation of the specific service they were referred for, then the same trusted next step: a named person to contact.",
  },
  {
    slug: "searched-nearby",
    label: "Searched nearby",
    arrives:
      "They typed a specific need and a location. They will leave the moment the page reads as a general homepage rather than an answer.",
    leadsWith:
      "The exact service and area stated back to them immediately, with proof that this business genuinely covers it.",
  },
  {
    slug: "compared",
    label: "Comparing providers",
    arrives:
      "They already have other tabs open. They are looking for a reason to rule this option in or out quickly.",
    leadsWith:
      "The specific distinction that separates this business from a generic version of the same category — not a longer feature list.",
  },
  {
    slug: "returning",
    label: "Returning directly",
    arrives:
      "They typed the name in from memory. Familiarity got them back, but it doesn't answer whatever stopped them deciding last time.",
    leadsWith:
      "Whatever was previously unclear, addressed plainly — the same question, still open, deserves a direct answer this time.",
  },
];

export function SwsArrivalContext() {
  const [activeSlug, setActiveSlug] = useState<string>(JOURNEYS[0].slug);
  const activeIndex = Math.max(
    JOURNEYS.findIndex((journey) => journey.slug === activeSlug),
    0,
  );
  const active = JOURNEYS[activeIndex];

  const onKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + JOURNEYS.length) % JOURNEYS.length;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % JOURNEYS.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = JOURNEYS.length - 1;

    setActiveSlug(JOURNEYS[nextIndex].slug);
    const tabs = event.currentTarget
      .closest("[role='tablist']")
      ?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    if (tabs) focusAndRevealTab(tabs, nextIndex);
  };

  return (
    <section id="arrival-context" className="sws-arrival-context section">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Arrival context
          </p>
          <h2 data-sws-sequence-item>
            Different journeys should land on answers{" "}
            <em>built for why people came.</em>
          </h2>
        </div>
        <p data-sws-sequence-item>
          A referral, a nearby search, an open comparison and a direct return are four different
          states of mind arriving at the same page. Each one needs the page to lead with something
          different.
        </p>
      </div>

      <div className="container sws-arrival-context__layout" data-sws-fade>
        <div
          className="sws-arrival-context__tabs"
          role="tablist"
          aria-label="How someone arrives at the page"
        >
          {JOURNEYS.map((journey, index) => {
            const selected = journey.slug === activeSlug;
            return (
              <button
                type="button"
                key={journey.slug}
                role="tab"
                id={`arrival-tab-${journey.slug}`}
                aria-controls="arrival-panel"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                className={`sws-arrival-context__tab${selected ? " is-active" : ""}`}
                onClick={() => setActiveSlug(journey.slug)}
                onKeyDown={(event) => onKey(event, index)}
              >
                {journey.label}
              </button>
            );
          })}
        </div>

        <article
          className="sws-arrival-context__panel"
          role="tabpanel"
          id="arrival-panel"
          aria-labelledby={`arrival-tab-${active.slug}`}
          tabIndex={0}
          key={active.slug}
        >
          <div className="sws-arrival-context__panel-row">
            <p className="sws-artifact-label">Arrives already knowing</p>
            <p>{active.arrives}</p>
          </div>
          <div className="sws-arrival-context__panel-row sws-arrival-context__panel-row--lead">
            <p className="sws-artifact-label">The page leads with</p>
            <p>{active.leadsWith}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
