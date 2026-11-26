export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'luna',                                  // = this file's name, no spaces
  title: 'Luna',
  type: 'videogame',                           // a key from taxonomy.js → projectTypes
  roles: ['programmer', 'music'],              // keys from taxonomy.js → roles
  start: 2021,
  end: 2022,                                   // null = ongoing ("Present") · leave commented for a single year
  palette: 'primary',                            // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: 'main.png',                        // card image, 16:9
  // preview: 'clip.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://youtu.be/s1uMM31Fz4U', caption: { en: 'A playthrough of the whole game', es: 'Una partida completa del juego' } },
    { src: 'screenshot_1.png', caption: { en: 'Luna’s spin attack, in the red-earth level', es: 'El ataque giratorio de Luna, en el nivel de tierra roja' } },
    { src: 'screenshot_2.png', caption: { en: 'Luna fires an energy beam at enemies in the desert arena', es: 'Luna lanza un rayo de energía contra los enemigos en la arena del desierto' } },
    { src: 'screenshot_3.png', caption: { en: 'Unlocking a new skill, Chakra Pulse, in the snow level', es: 'Luna desbloquea una nueva habilidad, Chakra Pulse, en el nivel de nieve' } },
    { src: 'screenshot_4.png', caption: { en: 'Luna next to a rock formation with glowing red orbs, in the frozen level', es: 'Luna junto a una formación de rocas con orbes rojos brillantes, en el nivel helado' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Vancouver Film School', url: 'https://vfs.edu/', label: { en: 'School', es: 'Escuela' } }, // type: studio · startup · company · collective · freelance · independent
  // client: { name: '…', url: 'https://…' },  // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  itch: 'https://vfs-gdpg.itch.io/luna',
  links: [
    // { label: { en: '…', es: '…' }, url: 'https://…' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what it is + what you did
  pitch: {
    en: 'An isometric 3D hack-and-slash that won Vancouver Film School’s Best Final Project award. I programmed most of its systems and composed all of its music.',
    es: 'Un hack and slash isométrico en 3D, ganador del premio a Mejor Proyecto Final de Vancouver Film School. Programé la mayoría de sus sistemas y compuse toda su música.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '10 people (6 core + 4 external)', es: '10 personas (6 de base + 4 externas)' },
    platform: 'PC (Windows) · itch.io',
    format: { en: 'Isometric 3D hack-and-slash · 3 months', es: 'Hack and slash isométrico en 3D · 3 meses' },
    status: { en: 'Released', es: 'Publicado' },
    impact: { en: 'Winner of the Best Final Project award at Vancouver Film School', es: 'Ganador del premio a Mejor Proyecto Final de Vancouver Film School' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Luna is an isometric 3D hack-and-slash about a young Patagonian monk named Luna, who must prove herself by passing the sacred Trial of the Gates to become a master. The game has 4 levels, each with its own visual identity and mechanic.\n\nWe developed it in just 3 months as our final project for Vancouver Film School’s Game Design program, and it won the Best Final Project award. The core team had 6 people, plus 4 external collaborators.',
    es: 'Luna es un hack and slash isométrico en 3D sobre una joven monja patagónica llamada Luna, que debe demostrar su valía superando la sagrada Prueba de las Puertas para convertirse en maestra. El juego tiene 4 niveles, cada uno con su propia identidad visual y su propia mecánica.\n\nLo desarrollamos en solo 3 meses como proyecto final del programa de Diseño de Videojuegos de Vancouver Film School, y ganó el premio a Mejor Proyecto Final. El equipo base fue de 6 personas, más 4 colaboradorxs externxs.',
  },
  highlights: [
    { type: 'decision', title: { en: '', es: '' }, text: { en: 'My main role was programmer: I implemented most of the game’s systems and gameplay. Because development was so fast-paced, much of my work went into building tools that let the game designers iterate on their ideas quickly.', es: 'Mi rol principal fue el de programadorx: implementé la mayoría de los sistemas y del gameplay. Como el desarrollo fue muy acelerado, buena parte de mi trabajo consistió en crear herramientas para que el equipo de diseño pudiera iterar sus ideas con rapidez.' } },
    { type: 'decision', title: { en: '', es: '' }, text: { en: 'I also composed all of the game’s music, and recorded and edited the voice of its protagonist.', es: 'También compuse toda la música del juego, y grabé y edité la voz de la protagonista.' } },
    { type: 'challenge', title: { en: '', es: '' }, text: { en: 'Developing such a varied game in just 3 months was a big challenge. It took a huge amount of coordination and teamwork.', es: 'Fue un gran reto desarrollar un juego tan variado en solo 3 meses. Requirió muchísima coordinación y trabajo en equipo.' } },
  ],
  whatIDid: [
    { en: 'The progression system that moves you through the game', es: 'Implementé el sistema de progreso que te permite avanzar en el juego' },
    { en: 'A tool for designers to create new enemy waves easily', es: 'Implementé una herramienta para que el equipo de diseño creara nuevas oleadas de enemigos fácilmente' },
    { en: 'The AI for every enemy', es: 'Implementé la inteligencia artificial de todos los enemigos' },
    { en: 'The system that defines the win conditions of each level', es: 'Implementé el sistema que define las condiciones para ganar cada nivel' },
    { en: 'All of the game’s music', es: 'Compuse la música de todo el juego' },
    { en: 'The recording and editing of the protagonist’s voice', es: 'Grabé y edité la voz de la protagonista' },
  ],
  tech: ['Unity', "C#"],                                    // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    // Core team
    { name: 'Andre Ruiz', role: { en: 'Project Manager / System Designer', es: 'Gestión del proyecto / Diseño de sistemas' } },
    { name: 'Santiago Bañuelos', role: { en: 'Character Artist / Animator', es: 'Arte de personajes / Animación' } },
    { name: 'David Klassen', role: { en: 'Programmer / Level Designer', es: 'Programación / Diseño de niveles' } },
    { name: 'Yoshimaro Ikeguchi', role: { en: 'Technical Artist / Level Designer', es: 'Arte técnico / Diseño de niveles' } },
    { name: 'Jimena Fernández', role: { en: 'Concept Artist / Environment Artist', es: 'Arte conceptual / Arte de entornos' } },
    // External collaborators
    { name: 'Octavio Baltazar', role: { en: 'Sound', es: 'Sonido' } },
    { name: 'Francisco Lara', role: { en: 'Sound', es: 'Sonido' } },
    { name: 'Mariana C.R. de Souza', role: { en: 'Voice actress', es: 'Actriz de voz' } },
    { name: 'Maria del Carmen Martinez Lopez', role: { en: 'Voice actress', es: 'Actriz de voz' } },
  ],
};
