import { t, tr } from '../i18n/index.js';
import { esc, yearsLabel, accentOf, studioName, isStudio, orgInfo } from '../utils/dom.js';
import { projectTypes, roles } from '../data/taxonomy.js';
import { section, collapsible, pitchBlock, factsBlock, textBlock, listBlock, creditsBlock, techBlock, tagList, galleryHTML, mountGallery } from './parts.js';

/** Each project's own image folder: plain filenames in cover/media are looked up here. */
export const projectFolder = (p) => `/images/projects/${p.id}/`;

const ICONS = {
  studio:
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M4 20V10l8-6 8 6v10h-5v-6H9v6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  freelance:
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  client:
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  cofounder:
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  external: '<span class="ext" aria-hidden="true">↗</span>',
};

/** A small badge: icon, optional label + separator, and a name that links to url when given. */
function badge(icon, label, name, url, sep = ': ') {
  if (!name) return '';
  const text = url
    ? `<a href="${esc(url)}" target="_blank" rel="noopener"><strong>${esc(name)}</strong>${ICONS.external}</a>`
    : `<strong>${esc(name)}</strong>`;
  return `<p class="sheet-badge">${icon}<span>${label ? `${esc(label)}${sep}` : ''}${text}</span></p>`;
}

/** "Co-founder · Nectoma" — for projects made for a company you co-founded. */
function cofoundedBadge(company) {
  const { name, url } = orgInfo(company);
  return badge(ICONS.cofounder, t('sheet.cofounder'), name, url, ' · ');
}

function studioBadge(studio) {
  if (!studio) return '';
  const { url } = orgInfo(studio);
  return isStudio(studio)
    ? badge(ICONS.studio, t('sheet.studio'), studioName(studio), url)
    : badge(ICONS.freelance, '', studioName(studio), url);
}

function clientBadge(client) {
  const { name, url } = orgInfo(client);
  return badge(ICONS.client, t('sheet.client'), name, url);
}

/** Steam / itch.io buttons first, then any other links. */
function linkButtons(p) {
  const buttons = [];
  if (p.steam) buttons.push({ cls: 'btn-store btn-steam', label: t('store.steam'), url: p.steam });
  if (p.itch) buttons.push({ cls: 'btn-store btn-itch', label: t('store.itch'), url: p.itch });
  for (const l of p.links || []) buttons.push({ cls: '', label: tr(l.label), url: l.url });
  if (!buttons.length) return '';
  return `<div class="sheet-links">${buttons
    .map(
      (b) =>
        `<a class="btn btn-small ${b.cls}" href="${esc(b.url)}" target="_blank" rel="noopener">${esc(b.label)} <span aria-hidden="true">↗</span></a>`
    )
    .join('')}</div>`;
}

/**
 * Side-sheet content for a project. Section order is set here:
 * title → badges → role chips → pitch → gallery → key facts → what I built → tech → (folded) description, role, challenges → credits
 */
export function projectSheet(p) {
  const base = projectFolder(p);
  // No gallery media? Fall back to the cover image (or, without one, the generated illustration).
  const media = p.media?.length ? p.media : p.cover ? [p.cover] : [];
  return {
    render: () => {
      const badges = cofoundedBadge(p.cofounded) + studioBadge(p.studio) + clientBadge(p.client);
      // Longer texts start folded. Without a pitch, the description stays open so there's always an intro.
      return `
      <header class="sheet-header" style="--entry:${accentOf(p.palette)}">
        <p class="sheet-kicker"><span class="dot"></span>${esc(tr(projectTypes[p.type]))} · ${esc(yearsLabel(p.start, p.end))}</p>
        <h2 id="sheet-title">${esc(p.title)}</h2>
        ${badges ? `<div class="sheet-badges">${badges}</div>` : ''}
        ${tagList(p.roles.map((r) => tr(roles[r])))}
        ${pitchBlock(p.pitch)}
      </header>
      ${galleryHTML(media, { seed: p.id, palette: p.palette, base })}
      ${factsBlock(p.facts)}
      ${linkButtons(p)}
      ${section('sheet.built', listBlock(p.built))}
      ${section('sheet.tech', techBlock(p.tech))}
      ${collapsible('sheet.description', textBlock(p.description), { open: !tr(p.pitch) })}
      ${collapsible('sheet.roles', textBlock(p.roleDetails))}
      ${collapsible('sheet.challenges', listBlock(p.challenges))}
      ${section('sheet.credits', creditsBlock(p.credits))}
    `;
    },
    mount: (el) => mountGallery(el, media, base),
  };
}
