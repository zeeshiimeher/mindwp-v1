"use client";

import { useState } from "react";

/**
 * Section 15. The Homepage FAQ system with SWS-specific questions.
 *
 * This is where the practical CRM, automation, ownership and support questions
 * are answered, so Section 13 never has to become a product page. Every answer
 * that touches ownership, licensing or support states that the arrangement is
 * written into the proposal rather than inventing a universal policy.
 */

const FAQS = [
  {
    question: "Do we have to rebuild, or can our current site be improved?",
    answer:
      "Sometimes improvement is the right answer, and the review says so when it is. A rebuild is worth it when the structure itself is the problem — when the pages, their order and their content cannot answer the questions people arrive with, no matter how they are restyled. If the structure is sound and the content is the weak part, that is a smaller piece of work and we will scope it as one.",
  },
  {
    question: "Why WordPress?",
    answer:
      "Because you can own it, host it where you choose, edit it without us, and hire somebody else to work on it. It is not the only reasonable choice, but it is the one that keeps the most options open for a business intending to keep its website for years. We build with it deliberately rather than assembling it from purchased themes and page builders.",
  },
  {
    question: "Which CRM or systems can the website connect to?",
    answer:
      "Connections are agreed case by case against what you already use. We connect to systems that offer a supported, documented way in, and we test the complete path rather than just the first successful send. If your system has no supported integration, we say so before anything is scoped — not after it is signed.",
  },
  {
    question: "How much automation is actually involved?",
    answer:
      "As much as is needed to acknowledge, record, route and prompt, and no more. Automation does not quote, advise, diagnose or decide. Where a judgement is required, the system's only job is to get the enquiry to the right person with the context they need to make it.",
  },
  {
    question: "Who owns the website when it is finished?",
    answer:
      "Ownership, licences, hosting and access are set out in the proposal before work begins. The exact arrangement depends on what is being built and which services are included, so it is written down for your project rather than assumed from a general policy.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The build is designed for a clean handover: documentation, a walkthrough for whoever will maintain it, and a structure another developer could pick up. MindWP can stay involved with updates, improvements and care for the connected systems where that is agreed — but the site is not built to require us.",
  },
  {
    question: "How long does it take?",
    answer:
      "It depends on how many pages there are, how much content has to be written rather than migrated, and how quickly decisions and materials come back from your side — which is usually the deciding factor. A schedule is agreed at proposal stage against a defined scope rather than estimated in advance here.",
  },
  {
    question: "What do you need from us?",
    answer:
      "Decisions, access, and some time from somebody who genuinely knows the work. MindWP writes the content, but it has to be accurate, which means a person with real expertise reviewing what is said about the specialist parts before it goes live.",
  },
  {
    question: "Do you guarantee rankings or enquiries?",
    answer:
      "No. The website is built to make the work understandable, the evidence checkable and the next step obvious. What that produces commercially also depends on demand, pricing, competition and how enquiries are handled once they arrive — none of which the website controls, and none of which we will pretend to guarantee.",
  },
];

export function SwsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="straight-answers" className="sws-faq section section--quiet on-white">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-item>
          Straight answers
        </p>
        <h2 data-sws-item>
          Questions about rebuilding, WordPress, CRM connections,{" "}
          <em>ownership and support.</em>
        </h2>
        <p data-sws-item>
          The practical objections, answered without a sales layer over the top.
        </p>
      </div>

      <div className="container container--narrow sws-faq__items" data-sws-stagger>
        {FAQS.map((item, index) => {
          const open = index === openIndex;
          const buttonId = `sws-faq-button-${index}`;
          const panelId = `sws-faq-panel-${index}`;
          return (
            <article key={item.question} className={open ? "is-open" : undefined} data-sws-stagger-item>
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
