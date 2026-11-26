/**
 * Builds the CV from cv/data.js plus the website's own data.
 * You shouldn't need to edit this file: content lives in cv/data.js.
 */
import { cv } from './data.js';
import { about } from '../src/data/about.js';

// ── Language ───────────────────────────────────────────────────────────
const params = new URLSearchParams(location.search);
const lang = params.get('lang') === 'en' ? 'en' : 'es';
const webCopy = params.has('web'); // ?web → the website copy: leaves out contact lines marked web: false
document.documentElement.lang = lang;
document.title = `${cv.name} — CV (${lang.toUpperCase()})`;
document.querySelectorAll('.toolbar [data-lang]').forEach((a) => a.classList.toggle('active', a.dataset.lang === lang));

/** Text in the current language ('' if missing). */
const T = (v) => (v == null ? '' : typeof v === 'object' ? (v[lang] ?? '') : String(v));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// cv/private.js is optional (kept off GitHub): its lines fill the { private: 'name' } slots.
const privateLines = Object.values(import.meta.glob('./private.js', { eager: true, import: 'default' }))[0] || {};
const contactLines = cv.contact
  .map((c) => (c.private ? privateLines[c.private] : c))
  .filter((c) => c && T(c.text) && !(webCopy && c.web === false));

// ── Colors: entries and groups cycle through the palette, like the site ──
const CYCLE = ['--accent', '--secondary', '--pop', '--primary', '--highlight', '--primary-soft', '--pop-soft'];
const colorAt = (i) => `var(${CYCLE[i % CYCLE.length]})`;
const ROLE_COLORS = ['var(--accent-text)', 'var(--primary)', 'var(--secondary)']; // same as the hero

// ── Dates ──────────────────────────────────────────────────────────────
const MONTHS = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};
function fmtDate(d) {
  if (d === null) return T(cv.labels.present);
  const [y, m] = String(d).split('-');
  return m ? `${MONTHS[lang][Number(m) - 1]} ${y}` : y;
}
const range = (from, to) => (to === undefined || to === from ? fmtDate(from) : `${fmtDate(from)} – ${fmtDate(to)}`);

// ── Pieces ─────────────────────────────────────────────────────────────
const shape = (kind, color, extra = '') => `<span class="shape ${kind}" style="--c:${color};${extra}"></span>`;
const h2 = (label, kind, color) => `<h2>${shape(kind, color)}${esc(T(label))}</h2>`;

function entry(e, i) {
  const place = T(e.place);
  return `
    <article class="entry" style="--entry:${colorAt(i)}">
      <div class="meta"><span class="date">${esc(range(e.from, e.to))}</span>${T(e.mode) ? `<span class="mode">${esc(T(e.mode))}</span>` : ''}</div>
      <p class="org">${esc(T(e.org))}${place ? `<span>, ${esc(place)}</span>` : ''}</p>
      <h3 class="title">${esc(T(e.title))}</h3>
      <ul class="dots">${(e.points || []).map((p) => `<li>${T(p)}</li>`).join('')}</ul>
    </article>`;
}

function item(x) {
  return `
    <div class="item">
      <span class="yr">${esc(T(x.years))}</span>
      <div>
        <p class="name">${esc(T(x.name))}</p>
        ${[T(x.note), x.grade ? `${T(cv.labels.grade)} ${T(x.grade)}` : ''].filter(Boolean).length
          ? `<p class="note">${esc([T(x.note), x.grade ? `${T(cv.labels.grade)} ${T(x.grade)}` : ''].filter(Boolean).join(' · '))}</p>` : ''}
        ${T(x.where) ? `<p class="where">${esc(T(x.where))}</p>` : ''}
        ${[].concat(x.badge || []).map(T).filter(Boolean).map((b) => `<span class="badge">${esc(b)}</span>`).join(' ')}
      </div>
    </div>`;
}

function footer(n, total) {
  const site = contactLines.find((c) => /^https?:/.test(c.href || ''));
  return `
    <footer class="foot">
      <span class="brand"><span class="brand-mark"></span>${esc(cv.name)}</span>
      <span>· ${esc(T(cv.role))}</span>
      ${site ? `<a class="url" href="${esc(site.href)}">${esc(T(site.text))}</a>` : ''}
      <span class="num">${n} / ${total}</span>
    </footer>`;
}

