/**
 * PROJECTS
 *
 * Each project lives in its own file:  src/data/projects/<id>.js
 *   - To edit a project, open its file.
 *   - Every file lists ALL fields. Optional ones you don't use are commented out (// …):
 *     remove the // to use them. Empty texts ('') are simply not shown.
 *   - To add one, copy projects/_template.js, rename it to the new id (e.g. my-game.js),
 *     change the id inside to match, and add it to `order` at the bottom of this file.
 *   - Files starting with "_" are ignored (handy for drafts).
 *
 * Every field a project file can have is listed here.
 * Every text field can be { en: '...', es: '...' }.
 *
 * ── All available fields ─────────────────────────────────────────────
 * id        unique, no spaces (also a good name for the image folder)
 * title     project name
 * type      a key from taxonomy.js → projectTypes
 * roles     keys from taxonomy.js → roles
 * start     first year
 * end       last year · null = ongoing ("Present") · leave out for a single year
 * palette   color set from config.js (used when there's no cover image)
 *
 * MEDIA:  put files in this project's folder,  public/media/projects/<id>/
 *         then just write the filename, e.g. 'cover.jpg' or 'about_1.mp4'.
 *         (Full paths like '/media/projects/<id>/cover.jpg' also work.)
 *
 * cover     the card's main image (JPG, PNG, WebP or GIF), shown at 16:9
 *
 * media     the side sheet's gallery — as many items as you like, in order.
 *           The first one is shown big; the rest appear as thumbnails.
 *           All items are shown at the same height; the width follows each item's shape.
 *             '/media/projects/<id>/01.jpg'                 image (any shape, detected automatically)
 *             '/media/projects/<id>/gameplay.gif'           GIF   (any shape, detected automatically)
 *             '/media/projects/<id>/gameplay.mp4'           looping video — plays like a GIF but ~10× smaller (.mp4 / .webm)
 *             'https://www.youtube.com/watch?v=VIDEO_ID'     YouTube video        → 16:9  (youtu.be links too)
 *             'https://www.youtube.com/shorts/VIDEO_ID'      YouTube Short        → 9:16
 *             'https://www.instagram.com/p/POST_ID/'         Instagram post       → 4:5
 *             'https://www.instagram.com/reel/REEL_ID/'      Instagram reel       → 9:16
 *           In the project files each item is written as an object, with a caption:
 *             { src: 'screenshot_1.png', caption: { en: 'The main menu', es: 'El menú principal' } }
 *           caption = short text shown under the item (in the sheet and in fullscreen); empty = hidden.
 *           Optional extras in the same object:
 *             ratio: '1:1'                                   force a shape (e.g. a square Instagram post)
 *             alt: { en: '…', es: '…' }                      description for screen readers
 *           If media is empty, the sheet shows the cover (or the generated illustration).
 *
 * org         who / how you made it (optional). Shown on the card and as a badge in the sheet:
 *               'freelance'                                                → "Freelance"
 *               'independent'                                              → "Independent / Independiente"
 *               { name: 'Crafted Mayhem', url: '…', type: 'studio' }       → "Studio / Estudio: Crafted Mayhem"
 *             type (sets the word and the icon):
 *               studio      Studio / Estudio
 *               startup     Startup / Startup
 *               company     Company / Empresa
 *               collective  Collective / Colectivo
 *               (no type)   just the name
 *             label (optional): false → hide the word · { en: 'Agency', es: 'Agencia' } → your own word
 * client      who it was for (optional): 'Kambio'   or   { name: 'Kambio', url: 'https://…' }
 *             org + client together = client work: done at that org
 *             (e.g. Crafted Mayhem + Kambio), or as a freelancer ('freelance' + client).
 * steam       Steam store page link (optional) → "View on Steam" button
 * itch        itch.io page link (optional)     → "View on itch.io" button
 * links       any other buttons: [{ label: { en, es }, url: 'https://...' }]
 * pitch       ONE sentence (≈25 words max) shown under the title: what it is + what you did.
 *             Many visitors only read this, so make it count.
 * facts       key facts as small tiles below the media (all optional, skip any you don't want).
 *             They must go INSIDE facts: { … } to show up:
 *               facts: { team: …, platform: …, format: …, status: …, impact: … }
 *             each value is text or { en, es }. "impact" (numbers, results) gets a full row.
 *
 * whatIDid    list of things you did — things you built or made, but also things like
 *             "Managed a team of 5" (shown as "What I did / Lo que hice").
 *             Wrap keywords in **double asterisks** to make them bold:
 *               { en: 'The **Node.js backend**', es: 'El **backend en Node.js**' }
 *             One or two per point is enough.
 * tech        technologies / platforms used, shown as chips (optional):
 *               ['Unity', 'Blender', 'p5.js', 'Node.js']
 *
 * Longer texts (always visible in the sheet):
 * description paragraph(s) about the project; separate paragraphs with a blank line (\n\n).
 * highlights  "Highlights / Lo más destacado": the key moments of the project, as short points
 *             on a line. Each one has a type, which sets its label and marker:
 *               type: 'challenge'  "Challenge / Reto"              what was hard          (dark square, !)
 *               type: 'decision'   "Key decision / Decisión clave" a choice you made, and why (violet, fork)
 *               type: 'result'     "Result / Resultado"            what came out of it     (aqua, check)
 *               highlights: [
 *                 { type: 'challenge', title: { en: '…', es: '…' }, text: { en: '…', es: '…' } },
 *                 { type: 'decision',  title: { en: '…', es: '…' }, text: { en: '…', es: '…' } },
 *                 { type: 'result',    title: { en: '…', es: '…' }, text: { en: '…', es: '…' } },
 *               ]
 *             They show in the order you write them. title is optional (2–4 words works best);
 *             keep each text to one or two sentences.
 *
 * Sheet order: … what I did → about the project → highlights → tools & tech → credits
 * credits     people involved:
 *               [{ name: 'Ana López', role: { en: 'Composer', es: 'Composición' }, url: 'https://…' }]
 *               (url is optional; the name becomes a link)
 * ─────────────────────────────────────────────────────────────────────
 */

/**
 * FEATURED — shown as big cards right below the hero, in this order (use the project ids).
 * On hover, every card (featured or not) plays a looping video: `preview: 'clip.mp4'` on the project,
 * or else its first .mp4 in media. Projects without either just show their cover.
 * Featured projects also appear in the "All projects" grid below.
 */
export const featured = ['shutterbug-skies', 'yanga-casting', 'party-demon', 'hyperbeard'];

/**
 * ORDER — the projects shown on the site (use the project ids = file names without .js).
 * Only projects listed here appear. To hide one, delete its line or comment it out with //
 * The "All projects" grid sorts them by date automatically (newest first, by start year),
 * so the order here only matters for projects with exactly the same years.
 * (this also hides it from the featured row).
 */
export const order = [
  'shutterbug-skies',
  'nectoma-community',
  'yanga-casting',
  'the-room-holds-time',
  'extraction',
  // 'nectoma-branding',
  'hyperbeard',
  'party-demon',
  'kambio',
  'luna',
  'gummy-clash',
  'marakana-sports',
  'catalyst',
  'simplifai',
];

// ── Loading (no need to edit below) ──────────────────────────────────
const files = import.meta.glob(['./projects/*.js', '!./projects/_*.js'], { eager: true, import: 'default' });
const byId = Object.fromEntries(Object.values(files).map((p) => [p.id, p]));

export const projects = order
  .map((id) => {
    if (!byId[id]) console.warn(`projects.js → order: no project file with id "${id}"`);
    return byId[id];
  })
  .filter(Boolean);
