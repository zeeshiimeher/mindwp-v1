"use client";

import type { CSSProperties } from "react";
import { useRef, useState } from "react";

import { Icon } from "@/components/ui/Icon";

const INTENTS = [
  {
    id: "home-services",
    label: "Home services",
    sentence: {
      before: "Someone searching ",
      focus: "boiler replacement nearby",
      after: " is comparing relevance, evidence and a clear next step.",
    },
    cards: [
      {
        icon: "map-pin" as const,
        title: "Boiler replacement in the service area",
        description: "A page that matches the work and the places genuinely served.",
      },
      {
        icon: "star" as const,
        title: "Proof, in view",
        description: "Relevant project detail and genuine proof, shown on the page.",
      },
      {
        icon: "arrow-right" as const,
        title: "Clear next step",
        description: "A direct route to ask, enquire or request a visit.",
      },
    ],
  },
  {
    id: "specialist-clinics",
    label: "Specialist clinics",
    sentence: {
      before: "Someone searching ",
      focus: "dental implants near New Malden",
      after: " is comparing options carefully.",
    },
    cards: [
      {
        icon: "map-pin" as const,
        title: "Dental implants in New Malden",
        description: "A relevant treatment page connected to the local presence.",
      },
      {
        icon: "star" as const,
        title: "Proof, in view",
        description: "Practitioner context and genuine patient proof, shown on the page.",
      },
      {
        icon: "arrow-right" as const,
        title: "Clear next step",
        description: "A direct route to request a consultation.",
      },
    ],
  },
] as const;

export function LocalSeoIntentTabs() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = INTENTS[selectedIndex];

  const selectAndFocus = (nextIndex: number) => {
    const index = (nextIndex + INTENTS.length) % INTENTS.length;
    setSelectedIndex(index);
    tabRefs.current[index]?.focus();
  };

  return (
    <div className="lseo-intent__experience">
      <div
        className="lseo-intent__tabs"
        role="tablist"
        aria-label="Local search examples"
        data-lseo-stagger
      >
        {INTENTS.map((intent, index) => (
          <button
            key={intent.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`lseo-intent-tab-${intent.id}`}
            type="button"
            role="tab"
            aria-selected={selectedIndex === index}
            aria-controls={`lseo-intent-panel-${intent.id}`}
            tabIndex={selectedIndex === index ? 0 : -1}
            data-lseo-stagger-item
            onClick={() => setSelectedIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault();
                selectAndFocus(selectedIndex - 1);
              } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                event.preventDefault();
                selectAndFocus(selectedIndex + 1);
              } else if (event.key === "Home") {
                event.preventDefault();
                selectAndFocus(0);
              } else if (event.key === "End") {
                event.preventDefault();
                selectAndFocus(INTENTS.length - 1);
              }
            }}
          >
            {intent.label}
          </button>
        ))}
      </div>

      <div
        key={selected.id}
        id={`lseo-intent-panel-${selected.id}`}
        className="lseo-intent__panel"
        role="tabpanel"
        aria-labelledby={`lseo-intent-tab-${selected.id}`}
      >
        <p className="lseo-intent__sentence" data-lseo-tab-copy>
          {selected.sentence.before}
          <strong>{selected.sentence.focus}</strong>
          {selected.sentence.after}
        </p>

        <p className="lseo-intent__destination-label" data-lseo-tab-label>
          The destination page
        </p>
        <div className="lseo-intent__cards" aria-label="Illustrative destination-page checks">
          {selected.cards.map((card, index) => (
            <article
              key={card.title}
              style={{ "--card-index": index } as CSSProperties}
              data-lseo-tab-card
            >
              <span className="lseo-icon-disc" aria-hidden="true">
                <Icon name={card.icon} size={16} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
