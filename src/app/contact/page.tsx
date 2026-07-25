import "@/styles/pages/contact.css";

import { ReviewRequestForm } from "@/components/forms/ReviewRequestForm";
import { Icon, type IconName } from "@/components/ui/Icon";
import { buildSEO } from "@/lib/seo/metadata";

export const metadata = buildSEO({
  title: "Request a Visibility & Enquiry Review",
  description:
    "Ask MindWP to review how people find, understand, choose and contact your business — and where improvement should begin.",
  path: "/contact",
});

const LENSES: readonly { icon: IconName; title: string; body: string }[] = [
  {
    icon: "map-pin",
    title: "Visibility",
    body: "How suitable people nearby come across you at all, and whether what they find agrees with itself.",
  },
  {
    icon: "globe",
    title: "Website",
    body: "Whether the pages people land on answer the question they arrived with, and whether the proof can be checked.",
  },
  {
    icon: "message-square",
    title: "Enquiry path",
    body: "What happens between someone deciding to get in touch and a person taking responsibility for the answer.",
  },
];

const NEXT_STEPS = [
  "You tell us how work reaches you today. Nothing you send is used for anything else.",
  "We look at your visibility, your website and the path an enquiry takes.",
  "You get a prioritised view of what is worth fixing first — useful whether or not we build together.",
];

export default function ContactPage() {
  return (
    <section className="contact section section--focal">
      <div className="container container--split contact__layout">
        <div className="contact__intro">
          <div className="section-title-group">
            <p className="eyebrow">Visibility &amp; enquiry review</p>
            <h1>
              Request a <em>Visibility &amp; Enquiry Review.</em>
            </h1>
          </div>

          <p className="text-lead">
            One private conversation about how people find, understand, choose and contact your
            business — and where improvement should begin.
          </p>

          <ul className="contact__lenses">
            {LENSES.map((lens) => (
              <li key={lens.title}>
                <span className="contact__lens-icon">
                  <Icon name={lens.icon} size={18} />
                </span>
                <div>
                  <strong>{lens.title}</strong>
                  <p>{lens.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="contact__next">
            <p className="contact__label">What happens next</p>
            <ol className="contact__next-list">
              {NEXT_STEPS.map((step, index) => (
                <li key={step}>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="editorial-note">
              No obligation to continue. You receive a clear starting point whether or not we work
              together.
            </p>
          </div>
        </div>

        <div className="contact__panel">
          <p className="contact__label">Your details</p>
          <ReviewRequestForm source="contact" />
          <p className="contact__privacy">
            We use what you send here only to prepare and reply to this request. We do not share it
            with anyone else, and we do not add you to a mailing list.
          </p>
        </div>
      </div>
    </section>
  );
}
