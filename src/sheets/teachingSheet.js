import { tr } from '../i18n/index.js';
import { esc, yearsLabel, accentOf } from '../utils/dom.js';
import { section, textBlock, listBlock, linksBlock, galleryHTML, mountGallery } from './parts.js';

/** Side-sheet content for a teaching entry. */
export function teachingSheet(item) {
  // Plain filenames in media are looked up in the entry's own folder
  const base = `/images/teaching/${item.id}/`;
  return {
    render: () => `
      <header class="sheet-header" style="--entry:${accentOf(item.palette)}">
        <p class="sheet-kicker"><span class="dot"></span>${esc(yearsLabel(item.start, item.end))}</p>
        <h2 id="sheet-title">${esc(tr(item.subject))}</h2>
        <p class="sheet-subtitle">${esc(item.institution)}</p>
      </header>
      ${galleryHTML(item.media, { base }) /* only shown when the entry has media */}
      ${linksBlock(item.links)}
      ${section('sheet.course', textBlock(item.description))}
      ${section('sheet.topics', listBlock(item.topics))}
      ${section('sheet.teachHighlights', listBlock(item.highlights))}
    `,
    mount: (el) => mountGallery(el, item.media, base),
  };
}
