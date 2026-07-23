"use client";

import { type KeyboardEvent, useState } from "react";

import { focusAndRevealTab, revealTab } from "@/app/_home/tabNavigation";

const OWNERSHIP_TABS = [
  {
    id: "builds",
    tab: "What's built",
    eyebrow: "MindWP's responsibility",
    heading: "The site, the structure and the routing are defined and built by MindWP.",
    body: "Strategy, page structure, distinctive design and the WordPress build — shaped around the customer decision the website has to carry, through to a working enquiry.",
    note: "Every layer is scoped and agreed before it is built, not bundled in by default.",
    layers: [
      ["01", "Strategy & structure", "How pages are organised around the customer decision", ""],
      ["02", "Distinctive design", "Built to look and read like this business, not a template", ""],
      ["03", "The WordPress build", "Implementation through to a working enquiry", ""],
      ["04", "Enquiry routing", "Submissions reach the agreed destination, confirmed truthfully", ""],
    ],
  },
  {
    id: "owns",
    tab: "What you own",
    eyebrow: "Your responsibility",
    heading: "The website, the words and every decision it leads to are yours.",
    body: "The domain, the content and the commercial or clinical decisions an enquiry leads to belong to the business. MindWP builds the system; it does not become the business behind it.",
    note: "What MindWP builds is designed to stay clear enough for someone else to maintain, if that's ever useful.",
    layers: [
      ["01", "The website itself", "Built to stay clear and maintainable, not locked to one supplier", ""],
      ["02", "The content", "The words, images and offers describing your work", ""],
      ["03", "Every decision", "What to quote, promise or say yes to remains yours", ""],
    ],
  },
  {
    id: "after-launch",
    tab: "After launch",
    eyebrow: "What happens next",
    heading: "What launches stays yours — handover or ongoing management, agreed up front.",
    body: "Some businesses take the finished site and run it themselves. Others prefer MindWP to keep managing it. Which one applies is agreed before work begins, not assumed afterwards.",
    note: "Neither option is the default until it's actually agreed.",
    layers: [
      ["01", "Clean handover", "Access and structure handed over in a state you can run", ""],
      ["02", "Ongoing management", "MindWP continues to maintain and extend it, where useful", ""],
      ["03", "Either way", "The layers already built stay yours regardless of which is chosen", ""],
    ],
  },
] as const;

export function HomeOwnershipTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = OWNERSHIP_TABS[activeIndex];

  const handleKeys = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      return;
    }
    event.preventDefault();

    let nextIndex = index;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      nextIndex = (index - 1 + OWNERSHIP_TABS.length) % OWNERSHIP_TABS.length;
    }
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      nextIndex = (index + 1) % OWNERSHIP_TABS.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = OWNERSHIP_TABS.length - 1;

    setActiveIndex(nextIndex);
    const tabs =
      event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    if (tabs) focusAndRevealTab(tabs, nextIndex);
  };

  return (
    <div className="home-ownership__experience container--flow">
      <div
        className="home-ownership__tabs"
        role="tablist"
        aria-label="What MindWP builds, what you own, and what happens after launch"
        aria-orientation="horizontal"
        data-home-fade
      >
        {OWNERSHIP_TABS.map((stage, index) => (
          <button
            type="button"
            role="tab"
            id={`ownership-tab-${stage.id}`}
            aria-controls="ownership-panel"
            aria-selected={index === activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
            className={index === activeIndex ? "is-active" : undefined}
            key={stage.id}
            onClick={(event) => {
              setActiveIndex(index);
              revealTab(event.currentTarget);
            }}
            onKeyDown={(event) => handleKeys(event, index)}
          >
            {stage.tab}
          </button>
        ))}
      </div>

      <div
        className="home-ownership__panel"
        role="tabpanel"
        id="ownership-panel"
        aria-labelledby={`ownership-tab-${active.id}`}
        tabIndex={0}
        data-home-fade
        key={active.id}
      >
        <div className="home-ownership__copy">
          <p className="home-artifact-label">{active.eyebrow}</p>
          <h3>{active.heading}</h3>
          <p>{active.body}</p>
          <p className="home-editorial-note">{active.note}</p>
        </div>
        <div className="home-ownership__layers">
          <p className="home-artifact-label">What this covers</p>
          {active.layers.map(([number, title, description, tag]) => (
            <article key={number}>
              <small>{number}</small>
              <div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
              {tag ? <span>{tag}</span> : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
