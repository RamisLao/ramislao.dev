export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'the-room-holds-time',                   // = this file's name, no spaces
  title: 'The Room Holds Time',
  type: 'other',                               // a key from taxonomy.js → projectTypes
  roles: ['graphicDesigner', 'programmer'],           // keys from taxonomy.js → roles
  start: 2025,
  // end: 2026,                                // null = ongoing ("Present") · leave commented for a single year
  palette: 'secondary',                          // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: '/media/projects/the-room-holds-time/main.png', // card image, 16:9
  preview: 'preview.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://youtu.be/mbVAtLoXAUk', caption: { en: 'The full piece, performed by the Esplendor ensemble in Amsterdam', es: 'La pieza completa, interpretada por el ensamble Esplendor en Ámsterdam' } },
    { src: 'https://youtu.be/nkBVrR3qonk', caption: { en: 'The animation with the MIDI audio we used as a guide during development', es: 'La animación con el audio MIDI que usamos como guía durante el desarrollo' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Crafted Mayhem', url: 'https://www.craftedmayhem.studio/', type: 'studio' },                           // or { name, url, type: studio · startup · company · collective }
  client: 'Jimena Maldonado',                  // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  // itch: 'https://….itch.io/…',
  links: [
    // { label: { en: '…', es: '…' }, url: 'https://…' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what the project is (your roles already show as chips above it)
  pitch: {
    en: 'An animation made in p5.js to accompany and guide a piece of music about motherhood, written for piano, clarinet, flute, double bass and percussion.',
    es: 'Una animación hecha en p5.js, diseñada para acompañar y guiar una pieza musical sobre la maternidad, compuesta para piano, clarinete, flauta, contrabajo y percusión.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '2 people', es: '2 personas' },
    platform: { en: '', es: '' },
    format: { en: 'Animation for live musicians', es: 'Animación para músicxs en vivo' },
    status: { en: 'Premiered', es: 'Estrenada' },
    impact: { en: 'Performed live in Amsterdam and The Hague', es: 'Interpretada en vivo en Ámsterdam y La Haya' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Jimena Maldonado is a Mexican composer. For her piece The Room Holds Time, which portrays a day in her life raising her baby, she wanted an animation the musicians could play in sync with. I built it in p5.js: it follows the exact tempo of the piece and acts as a steady guide, showing each musician when to come in and how long each note lasts. It also sets the mood, accompanying the music with emotions expressed visually.',
    es: 'Jimena Maldonado es una compositora mexicana. Para su pieza The Room Holds Time, que retrata un día de su vida criando a su bebé, quería una animación que permitiera a lxs músicxs tocar en sincronía con ella. La desarrollé en p5.js: sigue el tempo exacto de la pieza y funciona como una guía estable para que cada músicx sepa cuándo entrar y cuánto dura cada nota. Además, aporta ambientación, acompañando la música con emociones expresadas de forma visual.',
  },
  highlights: [
    { type: 'decision', title: { en: 'Understanding the piece first', es: 'Primero, entender la pieza' }, text: { en: 'First and foremost, my role was to understand Jimena’s piece in depth and identify the emotional pillars it’s built on. I did extensive research to find technologies that would fit her budget. I designed the visuals, choosing a color palette and visual language that matched the music. Finally, I programmed the entire animation in p5.js.', es: 'Mi rol consistió, ante todo, en comprender a fondo la pieza de Jimena e identificar los pilares emocionales que la conforman. Hice una investigación exhaustiva para encontrar tecnologías que se ajustaran a su presupuesto. Diseñé la parte visual: elegí una paleta de colores y un lenguaje visual acordes con la música. Finalmente, programé toda la animación con p5.js.' } },
    { type: 'challenge', title: { en: 'Not a single glitch', es: 'Ni una sola interrupción' }, text: { en: 'The animation had to run without a single interruption, however brief. Because the piece is very long, p5.js occasionally showed glitches lasting a few milliseconds, so I solved it in post-production: I recorded the animation several times and assembled a final version from the sections that looked flawless.', es: 'Era fundamental que la animación corriera sin ninguna interrupción, por mínima que fuera. Como la pieza es muy larga, p5.js a veces presentaba glitches de unas milésimas de segundo, así que lo resolví en postproducción: grabé la animación varias veces y armé una versión final con las secciones que se veían impecables.' } },
  ],
  whatIDid: [
    { en: 'A **musical analysis** of the piece to fully understand its structure', es: '**Análisis musical** de la pieza para comprender a fondo su estructura' },
    { en: 'A **visual design** that reflects the narrative and **emotional weight** of the piece', es: '**Diseño visual** que refleja la narrativa y la **carga emocional** de la pieza' },
    { en: 'An **animation** that clearly shows the **tempo**, each instrument’s entrances and the length of every note', es: '**Animación** que muestra con claridad el **tempo**, las entradas de cada instrumento y la duración de cada nota' },
    { en: 'A high-resolution **final video**, projected while the piece is performed', es: '**Video final** en alta resolución, para proyectarse mientras se interpreta la pieza' },
  ],
  tech: ['p5.js'],                             // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    { name: 'Jimena Maldonado', role: { en: 'Music composition', es: 'Composición musical' } },
  ],
};
