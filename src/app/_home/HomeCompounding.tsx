"use client";

import { useEffect, useRef, useState } from "react";

import { HomeCompoundingArt } from "@/app/_home/HomeCompoundingArt";
import { Icon, type IconName } from "@/components/ui/Icon";

interface Gain {
  icon: IconName;
  short: string;
  title: string;
  note: string;
}

const COMPOUND_INTRO =
  "Most websites are treated as a launch date — live, then slowly going stale. A smart website is the opposite: what it gains, it keeps.";

/**
 * What a website keeps gaining after go-live. Qualitative throughout — nothing
 * here is a measured, financial or guaranteed return. Automation sits among the
 * five as one capability that compounds, described only within its approved
 * boundary: it acknowledges, routes, organises and prompts.
 */
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
    icon: "folder",
    short: "Handling",
    title: "The handling gets steadier",
    note: "As acknowledgement, routing and reminders settle into one shared record, less depends on someone remembering. The judgement calls stay with your team.",
  },
  {
    icon: "search",
    short: "Channels",
    title: "Every channel works harder",
    note: "Search, referrals and ads all land on a site that answers better than it did last month.",
  },
];

const COMPOUND_CLOSE =
  "A typical site peaks at launch and drifts. This one keeps building — which is exactly why it is worth getting right from the start.";

/**
 * One website, and everything it has gained since launch.
 *
 * Split deliberately: the website is SVG artwork on the left, because it is
 * graphical; the gains are real HTML on the right, because they are text and
 * text in SVG cannot wrap or respect a visitor's font size. A CSS spine ties
 * the two together rather than an absolutely-positioned overlay that would
 * drift at every width.
 *
 * The build staggers instead of looping: when the section comes into view the
 * gains arrive one after another and then stay, because the argument is
 * accumulation. `armed` is only ever set by script, and only when motion is
 * allowed, so without JS or with reduced motion the finished state is what
 * renders.
 */
export function HomeCompounding() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"still" | "armed" | "playing">("still");

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setPhase("armed");

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        setPhase("playing");
      },
      { threshold: 0.2 },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="compounding" className="home-compounding section section--focal on-mist">
      <div className="container section-intro section-intro--centered" data-home-sequence>
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Not a launch — an asset
        </p>
        <h2 data-home-sequence-item>
          A smart website doesn&apos;t peak at launch. <em>It compounds.</em>
        </h2>
        <p data-home-sequence-item>{COMPOUND_INTRO}</p>
      </div>

      <div className="container cp" ref={stageRef} data-phase={phase}>
        <div className="cp__art">
          <HomeCompoundingArt />
          <p className="cp__art-label">
            <span>Your website</span>
            Launched once. Added to ever since.
          </p>
        </div>

        <ol className="cp__gains">
          {GAINS.map((gain, i) => (
            <li key={gain.title} className="cp__gain" style={{ "--i": i } as React.CSSProperties}>
              <span className="cp__gain-node" aria-hidden="true">
                <Icon name={gain.icon} size={18} />
              </span>
              <span className="cp__gain-body">
                <span className="cp__gain-tag">{gain.short}</span>
                <strong>{gain.title}</strong>
                <span className="cp__gain-note">{gain.note}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <p className="container cp__close editorial-note" data-home-fade>
        {COMPOUND_CLOSE}
      </p>
    </section>
  );
}
