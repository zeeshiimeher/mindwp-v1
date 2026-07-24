"use client";

import { type KeyboardEvent, useEffect, useRef, useState } from "react";

import { Icon } from "@/components/ui/Icon";

import { CompoundHeader } from "./CompoundHeader";
import { COMPOUND_CLOSE, COMPOUNDERS, LAUNCH_NODE } from "./data";

const AUTO_ADVANCE_MS = 2800;

/** Node centres, as percentages of the square map — a hub with four satellites. */
const NODE_POS = [
  { x: 50, y: 12 },
  { x: 88, y: 50 },
  { x: 50, y: 88 },
  { x: 12, y: 50 },
] as const;

/**
 * Option 5 — Compounding orbit.
 * Same hub-and-satellite reading as Beyond's orbit, rebuilt on a light surface
 * for this section, with a fourth satellite and leaner per-node copy (just the
 * label and note — no contrast pair, no multi-step chips). Auto-advances
 * through the satellites once the map scrolls into view, and stops for good
 * the moment the visitor takes the wheel themselves.
 */
export function CompoundOrbit() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);
  const active = COMPOUNDERS[index];

  useEffect(() => {
    if (!autoplay) return;
    const map = mapRef.current;
    if (!map || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting ?? false;
        if (visible && timer === undefined) {
          timer = setInterval(() => {
            setIndex((i) => (i + 1) % COMPOUNDERS.length);
          }, AUTO_ADVANCE_MS);
        } else if (!visible && timer !== undefined) {
          clearInterval(timer);
          timer = undefined;
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(map);

    return () => {
      observer.disconnect();
      if (timer !== undefined) clearInterval(timer);
    };
  }, [autoplay]);

  const select = (i: number) => {
    setAutoplay(false);
    setIndex(i);
  };

  const onKey = (event: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = i;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) next = (i - 1 + COMPOUNDERS.length) % COMPOUNDERS.length;
    if (["ArrowRight", "ArrowDown"].includes(event.key)) next = (i + 1) % COMPOUNDERS.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = COMPOUNDERS.length - 1;
    setAutoplay(false);
    setIndex(next);
    const tabs = event.currentTarget.closest("[role='tablist']")?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    tabs?.[next]?.focus();
  };

  return (
    <section id="compound-orbit" className="section cx cxe">
      <CompoundHeader intro="Launch day sits at the centre. Everything that compounds afterwards connects back to it — trace how." />

      <div className="container cxe-stage" data-home-b-fade>
        <div className="cxe-layout container--split">
          <div className="cxe-map" ref={mapRef} role="tablist" aria-label="What compounds after launch">
            <svg className="cxe-links" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
              {NODE_POS.map((pos, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  className={`cxe-link${i === index ? " is-active" : ""}`}
                />
              ))}
            </svg>

            <span className="cxe-ring" aria-hidden="true" />

            <span className="cxe-hub" aria-hidden="true">
              <Icon name={LAUNCH_NODE.icon} size={20} />
              <small>{LAUNCH_NODE.label}</small>
            </span>

            {COMPOUNDERS.map((item, i) => (
              <button
                key={item.label}
                type="button"
                role="tab"
                id={`cxe-tab-${i}`}
                aria-controls="cxe-detail"
                aria-selected={i === index}
                tabIndex={i === index ? 0 : -1}
                className={`cxe-node cxe-node--${i + 1}${i === index ? " is-active" : ""}`}
                onClick={() => select(i)}
                onKeyDown={(event) => onKey(event, i)}
              >
                <span className="cxe-node__dot">
                  <Icon name={item.icon} size={20} />
                </span>
                <span className="cxe-node__label">{item.short}</span>
              </button>
            ))}
          </div>

          <article
            className="cxe-detail"
            role="tabpanel"
            id="cxe-detail"
            aria-labelledby={`cxe-tab-${index}`}
            tabIndex={0}
            key={active.label}
          >
            <p className="cxe-detail__tag">{active.short}</p>
            <h3>{active.label}</h3>
            <p className="cxe-detail__note">{active.note}</p>
          </article>
        </div>

        <p className="cxe-close">{COMPOUND_CLOSE}</p>
      </div>
    </section>
  );
}
