"use client";

import { useState } from "react";

/**
 * Section 15. Reuses the Homepage FAQ mechanism — one open panel, real heading
 * order, keyboard-operable buttons — with questions specific to a rebuild
 * decision.
 *
 * Answers must not settle what Strategy leaves open: ownership, licensing and
 * ongoing management remain proposal-level decisions, and no price, timescale
 * guarantee or ranking promise appears here.
 */

const FAQS = [
  {
    question: "Do I need a full rebuild, or can you improve what I already have?",
    answer:
      "Often the second. The review looks at what already works before recommending anything, and the honest answer is frequently a few pages, a clearer path and better proof placement rather than starting again. A rebuild is recommended when the current site's structure is the thing getting in the way.",
  },
  {
    question: "Why WordPress?",
    answer:
      "Because your team can run it without us, and because a future developer inherits something conventional. It is a delivery choice, not the product — the value is in what gets planned and built, and the same thinking would apply on another platform.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Yes, where it holds up. Where it does not, we say so and show you what changes — usually typography, spacing and how photography is handled rather than a new logo. Distinctive presence is mostly about how the material is composed, not about starting the identity again.",
  },
  {
    question: "Do we have to connect a CRM?",
    answer:
      "No. A CRM is connected when a diagnosed problem needs it — usually that enquiries are arriving but losing their context or their owner. If a shared inbox already works, that is a legitimate destination and we will say so rather than sell you a platform.",
  },
  {
    question: "Who owns the website afterwards?",
    answer:
      "Ownership, licences, accounts, handover and any ongoing responsibilities are set out in the proposal before work begins. The exact arrangement depends on what is being built and which services are included — we would rather agree it in writing up front than describe a standard policy that may not fit your engagement.",
  },
  {
    question: "What does it cost, and how long does it take?",
    answer:
      "Both depend on scope, and scope comes out of the review. There is no standard price or package here — a three-page clarification and a full rebuild are different pieces of work. Cost and timescale are agreed before anything starts.",
  },
  {
    question: "Will this get us ranking higher, or bring in more enquiries?",
    answer:
      "No promises on either. The build makes a site fast, accessible, well-structured and honest about what it offers, which is what search and buyers both reward — but rankings and enquiry volume depend on competition, demand and the work itself, none of which a website controls alone.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The build is designed for a clean handover, with your team onboarded before the site goes live. MindWP can stay involved with updates, improvements and care for the connected parts where that is agreed, and the arrangement is made explicit either way.",
  },
] as const;

export function SwsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="sws-faq section section--quiet">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-item>
          Straight answers
        </p>
        <h2 data-sws-item>
          Questions about rebuilding, WordPress, <em>connections and ownership.</em>
        </h2>
      </div>

      <div className="container container--narrow sws-faq__items" data-sws-stagger>
        {FAQS.map((item, index) => {
          const open = index === openIndex;
          const buttonId = `sws-faq-button-${index}`;
          const panelId = `sws-faq-panel-${index}`;
          return (
            <article
              key={item.question}
              className={open ? "is-open" : undefined}
              data-sws-stagger-item
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  {item.question}
                  <span aria-hidden="true">{open ? "−" : "+"}</span>
                </button>
              </h3>
              {open ? (
                <div role="region" id={panelId} aria-labelledby={buttonId}>
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
