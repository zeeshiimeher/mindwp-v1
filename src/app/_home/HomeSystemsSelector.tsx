"use client";

import { type KeyboardEvent, useState } from "react";

import { focusAndRevealTab, revealTab } from "@/app/_home/tabNavigation";
import { useResponsiveTabOrientation } from "@/app/_home/useResponsiveTabOrientation";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CANONICAL_SYSTEMS } from "@/content/canonical";

const DETAILS: Record<
  (typeof CANONICAL_SYSTEMS)[number]["slug"],
  {
    tag: string;
    icon: IconName;
    problem: string;
    promise: string;
    reach: readonly [string, string, string, string];
  }
> = {
  "smart-website-systems": {
    tag: "The hub",
    icon: "globe",
    problem: "A generic site cannot carry the whole journey on its own.",
    promise: "One site designed to hold the offer, the proof, and every next step.",
    reach: ["Found", "Answered", "Owned", "Proven"],
  },
  "local-seo-authority": {
    tag: "Found",
    icon: "map-pin",
    problem: "Nearby buyers cannot find or verify the business first.",
    promise: "Service pages, listings, and proof stay aligned with what search shows.",
    reach: ["Found", "Answered", "Owned", "Proven"],
  },
  "lead-response-handling": {
    tag: "Answered",
    icon: "phone",
    problem: "Calls, forms, and bookings land nowhere in particular.",
    promise: "Every enquiry reaches a useful first response and a clear route.",
    reach: ["Found", "Answered", "Owned", "Proven"],
  },
  "follow-up-crm": {
    tag: "Owned",
    icon: "folder",
    problem: "The next step lives in memory instead of a system.",
    promise: "Every enquiry gets an owner and a visible next step.",
    reach: ["Found", "Answered", "Owned", "Proven"],
  },
  "reputation-review": {
    tag: "Proven",
    icon: "star",
    problem: "Finished work never becomes proof for the next buyer.",
    promise: "Reviews get requested at the moment they are easiest to give.",
    reach: ["Found", "Answered", "Owned", "Proven"],
  },
};

export function HomeSystemsSelector() {
  const [activeSlug, setActiveSlug] =
    useState<(typeof CANONICAL_SYSTEMS)[number]["slug"]>("smart-website-systems");
  const orientation = useResponsiveTabOrientation();
  const activeSystem = CANONICAL_SYSTEMS.find((system) => system.slug === activeSlug)!;
  const detail = DETAILS[activeSlug];
  const activeIndex = CANONICAL_SYSTEMS.findIndex((system) => system.slug === activeSlug);

  const handleKeys = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      nextIndex = (index - 1 + CANONICAL_SYSTEMS.length) % CANONICAL_SYSTEMS.length;
    }
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      nextIndex = (index + 1) % CANONICAL_SYSTEMS.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = CANONICAL_SYSTEMS.length - 1;

    setActiveSlug(CANONICAL_SYSTEMS[nextIndex].slug);
    const tabs = event.currentTarget
      .closest("[role='tablist']")
      ?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    if (tabs) focusAndRevealTab(tabs, nextIndex);
  };

  return (
    <div className="home-systems__layout container--split">
      <div
        className="home-systems__selector"
        role="tablist"
        aria-label="Connected MindWP systems"
        aria-orientation={orientation}
        data-home-stagger
      >
        {CANONICAL_SYSTEMS.map((system, index) => {
          const systemDetail = DETAILS[system.slug];
          const selected = system.slug === activeSlug;
          return (
            <button
              type="button"
              key={system.slug}
              role="tab"
              id={`system-tab-${system.slug}`}
              aria-controls="system-panel"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              className={selected ? "is-active" : undefined}
              onClick={(event) => {
                setActiveSlug(system.slug);
                revealTab(event.currentTarget);
              }}
              onKeyDown={(event) => handleKeys(event, index)}
              data-home-stagger-item
            >
              <span>
                <Icon name={systemDetail.icon} size={18} />
              </span>
              {system.label}
            </button>
          );
        })}
      </div>

      <article
        className="home-systems__surface"
        role="tabpanel"
        id="system-panel"
        aria-labelledby={`system-tab-${activeSlug}`}
        tabIndex={0}
        data-home-fade
        key={activeSlug}
      >
        <p className="home-systems__tag">{detail.tag}</p>
        <h3>{activeSystem.label}</h3>
        <div className="home-systems__statements">
          <p className="home-systems__problem">
            <span aria-hidden="true">×</span>
            {detail.problem}
          </p>
          <p className="home-systems__promise">
            <span aria-hidden="true">✓</span>
            {detail.promise}
          </p>
        </div>

        <div className="home-systems__reach">
          <p className="home-artifact-label">How it reaches the website</p>
          <div className="home-systems__fan" data-active-node={activeIndex - 1} aria-hidden="true">
            <svg viewBox="0 0 640 260" preserveAspectRatio="none">
              <line data-node="0" x1="320" y1="238" x2="70" y2="46" />
              <line data-node="1" x1="320" y1="238" x2="235" y2="28" />
              <line data-node="2" x1="320" y1="238" x2="405" y2="28" />
              <line data-node="3" x1="320" y1="238" x2="570" y2="46" />
            </svg>
            {detail.reach.map((label, index) => (
              <span
                className={`home-systems__reach-node home-systems__reach-node--${index + 1}${activeIndex - 1 === index ? " is-active" : ""}`}
                key={label}
              >
                <i>
                  <Icon
                    name={
                      index === 0
                        ? "search"
                        : index === 1
                          ? "phone"
                          : index === 2
                            ? "folder"
                            : "star"
                    }
                    size={17}
                  />
                </i>
                {label}
              </span>
            ))}
            <span className="home-systems__hub">
              <i>
                <Icon name="globe" size={18} />
              </i>
              Website
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
