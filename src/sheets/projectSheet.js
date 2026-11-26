import { t, tr } from '../i18n/index.js';
import { esc, yearsLabel, accentOf, orgInfo, orgOf, orgName, orgLabel } from '../utils/dom.js';
import { projectTypes, roles } from '../data/taxonomy.js';
import { section, pitchBlock, factsBlock, textBlock, listBlock, highlightsBlock, creditsBlock, techBlock, tagList, galleryHTML, mountGallery } from './parts.js';

/** Each project's own image folder: plain filenames in cover/media are looked up here. */
export const projectFolder = (p) => `/media/projects/${p.id}/`;

const ICONS = {
  studio:
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M4 20V10l8-6 8 6v10h-5v-6H9v6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  freelance:
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  client:
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  startup:
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 3c3.5 2.5 5 6 4.5 10.5L12 18l-4.5-4.5C7 9 8.5 5.5 12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="10" r="1.6" fill="currentColor"/><path d="M8 15l-3 3 3 1M16 15l3 3-3 1M10.5 19.5L12 22l1.5-2.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  company:
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 10h4a1 1 0 0 1 1 1v10M3 21h18M8 8h3M8 12h3M8 16h3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  collective:
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="9" cy="8" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="9" r="2.6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2.5 20c1-3.5 3.5-5.5 6.5-5.5s5.5 2 6.5 5.5M15.5 14.6c2.6-.3 4.9 1.3 6 4.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  external: '<span class="ext" aria-hidden="true">↗</span>',
};

/** A small badge: icon, optional label + separator, and a name that links to url when given. */
function badge(icon, label, name, url) {
  const sep = ': ';
  if (!name) return '';
  const text = url
    ? `<a href="${esc(url)}" target="_blank" rel="noopener"><strong>${esc(name)}</strong>${ICONS.external}</a>`
    : `<strong>${esc(name)}</strong>`;
  return `<p class="sheet-badge">${icon}<span>${label ? `${esc(label)}${sep}` : ''}${text}</span></p>`;
}

/**
 * Org badge ("Studio: Crafted Mayhem", "Collective: Nectoma", "Freelance"…), with an icon per type.
 * With a client too, it reads as client work done there (or as a freelancer).
 */
const ORG_ICON = { studio: 'studio', startup: 'startup', company: 'company', collective: 'collective', freelance: 'freelance', independent: 'freelance' };
function orgBadge(value) {
  const org = orgOf(value);
  if (!org) return '';
  return badge(ICONS[ORG_ICON[org.type] || 'studio'], orgLabel(value), orgName(value), org.url);
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
 * title → badges → role chips → pitch → gallery → key facts → links → what I did → about the project → highlights → tools & tech → credits
 * (everything is always visible; nothing is folded)
 */
export function projectSheet(p) {
  const base = projectFolder(p);
  // No gallery media? Fall back to the cover image (or, without one, the generated illustration).
  const media = p.media?.length ? p.media : p.cover ? [p.cover] : [];
  return {
    render: () => {
      const badges = orgBadge(p.org) + clientBadge(p.client);

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
      ${section('sheet.whatIDid', listBlock(p.whatIDid))}
      ${section('sheet.description', textBlock(p.description))}
      ${section('sheet.highlights', highlightsBlock(p.highlights))}
      ${section('sheet.tech', techBlock(p.tech))}
      ${section('sheet.credits', creditsBlock(p.credits))}
    `;
    },
    mount: (el) => mountGallery(el, media, base),
  };
}
