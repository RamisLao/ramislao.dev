import { site } from '../config.js';
import { t, onLangChange } from '../i18n/index.js';

/**
 * Contact form.
 * - With site.formEndpoint set (e.g. Formspree), messages are sent there.
 * - Without it, the visitor's email app opens with the message filled in.
 */
export function initContact(root) {
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
