import { t, onLangChange } from '../i18n/index.js';
import { esc } from '../utils/dom.js';

// Text colors that stay readable on the light pill (all ≥ 4.5:1)
const ROLE_COLORS = ['var(--accent-text)', 'var(--primary)', 'var(--secondary)'];

export function initHero() {
  // "Production · Programming · Design" — each word in its own color
  const roles = document.querySelector('[data-hero-roles]');
  const renderRoles = () => {
    roles.innerHTML = t('hero.roles')
      .map((word, i) => `<span style="color:${ROLE_COLORS[i % ROLE_COLORS.length]}">${esc(word)}</span>`)
      .join('<span class="hero-sep" aria-hidden="true">·</span>');
  };
  renderRoles();
  onLangChange(renderRoles);

  // three.js is loaded separately so the rest of the page appears immediately
  const canvas = document.querySelector('[data-hero-canvas]');
  import('./heroScene.js')
    .then(({ createHeroScene }) => createHeroScene(canvas))
    .catch((err) => console.warn('3D hero unavailable:', err));
}
