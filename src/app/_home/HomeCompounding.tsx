/**
 * One customer decision, answered once and reused three times.
 *
 * The argument is directional, not a set of agreements. The website establishes
 * three things — who the service is for, what it covers, and the next step —
 * and each later piece takes one of them and carries it further. Local presence
 * repeats the service wherever someone looks first; proof sits beside the
 * claims the page already makes; the acknowledgement continues the step the
 * page already named. Nothing is re-decided, and compounding is legible in the
 * repetition itself: the later pieces quote the website.
 *
 * Two structural consequences, both deliberate:
 *
 * - Remove any one later piece and the website still works. That is the
 *   non-bundle protection, built into the structure rather than captioned.
 * - Remove the website and the others have nothing to reuse. That is Strategy's
 *   website-centred hierarchy expressed rather than asserted.
 *
 * Only the website answer has a ground. The three extensions sit directly on
 * the section surface with a hairline running back toward it, because four
 * equally-treated panels would say these are peers, which is the one thing this
 * composition must not say.
 *
 * The question is the client's customer speaking, never MindWP addressing the
 * visitor. It is set as a quotation with its speaker named beneath it, and that
 * attribution is load-bearing rather than decorative.
 *
 * Demonstration wording throughout, labelled once for the whole payload. No
 * rating, review, testimonial, metric, date, client or invented person appears
 * anywhere — the acknowledgement states that a person owns the response without
 * naming one.
 */

const CUSTOMER_QUESTION =
  "Are these the right people to help me — and what happens after I get in touch?";

/** The establishing piece. Everything below reuses one of these three. */
const WEBSITE_ANSWER = [
  {
    label: "Who this is for",
    body: "For people who have already been advised about treatment and want a second opinion before deciding.",
  },
  {
    label: "What the consultation covers",
    body: "Your options, what each involves, the likely cost, and who would carry it out.",
  },
  {
    label: "The next step",
    body: "Request a consultation and tell us what you have already been advised.",
  },
];

/**
 * Each `reuse` names what the piece takes from the website rather than
 * describing the service, and it is written to stand on its own — at narrow
 * widths the hairline connectors have nothing to point at, so these labels are
 * what keeps the relationship legible.
 */
const EXTENSIONS = [
  {
    reuse: "Reuses the service the page describes",
    title: "Local presence",
    body: "Second-opinion consultations — the same service name, opening information and contact route wherever someone checks first.",
  },
  {
    reuse: "Supports what the page claims",
    title: "Proof",
    body: "The practitioner's identity and relevant professional evidence sit beside the service claims they support, rather than on a disconnected proof page.",
  },
  {
    reuse: "Continues the step the page names",
    title: "Enquiry handling",
    body: "Your request for a second-opinion consultation has arrived. The context you provided came with it. A person now owns the next response.",
  },
];

export function HomeCompounding() {
  return (
    <section id="compounding" className="home-compounding section section--focal on-mist">
      <div className="container section-intro section-intro--centered" data-home-sequence>
        <p className="eyebrow eyebrow--centered" data-home-sequence-item>
          Built to keep working
        </p>
        <h2 data-home-sequence-item>
          It isn&apos;t a launch. <em>It compounds.</em>
        </h2>
        <p data-home-sequence-item>
          Later work does not start from nothing. What has already been learned about the customer
          decision, written into the website and connected around the enquiry path gives the next
          improvement a stronger place to begin.
        </p>
      </div>

      <div className="container cmpd">
        <figure className="cmpd__question" data-home-fade>
          <blockquote>&ldquo;{CUSTOMER_QUESTION}&rdquo;</blockquote>
          <figcaption>Your customer, before they get in touch</figcaption>
        </figure>

        <p className="cmpd__label home-artifact-label" data-home-fade>
          Demonstration wording — the kind of client-site and enquiry copy MindWP produces, not a
          client&apos;s live system.
        </p>

        <div className="cmpd__grid">
          <div className="cmpd__answer" data-home-fade>
            <h3 className="cmpd__answer-role">The website answers it</h3>
            <dl>
              {WEBSITE_ANSWER.map(({ label, body }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ol className="cmpd__extensions" data-home-stagger>
            {EXTENSIONS.map((extension) => (
              <li key={extension.title} data-home-stagger-item>
                <p className="cmpd__reuse">{extension.reuse}</p>
                <h3>{extension.title}</h3>
                <p className="cmpd__extension-body">{extension.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="cmpd__boundary" data-home-fade>
          Each responsibility is agreed and scoped separately. None requires a website rebuild or
          the purchase of every other service.
        </p>
      </div>
    </section>
  );
}
