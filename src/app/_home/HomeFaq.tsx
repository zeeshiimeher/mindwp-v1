"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What makes a website “smart”?",
    answer:
      "It is built around the questions your customers actually ask, the evidence that answers them, and a next step that fits the decision — not a template with your logo on it.",
  },
  {
    question: "Can MindWP improve a website I already have?",
    answer:
      "Often, yes. The review looks at what already works before recommending a rebuild. Sometimes the priority is a page, a clearer path, or the handling around the existing site.",
  },
  {
    question: "Is Local Visibility, or the other supporting systems, compulsory?",
    answer:
      "No. The website is the foundation. The other capabilities attach only where the review finds a real weakness — most businesses start with one, some with none.",
  },
  {
    question: "Does MindWP replace my team's judgement?",
    answer:
      "No. MindWP builds the structure that carries an enquiry to the right person — acknowledgement, routing and follow-up stay visible to your team, and every commercial or clinical decision stays with you.",
  },
  {
    question: "Who owns the website?",
    answer:
      "You do. The site is built to remain clear, maintainable, and transferable rather than locking the business into a proprietary platform.",
  },
  {
    question: "Does MindWP guarantee rankings or enquiries?",
    answer:
      "No — nobody honestly can. The website is built to give the business a fair chance: clarity, proof and an easy next step. MindWP does not promise rankings, leads or bookings.",
  },
  {
    question: "What happens during the Visibility & Enquiry Review?",
    answer:
      "You share how work arrives today; MindWP reviews your visibility, your website and the enquiry path, then comes back with what is worth fixing first. It is a private conversation, not a demo or a sales script.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The structure is designed for a clean handover, and ongoing management can continue when that is useful. Either way, what is already built stays yours.",
  },
] as const;

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="home-faq section">
      <div
        className="container section-intro section-intro--centered"
        data-home-sequence
      >
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Straight answers
        </p>
        <h2 data-home-sequence-item>
          Questions, <em>answered plainly.</em>
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
