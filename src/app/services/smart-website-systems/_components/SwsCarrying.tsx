/**
 * What you stop carrying — plan section 6.
 *
 * The move is relief, and the subject is the owner rather than the software.
 * Nothing here shows an interface, a record or a screen: a tour of what a CRM
 * looks like answers a question nobody buying this is asking. The question is
 * what changes about your day.
 *
 * Two registers in one composition. The ledger shows each thing that currently
 * depends on somebody remembering, and where it lives instead — dashed and
 * muted on the left, solid with an emerald edge on the right, with the transfer
 * drawn between them. Then the payoff: the questions you can answer without
 * asking anyone, which is what the relief actually feels like in a working week.
 *
 * The human boundary belongs to section 7. Nothing here says what stays a
 * judgement call, because that section owns it and saying it twice is what made
 * the earlier version of this page repeat itself.
 */

interface Transfer {
  carried: string;
  lives: string;
}

const TRANSFERS: Transfer[] = [
  {
    carried: "Remembering that somebody enquired on Friday afternoon",
    lives: "The record it arrived in, with when it came and where from",
  },
  {
    carried: "Knowing who was supposed to reply to it",
    lives: "A named owner, visible to anyone who looks",
  },
  {
    carried: "Being the only person who knows what was already said",
    lives: "The conversation, kept with the enquiry it belongs to",
  },
  {
    carried: "Chasing your own team for an update",
    lives: "The current stage, readable without asking anybody",
  },
  {
    carried: "Holding a follow-up in your head until Thursday",
    lives: "A task with a date on it, against the right enquiry",
  },
  {
    carried: "Being the reason it all works on the days you are in",
    lives: "A process that behaves the same on the days you are not",
  },
];

const ANSWERABLE = [
  "Did anyone reply to the one that came in on Friday?",
  "Who is handling the consultation request?",
  "What did we tell them last time?",
  "What is still sitting there waiting on us?",
];

export function SwsCarrying() {
  return (
    <section id="carrying" className="sws-carrying section on-dark">
      <div className="container section-intro--split sws-carrying__head" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            What you stop carrying
          </p>
          <h2 data-sws-sequence-item>Stop being the system.</h2>
        </div>
        <p className="sws-carrying__lede" data-sws-sequence-item>
          In most businesses this size, the process is a person. It works, and it works well, right
          up until that person is on holiday, in a consultation, or simply having the kind of week
          where something has to give.
        </p>
      </div>

      <ol className="container sws-carrying__ledger" data-sws-stagger data-sws-rules>
        {TRANSFERS.map((transfer) => (
          <li key={transfer.carried} data-sws-stagger-item>
            <p className="sws-carrying__carried">{transfer.carried}</p>
            <span className="sws-carrying__transfer" aria-hidden="true">
              <i data-sws-rule />
            </span>
            <p className="sws-carrying__lives">{transfer.lives}</p>
          </li>
        ))}
      </ol>

      <div className="container sws-carrying__payoff" data-sws-sequence>
        <p className="sws-artifact-label" data-sws-sequence-item>
          Questions you can answer without asking anyone
        </p>
        <ul data-sws-stagger>
          {ANSWERABLE.map((question) => (
            <li key={question} data-sws-stagger-item>
              <span aria-hidden="true">✓</span>
              {question}
            </li>
          ))}
        </ul>
        <p className="sws-carrying__note" data-sws-sequence-item>
          You still run the business. It just stops running through your memory.
        </p>
      </div>
    </section>
  );
}
