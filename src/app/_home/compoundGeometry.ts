/**
 * Geometry for the compounding circuit, owned in one place.
 *
 * The artwork draws from it, the section positions its stations from it, and the
 * motion schedules by it — so a dot, its label and the moment the travelling
 * enquiry reaches it all come from the same numbers and cannot drift apart.
 *
 * The loop is a stadium: two straights joined by semicircular turns. A loop rather
 * than a line because that is the claim — the route returns, and the next pass
 * starts from what the last one left.
 *
 * Stations sit two to a straight and one on each turn, which is what keeps their
 * labels clear of each other: six points crowded onto one straight cannot be
 * labelled at a readable width.
 */

export const VIEW_W = 1400;
export const VIEW_H = 780;

const TOP = 215;
const BOTTOM = 595;
const RADIUS = (BOTTOM - TOP) / 2;
const LEFT_CAP = 460;
const RIGHT_CAP = 940;
const MID_Y = (TOP + BOTTOM) / 2;
const STRAIGHT = RIGHT_CAP - LEFT_CAP;
const LEFT_EDGE = LEFT_CAP - RADIUS;
const RIGHT_EDGE = RIGHT_CAP + RADIUS;

const CAP_ARC = Math.PI * RADIUS;
const QUARTER = CAP_ARC / 2;
const PERIMETER = 2 * STRAIGHT + 2 * CAP_ARC;

export type StationPlace = "left" | "top" | "right" | "bottom";

/** The two label columns on each straight. */
const NEAR = 580;
const FAR = 820;

/**
 * Clockwise from the leftmost point. `along` is the distance travelled to reach a
 * station, which is also when the enquiry gets there.
 *
 * `tier` staggers the two labels on each straight away from one another: six points
 * on one loop cannot be labelled at a readable width if every label hangs at the
 * same distance from its line.
 */
const POINTS: readonly {
  x: number;
  y: number;
  place: StationPlace;
  tier: 0 | 1;
  along: number;
}[] = [
  { x: LEFT_EDGE, y: MID_Y, place: "left", tier: 0, along: 0 },
  { x: NEAR, y: TOP, place: "top", tier: 1, along: QUARTER + (NEAR - LEFT_CAP) },
  { x: FAR, y: TOP, place: "top", tier: 0, along: QUARTER + (FAR - LEFT_CAP) },
  { x: RIGHT_EDGE, y: MID_Y, place: "right", tier: 0, along: QUARTER + STRAIGHT + QUARTER },
  {
    x: FAR,
    y: BOTTOM,
    place: "bottom",
    tier: 0,
    along: QUARTER + STRAIGHT + CAP_ARC + (RIGHT_CAP - FAR),
  },
  {
    x: NEAR,
    y: BOTTOM,
    place: "bottom",
    tier: 1,
    along: QUARTER + STRAIGHT + CAP_ARC + (RIGHT_CAP - NEAR),
  },
];

export const STATIONS = POINTS.map(({ x, y, place, tier, along }) => ({
  place,
  tier,
  left: `${((x / VIEW_W) * 100).toFixed(3)}%`,
  top: `${((y / VIEW_H) * 100).toFixed(3)}%`,
  /* The first station is where the route begins, so it lights just after the
     enquiry sets off rather than before it has moved at all. */
  progress: Math.max(0.015, +(along / PERIMETER).toFixed(4)),
}));

export const STATION_PROGRESS = STATIONS.map(({ progress }) => progress);

/** Clockwise from the leftmost point, so the route starts where it also ends. */
export function loopPath(offset: number) {
  const r = RADIUS + offset;
  const top = TOP - offset;
  const bottom = BOTTOM + offset;
  const left = LEFT_CAP - r;

  return [
    `M ${left} ${MID_Y}`,
    `A ${r} ${r} 0 0 1 ${LEFT_CAP} ${top}`,
    `L ${RIGHT_CAP} ${top}`,
    `A ${r} ${r} 0 0 1 ${RIGHT_CAP} ${bottom}`,
    `L ${LEFT_CAP} ${bottom}`,
    `A ${r} ${r} 0 0 1 ${left} ${MID_Y}`,
    "Z",
  ].join(" ");
}

export const TOKEN_ORIGIN = { cx: LEFT_EDGE, cy: MID_Y };

export const LOOP_ID = "cmpd-loop";

/** Base first; the outer two are the body the route gains as it goes. */
export const TRACES = [
  { offset: 0, opacity: 0.9, width: 1.75, lap: 0 },
  { offset: 8, opacity: 0.38, width: 1.25, lap: 1 },
  { offset: 16, opacity: 0.2, width: 1, lap: 2 },
] as const;
