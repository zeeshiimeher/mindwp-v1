/**
 * Necessary context — the quietest section on the page, deliberately.
 *
 * Each captured detail is paired with the question it removes, because that is
 * the actual test: a field earns its place by saving the person replying from
 * having to ask. One relationship per rung, so this stays structurally
 * distinct from the two-column ledger in Right Fit.
 *
 * No form is drawn. What is being described is a decision about scope, not an
 * interface.
 */

const PAIRS: readonly (readonly [string, string])[] = [
  [
    "What they are asking about",
    "so the reply does not have to open with “what is this regarding?”",
  ],
  ["How to reach them, and when", "so the first attempt back is not a second missed call."],
  [
    "Whether the request is new or relates to an existing enquiry",
    "so nobody restarts a conversation that is already under way.",
  ],
  [
    "Anything they choose to add",
    "in their own words, because their framing is usually the useful part.",
  ],
];

export function LrhContext() {
  return (
    <section id="necessary-context" className="lrh-context section section--quiet on-mist">
      <div className="container container--split lrh-context__layout">
        <div className="lrh-context__copy section-intro" data-lrh-sequence>
          <div className="section-title-group">
            <p className="eyebrow" data-lrh-sequence-item>
              Necessary context
            </p>
            <h2 data-lrh-sequence-item>
              Capture only what helps the right person <em>understand the request.</em>
            </h2>
          </div>
          <p data-lrh-sequence-item>
            Every extra field adds effort, so each one should earn its place. The test is simple:
            does this detail save the person replying from having to ask? If it does, ask for it. If
            it does not, leave it out.
          </p>
          <p className="lrh-context__boundary" data-lrh-sequence-item>
            <span className="lrh-artifact-label">What we do not ask for</span>
            Clinical detail, sensitive personal information, or anything the first response will not
            use. Details that belong in a consultation belong in the consultation.
          </p>
        </div>

        <dl className="lrh-context__pairs" data-lrh-stagger>
          {PAIRS.map(([captured, removes]) => (
            <div key={captured} data-lrh-stagger-item>
              <dt>{captured}</dt>
              <dd>{removes}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
