/**
 * Reuses Home Fit's exact composition (good-fit checklist + boxed not-fit
 * aside, split layout) — content rewritten for the Smart Website Systems
 * qualification, per the user's explicit instruction to copy this section.
 */
const GOOD_FIT = [
  "A specialist offer where the real difference is subtle enough that a generic template would flatten it away.",
  "Each enquiry represents a genuinely substantial decision for the person making it, not a casual browse.",
  "Real proof already exists — finished work, credentials, a track record — that the current site hides rather than shows.",
  "Someone can be named as accountable for the outcome, not left as “the team”.",
  "Getting this specific engagement right matters more than getting something live quickly.",
];

const NOT_FIT = [
  "Chasing the cheapest website available",
  "A business where every competitor's offer is genuinely interchangeable",
  "Expecting a website to substitute for credibility that doesn't exist yet",
  "Wanting a self-serve platform rather than a planned, accountable build",
  "Expecting guaranteed rankings or a set volume of enquiries",
];

export function SwsFit() {
  return (
    <section id="right-fit" className="sws-fit section on-mist">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Right fit
          </p>
          <h2 data-sws-sequence-item>
            Best for substantial offers <em>that a generic website undersells.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-sequence-item>
            A Smart Website System is a deliberate engagement, not a template. It works best where
            the underlying offer already deserves better than a generic site currently gives it.
          </p>
        </div>
      </div>

      <div className="container container--split sws-fit__layout">
        <div className="sws-fit__good" data-sws-sequence>
          <p className="sws-artifact-label" data-sws-sequence-item>
            A good fit if
          </p>
          <ul data-sws-stagger>
            {GOOD_FIT.map((item) => (
              <li key={item} data-sws-stagger-item>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="sws-fit__not" data-sws-sequence>
          <p className="sws-artifact-label" data-sws-sequence-item>
            Not the right fit if
          </p>
          <ul data-sws-stagger>
            {NOT_FIT.map((item) => (
              <li key={item} data-sws-stagger-item>
                <span aria-hidden="true">×</span>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
