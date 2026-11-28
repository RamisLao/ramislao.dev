/**
 * Color blending that stays vivid.
 * Colors are blended around the hue wheel in OKLCH: a straight blend between
 * opposite hues (cobalt → gold) passes through gray, going around the wheel
 * keeps every in-between color saturated.
 *   const a = hexToOklab('#2c5c9c'), b = hexToOklab('#f4a52a');
 *   oklabToHex(mixOklab(a, b, 0.5))  → the color halfway between them
 */

const TAU = Math.PI * 2;
const lerp = (a, b, t) => a + (b - a) * t;
const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const toGamma = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

/** '#rrggbb' → [L, a, b] in OKLab */
export function hexToOklab(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => toLinear(parseInt(hex.slice(i, i + 2), 16) / 255));
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

/** [L, a, b] in OKLab → '#rrggbb' */
export function oklabToHex([L, A, B]) {
  const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const s = (L - 0.0894841775 * A - 1.291485548 * B) ** 3;
  const rgb = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  return (
    '#' +
    rgb
      .map((c) => Math.round(Math.min(1, Math.max(0, toGamma(c))) * 255).toString(16).padStart(2, '0'))
      .join('')
  );
}

/** Blend two OKLab colors around the hue wheel; t = 0 gives a, t = 1 gives b. */
export function mixOklab([L1, a1, b1], [L2, a2, b2], t) {
  const C1 = Math.hypot(a1, b1);
  const C2 = Math.hypot(a2, b2);
  const h1 = Math.atan2(b1, a1);
  let dh = Math.atan2(b2, a2) - h1;
  if (dh > Math.PI) dh -= TAU;
  if (dh < -Math.PI) dh += TAU;
  const C = lerp(C1, C2, t);
  const h = h1 + dh * t;
  return [lerp(L1, L2, t), C * Math.cos(h), C * Math.sin(h)];
}

/** Ease-in-out cubic: slow start, slow end. */
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
