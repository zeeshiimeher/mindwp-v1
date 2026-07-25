/**
 * 11 · Ongoing management.
 *
 * Eight hairline rows at full measure with no container around them. The claim
 * is maintenance rather than scope, and a boxed table was arguing the opposite —
 * it read as a list of things you are buying. Exact responsibilities, access,
 * ownership and reporting stay off a public page.
 */
const MANAGED = [
  {
    title: "Business profile upkeep",
    description: "Categories, services, hours and details reviewed as they actually change.",
  },
  {
    title: "Service and location pages",
    description: "Kept accurate as work is added, renamed, narrowed or retired.",
  },
  {
    title: "Business information consistency",
    description: "The same name, contact details and service areas wherever they appear.",
  },
  {
    title: "Review presence",
    description:
      "New genuine proof surfaced where people check; requests and replies stay with Reputation & Review.",
  },
  {
    title: "Local relevance",
    description: "Useful pages and credible mentions maintained rather than manufactured.",
  },
  {
    title: "Drift and conflict checks",
    description: "Contradictions between surfaces caught before a customer finds them.",
  },
  {
    title: "Measurement review",
    description:
      "Discovery, profile actions, website behaviour and enquiry signals read together, over time.",
  },
  {
    title: "The next priority",
    description:
      "What deserves attention next, decided from what the measures and the business show.",
  },
] as const;

export function LseoManagement() {
  return (
    <section id="ongoing-management" className="lsa-managed lsa-section section on-mist">
      <div className="container lsa-managed__inner">
        <div className="lsa-section-intro" data-lsa-sequence>
          <p className="eyebrow" data-lsa-sequence-item>
            Ongoing management
          </p>
          <h2 data-lsa-sequence-item>
            A local presence needs tending, <em>not a launch date.</em>
          </h2>
          <p data-lsa-sequence-item>
            Nothing here stays finished. Services change, details date, pages go stale, competitors
            move and new proof appears. These are the parts that have to stay current as the
            business itself changes.
          </p>
        </div>

        <dl className="lsa-managed__rows" data-lsa-stagger>
          {MANAGED.map((item, index) => (
            <div key={item.title} data-lsa-stagger-item>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <dt>{item.title}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>

        <p className="lsa-managed__note" data-lsa-fade>
          What is included, who holds access and where ownership sits are agreed in the review and
          the written scope. They are not fixed on a public page, and they are not the same for
          every business.
        </p>
      </div>
    </section>
  );
}
