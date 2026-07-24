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
    question: "Do I have to take the supporting services?",
    answer:
      "No — the website stands on its own. Around it you can add what fits how work actually arrives: local visibility, enquiry handling, follow-up or reviews. Each is scoped separately, and we recommend only what the review shows is worth adding.",
  },
  {
    question: "Who sets all of this up — and do we end up running new software?",
    answer:
      "MindWP handles the setup. We plan how each piece should work, configure and connect it, test the complete path, and onboard your team before handover. If your team needs to use a shared inbox or CRM, it is set up around their work — you are not handed an empty system and left to figure it out.",
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
      "The build is designed for a clean handover, and MindWP can remain involved with updates, improvements and care for the connected systems where agreed. Either way, the handover and ongoing responsibilities are made clear.",
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
