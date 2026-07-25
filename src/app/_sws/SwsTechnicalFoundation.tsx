import { Icon, type IconName } from "@/components/ui/Icon";

interface Foundation {
  term: string;
  note: string;
  icon: IconName;
}

/**
 * A deliberately quiet section — four genuine peers, column count honestly
 * matching item count, no gimmick. A rest beat between Useful Actions and
 * From Plan to Working System, per docs/DESIGN.md ("not every section needs
 * a bespoke visual concept").
 */
const FOUNDATIONS: readonly Foundation[] = [
  {
    term: "Speed",
    note: "A page that responds immediately, on the connection a visitor actually has.",
    icon: "arrow-right",
  },
  {
    term: "Accessibility",
    note: "Usable with a keyboard, a screen reader, or a visitor who simply needs larger text.",
    icon: "circle-check",
  },
  {
    term: "Search readiness",
    note: "Built so it can be found for the work it actually does, not just the business name.",
    icon: "search",
  },
  {
    term: "Maintainability",
    note: "Structured so a future change stays a small, contained job.",
    icon: "folder",
  },
];

export function SwsTechnicalFoundation() {
  return (
    <section id="technical-foundation" className="sws-technical-foundation section section--quiet">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-sequence-item>
          Technical foundation
        </p>
        <h2 data-sws-sequence-item>
          Make speed, accessibility, search readiness and maintainability{" "}
          <em>part of the build.</em>
        </h2>
      </div>

      <ul className="container sws-technical-foundation__grid" data-sws-stagger>
        {FOUNDATIONS.map((item) => (
          <li key={item.term} data-sws-stagger-item>
            <span className="sws-technical-foundation__icon">
              <Icon name={item.icon} size={18} />
            </span>
            <strong>{item.term}</strong>
            <p>{item.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
