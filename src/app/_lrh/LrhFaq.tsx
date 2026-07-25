"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Is this an AI receptionist?",
    answer:
      "No. Nothing here holds a conversation, answers questions or makes decisions on your behalf. It acknowledges what arrived, adds the context the right person needs, and puts it in front of them. Everything after that is your team.",
  },
  {
    question: "How quickly does the first response go out?",
    answer:
      "Where an automatic acknowledgement is included, it is triggered when the enquiry is successfully recorded. The timing and wording of the human reply remain the expectation your team agrees and owns.",
  },
  {
    question: "What does the acknowledgement actually say?",
    answer:
      "Whatever you approve. We draft it with you, you sign it off, and it never says anything you have not agreed — no prices, no confirmed bookings, no advice.",
  },
  {
    question: "Does this work with the phone system and forms we already have?",
    answer:
      "We start by mapping what you already use. Compatibility, any replacement needs and third-party costs are confirmed before work begins.",
  },
  {
    question: "Do we have to use a CRM?",
    answer:
      "Not necessarily. Some businesses need a shared record; others need a rota and a clear inbox. Follow-Up & CRM is a separate service, scoped on its own if the review shows it is worth adding.",
  },
  {
    question: "What happens to the enquiry details?",
    answer:
      "They move through the agreed destinations and services needed for the setup. Only the context required for acknowledgement and handoff is captured, and sensitive detail is kept out of the automated path.",
  },
  {
    question: "Can it handle enquiries out of hours?",
    answer:
      "Acknowledgement does not keep office hours; people do. The out-of-hours message can say so honestly, and can carry whatever route you have agreed for anything that cannot wait.",
  },
  {
    question: "Who owns the setup afterwards?",
    answer:
      "Ownership, accounts, numbers, licences and ongoing responsibilities are agreed in the proposal before work begins. The arrangement depends on what is being connected and who will manage it afterwards.",
  },
  {
    question: "Does MindWP guarantee more enquiries or bookings?",
    answer:
      "No. This protects the enquiries you already get. It does not promise rankings, leads or bookings.",
  },
] as const;

export function LrhFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="lrh-faq section">
      <div className="container section-intro section-intro--centered" data-lrh-sequence>
        <p className="eyebrow eyebrow--centered" data-lrh-sequence-item>
          Straight answers
        </p>
        <h2 data-lrh-sequence-item>
          Acknowledgement, routing, handoff <em>and who stays responsible.</em>
        </h2>
        <p data-lrh-sequence-item>
          The practical questions a business owner asks before connecting anything to the phone
          line and the enquiry form.
        </p>
      </div>

      <div className="container container--narrow lrh-faq__items" data-lrh-stagger>
        {FAQS.map((item, index) => {
          const open = index === openIndex;
          const buttonId = `lrh-faq-button-${index}`;
          const panelId = `lrh-faq-panel-${index}`;
          return (
            <article
              key={item.question}
              className={open ? "is-open" : undefined}
              data-lrh-stagger-item
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
