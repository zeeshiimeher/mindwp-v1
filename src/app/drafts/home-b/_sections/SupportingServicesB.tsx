"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

import type { IconName } from "@/components/ui/Icon";
import { Icon } from "@/components/ui/Icon";

/**
 * Band 7 — The four optional supporting services (mist). One sticky-scroll
 * showcase: a rail anchored to "your website" tracks the active service while
 * compact, truthful panels scroll past. Subordinate by scale and surface to the
 * white principal band above. Without JS it degrades to a plain stacked list.
 */
type Service = {
  key: string;
  name: string;
  icon: IconName;
  lead: string;
  render: () => ReactNode;
};

const SERVICES: Service[] = [
  {
    key: "local",
    name: "Local Visibility",
    icon: "map-pin",
    lead: "Be found for the real services and places your business can genuinely support.",
    render: () => (
      <div className="hb-svc-art hb-svc-art--local">
        <div className="hb-svc-art__head">
          <Icon name="map-pin" size={16} />
          <span>Your city · service area</span>
        </div>
        <ul className="hb-svc-art__rows">
          <li>Named services, described plainly</li>
          <li>The areas you actually cover</li>
          <li>Consistent details across the web</li>
        </ul>
        <p className="hb-svc-art__foot">Ongoing discovery — no ranking guarantees.</p>
      </div>
    ),
  },
  {
    key: "first",
    name: "First Response",
    icon: "message-square",
    lead: "Acknowledge every enquiry and place it with someone who is responsible for it.",
    render: () => (
      <div className="hb-svc-art hb-svc-art--first">
        <div className="hb-svc-art__msg">
          <Icon name="mail" size={16} />
          <span>Enquiry received</span>
          <span className="hb-svc-art__badge">acknowledged</span>
        </div>
        <div className="hb-svc-art__owner">
          <span className="hb-svc-art__avatar" aria-hidden="true" />
          <div>
            <p className="hb-svc-art__owner-name">Placed with a named owner</p>
            <p className="hb-svc-art__owner-sub">A person, not a receptionist bot.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "follow",
    name: "Purposeful Follow-Up",
    icon: "arrow-right",
    lead: "Keep worthwhile decisions visible — without replacing anyone’s judgement.",
    render: () => (
      <div className="hb-svc-art hb-svc-art--follow">
        <ol className="hb-svc-art__steps">
          <li>
            <span className="hb-svc-art__step-dot" />A first, useful reply
          </li>
          <li>
            <span className="hb-svc-art__step-dot" />A considered nudge, if it helps
          </li>
        </ol>
        <p className="hb-svc-art__stop">
          <Icon name="check" size={14} /> Stops the moment they reply or ask to pause.
        </p>
      </div>
    ),
  },
  {
    key: "reputation",
    name: "Visible Reputation",
    icon: "star",
    lead: "Let genuine customer experience strengthen the next person’s decision.",
    render: () => (
      <div className="hb-svc-art hb-svc-art--rep">
        <div className="hb-svc-art__flow">
          <span className="hb-svc-art__flow-step">Invite</span>
          <Icon name="arrow-right" size={14} />
          <span className="hb-svc-art__flow-step">Feedback</span>
          <Icon name="arrow-right" size={14} />
          <span className="hb-svc-art__flow-step">Honest reply</span>
        </div>
        <p className="hb-svc-art__foot">
          <Icon name="message-square" size={14} /> Ethical requests only — never bought or invented.
        </p>
      </div>
    ),
  },
];

export function SupportingServicesB() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const els = panelRefs.current.filter(Boolean) as HTMLElement[];
    if (!els.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section hb-support hb--mist">
      <div className="container">
        <div className="section-intro hb-support__intro" data-anim="rise">
          <p className="eyebrow">Connected support</p>
          <h2>
            Four supporting systems, added <em>only where they earn their place.</em>
          </h2>
          <p className="text-lead hb-lede">
            Each one owns a specific moment around the website. Take any, all, or none — the
            website still leads.
          </p>
        </div>

        <div className="hb-support__layout">
          <aside className="hb-support__rail" aria-hidden="true">
            <p className="hb-support__rail-anchor">
              <Icon name="globe" size={16} /> Your website
            </p>
            <ul className="hb-support__rail-list">
              {SERVICES.map((s, i) => (
                <li
                  key={s.key}
                  className={`hb-support__rail-item${i === active ? " is-active" : ""}`}
                >
                  <span className="hb-support__rail-dot" />
                  {s.name}
                </li>
              ))}
            </ul>
          </aside>

          <ol className="hb-support__panels">
            {SERVICES.map((s, i) => (
              <li
                key={s.key}
                className="hb-support__panel"
                data-index={i}
                data-anim="rise"
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
              >
                <div className="hb-support__panel-head">
                  <span className="hb-support__panel-icon" aria-hidden="true">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <h3 className="hb-support__panel-name">{s.name}</h3>
                </div>
                <p className="hb-support__panel-lead">{s.lead}</p>
                {s.render()}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
