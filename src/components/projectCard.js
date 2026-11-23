import { projectTypes, roles } from '../data/taxonomy.js';
import { t, tr } from '../i18n/index.js';
import { esc, yearsLabel, accentOf, studioName, orgInfo } from '../utils/dom.js';
import { artworkSVG } from './artwork.js';
import { projectFolder } from '../sheets/projectSheet.js';
import { resolveSrc } from '../sheets/parts.js';

/** Name shown on the card next to the years: the co-founded company, else the studio. */
const cardOrg = (p) => (p.cofounded ? orgInfo(p.cofounded).name : studioName(p.studio));

const VIDEO = /\.(mp4|webm)(\?.*)?$/i;

/** Hover preview for a card: `preview` if set, else the first looping video in `media`. */
export function previewOf(p) {
  const src = p.preview || (p.media || []).map((m) => (typeof m === 'string' ? m : m?.src || '')).find((s) => VIDEO.test(s));
  return src ? resolveSrc(src, projectFolder(p)) : '';
}

/** One project card (used by the featured row and the grid). */
export function projectCard(p, { featured = false } = {}) {
  const preview = featured ? previewOf(p) : '';
  return `
    <article class="project-card${featured ? ' is-featured' : ''}" style="--entry:${accentOf(p.palette)}"${preview ? ` data-preview="${esc(preview)}"` : ''}>
      <div class="card-media">
        ${p.cover ? `<img src="${esc(resolveSrc(p.cover, projectFolder(p)))}" alt="" loading="lazy">` : artworkSVG(p.id, p.palette)}
      </div>
      <div class="card-body">
        <p class="card-type"><span class="dot"></span>${esc(tr(projectTypes[p.type]))}</p>
        <h3 class="card-title">
          <button type="button" class="card-button" data-project="${esc(p.id)}" aria-label="${esc(t('card.open', { title: p.title }))}">${esc(p.title)}</button>
        </h3>
        <p class="card-meta">${esc(yearsLabel(p.start, p.end))}${cardOrg(p) ? `<span class="card-studio"> · ${esc(cardOrg(p))}</span>` : ''}</p>
        <p class="card-roles">${p.roles.map((r) => esc(tr(roles[r]))).join(' · ')}</p>
      </div>
    </article>`;
}
