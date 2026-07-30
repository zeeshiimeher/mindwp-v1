"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { WORK_FEATURE, WORK_ITEMS } from "@/content/work";

/**
 * Real smart website work — plan section 10.
 *
 * A showcase rail rather than the homepage's grid: tall portrait cards on a
 * staggered baseline, scroll-snapped, with the neighbours deliberately peeking
 * so the strip reads as something to move through rather than a finished wall.
 *
 * The catalogue, the assets and the status labels live in @/content/work and
 * are shared with the homepage. The provenance rules documented there apply
 * here without exception: these are live client websites shown as they appear
 * online, never described as anonymised, and no metric visible inside a
 * client's own screenshot is ever restated as a MindWP outcome.
 *
 * Native scrolling does the work. The buttons are a convenience on top of a
 * container that already scrolls with a trackpad, a touch swipe, or the
 * keyboard — so nothing here is reachable only by clicking an arrow.
 */

const SLIDES = [
  {
    category: WORK_FEATURE.category,
    title: WORK_FEATURE.title,
    file: WORK_FEATURE.file,
    status: WORK_FEATURE.status as string,
  },
  ...WORK_ITEMS.map((item) => ({
    category: item.category,
    title: item.title,
    file: item.file,
    status: item.status as string,
  })),
];

export function SwsWork() {
  const rail = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const node = rail.current;
    if (!node) return;

    let frame = 0;
    const measure = () => {
      const slides = Array.from(node.children) as HTMLElement[];
      const origin = node.scrollLeft;
      let nearest = 0;
      let best = Number.POSITIVE_INFINITY;

      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - node.offsetLeft - origin);
        if (distance < best) {
          best = distance;
          nearest = index;
        }
      });

      setActive(nearest);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measure);
    };

    node.addEventListener("scroll", onScroll, { passive: true });
    measure();

    return () => {
      node.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const step = useCallback((direction: 1 | -1) => {
    const node = rail.current;
    if (!node) return;

    const slides = Array.from(node.children) as HTMLElement[];
    const origin = node.scrollLeft;
    const current = slides.findIndex((slide) => slide.offsetLeft - node.offsetLeft >= origin - 8);
    const target = slides[Math.min(slides.length - 1, Math.max(0, current + direction))];
    if (!target) return;

    node.scrollTo({ left: target.offsetLeft - node.offsetLeft, behavior: "smooth" });
  }, []);

  return (
    <section id="work" className="sws-work section">
      <div className="container section-intro--split sws-work__head" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Real smart website work
          </p>
          <h2 data-sws-sequence-item>
            Look as closely <em>as you like.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-sequence-item>
            Real businesses, real websites. Judge them the way your own customers would judge yours:
            what each page answers, how it is organised, and the next step it leads to.
          </p>
          <p className="sws-work__provenance" data-sws-sequence-item>
            Published client websites, shown as they appear online. Each item is labelled with its
            status.
          </p>
        </div>
      </div>

      <div className="container sws-work__controls" data-sws-fade>
        <span className="sws-work__count">
          <strong>{String(active + 1).padStart(2, "0")}</strong>
          <i aria-hidden="true" />
          {String(SLIDES.length).padStart(2, "0")}
        </span>

        <span className="sws-work__segments" aria-hidden="true">
          {SLIDES.map((slide, index) => (
            <i key={slide.file} className={index <= active ? "is-filled" : undefined} />
          ))}
        </span>

        <span className="sws-work__buttons">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={active === 0}
            aria-label="Previous work item"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M15 5 8 12l7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={active === SLIDES.length - 1}
            aria-label="Next work item"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </span>
      </div>

      <ul className="sws-work__rail" ref={rail} tabIndex={0} aria-label="Selected client websites">
        {SLIDES.map((slide, index) => (
          <li key={slide.file} className={index === active ? "is-active" : undefined}>
            <figure>
              <span className="sws-work__frame">
                <Image
                  src={`/work/${slide.file}`}
                  alt={`${slide.title}, screenshot`}
                  fill
                  sizes="(min-width: 64rem) 24rem, 78vw"
                  className="sws-work__image"
                />
              </span>
              <figcaption>
                <small>{slide.category}</small>
                <strong>{slide.title}</strong>
                <span className="sws-work__status">{slide.status}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
