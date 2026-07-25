/**
 * Four channels, compared.
 *
 * The comparison is carried by four short verdicts set at display scale — the
 * agreed first move for each channel, readable across the whole row in a few
 * seconds. Everything else is supporting detail sized as supporting detail,
 * which is what stops this reading as twelve paragraphs in a grid.
 *
 * Oversized numerals anchor the columns and give the band some graphic weight
 * of its own rather than leaving it as text floating on navy.
 */

const CHANNELS: readonly {
  channel: string;
  verdict: string;
  arrives: string;
  owner: string;
}[] = [
  {
    channel: "Missed call",
    verdict: "Text back.",
    arrives: "A number and a time. Nothing else.",
    owner: "Whoever returns calls.",
  },
  {
    channel: "Website form",
    verdict: "Confirm and name it.",
    arrives: "The fields you chose, in their own words.",
    owner: "Whoever handles that kind of enquiry.",
  },
  {
    channel: "Message",
    verdict: "Reply on the same channel.",
    arrives: "A short line, often mid-conversation.",
    owner: "Whoever owns that channel.",
  },
  {
    channel: "Consultation request",
    verdict: "Received — not booked.",
    arrives: "A date, a service, a preference.",
    owner: "Whoever confirms availability.",
  },
];

export function LrhRoutes() {
  return (
    <section id="contact-routes" className="lrh-routes section section--focal on-dark">
      <div className="container section-intro" data-lrh-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-lrh-sequence-item>
            Contact routes
          </p>
          <h2 data-lrh-sequence-item>
            Four ways in. <em>Four different first moves.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-lrh-sequence-item>
            One reply cannot serve all four. Each channel arrives with different information and
            belongs somewhere different, so each gets its own agreed response.
          </p>
        </div>
      </div>

      <ol className="container lrh-routes__grid" data-lrh-stagger>
        {CHANNELS.map((item, index) => (
          <li key={item.channel} className="lrh-routes__col" data-lrh-stagger-item>
            <span className="lrh-routes__numeral" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="lrh-routes__channel">{item.channel}</p>
            <p className="lrh-routes__verdict">{item.verdict}</p>
            <dl>
              <div>
                <dt>Arrives as</dt>
                <dd>{item.arrives}</dd>
              </div>
              <div>
                <dt>Goes to</dt>
                <dd>{item.owner}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>

      <p className="container lrh-routes__close editorial-note" data-lrh-fade>
        You agree each first move once. After that it happens the same way every time.
      </p>
    </section>
  );
}
