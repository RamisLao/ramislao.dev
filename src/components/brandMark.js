import { tokenColor } from '../utils/tokens.js';
import { hexToOklab, oklabToHex, mixOklab, easeInOut as ease } from '../utils/color.js';
import { brandMark as settings } from '../config.js';

/**
 * The shape-shifting logo mark next to "Ramis Lao".
 * It cycles through the site's shapes (set in config.js → brandMark), holding
 * each one for the same time and morphing smoothly into the next.
 *
 * How the morph works: every shape is drawn as the same two outlines of N
 * points each, an outer edge and an inner edge (the hole of the ring or the
 * arch; for solid shapes the inner edge shrinks to a single point). Both start
 * at the top center and run clockwise, so point i of one shape blends into
 * point i of the next. Colors blend around the hue wheel (OKLCH), so mid-morph
 * colors stay vivid instead of going muddy.
 */

const N = 120; // points per outline: enough for smooth curves

const TAU = Math.PI * 2;
const TOP = -Math.PI / 2;

/** Points along a circle arc, clockwise on screen, from angle a0 to a1. */
function arc(cx, cy, r, a0, a1, steps = 48) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const a = a0 + ((a1 - a0) * i) / steps;
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts;
}

/** A rounded rectangle, starting at the top center, clockwise. */
function roundedRect(x0, y0, x1, y1, r) {
  const cx = (x0 + x1) / 2;
  return [
    [cx, y0],
    ...arc(x1 - r, y0 + r, r, TOP, 0),
    ...arc(x1 - r, y1 - r, r, 0, Math.PI / 2),
    ...arc(x0 + r, y1 - r, r, Math.PI / 2, Math.PI),
    ...arc(x0 + r, y0 + r, r, Math.PI, TOP + TAU),
    [cx, y0],
  ];
}

/** An arch (a half circle on two legs), top center first, clockwise. Legs end below the view. */
function archOutline(r) {
  return [
    ...arc(12, 12, r, TOP, 0),
    [12 + r, 26],
    [12 - r, 26],
    ...arc(12, 12, r, Math.PI, TOP + TAU),
  ];
}

const point = (x, y) => [[x, y]];

// Shapes in a 24 × 24 box, roughly matching the flat shapes in sections.css.
const SHAPES = {
  circle: { outer: arc(12, 12, 11, TOP, TOP + TAU), inner: point(12, 12) },
  ring: { outer: arc(12, 12, 11, TOP, TOP + TAU), inner: arc(12, 12, 5.4, TOP, TOP + TAU) },
  arch: { outer: archOutline(11), inner: archOutline(5.4) },
  half: {
    outer: [...arc(12, 18, 11, TOP, 0), [1, 18], ...arc(12, 18, 11, Math.PI, TOP + TAU)],
    inner: point(12, 18),
  },
  triangle: { outer: [[12, 1.5], [23, 22.5], [1, 22.5], [12, 1.5]], inner: point(12, 15) },
  square: { outer: roundedRect(1, 1, 23, 23, 5), inner: point(12, 12) },
  pill: { outer: roundedRect(1, 6, 23, 18, 6), inner: point(12, 12) },
};

/** Resample a polyline into n points spread evenly along its length. */
function resample(pts, n) {
  if (pts.length === 1) return Array.from({ length: n }, () => pts[0]);
  const lens = [0];
  for (let i = 1; i < pts.length; i++) {
    lens.push(lens[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  }
  const total = lens[lens.length - 1];
  const out = [];
  let seg = 1;
  for (let k = 0; k < n; k++) {
    const d = (total * k) / n;
    while (seg < lens.length - 1 && lens[seg] < d) seg++;
    const t = (d - lens[seg - 1]) / (lens[seg] - lens[seg - 1] || 1);
    const [ax, ay] = pts[seg - 1];
    const [bx, by] = pts[seg];
    out.push([ax + (bx - ax) * t, ay + (by - ay) * t]);
  }
  return out;
}

/* ---------- Drawing ---------- */
const lerp = (a, b, t) => a + (b - a) * t;

const toPath = (pts) =>
  'M' + pts.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join('L') + 'Z';

export function initBrandMark() {
  const path = document.querySelector('[data-brand-mark] path');
  if (!path) return;

  const steps = settings.sequence
    .filter((s) => SHAPES[s.shape])
    .map((s) => ({
      outer: resample(SHAPES[s.shape].outer, N),
      inner: resample(SHAPES[s.shape].inner, N),
      color: hexToOklab(tokenColor(s.color)),
    }));
  if (!steps.length) return;

  function draw(a, b, t) {
    const mix = (pa, pb) => pa.map((p, i) => [lerp(p[0], pb[i][0], t), lerp(p[1], pb[i][1], t)]);
    path.setAttribute('d', toPath(mix(a.outer, b.outer)) + toPath(mix(a.inner, b.inner)));
    path.setAttribute('fill', oklabToHex(mixOklab(a.color, b.color, t)));
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const { hold, morph } = settings;
  const cycle = hold + morph;
  let elapsed = 0;
  let last = null;
  let frame = null;

  function tick(now) {
    // Real time, so every shape holds for the same time at any frame rate.
    // A long gap (a background tab coming back) counts as one frame instead of jumping ahead.
    const dt = last === null ? 0 : now - last;
    elapsed += dt > 250 ? 16 : dt;
    last = now;
    const index = Math.floor(elapsed / cycle) % steps.length;
    const into = elapsed % cycle;
    const t = into < hold ? 0 : ease((into - hold) / morph);
    draw(steps[index], steps[(index + 1) % steps.length], t);
    frame = requestAnimationFrame(tick);
  }

  function start() {
    cancelAnimationFrame(frame);
    last = null;
    if (reduceMotion.matches || steps.length < 2) {
      draw(steps[0], steps[0], 0); // still: just the first shape
    } else {
      frame = requestAnimationFrame(tick);
    }
  }

  reduceMotion.addEventListener?.('change', start);
  start();
}
