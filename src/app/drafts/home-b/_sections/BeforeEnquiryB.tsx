import { Icon } from "@/components/ui/Icon";

/**
 * Band 3 — Before enquiry (mist). Split: intro left, and one cohesive panel on
 * the right where the visitor's real questions resolve as they read, building to
 * "now the enquiry makes sense." (Redesigned from loose cards to one artifact.)
 */
const QUESTIONS = [
  {
    q: "What exactly do you do?",
    a: "Services in the words people actually use — not category jargon.",
  },
  {
    q: "Is this right for someone like me?",
    a: "The decision, the evidence and the honest boundaries, made specific.",
  },
  {
    q: "Can I trust the work?",
    a: "Proof placed exactly where the doubt tends to surface.",
  },
  {
    q: "What happens if I get in touch?",
    a: "A clear, low-pressure next step, described before they take it.",
  },
];

export function BeforeEnquiryB() {
  return (
    <section className="section hb-before hb--mist">
      <div className="container hb-before__grid">
        <div className="section-intro hb-before__intro" data-anim="rise">
          <p className="eyebrow">Before enquiry</p>
          <h2>
            Before people contact you, the website has to <em>make the decision easier.</em>
          </h2>
          <p className="text-lead">
            A considered choice is mostly made before anyone fills in a form. Every question the
            site answers well is a reason to stay — and a reason to reach out.
          </p>
        </div>

        <div className="hb-before__panel" data-anim="rise">
          <p className="hb-before__panel-label">As they read, the questions resolve</p>
          <ol className="hb-before__list" data-anim="stagger">
            {QUESTIONS.map((item, i) => (
              <li className="hb-before__row" key={i}>
                <span className="hb-before__row-mark" aria-hidden="true">
                  <Icon name="circle-check" size={20} />
                </span>
                <div className="hb-before__row-body">
                  <p className="hb-before__row-q">{item.q}</p>
                  <p className="hb-before__row-a">{item.a}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="hb-before__ready">
            <Icon name="arrow-right" size={16} />
            Now the enquiry makes sense.
          </p>
        </div>
      </div>
    </section>
  );
}
