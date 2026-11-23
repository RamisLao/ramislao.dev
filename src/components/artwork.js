import { palettes } from '../config.js';
import { tokenColor } from '../utils/tokens.js';

/**
 * Generates a flat, playful placeholder illustration (arches, spheres, stairs)
 * as an SVG string. Used on cards and in sheets until you add real images.
 * The same seed always gives the same picture.
 */

let uid = 0;

export function artworkSVG(seed, paletteName) {
  const names = Object.keys(palettes);
  const tokens = palettes[paletteName] || palettes[names[hash(seed) % names.length]];
  // Token names → actual colors (needed to compute the lighter / darker shades below)
  const p = Object.fromEntries(Object.entries(tokens).map(([k, name]) => [k, tokenColor(name)]));
  p.floor = shade(p.bg, 0.78);
  shadowFill = tokenColor('--ink-deep'); // the soft shadow under each ball
  const id = `art${uid++}`;
  const variant = hash(seed) % VARIANTS.length;

  return `<svg class="artwork" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="${id}s" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="${shade(p.sphere, 0.45)}"/>
      <stop offset="55%" stop-color="${p.sphere}"/>
      <stop offset="100%" stop-color="${shade(p.sphere, -0.25)}"/>
    </radialGradient>
    <linearGradient id="${id}f" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${shade(p.floor, -0.06)}"/>
      <stop offset="100%" stop-color="${shade(p.floor, 0.15)}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="${p.bg}"/>
  <rect y="222" width="400" height="78" fill="url(#${id}f)"/>
  ${VARIANTS[variant](p, id)}
</svg>`;
}

let shadowFill;
const sphere = (id, cx, cy, r) =>
  `<ellipse cx="${cx}" cy="${cy + r + 2}" rx="${r * 0.9}" ry="${r * 0.18}" fill="${shadowFill}" opacity="0.12"/>
   <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id}s)"/>`;

const archPath = (x1, x2, top, bottom) => {
  const r = (x2 - x1) / 2;
  return `M ${x1} ${bottom} L ${x1} ${top + r} A ${r} ${r} 0 0 1 ${x2} ${top + r} L ${x2} ${bottom}`;
};

const VARIANTS = [
  // Arch with a sphere inside
  (p, id) => `
    <path d="${archPath(150, 270, 60, 224)}" fill="none" stroke="${shade(p.arch, -0.22)}" stroke-width="42"/>
    <path d="${archPath(140, 260, 60, 224)}" fill="none" stroke="${p.arch}" stroke-width="42"/>
    ${sphere(id, 200, 192, 30)}`,

  // Stairs with a sphere on top
  (p, id) => {
    const steps = [];
    for (let i = 0; i < 5; i++) steps.push(`${100 + i * 40},${222 - (i + 1) * 26} ${140 + i * 40},${222 - (i + 1) * 26}`);
    return `
    <polygon points="100,222 ${steps.join(' ')} 300,222" fill="${p.arch}"/>
    <polygon points="100,222 ${steps.join(' ')} 300,222" fill="${shade(p.arch, 0.25)}" transform="translate(-8 -4)" opacity="0.55"/>
    ${sphere(id, 270, 70, 22)}
    ${sphere(id, 140, 166, 16)}`;
  },

  // Dome, ring and ball
  (p, id) => `
    <path d="M 70 224 A 80 80 0 0 1 230 224 Z" fill="${p.arch}"/>
    <path d="M 70 224 A 80 80 0 0 1 150 144 L 150 224 Z" fill="${shade(p.arch, 0.12)}"/>
    <circle cx="292" cy="178" r="36" fill="none" stroke="${p.accent}" stroke-width="18"/>
    ${sphere(id, 292, 110, 24)}`,

  // Two overlapping arches
  (p, id) => `
    <path d="${archPath(210, 320, 110, 224)}" fill="none" stroke="${p.accent}" stroke-width="30"/>
    <path d="${archPath(80, 220, 50, 224)}" fill="none" stroke="${p.arch}" stroke-width="36"/>
    ${sphere(id, 265, 200, 22)}`,
];

function hash(value) {
  let h = 7;
  for (const ch of String(value)) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return Math.abs(h);
}

/** Lighten (amount > 0) or darken (amount < 0) a hex color. */
function shade(hex, amount) {
  const n = parseInt(hex.slice(1), 16);
  const target = amount < 0 ? 0 : 255;
  const f = Math.abs(amount);
  const mix = (c) => Math.round(c + (target - c) * f);
  const r = mix(n >> 16);
  const g = mix((n >> 8) & 255);
  const b = mix(n & 255);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}
