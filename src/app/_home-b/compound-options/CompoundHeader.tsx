import { COMPOUND_INTRO } from "./data";

export function CompoundHeader({ intro = COMPOUND_INTRO }: { intro?: string }) {
  return (
    <div
      className="container container--content section-intro section-intro--centered"
      data-home-b-sequence
    >
      <p className="eyebrow eyebrow--centered" data-home-b-sequence-item>
        Not a launch — an asset
      </p>
      <h2 data-home-b-sequence-item>
        A smart website doesn&apos;t peak at launch. <em>It compounds.</em>
      </h2>
      <p data-home-b-sequence-item>{intro}</p>
    </div>
  );
}
