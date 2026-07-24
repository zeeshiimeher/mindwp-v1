"use client";

import { gsap } from "gsap";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";

import { focusAndRevealTab } from "@/app/_home/tabNavigation";
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
    earns: string;
    mechanism: readonly [
      { icon: IconName; label: string; note: string },
      { icon: IconName; label: string; note: string },
      { icon: IconName; label: string; note: string },
    ];
  }
> = {
  "lead-response-handling": {
    displayName: "First Response",
    tag: "Lead Response & Handling",
    icon: "phone",
    problem: "Calls, forms and bookings land, then wait for whoever happens to notice.",
    promise: "Acknowledge the enquiry and place it with someone responsible.",
    earns: "Earns its place when enquiries already arrive faster than they get answered.",
    mechanism: [
      { icon: "message-square", label: "Enquiry arrives", note: "A call, form or booking lands." },
      { icon: "phone", label: "Routed to someone", note: "It reaches a named owner, not a shared inbox." },
      { icon: "circle-check", label: "Acknowledged", note: "The sender knows it was received." },
    ],
  },
  "follow-up-crm": {
    displayName: "Purposeful Follow-Up",
    tag: "Follow-Up & CRM",
    icon: "folder",
    problem: "A quote or plan goes out, and the next touch depends on someone remembering to make it.",
    promise: "Keep worthwhile decisions visible without replacing human judgement.",
    earns: "Earns its place when good enquiries stall between the quote and the decision.",
    mechanism: [
      { icon: "folder", label: "Quote sent", note: "The decision is recorded, not lost." },
      { icon: "message-square", label: "Next touch reminder", note: "A prompt surfaces when it is due." },
      { icon: "circle-check", label: "Decision made", note: "The thread closes, one way or another." },
    ],
  },
  "reputation-review": {
    displayName: "Visible Reputation",
    tag: "Reputation & Review",
    icon: "star",
    problem: "Good work ends quietly — no review asked, nothing carried back to the website.",
    promise: "Help genuine customer experiences strengthen future customer decisions.",
    earns: "Earns its place when finished work never makes it back onto the page.",
    mechanism: [
      { icon: "circle-check", label: "Job finished", note: "The work is genuinely complete." },
      { icon: "star", label: "Review requested", note: "A real customer is invited to speak." },
      { icon: "globe", label: "Live as proof", note: "Their words return to the site." },
    ],
  },
};

/**
 * Beyond the website — desktop reads as a segmented console (segments above a
 * wide stage, flow rail replaying on every switch); the same content becomes
 * stacked accordion rows on mobile, each opening its own flow in place.
 */
