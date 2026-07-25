/**
 * Section 12. The specification sheet.
 *
 * The driest section on the page, and deliberately so — its restraint is what
 * lets Section 13 land. Every row states a responsibility MindWP actually takes
 * on. No benchmark scores, no percentage targets, no conformance claims: a
 * number here would be unverifiable at the moment it was written, and a
 * certification claim would be a different profession's work.
 */

interface Group {
  name: string;
  rows: string[];
  caveat?: string;
}

const GROUPS: readonly Group[] = [
  {
    name: "Speed",
    rows: [
      "Images sized, compressed and served at the dimensions the page actually uses.",
      "Fonts loaded so text stays readable while they arrive rather than after.",
      "Third-party scripts added deliberately and individually, never as a default bundle.",
      "Performance treated as a build constraint, measured on the real site before handover.",
    ],
  },
  {
    name: "Accessibility",
    rows: [
      "Real headings, lists and landmarks in a sensible reading order — structure, not styling that resembles it.",
      "Every control reachable and operable by keyboard, with a focus state you can see.",
      "Contrast and type size checked while designing, not audited into place afterwards.",
      "Motion honours a visitor's reduced-motion setting, with the still state carrying the same meaning.",
    ],
    caveat:
      "We build against recognised accessibility guidance and test as we go. We do not issue conformance statements or certificates — a formal audit is separate, specialist work, and we will say so rather than imply we have done it.",
  },
  {
    name: "Search readiness",
    rows: [
      "One clear page per subject, with titles and descriptions written rather than generated.",
      "Stable, readable URLs, and redirects mapped before anything moves.",
      "Structured data only where it describes something genuinely present on the page.",
      "Content legible to a crawler without waiting on a script to assemble it.",
    ],
  },
  {
    name: "Maintainability",
    rows: [
      "Your team can edit the content that is meant to change, without a developer.",
      "Components reused rather than pages hand-copied, so one change holds everywhere it should.",
      "A documented handover: what is where, what it does, and what to do when it needs changing.",
      "Built so another developer could pick it up. Nothing depends on us remaining involved.",
    ],
  },
  {
    name: "Forms and data",
    rows: [
      "Validation on the server, not only in the browser.",
      "Spam handling that does not ask a genuine visitor to prove they are human by solving a puzzle.",
      "Enquiry data sent only to the destinations agreed, and nowhere else.",
      "Failure handled visibly — a submission that does not arrive must not look like one that did.",
    ],
  },
  {
    name: "Selected integrations",
    rows: [
      "Connections to a CRM, calendar or inbox you already use and have agreed to connect.",
      "Each connection tested against the complete path, not just the first successful send.",
      "Where a system has no supported way in, we say so before it is scoped rather than after.",
    ],
  },
];

export function SwsTechnicalFoundation() {
  return (
    <section id="technical-foundation" className="sws-technical section section--quiet on-white">
      <div className="container section-intro section-intro--split" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Technical foundation
          </p>
          <h2 data-sws-item>
            Make speed, accessibility, search readiness and maintainability{" "}
            <em>part of the build.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            None of this is visible on the finished page. All of it becomes visible when it is
            missing — usually to the visitor who was hardest to get there in the first place.
          </p>
          <p className="spec__note" data-sws-item>
            Responsibilities, not benchmarks. Where a figure would depend on the finished site, it
            is measured then and shared then, rather than promised here.
          </p>
        </div>
      </div>

      <div className="container spec" data-sws-stagger>
        {GROUPS.map((group) => (
          <section className="spec__group" key={group.name} data-sws-stagger-item>
            <h3>{group.name}</h3>
            <ul>
              {group.rows.map((row) => (
                <li key={row}>{row}</li>
              ))}
            </ul>
            {group.caveat ? <p className="spec__caveat">{group.caveat}</p> : null}
          </section>
        ))}
      </div>
    </section>
  );
}
