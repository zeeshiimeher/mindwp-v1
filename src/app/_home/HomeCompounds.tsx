"use client";

import { type KeyboardEvent, useState } from "react";

import { focusAndRevealTab, revealTab } from "@/app/_home/tabNavigation";

const STAGES = [
  {
    id: "launch",
    tab: "Launch week",
    eyebrow: "Launch week",
    heading: "The front door starts working.",
    body: "The offer is clear, the proof is visible, and every call or form finally has somewhere to land.",
    note: "Each layer stays when the next one lands. That is the compounding.",
    layers: [
      [
        "01",
        "A clear front door",
        "Offer, proof, and next step — visible on arrival",
        "New this stage",
      ],
      [
        "02",
        "Enquiries land somewhere",
        "Calls and forms reach a person, not a void",
        "New this stage",
      ],
    ],
  },
  {
    id: "six-months",
    tab: "Month six",
    eyebrow: "Month six",
    heading: "Real enquiries sharpen the site.",
    body: "Questions from calls and forms reveal where pages need more clarity, which proof buyers use, and where follow-up still slows.",
    note: "The site improves from evidence, not from another round of guesswork.",
    layers: [
      ["01", "A clear front door", "Offer, proof, and next step — visible on arrival", ""],
      ["02", "Enquiries land somewhere", "Calls and forms reach a person, not a void", ""],
      [
        "03",
        "Every enquiry has an owner",
        "Nothing waits on whoever notices first",
        "New this stage",
      ],
      [
        "04",
        "Follow-up has a rhythm",
        "Quotes get a next touch before they cool",
        "New this stage",
      ],
    ],
  },
  {
    id: "year-two",
    tab: "Year two",
    eyebrow: "Year two",
    heading: "Proof does the persuading.",
    body: "Finished work keeps returning as reviews and proof. New buyers arrive already half-convinced.",
    note: "Each layer stays when the next one lands. That is the compounding.",
    layers: [
      ["01", "A clear front door", "Offer, proof, and next step — visible on arrival", ""],
      ["02", "Enquiries land somewhere", "Calls and forms reach a person, not a void", ""],
      ["03", "Every enquiry has an owner", "Nothing waits on whoever notices first", ""],
      ["04", "Follow-up has a rhythm", "Quotes get a next touch before they cool", ""],
      [
        "05",
        "Reviews return as proof",
        "Finished work asks for the review at the right moment",
        "New this stage",
      ],
      [
        "06",
        "The next buyer arrives warmer",
        "Proof compounds into easier decisions",
        "New this stage",
      ],
    ],
  },
] as const;

export function HomeCompounds() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = STAGES[activeIndex];

  const handleKeys = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      return;
    }
    event.preventDefault();

    let nextIndex = index;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      nextIndex = (index - 1 + STAGES.length) % STAGES.length;
    }
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      nextIndex = (index + 1) % STAGES.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = STAGES.length - 1;

    setActiveIndex(nextIndex);
    const tabs =
      event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    if (tabs) focusAndRevealTab(tabs, nextIndex);
  };

  return (
    <div className="home-compounds__experience container--flow">
      <div
        className="home-compounds__tabs"
        role="tablist"
        aria-label="How the website compounds"
        aria-orientation="horizontal"
        data-home-fade
      >
        {STAGES.map((stage, index) => (
          <button
            type="button"
            role="tab"
            id={`compound-tab-${stage.id}`}
            aria-controls="compound-panel"
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
        className="home-compounds__panel"
        role="tabpanel"
        id="compound-panel"
        aria-labelledby={`compound-tab-${active.id}`}
        tabIndex={0}
        data-home-fade
        key={active.id}
      >
        <div className="home-compounds__copy">
          <p className="home-artifact-label">{active.eyebrow}</p>
          <h3>{active.heading}</h3>
          <p>{active.body}</p>
          <p className="home-editorial-note">{active.note}</p>
        </div>
        <div className="home-compounds__layers">
          <p className="home-artifact-label">What the site holds by now</p>
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
