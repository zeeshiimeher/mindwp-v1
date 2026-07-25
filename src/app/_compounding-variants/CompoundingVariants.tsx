"use client";

import { useEffect, useRef, useState } from "react";

import { Icon, type IconName } from "@/components/ui/Icon";

/**
 * Three competing compositions for the Compounding section, built to be
 * compared side by side and then reduced to one. Draft work: page-local CSS
 * only, no shared foundation touched, so discarding two of them is trivial.
 *
 * All three carry the same approved meaning and the same four gains, and all
 * three read completely when still — none of them puts meaning behind motion,
 * hover or a control.
 */

interface Gain {
  icon: IconName;
  title: string;
  short: string;
  note: string;
}

const GAINS: readonly Gain[] = [
  {
    icon: "star",
    short: "Proof",
    title: "Proof keeps adding up",
    note: "Every satisfied customer can leave a review, and each one makes the next person's decision easier.",
  },
  {
    icon: "map-pin",
    short: "Local presence",
    title: "Local presence strengthens",
    note: "As the site, the listing and the reviews stay aligned, you get easier to find and trust nearby.",
  },
  {
    icon: "circle-check",
    short: "Refinements",
    title: "Each improvement stacks",
    note: "The review keeps finding the next worthwhile fix — building on the last, not starting over.",
  },
  {
    icon: "search",
    short: "Channels",
    title: "Every channel works harder",
    note: "Search, referrals and ads all land on a site that answers better than it did last month.",
  },
];

const INTRO =
  "Most websites are treated as a launch date — live, then slowly going stale. A smart website is the opposite: what it gains, it keeps.";

const CLOSE =
  "A typical site peaks at launch and drifts. This one keeps building — which is exactly why it is worth getting right from the start.";

function SectionHead() {
  return (
    <div className="container section-intro section-intro--centered">
      <p className="eyebrow eyebrow--centered">Not a launch — an asset</p>
      <h2>
        A smart website doesn&apos;t peak at launch. <em>It compounds.</em>
      </h2>
      <p>{INTRO}</p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   VARIANT A — looping multi-scene SVG, the technique already approved for the
   hero. One website, and over the loop each gain arrives and stays. The loop
   restarts only after all four have accumulated and held.
   ═════════════════════════════════════════════════════════════════════════ */

export function VariantA() {
  return (
    <section className="cva section section--focal on-mist">
      <SectionHead />

      <div className="container cva__stage">
        <svg
          className="cva__svg"
          viewBox="0 0 960 460"
          fill="none"
          role="img"
          aria-label="A website that keeps gaining: proof, local presence, refinements and stronger channels attach to it one after another and stay attached."
        >
          <defs>
            <linearGradient id="cvaCore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--surface-navy-raised)" />
              <stop offset="100%" stopColor="var(--surface-navy-panel)" />
            </linearGradient>
          </defs>

          {/* the website — constant, because it is the thing being added to */}
          <g className="cva__core">
            <rect x="60" y="130" width="280" height="200" rx="16" fill="url(#cvaCore)" />
            <path d="M60 172 H340" className="cva__hair" />
            <circle cx="82" cy="151" r="3.4" className="cva__dot" />
            <circle cx="95" cy="151" r="3.4" className="cva__dot" />
            <circle cx="108" cy="151" r="3.4" className="cva__dot" />
            <rect x="88" y="200" width="180" height="11" rx="5.5" className="cva__ln" />
            <rect x="88" y="220" width="130" height="11" rx="5.5" className="cva__ln" />
            <rect x="88" y="256" width="150" height="34" rx="8" className="cva__cta" />
            <text x="200" y="368" className="cva__core-label" textAnchor="middle">
              Your website
            </text>
          </g>

          {GAINS.map((gain, i) => {
            const y = 44 + i * 104;
            return (
              <g key={gain.title} className="cva__gain" style={{ "--i": i } as React.CSSProperties}>
                <path d={`M348 230 C 460 230 470 ${y + 38} 560 ${y + 38}`} className="cva__thread" />
                <rect x="568" y={y} width="352" height="76" rx="12" className="cva__chip" />
                <circle cx="606" cy={y + 38} r="19" className="cva__chip-mark" />
                <text x="644" y={y + 33} className="cva__chip-title">
                  {gain.title}
                </text>
                <text x="644" y={y + 55} className="cva__chip-note">
                  {gain.short} · kept from here on
                </text>
              </g>
            );
          })}
        </svg>

        <p className="cva__foot">Launched once. Added to ever since.</p>
      </div>

      <p className="container cvx__close editorial-note">{CLOSE}</p>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   VARIANT B — scroll-driven. The website stays put while the gains pass it,
   and each one it has met stays lit on the card. The visitor's scroll does the
   accumulating; there is nothing to click.
   ═════════════════════════════════════════════════════════════════════════ */

export function VariantB() {
  const [reached, setReached] = useState(0);
  const gainRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = gainRefs.current.filter(Boolean) as HTMLLIElement[];
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = nodes.indexOf(entry.target as HTMLLIElement);
          // Only ever moves forward: what has been gained is not un-gained.
          setReached((current) => Math.max(current, i + 1));
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cvb section section--focal on-mist">
      <SectionHead />

      <div className="container cvb__layout">
        <div className="cvb__sticky">
          <div className="cvb__card">
            <span className="cvb__card-bar" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="cvb__card-body" aria-hidden="true">
              <span className="cvb__card-line" />
              <span className="cvb__card-line cvb__card-line--short" />
              <span className="cvb__card-cta" />
            </span>

            <ul className="cvb__badges">
              {GAINS.map((gain, i) => (
                <li key={gain.short} className={i < reached ? "is-gained" : undefined}>
                  <Icon name={gain.icon} size={15} />
                  <span>{gain.short}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="cvb__counter">
            <strong>{reached}</strong> of {GAINS.length} gained so far
          </p>
        </div>

        <ol className="cvb__gains">
          {GAINS.map((gain, i) => (
            <li
              key={gain.title}
              ref={(node) => {
                gainRefs.current[i] = node;
              }}
              className={i < reached ? "is-active" : undefined}
            >
              <span className="cvb__index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{gain.title}</h3>
              <p>{gain.note}</p>
            </li>
          ))}
        </ol>
      </div>

      <p className="container cvx__close editorial-note">{CLOSE}</p>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   VARIANT C — editorial. No motion, no interaction: one very large statement
   against one drawn object, with the gains as strata that visibly build.
   ═════════════════════════════════════════════════════════════════════════ */

export function VariantC() {
  return (
    <section className="cvc section section--focal on-dark">
      <div className="container cvc__layout">
        <div className="cvc__say">
          <p className="eyebrow">Not a launch — an asset</p>
          <p className="cvc__display">
            It keeps <em>building.</em>
          </p>
          <p className="cvc__lede">{INTRO}</p>
          <p className="cvc__close editorial-note">{CLOSE}</p>
        </div>

        <ol className="cvc__strata">
          {[...GAINS].reverse().map((gain, i) => {
            const step = GAINS.length - i;
            return (
              <li key={gain.title} style={{ "--step": step } as React.CSSProperties}>
                <span className="cvc__stratum-mark" aria-hidden="true">
                  <Icon name={gain.icon} size={16} />
                </span>
                <span className="cvc__stratum-text">
                  <strong>{gain.title}</strong>
                  <small>{gain.note}</small>
                </span>
              </li>
            );
          })}
          <li className="cvc__base">
            <span className="cvc__stratum-text">
              <strong>Launch day</strong>
              <small>Where everything above it starts, and nothing above it replaces.</small>
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}
