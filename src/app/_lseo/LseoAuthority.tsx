import { Icon, type IconName } from "@/components/ui/Icon";

/**
 * 9 · Local authority — new section.
 *
 * Three parallel strands, each drawn as a rail of concrete entries that
 * accumulate downward, because local relevance is earned in public and over
 * time rather than assembled at once. The boundary block underneath is not a
 * disclaimer bolted on: naming what is refused is the argument for why the
 * slower route is the one worth paying for.
 */
const STRANDS: ReadonlyArray<{
  icon: IconName;
  title: string;
  lede: string;
  entries: ReadonlyArray<{ title: string; note: string }>;
}> = [
  {
    icon: "folder",
    title: "Useful pages",
    lede: "Material that answers a real local question better than whatever else is available.",
    entries: [
      {
        title: "A treatment explained honestly",
        note: "What it involves, who it suits, and what it will not fix.",
      },
      {
        title: "A place you genuinely work in",
        note: "One page per real location or service area — not one per postcode.",
      },
      {
        title: "The question you answer every week",
        note: "Written down once, properly, where people can actually find it.",
      },
    ],
  },
  {
    icon: "circle-check",
    title: "Credible mentions",
    lede: "Being named by organisations that are themselves worth trusting.",
    entries: [
      {
        title: "Professional bodies and registers",
        note: "Where a qualification or membership can be independently checked.",
      },
      {
        title: "Genuine local organisations",
        note: "Sponsorships, partnerships and community work that really happened.",
      },
      {
        title: "Local and industry coverage",
        note: "Earned by doing something that was worth reporting.",
      },
    ],
  },
  {
    icon: "message-square",
    title: "Real relationships",
    lede: "The working connections a business already has, made visible.",
    entries: [
      {
        title: "Referring practitioners",
        note: "The people already sending you work they judge you suitable for.",
      },
      {
        title: "Neighbouring businesses",
        note: "Shared locality, shared customers, honest cross-reference.",
      },
      {
        title: "Customers who will say so",
        note: "Proof that exists because the work was worth talking about.",
      },
    ],
  },
];

const REFUSED = [
  "Location pages for places you do not serve",
  "Bought, exchanged or automated links",
  "Listings that exist only to be counted",
] as const;

export function LseoAuthority() {
  return (
    <section id="local-authority" className="lsa-authority lsa-section section on-mist">
      <div className="container lsa-authority__inner">
        <div className="lsa-centered-intro" data-lsa-sequence>
          <p className="eyebrow eyebrow--centered" data-lsa-sequence-item>
            Local authority
          </p>
          <h2 data-lsa-sequence-item>
            Build local relevance through useful pages,{" "}
            <em>credible mentions and real relationships.</em>
          </h2>
          <p data-lsa-sequence-item>
            Local relevance is not a setting to switch on. It accumulates from material worth
            reading, from being named by organisations that are themselves credible, and from the
            working relationships a business already has.
          </p>
        </div>

        <div className="lsa-authority__strands">
          {STRANDS.map((strand) => (
            <article key={strand.title} data-lsa-stagger>
              <header data-lsa-stagger-item>
                <span className="lsa-icon-disc" aria-hidden="true">
                  <Icon name={strand.icon} size={16} />
                </span>
                <h3>{strand.title}</h3>
                <p>{strand.lede}</p>
              </header>
              <ol>
                {strand.entries.map((entry) => (
                  <li key={entry.title} data-lsa-stagger-item>
                    <strong>{entry.title}</strong>
                    <span>{entry.note}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        <div className="lsa-authority__boundary" data-lsa-fade>
          <div>
            <p className="lsa-authority__boundary-label">What this never means</p>
            <ul>
              {REFUSED.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">
                    <Icon name="x" size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p>
            Shortcuts can move a number for a while. They do not make a business more credible to
            the person deciding, and they put a name your customers already trust at risk. Local
            authority is slower precisely because it is real.
          </p>
        </div>
      </div>
    </section>
  );
}
