import './styles/main.css';
import { applyStatic } from './i18n/index.js';
import { initNav } from './components/nav.js';
import { initSheet } from './components/sheet.js';
import { initHero } from './hero/index.js';
import { initProjects } from './sections/projects.js';
import { initTeaching } from './sections/teaching.js';
import { initAbout } from './sections/about.js';
import { initContact } from './sections/contact.js';
import { initBrandMark } from './components/brandMark.js';
import { tokenColor } from './utils/tokens.js';

applyStatic();

initNav();
initSheet();
initBrandMark();
initHero();
initProjects(document.getElementById('projects'));
initTeaching(document.getElementById('teaching'));
initAbout(document.getElementById('about'));
initContact(document.getElementById('contact'));

document.querySelector('[data-year]').textContent = new Date().getFullYear();

// Favicon (the circle, the logo's first shape) drawn in the --accent token color, so it follows tokens.css too
const favicon = document.querySelector('link[rel="icon"]');
if (favicon) {
  const fill = encodeURIComponent(tokenColor('--accent'));
  favicon.href = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='14' fill='${fill}'/%3E%3C/svg%3E`;
}
