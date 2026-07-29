"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Can I buy the enquiry side without rebuilding the website?",
    answer:
      "Yes. Local SEO Authority, Lead Response & Handling, Follow-Up & CRM and Reputation & Review can each be scoped against a capable existing website. A rebuild is never a prerequisite.",
  },
  {
    question: "Can MindWP improve a website I already have?",
    answer:
      "Yes. The review looks at what already works before anything is recommended. Sometimes the priority is a page, a clearer path, or the handling around the site rather than the site itself.",
  },
  {
    question: "Do I have to take everything?",
    answer:
      "No, in either direction. Smart Website Systems is the usual place to start, but nothing is compulsory and nothing is a precondition for anything else. Each service is scoped separately, and we recommend only what the review shows is worth doing.",
  },
  {
    question: "Who sets all of this up — and do we end up running new software?",
    answer:
      "MindWP handles the setup. We plan how the website, CRM and appropriate automation should work together, configure and connect each part, test the complete path, and onboard your team before handover. Where your team needs to use a shared inbox or CRM, it is organised around their responsibilities — you are not handed an empty platform and left to build the process yourself.",
  },
  {
    question: "Does MindWP replace my team's judgement?",
    answer:
      "No. MindWP builds the structure that carries an enquiry to the right person — acknowledgement, routing and follow-up stay visible to your team, and every commercial or clinical decision stays with you.",
  },
  {
    question: "How are website ownership and handover handled?",
    answer:
      "Ownership, licences, handover and ongoing responsibilities are set out clearly in the proposal before work begins. The exact arrangement depends on what is being built and which services are included.",
  },
  {
    question: "Does MindWP guarantee rankings or enquiries?",
    answer:
      "No. MindWP does not promise rankings, leads or bookings. The website is built to improve clarity, proof and the route to an appropriate next step, but commercial outcomes depend on factors beyond the website alone.",
  },
  {
    question: "What happens during the Visibility & Enquiry Review?",
    answer:
      "You share how work reaches you today; MindWP looks at your visibility, your website and the enquiry path, then comes back with what is worth doing first. It is a diagnosis rather than a pitch, and it works with or without an existing website.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The build is designed for a clean handover. Where it helps, MindWP can stay responsible for agreed website and enquiry-system work on an ongoing basis. It is offered, never required, and what it covers is set out before it starts.",
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
