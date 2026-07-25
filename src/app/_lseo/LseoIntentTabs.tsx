"use client";

import type { CSSProperties } from "react";
import { useRef, useState } from "react";

import { Icon } from "@/components/ui/Icon";

/**
 * Two illustrative searches, both grounded in work a business genuinely does.
 * The examples are composed, not client data.
 */
const INTENTS = [
  {
    id: "specialist-clinics",
    label: "Specialist clinics",
    sentence: {
      before: "Someone searching ",
      focus: "dental implants near New Malden",
      after: " is comparing carefully before they commit.",
    },
    cards: [
      {
        icon: "map-pin" as const,
        title: "A treatment you genuinely provide",
        description: "The implant page, connected to the practice that actually does the work.",
      },
      {
        icon: "star" as const,
        title: "Practitioner context and proof",
        description: "Who performs it, what it involves, and the evidence already available.",
      },
      {
        icon: "arrow-right" as const,
        title: "One clear next step",
        description: "A direct route to ask a question or request a consultation.",
      },
    ],
  },
  {
    id: "expert-led-services",
    label: "Expert-led services",
    sentence: {
      before: "Someone searching ",
      focus: "employment solicitor in Kingston",
      after: " is deciding who to trust with something difficult.",
    },
    cards: [
      {
        icon: "map-pin" as const,
        title: "A service in a place you serve",
        description: "One page for the work and the area, not a page per postcode.",
      },
      {
        icon: "star" as const,
        title: "The expertise made visible",
        description: "Who handles it, how it usually works, and what it will not cover.",
      },
      {
        icon: "arrow-right" as const,
        title: "One clear next step",
        description: "A direct route to make a first, low-commitment enquiry.",
      },
    ],
  },
] as const;

export function LseoIntentTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = INTENTS[selectedIndex];

  const selectAndFocus = (nextIndex: number) => {
    const index = (nextIndex + INTENTS.length) % INTENTS.length;
    setSelectedIndex(index);
    tabRefs.current[index]?.focus();
  };

  return (
    <div className="lsa-intent__experience">
      <div
        className="lsa-intent__tabs"
        role="tablist"
        aria-label="Local search examples"
        data-lsa-stagger
      >
        {INTENTS.map((intent, index) => (
          <button
            key={intent.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`lsa-intent-tab-${intent.id}`}
            type="button"
            role="tab"
            aria-selected={selectedIndex === index}
            aria-controls={`lsa-intent-panel-${intent.id}`}
            tabIndex={selectedIndex === index ? 0 : -1}
            data-lsa-stagger-item
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
        id={`lsa-intent-panel-${selected.id}`}
        className="lsa-intent__panel"
        role="tabpanel"
        aria-labelledby={`lsa-intent-tab-${selected.id}`}
      >
        <p className="lsa-intent__sentence" data-lsa-tab-copy>
          {selected.sentence.before}
          <strong>{selected.sentence.focus}</strong>
          {selected.sentence.after}
        </p>

        <p className="lsa-intent__destination-label" data-lsa-tab-label>
          What has to be true
        </p>
        <div className="lsa-intent__cards" aria-label="Illustrative destination-page checks">
          {selected.cards.map((card, index) => (
            <article
              key={card.title}
              style={{ "--card-index": index } as CSSProperties}
              data-lsa-tab-card
            >
              <span className="lsa-icon-disc" aria-hidden="true">
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
