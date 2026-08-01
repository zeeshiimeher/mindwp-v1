import "./sec-182-breakout-ladder.css";

/**
 * SEC-182 · Three-Position Breakout Ladder.
 *
 * A measured reading column running down a wide named-line grid, with exactly
 * three declared escape positions. Every figure lands on one of the three, so a
 * breakout reads as a step in a system rather than as a width somebody chose
 * that day, and emphasis is expressed by which step a figure takes.
 *
 * The vocabulary itself is `src/styles/widths.css` and is deliberately not a
 * React wrapper: this file is one composition that uses it, not the way to use
 * it. Ordinary children need no attribute at all — `data-width` appears only
 * where something escapes, which is what keeps the escapes legible.
 *
 * Server Component. Still by design: nothing here moves, and `rm-free` is a
 * decision rather than an animation that was never finished.
 *
 * Demo content only. "Engagement shaping" is an invented method, the record is
 * an invented document, and none of it describes real MindWP work.
 */

const PHASES = [
  {
    span: "Weeks 1–2",
    name: "Framing",
    note: "One sentence both sides will still recognise in month four.",
    long: true,
  },
  {
    span: "Weeks 2–4",
    name: "Constraint",
    note: "What cannot move: budget, calendar, the two systems nobody may touch.",
    long: true,
  },
  {
    span: "Week 5",
    name: "Options",
    note: "Three shapes, costed, argued once.",
    long: false,
  },
  {
    span: "Week 6",
    name: "Record",
    note: "Decisions, and their reasons.",
    long: false,
  },
] as const;

const SESSIONS = [
  {
    week: "01",
    session: "Framing — first pass",
    attending: "Four, both sides",
    output: "Problem statement, rejected",
    carried: false,
  },
  {
    week: "02",
    session: "Framing — second pass",
    attending: "Two, practice only",
    output: "Problem statement, agreed",
    carried: true,
  },
  {
    week: "03",
    session: "Constraint walk",
    attending: "Six, plus operations",
    output: "Fixed-points list, eleven items",
    carried: false,
  },
  {
    week: "04",
    session: "Constraint review",
    attending: "Four, both sides",
    output: "Fixed points reduced to seven",
    carried: true,
  },
  {
    week: "05",
    session: "Options session",
    attending: "Five, both sides",
    output: "Three shapes, one withdrawn",
    carried: false,
  },
  {
    week: "05",
    session: "Options — costing",
    attending: "Three, practice only",
    output: "Rough ranges against each shape",
    carried: false,
  },
] as const;

const CARRIED = [
  {
    text: "The migration is out of scope and stays out of scope.",
    stamp: "Agreed week 02 · not revisited",
  },
  {
    text: "Two of the eleven fixed points were preferences, and were released.",
    stamp: "Agreed week 04 · not revisited",
  },
  {
    text: "The schedule is measured in review points, not in weeks.",
    stamp: "Agreed week 04 · not revisited",
  },
  {
    text: "Shape B is withdrawn because it needs a decision nobody can make yet.",
    stamp: "Agreed week 05 · open to challenge",
  },
] as const;

const OPEN = [
  "Who owns the fixed-points list after shaping ends?",
  "Does the third shape survive if the calendar moves by a month?",
  "What happens to this record if the engagement does not start?",
] as const;

/**
 * The full-bleed field, authored rather than random so the composition is the
 * same every render and can be judged as a composition. Digits are tone steps;
 * `5` is the single emerald card and there is exactly one.
 */
const FIELD_ROWS = [
  "12112232112111",
  "21132414112212",
  "11225213321121",
  "12111122111312",
] as const;

