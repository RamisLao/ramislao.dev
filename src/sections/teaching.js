import { teaching } from '../data/teaching.js';
import { tr, onLangChange } from '../i18n/index.js';
import { esc, yearsLabel, accentOf } from '../utils/dom.js';
import { openSheet } from '../components/sheet.js';
import { teachingSheet } from '../sheets/teachingSheet.js';

/** Teaching list. Each row opens the side sheet. */
export function initTeaching(root) {
  const list = root.querySelector('[data-teaching]');

  function render() {
    list.innerHTML = teaching
      .map(
        (item) => `
        <li>
          <button type="button" class="teach-row" data-teach="${esc(item.id)}" style="--entry:${accentOf(item.palette)}">
            <span class="teach-years">${esc(yearsLabel(item.start, item.end))}</span>
            <span class="teach-main">
              <span class="teach-subject">${esc(tr(item.subject))}</span>
              <span class="teach-inst">${esc(item.institution)}</span>
            </span>
            <span class="teach-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
          </button>
        </li>`
      )
      .join('');
  }

  list.addEventListener('click', (e) => {
    const row = e.target.closest('[data-teach]');
    const item = row && teaching.find((x) => x.id === row.dataset.teach);
    if (item) openSheet(teachingSheet(item));
  });

  render();
  onLangChange(render);
}
