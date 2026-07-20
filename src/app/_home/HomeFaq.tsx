"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What does the Website Review actually involve?",
    answer:
      "You share your website and how enquiries arrive today. We review the site, the pages that matter, your local presence, and what happens after someone makes contact — then come back with what is worth fixing first. It is a private conversation, not a demo or a sales script.",
  },
  {
    question: "Do I need all five systems?",
    answer:
      "No. The website is the hub, but the other capabilities attach only where the work actually slips. Some businesses need one or two first; the review establishes the useful starting point.",
  },
  {
    question: "I already have a website. Do I have to rebuild?",
    answer:
      "Not automatically. We review what is already working before recommending a rebuild. Sometimes the priority is a page, a clearer path, or the handling around the existing site.",
  },
  {
    question: "We already spend on ads. How does this help?",
    answer:
      "Ads can bring attention, but the website still has to turn that attention into a confident next step. The review looks for the gaps that make paid interest hesitate or disappear after contact.",
  },
  {
    question: "Who owns the website?",
    answer:
      "You do. The site is built to remain clear, maintainable, and transferable rather than locking the business into a proprietary platform.",
  },
  {
    question: "Do you hand over, or manage it ongoing?",
    answer:
      "Either. The structure is designed for a clean handover, and ongoing work can continue when that is useful. The layers already built remain yours in both cases.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Scope depends on what the review finds and what should be fixed first. Recommendations and a fixed scope are agreed before work begins rather than forcing every business into one package.",
  },
] as const;

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="home-faq section">
      <div
        className="container container--content section-intro section-intro--centered"
        data-home-sequence
      >
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Straight answers
        </p>
        <h2 data-home-sequence-item>
          Questions, <span className="home-heading-muted">answered plainly.</span>
        </h2>
        <p data-home-sequence-item>
          No buried sales language. The common questions are practical because the work is
          practical.
        </p>
      </div>

      <div className="container container--narrow home-faq__items" data-home-stagger>
        {FAQS.map((item, index) => {
          const open = index === openIndex;
          const buttonId = `faq-button-${index}`;
          const panelId = `faq-panel-${index}`;
          return (
            <article
              key={item.question}
              className={open ? "is-open" : undefined}
              data-home-stagger-item
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
