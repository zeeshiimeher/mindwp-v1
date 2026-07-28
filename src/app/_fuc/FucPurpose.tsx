/**
 * §4 and §5 share one mist environment — both answer the same question, which
 * is what decides whether anything is sent at all.
 *
 * §4 is the contrast and carries the weight: a sequence that repeats itself
 * regardless, set deliberately monotonous and low-contrast, against a single
 * justified action set as an object. The asymmetry is the argument, so the two
 * sides must never become equal halves. §5 rides beneath it as a quiet strip
 * and opens beside its payload rather than above it.
 */

const SEQUENCE = [
  { day: "Day 1", body: "“Just checking in — did you get my email?”" },
  { day: "Day 3", body: "“Just checking in — did you get my email?”" },
  { day: "Day 7", body: "“Following up on the below.”" },
  { day: "Day 14", body: "“Last chance to book this month.”" },
] as const;

export function FucPurpose() {
  return (
    <section className="fuc-purpose section section--focal on-mist">
      <div className="container container--content section-intro">
        <div className="section-title-group">
          <p className="eyebrow">Purposeful follow-up</p>
          <h2>
            Follow up because something remains undecided—not because a sequence says so.
          </h2>
        </div>
        <p className="measure-copy">
          A drip sequence sends the same messages to everyone who ever filled in a form. It cannot
          tell the person still deciding from the person who booked last week, so it keeps going
          either way. That is the thing people mean when they say they do not want to be chased —
          and it is the reason a lot of practices switched follow-up off altogether.
        </p>
      </div>

      <div className="container container--content fuc-purpose__pair">
        <div className="fuc-drip">
          <p className="fuc-artifact-label fuc-drip__label">A sequence</p>
          <ol className="fuc-drip__list">
            {SEQUENCE.map((message, index) => (
              <li key={index}>
                <span className="fuc-drip__day">{message.day}</span>
                <span className="fuc-drip__body">{message.body}</span>
              </li>
            ))}
          </ol>
          <p className="fuc-drip__foot">Sent whether or not anything changed.</p>
        </div>

        <figure className="fuc-justified">
          <figcaption className="fuc-artifact-label fuc-justified__label">A next action</figcaption>
          <p className="fuc-justified__date">Mon 3 March</p>
          <blockquote className="fuc-justified__reason">
            <p>“We&apos;ll talk it over at the weekend and let you know Monday.”</p>
          </blockquote>
          <p className="fuc-justified__todo">
            One call from the practice manager, Monday morning.
          </p>
          <p className="fuc-justified__foot">
            Sent because one specific thing was outstanding — on the day it stopped being
            outstanding.
          </p>
        </figure>
      </div>
    </section>
  );
}

/**
 * §5. Permission is a field on the record, so it is shown as one: three lines
 * whoever picks up the next action reads before anything is sent.
 */
export function FucPermission() {
  return (
    <section className="fuc-permission section section--quiet on-mist">
      <div className="container container--content fuc-permission__split">
        <div className="fuc-permission__intro section-title-group">
          <p className="eyebrow">Contact permission</p>
          <h2>Respect permission, preferred channels and a clear way to stop.</h2>
          <p>
            Permission is a field on the record, not an assumption behind it. Whoever picks up the
            next action can see which channel the person chose, what they agreed to when they
            enquired, and how they end it — before anything is sent.
          </p>
        </div>

        <div className="fuc-permission__panel">
          <p className="fuc-artifact-label">Contact rules</p>
          <dl className="fuc-rules">
            <div>
              <dt>Channel</dt>
              <dd>Email. Phone before 11am, at their request.</dd>
            </div>
            <div>
              <dt>Agreed</dt>
              <dd>Enquiry form, 14 February — replies and follow-up about this request.</dd>
            </div>
            <div>
              <dt>Stopping</dt>
              <dd>One reply, or a word on the call. No reason needed.</dd>
            </div>
          </dl>
          <p className="fuc-permission__note">
            <small>
              We build the record so it can hold this, and set the rules up as agreed with you. What
              you are legally required to capture and retain stays your decision and your
              responsibility.
            </small>
          </p>
        </div>
      </div>
    </section>
  );
}
