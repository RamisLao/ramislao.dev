import { t, applyStatic } from '../i18n/index.js';

/**
 * Fullscreen viewer for gallery media, opened from a side sheet.
 *
 * openLightbox({
 *   count,                    how many items there are
 *   index,                    which one to show first
 *   render(i, stage),         puts item i into the stage element
 *   caption?(i),              text shown under item i (optional)
 *   onChange?(i),             called when the visible item changes
 *   onClose?(),               called after the viewer closes
 * })
 *
 * Keys: ← / → move between items, Esc closes (only the viewer, not the sheet behind it).
 */

let root;
let stage;
let counter;
let captionEl;
let current = null;
let lastFocus = null;

const ICON = {
  close: '<path d="M6 6l12 12M18 6L6 18" />',
  prev: '<path d="M15 5l-7 7 7 7" />',
  next: '<path d="M9 5l7 7-7 7" />',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${ICON[name]}</svg>`;

function init() {
  root = document.createElement('div');
  root.className = 'lightbox';
  root.hidden = true;
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.innerHTML = `
    <div class="lightbox-stage" data-lb-stage></div>
    <button class="lightbox-btn lightbox-close" type="button" data-lb="close" data-i18n-attr="aria-label:lightbox.close">${icon('close')}</button>
    <button class="lightbox-btn lightbox-prev" type="button" data-lb="prev" data-i18n-attr="aria-label:lightbox.prev">${icon('prev')}</button>
    <button class="lightbox-btn lightbox-next" type="button" data-lb="next" data-i18n-attr="aria-label:lightbox.next">${icon('next')}</button>
    <div class="lightbox-info"><p class="lightbox-caption" aria-live="polite"></p><p class="lightbox-count"></p></div>`;
  document.body.append(root);

  stage = root.querySelector('[data-lb-stage]');
  counter = root.querySelector('.lightbox-count');
  captionEl = root.querySelector('.lightbox-caption');

  root.addEventListener('click', (e) => {
    const action = e.target.closest('[data-lb]')?.dataset.lb;
    if (action === 'close') closeLightbox();
    else if (action === 'prev') go(-1);
    else if (action === 'next') go(1);
    // Clicking the dark area around the media closes it
    else if (e.target === root || e.target === stage) closeLightbox();
  });

  // Capture phase, so the side sheet underneath doesn't also react to these keys
  document.addEventListener(
    'keydown',
    (e) => {
      if (!current) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'Tab') trapFocus(e);
      else return;
      e.preventDefault();
      e.stopImmediatePropagation();
    },
    true
  );

  // Swipe left / right on touch screens
  let startX = null;
  root.addEventListener('touchstart', (e) => (startX = e.touches[0].clientX), { passive: true });
  root.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  });
}

function show(i) {
  current.index = (i + current.count) % current.count;
  stage.innerHTML = '';
  current.render(current.index, stage);
  counter.textContent = current.count > 1 ? `${current.index + 1} / ${current.count}` : '';
  captionEl.textContent = current.caption?.(current.index) || '';
  current.onChange?.(current.index);
}

function go(step) {
  if (current && current.count > 1) show(current.index + step);
}

export function openLightbox(view) {
  if (!root) init();
  applyStatic(root); // labels in the current language
  lastFocus = document.activeElement;
  current = { ...view };
  root.classList.toggle('is-single', current.count < 2);
  show(view.index || 0);
  root.hidden = false;
  void root.offsetWidth; // start the fade-in from transparent
  root.classList.add('open');
  root.querySelector('.lightbox-close').focus({ preventScroll: true });
}

export function closeLightbox() {
  if (!current) return;
  const { onClose } = current;
  current = null;
  root.classList.remove('open');
  root.hidden = true;
  stage.innerHTML = ''; // stops any playing video
  onClose?.();
  // The sheet's media may have been re-rendered, so fall back to its new fullscreen button
  const target = lastFocus?.isConnected ? lastFocus : document.querySelector('.sheet .media-expand');
  target?.focus({ preventScroll: true });
}

function trapFocus(e) {
  const items = [...root.querySelectorAll('button, iframe, video[controls]')].filter((el) => el.offsetParent !== null);
  if (!items.length) return;
  const i = items.indexOf(document.activeElement);
  const next = e.shiftKey ? (i <= 0 ? items.length - 1 : i - 1) : (i + 1) % items.length;
  items[next].focus();
}
