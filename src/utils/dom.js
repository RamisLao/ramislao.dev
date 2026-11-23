import { t } from '../i18n/index.js';
import { palettes } from '../config.js';

/** Escape text before putting it inside an HTML template string. */
export const esc = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/** start: 2022, end: 2024 → "2022–2024" · end: null → "2022–Present" · no end → "2022" */
export function yearsLabel(start, end) {
  if (end === null) return `${start}–${t('present')}`;
  if (!end || end === start) return String(start);
  return `${start}–${end}`;
}

/**
 * A studio or client can be written as just a name, or with a website:
 *   'Crafted Mayhem'
 *   { name: 'Crafted Mayhem', url: 'https://craftedmayhem.com' }
 * → always returns { name, url } (url may be '').
 */
export function orgInfo(value) {
  if (!value) return { name: '', url: '' };
  if (typeof value === 'string') return { name: value, url: '' };
  return { name: String(value.name ?? ''), url: String(value.url ?? '') };
}

/**
 * Who the project was made with.
 *   studio: 'freelance'      → "Freelance"
 *   studio: 'independent'    → "Independent" / "Independiente"
 *   studio: 'Crafted Mayhem' → shown as written (optionally with a url, see orgInfo)
 */
const STUDIO_KEYWORDS = { freelance: 'studio.freelance', independent: 'studio.independent' };
const keywordOf = (studio) => STUDIO_KEYWORDS[orgInfo(studio).name.trim().toLowerCase()];

export function studioName(studio) {
  const key = keywordOf(studio);
  return key ? t(key) : orgInfo(studio).name;
}

export const isStudio = (studio) => Boolean(orgInfo(studio).name) && !keywordOf(studio);

/** The accent color of a palette (its main shape color). */
export const accentOf = (paletteName) => `var(${(palettes[paletteName] || palettes.soft).arch})`;
