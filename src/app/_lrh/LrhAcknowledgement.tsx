"use client";

import { useState } from "react";

/**
 * The acknowledgement itself, annotated.
 *
 * The artefact here is the message — set at reading scale as editorial
 * typography, not as a chat bubble or an inbox row — with each clause marked
 * and explained. Hovering or focusing an annotation lights its clause, and
 * vice versa, which is the only job the interaction has: connecting a claim to
 * the words that support it.
 *
 * The words MindWP cannot write are rendered as explicit variables rather than
 * bracketed placeholders. The timing commitment, the routing and the urgent
 * route belong to the business; the page should show that plainly instead of
 * inventing a promise on its behalf.
 *
 * Static state is complete: every clause and every annotation is legible with
 * nothing hovered, focused or open.
 */

interface Clause {
  note: string;
  title: string;
}

const CLAUSES: readonly Clause[] = [
  {
    title: "Confirms what arrived",
    note: "Their own words, repeated back — so they know the right message reached the right business.",
  },
  {
    title: "Names where it sits",
    note: "A team or a person, never “our system”. Someone is already accountable for it.",
  },
  {
    title: "Sets an expectation you agreed",
    note: "The window is yours to set, and it is the only timing commitment the message makes.",
  },
  {
    title: "Offers a real route",
    note: "For anything that cannot wait for the next working day, on a route you have chosen.",
  },
];

function Marker({ index }: { index: number }) {
  return <sup aria-hidden="true">{String(index + 1).padStart(2, "0")}</sup>;
}

export function LrhAcknowledgement() {
  const [active, setActive] = useState<number | null>(null);

  const clauseProps = (index: number) => ({
    className: "lrh-ack__clause",
    "data-active": active === index ? "true" : undefined,
    onMouseEnter: () => setActive(index),
    onMouseLeave: () => setActive((current) => (current === index ? null : current)),
  });

  return (
    <section id="acknowledgement" className="lrh-ack section">
      <div className="container section-intro" data-lrh-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-lrh-sequence-item>
            Useful acknowledgement
          </p>
          <h2 data-lrh-sequence-item>
            Respond quickly without sounding robotic <em>— or pretending the answer is ready.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-lrh-sequence-item>
            An automatic first response can be honest. It confirms what arrived, says where it now
            sits, sets the expectation you agreed, and offers a route if the situation cannot wait.
            What it must never do is answer on your behalf.
          </p>
        </div>
      </div>

      <div className="container lrh-ack__stage" data-lrh-fade>
        <blockquote className="lrh-ack__message">
          <p>
            <span {...clauseProps(0)}>
              Thanks for getting in touch about{" "}
              <span className="lrh-ack__slot">what they asked about</span>.<Marker index={0} />
            </span>{" "}
            <span {...clauseProps(1)}>
              We have your message and it is with{" "}
              <span className="lrh-ack__slot">the team or person who handles this</span>.
              <Marker index={1} />
            </span>{" "}
            <span {...clauseProps(2)}>
              You will hear back <span className="lrh-ack__slot">within the window you agreed</span>
              .<Marker index={2} />
            </span>{" "}
            <span {...clauseProps(3)}>
              If it cannot wait, <span className="lrh-ack__slot">the route you have chosen</span>.
              <Marker index={3} />
            </span>
          </p>
          <p className="lrh-ack__legend">
            Tinted wording is yours. MindWP drafts it with you and you approve it before anything
            goes live.
          </p>
        </blockquote>

        <ol className="lrh-ack__notes">
          {CLAUSES.map((clause, index) => (
            <li key={clause.title} data-active={active === index ? "true" : undefined}>
              <button
                type="button"
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive((current) => (current === index ? null : current))}
                onFocus={() => setActive(index)}
                onBlur={() => setActive((current) => (current === index ? null : current))}
                onClick={() => setActive((current) => (current === index ? null : index))}
              >
                <small>{String(index + 1).padStart(2, "0")}</small>
                <span>
                  <strong>{clause.title}</strong>
                  {clause.note}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="container lrh-ack__boundary" data-lrh-fade>
        <span className="lrh-artifact-label">What it never does</span>
        <p>
          Confirm a booking, quote a price, or give clinical, legal or professional advice. Those
          answers come from your team.
        </p>
      </div>
    </section>
  );
}
