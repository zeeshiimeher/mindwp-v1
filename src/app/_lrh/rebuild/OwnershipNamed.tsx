/**
 * Visible ownership — many, one, four.
 *
 * Payload: node model carried by density rather than by connectors.
 *
 * Three fields across one band. On the left, everything the system does, set
 * small and packed tight — a dense grey field you read as a texture rather than
 * as a list. In the middle, one node at a scale nothing else on the page uses.
 * On the right, the four decisions that stay human, set large and spaced far
 * apart.
 *
 * The composition is the argument: a lot of small automatic things converge on
 * one person, and what leaves them is few, large and deliberate. Density does
 * the work, so no arrows are needed and none are drawn.
 *
 * The left field is genuinely everything the system performs — nothing is
 * padded to make the texture denser, and no capability is implied that the
 * automation section does not also claim.
 */

const PERFORMED: readonly string[] = [
  "Detects a missed call",
  "Detects a form",
  "Detects a message",
  "Detects a consultation request",
  "Times it",
  "Records the channel",
  "Records the sender's words",
  "Matches an existing record",
  "Applies the agreed rule",
  "Sends the agreed first response",
  "Logs what was sent",
  "Places it with the right person",
  "Notifies them it is theirs",
  "Keeps it on one thread",
];

const DECIDED: readonly string[] = ["The booking", "The price", "The advice", "The judgement"];

export function OwnershipNamed() {
  return (
    <section id="ownership-named" className="lrh-named section section--focal">
      <div className="container lrh-named__head" data-lrh-sequence>
        <p className="eyebrow" data-lrh-sequence-item>
          Visible ownership
        </p>
        <h2 data-lrh-sequence-item>Then a person takes it.</h2>
      </div>

      <div className="container lrh-named__field">
        <div className="lrh-named__machine">
          <p className="lrh-artifact-label">What the system did</p>
          <ul data-lrh-stagger>
            {PERFORMED.map((item) => (
              <li key={item} data-lrh-stagger-item>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lrh-named__person" data-lrh-fade>
          <span className="lrh-named__ring" aria-hidden="true" />
          <p className="lrh-named__person-label">A named person</p>
          <p className="lrh-named__person-note">
            Who can see the whole enquiry before they reply.
          </p>
        </div>

        <div className="lrh-named__human">
          <p className="lrh-artifact-label">What only they decide</p>
          <ol data-lrh-stagger>
            {DECIDED.map((item) => (
              <li key={item} data-lrh-stagger-item>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <p className="container lrh-named__close" data-lrh-fade>
        Fourteen small automatic things, so that four large human ones reach somebody who can
        actually make them.
      </p>
    </section>
  );
}
