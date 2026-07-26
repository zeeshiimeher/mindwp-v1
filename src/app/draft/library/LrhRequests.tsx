"use client";

import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";

import { focusAndRevealTab } from "@/app/_lrh/tabNavigation";
import { useResponsiveTabOrientation } from "@/app/_lrh/useResponsiveTabOrientation";

/**
 * The routing board — the signal travels the route.
 *
 * Four enquiries on the left, four destinations on the right, and paths that
 * cross between them. The crossing is the argument: what arrives and where it
 * belongs are not the same ordering.
 *
 * Selecting an enquiry draws its route with DrawSVG and then carries a token
 * along it with MotionPath, landing it on the destination. Routing stops being
 * a highlight and becomes an event.
 *
 * The motion path is an array of measured DOM points rather than the SVG path
 * itself, because the route layer is stretched with preserveAspectRatio="none"
 * — a non-uniformly scaled path would distort the travel. Measuring the real
 * elements also means the token lands accurately at any width.
 *
 * Nothing here implies the system understands an enquiry. Each route names the
 * agreed rule that sent it — a form field, a channel, or a match against an
 * existing record. No classification, no conversation.
 *
 * Accessibility: the tokens are a real tablist and the caption is a real
 * tabpanel, so the board is a visual layer over working semantics. The board
 * itself is aria-hidden, which is why the destination is restated in the
 * caption. Without JS or under reduced motion every path renders drawn and the
 * first route is selected.
 */

interface Route {
  slug: string;
  enquiry: string;
  destination: string;
  /** 1-indexed board row the destination occupies. */
  destinationRow: number;
  rule: string;
  firstMove: string;
}

const ROUTES: readonly Route[] = [
  {
    slug: "question",
    enquiry: "A treatment or service question",
    destination: "Whoever can answer it",
    destinationRow: 3,
    rule: "Routed by the service they picked on the form.",
    firstMove: "Confirm the question landed, and point to where it is answered.",
  },
  {
    slug: "booking",
    enquiry: "A booking request",
    destination: "Whoever holds the diary",
    destinationRow: 1,
    rule: "Routed by the booking form it arrived on.",
    firstMove: "Confirm it is received, and say what happens before it is confirmed.",
  },
  {
    slug: "quote",
    enquiry: "A quote or new project",
    destination: "Whoever prices the work",
    destinationRow: 4,
    rule: "Routed by the quote form, or by a keyword rule you set.",
    firstMove: "Confirm receipt, and capture what the quote will depend on.",
  },
  {
    slug: "existing",
    enquiry: "An existing customer",
    destination: "Whoever already knows them",
    destinationRow: 2,
    rule: "Routed by a match on a number or email already in your records.",
    firstMove: "Acknowledge without treating it as a new enquiry.",
  },
];

/** Row centres as percentages of the board height, for four equal rows. */
const rowY = (row: number) => (row - 0.5) * 25;

const DESTINATIONS = [...ROUTES].sort((a, b) => a.destinationRow - b.destinationRow);

const AUTOPLAY_STEP = 2000;

