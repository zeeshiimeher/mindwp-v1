export function BeyondHeader({ intro }: { intro: string }) {
  return (
    <div
      className="container container--content section-intro section-intro--centered"
      data-home-b-sequence
    >
      <p className="eyebrow eyebrow--centered" data-home-b-sequence-item>
        Beyond the website
      </p>
      <h2 data-home-b-sequence-item>
        Add the support <em>that earns its place.</em>
      </h2>
      <p data-home-b-sequence-item>{intro}</p>
    </div>
  );
}