// ── Header: one wide column, like the website's hero ───────────────────
const header = `
  <header class="hero">
    <!-- floating flat shapes, like the 3D hero -->
    ${shape('circle', 'var(--accent)', 'position:absolute;--s:30px;right:22mm;top:9mm')}
    ${shape('arch', 'var(--primary-deep)', 'position:absolute;--s:34px;right:46mm;top:20mm;transform:rotate(-14deg)')}
    ${shape('square', 'var(--highlight)', 'position:absolute;--s:20px;right:16mm;top:31mm;transform:rotate(18deg)')}
    ${shape('ring', 'var(--on-dark)', 'position:absolute;--s:20px;right:66mm;top:7mm')}
    ${shape('triangle', 'var(--secondary)', 'position:absolute;--s:17px;right:72mm;top:30mm;transform:rotate(-10deg)')}
    ${shape('pill', 'var(--pop-soft)', 'position:absolute;--s:30px;right:36mm;top:5mm;transform:rotate(-24deg)')}
    ${shape('half', 'var(--accent-soft)', 'position:absolute;--s:26px;right:88mm;top:17mm;transform:rotate(12deg)')}

    <div class="hero-inner">
      <h1>${esc(cv.name)}</h1>
      ${T(cv.legalName) ? `<p class="legal">${esc(T(cv.legalName))}</p>` : ''}
      <div class="role-row">
        <p class="role">${esc(T(cv.role))}</p>
        <p class="disciplines">${cv.disciplines.map((d, i) => `<span style="color:${ROLE_COLORS[i % ROLE_COLORS.length]}">${esc(T(d))}</span>`).join('<i>·</i>')}</p>
      </div>
      ${T(cv.summary) ? `<p class="summary">${esc(T(cv.summary))}</p>` : ''}
      <div class="contact">
        ${contactLines.map((c, i) => `
          <span class="contact-item">${shape(c.shape, colorAt(i))}${c.href ? `<a href="${esc(c.href)}">${esc(T(c.text))}</a>` : esc(T(c.text))}</span>`).join('')}
      </div>
    </div>
  </header>`;

// ── Page 1: header · work (left) · teaching (right) ────────────────────
const page1 = `
  <div class="page page-1">
    ${header}
    <div class="cols">
      <section>
        ${h2(cv.labels.work, 'square', 'var(--primary-deep)')}
        ${cv.work.map(entry).join('')}
      </section>
      <section>
        ${h2(cv.labels.teaching, 'half', 'var(--primary)')}
        ${cv.teaching.map((e, i) => entry(e, i + 2)).join('')}
      </section>
    </div>
    ${footer(1, 2)}
  </div>`;

// ── Page 2: education, courses, languages (left) · awards, skills (right) ──
const page2 = `
  <div class="page page-2">
    ${shape('circle', 'color-mix(in srgb, var(--highlight) 22%, transparent)', 'position:absolute;--s:56mm;right:-18mm;top:-20mm')}
    ${shape('arch', 'color-mix(in srgb, var(--secondary) 12%, transparent)', 'position:absolute;--s:36mm;left:-10mm;bottom:-6mm')}
    <div class="cols">
      <div>
        <section>
          ${h2(cv.labels.education, 'arch', 'var(--accent)')}
          <div class="card list">${cv.education.map(item).join('')}</div>
        </section>
        <section>
          ${h2(cv.labels.courses, 'triangle', 'var(--pop)')}
          <div class="card list">${cv.courses.map(item).join('')}</div>
        </section>
        <section>
          ${h2(cv.labels.languages, 'pill', 'var(--primary)')}
          <div class="card langs">
            ${cv.languages.map((l, i) => `
              <div class="lang" style="--c:${colorAt(i)}">
                <b>${esc(T(l.name))}</b><small>${esc(T(l.note))}</small>
                <span class="meter">${[1, 2, 3, 4, 5].map((n) => `<span class="${n <= l.level ? 'on' : ''}"></span>`).join('')}</span>
              </div>`).join('')}
          </div>
        </section>
      </div>
      <div>
        <section>
          ${h2(cv.labels.awards, 'circle', 'var(--highlight)')}
          <div class="card list">${cv.awards.map(item).join('')}</div>
        </section>
        <section>
          ${h2(cv.labels.tools, 'ring', 'var(--secondary)')}
          <div class="card tools">
            ${about.software.map((g, i) => `
              <div style="--c:${colorAt(i)}">
                <h3>${esc(T(g.group))}</h3>
                <div class="chips">${g.items.map((s) => `<span>${esc(s)}</span>`).join('')}</div>
              </div>`).join('')}
          </div>
        </section>
      </div>
    </div>
    ${footer(2, 2)}
  </div>`;

document.getElementById('cv').innerHTML = page1 + page2;

// ── Warn (on screen only) if a page holds more than fits ───────────────
async function checkFit() {
  await document.fonts.ready;
  const warnings = [];
  document.querySelectorAll('.page').forEach((page, i) => {
    const limit = page.querySelector('.foot').getBoundingClientRect().top - 2;
    const lowest = Math.max(...[...page.querySelectorAll('section')].map((s) => s.getBoundingClientRect().bottom));
    const over = lowest > limit;
    page.classList.toggle('overflowing', over);
    if (over) warnings.push(lang === 'es'
      ? `La página ${i + 1} no cabe: recorta un poco de texto en cv/data.js.`
      : `Page ${i + 1} is too full: trim some text in cv/data.js.`);
  });
  const box = document.querySelector('.warnings');
  box.hidden = !warnings.length;
  box.innerHTML = warnings.map(esc).join('<br>');
  document.body.dataset.ready = 'true';
}
checkFit();
