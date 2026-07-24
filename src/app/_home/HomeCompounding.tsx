"use client";

import { type KeyboardEvent, useEffect, useRef, useState } from "react";

import { Icon, type IconName } from "@/components/ui/Icon";

const AUTO_ADVANCE_MS = 2800;

interface Compounder {
  icon: IconName;
  label: string;
  short: string;
  note: string;
}

const COMPOUND_INTRO =
  "Most websites are treated as a launch date — live, then slowly going stale. A smart website is the opposite: it keeps building, so everything you have just seen keeps paying off long after go-live.";

const LAUNCH_NODE = {
  icon: "globe" as IconName,
  label: "Launch day",
  note: "Your site goes live — answering clearly and routing every enquiry to someone responsible.",
};

/** What genuinely compounds after launch — qualitative, no metrics implied. */
const COMPOUNDERS: readonly Compounder[] = [
  {
    icon: "star",
    label: "Proof keeps adding up",
    short: "Proof builds",
    note: "Every satisfied customer can leave a review, and each one makes the next person's decision a little easier.",
  },
  {
    icon: "map-pin",
    label: "Local presence strengthens",
    short: "Local presence",
    note: "As the site, the listing and the reviews stay aligned, the business gets easier to find and trust nearby.",
  },
  {
    icon: "circle-check",
    label: "Each improvement stacks",
    short: "Refinements stack",
    note: "The review keeps finding the next worthwhile fix — building on the last, not starting the site over.",
  },
  {
    icon: "search",
    label: "Every channel works harder",
    short: "Channels compound",
    note: "Search, referrals and ads all keep landing on a site that answers better than it did the month before.",
  },
] as const;

const COMPOUND_CLOSE =
  "A typical site peaks at launch and drifts. This one keeps building — which is exactly why it is worth getting right from the start.";

/** Node centres, as percentages of the square map — a hub with four satellites. */
const NODE_POS = [
  { x: 50, y: 10 },
  { x: 90, y: 50 },
  { x: 50, y: 90 },
  { x: 10, y: 50 },
] as const;

/**
 * Not a launch — an asset. A hub-and-satellite map (launch day at the
 * centre, four things that keep compounding orbiting it) with the detail
 * reading as one full-width band underneath. Auto-advances once in view;
 * hands over for good the moment the visitor picks a satellite themselves.
 */
export function HomeCompounding() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);
  const active = COMPOUNDERS[index];

  useEffect(() => {
    if (!autoplay) return;
    const map = mapRef.current;
    if (!map || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting ?? false;
        if (visible && timer === undefined) {
          timer = setInterval(() => {
            setIndex((i) => (i + 1) % COMPOUNDERS.length);
          }, AUTO_ADVANCE_MS);
        } else if (!visible && timer !== undefined) {
          clearInterval(timer);
          timer = undefined;
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(map);

    return () => {
      observer.disconnect();
      if (timer !== undefined) clearInterval(timer);
    };
  }, [autoplay]);

  const select = (i: number) => {
    setAutoplay(false);
    setIndex(i);
  };

  const onKey = (event: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = i;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) next = (i - 1 + COMPOUNDERS.length) % COMPOUNDERS.length;
    if (["ArrowRight", "ArrowDown"].includes(event.key)) next = (i + 1) % COMPOUNDERS.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = COMPOUNDERS.length - 1;
    setAutoplay(false);
    setIndex(next);
    const tabs = event.currentTarget
      .closest("[role='tablist']")
      ?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    tabs?.[next]?.focus();
  };

  return (
    <section id="compounding" className="home-compounding section on-mist">
      <div
        className="container container--content section-intro section-intro--centered"
        data-home-sequence
      >
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Not a launch — an asset
        </p>
        <h2 data-home-sequence-item>
          A smart website doesn&apos;t peak at launch. <em>It compounds.</em>
        </h2>
        <p data-home-sequence-item>{COMPOUND_INTRO}</p>
      </div>

      <div className="container container--content home-compounding__stage" data-home-fade>
        <div
          className="home-compounding__map"
          ref={mapRef}
          role="tablist"
          aria-label="What compounds after launch"
        >
          <svg className="home-compounding__links" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
            {NODE_POS.map((pos, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={pos.x}
                y2={pos.y}
                className={`home-compounding__link${i === index ? " is-active" : ""}`}
              />
            ))}
          </svg>

          <span className="home-compounding__ring" aria-hidden="true" />

          <span className="home-compounding__hub" aria-hidden="true">
            <Icon name={LAUNCH_NODE.icon} size={24} />
            <small>{LAUNCH_NODE.label}</small>
          </span>

          {COMPOUNDERS.map((item, i) => (
            <button
              key={item.label}
              type="button"
              role="tab"
              id={`compounding-tab-${i}`}
              aria-controls="compounding-detail"
              aria-selected={i === index}
              tabIndex={i === index ? 0 : -1}
              className={`home-compounding__node home-compounding__node--${i + 1}${i === index ? " is-active" : ""}`}
              onClick={() => select(i)}
              onKeyDown={(event) => onKey(event, i)}
            >
              <span className="home-compounding__node-dot">
                <Icon name={item.icon} size={22} />
              </span>
              <span className="home-compounding__node-label">{item.short}</span>
            </button>
          ))}
        </div>

        <article
          className="home-compounding__detail"
          role="tabpanel"
          id="compounding-detail"
          aria-labelledby={`compounding-tab-${index}`}
          tabIndex={0}
          key={active.label}
        >
          <span className="home-compounding__detail-icon">
            <Icon name={active.icon} size={26} />
          </span>
          <div className="home-compounding__detail-text">
            <p className="home-compounding__detail-tag">{active.short}</p>
            <h3>{active.label}</h3>
            <p className="home-compounding__detail-note">{active.note}</p>
          </div>
        </article>

        <p className="home-compounding__close">{COMPOUND_CLOSE}</p>
      </div>
    </section>
  );
}
