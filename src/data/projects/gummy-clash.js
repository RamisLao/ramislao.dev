export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'gummy-clash',                           // = this file's name, no spaces
  title: 'Gummy Clash',
  type: 'videogame',                           // a key from taxonomy.js → projectTypes
  roles: ['programmer', 'music'],              // keys from taxonomy.js → roles
  start: 2021,
  // end: 2022,                                // null = ongoing ("Present") · leave commented for a single year
  palette: 'soft',                            // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: 'main.jpg',                        // card image, 16:9
  // preview: 'clip.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://youtu.be/l6F9ZjVlYG0', caption: { en: 'A full playthrough', es: 'Una partida completa' } },
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
  // pitch: ONE sentence, ~25 words: what it is + what you did
  pitch: {
    en: 'A local multiplayer 3D arena game where ragdoll gummies fight over berries on stages that change shape in real time. I programmed most of its systems and composed its music.',
    es: 'Un juego de arena en 3D, multijugador local, en el que gomitas con físicas de ragdoll se disputan bayas en escenarios que cambian de forma en tiempo real. Programé la mayoría de sus sistemas y compuse su música.',
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
    en: 'Gummy Clash is a 3D multiplayer arena platformer in which wobbly ragdoll gummy characters compete on a stage that changes shape in real time, racing to collect the most berries.\n\nIt’s a local multiplayer game for 2 to 4 players, using controllers or keyboards. To win, you have to eat more berries than your opponents, and candies give you power-ups to steal berries from the other players.',
    es: 'Gummy Clash es un juego de plataformas y arena en 3D, multijugador, en el que personajes de gomita con físicas de ragdoll compiten en un escenario que cambia de forma en tiempo real para recolectar la mayor cantidad de bayas.\n\nEs un juego multijugador local para 2 a 4 personas, con controles o teclados. Para ganar hay que comer más bayas que tus rivales, y los dulces dan poderes especiales para robarles bayas a los demás.',
  },
  highlights: [
    { type: 'decision', title: { en: '', es: '' }, text: { en: 'My main role was programmer: I implemented most of the game’s systems. One of the most interesting is the levels, which transform in real time, changing their shape and height. I designed and built a tool to create these levels from Google Sheets, so the designers could quickly put together different level layouts and test them in the game. I also implemented local multiplayer, the characters’ ragdoll physics, and the pickups that give you points and special powers.', es: 'Mi rol principal fue el de programadorx: implementé la mayoría de los sistemas del juego. Uno de los más interesantes es el de los niveles, que se transforman en tiempo real cambiando de forma y de altura. Diseñé e implementé una herramienta para crear esos niveles desde Google Sheets, para que el equipo de diseño pudiera armar rápidamente distintas estructuras y probarlas en el juego. También implementé el multijugador local, las físicas de ragdoll de los personajes y los objetos que se recogen para sumar puntos y obtener poderes especiales.' } },
    { type: 'decision', title: { en: '', es: '' }, text: { en: 'I also composed all of the game’s music and implemented its audio.', es: 'Además, compuse toda la música del juego e implementé el audio.' } },
    { type: 'challenge', title: { en: '', es: '' }, text: { en: 'None of us had built a ragdoll system before, so getting the effect we wanted took a huge amount of trial and error.', es: 'No teníamos experiencia con sistemas de ragdoll, así que lograr el efecto que buscábamos requirió muchísima prueba y error.' } },
  ],
  whatIDid: [
    { en: 'Most of the game’s systems, in Unity', es: 'Implementé la mayoría de los sistemas del juego en Unity' },
    { en: 'A system that morphs one level into another in real time', es: 'Implementé un sistema que transforma un nivel en otro en tiempo real' },
    { en: 'A tool for building levels from a Google Sheets spreadsheet', es: 'Creé una herramienta para construir niveles desde una hoja de cálculo de Google Sheets' },
    { en: 'The characters’ ragdoll physics', es: 'Implementé las físicas de ragdoll de los personajes' },
    { en: 'Local multiplayer', es: 'Implementé el multijugador local' },
    { en: 'The scoring system, and the special powers you get by collecting candies', es: 'Implementé el sistema de puntos y los poderes especiales que se obtienen al recoger dulces' },
    { en: 'All of the game’s music', es: 'Compuse toda la música del juego' },
    { en: 'The audio implementation', es: 'Implementé el audio' },
  ],
  tech: ['Unity', 'C#', 'Google Sheets'],                                    // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    { name: 'Andre Ruiz', role: { en: 'Project Manager / System Designer', es: 'Gestión del proyecto / Diseño de sistemas' } },
    { name: 'Yoshimaro Ikeguchi', role: { en: 'Technical Artist / Level Designer', es: 'Arte técnico / Diseño de niveles' } },
    { name: 'Jimena Fernández', role: { en: 'Character Artist / Environment Artist', es: 'Arte de personajes / Arte de entornos' } },
  ],
};
