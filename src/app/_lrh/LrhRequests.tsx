"use client";

import { type KeyboardEvent, useState } from "react";

import { focusAndRevealTab } from "@/app/_lrh/tabNavigation";
import { useResponsiveTabOrientation } from "@/app/_lrh/useResponsiveTabOrientation";

/**
 * Four kinds of request, each with the path it should take.
 *
 * Choosing is the meaning here — the visitor's own enquiries are a mix, and
 * the point is that the mix is separable — so a selector is the honest
 * structure rather than a decorative one.
 *
 * Composed to read as its own thing: the request kinds stand in a left rail,
 * and the stage carries a short horizontal path (signal → first move → who it
 * reaches) rather than a narrative panel beside a vertical flow. At narrow
 * widths the rail becomes stacked rows, each opening its own path in place.
 */

interface RequestKind {
  slug: string;
  name: string;
  summary: string;
  path: readonly [string, string, string];
}

const STAGES = ["What it signals", "The first move", "Who it should reach"] as const;

const REQUESTS: readonly RequestKind[] = [
  {
    slug: "question",
    name: "A question about a service or treatment",
    summary:
      "Someone still deciding, who wants an answer before they commit to anything at all.",
    path: [
      "They are weighing you up and have a specific thing they need cleared up first.",
      "Confirm the question arrived and point to where it is answered — not an answer.",
      "Whoever is qualified to answer that question.",
    ],
  },
  {
    slug: "booking",
    name: "A booking or appointment request",
    summary: "Someone who has already decided and now wants a date in the diary.",
    path: [
      "The decision is made. What is left is availability, and how soon they hear back.",
      "Confirm the request has been received, and say what happens before it is confirmed.",
      "Whoever holds the diary.",
    ],
  },
  {
    slug: "quote",
    name: "A quote or new project enquiry",
    summary: "Real commercial intent, usually carrying more detail than a form field holds.",
    path: [
      "There is money attached, and the reply will need context a single field cannot capture.",
      "Confirm receipt, and capture the two or three things the quote will actually depend on.",
      "Whoever prices the work.",
    ],
  },
  {
    slug: "existing",
    name: "An existing customer or patient",
    summary: "Not a new lead — and treating it as one is worse than not replying at all.",
    path: [
      "They already have a relationship with you, and expect to be recognised as having one.",
      "Recognise it as an existing relationship and route it to the responsible person rather than treating it as a new enquiry.",
      "Whoever already knows them.",
    ],
  },
];

function RequestPath({ request }: { request: RequestKind }) {
  return (
    <ol className="lrh-requests__path">
      {request.path.map((copy, index) => (
        <li key={STAGES[index]}>
          <small>{String(index + 1).padStart(2, "0")}</small>
          <strong>{STAGES[index]}</strong>
          <p>{copy}</p>
        </li>
      ))}
    </ol>
  );
}

export function LrhRequests() {
  const orientation = useResponsiveTabOrientation();
  const isStacked = orientation === "horizontal";

  const [activeSlug, setActiveSlug] = useState<string>(REQUESTS[0].slug);
  const activeIndex = Math.max(
    REQUESTS.findIndex((request) => request.slug === activeSlug),
    0,
  );
  const active = REQUESTS[activeIndex];

  const onKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      return;
    }
    event.preventDefault();
    let nextIndex = index;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      nextIndex = (index - 1 + REQUESTS.length) % REQUESTS.length;
    }
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      nextIndex = (index + 1) % REQUESTS.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = REQUESTS.length - 1;

    setActiveSlug(REQUESTS[nextIndex].slug);
    const tabs = event.currentTarget
      .closest("[role='tablist']")
      ?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    if (tabs) focusAndRevealTab(tabs, nextIndex);
  };

  return (
    <section id="different-requests" className="lrh-requests section on-mist">
      <div className="container section-intro" data-lrh-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-lrh-sequence-item>
            Different requests
          </p>
          <h2 data-lrh-sequence-item>
            A treatment question, booking request and new project{" "}
            <em>should not receive the same path.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-lrh-sequence-item>
            Enquiries are not one queue. What someone is asking for changes who should see it, how
            quickly it matters, and what the first response can honestly say.
          </p>
        </div>
      </div>

      <div className="container lrh-requests__stage-wrap" data-lrh-fade>
        {isStacked ? (
          <div className="lrh-requests__accordion">
            {REQUESTS.map((request, index) => {
              const open = request.slug === activeSlug;
              return (
                <article
                  key={request.slug}
                  className={`lrh-requests__row${open ? " is-open" : ""}`}
                >
                  <h3>
                    <button
                      type="button"
                      id={`request-head-${request.slug}`}
                      aria-expanded={open}
                      aria-controls={`request-body-${request.slug}`}
                      onClick={() => setActiveSlug(open ? "" : request.slug)}
                    >
                      <small>{String(index + 1).padStart(2, "0")}</small>
                      <span>{request.name}</span>
                      <i aria-hidden="true">{open ? "−" : "+"}</i>
                    </button>
                  </h3>
                  <div
                    className="lrh-requests__row-body"
                    id={`request-body-${request.slug}`}
                    role="region"
                    aria-labelledby={`request-head-${request.slug}`}
                    inert={!open}
                  >
                    <p className="lrh-requests__summary">{request.summary}</p>
                    <RequestPath request={request} />
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="lrh-requests__layout">
            <div
              className="lrh-requests__rail"
              role="tablist"
              aria-orientation="vertical"
              aria-label="Kinds of request"
            >
              {REQUESTS.map((request, index) => {
                const selected = request.slug === active.slug;
                return (
                  <button
                    type="button"
                    key={request.slug}
                    role="tab"
                    id={`request-tab-${request.slug}`}
                    aria-controls="request-stage"
                    aria-selected={selected}
                    tabIndex={selected ? 0 : -1}
                    className={`lrh-requests__tab${selected ? " is-active" : ""}`}
                    onClick={() => setActiveSlug(request.slug)}
                    onKeyDown={(event) => onKey(event, index)}
                  >
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    {request.name}
                  </button>
                );
              })}
            </div>

            <article
              className="lrh-requests__stage"
              role="tabpanel"
              id="request-stage"
              aria-labelledby={`request-tab-${active.slug}`}
              tabIndex={0}
              key={active.slug}
            >
              <p className="lrh-requests__summary">{active.summary}</p>
              <RequestPath request={active} />
            </article>
          </div>
        )}
      </div>

      <p className="container lrh-requests__boundary" data-lrh-fade>
        Routing decides who sees it first. It does not decide the answer.
      </p>
    </section>
  );
}
