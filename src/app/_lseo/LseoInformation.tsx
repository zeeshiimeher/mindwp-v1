import type { CSSProperties } from "react";

/**
 * 7 · Consistent business information — the five-entry-point staircase, kept.
 * Each step is a place a nearby customer checks; the escalating heights read as
 * the growing cost of a contradiction found late.
 */
const ENTRY_POINTS = [
  [
    "Is this the same business?",
    "Business name",
    "One name, spelled and presented the same way everywhere.",
  ],
  [
    "How do I reach them?",
    "Contact details",
    "Phone, email and address that match wherever they appear.",
  ],
  [
    "Do they cover my area?",
    "Locations & service areas",
    "Only the places the business genuinely serves.",
  ],
  [
    "Do they do what I need?",
    "Services & descriptions",
    "The same work, described the same way on every surface.",
  ],
  [
    "Where else can I check?",
    "Website, profile & listings",
    "Credible places only, kept in agreement with each other.",
  ],
] as const;

export function LseoInformation() {
  return (
    <section id="business-information" className="lsa-info lsa-section section on-mist">
      <div className="container lsa-info__inner">
        <div className="lsa-centered-intro" data-lsa-sequence>
          <p className="eyebrow eyebrow--centered" data-lsa-sequence-item>
            Consistent business information
          </p>
          <h2 data-lsa-sequence-item>
            Keep the same services, locations and business details{" "}
            <em>wherever customers check.</em>
          </h2>
          <p data-lsa-sequence-item>
            People verify by cross-checking. An old address on a listing, a service you dropped last
            year, a number nobody answers — each one is small on its own, and each one is a reason
            to pick someone else.
          </p>
        </div>
        <ol className="lsa-info__cards" data-lsa-stagger>
          {ENTRY_POINTS.map(([question, title, description], index) => (
            <li key={title} style={{ "--step": index } as CSSProperties} data-lsa-stagger-item>
              <p>{question}</p>
              <h3>{title}</h3>
              <span>{description}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
