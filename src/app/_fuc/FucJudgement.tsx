/**
 * §7 and §8 are one unbroken navy environment — the page's dark act, and the
 * place where the argument turns from what the system does to where it stops.
 *
 * §7 is deliberately the quietest section on the page and carries its largest
 * line of type. It has no payload beyond the sentence, because the sentence is
 * the argument and anything set beside it would be decoration.
 */
export function FucJudgement() {
  return (
    <section className="fuc-judgement section section--quiet on-dark">
      <div className="container container--narrow fuc-judgement__inner">
        <p className="eyebrow eyebrow--centered">Human judgement</p>
        <h2 className="fuc-judgement__statement">
          The system can preserve the next step; <em>it cannot decide what should happen.</em>
        </h2>
        <p className="fuc-judgement__copy">
          It holds the reason, the date and the owner. Whether to call, what to say, whether a price
          should change, whether this is the right treatment or the right instruction at all — none
          of that is automated here, and we would not build it that way. Nothing reaches the person
          who enquired unless someone on your team approved it, either as a message or as a rule.
        </p>
      </div>
    </section>
  );
}

/**
 * §8. Four genuine peers, so an equal set is correct — but set as a rule table
 * rather than four cards, since each row pairs a trigger with what it does to
 * the record. "No reply at all" is included because a system that only stops on
 * good news does not really stop.
 */
const RULES = [
  {
    trigger: "They say no",
    effect:
      "The opportunity closes. One acknowledgement if a reply is owed, then nothing further from this system.",
  },
  {
    trigger: "The decision is made",
    effect:
      "Booked, instructed or declined — the record closes on the outcome, so nobody follows up on work that is already settled.",
  },
  {
    trigger: "A pause is agreed",
    effect:
      "Held to the date they asked for. Nothing goes out before it, and the reason they gave is on the record when it comes back.",
  },
  {
    trigger: "No reply at all",
    effect:
      "Contact stops after the number of attempts you set, and the record closes. It does not quietly continue in the background.",
  },
] as const;

export function FucStopping() {
  return (
    <section className="fuc-stopping section on-dark">
      <div className="container container--content section-intro">
        <div className="section-title-group">
          <p className="eyebrow">Stopping rules</p>
          <h2>A clear no, completed decision or agreed pause should stop unnecessary contact.</h2>
        </div>
        <p className="measure-copy">
          A follow-up system is judged by how well it stops. These are agreed with you before
          anything is switched on, and each one closes or holds the record so nothing carries on
          without a person deciding that it should.
        </p>
      </div>

      <div className="container container--content">
        <dl className="fuc-stoprules">
          {RULES.map((rule) => (
            <div className="fuc-stoprules__row" key={rule.trigger}>
              <dt>{rule.trigger}</dt>
              <dd>{rule.effect}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
