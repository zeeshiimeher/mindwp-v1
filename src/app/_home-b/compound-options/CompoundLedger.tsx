"use client";

import { useState } from "react";

import { Icon } from "@/components/ui/Icon";

import { CompoundHeader } from "./CompoundHeader";
import { COMPOUND_CLOSE, COMPOUNDERS, LAUNCH_NODE } from "./data";

function valueText(stage: number) {
  if (stage === 0) return `${LAUNCH_NODE.label} only`;
  const joined = COMPOUNDERS.slice(0, stage)
    .map((item) => item.short)
    .join(", ");
  return `${LAUNCH_NODE.label} plus ${joined}`;
}

/**
 * Option 4 — The compounding ledger.
 * One control, not a scroll-triggered reveal: drag the handle between launch
 * and "keeps building" and each capability posts to a running ledger — and
 * stays posted, since compounding adds rather than replaces. Defaults to
 * fully built so the resting state already reads complete; rewind it to see
 * how it got there.
 */
export function CompoundLedger() {
  const [stage, setStage] = useState(COMPOUNDERS.length);

  return (
    <section id="compound-ledger" className="section on-dark cx cxd">
      <CompoundHeader />

      <div className="container cxd-stage" data-home-b-fade>
        <div className="cxd-panel">
          <div className="cxd-rail-row">
            <span className="cxd-rail-end cxd-rail-end--start">
              <Icon name={LAUNCH_NODE.icon} size={16} />
              {LAUNCH_NODE.label}
            </span>

            <div className="cxd-rail">
              <span className="cxd-rail__track" aria-hidden="true" />
              <span
                className="cxd-rail__fill"
                aria-hidden="true"
                style={{ width: `${(stage / COMPOUNDERS.length) * 100}%` }}
              />
              <span className="cxd-rail__ticks" aria-hidden="true">
                <span className="cxd-rail__tick cxd-rail__tick--launch" style={{ left: "0%" }}>
                  <Icon name={LAUNCH_NODE.icon} size={14} />
                </span>
                {COMPOUNDERS.map((item, i) => (
                  <span
                    key={item.label}
                    className={`cxd-rail__tick${stage > i ? " is-lit" : ""}`}
                    style={{ left: `${((i + 1) / COMPOUNDERS.length) * 100}%` }}
                  >
                    <Icon name={item.icon} size={14} />
                  </span>
                ))}
              </span>
              <input
                type="range"
                className="cxd-rail__input"
                min={0}
                max={COMPOUNDERS.length}
                step={1}
                value={stage}
                onChange={(event) => setStage(Number(event.target.value))}
                aria-label="Drag to see how compounding builds after launch"
                aria-valuetext={valueText(stage)}
              />
            </div>

            <span className="cxd-rail-end cxd-rail-end--finish">
              Keeps building
              <span className="cxd-rail-end__trail" aria-hidden="true" />
            </span>
          </div>

          <p className="cxd-equation" aria-live="polite">
            <span className="cxd-equation__term">{LAUNCH_NODE.label}</span>
            {COMPOUNDERS.slice(0, stage).map((item) => (
              <span key={item.label} className="cxd-equation__term">
                <span className="cxd-equation__op" aria-hidden="true">
                  {" "}
                  +{" "}
                </span>
                {item.short}
              </span>
            ))}
          </p>
        </div>

        <ol className="cxd-ledger">
          {COMPOUNDERS.map((item, i) => {
            const posted = stage > i;
            return (
              <li key={item.label} className={`cxd-entry${posted ? " is-posted" : ""}`}>
                <span className="cxd-entry__icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <div className="cxd-entry__text">
                  <strong>{item.label}</strong>
                  <small>{item.note}</small>
                </div>
                <span className="cxd-entry__mark" aria-hidden="true">
                  <Icon name="circle-check" size={16} />
                </span>
              </li>
            );
          })}
        </ol>

        <p className="cxd-close">{COMPOUND_CLOSE}</p>
      </div>
    </section>
  );
}
