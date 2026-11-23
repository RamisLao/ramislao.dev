/**
 * Read colors from the design tokens in src/styles/tokens.css,
 * so JavaScript (3D scene, generated artwork) uses the same palette as the CSS.
 *
 *   tokenColor('--primary')  → '#7b34e3'  (always a #rrggbb string, whatever format the token uses)
 *   cssVar('--primary')      → 'var(--primary)'  (for inline styles)
 */

let ctx;
/** Any CSS color → '#rrggbb' (falls back to black if it can't be parsed). */
export function toHex(color) {
  ctx ??= document.createElement('canvas').getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillStyle = color;
  const v = ctx.fillStyle; // the browser normalizes it to '#rrggbb' or 'rgba(...)'
  if (v.startsWith('#')) return v;
  const [r, g, b] = v.match(/[\d.]+/g).map(Number);
  return `#${[r, g, b].map((n) => Math.round(n).toString(16).padStart(2, '0')).join('')}`;
}

/** A token's color as '#rrggbb'. Accepts '--primary' or 'primary'. */
export function tokenColor(name) {
  const prop = name.startsWith('--') ? name : `--${name}`;
  const value = getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
  if (!value) console.warn(`tokens.css: no color token "${prop}"`);
  return toHex(value || '#000');
}

/** 'primary' or '--primary' → 'var(--primary)' */
export const cssVar = (name) => `var(${name.startsWith('--') ? name : `--${name}`})`;

/** Mix two '#rrggbb' colors (t = 0 → a, t = 1 → b). */
export function mixHex(a, b, t) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ch = (shift) => Math.round(((pa >> shift) & 255) * (1 - t) + ((pb >> shift) & 255) * t);
  return `#${[16, 8, 0].map((s) => ch(s).toString(16).padStart(2, '0')).join('')}`;
}
