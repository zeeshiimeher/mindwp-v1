import { VariantFrame } from "@/app/_lrh/variants/VariantFrame";

/**
 * Option 3 — the exchange.
 *
 * Data shape: two utterances.
 *
 * What a team sounds like when nobody owns an enquiry, and what it sounds like
 * when someone does. The first is ghosted, the second solid and larger. This is
 * the only option that puts human presence on the page without an illustration
 * or a photograph — it is people talking.
 *
 * Set with a leading em dash, the European convention for dialogue, and
 * deliberately not in quotation marks: a quoted sentence beside a company name
 * reads as a testimonial, and neither of these is one. They are generic office
 * speech, unattributed, and the labels say so.
 */

export function Ownership3Exchange() {
  return (
    <VariantFrame
      tag="3"
      title="The exchange"
      note="Two utterances · display-scale dialogue setting · human presence without an image"
    >
      <section id="ownership-3-exchange" className="lrhv-exchange section section--focal on-dark">
        <div className="container lrhv-exchange__head">
          <p className="eyebrow">Visible ownership</p>
          <h2>Then a person takes it.</h2>
        </div>

        <div className="container lrhv-exchange__lines">
          <div className="lrhv-exchange__line lrhv-exchange__line--lost">
            <p className="lrhv-exchange__label">An enquiry with no owner sounds like</p>
            <p className="lrhv-exchange__speech">Did anyone come back to this one?</p>
          </div>

          <div className="lrhv-exchange__line lrhv-exchange__line--owned">
            <p className="lrhv-exchange__label">An enquiry with one sounds like</p>
            <p className="lrhv-exchange__speech">It&apos;s with me.</p>
          </div>
        </div>

        <div className="container">
          <p className="lrhv-exchange__close">
            Nobody says the second sentence unless the enquiry actually reached them — with the
            sender&apos;s words, the acknowledgement that already went out, and what it is waiting
            on.
          </p>
        </div>
      </section>
    </VariantFrame>
  );
}
