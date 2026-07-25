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
const MOMENTS = [
  {
    number: "01",
    label: "The exact search",
    body: "A search for one specific treatment or service opens onto a general homepage. The click already proved intent; the page didn't meet it.",
    Art: ArtExactSearch,
  },
  {
    number: "02",
    label: "The local search",
    body: "A map listing gets someone as far as the website. If the site doesn't confirm the same service and area, the next result gets the click.",
    Art: ArtLocalSearch,
  },
  {
    number: "03",
    label: "The referral",
    body: "A referred visitor arrives already inclined to trust you. A homepage that doesn't confirm what they were told wastes the warmest attention a business gets.",
    Art: ArtReferral,
  },
  {
    number: "04",
    label: "The paid click",
    body: "Advertising can put the offer in front of the right person. What the click lands on still has to confirm relevance and offer a clear next step.",
    Art: ArtPaidClick,
  },
  {
    number: "05",
    label: "The second look",
    body: "Reviews, past work and credentials get checked quietly before contact. If the website doesn't hold that proof, the visitor goes looking elsewhere.",
    Art: ArtSecondLook,
  },
  {
    number: "06",
    label: "The remembered name",
    body: "Someone returns directly, by name rather than by search. If the site still doesn't answer their question, familiarity alone won't close the gap.",
    Art: ArtRemembered,
  },
] as const;

export function HomeAttention() {
  return (
    <section id="attention" className="home-attention section">
      <div className="container section-intro" data-home-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-home-sequence-item>
            Existing attention
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
