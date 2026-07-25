import type { ReactNode } from "react";

/**
 * A labelled wrapper for the in-page prototypes.
 *
 * A fragment rather than a wrapper element: the capture tool screenshots
 * `main > section`, so wrapping these would hide every prototype from the
 * contact sheet — which is the only reason they exist.
 *
 * The banner is deliberately loud and unbranded. Nothing here should be
 * mistaken for finished page furniture, and the whole folder comes out once a
 * direction is chosen.
 */
interface VariantFrameProps {
  tag: string;
  title: string;
  note: string;
  children: ReactNode;
}

export function VariantFrame({ tag, title, note, children }: VariantFrameProps) {
  return (
    <>
      <div className="lrhv__banner-wrap">
        <div className="container lrhv__banner">
          <span className="lrhv__tag">{tag}</span>
          <strong>{title}</strong>
          <small>{note}</small>
        </div>
      </div>
      {children}
    </>
  );
}

export function VariantsIntro() {
  return (
    <div className="lrhv__intro">
      <div className="container">
        <p>Prototypes — not part of the page</p>
        <h2>Three ways to give Visible Ownership real weight.</h2>
        <p>
          The live section above is untouched, so you can judge each against it. No motion in any of
          them. Everything below comes out once a direction is chosen.
        </p>
      </div>
    </div>
  );
}
