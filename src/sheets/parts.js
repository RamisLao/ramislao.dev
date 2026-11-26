import { site } from '../config.js';
import { t, tr } from '../i18n/index.js';
import { esc } from '../utils/dom.js';
import { artworkSVG } from '../components/artwork.js';
import { openLightbox } from '../components/lightbox.js';

/** Shared building blocks for side-sheet content. */

const placeholder = () =>
  site.showEmptySections ? `<p class="sheet-placeholder">${esc(t('sheet.placeholder'))}</p>` : '';

/** Paragraphs from a { en, es } field (blank line = new paragraph). */
export function textBlock(field) {
  const text = tr(field);
  if (!text) return placeholder();
  return text
    .split(/\n\s*\n/)
    .map((para) => `<p>${esc(para)}</p>`)
    .join('');
}

/** Bulleted list from an array of { en, es } items. */
export function listBlock(items) {
  const list = (items || []).map(tr).filter(Boolean);
  if (!list.length) return placeholder();
  return `<ul class="sheet-list">${list.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
}

/**
 * "Highlights": key moments of a project, each one with a type:
 *   challenge → "Challenge / Reto"           what was hard
 *   decision  → "Key decision / Decisión clave"  a choice you made and why
 *   result    → "Result / Resultado"         what came out of it
 *   [{ type: 'decision', title: { en, es }, text: { en, es } }, …]
 * title is optional. Items with no text and no title in the current language are skipped.
 */
export const HIGHLIGHT_TYPES = ['challenge', 'decision', 'result'];
const HIGHLIGHT_ICONS = {
  challenge: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 5v9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="19" r="1.8" fill="currentColor"/></svg>',
  decision: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 21v-7m0 0L6 8m6 6l6-6M6 8V4m0 4H2m16 0V4m0 4h4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  result: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};
export function highlightsBlock(items) {
  const list = (items || []).filter((h) => h && (tr(h.text) || tr(h.title)));
  if (!list.length) return placeholder();
  return `<ul class="highlights">${list
    .map((h) => {
      const type = HIGHLIGHT_TYPES.includes(h.type) ? h.type : 'decision';
      const title = tr(h.title) ? `<h4 class="highlight-title">${esc(tr(h.title))}</h4>` : '';
      const text = tr(h.text) ? textBlock(h.text) : '';
      return `<li class="highlight is-${type}"><span class="highlight-marker" aria-hidden="true">${HIGHLIGHT_ICONS[type]}</span><div class="highlight-body"><p class="highlight-kicker">${esc(t(`highlight.${type}`))}</p>${title}${text}</div></li>`;
    })
    .join('')}</ul>`;
}

/** Credits: [{ name: 'Ana López', role: { en: 'Composer', es: 'Compositora' }, url?: 'https://…' }] */
export function creditsBlock(credits) {
  const list = (credits || []).filter((c) => c && c.name);
  if (!list.length) return ''; // no credits → the section is hidden
  return `<ul class="credits">${list
    .map((c) => {
      const name = c.url
        ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.name)}</a>`
        : esc(c.name);
      return `<li><span class="credit-name">${name}</span><span class="credit-role">${esc(tr(c.role))}</span></li>`;
    })
    .join('')}</ul>`;
}

/** A titled section; skipped entirely when there's no content. */
export function section(titleKey, content) {
  if (!content) return '';
  return `<section class="sheet-section"><h3>${esc(t(titleKey))}</h3>${content}</section>`;
}

/**
 * A section that starts folded: only its title shows, and a click opens it.
 * Used for the longer texts so the sheet stays easy to scan. open = start unfolded.
 */
export function collapsible(titleKey, content, { open = false } = {}) {
  if (!content) return '';
  return `<details class="sheet-section sheet-fold"${open ? ' open' : ''}><summary><h3>${esc(t(titleKey))}</h3><span class="fold-icon" aria-hidden="true"></span></summary><div class="fold-body">${content}</div></details>`;
}

/** One-sentence summary under the title. */
export function pitchBlock(pitch) {
  const text = tr(pitch);
  return text ? `<p class="sheet-pitch">${esc(text)}</p>` : '';
}

/** Key facts at a glance: { team: …, platform: …, … } → small labelled tiles (unknown keys are skipped). */
export const FACT_KEYS = ['team', 'platform', 'format', 'status', 'impact'];
export function factsBlock(facts) {
  const items = FACT_KEYS.map((key) => [key, tr(facts?.[key])]).filter(([, value]) => value);
  if (!items.length) return '';
  return `<dl class="sheet-facts">${items
    .map(([key, value]) => `<div class="fact fact-${key}"><dt>${esc(t(`facts.${key}`))}</dt><dd>${esc(value)}</dd></div>`)
    .join('')}</dl>`;
}

export function linksBlock(links) {
  links = (links || []).filter((l) => l && l.url); // links without a url are skipped
  if (!links.length) return '';
  return `<div class="sheet-links">${links
    .map(
      (l) =>
        `<a class="btn btn-small" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(tr(l.label))} <span aria-hidden="true">↗</span></a>`
    )
    .join('')}</div>`;
}

