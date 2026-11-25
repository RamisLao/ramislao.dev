export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'nectoma-branding',                      // = this file's name, no spaces
  title: 'Nectoma',
  type: 'branding',                            // a key from taxonomy.js → projectTypes
  roles: ['designer'],                         // keys from taxonomy.js → roles
  start: 2024,
  // end: 2025,                                // null = ongoing ("Present") · leave commented for a single year
  palette: 'highlight',                              // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: '/media/projects/nectoma-branding/main.jpg', // card image, 16:9
  // preview: 'clip.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    // { src: 'screenshot_1.png', caption: { en: '', es: '' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Nectoma', url: 'https://www.instagram.com/nectoma', type: 'collective' }, // type: studio · startup · company · collective · freelance · independent
  // client: { name: '…', url: 'https://…' },  // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  // itch: 'https://….itch.io/…',
  links: [
    { label: { en: 'Follow on Instagram', es: 'Seguir en Instagram' }, url: 'https://www.instagram.com/nectoma' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what it is + what you did
  pitch: {
    en: '',
    es: '',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '', es: '' },
    platform: { en: '', es: '' },
    format: { en: '', es: '' },
    status: { en: '', es: '' },
    impact: { en: '', es: '' },
  },

  // ── Texts (folded in the sheet) · new paragraph = \n\n ──
  description: {
    en: '',
    es: '',
  },
  roleDetails: {
    en: '',
    es: '',
  },
  built: [
    { en: '', es: '' },
  ],
  tech: [],                                    // chips, e.g. ['Unity', 'C#', 'Blender']
  challenges: [
    {
      en: '',
      es: '',
    },
  ],
  credits: [
    // { name: '…', role: { en: '…', es: '…' }, url: 'https://…' },  (url is optional)
  ],
};
