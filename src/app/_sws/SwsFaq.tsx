"use client";

import { useState } from "react";

/**
 * Reuses Home FAQ's exact single-column accordion composition — content
 * rewritten for rebuilding, WordPress, CRM connections, ownership and
 * support, per the user's explicit instruction to copy this section.
 */
const FAQS = [
  {
    question: "We already have a WordPress site — does this mean starting over?",
    answer:
      "Not necessarily. The review looks at what's already working before recommending a rebuild. Sometimes the priority is a specific page, a clearer path through the site, or the handling around it rather than the whole thing.",
  },
  {
    question: "Do we have to move away from WordPress?",
    answer:
      "No. WordPress can be a sound foundation when it's built and maintained properly. The choice of platform follows what the site needs to do — performance, accessibility, search readiness and who maintains it afterwards — not a preference for or against any one tool.",
  },
  {
    question: "Can this connect to the CRM we already use?",
    answer:
      "Often, yes — the review covers what you use today and what a connection would need to do. Where a connection is worth building, it's scoped, configured, tested end to end and handed over with your team, not left as raw access to a platform.",
  },
  {
    question: "Who owns the website once it's built?",
    answer:
      "Ownership, licences, handover and any ongoing responsibilities are set out clearly in the proposal before work begins. The exact arrangement depends on what's being built and which connected services are included.",
  },
  {
    question: "What happens if we need changes after launch?",
    answer:
      "The build is designed for a clean handover, so your team can make ordinary updates themselves. For larger changes, MindWP can remain involved with updates and improvements where that's agreed — either way, what happens after handover is made clear upfront.",
  },
  {
    question: "Is ongoing support included, or a separate arrangement?",
    answer:
      "Support is scoped separately from the build itself, so you can see exactly what it covers before agreeing to it. Nothing ongoing is assumed or added by default.",
  },
  {
    question: "What if we're not ready to rebuild the whole site yet?",
    answer:
      "That's a common starting point. The Visibility & Enquiry Review is built to show what's worth fixing first — sometimes that's the full site, sometimes it's a page, the enquiry path, or the handling around an existing site.",
  },
] as const;

export function SwsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="straight-answers" className="sws-faq section">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-sequence-item>
          Straight answers
        </p>
        <h2 data-sws-sequence-item>
          Questions about rebuilding, WordPress, CRM connections,{" "}
          <em>ownership and support.</em>
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