/** Technologies / platforms as chips. Empty → '' so the section is hidden. */
export function techBlock(tech) {
  const list = (tech || []).map((x) => tr(x)).filter(Boolean);
  if (!list.length) return '';
  return `<ul class="tech-list">${list.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>`;
}

export function tagList(labels) {
  return `<ul class="tag-list">${labels.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>`;
}

// ---------- Media gallery ----------
//
// A media item can be written two ways:
//   '/media/projects/luna/01.jpg'                        image or GIF (shape detected automatically)
//   '/media/projects/luna/clip.mp4'                      looping video: plays like a GIF — silent, autoplay, loops (.mp4 / .webm)
//   'https://www.youtube.com/watch?v=VIDEO_ID'            YouTube video → 16:9
//   'https://www.youtube.com/shorts/VIDEO_ID'             YouTube Short → 9:16
//   'https://www.instagram.com/p/POST_ID/'                Instagram post → 4:5
//   'https://www.instagram.com/reel/REEL_ID/'             Instagram reel → 9:16
//   { src: '…', ratio: '1:1', alt: { en: '…', es: '…' } } override the shape and/or add a description
//
// All items share the same height in the sheet; the width follows the shape.

const RATIO = {
  video: 16 / 9,
  vertical: 9 / 16,
  post: 4 / 5,
};

/** '16:9', '9/16', '1x1' or 0.8 → number (width ÷ height), or null. */
function parseRatio(value) {
  if (typeof value === 'number' && value > 0) return value;
  const m = String(value ?? '').match(/^\s*(\d+(?:\.\d+)?)\s*[:/x]\s*(\d+(?:\.\d+)?)\s*$/);
  return m && Number(m[2]) ? Number(m[1]) / Number(m[2]) : null;
}

function parseUrl(url) {
  try {
    const u = new URL(url);
    return { u, host: u.hostname.replace(/^(www|m)\./, '') };
  } catch {
    return null; // not a full URL → a local image path
  }
}

/** YouTube link → { id, short } or null. */
export function youtubeInfo(url) {
  const p = parseUrl(url);
  if (!p) return null;
  const { u, host } = p;
  if (host === 'youtu.be') {
    const id = u.pathname.slice(1).split('/')[0];
    return id ? { id, short: false } : null;
  }
  if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    if (u.searchParams.get('v')) return { id: u.searchParams.get('v'), short: false };
    const m = u.pathname.match(/^\/(embed|shorts|live)\/([\w-]+)/);
    if (m) return { id: m[2], short: m[1] === 'shorts' };
  }
  return null;
}

/** Instagram link → { kind: 'p' | 'reel', id } or null. */
export function instagramInfo(url) {
  const p = parseUrl(url);
  if (!p || p.host !== 'instagram.com') return null;
  const m = p.u.pathname.match(/^\/(?:[\w.]+\/)?(p|reel|reels|tv)\/([\w-]+)/);
  if (!m) return null;
  return { kind: m[1] === 'p' ? 'p' : 'reel', id: m[2] };
}

/**
 * A plain filename ('about_1.gif') means "in this entry's own folder" (base).
 * Full paths ('/media/...') point into /public; web links are used as they are.
 * Paths get the site's base folder in front, so they also work when the site
 * lives in a subfolder (GitHub Pages: /ramislao.dev/). Locally the base is '/'.
 */
const SITE_BASE = import.meta.env.BASE_URL;
export function resolveSrc(src, base) {
  if (!src) return src;
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:') || src.startsWith('blob:')) return src;
  if (src.startsWith('/')) return SITE_BASE + src.slice(1);
  if (!base) return src;
  return resolveSrc(`${base.replace(/\/?$/, '/')}${src.replace(/^\.\//, '')}`);
}

