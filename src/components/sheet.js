import { onLangChange, applyStatic } from '../i18n/index.js';

/**
 * Side sheet that slides in from the right.
 * openSheet({ render: () => htmlString, mount?: (bodyElement) => void })
 * The content re-renders automatically when the language changes.
 */

let root;
let panel;
let body;
let current = null;
let lastFocus = null;
let closeTimer = null;

const FOCUSABLE = 'a[href], button:not([disabled]), iframe, video[controls], input, textarea, select, [tabindex]:not([tabindex="-1"])';

export function initSheet() {
  root = document.createElement('div');
  root.className = 'sheet';
  root.hidden = true;
  root.innerHTML = `
    <div class="sheet-backdrop" data-close></div>
    <aside class="sheet-panel" role="dialog" aria-modal="true" aria-labelledby="sheet-title" tabindex="-1">
      <button class="sheet-close" type="button" data-close data-i18n-attr="aria-label:sheet.close">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>
      </button>
      <div class="sheet-body"></div>
    </aside>`;
  document.body.append(root);
  applyStatic(root);

  panel = root.querySelector('.sheet-panel');
  body = root.querySelector('.sheet-body');

  root.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closeSheet();
  });

  document.addEventListener('keydown', (e) => {
    if (root.hidden || !root.classList.contains('open')) return;
    if (e.key === 'Escape') closeSheet();
    if (e.key === 'Tab') trapFocus(e);
  });

  onLangChange(() => current && renderCurrent());
}

function renderCurrent() {
  body.innerHTML = current.render();
  current.mount?.(body);
}

export function openSheet(view) {
  clearTimeout(closeTimer);
  if (root.hidden) lastFocus = document.activeElement;
  current = view;
  renderCurrent();
  root.hidden = false;
  panel.scrollTop = 0;
  void panel.offsetWidth; // let the browser register the start position before animating
  root.classList.add('open');
  document.documentElement.classList.add('no-scroll');
  panel.focus({ preventScroll: true });
}

export function closeSheet() {
  root.classList.remove('open');
  document.documentElement.classList.remove('no-scroll');
  closeTimer = setTimeout(() => {
    root.hidden = true;
    body.innerHTML = ''; // also stops any playing video
    current = null;
  }, 400);
  lastFocus?.focus({ preventScroll: true });
}

function trapFocus(e) {
  const items = [...panel.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}
