/**
 * Builds the CV from cv/data.js plus the website's own data.
 * You shouldn't need to edit this file: content lives in cv/data.js.
 */
import { cv } from './data.js';
import { about } from '../src/data/about.js';
import { projects as siteProjects, featured } from '../src/data/projects.js';
import { projectTypes, roles as roleNames } from '../src/data/taxonomy.js';
import { artworkSVG } from '../src/components/artwork.js';

// ── Language ───────────────────────────────────────────────────────────
const params = new URLSearchParams(location.search);
const lang = params.get('lang') === 'en' ? 'en' : 'es';
const webCopy = params.has('web'); // ?web → the website copy: leaves out contact lines marked web: false
document.documentElement.lang = lang;
document.title = `${cv.name} — CV (${lang.toUpperCase()})`;
document.querySelectorAll('.toolbar [data-lang]').forEach((a) => a.classList.toggle('active', a.dataset.lang === lang));

/** Text in the current language ('' if missing). */
const T = (v) => (v == null ? '' : typeof v === 'object' ? (v[lang] ?? '') : String(v));
// cv/private.js is optional (kept off GitHub): its lines fill the { private: 'name' } slots.
const privateLines = Object.values(import.meta.glob('./private.js', { eager: true, import: 'default' }))[0] || {};
const contactLines = cv.contact
  .map((c) => (c.private ? privateLines[c.private] : c))
  .filter((c) => c && T(c.text) && !(webCopy && c.web === false));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

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