function normalize(item, base) {
  const m = typeof item === 'string' ? { src: item } : { ...item };
  m.src = resolveSrc(m.src, base);
  const override = parseRatio(m.ratio);

  const yt = youtubeInfo(m.src || '');
  if (yt) return { type: 'youtube', id: yt.id, ratio: override || (yt.short ? RATIO.vertical : RATIO.video), alt: m.alt, caption: m.caption };

  const ig = instagramInfo(m.src || '');
  if (ig) return { type: 'instagram', ...ig, ratio: override || (ig.kind === 'p' ? RATIO.post : RATIO.vertical), alt: m.alt, caption: m.caption };

  // Images, GIFs & looping videos: shape is read from the file once it loads (unless overridden)
  const isVideo = /\.(mp4|webm|m4v|mov)([?#].*)?$/i.test(m.src || '');
  return { type: isVideo ? 'loop' : 'image', src: m.src, ratio: override, alt: m.alt, caption: m.caption };
}

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Silent looping video that behaves like a GIF (paused with controls if the visitor prefers less motion). */
function loopVideoHTML(m) {
  const play = reduceMotion() ? 'controls' : 'autoplay';
  const label = tr(m.alt) ? `aria-label="${esc(tr(m.alt))}"` : '';
  return `<video src="${esc(m.src)}" ${play} muted loop playsinline preload="auto" ${label}></video>`;
}

function frameHTML(m) {
  const ratio = m.ratio ? `style="--r:${m.ratio.toFixed(4)}"` : '';
  const loading = (m.type === 'image' || m.type === 'loop') && !m.ratio ? ' is-loading' : '';
  let inner;
  if (m.type === 'loop') {
    inner = loopVideoHTML(m);
  } else if (m.type === 'youtube') {
    inner = `<iframe src="https://www.youtube-nocookie.com/embed/${esc(m.id)}" title="${esc(tr(m.alt) || 'YouTube video')}" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  } else if (m.type === 'instagram') {
    inner = `<iframe src="https://www.instagram.com/${m.kind}/${esc(m.id)}/embed/" title="${esc(tr(m.alt) || 'Instagram')}" loading="lazy" allowtransparency="true" scrolling="no"></iframe>`;
  } else {
    inner = `<img src="${esc(m.src)}" alt="${esc(tr(m.alt))}">`;
  }
  const igKind = m.type === 'instagram' ? ` data-ig-kind="${m.kind}"` : '';
  return `<div class="media-frame${loading}" data-kind="${m.type}"${igKind} ${ratio}>${inner}</div>`;
}

// ---------- Instagram sizing ----------
// The embed is laid out at Instagram's own width (326px) and natural height, then scaled
// to the gallery height so it keeps its proportions. Instagram tells us the real height
// through a "MEASURE" message; until then we use a typical value.
const IG_WIDTH = 326;
const IG_DEFAULT_HEIGHT = { reel: 616, p: 560 };

function fitInstagram(frame) {
  const iframe = frame?.querySelector('iframe');
  const stage = frame?.parentElement;
  if (!iframe || !stage) return;
  const naturalH = Number(frame.dataset.igH) || IG_DEFAULT_HEIGHT[frame.dataset.igKind] || 600;
  const scale = stage.clientHeight / naturalH;
  if (!scale) return;
  iframe.style.height = `${naturalH}px`;
  iframe.style.transform = `scale(${scale})`;
  frame.style.width = `${IG_WIDTH * scale}px`;
}

window.addEventListener('message', (e) => {
  if (!/(^|\.)instagram\.com$/.test(parseUrl(e.origin)?.u.hostname || '')) return;
  let data = e.data;
  try {
    if (typeof data === 'string') data = JSON.parse(data);
  } catch {
    return;
  }
  const height = data?.type === 'MEASURE' && Number(data.details?.height);
  if (!height) return;
  document.querySelectorAll('.media-frame[data-kind="instagram"] iframe').forEach((iframe) => {
    if (iframe.contentWindow === e.source) {
      iframe.parentElement.dataset.igH = height;
      fitInstagram(iframe.parentElement);
    }
  });
});

const IG_ICON =
  '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"/></svg>';

function thumbHTML(m) {
  if (m.type === 'youtube') {
    return `<img src="https://img.youtube.com/vi/${esc(m.id)}/mqdefault.jpg" alt=""><span class="thumb-play" aria-hidden="true">▶</span>`;
  }
  if (m.type === 'instagram') return `<span class="thumb-instagram">${IG_ICON}</span>`;
  if (m.type === 'loop') {
    // First frame as a still preview (#t=0.1 makes browsers show a frame instead of black)
    return `<video src="${esc(m.src)}#t=0.1" muted playsinline preload="metadata" tabindex="-1" aria-hidden="true"></video>`;
  }
  return `<img src="${esc(m.src)}" alt="" loading="lazy">`;
}

/** When an image or video loads, set its frame / thumbnail to the file's real shape. */
function fitToMedia(el, target) {
  if (!el) return;
  const isVideo = el.tagName === 'VIDEO';
  const apply = () => {
    const w = isVideo ? el.videoWidth : el.naturalWidth;
    const h = isVideo ? el.videoHeight : el.naturalHeight;
    if (w && h) target.style.setProperty('--r', (w / h).toFixed(4));
    target.classList.remove('is-loading');
  };
  const ready = isVideo ? el.readyState >= 1 : el.complete;
  if (ready) apply();
  else {
    el.addEventListener(isVideo ? 'loadedmetadata' : 'load', apply, { once: true });
    el.addEventListener('error', () => target.classList.remove('is-loading'), { once: true });
  }
}

/**
 * Gallery with thumbnails.
 * With no media: shows the placeholder artwork if a seed is given, otherwise nothing.
 */
export function galleryHTML(rawMedia, { seed, palette, base } = {}) {
  const media = (rawMedia || []).map((item) => normalize(item, base));
  if (!media.length) {
    return seed
      ? `<div class="gallery"><div class="gallery-stage"><div class="media-frame" data-kind="art">${artworkSVG(seed, palette)}</div></div></div>`
      : '';
  }
  const thumbs =
    media.length > 1
      ? `<div class="gallery-thumbs">${media
          .map(
            (m, i) =>
              `<button type="button" class="gallery-thumb${i === 0 ? ' active' : ''}" data-media="${i}" ${m.ratio ? `style="--r:${m.ratio.toFixed(4)}"` : ''} aria-label="${esc(t('sheet.media', { n: i + 1 }))}">${thumbHTML(m)}</button>`
          )
          .join('')}</div>`
      : '';
  // Caption under the media (hidden while the current item has none)
  const caption = `<p class="gallery-caption" aria-live="polite"${tr(media[0].caption) ? '' : ' hidden'}>${esc(tr(media[0].caption))}</p>`;
  return `<div class="gallery"><div class="gallery-stage">${frameHTML(media[0])}</div>${caption}${thumbs}</div>`;
}

const EXPAND_ICON =
  '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';

/** Fit a freshly rendered frame to its file's shape (or scale an Instagram embed). */
function fitFrame(frame) {
  if (frame?.dataset.kind === 'instagram') return fitInstagram(frame);
  const el = frame?.querySelector('img, video');
  if (el && frame.classList.contains('is-loading')) fitToMedia(el, frame);
}

export function mountGallery(container, rawMedia, base) {
  const media = (rawMedia || []).map((item) => normalize(item, base));
  const stage = container.querySelector('.gallery-stage');
  if (!stage || !media.length) return;
  const thumbs = [...container.querySelectorAll('[data-media]')];
  let index = 0;

  // Show item i in the sheet's stage, with the fullscreen button in its corner
  const showInSheet = (i) => {
    index = i;
    stage.innerHTML = frameHTML(media[i]);
    const captionEl = container.querySelector('.gallery-caption');
    if (captionEl) {
      captionEl.textContent = tr(media[i].caption);
      captionEl.hidden = !captionEl.textContent;
    }
    const frame = stage.querySelector('.media-frame');
    frame.insertAdjacentHTML(
      'beforeend',
      `<button type="button" class="media-expand" aria-label="${esc(t('sheet.fullscreen'))}" title="${esc(t('sheet.fullscreen'))}">${EXPAND_ICON}</button>`
    );
    fitFrame(frame);
    thumbs.forEach((b) => b.classList.toggle('active', Number(b.dataset.media) === i));
  };
  showInSheet(0);

  // Keep Instagram embeds scaled correctly when the sheet changes size
  new ResizeObserver(() => fitInstagram(stage.querySelector('.media-frame[data-kind="instagram"]'))).observe(stage);

  thumbs.forEach((btn) => {
    const i = Number(btn.dataset.media);
    const m = media[i];
    if ((m.type === 'image' || m.type === 'loop') && !m.ratio) fitToMedia(btn.querySelector('img, video'), btn);
    btn.addEventListener('click', () => showInSheet(i));
  });

  // Fullscreen viewer; when it closes, the sheet shows the item you were last looking at
  let lastSeen = 0;
  stage.addEventListener('click', (e) => {
    if (!e.target.closest('.media-expand')) return;
    lastSeen = index;
    openLightbox({
      count: media.length,
      index,
      render: (i, lbStage) => {
        lbStage.innerHTML = frameHTML(media[i]);
        fitFrame(lbStage.querySelector('.media-frame'));
      },
      caption: (i) => tr(media[i].caption),
      onChange: (i) => (lastSeen = i),
      onClose: () => lastSeen !== index && showInSheet(lastSeen),
    });
  });
}
