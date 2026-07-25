import { Icon } from "@/components/ui/Icon";

/**
 * 8 · Reviews & proof — kept. The panel is an evidence framework, not client
 * proof: no rating, no count, no quotation. Requests, feedback handling and
 * replies stay with Reputation & Review.
 */
const CHECKS = [
  "Is this about the service I need?",
  "Does it sound like a real experience?",
  "Is it recent enough to be useful?",
  "Has the business replied like a professional?",
  "Does this make contact feel safer?",
] as const;

export function LseoProof() {
  return (
    <section id="reviews-proof" className="lsa-proof lsa-section section">
      <div className="container lsa-proof__layout">
        <div className="lsa-proof__copy" data-lsa-sequence>
          <p className="eyebrow" data-lsa-sequence-item>
            Reviews &amp; proof
          </p>
          <h2 data-lsa-sequence-item>
            Genuine customer experience <em>shortens the distance to trust.</em>
          </h2>
          <p data-lsa-sequence-item>
            A nearby customer is trying to answer one question: has someone like me trusted this
            business with something like my problem? The proof that answers it is specific to the
            work, recognisably genuine, recent enough to matter and met with an attentive response.
          </p>
          <p className="lsa-proof__note" data-lsa-sequence-item>
            Local SEO makes existing proof visible where people check. Asking for reviews, handling
            feedback and writing replies belong to Reputation &amp; Review.
          </p>
        </div>

        <div
          className="lsa-proof__audit"
          aria-label="Illustrative review-evidence framework, not client proof"
        >
          <div className="lsa-proof__audit-head" data-lsa-fade>
            <span>Evidence check</span>
            <small>Illustrative framework</small>
          </div>
          <div className="lsa-proof__prompt" data-lsa-fade>
            <p>Does the review name the work and explain the experience?</p>
            <span>Specific detail</span>
          </div>
          <div className="lsa-proof__response" data-lsa-fade>
            <Icon name="message-square" size={15} />
            <span>Business response considered</span>
            <small>Appropriate</small>
          </div>
          <ul data-lsa-stagger>
            {CHECKS.map((check) => (
              <li key={check} data-lsa-stagger-item>
                {check}
              </li>
            ))}
          </ul>
          <span className="lsa-proof__badge lsa-proof__badge--top" data-lsa-fade>
            <Icon name="map-pin" size={13} /> Profile
          </span>
          <span className="lsa-proof__badge lsa-proof__badge--bottom" data-lsa-fade>
            <Icon name="globe" size={13} /> Website
          </span>
        </div>
      </div>
    </section>
  );
}
