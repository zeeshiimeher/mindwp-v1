"use client";

import { type KeyboardEvent, useState } from "react";

import { focusAndRevealTab, revealTab } from "@/app/_home-b/tabNavigation";
import { useResponsiveTabOrientation } from "@/app/_home-b/useResponsiveTabOrientation";
import { Icon, type IconName } from "@/components/ui/Icon";

const ATTENTION_MOMENTS: readonly {
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
    label: "The exact search",
    eyebrow: "The exact search",
    icon: "search",
    title: "They searched for exactly this, and landed on everything.",
    body: "A search for one specific treatment or service opens onto a general homepage instead of the page built to answer it. The click already proved intent; the page didn't meet it.",
    note: "The most qualified attention is the easiest to lose.",
  },
  {
    number: "02",
    label: "The local search",
    eyebrow: "The local search",
    icon: "map-pin",
    title: "Nearby and looking, not yet convinced.",
    body: "A map listing gets someone as far as the website. If the site doesn't confirm the same service, area and trust the listing promised, the next result gets the click instead.",
    note: "Being found nearby only starts the decision.",
  },
  {
    number: "03",
    label: "The referral",
    eyebrow: "The referral",
    icon: "message-square",
    title: "Someone already vouched for you.",
    body: "A referred visitor arrives already inclined to trust you. A generic homepage that doesn't confirm what they were told wastes the warmest attention a business gets.",
    note: "A referral deserves a site that meets it halfway.",
  },
  {
    number: "04",
    label: "The paid click",
    eyebrow: "The paid click",
    icon: "globe",
    title: "The advert earns the click; the page has to earn the rest.",
    body: "Advertising can put the offer in front of the right person. What the click lands on still has to confirm relevance and offer a clear next step, or the spend only bought a visit.",
    note: "Attention doesn't stay just because it was paid for.",
  },
  {
    number: "05",
    label: "The second look",
    eyebrow: "The second look",
    icon: "star",
    title: "They check the proof before they call.",
    body: "Reviews, past work and credentials get checked quietly before contact. If the website doesn't hold that proof, the visitor goes looking for it somewhere else.",
    note: "Confidence is usually built before the phone is picked up.",
  },
  {
    number: "06",
    label: "The remembered name",
    eyebrow: "The remembered name",
    icon: "folder",
    title: "They come back later, still undecided.",
    body: "A visitor who has seen the business before returns directly, by name rather than by search. If the site still doesn't answer their question, familiarity alone won't close the gap.",
    note: "A second visit deserves a clearer answer than the first.",
  },
];

export function HomeAttention() {
  const [activeIndex, setActiveIndex] = useState(0);
  const orientation = useResponsiveTabOrientation();
  const active = ATTENTION_MOMENTS[activeIndex];

  const handleKeys = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      nextIndex = (index - 1 + ATTENTION_MOMENTS.length) % ATTENTION_MOMENTS.length;
    }
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      nextIndex = (index + 1) % ATTENTION_MOMENTS.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = ATTENTION_MOMENTS.length - 1;

    setActiveIndex(nextIndex);
    const tabs = event.currentTarget
      .closest("[role='tablist']")
      ?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    if (tabs) focusAndRevealTab(tabs, nextIndex);
  };

  return (
    <section id="attention" className="home-b-attention section">
      <div className="container section-intro" data-home-b-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-home-b-sequence-item>
            Existing attention
          </p>
          <h2 data-home-b-sequence-item>
            Search, referrals and advertising <em>still need somewhere convincing to land.</em>
          </h2>
        </div>
      </div>

      <div className="container container--split home-b-attention__layout">
        <ol
          className="home-b-attention__index"
          role="tablist"
          aria-label="Where existing attention arrives"
          aria-orientation={orientation}
          data-home-b-stagger
        >
          {ATTENTION_MOMENTS.map((moment, index) => {
            const selected = index === activeIndex;
            return (
              <li role="presentation" key={moment.number} data-home-b-stagger-item>
                <button
                  type="button"
                  role="tab"
                  id={`attention-tab-${moment.number}`}
                  aria-controls="attention-panel"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  className={selected ? "is-active" : undefined}
                  onClick={(event) => {
                    setActiveIndex(index);
                    revealTab(event.currentTarget);
                  }}
                  onKeyDown={(event) => handleKeys(event, index)}
                >
                  <small>{moment.number}</small>
                  <span>{moment.label}</span>
                  <Icon name="arrow-right" size={16} />
                </button>
              </li>
            );
          })}
        </ol>

        <article
          className="home-b-attention__detail"
          role="tabpanel"
          id="attention-panel"
          aria-labelledby={`attention-tab-${active.number}`}
          tabIndex={0}
          data-home-b-fade
          key={active.number}
        >
          <span className="home-b-attention__icon">
            <Icon name={active.icon} size={18} />
          </span>
          <p className="home-b-artifact-label">{active.eyebrow}</p>
          <h3>{active.title}</h3>
          <p>{active.body}</p>
          <p className="home-b-attention__note">{active.note}</p>
        </article>
      </div>
    </section>
  );
}
