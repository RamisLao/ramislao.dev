import { about } from '../data/about.js';
import { t, tr, onLangChange } from '../i18n/index.js';
import { esc } from '../utils/dom.js';
import { artworkSVG } from '../components/artwork.js';
import { resolveSrc } from '../sheets/parts.js';
// Studies and languages come from the CV's data, so they're written once (cv/data.js → site: true)
import { cv as cvData } from '../../cv/data.js';

/** About: photo, bio, playful skill cards, software list, and education & languages. */
export function initAbout(root) {
  const photo = root.querySelector('[data-about-photo]');
  const bio = root.querySelector('[data-about-bio]');
  const skills = root.querySelector('[data-skills]');
  const software = root.querySelector('[data-software]');
  const cv = root.querySelector('[data-about-cv]');
  const background = root.querySelector('[data-background]');

  // Studies marked site: true in cv/data.js, newest first
  const studies = [...(cvData.education || []), ...(cvData.courses || [])]
    .filter((s) => s.site)
    .sort((a, b) => parseInt(tr(b.years)) - parseInt(tr(a.years)));
  const COLORS = ['var(--accent)', 'var(--secondary)', 'var(--pop)', 'var(--primary)'];
  // badge can be one award or a list of them
  const badgesOf = (s) => [].concat(s.badge || []).map(tr).filter(Boolean);

  // Only show the button for a file that really exists (a missing file would download the web page).
  const cvExists = new Map();
  const checkFile = (url) => {
    if (!cvExists.has(url)) {
      cvExists.set(
        url,
        fetch(url, { method: 'HEAD' })
          .then((r) => r.ok && !(r.headers.get('content-type') || '').includes('text/html'))
          .catch(() => false)
      );
    }
    return cvExists.get(url);
  };

  async function renderCV() {
    const file = tr(about.cv);
    cv.innerHTML = '';
    if (!file || about.showCV === false) return;
    const url = resolveSrc(file, '/files/');
    if (!(await checkFile(url)) || tr(about.cv) !== file) return;
    const name = url.split('/').pop();
    cv.innerHTML = `
      <a class="btn" href="${esc(url)}" download="${esc(name)}">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 4v11m0 0l-5-5m5 5l5-5M5 20h14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        ${esc(t('about.cv'))}<span class="cv-note">${esc(t('about.cvNote'))}</span>
      </a>`;
  }

  function render() {
    renderCV();
    photo.innerHTML = about.photo
      ? `<img src="${esc(resolveSrc(about.photo))}" alt="${esc(t('about.photoAlt'))}">`
      : artworkSVG('about-photo', 'sky');

    bio.innerHTML = tr(about.bio)
      .split(/\n\s*\n/)
      .map((p) => `<p>${esc(p)}</p>`)
      .join('');

    skills.innerHTML = about.skills
      .map(
        (s, i) => `
        <li class="skill" style="--c:${esc(s.color)}; --i:${i}">
          <span class="skill-shape shape-${esc(s.shape)}" aria-hidden="true"></span>
          <span class="skill-name">${esc(tr(s.name))}</span>
          <span class="skill-line">${esc(tr(s.line))}</span>
        </li>`
      )
      .join('');

    software.innerHTML = about.software
      .map(
        (g) => `
        <div class="software-group">
          <h4>${esc(tr(g.group))}</h4>
          <ul class="tag-list">${g.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
        </div>`
      )
      .join('');

    background.innerHTML = `
      ${studies.length ? `
      <div class="background-group">
        <h4>${esc(t('about.education'))}</h4>
        <ul class="studies">${studies
          .map(
            (s, i) => `
            <li class="study" style="--c:${COLORS[i % COLORS.length]}">
              <span class="study-years">${esc(tr(s.years))}</span>
              <span class="study-name">${esc(tr(s.name))}</span>
              ${tr(s.where) ? `<span class="study-where">${esc(tr(s.where))}</span>` : ''}
              ${s.grade ? `<span class="study-grade">${esc(tr(cvData.labels.grade))}: <strong>${esc(tr(s.grade))}</strong></span>` : ''}
              ${badgesOf(s).length ? `<span class="study-badges">${badgesOf(s).map((b) => `<span class="study-badge">${esc(b)}</span>`).join('')}</span>` : ''}
            </li>`
          )
          .join('')}</ul>
      </div>` : ''}
      ${cvData.languages?.length ? `
      <div class="background-group">
        <h4>${esc(t('about.languages'))}</h4>
        <ul class="languages">${cvData.languages
          .map(
            (l, i) => `
            <li class="language" style="--c:${COLORS[i % COLORS.length]}">
              <span class="language-name">${esc(tr(l.name))}</span>
              <span class="language-note">${esc(tr(l.note))}</span>
              <span class="language-meter" role="img" aria-label="${l.level} / 5">${[1, 2, 3, 4, 5]
                .map((n) => `<span class="${n <= l.level ? 'on' : ''}"></span>`)
                .join('')}</span>
            </li>`
          )
          .join('')}</ul>
      </div>` : ''}`;
  }

  render();
  onLangChange(render);
}
