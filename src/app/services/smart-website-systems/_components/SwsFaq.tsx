"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL_SHORT } from "@/lib/cta/labels";

import { SWS_FAQS } from "../content";

/**
 * Frequently asked questions — plan section 13.
 *
 * A centred intro over a narrow accordion is the site's default and it leaves
 * the widest surface on the page half empty. Here the heading becomes a rail
 * that stays with the reader while they work down the questions, which is what
 * an objections section is actually for — and it gives the CTA somewhere to sit
 * without interrupting the list.
 */
export function SwsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="sws-faq section">
      <div className="container sws-faq__layout">
        <div className="sws-faq__rail" data-sws-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-sws-sequence-item>
              Frequently asked questions
            </p>
            <h2 data-sws-sequence-item>
              Smart website and connected-system questions, <em>answered.</em>
            </h2>
          </div>
          <p data-sws-sequence-item>
            Scope, existing websites, tools, ownership, management, cost and timing — the things
            worth knowing before a conversation, not after it.
          </p>
          <div className="sws-faq__rail-action" data-sws-sequence-item>
            <Button href={CONTACT_PATH} variant="outline">
              {PRIMARY_CTA_LABEL_SHORT}
            </Button>
            <small>Anything not answered here is worth asking in the review.</small>
          </div>
        </div>

        <div className="sws-faq__items" data-sws-stagger>
          {SWS_FAQS.map((item, index) => {
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
                    <span className="sws-faq__index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="sws-faq__question">{item.question}</span>
                    <span className="sws-faq__toggle" aria-hidden="true">
                      {open ? "−" : "+"}
                    </span>
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
      </div>
    </section>
  );
}