export function HomeSystemsSelector() {
  const orientation = useResponsiveTabOrientation();
  const isStacked = orientation === "horizontal";

  const [activeSlug, setActiveSlug] = useState<SupportSlug | "">(SUPPORT_SYSTEMS[0].slug);
  const activeIndex = Math.max(
    SUPPORT_SYSTEMS.findIndex((system) => system.slug === activeSlug),
    0,
  );
  const activeSlugSafe = SUPPORT_SYSTEMS[activeIndex].slug;
  const detail = DETAILS[activeSlugSafe];
  const flowRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    if (isStacked) return;
    const flow = flowRef.current;
    if (!flow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | void;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();

        const progress = flow.querySelector<HTMLElement>(".home-systems__flow-progress");
        const nodes = gsap.utils.toArray<HTMLElement>(".home-systems__flow-step", flow);
        if (!progress || nodes.length === 0) return;

        nodes.forEach((node) => node.classList.add("is-dim"));
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.set(progress, { scaleY: 0, transformOrigin: "50% 0%" });

        nodes.forEach((node, i) => {
          const dot = node.querySelector(".home-systems__flow-node");
          tl.to(progress, { scaleY: (i + 1) / nodes.length, duration: 0.42, ease: "none" })
            .call(() => node.classList.remove("is-dim"), undefined, ">-0.18")
            .fromTo(dot, { scale: 1 }, { scale: 1.16, duration: 0.18 }, "<")
            .to(dot, { scale: 1, duration: 0.2 });
        });

        cleanup = () => {
          tl.kill();
          nodes.forEach((node) => node.classList.remove("is-dim"));
        };
      },
      { threshold: 0.35 },
    );
    observer.observe(flow);

    return () => {
      observer.disconnect();
      cleanup?.();
    };
  }, [activeSlug, isStacked]);

  const onKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
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

  if (isStacked) {
    return (
      <div className="home-systems__accordion">
        {SUPPORT_SYSTEMS.map((system, i) => {
          const systemDetail = DETAILS[system.slug];
          const open = system.slug === activeSlug;
          return (
            <article key={system.slug} className={`home-systems__row${open ? " is-open" : ""}`}>
              <h3 className="home-systems__row-heading">
                <button
                  type="button"
                  id={`system-head-${system.slug}`}
                  className="home-systems__row-head"
                  aria-expanded={open}
                  aria-controls={`system-body-${system.slug}`}
                  onClick={() => setActiveSlug(open ? "" : system.slug)}
                >
                  <span className="home-systems__row-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="home-systems__row-icon">
                    <Icon name={systemDetail.icon} size={20} />
                  </span>
                  <span className="home-systems__row-id">{systemDetail.displayName}</span>
                  <span className="home-systems__row-chevron" aria-hidden="true">
                    <Icon name="arrow-right" size={16} />
                  </span>
                </button>
              </h3>

              <div
                className="home-systems__row-body"
                id={`system-body-${system.slug}`}
                role="region"
                aria-labelledby={`system-head-${system.slug}`}
              >
                <div className="home-systems__row-inner">
                  <div className="home-systems__statements">
                    <p className="home-systems__problem">
                      <span aria-hidden="true">×</span>
                      {systemDetail.problem}
                    </p>
                    <p className="home-systems__promise">
                      <span aria-hidden="true">✓</span>
                      {systemDetail.promise}
                    </p>
                    <p className="home-systems__earns">{systemDetail.earns}</p>
                  </div>

                  <div className="home-systems__row-flow">
                    <p className="home-artifact-label">How it works</p>
                    <ol className="home-systems__row-flow-steps">
                      <span className="home-systems__row-flow-rail" aria-hidden="true" />
                      <span className="home-systems__row-flow-progress" aria-hidden="true" />
                      {systemDetail.mechanism.map((step) => (
                        <li key={step.label} className="home-systems__row-flow-step">
                          <span className="home-systems__row-flow-node" aria-hidden="true">
                            <Icon name={step.icon} size={16} />
                          </span>
                          <span className="home-systems__row-flow-copy">
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
    );
  }

  return (
    <div className="home-systems__layout">
      <div
        className="home-systems__segments"
        role="tablist"
        aria-label="Optional support beyond the website"
      >
        {SUPPORT_SYSTEMS.map((system, index) => {
          const systemDetail = DETAILS[system.slug];
          const selected = system.slug === activeSlugSafe;
          return (
            <button
              type="button"
              key={system.slug}
              role="tab"
              id={`system-tab-${system.slug}`}
              aria-controls="system-stage"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              className={`home-systems__segment${selected ? " is-active" : ""}`}
              onClick={() => setActiveSlug(system.slug)}
              onKeyDown={(event) => onKey(event, index)}
            >
              <span className="home-systems__segment-icon">
                <Icon name={systemDetail.icon} size={18} />
              </span>
              {systemDetail.displayName}
            </button>
          );
        })}
      </div>

      <article
        className="home-systems__stage"
        role="tabpanel"
        id="system-stage"
        aria-labelledby={`system-tab-${activeSlugSafe}`}
        tabIndex={0}
        key={activeSlugSafe}
      >
        <div className="home-systems__stage-narrative">
          <span className="home-systems__stage-badge">
            <Icon name={detail.icon} size={20} />
          </span>
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

          <p className="home-systems__earns">{detail.earns}</p>
        </div>

        <div className="home-systems__stage-flow">
          <p className="home-artifact-label">How it works</p>
          <ol className="home-systems__flow" ref={flowRef}>
            <span className="home-systems__flow-rail" aria-hidden="true" />
            <span className="home-systems__flow-progress" aria-hidden="true" />
            {detail.mechanism.map((step) => (
              <li key={step.label} className="home-systems__flow-step">
                <span className="home-systems__flow-node" aria-hidden="true">
                  <Icon name={step.icon} size={16} />
                </span>
                <div className="home-systems__flow-copy">
                  <strong>{step.label}</strong>
                  <small>{step.note}</small>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </div>
  );
}