export function Sec182BreakoutLadder() {
  return (
    <section className="width-grid ladder">
      <h2>
        Engagement shaping, <em>before anything is committed.</em>
      </h2>

      <p className="text-lead">
        Shaping is the six weeks that happen before a plan exists. It is not discovery, and it is
        not a proposal wearing a different name. It is the period in which work is given a shape
        that both sides are able to argue with.
      </p>

      <p>
        Most engagements fail their first review because the shape was assumed rather than agreed. A
        schedule gets written against an outcome nobody has ever put in a single sentence, and the
        first real disagreement arrives eleven weeks later disguised as a scope question. Shaping
        moves that disagreement forward to the point where it is still cheap to have.
      </p>

      <p>
        What follows is a specimen of the method: four phases, one record, and a rule about what may
        not be decided yet.
      </p>

      <figure className="ladder-figure" data-width="margin" data-width-subgrid>
        <ol className="phase-track" data-width="margin">
          {PHASES.map((phase) => (
            <li key={phase.name} className={phase.long ? "phase phase--long" : "phase"}>
              <span className="phase-span">{phase.span}</span>
              <p className="phase-name">{phase.name}</p>
              <p className="phase-note">{phase.note}</p>
            </li>
          ))}
        </ol>
        <figcaption className="ladder-caption">
          <b>Specimen</b>
          The four phases at their nominal durations — framing and constraint hold two thirds of the
          calendar between them. Phase boundaries are review points rather than handovers, and the
          record travels forward through all of them intact.
        </figcaption>
      </figure>

      <p>
        The phases are not equal, and the schematic marks the two that are not. Framing and
        constraint take most of the calendar because they are where the expensive disagreements
        live. A shaping period that reaches week four without a contested sentence has usually been
        polite rather than useful.
      </p>

      <p>
        Options is deliberately short. Four weeks spent generating alternatives is breadth mistaken
        for progress; three shapes argued once, in a room, with rough numbers attached, is the whole
        exercise. The record that comes out of it is the only artefact the engagement inherits.
      </p>

      <figure className="ladder-figure" data-width="half-bleed" data-width-subgrid>
        <div className="record" data-width="half-bleed">
          <div className="record-head">
            <p className="record-title">Shaping record — Orchard Lane</p>
            <p className="record-meta">Six sessions · weeks 01–05</p>
            <p className="record-meta record-meta--filed">Filed, revision 11</p>
          </div>

          <div className="record-body">
            <div className="record-panel">
              <p className="record-label">Sessions</p>
              {/* Presentational: it labels the columns for a sighted reader and
                  carries no relationship the records do not already state. */}
              <div className="record-head-row record-row" aria-hidden="true">
                <span>Wk</span>
                <span>Session</span>
                <span>Attending</span>
                <span>Output</span>
              </div>
              <ol className="record-rows">
                {SESSIONS.map((session) => (
                  <li
                    key={`${session.week}-${session.session}`}
                    className="record-row"
                    data-carried={session.carried}
                  >
                    <span className="record-week">{session.week}</span>
                    <span className="record-session">{session.session}</span>
                    <span>{session.attending}</span>
                    <span>{session.output}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="record-panel record-panel--carried">
              <p className="record-label">Decisions carried</p>
              <ol className="record-carried">
                {CARRIED.map((decision) => (
                  <li key={decision.text}>
                    {decision.text}
                    <span className="record-stamp">{decision.stamp}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="record-panel record-panel--open">
            <p className="record-label">Open at close</p>
            <ul className="record-open">
              {OPEN.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>

          <p className="record-foot">
            Demo document · every name, date and figure on this plate is invented.
          </p>
        </div>
        <figcaption className="ladder-caption">
          <b>Specimen</b>
          The record at the end of week five. Sessions, the decisions carried out of them and the
          questions still open are kept on one surface on purpose: separating them is exactly how a
          decision quietly loses the reason underneath it.
        </figcaption>
      </figure>

      <p>
        A record is not minutes. Minutes describe a meeting; this describes what the engagement is
        now allowed to assume. The distinction matters most in the output field, where
        &ldquo;problem statement, rejected&rdquo; is worth more than the agreed one recorded after
        it — because the rejection is what makes the agreement mean anything.
      </p>

      <p>
        Every record carries its own reference, and the references are deliberately not
        human-readable so that nobody can read a status out of one. The plate above is filed as{" "}
        <span className="ladder-ref">SPECIMEN7F3A9C21E5B84D06AF19C7E2B430D85F6A2C91E7B0D34F58</span>{" "}
        and will keep that string through every later revision, including the ones that reverse it.
      </p>

      <p>
        Shaping ends when the record stops changing, not when the calendar says week six. Two of the
        four specimen engagements ran to seven weeks. One stopped at four, which is the outcome the
        method is quietest about and proudest of.
      </p>

      <figure
        className="ladder-figure ladder-figure--field"
        data-width="full-bleed"
        data-width-subgrid
      >
        <div className="field" data-width="full-bleed">
          <div className="field-wall" aria-hidden="true">
            {FIELD_ROWS.map((row, rowIndex) =>
              [...row].map((tone, cardIndex) => (
                <div key={`${rowIndex}-${cardIndex}`} className="field-card" data-tone={tone} />
              )),
            )}
          </div>
        </div>
        <figcaption className="ladder-caption">
          <b>Specimen</b>
          The wall at the end of shaping. Everything that survived the four phases, and the sixty
          things that did not, are the same size from this distance — which is the argument for
          having a record at all.
        </figcaption>
      </figure>

      <p>
        The wall is the reason the record exists. By week five a shaping period has produced far
        more material than any engagement can carry, and almost none of it is wrong — it is simply
        not load-bearing. Someone has to decide which sixty things are wall and which four are
        structure, and that decision is worth writing down.
      </p>

      <p>
        The two lists below are the ones a shaping period is judged on afterwards. They are short by
        design, and the first of them is the harder to hold.
      </p>

      <aside className="ladder-note" data-width="margin">
        <div>
          <p className="note-label">Not decided in shaping</p>
          <ul className="note-list">
            <li>Sequence of delivery, beyond the first review point.</li>
            <li>Anything requiring a system nobody in the room owns.</li>
            <li>The final number. A range is a decision; a number is a guess wearing one.</li>
          </ul>
        </div>
        <div>
          <p className="note-label">Decided, and not revisited</p>
          <ul className="note-list">
            <li>The problem statement, once it survives its second pass.</li>
            <li>The fixed points, after the preferences have been released from the list.</li>
            <li>What the engagement is not going to do, in writing, with reasons.</li>
          </ul>
        </div>
      </aside>

      <p>
        The second list is the one that saves the money. A decision recorded with its reason can be
        reopened honestly when the reason changes; a decision recorded on its own can only be
        reopened by whoever is most tired of it.
      </p>

      <p className="ladder-close">
        Specimen section. Engagement shaping is an invented method, Orchard Lane is an invented
        engagement, and every name, date, figure and document on this page is demo material rather
        than MindWP evidence.
      </p>
    </section>
  );
}
