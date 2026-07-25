"use client";

import { useState } from "react";

/**
 * Section 3. One finished page, and the five disciplines that decided it.
 *
 * The control adds emphasis; it never gates content. Every discipline's summary
 * is present as text at all times, and choosing one only changes a highlight on
 * the decorative artwork beside it. Without JavaScript the page renders in full
 * and all five summaries still read.
 */

interface Discipline {
  id: string;
  name: string;
  decides: string;
  body: string;
}

const DISCIPLINES: readonly Discipline[] = [
  {
    id: "strategy",
    name: "Strategy",
    decides: "What the site has to resolve",
    body: "Who this is for, what they are weighing, and which decision the site exists to support. Everything below inherits from it — including what the site deliberately does not try to do.",
  },
  {
    id: "structure",
    name: "Structure",
    decides: "Which pages exist, and in what order",
    body: "One page per question worth its own page, named the way people say it, ordered the way people ask. The navigation is the visible part of a decision made much earlier.",
  },
  {
    id: "content",
    name: "Content",
    decides: "What is actually said",
    body: "The words that explain specialist work without flattening it: what is distinctive, what it involves, what it costs in time and attention, and what falls outside the offer.",
  },
  {
    id: "design",
    name: "Design",
    decides: "How it looks like this business",
    body: "Colour, type, photography and spacing chosen so the site is recognisably one business rather than a competent example of its category — and so hierarchy reads before anything is read.",
  },
  {
    id: "technology",
    name: "Technology",
    decides: "What the build has to do reliably",
    body: "Speed, accessible markup, search readiness, forms that validate on the server, and a structure your team can maintain. Chosen to fit the site, not to justify a platform.",
  },
];

export function SwsDeliberateSystem() {
  const [active, setActive] = useState("strategy");

  return (
    <section id="deliberate-system" className="sws-deliberate section on-mist">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Deliberate system
          </p>
          <h2 data-sws-item>
            The page is the surface. <em>The thinking underneath gives every part a job.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            Nothing on a finished page is there because it looked balanced. Each part was decided by
            one of five disciplines, and each discipline is answerable for a different question. When
            a site feels arbitrary, it is usually because one of them never happened.
          </p>
        </div>
      </div>

      <div className="container disc" data-active={active}>
        <div className="disc__art" aria-hidden="true">
          <svg className="disc__svg" viewBox="0 0 340 470" fill="none" focusable="false">
            <defs>
              <linearGradient id="disc-photo" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22415c" />
                <stop offset="100%" stopColor="#54ab8e" />
              </linearGradient>
            </defs>

            <rect x="10" y="8" width="320" height="454" rx="6" className="disc__page" />

            <g className="disc__r" data-r="structure design">
              <circle cx="32" cy="32" r="6" className="disc__logo" />
              <rect x="44" y="29" width="34" height="6" rx="3" className="disc__ink" />
              <rect x="196" y="29" width="24" height="5" rx="2.5" className="disc__dim" />
              <rect x="228" y="29" width="20" height="5" rx="2.5" className="disc__dim" />
              <rect x="256" y="29" width="18" height="5" rx="2.5" className="disc__dim" />
              <rect x="284" y="24" width="34" height="15" rx="7.5" className="disc__chip" />
            </g>
            <path d="M10 52 H330" className="disc__hair" />

            <g className="disc__r" data-r="strategy content">
              <rect x="26" y="70" width="228" height="12" rx="5" className="disc__ink" />
              <rect x="26" y="90" width="170" height="12" rx="5" className="disc__ink" />
            </g>

            <g className="disc__r" data-r="design">
              <rect x="26" y="116" width="288" height="96" rx="5" fill="url(#disc-photo)" />
            </g>

            <g className="disc__r" data-r="content">
              <rect x="26" y="226" width="240" height="6" rx="3" className="disc__dim" />
              <rect x="26" y="238" width="264" height="6" rx="3" className="disc__dim" />
              <rect x="26" y="250" width="196" height="6" rx="3" className="disc__dim" />
            </g>

            <g className="disc__r" data-r="strategy design">
              <rect x="26" y="270" width="112" height="24" rx="5" className="disc__cta" />
            </g>

            <g className="disc__r" data-r="structure">
              <rect x="26" y="316" width="88" height="70" rx="4" className="disc__tile" />
              <rect x="126" y="316" width="88" height="70" rx="4" className="disc__tile" />
              <rect x="226" y="316" width="88" height="70" rx="4" className="disc__tile" />
              <rect x="38" y="330" width="48" height="6" rx="3" className="disc__ink" />
              <rect x="138" y="330" width="48" height="6" rx="3" className="disc__ink" />
              <rect x="238" y="330" width="48" height="6" rx="3" className="disc__ink" />
              <rect x="38" y="344" width="62" height="5" rx="2.5" className="disc__dim" />
              <rect x="138" y="344" width="62" height="5" rx="2.5" className="disc__dim" />
              <rect x="238" y="344" width="62" height="5" rx="2.5" className="disc__dim" />
            </g>

            <g className="disc__r" data-r="technology">
              <rect x="26" y="404" width="180" height="15" rx="4" className="disc__field" />
              <rect x="26" y="424" width="180" height="15" rx="4" className="disc__field" />
              <rect x="216" y="404" width="98" height="35" rx="5" className="disc__cta" />
              <path d="M10 452 H330" className="disc__hair" />
            </g>
          </svg>
        </div>

        <ol className="disc__list">
          {DISCIPLINES.map((item, index) => (
            <li key={item.id} className={item.id === active ? "is-active" : undefined}>
              <button
                type="button"
                aria-pressed={item.id === active}
                onClick={() => setActive(item.id)}
                onFocus={() => setActive(item.id)}
                onMouseEnter={() => setActive(item.id)}
              >
                <span className="disc__num">{String(index + 1).padStart(2, "0")}</span>
                <span className="disc__head">
                  <strong>{item.name}</strong>
                  <span className="disc__decides">{item.decides}</span>
                </span>
              </button>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="container">
        <p className="disc__close editorial-note" data-sws-fade>
          Five disciplines, one artefact. The visitor sees only the last of them.
        </p>
      </div>
    </section>
  );
}
