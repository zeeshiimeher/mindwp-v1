"use client";

import { gsap } from "gsap";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";

import { focusAndRevealTab, revealTab } from "@/app/_home-b/tabNavigation";
import { useResponsiveTabOrientation } from "@/app/_home-b/useResponsiveTabOrientation";
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
    mechanism: readonly [
      { icon: IconName; label: string },
      { icon: IconName; label: string },
      { icon: IconName; label: string },
    ];
  }
> = {
  "lead-response-handling": {
    displayName: "First Response",
    tag: "Lead Response & Handling",
    icon: "phone",
    problem: "Calls, forms and bookings land, then wait for whoever happens to notice.",
    promise: "Acknowledge the enquiry and place it with someone responsible.",
    mechanism: [
      { icon: "message-square", label: "Enquiry arrives" },
      { icon: "phone", label: "Routed to someone" },
      { icon: "circle-check", label: "Acknowledged" },
    ],
  },
  "follow-up-crm": {
    displayName: "Purposeful Follow-Up",
    tag: "Follow-Up & CRM",
    icon: "folder",
    problem: "A quote or plan goes out, and the next touch depends on someone remembering to make it.",
    promise: "Keep worthwhile decisions visible without replacing human judgement.",
    mechanism: [
      { icon: "folder", label: "Quote sent" },
      { icon: "message-square", label: "Next touch reminder" },
      { icon: "circle-check", label: "Decision made" },
    ],
  },
  "reputation-review": {
    displayName: "Visible Reputation",
    tag: "Reputation & Review",
    icon: "star",
    problem: "Good work ends quietly — no review asked, nothing carried back to the website.",
    promise: "Help genuine customer experiences strengthen future customer decisions.",
    mechanism: [
      { icon: "circle-check", label: "Job finished" },
      { icon: "star", label: "Review requested" },
      { icon: "globe", label: "Live as proof" },
    ],
  },
};

export function HomeSystemsSelector() {
  const [activeSlug, setActiveSlug] = useState<SupportSlug>("lead-response-handling");
  const orientation = useResponsiveTabOrientation();
  const detail = DETAILS[activeSlug];
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const track = scene.querySelector<HTMLElement>(".home-b-systems__mechanism-track");
    const traveler = scene.querySelector<HTMLElement>(".home-b-systems__mechanism-traveler");
    const nodes = gsap.utils.toArray<HTMLElement>(".home-b-systems__mechanism-node", scene);
    if (!track || !traveler || nodes.length === 0) return;

    nodes.forEach((node) => node.classList.add("is-dim"));

    let tl: gsap.core.Timeline | undefined;

    const play = () => {
      const trackRect = track.getBoundingClientRect();
      const positions = nodes.map((node) => {
        const nodeRect = node.getBoundingClientRect();
        return nodeRect.left + nodeRect.width / 2 - trackRect.left;
      });

      tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      tl.set(traveler, { x: positions[0], xPercent: -50, yPercent: -50, opacity: 0 }).to(traveler, {
        opacity: 1,
        duration: 0.2,
      });

      positions.forEach((position, index) => {
        if (index > 0) {
          tl!.to(traveler, { x: position, duration: 0.5 });
        }
        tl!
          .call(() => nodes[index].classList.remove("is-dim"), undefined, "<")
          .fromTo(nodes[index], { scale: 1 }, { scale: 1.15, duration: 0.2, ease: "power2.out" }, "<")
          .to(nodes[index], { scale: 1, duration: 0.2 });
      });

      tl.to(traveler, { opacity: 0, duration: 0.25 }, "+=0.15");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(scene);

    return () => {
      observer.disconnect();
      tl?.kill();
      nodes.forEach((node) => node.classList.remove("is-dim"));
    };
  }, []);

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
    <div className="home-b-systems__layout container--split">
      <div
        className="home-b-systems__selector"
        role="tablist"
        aria-label="Optional support beyond the website"
        aria-orientation={orientation}
        data-home-b-stagger
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
              data-home-b-stagger-item
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
        className="home-b-systems__surface"
        role="tabpanel"
        id="system-panel"
        aria-labelledby={`system-tab-${activeSlug}`}
        tabIndex={0}
        data-home-b-fade
        key={activeSlug}
      >
        <p className="home-b-systems__tag">{detail.tag}</p>
        <h3>{detail.displayName}</h3>
        <div className="home-b-systems__statements">
          <p className="home-b-systems__problem">
            <span aria-hidden="true">×</span>
            {detail.problem}
          </p>
          <p className="home-b-systems__promise">
            <span aria-hidden="true">✓</span>
            {detail.promise}
          </p>
        </div>

        <div className="home-b-systems__mechanism">
          <p className="home-b-artifact-label">How it works</p>
          <div className="home-b-systems__mechanism-scene" ref={sceneRef}>
            <div className="home-b-systems__mechanism-track" aria-hidden="true">
              <span className="home-b-systems__mechanism-traveler" />
            </div>
            <ol className="home-b-systems__mechanism-steps">
              {detail.mechanism.map((step) => (
                <li key={step.label} className="home-b-systems__mechanism-step">
                  <span className="home-b-systems__mechanism-node" aria-hidden="true">
                    <Icon name={step.icon} size={16} />
                  </span>
                  <small>{step.label}</small>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </div>
  );
}
