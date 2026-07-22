import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Band 1 — Hero (navy). Content left, "smart website" artifact right: a site
 * panel whose reading path threads Find → Understand → Choose.
 */
export function HeroB() {
  return (
    <section id="hero" className="section hb-hero hb-navy-field on-dark" data-anim="hero">
      <div className="container hb-hero__inner">
        <div className="hb-hero__content">
          <p className="eyebrow" data-hero-in>
            Smart Website Systems
          </p>
          <h1 className="hb-hero__title" data-hero-in>
            A smarter website for how people <em>find, understand and choose you.</em>
          </h1>
          <p className="text-lead hb-hero__lead" data-hero-in>
            For independent clinics and specialist service businesses, the website is where a
            careful decision is made. We design and build the site — and the handling around
            every enquiry — so the right people can act with confidence.
          </p>
          <div className="hb-hero__actions" data-hero-in>
            <Button href="#review" variant="on-dark">
              {PRIMARY_CTA_LABEL}
            </Button>
            <Button href="#work" variant="link" className="btn-on-dark">
              {SECONDARY_CTA_LABEL}
            </Button>
          </div>
        </div>

        <div className="hb-hero__art" data-hero-in aria-hidden="true">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}

function HeroArt() {
  return (
    <svg
      className="hb-hero-art"
      viewBox="0 0 600 480"
      role="img"
      aria-label="A website whose reading path leads a visitor from finding, to understanding, to choosing."
      data-parallax="0.06"
    >
      <defs>
        <radialGradient id="hbHeroGlow" cx="50%" cy="42%" r="60%">
          <stop offset="0%" className="hb-hero-art__glow-a" />
          <stop offset="100%" className="hb-hero-art__glow-b" />
        </radialGradient>
      </defs>

      <ellipse cx="330" cy="220" rx="250" ry="210" fill="url(#hbHeroGlow)" />

      {/* depth layer */}
      <rect className="hb-hero-art__depth" x="78" y="84" width="360" height="336" rx="18" />

      {/* site panel */}
      <rect className="hb-hero-art__panel" x="52" y="60" width="360" height="336" rx="18" />

      {/* top bar */}
      <circle className="hb-hero-art__dot hb-hero-art__dot--live" cx="78" cy="86" r="4.5" />
      <circle className="hb-hero-art__dot" cx="94" cy="86" r="4.5" />
      <circle className="hb-hero-art__dot" cx="110" cy="86" r="4.5" />
      <rect className="hb-hero-art__pill" x="150" y="79" width="224" height="15" rx="7.5" />

      {/* Find zone — search / nav */}
      <rect className="hb-hero-art__field" x="78" y="120" width="196" height="22" rx="7" />
      <circle className="hb-hero-art__field-i" cx="258" cy="131" r="5.5" />

      {/* Understand zone — heading, lines, proof card */}
      <rect className="hb-hero-art__bar" x="78" y="166" width="150" height="14" rx="5" />
      <rect className="hb-hero-art__line" x="78" y="192" width="230" height="8" rx="4" />
      <rect className="hb-hero-art__line" x="78" y="208" width="196" height="8" rx="4" />
      <rect className="hb-hero-art__card" x="78" y="230" width="256" height="60" rx="10" />
      <circle className="hb-hero-art__tick-bg" cx="100" cy="260" r="12" />
      <path className="hb-hero-art__tick" d="M94.5 260l4 4 7-7.5" />
      <rect className="hb-hero-art__line hb-hero-art__line--soft" x="122" y="250" width="150" height="7" rx="3.5" />
      <rect className="hb-hero-art__line hb-hero-art__line--soft" x="122" y="264" width="110" height="7" rx="3.5" />

      {/* Choose zone — CTA */}
      <rect className="hb-hero-art__cta" x="78" y="318" width="150" height="38" rx="9" />
      <rect className="hb-hero-art__cta-label" x="98" y="333" width="90" height="8" rx="4" />

      {/* reading-path spine + nodes */}
      <path
        className="hb-hero-art__spine"
        data-draw
        d="M470 132 C 512 190, 512 286, 470 344"
        fill="none"
      />
      {/* connectors into the page */}
      <path className="hb-hero-art__link" d="M455 132 L 412 131" fill="none" />
      <path className="hb-hero-art__link" d="M455 238 L 412 250" fill="none" />
      <path className="hb-hero-art__link" d="M455 344 L 236 337" fill="none" />

      <g data-anim="pop">
        <g data-pop>
          <circle className="hb-hero-art__node-ring" cx="470" cy="132" r="15" />
          <circle className="hb-hero-art__node" cx="470" cy="132" r="8" />
          <rect className="hb-hero-art__chip" x="492" y="122" width="70" height="21" rx="10.5" />
          <text className="hb-hero-art__chip-t" x="527" y="136">
            Find
          </text>
        </g>
        <g data-pop>
          <circle className="hb-hero-art__node-ring" cx="470" cy="238" r="15" />
          <circle className="hb-hero-art__node" cx="470" cy="238" r="8" />
          <rect className="hb-hero-art__chip" x="492" y="228" width="104" height="21" rx="10.5" />
          <text className="hb-hero-art__chip-t" x="544" y="242">
            Understand
          </text>
        </g>
        <g data-pop>
          <circle className="hb-hero-art__node-ring" cx="470" cy="344" r="15" />
          <circle className="hb-hero-art__node" cx="470" cy="344" r="8" />
          <rect className="hb-hero-art__chip" x="492" y="334" width="82" height="21" rx="10.5" />
          <text className="hb-hero-art__chip-t" x="533" y="348">
            Choose
          </text>
        </g>
      </g>
    </svg>
  );
}
