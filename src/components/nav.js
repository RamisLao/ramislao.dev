import { getLang, setLang, onLangChange } from '../i18n/index.js';

/**
 * Top navigation: mobile menu, language switch and highlighting
 * the link of the section currently on screen.
 */
export function initNav() {
  const nav = document.querySelector('[data-nav]');
  const toggle = nav.querySelector('.nav-toggle');
  const links = [...nav.querySelectorAll('.nav-links a')];

  const setMenu = (open) => {
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('menu-open')));
  links.forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

  // Language switch
  const langButtons = [...nav.querySelectorAll('[data-lang]')];
  const syncLang = () =>
    langButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === getLang())));
  langButtons.forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  syncLang();
  onLangChange(syncLang);

  // Solid background once the page is scrolled
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight the current section
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((a) => a.removeAttribute('aria-current'));
        byId.get(entry.target.id)?.setAttribute('aria-current', 'true');
      }
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  byId.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}