function h2(label, kind, color, note = '') {
  return `<h2>${shape(kind, color)}${esc(T(label))}${note}</h2>`;
}

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
        ${T(x.note) ? `<p class="note">${esc(T(x.note))}</p>` : ''}
        ${T(x.where) ? `<p class="where">${esc(T(x.where))}</p>` : ''}
        ${T(x.badge) ? `<span class="badge">${esc(T(x.badge))}</span>` : ''}
      </div>
    </div>`;
}

function projectCard(p, i) {
  const src = p.cover ? (p.cover.startsWith('/') || /^https?:/.test(p.cover) ? p.cover : `/images/projects/${p.id}/${p.cover}`) : '';
  const years = p.start ? range(String(p.start), p.end === null ? null : p.end === undefined ? undefined : String(p.end)) : '';
  const type = T(projectTypes[p.type]);
  const roles = (p.roles || []).map((r) => T(roleNames[r])).filter(Boolean).join(' · ');
  return `
    <article class="pcard" style="--entry:${colorAt(i)}">
      <div class="pcard-media">${src ? `<img src="${esc(src)}" alt="">` : artworkSVG(p.id, p.palette)}</div>
      <div class="pcard-body">
        <p class="pcard-type">${esc([type, years].filter(Boolean).join(' · '))}</p>
        <h3 class="pcard-title">${esc(T(p.title))}</h3>
        ${roles ? `<p class="pcard-roles">${esc(roles)}</p>` : ''}
        ${T(p.pitch) ? `<p class="pcard-pitch">${esc(T(p.pitch))}</p>` : ''}
      </div>
    </article>`;
}

function footer(n, total) {
  const site = cv.contact.find((c) => c.shape === 'arch' && c.href) || cv.contact.find((c) => /^https?:/.test(c.href || ''));
  return `
    <footer class="foot">
      <span class="brand"><span class="brand-mark"></span>${esc(cv.name)}</span>
      <span>· ${esc(T(cv.role))}</span>
      ${site ? `<a class="url" href="${esc(site.href)}">${esc(T(site.text))}</a>` : ''}
      <span class="num">${n} / ${total}</span>
    </footer>`;
}

// ── Data from the website ──────────────────────────────────────────────
const byId = Object.fromEntries(siteProjects.map((p) => [p.id, p]));
const projectIds = cv.projects === 'site' ? featured : cv.projects || [];
const cards = projectIds.map((id) => byId[id]).filter(Boolean);
const site = cv.contact.find((c) => c.shape === 'arch' && c.href);

// ── Page 1: header, profile, featured projects, project development ───
const page1 = `
  <div class="page page-1">
    <header class="hero">
      ${shape('circle', 'var(--accent)', 'position:absolute;--s:22px;right:84mm;top:9mm')}
      ${shape('arch', 'var(--primary-deep)', 'position:absolute;--s:26px;right:100mm;top:24mm;transform:rotate(-14deg)')}
      ${shape('square', 'var(--highlight)', 'position:absolute;--s:15px;right:81mm;top:38mm;transform:rotate(18deg)')}
      ${shape('ring', 'var(--on-dark)', 'position:absolute;--s:16px;right:114mm;top:7mm')}
      ${shape('triangle', 'var(--secondary)', 'position:absolute;--s:13px;right:118mm;top:40mm;transform:rotate(-10deg)')}
      ${shape('pill', 'var(--pop-soft)', 'position:absolute;--s:24px;left:4mm;top:5mm;transform:rotate(-24deg)')}
      <div class="hero-grid">
        <div>
          <h1>${esc(cv.name)}</h1>
          ${T(cv.legalName) ? `<p class="legal">${esc(T(cv.legalName))}</p>` : ''}
          <p class="role">${esc(T(cv.role))}</p>
          <p class="disciplines">${cv.disciplines.map((d, i) => `<span style="color:${ROLE_COLORS[i % ROLE_COLORS.length]}">${esc(T(d))}</span>`).join('<i>·</i>')}</p>
        </div>
        <div class="contact">
          ${contactLines.map((c, i) => `
            <div>${shape(c.shape, colorAt(i))}${c.href ? `<a href="${esc(c.href)}">${esc(T(c.text))}</a>` : `<span>${esc(T(c.text))}</span>`}</div>`).join('')}
        </div>
      </div>
    </header>

    ${T(cv.profile) ? `<p class="profile">${esc(T(cv.profile))}</p>` : ''}

    ${cards.length ? `
    <section>
      ${h2(cv.labels.projects, 'circle', 'var(--accent)', site ? `<span class="h2-note">${esc(T(cv.labels.morework))} <b>${esc(T(site.text))}</b></span>` : '')}
      <div class="projects" style="--n:${Math.min(cards.length, 4)}">${cards.map(projectCard).join('')}</div>
    </section>` : ''}

    <section>
      ${h2(cv.labels.development, 'square', 'var(--primary-deep)')}
      <div class="entries">${cv.development.map(entry).join('')}</div>
    </section>

    ${footer(1, 2)}
  </div>`;

// ── Page 2: teaching (secondary) and everything else ───────────────────
const page2 = `
  <div class="page page-2">
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
    <div class="cols">
      <div>
        <section class="compact">
          ${h2(cv.labels.teaching, 'half', 'var(--primary)')}
          <div class="entries single">${cv.teaching.map((e, i) => entry(e, i + 1)).join('')}</div>
        </section>
        <section>
          ${h2(cv.labels.languages, 'pill', 'var(--pop)')}
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
          ${h2(cv.labels.education, 'arch', 'var(--accent)')}
          <div class="card list">${cv.education.map(item).join('')}</div>
        </section>
        <section>
          ${h2(cv.labels.courses, 'triangle', 'var(--pop)')}
          <div class="card list">${cv.courses.map(item).join('')}</div>
        </section>
        <section>
          ${h2(cv.labels.awards, 'circle', 'var(--highlight)')}
          <div class="card list">${cv.awards.map(item).join('')}</div>
        </section>
      </div>
    </div>
    ${footer(2, 2)}
  </div>`;

document.getElementById('cv').innerHTML = page1 + page2;

// ── Warn (on screen only) if a page holds more than fits ───────────────
async function checkFit() {
  await document.fonts.ready;
  await Promise.all([...document.images].map((img) => (img.complete ? null : new Promise((r) => { img.onload = img.onerror = r; }))));
  const warnings = [];
  document.querySelectorAll('.page').forEach((page, i) => {
    const foot = page.querySelector('.foot');
    const limit = foot ? foot.offsetTop - 2 : page.clientHeight;
    const lowest = Math.max(...[...page.querySelectorAll('section')].map((s) => s.offsetTop + s.offsetHeight));
    const over = lowest > limit;
    page.classList.toggle('overflowing', over);
    if (over) warnings.push(lang === 'es'
      ? `La página ${i + 1} no cabe: recorta un poco de texto en cv/data.js.`
      : `Page ${i + 1} is too full: trim some text in cv/data.js.`);
  });
  const box = document.querySelector('.warnings');
  box.hidden = !warnings.length;
  box.innerHTML = warnings.map(esc).join('<br>');
  document.body.dataset.ready = 'true'; // the PDF export waits for this
}
checkFit();
