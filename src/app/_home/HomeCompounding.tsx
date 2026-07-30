/**
 * Built to stay useful — the page's one type-led section.
 *
 * What this section has to say has no honest picture. "An established
 * understanding that later work starts from" is a fact about how the work is
 * organised, not a thing with a shape, and every attempt to draw it produces
 * either a diagram of its own sentence or a record that would have to be
 * invented. So the payload here is the statement itself, set large enough to be
 * an object, held between two rules that run the full width of the viewport.
 *
 * The two clauses are one heading — the shared roman-then-italic turn — but set
 * at different scales and opposite alignments, so the turn is spatial as well as
 * grammatical. The eye goes down the left, across to the right, then back to the
 * quiet note at lower left. One emerald mark sits in the gap where the statement
 * turns, and it is the only colour in the section.
 *
 * It sits where it does because of its neighbours: Business context above and
 * Right fit below both ask the visitor to compare two columns of short items.
 * This asks for one long read instead, which is the behaviour the middle of the
 * page was missing.
 *
 * Claims boundary: the work is built to remain useful and a later change starts
 * from what is already settled. Nothing here says anything improves on its own,
 * that continuing is required, or that any outcome follows.
 */
export function HomeCompounding() {
  return (
    <section id="compounding" className="home-lasting section section--focal on-mist">
      <div className="lasting" data-home-lasting>
        <p className="container eyebrow lasting__eyebrow" data-home-lasting-item>
          Built to stay useful
        </p>

        <span className="lasting__rule" data-home-rule aria-hidden="true" />

        <div className="container lasting__statement-wrap">
          <h2 className="lasting__statement">
            <span className="lasting__first" data-home-lasting-item>
              The first build is where the decisions get made.
            </span>
            <em className="lasting__turn" data-home-lasting-item>
              Anything you do later starts from those, not from a blank page.
            </em>
          </h2>
        </div>

        <span className="lasting__rule" data-home-rule aria-hidden="true" />

        <div className="container lasting__foot">
          <p className="lasting__note" data-home-lasting-item>
            Who the work is for, what it covers, what proof it shows, where an enquiry goes and who
            answers it — those get settled once, written down, and they are yours. A later change to
            a service, a page, or the handling around it starts from that rather than from discovery
            again. Whether anything continues is a separate agreement, made when it is worth making.
          </p>
        </div>
      </div>
    </section>
  );
}
