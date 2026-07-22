import { Icon } from "@/components/ui/Icon";

/**
 * Band 10 — Right fit (mist). Split column: intro left, positive recognition
 * signals stacked right. Sector-neutral, diagnostic not exclusionary — names
 * clinics + specialist service businesses in copy, not clinic-styled visuals.
 */
const SIGNALS = [
  {
    title: "The decision carries real weight",
    note: "A clinic visit, a property you let, a service people rely on — considered choices, not impulse clicks.",
  },
  {
    title: "Trust has to be earned, not claimed",
    note: "Your buyers read carefully. Clarity and real proof do far more here than adjectives ever could.",
  },
  {
    title: "The work itself deserves care",
    note: "For independent clinics and specialist service businesses who take their craft — and their people — seriously.",
  },
];

export function RightFitB() {
  return (
    <section className="section hb-fit hb--mist">
      <div className="container hb-fit__grid">
        <div className="section-intro hb-fit__intro" data-anim="rise">
          <p className="eyebrow">Right fit</p>
          <h2>
            For businesses where the decision <em>deserves care.</em>
          </h2>
          <p className="text-lead hb-lede">
            MindWP is built for independent clinics and specialist service businesses. You’ll
            probably recognise yourself in these.
          </p>
        </div>

        <ul className="hb-fit__list" data-anim="stagger">
          {SIGNALS.map((s) => (
            <li className="hb-fit__item" key={s.title}>
              <span className="hb-fit__item-mark" aria-hidden="true">
                <Icon name="check" size={16} />
              </span>
              <div className="hb-fit__item-body">
                <p className="hb-fit__item-title">{s.title}</p>
                <p className="hb-fit__item-note">{s.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
