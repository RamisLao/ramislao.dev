import { t, tr } from '../i18n/index.js';
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
 * Who / how the project was made: the `org` field of a project.
 *   org: 'freelance'                                        → "Freelance"
 *   org: 'independent'                                      → "Independent" / "Independiente"
 *   org: { name: 'Crafted Mayhem', url: '…', type: 'studio' } → "Studio: Crafted Mayhem"
 *   org: { name: 'Nectoma', type: 'collective' }            → "Collective: Nectoma"
 *   org: 'Some name'  (no type)                             → just the name
 * Optional label: false hides the type word; label: { en, es } replaces it.
 */
export const ORG_TYPES = ['studio', 'startup', 'company', 'collective', 'freelance', 'independent'];
const SOLO = ['freelance', 'independent']; // shown as the word alone, no name needed

export function orgOf(value) {
  if (!value) return null;
  if (typeof value === 'string') {
    const word = value.trim().toLowerCase();
    return SOLO.includes(word) ? { name: '', url: '', type: word } : { name: value, url: '', type: '' };
  }
  const type = String(value.type ?? '').trim().toLowerCase();
  if (type && !ORG_TYPES.includes(type)) console.warn(`org type "${type}" is not one of: ${ORG_TYPES.join(', ')}`);
  return { name: String(value.name ?? ''), url: String(value.url ?? ''), type, label: value.label };
}

/** The name to show: the org's name, or "Freelance" / "Independent" for those types. */
export function orgName(value) {
  const org = orgOf(value);
  if (!org) return '';
  return org.name || (SOLO.includes(org.type) ? t(`org.${org.type}`) : '');
}

/** The word before the name ("Studio", "Collective"…), or '' when there shouldn't be one. */
export function orgLabel(value) {
  const org = orgOf(value);
  if (!org || !org.name || org.label === false) return '';
  if (org.label) return tr(org.label); // custom word, e.g. { en: 'Agency', es: 'Agencia' }
  return org.type && !SOLO.includes(org.type) ? t(`org.${org.type}`) : '';
}

/** The accent color of a palette (its main shape color). */
export const accentOf = (paletteName) => `var(${(palettes[paletteName] || palettes.soft).arch})`;
