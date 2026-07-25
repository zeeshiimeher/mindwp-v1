import { Button } from "@/components/ui/Button";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Sections 14 and 16.
 *
 * Section 14 reuses the Homepage Right Fit composition — two opposed lists, the
 * affirmative one given the larger column — because the material genuinely has
 * that structure. The content is Smart Website Systems specific.
 *
 * Section 16 reuses the broad Homepage closing framework (centred eyebrow,
 * display headline, one action) but inverts its surface: the invitation is made
 * on paper, and the page resolves into a navy band carrying what the review
 * actually examines. The Homepage closes on an icon row; this closes on the
 * three questions the review answers, which is the decision a rebuild buyer is
 * actually weighing.
 */

const GOOD_FIT = [
  "Your work needs explaining before anyone can judge it — and right now that explaining happens on the phone.",
  "A single patient or client is worth enough that the site's clarity carries real commercial weight.",
  "You are being compared, in tabs you will never see, against practices that bought the same template.",
  "You want to own and edit the site afterwards rather than rent it back from whoever built it.",
  "Established or newer — as long as getting this right from the start matters more than getting it cheap.",
];

const NOT_FIT = [
  "Looking for the cheapest site available",
  "Expecting a website alone to create demand",
  "Expecting guaranteed rankings or a lead volume",
  "Wanting a brochure nobody has to act on",
  "Happy with a template and a swapped logo",
];

const REVIEW_LOOKS_AT = [
  {
    title: "What people can find",
    body: "How you appear when someone searches for the work you actually do — and what they see before they reach you.",
  },
  {
    title: "What the site explains",
    body: "Whether the pages answer the questions people arrive with, and where the argument currently stops short.",
  },
  {
    title: "Where enquiries go",
    body: "What happens between someone deciding to act and a person being in a position to answer them.",
  },
] as const;

export function SwsFit() {
  return (
    <section id="fit" className="sws-fit section on-mist">
      <div className="container section-intro" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-item>
            Right fit
          </p>
          <h2 data-sws-item>
            Best for substantial offers <em>that a generic website undersells.</em>
          </h2>
        </div>
        <div className="section-copy-group">
          <p data-sws-item>
            This is a considered engagement, and it is not right for everyone. Better to be plain
            about that here than to discover it three weeks in.
          </p>
        </div>
      </div>

      <div className="container container--split sws-fit__layout">
        <div className="sws-fit__good" data-sws-sequence>
          <p className="sws-fit__label" data-sws-item>
            A good fit if
          </p>
          <ul data-sws-stagger>
            {GOOD_FIT.map((item) => (
              <li key={item} data-sws-stagger-item>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="sws-fit__not" data-sws-sequence>
          <p className="sws-fit__label" data-sws-item>
            Not the right fit if
          </p>
          <ul data-sws-stagger>
            {NOT_FIT.map((item) => (
              <li key={item} data-sws-stagger-item>
                <span aria-hidden="true">×</span>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export function SwsClosing() {
  return (
    <section id="review" className="sws-closing section section--focal">
      <div className="container section-intro section-intro--centered" data-sws-sequence>
        <p className="eyebrow eyebrow--centered" data-sws-item>
          Visibility &amp; Enquiry Review
        </p>
        <h2 className="display-feature" data-sws-item>
          See what the website should make easier <em>before deciding what to rebuild.</em>
        </h2>
        <p data-sws-item>
          A rebuild is the expensive answer to a question most sites have never had asked properly.
          The review establishes what is actually costing you enquiries — which sometimes means a
          rebuild, and sometimes means three pages and a clearer path.
        </p>
      </div>

      <div className="sws-closing__band on-dark" data-sws-fade>
        <div className="container container--content sws-closing__band-inner">
          <ol className="sws-closing__looks" data-sws-stagger>
            {REVIEW_LOOKS_AT.map((item) => (
              <li key={item.title} data-sws-stagger-item>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>

          <div className="sws-closing__action" data-sws-sequence>
            <Button
              href={CONTACT_PATH}
              variant="on-dark"
              className="btn-lg"
              data-sws-item
            >
              {PRIMARY_CTA_LABEL}
            </Button>
            <small data-sws-item>
              One private conversation, and no obligation to continue. Scope and cost are quoted
              afterwards, once there is something real to quote on.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
