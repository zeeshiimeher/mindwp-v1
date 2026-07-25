import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Section 16. The Homepage closing CTA framework with a different lower payload
 * and the page's one paper-to-navy transition.
 *
 * The payload is an illustrative route map, not a fabricated report: the legs a
 * visitor travels, with the places a route commonly breaks marked as examples.
 * Nothing here is presented as a finding about anybody's actual website.
 */

const LEGS = [
  { id: "found", label: "Found", note: "They come across you at all", state: "holds" },
  { id: "landed", label: "Landed", note: "On a page built for why they came", state: "breaks" },
  { id: "understood", label: "Understood", note: "The work makes sense to a non-expert", state: "holds" },
  { id: "convinced", label: "Convinced", note: "The evidence is where the doubt is", state: "breaks" },
  { id: "contacted", label: "Contacted", note: "A next step that fits their readiness", state: "holds" },
  { id: "answered", label: "Answered", note: "A person replies with the context", state: "breaks" },
] as const;

const RETURNS = [
  "Where the route currently holds, and where it breaks",
  "Which break is costing you most, and why that one first",
  "Whether a rebuild is warranted — or something smaller is",
];

export function SwsClosing() {
  return (
    <section id="enquiry-review" className="sws-closing section section--focal on-paper">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-item>
          Visibility &amp; enquiry review
        </p>
        <h2 className="display-feature" data-sws-item>
          See what the website should make easier{" "}
          <em>before deciding what to rebuild.</em>
        </h2>
        <p data-sws-item>
          Before scoping a Smart Website System, MindWP maps the route people actually take through
          your visibility, your website and your enquiry path — and shows you where it breaks. You
          get a prioritised starting point whether or not we build it together.
        </p>
      </div>

      <div className="sws-closing__band on-dark">
        <div className="container sws-closing__map" data-sws-scene>
          <p className="sws-label">
            Illustrative route · your review maps your own site
          </p>

          <ol className="rmap">
            {LEGS.map((leg, index) => (
              <li key={leg.id} data-state={leg.state} style={{ "--i": index } as React.CSSProperties}>
                <span className="rmap__seg" aria-hidden="true" />
                <span className="rmap__dot" aria-hidden="true" />
                <strong>{leg.label}</strong>
                <span className="rmap__note">{leg.note}</span>
              </li>
            ))}
          </ol>

          <p className="rmap__key">
            <span className="rmap__key-holds">Route holds</span>
            <span className="rmap__key-breaks">Route breaks</span>
          </p>

          <div className="sws-closing__returns">
            <p className="sws-label">What comes back</p>
            <ul>
              {RETURNS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <Button href={CONTACT_PATH} variant="on-dark" className="btn-lg" data-sws-fade>
            {PRIMARY_CTA_LABEL}
          </Button>

          <p className="sws-closing__note">
            One private conversation. No obligation to continue, and no pitch attached to the
            findings.
          </p>
        </div>
      </div>
    </section>
  );
}
