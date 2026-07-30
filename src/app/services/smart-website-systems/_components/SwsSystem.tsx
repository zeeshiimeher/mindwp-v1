import { Icon, type IconName } from "@/components/ui/Icon";

/**
 * Every way they reach you — plan section 4.
 *
 * The move is intake, and only intake: where enquiries arrive, and why one
 * front door matters. What happens to them afterwards belongs to later
 * sections, so nothing here describes handling, ownership or follow-up.
 *
 * Convergence is a spatial argument, so it is drawn rather than described: the
 * agreed channels sit as peers on the left, their routes bend into one junction,
 * and a single record panel is what comes out. Scroll scrubs the sequence — the
 * channels arrive, the routes draw, the record resolves — but nothing pins, so
 * the reader keeps control of the page.
 *
 * The connector carries `preserveAspectRatio="none"` over a 0–100 box, so its
 * five origins map proportionally onto five equal grid rows at any width
 * without measuring anything in JavaScript. `non-scaling-stroke` keeps the line
 * weight honest under that distortion.
 *
 * The boundary matters as much as the picture: only agreed sources connect, and
 * the note under the diagram says so rather than letting the drawing imply that
 * everything routes itself.
 */

interface Channel {
  icon: IconName;
  label: string;
  detail: string;
  missed?: boolean;
}

const CHANNELS: Channel[] = [
  { icon: "globe", label: "Website enquiry form", detail: "eleven at night, usually" },
  { icon: "phone", label: "Phone call", detail: "when someone was free to take it" },
  { icon: "phone", label: "Missed call", detail: "when nobody was", missed: true },
  { icon: "message-square", label: "Message", detail: "email, social, messaging app" },
  {
    icon: "search",
    label: "Advertising or listing enquiry",
    detail: "wherever you already appear",
  },
];

/* Five origins on the left edge, one junction on the right. */
const ROUTES = [
  "M0 10 C 42 10 56 50 100 50",
  "M0 30 C 42 30 62 50 100 50",
  "M0 50 H100",
  "M0 70 C 42 70 62 50 100 50",
  "M0 90 C 42 90 56 50 100 50",
];

export function SwsSystem() {
  return (
    <section id="one-system" className="sws-system section">
      <div className="container section-intro--split sws-system__head" data-sws-sequence>
        <div className="section-title-group">
          <p className="eyebrow" data-sws-sequence-item>
            Every way they reach you
          </p>
          <h2 data-sws-sequence-item>
            They will contact you the way that suits them, <em>not the way that suits you.</em>
          </h2>
        </div>
        <p className="sws-system__lede" data-sws-sequence-item>
          Some people fill in a form at eleven at night. Some ring and hang up. Some reply to an ad,
          or message the account somebody set up two years ago. You do not get to pick.
        </p>
      </div>

      <div className="container sws-system__stage" data-sws-converge>
        <ol className="sws-system__channels">
          {CHANNELS.map((channel) => (
            <li key={channel.label} data-sws-converge-chip>
              <span
                className={
                  channel.missed ? "sws-system__icon sws-system__icon--missed" : "sws-system__icon"
                }
                aria-hidden="true"
              >
                <Icon name={channel.icon} size={17} />
              </span>
              <span>
                <strong>{channel.label}</strong>
                <small>{channel.detail}</small>
              </span>
            </li>
          ))}
        </ol>

        <div className="sws-system__connector" aria-hidden="true">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" focusable="false">
            {ROUTES.map((d) => (
              <path
                key={d}
                className="sws-system__route"
                d={d}
                pathLength="1"
                vectorEffect="non-scaling-stroke"
                data-sws-converge-path
              />
            ))}
          </svg>
          <span className="sws-system__junction" />
        </div>

        <div className="sws-system__target" data-sws-converge-target>
          <div className="sws-system__target-head">
            <p className="sws-artifact-label">One place</p>
            <strong>Every agreed enquiry, in one list</strong>
          </div>
          <ul className="sws-system__rows">
            {CHANNELS.map((channel) => (
              <li key={channel.label}>
                <span className="sws-system__dot" aria-hidden="true" />
                <span className="sws-system__row-label">{channel.label}</span>
                <span className="sws-system__row-state">Received</span>
              </li>
            ))}
          </ul>
          <p className="sws-system__target-foot">
            One place your team works from, instead of five places somebody has to remember to
            check.
          </p>
        </div>
      </div>

      <div className="container" data-sws-fade>
        <p className="sws-system__note">
          Only the sources we agree are connected, and each one is set up and tested on its own.
          Nothing routes itself simply because it exists.
        </p>
      </div>
    </section>
  );
}
