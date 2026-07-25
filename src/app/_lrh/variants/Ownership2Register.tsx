import { VariantFrame } from "@/app/_lrh/variants/VariantFrame";

/**
 * Option 2 — the register.
 *
 * Data shape: four rows by two columns, where the right column changes value
 * once.
 *
 * Set as a printed table of contents — flush rows, tabular numerals, dot
 * leaders, small-caps column heads. Ownership becomes literally a column you
 * read down, and the argument is carried by one value changing rather than by
 * a sentence describing it.
 *
 * Kept to *who holds it at each moment*, deliberately. Automation's
 * capabilities belong to the automation section; if this register started
 * listing what the system performs, the two would collapse into each other.
 */

const REGISTER: readonly { move: string; heldBy: string }[] = [
  { move: "The enquiry is recorded", heldBy: "The system" },
  { move: "The acknowledgement goes out", heldBy: "The system" },
  { move: "It is placed with the right person", heldBy: "The system" },
];

export function Ownership2Register() {
  return (
    <VariantFrame
      tag="2"
      title="The register"
      note="Four rows, two columns · printed index setting · the owner column changes once"
    >
      <section id="ownership-2-register" className="lrhv-register section section--focal">
        <div className="container lrhv-register__head">
          <p className="eyebrow">Visible ownership</p>
          <h2>Then a person takes it.</h2>
        </div>

        <div className="container">
          <div className="lrhv-register__sheet">
            <div className="lrhv-register__columns" aria-hidden="true">
              <span>Move</span>
              <span>Held by</span>
            </div>

            <ol>
              {REGISTER.map((row) => (
                <li key={row.move}>
                  <span className="lrhv-register__move">{row.move}</span>
                  <span className="lrhv-register__held">{row.heldBy}</span>
                </li>
              ))}
              <li className="lrhv-register__handover">
                <span className="lrhv-register__move">Every decision after that</span>
                <span className="lrhv-register__held">A named person</span>
              </li>
            </ol>

            <p className="lrhv-register__close">
              One column, four rows, and a single change of value. Everything under that last row is
              yours — the booking, the price, the advice, the judgement.
            </p>
          </div>
        </div>
      </section>
    </VariantFrame>
  );
}
