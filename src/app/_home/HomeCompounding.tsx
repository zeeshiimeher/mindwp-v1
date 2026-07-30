import { STATIONS } from "@/app/_home/compoundGeometry";
import { HomeCompoundArt } from "@/app/_home/HomeCompoundArt";

/**
 * The journey as a closed circuit, with what it leaves behind accumulating inside
 * it.
 *
 * This is the only place on the page where a visitor follows one enquiry the whole
 * way — searched for, landed, sent, acknowledged, owned, written down — so it is
 * built as a route rather than as a set of points. The route is a loop because
 * that is the actual claim: it comes back, and the next pass starts from
 * everything the last one left. Inside the loop sits the ledger, which fills as
 * the enquiry travels, so "it compounds" is something the visitor watches instead
 * of a word the copy has to argue for.
 *
 * The website is deliberately not the centre of this drawing. That composition
 * belongs to the section above about the website being the public centre, and
 * repeating it here would make two sections say one thing twice. Here the website
 * is one station on the route like the rest, and what sits at the centre is what
 * the business ends up owning.
 *
 * Each station names a moment and the asset that moment leaves. Nothing claims a
 * result, a measurement or an outcome: naming what a business owns at the end is a
 * fact about scope, and the boundary line says plainly that each piece is scoped
 * on its own.
 *
 * At rest the whole circuit is drawn, every station is lit and the ledger is full,
 * so the still frame, the script-free render and the reduced-motion render carry
 * the complete argument. Narrow widths drop the geometry and read the same content
 * as a numbered sequence — a circuit needs width to be a circuit.
 */

const JOURNEY: readonly { moment: string; body: string; asset: string }[] = [
  {
    moment: "Someone searches",
    body: "For the service — not for your name yet.",
    asset: "Local presence that matches the site",
  },
  {
    moment: "They land on the website",
    body: "Who the work is for, what it covers, what happens next.",
    asset: "A website you own and can edit",
  },
  {
    moment: "They get in touch",
    body: "One route — and the page they were reading travels with it.",
    asset: "One enquiry route, context attached",
  },
  {
    moment: "It is acknowledged",
    body: "Wording you approved goes back straight away.",
    asset: "Acknowledgement wording, agreed once",
  },
  {
    moment: "A person owns the reply",
    body: "Named, not assumed. Nothing waits in a shared inbox.",
    asset: "A named owner for every enquiry",
  },
  {
    moment: "It is written down",
    body: "What was asked and what happens next outlive the inbox.",
    asset: "A record the next build starts from",
  },
];

const STEP = (index: number) => String(index + 1).padStart(2, "0");

export function HomeCompounding() {
  return (
    <section id="compounding" className="home-compounding section section--focal on-mist">
      <div className="container">
        <div className="cmpd">
          <header className="cmpd__intro">
            <div className="cmpd__intro-title">
              <p className="eyebrow" data-home-fade>
                Built to keep working
              </p>
              <h2 data-home-fade>
                It isn&apos;t a launch. <em>It compounds.</em>
              </h2>
            </div>
            <div className="cmpd__intro-copy">
              <p className="cmpd__lead" data-home-fade>
                A website is one asset. The handling connected around it is the rest. Follow a
                single enquiry the whole way round — and watch what the business is left holding.
              </p>
              <p className="cmpd__boundary" data-home-fade>
                Each piece is agreed and scoped separately. None requires a website rebuild or the
                purchase of every other service.
              </p>
            </div>
          </header>

          <div className="cmpd__circuit" data-home-circuit>
            <HomeCompoundArt />

            <ol className="cmpd__stations">
              {JOURNEY.map(({ moment, body }, index) => (
                <li
                  key={moment}
                  className={`cmpd__station cmpd__station--${STATIONS[index].place}`}
                  style={
                    {
                      "--x": STATIONS[index].left,
                      "--y": STATIONS[index].top,
                      "--tier": STATIONS[index].tier,
                    } as React.CSSProperties
                  }
                  data-home-station
                >
                  <span className="cmpd__dot" aria-hidden="true" />
                  <div className="cmpd__station-copy">
                    <p className="cmpd__station-step">{STEP(index)}</p>
                    <h3>{moment}</h3>
                    <p className="cmpd__station-body">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="cmpd__ledger">
              <p className="cmpd__ledger-title">What the business owns after one pass</p>
              <ol className="cmpd__assets">
                {JOURNEY.map(({ asset }, index) => (
                  <li key={asset} className="cmpd__asset" data-home-asset>
                    <span className="cmpd__asset-step" aria-hidden="true">
                      {STEP(index)}
                    </span>
                    {asset}
                  </li>
                ))}
              </ol>
              <p className="cmpd__ledger-note">
                And round again — from everything the last pass left in place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
