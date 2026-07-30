/**
 * Right for your business — plan section 12.
 *
 * Not the homepage's two-column checklist. Fit is a recognition moment, so the
 * criteria are set as an editorial ledger: an indexed row, a rule that draws
 * itself in, and a statement large enough to be read rather than scanned.
 *
 * The boundary is not a second column competing with it. It is a quiet
 * full-bleed band underneath — struck chips, one line, done — because a page
 * that gives equal area to what it refuses has argued against itself.
 */
const GOOD_FIT = [
  "An independent clinic or expert-led business where people compare carefully before they choose.",
  "Every enquiry represents a real decision — a patient, a case, a client — worth handling properly.",
  "Your website is doing less than the business deserves, or there is nothing to send people to yet.",
  "Enquiries arrive through more than one route, and keeping track depends on someone remembering.",
  "You want the website and the handling around it built and tested together, by one accountable team.",
  "You want to own and maintain what you end up with, not rent it back from an agency.",
];

const NOT_FIT = [
  "The cheapest website available",
  "A brochure nobody has to act on",
  "Guaranteed rankings or bookings",
  "Another platform to operate daily",
];

export function SwsFit() {
  return (
    <section id="fit" className="sws-fit section">
      <div className="container section-intro--split sws-fit__head" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Right for your business
          </p>
          <h2 data-sws-sequence-item>
            Built for businesses <em>where every enquiry deserves proper attention.</em>
          </h2>
        </div>
        <p className="sws-fit__lede" data-sws-sequence-item>
          A smart website earns its cost where enquiries are few, considered and valuable — and
          where losing one to a slow reply or a missing note actually hurts.
        </p>
      </div>

      <div className="container">
        <ol className="sws-fit__ledger" data-sws-stagger data-sws-rules>
          {GOOD_FIT.map((item, index) => (
            <li key={item} data-sws-stagger-item>
              <span className="sws-fit__rule" aria-hidden="true" data-sws-rule />
              <span className="sws-fit__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="sws-fit__band">
        <div className="container sws-fit__band-inner" data-sws-sequence>
          <p className="sws-artifact-label" data-sws-sequence-item>
            Not this, though
          </p>
          <ul data-sws-stagger>
            {NOT_FIT.map((item) => (
              <li key={item} data-sws-stagger-item>
                <span aria-hidden="true">×</span>
                <s>{item}</s>
              </li>
            ))}
          </ul>
          <p className="sws-fit__note" data-sws-sequence-item>
            None of that is a criticism — it is simply a different job, and we would rather say so
            at the review than halfway through a build.
          </p>
        </div>
      </div>
    </section>
  );
}
