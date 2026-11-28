import { site } from '../config.js';
import { t, onLangChange } from '../i18n/index.js';
import { esc } from '../utils/dom.js';

/**
 * Contact form.
 * - With site.formEndpoint set (e.g. Formspree), messages are sent there.
 * - Without it, the visitor's email app opens with the message filled in.
 */
export function initContact(root) {
  initDirect(root.querySelector('[data-contact-direct]'));
  const form = root.querySelector('form');
  const status = form.querySelector('[data-status]');
  const button = form.querySelector('button[type="submit"]');
  let statusKey = '';

  const setStatus = (key, kind = '') => {
    statusKey = key;
    status.textContent = key ? t(key) : '';
    status.dataset.kind = kind;
  };
  onLangChange(() => statusKey && setStatus(statusKey, status.dataset.kind));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    if (data.get('website')) return; // hidden spam trap was filled in

    const name = String(data.get('name')).trim();
    const email = String(data.get('email')).trim();
    const message = String(data.get('message')).trim();

    if (!site.formEndpoint) {
      const subject = encodeURIComponent(`${t('contact.mailSubject')} ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus('contact.mailto', 'info');
      return;
    }

    button.disabled = true;
    setStatus('contact.sending');
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      setStatus('contact.success', 'success');
    } catch {
      setStatus('contact.error', 'error');
    } finally {
      button.disabled = false;
    }
  });
}

/**
 * The email address (a link, plus a button that copies it) and LinkedIn,
 * shown next to the form for people who'd rather write directly.
 */
function initDirect(list) {
  if (!list) return;
  const mailIcon =
    '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
  const copyIcon =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
  const inIcon =
    '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" fill="none" stroke="var(--surface)" stroke-width="2" stroke-linecap="round"/></svg>';
  let copiedTimer = 0;

  const render = () => {
    const linkedin = site.linkedin ? site.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : '';
    list.innerHTML = `
      <li class="contact-direct-label">${esc(t('contact.or'))}</li>
      <li class="contact-item">
        <span class="contact-icon">${mailIcon}</span>
        <a class="contact-email" href="mailto:${esc(site.email)}">${esc(site.email).replace('@', '@<wbr>')}</a>
        <button type="button" class="contact-copy" data-copy aria-label="${esc(t('contact.copy'))}" title="${esc(t('contact.copy'))}">${copyIcon}<span class="contact-copied" aria-live="polite"></span></button>
      </li>
      ${
        linkedin
          ? `<li class="contact-item">
        <span class="contact-icon">${inIcon}</span>
        <a href="${esc(site.linkedin)}" target="_blank" rel="noopener" aria-label="${esc(t('contact.linkedin'))}">${esc(linkedin)}</a>
      </li>`
          : ''
      }`;
  };
  render();
  onLangChange(render);

  list.addEventListener('click', async (e) => {
    const button = e.target.closest('[data-copy]');
    if (!button) return;
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      // No clipboard access (old browser or not allowed): select the address so it can be copied by hand
      const range = document.createRange();
      range.selectNodeContents(list.querySelector('.contact-email'));
      getSelection().removeAllRanges();
      getSelection().addRange(range);
    }
    const note = button.querySelector('.contact-copied');
    note.textContent = t('contact.copied');
    button.classList.add('done');
    clearTimeout(copiedTimer);
    copiedTimer = setTimeout(() => {
      note.textContent = '';
      button.classList.remove('done');
    }, 1800);
  });
}
