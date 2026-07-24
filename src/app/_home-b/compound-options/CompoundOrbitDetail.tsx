"use client";

import { type KeyboardEvent, useEffect, useRef, useState } from "react";

import { Icon } from "@/components/ui/Icon";

import { CompoundHeader } from "./CompoundHeader";
import { COMPOUND_CLOSE, COMPOUNDERS, LAUNCH_NODE } from "./data";

const AUTO_ADVANCE_MS = 2800;

/** Node centres, as percentages of the square map — a hub with four satellites. */
const NODE_POS = [
  { x: 50, y: 10 },
  { x: 90, y: 50 },
  { x: 50, y: 90 },
  { x: 10, y: 50 },
] as const;

/**
 * Option 6 — Orbit + detail, stacked.
 * Same hub-and-satellite reading as Option 5, but single column: a bigger,
 * bolder diagram (filled hub, thicker active link) with the detail reading
 * as one full-width band underneath it, not a side panel. Auto-advances
 * once in view, and hands over for good the moment the visitor picks a node.
 */
export function CompoundOrbitDetail() {
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
    <section id="compound-orbit-detail" className="section cx cxg">
      <CompoundHeader intro="Launch day sits at the centre. Everything that compounds afterwards connects back to it — trace how." />

      <div className="container container--content cxg-stage" data-home-b-fade>
        <div className="cxg-map" ref={mapRef} role="tablist" aria-label="What compounds after launch">
          <svg className="cxg-links" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
            {NODE_POS.map((pos, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={pos.x}
                y2={pos.y}
                className={`cxg-link${i === index ? " is-active" : ""}`}
              />
            ))}
          </svg>

          <span className="cxg-ring" aria-hidden="true" />

          <span className="cxg-hub" aria-hidden="true">
            <Icon name={LAUNCH_NODE.icon} size={24} />
            <small>{LAUNCH_NODE.label}</small>
          </span>

          {COMPOUNDERS.map((item, i) => (
            <button
              key={item.label}
              type="button"
              role="tab"
              id={`cxg-tab-${i}`}
              aria-controls="cxg-detail"
              aria-selected={i === index}
              tabIndex={i === index ? 0 : -1}
              className={`cxg-node cxg-node--${i + 1}${i === index ? " is-active" : ""}`}
              onClick={() => select(i)}
              onKeyDown={(event) => onKey(event, i)}
            >
              <span className="cxg-node__dot">
                <Icon name={item.icon} size={22} />
              </span>
              <span className="cxg-node__label">{item.short}</span>
            </button>
          ))}
        </div>

        <article
          className="cxg-detail"
          role="tabpanel"
          id="cxg-detail"
          aria-labelledby={`cxg-tab-${index}`}
          tabIndex={0}
          key={active.label}
        >
          <span className="cxg-detail__icon">
            <Icon name={active.icon} size={26} />
          </span>
          <div className="cxg-detail__text">
            <p className="cxg-detail__tag">{active.short}</p>
            <h3>{active.label}</h3>
            <p className="cxg-detail__note">{active.note}</p>
          </div>
        </article>

        <p className="cxg-close">{COMPOUND_CLOSE}</p>
      </div>
    </section>
  );
}
