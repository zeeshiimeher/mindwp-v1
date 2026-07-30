import {
  LOOP_ID,
  loopPath,
  TOKEN_ORIGIN,
  TRACES,
  VIEW_H,
  VIEW_W,
} from "@/app/_home/compoundGeometry";

/**
 * The circuit: one closed route, drawn three times.
 *
 * The base trace is the route itself. The two offset outward from it are the body
 * it gains as the journey proceeds, revealed from the turns, so the loop visibly
 * thickens rather than repeating. A fourth copy carries the travelling enquiry and
 * is never painted.
 *
 * Decorative in the accessibility sense — every station is real text beside it, so
 * this is hidden from assistive technology.
 */
export function HomeCompoundArt() {
  return (
    <svg
      className="cmpd__art"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      aria-hidden="true"
      focusable="false"
    >
      <path className="cmpd__field" d={loopPath(0)} />

      {[...TRACES].reverse().map(({ offset, opacity, width, lap }) => (
        <path
          key={offset}
          className="cmpd__trace"
          d={loopPath(offset)}
          opacity={opacity}
          strokeWidth={width}
          vectorEffect="non-scaling-stroke"
          data-home-trace
          data-lap={lap}
        />
      ))}

      <path id={LOOP_ID} className="cmpd__rail" d={loopPath(0)} />

      <circle
        className="cmpd__token"
        cx={TOKEN_ORIGIN.cx}
        cy={TOKEN_ORIGIN.cy}
        r={8}
        data-home-token
      />
    </svg>
  );
}
