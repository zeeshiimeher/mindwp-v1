"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/**
 * Band 12 — Straight answers (paper). Split: sticky intro left, accessible FAQ
 * accordion right. Plain answers within approved scope; the ownership answer
 * honours the open Strategy decision.
 */
const FAQS = [
  {
    q: "What is a smart website, exactly?",
    a: "A site designed around a real customer decision — structure, copy, distinctive design and the build working together, through to a genuinely useful enquiry. Not a template with your logo dropped on top.",
  },
  {
    q: "Do I have to buy all the supporting services?",
    a: "No. The website leads. Local visibility, first response, follow-up and reputation are optional — added only where they earn their place around your enquiry path.",
  },
  {
    q: "What will my business own?",
    a: "That’s defined for your engagement and written down before we start. We don’t assume a single ownership or handover model — it’s a clear part of the proposal.",
  },
  {
    q: "What does a Website Review involve?",
    a: "We look at what’s helping, what’s getting in the way and what matters next for your website and enquiry path, then share findings first. There’s no obligation to build.",
  },
  {
    q: "Do you only work with clinics?",
    a: "No. Independent clinics are one important focus, but we work with specialist service businesses more broadly — wherever a careful, considered decision is at stake.",
  },
  {
    q: "Can you work with my existing WordPress site?",
    a: "Often, yes — whether that means improving what’s already there or a rebuild. The review is where we work out which of those is the honest answer.",
  },
];

export function StraightAnswersB() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section hb-faq hb--paper">
      <div className="container hb-faq__grid">
        <div className="hb-faq__intro">
          <div className="section-intro" data-anim="rise">
            <p className="eyebrow">Straight answers</p>
            <h2>
              Questions about smart websites, support <em>and working with MindWP.</em>
            </h2>
            <p className="text-lead hb-lede">
              Still weighing it up? A Website Review is the low-pressure way to get specifics.
            </p>
            <Button href="#review" variant="outline">
              Request a Website Review
            </Button>
          </div>
        </div>

        <ul className="hb-faq__list" data-anim="stagger">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li className={`hb-faq__item${isOpen ? " is-open" : ""}`} key={i}>
                <h3 className="hb-faq__q">
                  <button
                    type="button"
                    className="hb-faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={`hb-faq-panel-${i}`}
                    id={`hb-faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="hb-faq__chevron" aria-hidden="true">
                      <Icon name={isOpen ? "x" : "arrow-right"} size={16} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`hb-faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`hb-faq-q-${i}`}
                  className="hb-faq__panel"
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
