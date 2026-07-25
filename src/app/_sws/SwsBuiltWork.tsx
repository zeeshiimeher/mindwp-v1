"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { type WorkShape,WorkSpecimen } from "@/app/_sws/SwsWorkArt";
import { Icon } from "@/components/ui/Icon";

/**
 * Section 9. Pinned caption with a controlled specimen rail.
 *
 * The composition is the supply case for three or more items, because the
 * captions and the structural decisions behind them are real. The imagery is
 * not: proof status is unconfirmed at the scale this section renders at, so the
 * specimens are clearly marked placeholder geometry rather than client
 * screenshots. See SwsWorkArt for what is being stood in for and why.
 *
 * Every item keeps its own visible figcaption rather than sharing one caption
 * that changes with scroll position, so nothing is announced out of order and
 * the rail degrades to a plain scrollable list without JavaScript.
 */

interface Specimen {
  id: string;
  shape: WorkShape;
  category: string;
  title: string;
  note: string;
}

const SPECIMENS: readonly Specimen[] = [
  {
    id: "home-services",
    shape: "offer-first",
    category: "Home services",
    title: "Lead-generation homepage",
    note: "One offer stated at the top, local proof beneath it, and a single next step repeated at the points people are ready to take it.",
  },
  {
    id: "clinic",
    shape: "per-treatment",
    category: "Healthcare",
    title: "Clinic treatment page",
    note: "A page per treatment rather than a services list — what it involves, who it suits, and what happens at the first appointment.",
  },
  {
    id: "property",
    shape: "two-audience",
    category: "Property",
    title: "Property management website",
    note: "Two audiences with opposite questions — owners and tenants — separated at the first decision instead of merged into one homepage.",
  },
  {
    id: "tourism",
    shape: "photo-led",
    category: "Tourism",
    title: "Tourism service website",
    note: "Photography carrying most of the persuasion, with the practical detail people actually book on kept beside it rather than a page away.",
  },
  {
    id: "saas",
    shape: "layered",
    category: "Product",
    title: "SaaS product website",
    note: "A technical product explained in the order a non-technical buyer needs it, with the depth still reachable for whoever evaluates it.",
  },
  {
    id: "retail",
    shape: "retail",
    category: "Retail",
    title: "Optical retail website",
    note: "Products and appointments answered on one site without either burying the other, because customers arrive wanting each.",
  },
  {
    id: "support",
    shape: "plain",
    category: "Support",
    title: "Support program website",
    note: "Sensitive material handled plainly: what is offered, who it is for, and how to start — with nothing persuasive in the language.",
  },
  {
    id: "mobile",
    shape: "narrow",
    category: "Home services",
    title: "The same homepage at 400px",
    note: "Recomposed rather than stacked — the same hierarchy, the same proof and the same next step, rebuilt for the width most visitors arrive at.",
  },
];

/** Matches the rail's column-gap in sws.css. */
const RAIL_GAP = 28;

export function SwsBuiltWork() {
  const railRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollBy = useCallback((direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const first = rail.querySelector<HTMLElement>("li");
    const step = first ? first.offsetWidth + RAIL_GAP : rail.clientWidth * 0.8;
    rail.scrollBy({ left: step * direction, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onScroll = () => {
      const first = rail.querySelector<HTMLElement>("li");
      const step = first ? first.offsetWidth + RAIL_GAP : rail.clientWidth;
      setIndex(Math.min(SPECIMENS.length - 1, Math.round(rail.scrollLeft / step)));
    };

    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => rail.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="built-work" className="sws-work section section--focal on-white">
      <div className="container sws-work__layout">
        <div className="sws-work__aside">
          <div className="sws-work__pinned" data-sws-sequence>
            <div className="section-title-group">
              <p className="eyebrow" data-sws-item>
                Built work
              </p>
              <h2 data-sws-item>
                See how the thinking <em>survives into finished websites.</em>
              </h2>
            </div>
            <p data-sws-item>
              Look at these the way your own customers would look at yours: what each page answers
              first, how it is ordered, where the proof sits, and what it asks you to do next.
            </p>
            <p className="sws-work__provenance" data-sws-item>
              <strong>Placeholder specimens.</strong> The structural decision described in each
              caption is from real client work. The imagery is drawn geometry, not a screenshot,
              because the source assets are not yet cleared for display at this size. No ranking,
              enquiry or revenue figure is claimed for any item.
            </p>

            <div className="sws-work__controls">
              <p className="sws-work__counter" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span> /{" "}
                {String(SPECIMENS.length).padStart(2, "0")}
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => scrollBy(-1)}
                  aria-label="Scroll work back"
                  disabled={index === 0}
                >
                  <Icon name="arrow-right" size={18} style={{ rotate: "180deg" }} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollBy(1)}
                  aria-label="Scroll work forward"
                  disabled={index === SPECIMENS.length - 1}
                >
                  <Icon name="arrow-right" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* The scroll container is the wrapper, not the list: putting role
            ="group" on the <ul> would strip its list semantics from every item
            inside it. */}
        <div
          className="sws-work__rail"
          ref={railRef}
          tabIndex={0}
          role="group"
          aria-label="Selected built work, scrollable"
        >
          <ul className="sws-work__track">
            {SPECIMENS.map((item) => (
              <li key={item.id} className={item.shape === "narrow" ? "is-narrow" : undefined}>
                <figure>
                  <div className="sws-work__frame">
                    <span className="sws-work__chrome" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <div className="sws-work__shot">
                      <WorkSpecimen shape={item.shape} />
                      <span className="sws-work__stamp">Placeholder</span>
                    </div>
                  </div>
                  <figcaption>
                    <p className="sws-label">{item.category}</p>
                    <strong>{item.title}</strong>
                    <p>{item.note}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
