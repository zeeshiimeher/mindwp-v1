"use client";

import { gsap } from "gsap";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";

import { focusAndRevealTab } from "@/app/_home/tabNavigation";
import { useResponsiveTabOrientation } from "@/app/_home/useResponsiveTabOrientation";
import { Icon, type IconName } from "@/components/ui/Icon";

interface SupportMoment {
  slug: string;
  displayName: string;
  tag: string;
  icon: IconName;
  problem: string;
  promise: string;
  /** Who decides what, for this specific moment. Rendered where the old
      "worth scoping when" qualification line sat. */
  judgement: string;
  /** Three things that become easier, clearer or more consistent — not three
      procedural steps. The service pages own the mechanism; Home orients. */
  outcomes: readonly [
    { icon: IconName; label: string; note: string },
    { icon: IconName; label: string; note: string },
    { icon: IconName; label: string; note: string },
  ];
}

/**
 * Five visitor-facing moments, not a service catalogue. Each maps back to a
 * public service via its tag; two share Lead Response & Handling and two share
 * Follow-Up & CRM by design.
 *
 * New enquiries leads because it is the moment the website itself produces and
 * the plainest statement of what the connected services are for. Missed calls
 * ran first previously, which opened the whole connected offer on phone
 * answering — the reading docs/WRITING.md specifically rules out for Lead
 * Response & Handling.
 *
 * Each tab is a commercial overview: what becomes easier, which canonical
 * service owns it, and where human judgement stays. Step-by-step mechanism
 * belongs to the individual service pages, not here.
 */
const MOMENTS: readonly SupportMoment[] = [
  {
    slug: "new-enquiries",
    displayName: "New enquiries",
    tag: "Lead Response & Handling",
    icon: "mail",
    problem: "Forms and messages land in a shared inbox, then wait for whoever happens to notice.",
    promise: "Every enquiry is acknowledged and placed with someone responsible.",
    judgement: "You decide the reply. The system makes sure it reaches the person who should write it.",
    outcomes: [
      {
        icon: "message-square",
        label: "Nothing sits unseen",
        note: "The sender knows it arrived.",
      },
      {
        icon: "mail",
        label: "Someone owns it",
        note: "A named person, not a shared inbox.",
      },
      {
        icon: "circle-check",
        label: "Context travels with it",
        note: "Whoever replies can see what was asked.",
      },
    ],
  },
  {
    slug: "missed-calls",
    displayName: "Missed calls",
    tag: "Lead Response & Handling",
    icon: "phone",
    problem:
      "A call rings out while you're with a patient or on a job, and nothing goes back to the caller.",
    promise: "Missed calls are acknowledged and stay open until someone returns them.",
    judgement: "The message buys you time. The call itself is still yours to make.",
    outcomes: [
      {
        icon: "phone",
        label: "The caller hears back",
        note: "They know they were seen, not ignored.",
      },
      {
        icon: "message-square",
        label: "The call stays open",
        note: "It waits with a person, not in a call log.",
      },
      {
        icon: "circle-check",
        label: "Less lost by default",
        note: "A missed call no longer disappears on its own.",
      },
    ],
  },
  {
    slug: "follow-up",
    displayName: "Follow-up",
    tag: "Follow-Up & CRM",
    icon: "folder",
    problem:
      "A quote or treatment plan goes out — then the next step depends on someone remembering.",
    promise: "Open decisions stay visible, with an owner and a next action.",
    judgement: "Prompts are automatic. Whether to follow up, and how, stays your call.",
    outcomes: [
      {
        icon: "folder",
        label: "Nothing rests on memory",
        note: "The open decision is written down, not carried in someone's head.",
      },
      {
        icon: "message-square",
        label: "The next touch is visible",
        note: "A prompt appears when one is due.",
      },
      {
        icon: "circle-check",
        label: "Threads close properly",
        note: "One way or the other, and on the record.",
      },
    ],
  },
  {
    slug: "one-record",
    displayName: "One record",
    tag: "Follow-Up & CRM",
    icon: "search",
    problem:
      "Half the story sits in an inbox, half in someone's phone — nobody sees the whole picture.",
    promise: "One shared record of every enquiry: its status, its history and who moves it next.",
    judgement: "The record shows where every enquiry stands. Nothing in it moves on its own.",
    outcomes: [
      {
        icon: "mail",
        label: "One place to look",
        note: "Calls, forms and messages against one customer.",
      },
      {
        icon: "folder",
        label: "Status stays current",
        note: "What is new, what is open, what changed.",
      },
      {
        icon: "circle-check",
        label: "Handovers stop losing things",
        note: "Anyone picking it up sees the whole thread.",
      },
    ],
  },
  {
    slug: "reviews",
    displayName: "Reviews",
    tag: "Reputation & Review",
    icon: "star",
    problem: "Good work ends quietly — no review asked for, nothing carried back to the website.",
    promise: "Genuine reviews are invited at the right moment and shown where people decide.",
    judgement: "We ask, with permission. What people write is theirs.",
    outcomes: [
      {
        icon: "circle-check",
        label: "The ask stops being forgotten",
        note: "An invitation goes out when the work is genuinely done.",
      },
      {
        icon: "star",
        label: "Real words, freely given",
        note: "No incentives, and nothing drafted on anyone's behalf.",
      },
      {
        icon: "globe",
        label: "Proof lands where it counts",
        note: "On the pages people read before enquiring.",
      },
    ],
  },
];

