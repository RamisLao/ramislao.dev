import { strings } from './strings.js';

/**
 * Tiny translation helper.
 *  - t('key')      → interface text from strings.js in the current language
 *  - tr({en, es})  → picks the right language from a content field in /src/data
 *  - In HTML:  data-i18n="key"                    sets the element's text
 *              data-i18n-attr="aria-label:key"    sets an attribute (separate several with ;)
 */

const STORAGE_KEY = 'lang';
const SUPPORTED = ['en', 'es'];
const listeners = new Set();

let lang = detectLanguage();

function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    /* storage unavailable */
  }
  return (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
}

export const getLang = () => lang;

export function t(key, vars) {
  let value = strings[lang][key] ?? strings.en[key] ?? key;
  if (vars && typeof value === 'string') {
    for (const [k, v] of Object.entries(vars)) value = value.replaceAll(`{${k}}`, v);
  }
  return value;
}

export function tr(field) {
  if (field == null) return '';
  if (typeof field === 'string') return field;
  return field[lang] ?? field.en ?? '';
}

export function onLangChange(fn) {
  listeners.add(fn);
}

export function setLang(next) {
  if (!SUPPORTED.includes(next) || next === lang) return;
  lang = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage unavailable */
  }
  applyStatic();
  listeners.forEach((fn) => fn(lang));
}

export function applyStatic(root = document) {
  document.documentElement.lang = lang;
  document.title = t('meta.title');
  root.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });
}
