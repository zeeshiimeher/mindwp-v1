"use client";

import { type KeyboardEvent, useState } from "react";

import { focusAndRevealTab, revealTab } from "@/app/_home/tabNavigation";
import { useResponsiveTabOrientation } from "@/app/_home/useResponsiveTabOrientation";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CANONICAL_SYSTEMS } from "@/content/canonical";

const SUPPORT_SLUGS = ["lead-response-handling", "follow-up-crm", "reputation-review"] as const;

type SupportSlug = (typeof SUPPORT_SLUGS)[number];

const SUPPORT_SYSTEMS = CANONICAL_SYSTEMS.filter(
  (system): system is (typeof CANONICAL_SYSTEMS)[number] & { slug: SupportSlug } =>
    (SUPPORT_SLUGS as readonly string[]).includes(system.slug),
);

const DETAILS: Record<
  SupportSlug,
  {
    displayName: string;
    tag: string;
    icon: IconName;
    problem: string;
    promise: string;
    reach: readonly [string, string, string, string];
  }
> = {
  "lead-response-handling": {
    displayName: "First Response",
    tag: "Lead Response & Handling",
    icon: "phone",
    problem: "Calls, forms and bookings land, then wait for whoever happens to notice.",
    promise: "Acknowledge the enquiry and place it with someone responsible.",
    reach: ["Found", "Answered", "Owned", "Proven"],
  },
  "follow-up-crm": {
    displayName: "Purposeful Follow-Up",
    tag: "Follow-Up & CRM",
    icon: "folder",
    problem: "A quote or plan goes out, and the next touch depends on someone remembering to make it.",
    promise: "Keep worthwhile decisions visible without replacing human judgement.",
    reach: ["Found", "Answered", "Owned", "Proven"],
  },
  "reputation-review": {
    displayName: "Visible Reputation",
    tag: "Reputation & Review",
    icon: "star",
    problem: "Good work ends quietly — no review asked, nothing carried back to the website.",
    promise: "Help genuine customer experiences strengthen future customer decisions.",
    reach: ["Found", "Answered", "Owned", "Proven"],
  },
};

export function HomeSystemsSelector() {
  const [activeSlug, setActiveSlug] = useState<SupportSlug>("lead-response-handling");
  const orientation = useResponsiveTabOrientation();
  const activeIndex = CANONICAL_SYSTEMS.findIndex((system) => system.slug === activeSlug);
  const detail = DETAILS[activeSlug];

  const handleKeys = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      nextIndex = (index - 1 + SUPPORT_SYSTEMS.length) % SUPPORT_SYSTEMS.length;
    }
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      nextIndex = (index + 1) % SUPPORT_SYSTEMS.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = SUPPORT_SYSTEMS.length - 1;

    setActiveSlug(SUPPORT_SYSTEMS[nextIndex].slug);
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
        aria-label="Optional support beyond the website"
        aria-orientation={orientation}
        data-home-stagger
      >
        {SUPPORT_SYSTEMS.map((system, index) => {
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
              {systemDetail.displayName}
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
        <h3>{detail.displayName}</h3>
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
