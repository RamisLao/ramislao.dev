# Ramis Lao — Portfolio

One-page bilingual (ES / EN) portfolio built with Vite + three.js.

## Run it

```powershell
npm.cmd install      # first time only
npm.cmd run dev      # http://localhost:5173 — reloads on save
npm.cmd run build    # production files in /dist
```

## Where to change things

Each project has its own file in `src/data/projects/` (e.g. `party-demon.js`). Every file lists all the
available fields; optional ones you don't use are commented out — remove the `//` to use them.
To add a project, copy `_template.js`, rename it, change its `id`, and add the id to `order` in
`src/data/projects.js`. Only projects listed in `order` appear on the site: delete a line or comment it
out (`// 'luna',`) to hide that project. Files whose name starts with `_` are ignored too.

| I want to change…                              | Edit this file |
|------------------------------------------------|----------------|
| A project (text, roles, years, images, videos) | `src/data/projects/<id>.js` (one file per project) |
| Which projects show, and their order · all fields | `src/data/projects.js` → `order` |
| Featured projects (big cards under the hero)   | `src/data/projects.js` → `featured` |
| Project types & roles used by the filters      | `src/data/taxonomy.js` |
| Teaching entries                               | `src/data/teaching.js` |
| About: photo, bio, skills, software            | `src/data/about.js` |
| Menu labels, headings, buttons (ES + EN)       | `src/i18n/strings.js` |
| Contact email / form service, card palettes    | `src/config.js` |
| 3D hero: number of shapes, colors, mouse pull  | `src/config.js` → `hero` |
| Colors, fonts, spacing for the whole site      | `src/styles/tokens.css` |
| Page structure (sections, order)               | `index.html` |

### Adding images, GIFs and videos

Every project and teaching entry has its own folder, named after its `id`:

```
public/images/projects/luna/        ← cover.jpg, 01.jpg, demo.gif …
public/images/teaching/bedu/        ← optional
public/images/about/                ← your photo
```

Then list them in the data file. A plain filename (`'about_1.gif'`) is looked up in that entry's
own folder; a full path (written **without** `public`) works too:

```js
// src/data/projects/luna.js
cover: '/images/projects/luna/cover.jpg',          // card image
media: [                                           // side-sheet gallery, any length
  '/images/projects/luna/01.jpg',                  // images & GIFs: shape detected automatically
  '/images/projects/luna/boss-fight.gif',
  'https://www.youtube.com/watch?v=VIDEO_ID',      // 16:9
  'https://www.youtube.com/shorts/VIDEO_ID',       // 9:16
  'https://www.instagram.com/p/POST_ID/',          // 4:5
  'https://www.instagram.com/reel/REEL_ID/',       // 9:16
  { src: 'https://www.instagram.com/p/POST_ID/', ratio: '1:1' },   // force a shape
  { src: '/images/projects/luna/02.jpg', alt: { en: 'Level editor', es: 'Editor de niveles' } },
],
```

In the side sheet every item has the same height and its width follows its shape: a 16:9 video fills the
sheet's width, a reel is a narrow 9:16 column, a square post is square.
Instagram embeds include Instagram's own header and footer and need at least ~326px of width.

Teaching entries take the same `media: [...]` list in `src/data/teaching.js`; leave it out and no gallery is shown.

- Without a `cover`, the card shows a generated illustration in the entry's `palette` colors.
- Without `media`, a project's sheet shows its cover (or the illustration).
- Card covers are shown at **16:9** (e.g. 1600×900); other shapes get cropped to fit.
- Gallery images can be any shape — they're shown whole, never cropped.
- `.mp4` / `.webm` files play like GIFs (silent, autoplay, loop) and are usually ~10× smaller — prefer them over GIFs.

### Turning a GIF into a looping video

ffmpeg is installed. Run this in the terminal (change the paths), then list the `.mp4` instead of the `.gif`:

```powershell
ffmpeg -i about_1.gif -an -c:v libx264 -preset slow -tune animation -crf 20 -pix_fmt yuv420p -movflags +faststart -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" about_1.mp4
```

Lower `-crf` (e.g. 16) = sharper but bigger; higher (e.g. 26) = smaller but softer.
Keep original GIFs in `media-originals/` (outside `public/`) so they aren't published with the site.

### Studio, client, store pages and credits (projects)

All optional:

```js
studio: 'Crafted Mayhem',      // or 'freelance' → "Freelance", or 'independent' → "Independent / Independiente"
studio: { name: 'Crafted Mayhem', url: 'https://…' },   // with a website (the name becomes a link)
client: 'Example Co.',         // or { name: 'Example Co.', url: 'https://…' }
cofounded: { name: 'Nectoma', url: 'https://…' },       // "Co-founder · Nectoma" / "Cofundadorx · Nectoma" (instead of studio/client)
steam: 'https://store.steampowered.com/app/…',          // "View on Steam" button
itch: 'https://….itch.io/…',                            // "View on itch.io" button
tech: ['Unity', 'Blender', 'p5.js', 'Node.js'],         // "Tools & tech" chips (hidden when empty)
credits: [
  { name: 'Ana López', role: { en: 'Composer', es: 'Composición' } },
  { name: 'Leo Martín', role: { en: 'Pixel art', es: 'Pixel art' }, url: 'https://…' },  // url is optional
],
```

The studio appears on the card (next to the years) and as a badge in the side sheet; the client appears as a
badge in the side sheet. Steam / itch.io buttons appear under the gallery, before any other `links`.

### CV (About section)

Put your PDF in `public/files/` and write its filename in `src/data/about.js`:

```js
cv: 'ramis-lao-cv.pdf',                                              // one file for both languages
cv: { en: 'ramis-lao-cv-en.pdf', es: 'ramis-lao-cv-es.pdf' },        // or one per language
```

A "Download CV / Descargar CV" button appears under the bio, but only once the file exists.

### Contact form

By default the form opens the visitor's email app addressed to `site.email`.
To receive messages directly, create a free form at a service like Formspree
and paste its URL into `site.formEndpoint` in `src/config.js`.

## Code map

```
src/
  main.js            starts everything
  config.js          site settings, palettes, hero settings
  data/              all content (data/projects/ = one file per project)
  i18n/              translations + language switching
  hero/              three.js floating-shapes scene
  components/        nav, side sheet, generated artwork
  sections/          projects, teaching, about, contact
  sheets/            what goes inside each side sheet
  styles/            one CSS file per part of the page
```
