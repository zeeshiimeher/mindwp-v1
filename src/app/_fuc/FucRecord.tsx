"use client";

import { useState } from "react";

import { OPPORTUNITIES } from "@/app/_fuc/opportunities";

/**
 * §3 — the set-piece, and the page's only authored interaction.
 *
 * The hero opened this record with owner, status and next action unfilled.
 * Here the same three fields are filled, at scale, on the page's darkest
 * object. Three opportunities are offered because the argument is that one
 * shape of record holds genuinely different situations: the fields never
 * change, the reason attached to the date always does.
 *
 * Every record is in the DOM. The unselected ones are `hidden`, so this is an
 * ordinary disclosure set rather than a tablist with a keyboard contract to
 * honour, and the first record is open on load — nothing on this page exists
 * only inside a state the visitor has to find.
 */
export function FucRecord() {
  const [openId, setOpenId] = useState(OPPORTUNITIES[0].id);

  return (
    <section className="fuc-record section section--focal">
      <div className="container container--content section-intro">
        <div className="section-title-group">
          <p className="eyebrow">Working record</p>
          <h2>Every open opportunity needs an owner, a status and a next action.</h2>
        </div>
        <p className="measure-copy">
          Three fields decide whether an opportunity is still real or merely remembered. Here is one
          enquiry held properly — and the same three fields on two others, so nothing depends on who
          happens to be in that day.
        </p>
      </div>

      <div className="fuc-record__stage">
        {/* The widest container on the page, against the reading column above:
            the record deliberately breaks past the argument that introduces it. */}
        <div className="container">
          <div className="fuc-record__panel on-dark">
            <p className="fuc-artifact-label fuc-record__caption">Open opportunities · 3</p>

            <div className="fuc-record__grid">
              {OPPORTUNITIES.map((item) => {
                const open = item.id === openId;
                const panelId = `fuc-record-${item.id}`;

                return (
                  <div className="fuc-record__pair" key={item.id}>
                    <button
                      type="button"
                      className="fuc-record__row"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenId(item.id)}
                    >
                      <span className="fuc-record__row-summary">{item.summary}</span>
                      <span className="fuc-record__row-meta">
                        <span className="fuc-record__row-state">{item.state}</span>
                        <span className="fuc-record__row-owner">{item.owner}</span>
                      </span>
                    </button>

                    <div className="fuc-record__detail" id={panelId} hidden={!open}>
                      <dl className="fuc-record__fields">
                        <div>
                          <dt>Owner</dt>
                          <dd>{item.owner}</dd>
                        </div>
                        <div>
                          <dt>Status</dt>
                          <dd>{item.status}</dd>
                        </div>
                        <div className="fuc-record__field--action">
                          <dt>Next action</dt>
                          <dd>
                            <span className="fuc-record__date">{item.nextActionDate}</span>
                            <span className="fuc-record__todo">{item.nextAction}</span>
                          </dd>
                        </div>
                      </dl>

                      <blockquote className="fuc-record__reason">
                        <p>{item.reason}</p>
                        <footer>The reason the date exists</footer>
                      </blockquote>

                      <dl className="fuc-record__trail">
                        <div>
                          <dt>Arrived</dt>
                          <dd>{item.arrived}</dd>
                        </div>
                        <div>
                          <dt>First reply</dt>
                          <dd>{item.answered}</dd>
                        </div>
                        <div>
                          <dt>Contact</dt>
                          <dd>{item.contact}</dd>
                        </div>
                        <div>
                          <dt>How they stop it</dt>
                          <dd>{item.stopping}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
