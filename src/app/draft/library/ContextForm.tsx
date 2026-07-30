/**
 * Necessary context — the form that stops.
 *
 * Payload: constructed interface.
 *
 * The enquiry form itself, shown at a size where it can be counted. Four
 * fields, one submit line, and a hard bottom edge. The things that are
 * deliberately not asked sit visibly outside that edge, below the form's own
 * boundary, so the limit is a physical property of the object rather than a
 * claim in a paragraph.
 *
 * This is real system behaviour — it is the form MindWP builds — so it is drawn
 * as an illustration of a form and never as a screenshot of one. The fields are
 * inert: no inputs, no labels bound to controls, nothing keyboard-reachable
 * that would present itself as a working form inside a page that already has
 * one.
 */

const ASKED: readonly (readonly [string, string])[] = [
  ["What they are asking about", "One line, in their own words"],
  ["How to reach them", "The number or address they want a reply on"],
  ["When they are reachable", "So the first reply is not a missed call back"],
  ["New, or already under way", "Which decides who it goes to"],
];

const EXCLUDED: readonly string[] = [
  "Clinical or case detail",
  "Sensitive personal information",
  "Anything the first response will not use",
];

export function ContextForm() {
  return (
    <section id="context-form" className="lrh-cform section">
      <div className="container lrh-cform__band">
        <div className="lrh-cform__copy" data-lrh-sequence>
          <p className="eyebrow" data-lrh-sequence-item>
            Necessary context
          </p>
          <h2 data-lrh-sequence-item>
            Ask for what the next person needs. <em>Nothing else.</em>
          </h2>
          <p data-lrh-sequence-item>
            Every extra field adds effort, so each one has to save the person replying from having
            to ask. What belongs in a consultation belongs in the consultation.
          </p>
        </div>

        <div className="lrh-cform__stage">
          <div className="lrh-cform__sheet" aria-hidden="true">
            <p className="lrh-cform__sheet-head">Enquiry</p>

            <ol className="lrh-cform__fields">
              {ASKED.map(([label, hint]) => (
                <li key={label}>
                  <span className="lrh-cform__field-label">{label}</span>
                  <span className="lrh-cform__field-hint">{hint}</span>
                </li>
              ))}
            </ol>

            <p className="lrh-cform__submit">Send</p>
          </div>

          <div className="lrh-cform__outside">
            <p className="lrh-artifact-label">Deliberately outside the form</p>
            <ul>
              {EXCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="container lrh-cform__note">
        Four fields is not a limitation. It is the shortest thing that still lets the first reply be
        useful.
      </p>
    </section>
  );
}
