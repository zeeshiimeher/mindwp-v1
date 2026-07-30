import {
  ArtExactSearch,
  ArtLocalSearch,
  ArtPaidClick,
  ArtReferral,
  ArtRemembered,
  ArtSecondLook,
} from "@/app/_home/HomeAttentionArt";

/**
 * Six ways the same attention arrives.
 *
 * These are genuine peers — no order, no sequence, no causality between them —
 * which is the one relationship equal cells are actually right for. They are
 * laid out as a hairline lattice rather than six floating tiles, and each cell
 * draws the surface the visitor arrived from, so the six read as specific to
 * this argument rather than as a grid that would accept any agency copy.
 *
 * No interaction: the page already asks the visitor to operate a control in
 * Beyond the Website, and repeating that here would give different material the
 * same reading pattern. Every word is present at once.
 */
/* Each cell names a different thing the arrival needs, rather than six versions
   of "and then they leave". The six are peers; the argument is cumulative, not
   repeated. */
const MOMENTS = [
  {
    number: "01",
    label: "The exact search",
    body: "Someone searches for one specific treatment and lands on a general homepage. The intent was already there — the page has to meet it.",
    Art: ArtExactSearch,
  },
  {
    number: "02",
    label: "The local search",
    body: "A map listing gets them as far as your site. From there the listing and the website have to agree: same service, same area, same details.",
    Art: ArtLocalSearch,
  },
  {
    number: "03",
    label: "The referral",
    body: "A referred visitor arrives already inclined to trust you. The site's job is narrow and urgent — confirm what they were told, quickly.",
    Art: ArtReferral,
  },
  {
    number: "04",
    label: "The paid click",
    body: "Advertising can put the offer in front of the right person. Where the click lands still has to be the page that offer promised.",
    Art: ArtPaidClick,
  },
  {
    number: "05",
    label: "The second look",
    body: "Reviews, past work and credentials get checked quietly before anyone makes contact. That proof has to be on the site, and checkable.",
    Art: ArtSecondLook,
  },
  {
    number: "06",
    label: "The remembered name",
    body: "Someone comes back by name, weeks later. What they need is the answer they didn't get first time, and a next step that is still obvious.",
    Art: ArtRemembered,
  },
] as const;

export function HomeAttention() {
  return (
    <section id="attention" className="home-attention section">
      <div className="container section-intro" data-home-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-home-sequence-item>
            Attention you already have
          </p>
          <h2 data-home-sequence-item>
            Search, referrals and advertising <em>still need somewhere convincing to land.</em>
          </h2>
        </div>
      </div>

      <div className="container">
        <ul className="att" data-home-stagger>
          {MOMENTS.map(({ number, label, body, Art }) => (
            <li className="att__cell" key={number} data-home-stagger-item>
              <span className="att__figure" aria-hidden="true">
                <Art />
              </span>
              <p className="att__num">{number}</p>
              <h3>{label}</h3>
              <p className="att__body">{body}</p>
            </li>
          ))}
        </ul>
      </div>

      <p className="container att__close editorial-note" data-home-fade>
        The most qualified attention is the easiest to lose.
      </p>
    </section>
  );
}
