"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Which CRM do you use?",
    answer:
      "We do not have one we sell. If you already run something workable, we set this up inside it. If you do not, we choose one against the work we have agreed — the stages your enquiries genuinely pass through, the fields the record has to hold, and what your team will realistically keep up with.",
  },
  {
    question: "We already have a CRM and nobody uses it. Is that a problem?",
    answer:
      "Usually it is the reason to start rather than a reason not to. A CRM nobody uses is normally one that was never configured around the decisions your business actually makes, so it asks for information nobody has and hides the three things that matter. That is a setup problem, not a software problem.",
  },
  {
    question: "Who owns the CRM account afterwards?",
    answer:
      "That is agreed in the proposal before work begins. It depends on what is being connected and who manages it afterwards, so we put access, responsibility and any subscription cost in writing rather than assuming an arrangement.",
  },
  {
    question: "Will this send messages to our patients or clients automatically?",
    answer:
      "Reminders about a next action go to your team. Anything reaching the person who enquired is either a message you approved in advance or one your team sends. Nothing goes out on your behalf that a person has not approved, as a message or as a rule.",
  },
  {
    question: "How is this different from Lead Response & Handling?",
    answer:
      "That one owns the first response: acknowledging the enquiry, giving useful context and routing it to a named person. This one starts after that reply, when the decision is still open. They are scoped separately and either can be bought on its own.",
  },
  {
    question: "Do we need a new website for this to work?",
    answer:
      "No. But the record is only as good as what reaches it, and if your enquiry path does not capture context or route to a person, follow-up starts from less. The review looks at both, and says which one is actually costing you.",
  },
  {
    question: "What about consent and data protection?",
    answer:
      "We build the record so it can hold the channel someone chose, what they agreed to and how they stop it — and we do not put anything in it you have not agreed to collect. What you are legally required to capture and retain remains your responsibility, and we set the rules up to match your decisions.",
  },
  {
    question: "Can you chase quotes and prices for us?",
    answer:
      "No. Preparing, pricing and sending an estimate is your team's decision and stays that way. The record holds who owes what and by when, so nothing waits on a reminder nobody set.",
  },
  {
    question: "What happens to the record if we stop the subscription?",
    answer:
      "The record lives in the platform you subscribe to. Before setup we agree what an export looks like and who can take it, which is part of the access conversation rather than something to discover later.",
  },
] as const;

export function FucFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="fuc-faq section">
      <div className="container section-intro section-intro--centered">
        <p className="eyebrow eyebrow--centered">Straight answers</p>
        <h2>Questions about ownership, permission, CRM use and ongoing support.</h2>
        <p>
          What a business owner asks before letting anything hold their open conversations — or
          contact the people in them.
        </p>
      </div>

      <div className="container container--narrow fuc-faq__items">
        {FAQS.map((item, index) => {
          const open = index === openIndex;
          const buttonId = `fuc-faq-button-${index}`;
          const panelId = `fuc-faq-panel-${index}`;

          return (
            <article key={item.question} className={open ? "is-open" : undefined}>
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
