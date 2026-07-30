"use client";

import { useState } from "react";

/**
 * Homepage-level objections only. Setup and software, website ownership and
 * handover, and post-launch operation are engagement-level questions and belong
 * to the Smart Website Systems page's own FAQ — answering them here turned a
 * homepage into a proposal.
 *
 * This is also the single place the non-claims are stated. The Right fit
 * section used to repeat them in its second column.
 */
const FAQS = [
  {
    question: "Can I buy the enquiry side without rebuilding the website?",
    answer:
      "Yes. Local SEO Authority, Lead Response & Handling, Follow-Up & CRM and Reputation & Review can each be scoped against a capable existing website. A rebuild is never a prerequisite.",
  },
  {
    question: "Do I have to take everything?",
    answer:
      "No, in either direction. Smart Website Systems is the usual place to start, but nothing is compulsory and nothing is a precondition for anything else. Each service is scoped separately, and we recommend only what the review shows is worth doing.",
  },
  {
    question: "Does MindWP replace my team's judgement?",
    answer:
      "No. MindWP builds the structure that carries an enquiry to the right person. Acknowledgement, routing and follow-up stay visible to your team, and every commercial or clinical decision stays with you.",
  },
  {
    question: "Does MindWP guarantee rankings or enquiries?",
    answer:
      "No. MindWP does not promise rankings, leads, bookings or revenue, and a website alone does not create demand. What we are accountable for is the mechanism — how clearly the work is presented, where proof sits, and whether the enquiry path is built, tested and kept consistent.",
  },
  {
    question: "What happens during the Visibility & Enquiry Review?",
    answer:
      "You share how work reaches you today; MindWP looks at your visibility, your website and the enquiry path, then comes back with what is worth doing first. It is a diagnosis rather than a pitch.",
  },
  {
    question: "Do you run our advertising?",
    answer:
      "No. Advertising can bring attention; our responsibility starts with where that attention lands and what happens after someone acts on it.",
  },
] as const;

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="home-faq section">
      <div className="container section-intro section-intro--centered" data-home-sequence>
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
