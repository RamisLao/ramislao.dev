import { projects, featured } from '../data/projects.js';
import { projectTypes, roles } from '../data/taxonomy.js';
import { t, tr, onLangChange } from '../i18n/index.js';
import { esc } from '../utils/dom.js';
import { openSheet } from '../components/sheet.js';
import { projectCard } from '../components/projectCard.js';
import { projectSheet } from '../sheets/projectSheet.js';

/**
 * Projects: the featured row at the top, then the filterable grid.
 * The grid leaves out featured projects unless a filter is active,
 * so nothing appears twice but filters still search everything.
 */

const filters = { type: 'all', role: 'all' };

export function initProjects(root) {
  const featuredEl = root.querySelector('[data-featured]');
  const filtersEl = root.querySelector('[data-filters]');
  const gridEl = root.querySelector('[data-grid]');
  const countEl = root.querySelector('[data-count]');

  const featuredProjects = featured.map((id) => projects.find((p) => p.id === id)).filter(Boolean);
  const isFeatured = (p) => featuredProjects.includes(p);

  // Only show filter options that are actually used, in taxonomy order
  const usedTypes = Object.keys(projectTypes).filter((k) => projects.some((p) => p.type === k));
  const usedRoles = Object.keys(roles).filter((k) => projects.some((p) => p.roles.includes(k)));

  const filterGroup = (name, label, keys, dict) => `
    <div class="filter-group" role="group" aria-label="${esc(label)}">
      <span class="filter-label">${esc(label)}</span>
      <div class="chips">
        ${['all', ...keys]
          .map((key) => {
            const active = filters[name] === key;
            const text = key === 'all' ? t('filters.all') : tr(dict[key]);
            return `<button type="button" class="chip${active ? ' active' : ''}" data-filter="${name}" data-value="${key}" aria-pressed="${active}">${esc(text)}</button>`;
          })
          .join('')}
      </div>
    </div>`;

  function renderFeatured() {
    featuredEl.innerHTML = featuredProjects.map((p) => projectCard(p, { featured: true })).join('');
  }

  function render() {
    filtersEl.innerHTML =
      filterGroup('type', t('filters.type'), usedTypes, projectTypes) +
      filterGroup('role', t('filters.role'), usedRoles, roles);

    const unfiltered = filters.type === 'all' && filters.role === 'all';
    const visible = projects.filter(
      (p) =>
        (unfiltered ? !isFeatured(p) : true) &&
        (filters.type === 'all' || p.type === filters.type) &&
        (filters.role === 'all' || p.roles.includes(filters.role))
    );

    countEl.textContent = visible.length === 1 ? t('filters.countOne') : t('filters.count', { n: visible.length });

    gridEl.innerHTML = visible.length
      ? visible.map((p) => projectCard(p)).join('')
      : `<div class="empty-state"><p>${esc(t('filters.empty'))}</p><button type="button" class="btn btn-small" data-reset>${esc(t('filters.reset'))}</button></div>`;
  }

  filtersEl.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-filter]');
    if (!chip) return;
    filters[chip.dataset.filter] = chip.dataset.value;
    render();
  });

  gridEl.addEventListener('click', (e) => {
    if (e.target.closest('[data-reset]')) {
      filters.type = filters.role = 'all';
      render();
    }
  });

  // Clicking anywhere on a card (featured or grid) opens its side sheet
  root.addEventListener('click', (e) => {
    const cardEl = e.target.closest('.project-card');
    if (!cardEl) return;
    const id = cardEl.querySelector('[data-project]').dataset.project;
    const project = projects.find((p) => p.id === id);
    if (project) openSheet(projectSheet(project));
  });

  initPreviews(featuredEl);
  initPreviews(gridEl);

  renderFeatured();
  render();
  onLangChange(() => {
    renderFeatured();
    render();
  });
}

/** Cards with a looping video play it on hover / keyboard focus (desktop only). */
function initPreviews(container) {
  const canHover = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  const start = (card) => {
    if (!canHover.matches || reduced.matches || !card?.dataset.preview) return;
    let video = card.querySelector('.card-preview');
    if (!video) {
      video = document.createElement('video');
      video.className = 'card-preview';
      Object.assign(video, { muted: true, loop: true, playsInline: true, preload: 'auto', src: card.dataset.preview });
      video.setAttribute('aria-hidden', 'true');
      card.querySelector('.card-media').append(video);
    }
    video.play().then(() => card.classList.add('previewing')).catch(() => {});
  };
  const stop = (card) => {
    const video = card?.querySelector('.card-preview');
    card?.classList.remove('previewing');
    video?.pause();
  };

  container.addEventListener('pointerover', (e) => {
    const card = e.target.closest('.project-card');
    if (card && !card.contains(e.relatedTarget)) start(card);
  });
  container.addEventListener('pointerout', (e) => {
    const card = e.target.closest('.project-card');
    if (card && !card.contains(e.relatedTarget)) stop(card);
  });
  container.addEventListener('focusin', (e) => start(e.target.closest('.project-card')));
  container.addEventListener('focusout', (e) => stop(e.target.closest('.project-card')));
}
