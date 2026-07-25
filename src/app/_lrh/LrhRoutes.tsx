/**
 * Four channels compared across the same three properties.
 *
 * These are genuine peers with genuinely different properties, so the
 * composition has to let the eye read *across* as well as down — four cards
 * would hide exactly the comparison the section exists to make. One grid, a
 * label gutter, and hairlines that belong to the lattice rather than to four
 * separate objects.
 *
 * At narrow widths the gutter is dropped and each channel becomes its own
 * labelled group, so the comparison survives as repeated labelled fields
 * instead of collapsing into an undifferentiated stack. The row labels are
 * present in the markup for every channel — visually hidden while the gutter
 * is doing that job — so each value is always labelled for assistive
 * technology.
 */

const ROWS = ["What arrives", "The agreed first move", "Where it goes"] as const;

const CHANNELS: readonly { name: string; values: readonly [string, string, string] }[] = [
  {
    name: "A missed call",
    values: [
      "A number, a time, and nothing else. No name, no reason, no way to tell it apart from the last one.",
      "An agreed acknowledgement on an available channel — often a text-back where appropriate.",
      "The person responsible for returning calls.",
    ],
  },
  {
    name: "A website form",
    values: [
      "The fields you chose, in their own words, with whatever context they decided to add.",
      "A confirmation naming what they asked about and when to expect a reply.",
      "The person who handles that kind of enquiry.",
    ],
  },
  {
    name: "A message",
    values: [
      "A short line, often mid-conversation, on a channel your team may not be watching.",
      "An acknowledgement on the same channel it arrived on.",
      "The person or agreed destination responsible for that channel.",
    ],
  },
  {
    name: "A consultation request",
    values: [
      "A specific ask, usually with a date, a service or a preference attached.",
      "An acknowledgement that the request has been received — not that it is booked.",
      "Whoever confirms availability and decides.",
    ],
  },
];

export function LrhRoutes() {
  return (
    <section id="contact-routes" className="lrh-routes section on-dark">
      <div className="container section-intro" data-lrh-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-lrh-sequence-item>
            Contact routes
          </p>
          <h2 data-lrh-sequence-item>
            Calls, forms, messages and consultation requests{" "}
            <em>each need an agreed first move.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-lrh-sequence-item>
            The same reply cannot serve all four. A missed call and a consultation request arrive
            with different information, different urgency and different destinations — so each gets
            its own agreed response and its own place to land.
          </p>
        </div>
      </div>

      <div className="container lrh-routes__grid" data-lrh-stagger>
        <div className="lrh-routes__gutter" aria-hidden="true">
          {ROWS.map((row, index) => (
            <span key={row} style={{ "--row": index + 2 } as React.CSSProperties}>
              {row}
            </span>
          ))}
        </div>

        {CHANNELS.map((channel, columnIndex) => (
          <article
            key={channel.name}
            className="lrh-routes__col"
            style={{ "--col": columnIndex + 2 } as React.CSSProperties}
            data-lrh-stagger-item
          >
            <h3>{channel.name}</h3>
            <dl>
              {channel.values.map((value, rowIndex) => (
                <div key={ROWS[rowIndex]} style={{ "--row": rowIndex + 2 } as React.CSSProperties}>
                  <dt>{ROWS[rowIndex]}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <p className="container lrh-routes__close editorial-note" data-lrh-fade>
        You agree each first move once. After that it happens the same way every time.
      </p>
    </section>
  );
}