/**
 * Connected services — desktop reads as a segmented console (segments above a
 * wide stage, flow rail replaying on every switch); the same content becomes
 * stacked accordion rows on mobile, each opening its own flow in place.
 */
export function HomeSystemsSelector() {
  const orientation = useResponsiveTabOrientation();
  const isStacked = orientation === "horizontal";

  const [activeSlug, setActiveSlug] = useState<string>(MOMENTS[0].slug);
  const activeIndex = Math.max(
    MOMENTS.findIndex((moment) => moment.slug === activeSlug),
    0,
  );
  const activeSlugSafe = MOMENTS[activeIndex].slug;
  const detail = MOMENTS[activeIndex];
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
      nextIndex = (index - 1 + MOMENTS.length) % MOMENTS.length;
    }
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      nextIndex = (index + 1) % MOMENTS.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = MOMENTS.length - 1;

    setActiveSlug(MOMENTS[nextIndex].slug);
    const tabs = event.currentTarget
      .closest("[role='tablist']")
      ?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    if (tabs) focusAndRevealTab(tabs, nextIndex);
  };

  if (isStacked) {
    return (
      <div className="home-systems__accordion">
        {MOMENTS.map((moment, i) => {
          const open = moment.slug === activeSlug;
          return (
            <article key={moment.slug} className={`home-systems__row${open ? " is-open" : ""}`}>
              <h3 className="home-systems__row-heading">
                <button
                  type="button"
                  id={`system-head-${moment.slug}`}
                  className="home-systems__row-head"
                  aria-expanded={open}
                  aria-controls={`system-body-${moment.slug}`}
                  onClick={() => setActiveSlug(open ? "" : moment.slug)}
                >
                  <span className="home-systems__row-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="home-systems__row-icon">
                    <Icon name={moment.icon} size={20} />
                  </span>
                  <span className="home-systems__row-id">{moment.displayName}</span>
                  <span className="home-systems__row-chevron" aria-hidden="true">
                    <Icon name="arrow-right" size={16} />
                  </span>
                </button>
              </h3>

              <div
                className="home-systems__row-body"
                id={`system-body-${moment.slug}`}
                role="region"
                aria-labelledby={`system-head-${moment.slug}`}
                inert={!open}
              >
                <div className="home-systems__row-inner">
                  <div className="home-systems__statements">
                    <p className="home-systems__problem">
                      <span aria-hidden="true">×</span>
                      {moment.problem}
                    </p>
                    <p className="home-systems__promise">
                      <span aria-hidden="true">✓</span>
                      {moment.promise}
                    </p>
                    <p className="home-systems__earns">{moment.judgement}</p>
                    <p className="home-artifact-label">Part of {moment.tag}</p>
                  </div>

                  <div className="home-systems__row-flow">
                    <p className="home-artifact-label">What changes</p>
                    <ol className="home-systems__row-flow-steps">
                      <span className="home-systems__row-flow-rail" aria-hidden="true" />
                      <span className="home-systems__row-flow-progress" aria-hidden="true" />
                      {moment.outcomes.map((step) => (
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
      <div className="home-systems__segments" role="tablist" aria-label="Connected services">
        {MOMENTS.map((moment, index) => {
          const selected = moment.slug === activeSlugSafe;
          return (
            <button
              type="button"
              key={moment.slug}
              role="tab"
              id={`system-tab-${moment.slug}`}
              aria-controls="system-stage"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              className={`home-systems__segment${selected ? " is-active" : ""}`}
              onClick={() => setActiveSlug(moment.slug)}
              onKeyDown={(event) => onKey(event, index)}
            >
              <span className="home-systems__segment-icon">
                <Icon name={moment.icon} size={18} />
              </span>
              {moment.displayName}
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

          <p className="home-systems__earns">{detail.judgement}</p>
          <p className="home-artifact-label">Part of {detail.tag}</p>
        </div>

        <div className="home-systems__stage-flow">
          <p className="home-artifact-label">What changes</p>
          <ol className="home-systems__flow" ref={flowRef}>
            <span className="home-systems__flow-rail" aria-hidden="true" />
            <span className="home-systems__flow-progress" aria-hidden="true" />
            {detail.outcomes.map((step) => (
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
