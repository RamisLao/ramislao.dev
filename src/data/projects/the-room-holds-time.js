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
    {
      type: 'decision',
      title: { en: 'A procedural animation', es: 'Una animación procedural' },
      text: {
        en: 'The animation is generated procedurally. Since it had to work as a precise guide for every note, animating it by hand would have taken far too long. Instead, I generated a JSON file with the start and end times of each note and used p5.js to build the animations in real time from that data.',
        es: 'La animación se genera de forma procedural. Como debía funcionar como una guía precisa para cada nota, animarla a mano habría tomado demasiado tiempo. Por eso generé un archivo JSON con los tiempos de inicio y fin de cada nota y, con p5.js, creé las animaciones en tiempo real a partir de esos datos.',
      },
    },
    {
      type: 'challenge',
      title: { en: 'Glitches at 4K', es: 'Glitches en 4K' },
      text: {
        en: 'The animation needed a very high resolution (at least 4K) to be projected large behind the musicians. At that resolution, a few glitches appeared when recording it to video, so I recorded it several times and assembled the final video from the parts of each take that looked flawless.',
        es: 'La animación necesitaba una resolución muy alta (al menos 4K) para proyectarse en gran tamaño detrás de lxs músicxs. A esa resolución aparecían algunos glitches al grabarla en video, así que la grabé varias veces y armé el video final con los fragmentos de cada grabación que se veían impecables.',
      },
    },
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
