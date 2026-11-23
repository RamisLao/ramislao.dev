import { about } from '../data/about.js';
import { t, tr, onLangChange } from '../i18n/index.js';
import { esc } from '../utils/dom.js';
import { artworkSVG } from '../components/artwork.js';
import { resolveSrc } from '../sheets/parts.js';

/** About: photo, bio, playful skill cards and software list. */
export function initAbout(root) {
  const photo = root.querySelector('[data-about-photo]');
  const bio = root.querySelector('[data-about-bio]');
  const skills = root.querySelector('[data-skills]');
  const software = root.querySelector('[data-software]');
  const cv = root.querySelector('[data-about-cv]');

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
    if (!file) return;
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
      ? `<img src="${esc(about.photo)}" alt="${esc(t('about.photoAlt'))}">`
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
  }

  render();
  onLangChange(render);
}
