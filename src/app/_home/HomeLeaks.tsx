"use client";

import { type KeyboardEvent, useState } from "react";

import { focusAndRevealTab, revealTab } from "@/app/_home/tabNavigation";
import { useResponsiveTabOrientation } from "@/app/_home/useResponsiveTabOrientation";
import { Icon, type IconName } from "@/components/ui/Icon";

const LEAKS: readonly {
  number: string;
  label: string;
  eyebrow: string;
  icon: IconName;
  title: string;
  body: string;
  note: string;
}[] = [
  {
    number: "01",
    label: "The first look",
    eyebrow: "The first look",
    icon: "search",
    title: "They arrive interested and leave undecided.",
    body: "Search, referrals and paid ads all land on the same pages. When the offer, proof or next step is unclear, interest quietly runs out of road — and the ad spend runs out with it.",
    note: "Attention that never becomes a question is the quietest leak of all.",
  },
  {
    number: "02",
    label: "The missed ring",
    eyebrow: "The missed ring",
    icon: "phone",
    title: "The phone rings at the worst moment.",
    body: "The front desk is with a patient; the crew is mid-install. A serious caller reaches voicemail and quietly moves down their list.",
    note: "The call that rings once rarely rings twice.",
  },
  {
    number: "03",
    label: "The waiting form",
    eyebrow: "The waiting form",
    icon: "mail",
    title: "The enquiry sits behind the day.",
    body: "The consultation request or quote form arrives, then waits behind everything else the day demands.",
    note: "A same-day reply is worth more than a better pitch.",
  },
  {
    number: "04",
    label: "The cooling quote",
    eyebrow: "The cooling quote",
    icon: "folder",
    title: "The plan goes out and goes quiet.",
    body: "The estimate or treatment plan is sent, and the next touch depends on someone remembering to make it.",
    note: "A quote that cools rarely reopens itself.",
  },
  {
    number: "05",
    label: "The remembered follow-up",
    eyebrow: "The remembered follow-up",
    icon: "message-square",
    title: "The next step lives in someone’s head.",
    body: "Ownership, status, and follow-up are real, but not visible enough to carry the work.",
    note: "Memory is a generous but unreliable colleague.",
  },
  {
    number: "06",
    label: "The unasked review",
    eyebrow: "The unasked review",
    icon: "star",
    title: "Good work ends without an echo.",
    body: "A good job or a happy patient ends the week quietly — no review asked, nothing returned to the website.",
    note: "Every finished job is an argument the next buyer never hears.",
  },
];

export function HomeLeaks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const orientation = useResponsiveTabOrientation();
  const active = LEAKS[activeIndex];

  const handleKeys = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      nextIndex = (index - 1 + LEAKS.length) % LEAKS.length;
    }
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      nextIndex = (index + 1) % LEAKS.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = LEAKS.length - 1;

    setActiveIndex(nextIndex);
    const tabs = event.currentTarget
      .closest("[role='tablist']")
      ?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    if (tabs) focusAndRevealTab(tabs, nextIndex);
  };

  return (
    <section id="leaks" className="home-leaks section">
      <div className="container section-intro" data-home-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-home-sequence-item>
            Where work slips
          </p>
          <h2 data-home-sequence-item>
            The work is already there.{" "}
            <span className="home-heading-muted">These are the leaks.</span>
          </h2>
        </div>
      </div>

      <div className="container container--split home-leaks__layout">
        <ol
          className="home-leaks__index"
          role="tablist"
          aria-label="Common enquiry leaks"
          aria-orientation={orientation}
          data-home-stagger
        >
          {LEAKS.map((leak, index) => {
            const selected = index === activeIndex;
            return (
              <li role="presentation" key={leak.number} data-home-stagger-item>
                <button
                  type="button"
                  role="tab"
                  id={`leak-tab-${leak.number}`}
                  aria-controls="leak-panel"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  className={selected ? "is-active" : undefined}
                  onClick={(event) => {
                    setActiveIndex(index);
                    revealTab(event.currentTarget);
                  }}
                  onKeyDown={(event) => handleKeys(event, index)}
                >
                  <small>{leak.number}</small>
                  <span>{leak.label}</span>
                  <Icon name="arrow-right" size={16} />
                </button>
              </li>
            );
          })}
        </ol>

        <article
          className="home-leaks__detail"
          role="tabpanel"
          id="leak-panel"
          aria-labelledby={`leak-tab-${active.number}`}
          tabIndex={0}
          data-home-fade
          key={active.number}
        >
          <span className="home-leaks__icon">
            <Icon name={active.icon} size={18} />
          </span>
          <p className="home-artifact-label">{active.eyebrow}</p>
          <h3>{active.title}</h3>
          <p>{active.body}</p>
          <p className="home-leaks__note">{active.note}</p>
        </article>
      </div>
    </section>
  );
}
