import { Icon, type IconName } from "@/components/ui/Icon";

/**
 * 6 · Landing pages — kept from the existing landing-page composition. The
 * verdict lines hold the cross-service boundary: the wider website decision and
 * enquiry path belong to Smart Website Systems, not to this service.
 */
const PAGE_CARDS: ReadonlyArray<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: "Relevance",
    description: "The page matches the service and the place the search named.",
    icon: "folder",
  },
  {
    title: "Confidence",
    description: "Plain explanation and relevant evidence, in view rather than buried.",
    icon: "circle-check",
  },
  {
    title: "Next step",
    description: "One clear route to ask, book or enquire — with no dead ends.",
    icon: "arrow-right",
  },
];

export function LseoPages() {
  return (
    <section id="landing-pages" className="lsa-pages lsa-section section">
      <div className="container container--narrow lsa-pages__inner">
        <div className="lsa-centered-intro" data-lsa-sequence>
          <p className="eyebrow eyebrow--centered" data-lsa-sequence-item>
            Landing pages
          </p>
          <h2 data-lsa-sequence-item>
            The search result earns the visit.{" "}
            <em>The right page must carry the decision forward.</em>
          </h2>
          <p data-lsa-sequence-item>
            A relevant result sends someone somewhere. If that somewhere is a homepage, a contact
            form or a page about something else, the answer stops and the comparison continues
            elsewhere.
          </p>
        </div>

        <div className="lsa-pages__diagram">
          <p className="lsa-pages__source" data-lsa-fade>
            <Icon name="map-pin" size={14} /> The result they found nearby
          </p>
          <div className="lsa-pages__cards" data-lsa-stagger>
            {PAGE_CARDS.map((card) => (
              <article key={card.title} data-lsa-stagger-item>
                <span className="lsa-icon-disc" aria-hidden="true">
                  <Icon name={card.icon} size={16} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
          <div className="lsa-pages__base" data-lsa-fade>
            <span className="lsa-icon-disc" aria-hidden="true">
              <Icon name="globe" size={16} />
            </span>
            <div>
              <h3>The page — where the decision continues</h3>
              <p>One service, one place, and everything needed to judge it.</p>
            </div>
          </div>
          <div className="lsa-pages__verdicts" data-lsa-stagger>
            <p data-lsa-stagger-item>
              If the pages can carry the decision, the local work builds on them.
            </p>
            <p data-lsa-stagger-item>
              If they cannot, the review says so plainly — the wider website decision and enquiry
              path belong to Smart Website Systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
