/**
 * Three stages under one rule whose character changes.
 *
 * The sequence is genuine, so it gets a sequence — but told by the line rather
 * than by three identical cards. The rule runs dashed under Map (still
 * provisional), solid under Agree (settled), and solid with an emerald
 * terminus under Test (verified). Reading the line alone tells you the work
 * gets firmer.
 *
 * The rule draws once on entry via `--lrh-draw`; without JS or under reduced
 * motion the finished rule is what renders. At narrow widths it becomes a
 * vertical spine that changes character in the same order.
 */

interface Stage {
  name: string;
  body: string;
  points: readonly [string, string];
  tone: "provisional" | "settled" | "verified";
}

const STAGES: readonly Stage[] = [
  {
    name: "Map",
    tone: "provisional",
    body: "We list every way an enquiry actually reaches you today — including the informal ones that never touch the website — and where each currently ends up.",
    points: ["Every channel, including the informal ones", "Where each lands now, and who sees it"],
  },
  {
    name: "Agree",
    tone: "settled",
    body: "You decide what the first response says on each route, who owns each kind of request, and what the system is never allowed to say.",
    points: ["Your wording, your timing commitment", "A named owner for each route"],
  },
  {
    name: "Test",
    tone: "verified",
    body: "We send a real enquiry down every route before handover and check that the acknowledgement, the context and the owner all arrive.",
    points: ["Every route sent and received", "Your team onboarded before handover"],
  },
];

export function LrhSetup() {
  return (
    <section id="response-setup" className="lrh-setup section section--focal on-mist">
      <div className="container section-intro section-intro--centered" data-lrh-sequence>
        <p className="eyebrow eyebrow--centered" data-lrh-sequence-item>
          Response setup
        </p>
        <h2 data-lrh-sequence-item>
          Map the routes. Agree the first moves. <em>Test every handoff.</em>
        </h2>
        <p data-lrh-sequence-item>
          Setting this up is mostly deciding, not building. The work is agreeing what should happen
          to each kind of enquiry before anything is connected.
        </p>
      </div>

      <ol className="container lrh-setup__stages" data-lrh-draw>
        {STAGES.map((stage, index) => (
          <li
            key={stage.name}
            className={`lrh-setup__stage is-${stage.tone}`}
            style={{ "--i": index } as React.CSSProperties}
          >
            <p className="lrh-setup__index">{String(index + 1).padStart(2, "0")}</p>
            <span className="lrh-setup__rule" aria-hidden="true">
              <i className="lrh-setup__rule-draw" />
              {stage.tone === "verified" ? <b className="lrh-setup__rule-cap" /> : null}
            </span>
            <h3>{stage.name}</h3>
            <p className="lrh-setup__body">{stage.body}</p>
            <ul>
              {stage.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <p className="container lrh-setup__close editorial-note" data-lrh-fade>
        Nothing goes live until each path has been walked end to end.
      </p>
    </section>
  );
}
