/**
 * §6. §3 showed the record's state; this shows its authorship over time. The
 * payload is one opportunity's history, and the entries that matter are the
 * handover and the human moving the date — the two places where follow-up
 * normally disappears into somebody's inbox.
 */
interface HistoryEvent {
  time: string;
  entry: string;
  by: string;
  /** The human justification, present only where someone recorded one. */
  note?: string;
}

const HISTORY: readonly HistoryEvent[] = [
  {
    time: "Tue 11:40",
    entry: "Replied — written estimate sent",
    by: "Practice manager",
  },
  {
    time: "Tue 11:44",
    entry: "Next action set for Mon 3 March",
    by: "Practice manager",
    note: "“Deciding with their partner at the weekend.”",
  },
  {
    time: "Fri 16:20",
    entry: "Owner changed to the treatment coordinator",
    by: "Practice manager",
    note: "“On leave Monday — handing this over.”",
  },
  {
    time: "Mon 09:05",
    entry: "Called. They asked for one more week.",
    by: "Treatment coordinator",
  },
  {
    time: "Mon 09:07",
    entry: "Next action moved to Mon 10 March",
    by: "Treatment coordinator",
    note: "“Their words: give us seven days.”",
  },
];

export function FucContext() {
  return (
    <section className="fuc-context section">
      <div className="container container--content section-intro">
        <div className="section-title-group">
          <p className="eyebrow">Shared context</p>
          <h2>Let the team see what is open, what changed and who owns the next move.</h2>
        </div>
        <p className="measure-copy">
          Follow-up usually fails at a handover. Someone is on leave, someone else answers the
          phone, and the context lives in an inbox nobody else can open. A shared record means the
          person picking this up on Monday can see what was agreed on Tuesday — and who agreed it.
        </p>
      </div>

      <div className="container container--content">
        <ol className="fuc-history">
          {HISTORY.map((event) => (
            <li className="fuc-history__event" key={event.time}>
              <p className="fuc-history__time">{event.time}</p>
              <div className="fuc-history__body">
                <p className="fuc-history__entry">{event.entry}</p>
                {event.note ? <p className="fuc-history__note">{event.note}</p> : null}
              </div>
              <p className="fuc-history__by">{event.by}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
