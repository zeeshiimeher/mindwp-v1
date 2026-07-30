/**
 * Missed calls — the ledger.
 *
 * Payload: type as object.
 *
 * Three missed calls set at artefact scale, identical because they genuinely
 * are identical — a number and a time is the entire record. The repetition is
 * the argument, so it is set large enough to be read as a pattern rather than a
 * list. Below an emerald threshold, the same fragment returns in full ink with
 * the three things text-back attaches to it.
 *
 * Nothing here claims the system knows who called or why. The top half is what
 * the phone records; the bottom half is what an agreed message and an owner add
 * to it.
 */

const RAW: readonly (readonly [string, string])[] = [
  ["Unknown", "14:32"],
  ["No caller ID", "09:07"],
  ["Unknown", "16:44"],
];

const ATTACHED: readonly (readonly [string, string])[] = [
  ["Acknowledged", "A message they have already received, on the number they rang."],
  ["Owned", "A named person the call now belongs to."],
  ["Open", "A thread they can reply to instead of calling the next name."],
];

export function MissedCallsLedger() {
  return (
    <section id="missed-calls-ledger" className="lrh-ledger section section--focal">
      <div className="container section-intro" data-lrh-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-lrh-sequence-item>
            Missed calls
          </p>
          <h2 data-lrh-sequence-item>
            A missed call is the only enquiry <em>that leaves nothing behind.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-lrh-sequence-item>
            No message, no name, no reason. Nobody can tell whether it was a new enquiry, a
            supplier, or someone who has already tried once today — and the caller only knows that
            nobody answered.
          </p>
        </div>
      </div>

      {/* The band keeps the page's paper rhythm; the contrast this design needs
          belongs to the object, not to the section. */}
      <div className="container lrh-ledger__sheet on-dark">
        <p className="lrh-ledger__label">Three missed calls, as the phone records them</p>

        <ol className="lrh-ledger__raw" data-lrh-stagger>
          {RAW.map(([who, when]) => (
            <li key={`${who}-${when}`} data-lrh-stagger-item>
              <span>{who}</span>
              <b aria-hidden="true">·</b>
              <span>{when}</span>
            </li>
          ))}
        </ol>

        <p className="lrh-ledger__verdict">
          Indistinguishable, and none of them is anybody&apos;s.
        </p>

        <div className="lrh-ledger__threshold" aria-hidden="true" />

        <p className="lrh-ledger__label lrh-ledger__label--after">
          The same call, after missed-call text-back
        </p>

        <p className="lrh-ledger__solid">
          <span>Unknown</span>
          <b aria-hidden="true">·</b>
          <span>14:32</span>
        </p>

        <dl className="lrh-ledger__attached" data-lrh-stagger>
          {ATTACHED.map(([label, note]) => (
            <div key={label} data-lrh-stagger-item>
              <dt>{label}</dt>
              <dd>{note}</dd>
            </div>
          ))}
        </dl>

        <p className="lrh-ledger__close">
          The call is detected, an agreed message goes out on the number they rang, and the missed
          call is placed with the person who returns calls.
        </p>
      </div>
    </section>
  );
}