export function LrhRequests() {
  const orientation = useResponsiveTabOrientation();
  const isStacked = orientation === "horizontal";

  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const [chosen, setChosen] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const tokenRef = useRef<HTMLSpanElement>(null);

  const active = ROUTES[activeIndex];

  /** A deliberate choice ends the cycle for good — the board is theirs now. */
  const choose = (index: number) => {
    setChosen(true);
    setActiveIndex(index);
  };

  /** Only cycle while the board is actually on screen. */
  useEffect(() => {
    const board = boardRef.current;
    if (!board || isStacked) return;

    const observer = new IntersectionObserver(
      (entries) => setInView(Boolean(entries[0]?.isIntersecting)),
      { threshold: 0.35 },
    );
    observer.observe(board);
    return () => observer.disconnect();
  }, [isStacked]);

  /**
   * Cycles on its own until someone takes over. Pointing at or tabbing into
   * the board holds it still so it never changes under the visitor mid-read,
   * and the first deliberate choice stops it permanently — an interface that
   * keeps moving after you have used it is arguing with you.
   */
  useEffect(() => {
    if (!inView || engaged || chosen || isStacked) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(
      () => setActiveIndex((index) => (index + 1) % ROUTES.length),
      AUTOPLAY_STEP,
    );
    return () => window.clearTimeout(timer);
  }, [inView, engaged, chosen, isStacked, activeIndex]);

  /** Draw the active route, then send the signal along it. */
  useEffect(() => {
    const board = boardRef.current;
    const token = tokenRef.current;
    if (!board || !token || isStacked) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

    const context = gsap.context(() => {
      const source = board.querySelector<HTMLElement>(`[data-token="${active.slug}"]`);
      const target = board.querySelector<HTMLElement>(`[data-destination="${active.slug}"]`);
      const path = board.querySelector<SVGPathElement>(`[data-path="${active.slug}"]`);
      const spine = board.querySelector<HTMLElement>(".lrh-board__spine");
      if (!source || !target || !path) return;

      const bounds = board.getBoundingClientRect();
      const from = source.getBoundingClientRect();
      const to = target.getBoundingClientRect();
      const rail = spine?.getBoundingClientRect();

      const start = { x: from.right - bounds.left, y: from.top + from.height / 2 - bounds.top };
      const end = { x: to.left - bounds.left, y: to.top + to.height / 2 - bounds.top };
      const middle = {
        x: rail ? rail.left + rail.width / 2 - bounds.left : (start.x + end.x) / 2,
        y: end.y,
      };

      gsap
        .timeline()
        .fromTo(path, { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.68, ease: "power2.inOut" })
        .set(token, { autoAlpha: 1, x: start.x, y: start.y }, 0)
        .to(
          token,
          {
            motionPath: { path: [start, middle, end], curviness: 1.4, autoRotate: false },
            duration: 0.86,
            ease: "power2.inOut",
          },
          0.14,
        )
        .to(token, { autoAlpha: 0, duration: 0.24 }, ">-0.06");
    }, board);

    return () => context.revert();
  }, [active, isStacked]);

  const onKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      return;
    }
    event.preventDefault();
    let nextIndex = index;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      nextIndex = (index - 1 + ROUTES.length) % ROUTES.length;
    }
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      nextIndex = (index + 1) % ROUTES.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = ROUTES.length - 1;

    choose(nextIndex);
    const tabs = event.currentTarget
      .closest("[role='tablist']")
      ?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    if (tabs) focusAndRevealTab(tabs, nextIndex);
  };

  return (
    <section id="different-requests" className="lrh-requests section section--focal on-mist">
      <div className="container section-intro section-intro--centered" data-lrh-sequence>
        <p className="eyebrow eyebrow--centered" data-lrh-sequence-item>
          Different requests
        </p>
        <h2 data-lrh-sequence-item>
          A treatment question, a booking and a new project{" "}
          <em>should not take the same path.</em>
        </h2>
        <p data-lrh-sequence-item>
          Every route below is a rule you agree once — the form they used, the channel it came in
          on, or a match against someone already in your records. Nothing is interpreted.
        </p>
      </div>

      {isStacked ? (
        <div className="container lrh-requests__stack">
          {ROUTES.map((route, index) => {
            const open = index === activeIndex;
            return (
              <article key={route.slug} className={`lrh-requests__row${open ? " is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    id={`route-head-${route.slug}`}
                    aria-expanded={open}
                    aria-controls={`route-body-${route.slug}`}
                    onClick={() => choose(open ? -1 : index)}
                  >
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    <span>{route.enquiry}</span>
                    <i aria-hidden="true">{open ? "−" : "+"}</i>
                  </button>
                </h3>
                <div
                  className="lrh-requests__row-body"
                  id={`route-body-${route.slug}`}
                  role="region"
                  aria-labelledby={`route-head-${route.slug}`}
                  inert={!open}
                >
                  <p className="lrh-requests__destination">{route.destination}</p>
                  <dl>
                    <div>
                      <dt>The rule that sent it</dt>
                      <dd>{route.rule}</dd>
                    </div>
                    <div>
                      <dt>The first move</dt>
                      <dd>{route.firstMove}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="container">
          <div className="lrh-board__head" aria-hidden="true">
            <p>What arrives</p>
            <p>Agreed routes</p>
            <p>Where it belongs</p>
          </div>

          <div
            className="lrh-board"
            ref={boardRef}
            onMouseEnter={() => setEngaged(true)}
            onMouseLeave={() => setEngaged(false)}
            onFocusCapture={() => setEngaged(true)}
            onBlurCapture={() => setEngaged(false)}
          >
            <span className="lrh-board__signal" ref={tokenRef} aria-hidden="true" />

            <div
              className="lrh-board__col lrh-board__col--enquiries"
              role="tablist"
              aria-label="Kinds of enquiry"
            >
              {ROUTES.map((route, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    type="button"
                    key={route.slug}
                    role="tab"
                    id={`route-tab-${route.slug}`}
                    aria-controls="route-caption"
                    aria-selected={selected}
                    tabIndex={selected ? 0 : -1}
                    data-token={route.slug}
                    className={`lrh-board__token${selected ? " is-active" : ""}`}
                    onClick={() => choose(index)}
                    onKeyDown={(event) => onKey(event, index)}
                  >
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    {route.enquiry}
                  </button>
                );
              })}
            </div>

            <div className="lrh-board__spine" aria-hidden="true">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
                {ROUTES.map((route, index) => {
                  const from = rowY(index + 1);
                  const to = rowY(route.destinationRow);
                  return (
                    <path
                      key={route.slug}
                      data-path={route.slug}
                      className={`lrh-board__path${index === activeIndex ? " is-active" : ""}`}
                      d={`M 0 ${from} C 30 ${from}, 30 ${to}, 50 ${to} L 100 ${to}`}
                      vectorEffect="non-scaling-stroke"
                    />
                  );
                })}
              </svg>
              <span className="lrh-board__rail" />
            </div>

            <div className="lrh-board__col lrh-board__col--destinations" aria-hidden="true">
              {DESTINATIONS.map((route) => (
                <p
                  key={route.slug}
                  data-destination={route.slug}
                  className={`lrh-board__destination${
                    route.slug === active.slug ? " is-active" : ""
                  }`}
                >
                  {route.destination}
                </p>
              ))}
            </div>
          </div>

          <div
            className="lrh-board__caption"
            id="route-caption"
            role="tabpanel"
            aria-labelledby={`route-tab-${active.slug}`}
            key={active.slug}
          >
            {/* The board is aria-hidden, so the destination has to be stated
                here or it is lost to assistive technology. */}
            <p className="lrh-board__caption-destination">
              <span className="lrh-artifact-label">Where it belongs</span>
              {active.destination}
            </p>
            <p>
              <span className="lrh-artifact-label">The rule that sent it</span>
              {active.rule}
            </p>
            <p>
              <span className="lrh-artifact-label">The first move</span>
              {active.firstMove}
            </p>
          </div>
        </div>
      )}

      <p className="container lrh-requests__boundary" data-lrh-fade>
        Routing decides who sees it first. It does not decide the answer.
      </p>
    </section>
  );
}
