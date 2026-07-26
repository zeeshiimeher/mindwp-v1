/**
 * Visible ownership — the handover.
 *
 * Payload: constructed interface. Intended as the page's set-piece.
 *
 * Everything before this section describes a system. This shows the one thing
 * the system produces: what a named person is actually looking at when the
 * enquiry reaches them. One object, once, at a scale that lets it be read
 * rather than glanced at.
 *
 * Three things travel with it, and they are the three the page has been
 * promising — the sender's own words, the acknowledgement that already went
 * out, and what it is waiting on. Shown as a record rather than described as a
 * capability.
 *
 * Truth boundaries: no personal name is invented, because the honest claim is
 * that the enquiry has an owner slot with a real person in it, not that we know
 * who that person is. The enquiry text is a service question and carries no
 * clinical, case or personal detail — it is deliberately sector-neutral, since
 * the same handover happens in a clinic, a law boutique or an advisory firm.
 * The waiting-on line names what has *not* happened, so the object cannot be
 * read as a booking, a price or advice.
 */

export function OwnershipHandover() {
  return (
    <section id="ownership-handover" className="lrh-hand section section--focal">
      <div className="container section-intro section-intro--centered" data-lrh-sequence>
        <p className="eyebrow eyebrow--centered" data-lrh-sequence-item>
          Visible ownership
        </p>
        <h2 data-lrh-sequence-item>Then a person takes it.</h2>
        <p data-lrh-sequence-item>
          Not a queue, and not a shared inbox everyone assumes someone else is watching. This is what
          lands in front of the person who owns the next move.
        </p>
      </div>

      <div className="container lrh-hand__stage">
        <article className="lrh-hand__record" data-lrh-fade>
          <header className="lrh-hand__owner">
            <span className="lrh-hand__owner-mark" aria-hidden="true" />
            <span className="lrh-hand__owner-role">Placed with</span>
            <strong>The person who handles new enquiries</strong>
          </header>

          <div className="lrh-hand__block lrh-hand__block--arrived">
            <p className="lrh-artifact-label">What arrived</p>
            <blockquote>
              Hi — are you taking on new clients at the moment? I&apos;d need something in the next
              few weeks if that&apos;s possible.
            </blockquote>
            <p className="lrh-hand__meta">Website form · 14:32 · first time they have been in touch</p>
          </div>

          <div className="lrh-hand__block lrh-hand__block--sent">
            <p className="lrh-artifact-label">What already went back</p>
            <blockquote>
              Thanks — we have your message and someone will come back to you today about taking on
              new clients.
            </blockquote>
            <p className="lrh-hand__meta">Sent 14:32 · to the address they gave</p>
          </div>

          <footer className="lrh-hand__waiting">
            <p className="lrh-artifact-label">Waiting on</p>
            <p className="lrh-hand__waiting-line">A first reply from a person.</p>
            <p className="lrh-hand__waiting-note">
              Nothing has been booked, priced or advised. Those are still yours to decide.
            </p>
          </footer>
        </article>
      </div>

      <p className="container lrh-hand__close" data-lrh-fade>
        One named person, who can see the whole enquiry before they reply — and who owns every human
        action after this point.
      </p>
    </section>
  );
}
