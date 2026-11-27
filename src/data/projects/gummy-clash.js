export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'gummy-clash',                           // = this file's name, no spaces
  title: 'Gummy Clash',
  type: 'videogame',                           // a key from taxonomy.js → projectTypes
  roles: ['programmer', 'gameDesigner', 'music'],              // keys from taxonomy.js → roles
  start: 2021,
  // end: 2022,                                // null = ongoing ("Present") · leave commented for a single year
  palette: 'soft',                            // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: 'main.jpg',                        // card image, 16:9
  preview: 'preview.mp4',                   // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://youtu.be/l6F9ZjVlYG0', caption: { en: 'A full playthrough', es: 'Una partida completa' } },
    { src: 'screenshot_1.jpg', caption: { en: 'The starting hub, which doubles as a tutorial', es: 'El hub inicial, que también funciona como tutorial' } },
    { src: 'screenshot_2.jpg', caption: { en: 'The start of a battle', es: 'El inicio de una batalla' } },
    { src: 'screenshot_3.jpg', caption: { en: 'A character in “rage” mode, which lets them steal berries from the others', es: 'Uno de los personajes en modo “rage”, con el que puede robarles bayas a otrxs' } },
    { src: 'screenshot_4.jpg', caption: { en: 'A level mid-transformation', es: 'Un nivel en plena transformación' } },
    { src: 'screenshot_5.jpg', caption: { en: 'The crown you have to grab to end the battle', es: 'La corona que hay que recoger para terminar la batalla' } },
    { src: 'screenshot_6.jpg', caption: { en: 'A level with a lava floor that makes you lose berries', es: 'Un nivel con piso de lava, que te hace perder bayas' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Vancouver Film School', url: 'https://vfs.edu/', label: { en: 'School', es: 'Escuela' } }, // who/how you made it · type: studio · startup · company · collective · freelance · independent
  // client: { name: '…', url: 'https://…' },  // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  itch: 'https://ramislao.itch.io/gummy-clash',
  links: [
    // { label: { en: '…', es: '…' }, url: 'https://…' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what the project is (your roles already show as chips above it)
  pitch: {
    en: 'A local multiplayer 3D arena game where ragdoll gummies fight over berries on stages that change shape in real time.',
    es: 'Un juego de arena en 3D, multijugador local, en el que gomitas con físicas de ragdoll se disputan bayas en escenarios que cambian de forma en tiempo real.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '4 people', es: '4 personas' },
    platform: 'PC (Windows) · itch.io',
    format: { en: '3D arena platformer · local multiplayer for 2–4', es: 'Plataformas y arena en 3D · multijugador local de 2 a 4' },
    status: { en: 'Released', es: 'Publicado' },
    impact: { en: '', es: '' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'In Gummy Clash, every match is a race to eat more berries than your rivals. You can play with controllers or keyboards, and the candies scattered around the stage give you special powers to steal berries from the other players.',
    es: 'En Gummy Clash, cada partida es una carrera por comer más bayas que tus rivales. Se juega con controles o teclados, y los dulces que aparecen en el escenario dan poderes especiales para robarles bayas a lxs demás.',
  },
  highlights: [
    {
      type: 'challenge',
      title: { en: 'Morphing levels', es: 'Niveles que se transforman' },
      text: {
        en: 'The biggest and most interesting challenge was building the system that morphs one level into another. The transition had to feel natural, look delicious and not interfere with the game’s physics. I made the tiles shared by the current level and the next one stay in place, and only the different ones transform, so the game keeps a certain stability while you play.',
        es: 'El reto más grande e interesante fue implementar el sistema que transforma un nivel en otro. La transición debía sentirse natural, ser deliciosa a la vista y no interferir con la física del juego. Lo resolví haciendo que los tiles que comparten el nivel actual y el siguiente permanezcan en su lugar y solo se transformen los distintos; así, el juego conserva cierta estabilidad mientras juegas.',
      },
    },
    {
      type: 'decision',
      title: { en: 'Ragdoll chaos', es: 'El caos del ragdoll' },
      text: {
        en: 'We wanted a game that was really fun and absurd. That’s why we chose ragdoll physics, which add a certain amount of randomness to movements and attacks.',
        es: 'Queríamos que el juego fuera muy divertido y absurdo. Por eso decidimos usar físicas de ragdoll, que añaden cierto grado de aleatoriedad a los movimientos y los ataques.',
      },
    },
    {
      type: 'decision',
      title: { en: 'Levels from a spreadsheet', es: 'Niveles desde una hoja de cálculo' },
      text: {
        en: 'It was very important to make designing and testing new levels super easy, so we could iterate quickly. So I built a system to create the levels in Google Sheets and then simply test them in Unity.',
        es: 'Era muy importante que diseñar y probar niveles nuevos fuera súper fácil, para iterar rápidamente. Por eso creé un sistema para diseñar los niveles en Google Sheets y después solo probarlos en Unity.',
      },
    },
  ],
  whatIDid: [
    { en: 'Programmed **most of the game’s systems** in **Unity**', es: 'Programé **la mayoría de los sistemas** del juego en **Unity**' },
    { en: 'Built a system that **morphs one level into another** in real time', es: 'Desarrollé un sistema que **transforma un nivel en otro** en tiempo real' },
    { en: 'Created a **level-building tool** driven by **Google Sheets**', es: 'Creé una **herramienta para construir niveles** desde una hoja de cálculo de **Google Sheets**' },
    { en: 'Implemented the characters’ **ragdoll physics**', es: 'Implementé las **físicas de ragdoll** de los personajes' },
    { en: 'Programmed the **local multiplayer**', es: 'Programé el **multijugador local**' },
    { en: 'Implemented the **scoring system** and the **special powers** you get by collecting candies', es: 'Implementé el **sistema de puntos** y los **poderes especiales** que se obtienen al recoger dulces' },
    { en: 'Programmed the special **physical effects** of each **floor type**', es: 'Programé los **efectos físicos** especiales de cada **tipo de suelo**' },
    { en: 'Composed **all of the game’s music**', es: 'Compuse **toda la música** del juego' },
    { en: 'Integrated the **audio** into the game', es: 'Integré el **audio** en el juego' },
  ],
  tech: ['Unity', 'C#', 'Google Sheets'],                                    // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    { name: 'André Ruiz', role: { en: 'Project Manager / System Designer', es: 'Gestión del proyecto / Diseño de sistemas' } },
    { name: 'Yoshimaro Ikeguchi', role: { en: 'Technical Artist / Level Designer', es: 'Arte técnico / Diseño de niveles' } },
    { name: 'Jimena Fernández', role: { en: 'Character Artist / Environment Artist', es: 'Arte de personajes / Arte de entornos' } },
  ],
};
