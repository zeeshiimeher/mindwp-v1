/**
 * A subset, drawn.
 *
 * One ordered list of everything a person wants settled when they get in
 * touch, and a frame around only the part the automated response can reach.
 * The automated response's reach is a strict subset of what was asked — which
 * is the whole argument, and containment is the one shape that states it
 * without a caption.
 *
 * The list is ordered by certainty rather than importance: it runs from what
 * is already a fact the moment the enquiry lands to what nobody can settle
 * without a person. The frame simply marks where facts run out.
 *
 * The intro comes first in the markup because it is the entry point for
 * reading and for assistive technology; on desktop it is placed into the right
 * column with explicit grid placement rather than `direction: rtl`, which
 * would drag punctuation and alignment along with it.
 *
 * The frame's edge draws itself as the section is scrolled, and its label
 * arrives with it — `--lrh-scrub` defaults to 1, so the boundary is fully
 * present without JS and under reduced motion.
 */

const REACHED = [
  "That it actually arrived",
  "What it was about",
  "Who has it now",
  "When they will hear back",
] as const;

const BEYOND = [
  "Whether the slot they want is free",
  "What it is going to cost",
  "Whether it is the right thing for them",
] as const;

export function LrhAcknowledgement() {
  return (
    <section id="acknowledgement" className="lrh-ack section section--focal">
      <div className="container lrh-ack__band">
        <div className="lrh-ack__intro" data-lrh-sequence>
          <p className="eyebrow" data-lrh-sequence-item>
            Useful acknowledgement
          </p>
          <h2 data-lrh-sequence-item>
            Everything that is already true can go out immediately.{" "}
            <em>Nothing else can.</em>
          </h2>
          <p data-lrh-sequence-item>
            When someone gets in touch, they want a handful of things settled. Some are already true
            the second the enquiry lands. The rest are decisions — and a decision is not the
            system&apos;s to make.
          </p>
        </div>

        <div className="lrh-ack__set" data-lrh-scrub>
          <p className="lrh-ack__set-label">What someone wants settled</p>

          <div className="lrh-ack__reach">
            <span className="lrh-ack__reach-edge" aria-hidden="true" />
            <p className="lrh-ack__reach-label">The automated response reaches this far</p>
            <ol>
              {REACHED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <ol className="lrh-ack__beyond" start={REACHED.length + 1}>
            {BEYOND.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>

          <p className="lrh-ack__close">
            Everything outside the frame is a person&apos;s to answer — which is exactly why the
            four inside it can be answered in seconds.
          </p>
        </div>
      </div>
    </section>
  );
}
