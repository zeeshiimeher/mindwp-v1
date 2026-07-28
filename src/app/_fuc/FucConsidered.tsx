/**
 * §2. The delay is legitimate, and it is not shapeless: each reason for waiting
 * carries its own moment when contact becomes useful again. The payload is a
 * reason → moment ledger, because the heading is literally "a reason and a
 * date" and a two-column lookup is that sentence as an object.
 */
const WAITING = [
  {
    said: "“I need to talk it over with my partner.”",
    moment: "After the weekend they named",
  },
  {
    said: "“Send me something in writing first.”",
    moment: "Once there has been time to actually read it",
  },
  {
    said: "“We're waiting on the specialist's letter.”",
    moment: "After the date they expect it",
  },
  {
    said: "“Not until the new financial year.”",
    moment: "The month their budget opens",
  },
] as const;

export function FucConsidered() {
  return (
    <section className="fuc-considered section">
      <div className="container container--content section-intro">
        <div className="section-title-group">
          <p className="eyebrow">Considered decisions</p>
          <h2>Some decisions take time. Their next step still needs a reason and a date.</h2>
        </div>
        <p className="measure-copy">
          People who ask about something expensive rarely decide on the spot. They talk to a
          partner, wait for a letter, compare two practices, or wait for a budget to open. None of
          that is a lost enquiry. But each one has a moment when getting back in touch is useful
          rather than irritating — and that moment is usually knowable on the day you reply.
        </p>
      </div>

      <div className="container container--content">
        <dl className="fuc-ledger">
          <div className="fuc-ledger__head" aria-hidden="true">
            <span>What they were waiting on</span>
            <span>When contact is useful again</span>
          </div>

          {WAITING.map((row) => (
            <div className="fuc-ledger__row" key={row.said}>
              <dt>{row.said}</dt>
              <dd>{row.moment}</dd>
            </div>
          ))}
        </dl>

        <p className="editorial-note fuc-considered__note">
          Written down at the time, that is a next action. Left in someone&apos;s head, it is a
          hope.
        </p>
      </div>
    </section>
  );
}
