/**
 * Section 13. The third dominant act, and the only place on this page where CRM
 * and automation carry real weight — they are a capability the delivered system
 * uses, not the identity of the offer.
 *
 * The composition is a continuity rail: the journey the page designed does not
 * stop at the form, and it terminates on a person rather than a system. The
 * handover node is emphasised because that transition is the section's whole
 * argument, and the rail keeps its sequence when it turns vertical at narrow
 * widths.
 */

const RAIL = [
  {
    step: "01",
    title: "The page",
    body: "The route a visitor was designed to take, up to the moment they decide to act.",
  },
  {
    step: "02",
    title: "Form submitted",
    body: "Validated, protected against spam, and captured without losing what they wrote.",
  },
  {
    step: "03",
    title: "Confirmation",
    body: "Immediate, truthful, and specific about what happens next at the level actually known.",
  },
  {
    step: "04",
    title: "Delivered and connected",
    body: "Into the agreed inbox — and, where it earns its place, into the CRM with the context already attached.",
    connected: true,
  },
  {
    step: "05",
    title: "A person, named",
    body: "Someone owns the reply. The system routes and prepares; it does not decide.",
    human: true,
  },
] as const;

const DELIVERY = [
  {
    title: "Built on WordPress",
    body: "Chosen so your team can run the site without us, and so a future developer inherits something conventional rather than clever.",
  },
  {
    title: "Selected connections",
    body: "A CRM or scheduling tool is connected when a diagnosed problem needs it. We configure it, map the fields, and test what arrives — you are not handed an empty platform.",
  },
  {
    title: "Automation, carefully scoped",
    body: "Automation handles the routing, the acknowledgement and the reminder. It never makes a commercial or clinical judgement, and it never continues past the point someone withdraws permission.",
  },
  {
    title: "Tested end to end, then handed over",
    body: "We submit real enquiries through the finished path, confirm where each one lands, and onboard the people who will answer them before launch.",
  },
] as const;

export function SwsWorkingSystem() {
  return (
    <section id="working-system" className="sws-working section section--focal on-dark">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-item>
          From plan to working system
        </p>
        <h2 className="display-feature" data-sws-item>
          The journey planned on the page <em>should still work after the form is submitted.</em>
        </h2>
        <p data-sws-item>
          Most websites are handed over at the point they stop being testable. The path below is
          built, connected and tried with real submissions before anyone calls it finished.
        </p>
      </div>

      <ol className="container container--content sws-working__rail" data-sws-stagger>
        {RAIL.map((node) => (
          <li
            key={node.step}
            className={
              "human" in node && node.human
                ? "is-human"
                : "connected" in node && node.connected
                  ? "is-connected"
                  : undefined
            }
            data-sws-stagger-item
          >
            <span className="sws-working__node" aria-hidden="true" />
            <small>{node.step}</small>
            <h3>{node.title}</h3>
            <p>{node.body}</p>
          </li>
        ))}
      </ol>

      <div className="container container--content sws-working__delivery" data-sws-stagger>
        {DELIVERY.map((item) => (
          <article key={item.title} data-sws-stagger-item>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
