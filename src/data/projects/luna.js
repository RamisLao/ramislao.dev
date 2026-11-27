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
  preview: 'preview.mp4',                   // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://youtu.be/s1uMM31Fz4U', caption: { en: 'A playthrough of the whole game', es: 'Una partida completa del juego' } },
    { src: 'screenshot_1.jpg', caption: { en: 'Fighting in the pit of the Eclipse Trial', es: 'Combate en el foso de la Prueba del Eclipse' } },
    { src: 'screenshot_2.jpg', caption: { en: 'Overview of the Eclipse Trial', es: 'Vista general de la Prueba del Eclipse' } },
    { src: 'screenshot_3.jpg', caption: { en: 'Escaping from a tank enemy in the Root Trial', es: 'Huyendo de un enemigo tanque en la Prueba de la Raíz' } },
    { src: 'screenshot_4.jpg', caption: { en: 'Waiting for an enemy to lose its armor in the Fervor Trial', es: 'Esperando a que un enemigo pierda su armadura en la Prueba del Fervor' } },
    { src: 'screenshot_5.jpg', caption: { en: 'Unlocking the Chakra Pulse skill', es: 'Desbloqueando la habilidad Chakra Pulse' } },
    { src: 'screenshot_6.jpg', caption: { en: 'Overview of the Heart Trial', es: 'Vista general de la Prueba del Corazón' } },
    { src: 'screenshot_7.jpg', caption: { en: 'Practicing the three-hit combo on training scarecrows', es: 'Practicando el combo de tres golpes con espantapájaros de entrenamiento' } },
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
  // pitch: ONE sentence, ~25 words: what the project is (your roles already show as chips above it)
  pitch: {
    en: 'A roguelike hack-and-slash where you play as Luna, a young Teuschen monk who must pass the Trial of the Gates to finally become a master.',
    es: 'Un hack and slash roguelike en el que juegas como Luna, una joven monja teuschen que debe superar la Prueba de las Puertas para convertirse, al fin, en maestra.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '10 people (6 core + 4 external)', es: '10 personas (6 del equipo base + 4 externas)' },
    platform: 'PC (Windows) · itch.io',
    format: { en: 'Roguelike hack-and-slash', es: 'Hack and slash roguelike' },
    status: { en: 'Released', es: 'Publicado' },
    impact: { en: 'Winner of the Best Final Project award at Vancouver Film School', es: 'Ganador del premio a Mejor Proyecto Final de Vancouver Film School' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Luna is an isometric 3D game. The Trial of the Gates is made up of four trials: Eclipse, Root, Fervor and Heart. Along the way, Luna faces waves of enemies and unlocks new skills to take on each one.\n\nWe developed it as our final project for Vancouver Film School’s Game Design program.',
    es: 'Luna es un juego isométrico en 3D. La Prueba de las Puertas se compone de cuatro pruebas: Eclipse, Raíz, Fervor y Corazón. En su camino, Luna se enfrenta a oleadas de enemigos y desbloquea nuevas habilidades para superar cada una.\n\nLo desarrollamos como proyecto final del programa de Diseño de Videojuegos de Vancouver Film School.',
  },
  highlights: [
    {
      type: 'challenge',
      title: { en: 'Four worlds in four months', es: 'Cuatro mundos en cuatro meses' },
      text: {
        en: 'Making such a varied game in just four months took a huge amount of coordination and teamwork: each level has its own visual identity and a unique mechanic. It was a demanding process, and the result was very rewarding.',
        es: 'Desarrollar un juego tan variado en solo cuatro meses requirió muchísima coordinación y trabajo en equipo: cada nivel tiene su propia identidad visual y una mecánica única. Fue un proceso exigente, con un resultado muy satisfactorio.',
      },
    },
  ],
  whatIDid: [
    { en: 'Built a tool for the design team to easily create new **enemy waves**', es: 'Creé una herramienta para que el equipo de diseño armara nuevas **oleadas de enemigos** fácilmente' },
    { en: 'Helped design and implemented the **AI** of every enemy', es: 'Colaboré en el diseño e implementé la **inteligencia artificial** de todos los enemigos' },
    { en: 'Programmed the **progression system**, to move between levels and unlock skills', es: 'Programé el **sistema de progreso**, para avanzar entre los niveles y desbloquear habilidades' },
    { en: 'Built a system of dynamic **win conditions** for each level, making it easy to iterate on the trials', es: 'Desarrollé un sistema de **condiciones de victoria** dinámicas para cada nivel, que facilitó iterar sobre las pruebas' },
    { en: 'Composed **all of the game’s music**', es: 'Compuse **la música** de todo el juego' },
    { en: '**Recorded and edited** the protagonist’s **voice**', es: '**Grabé y edité la voz** de la protagonista' },
  ],
  tech: ['Unity', 'C#'],                                    // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    // Core team
    { name: 'André Ruiz', role: { en: 'Project Manager / System Designer', es: 'Gestión del proyecto / Diseño de sistemas' } },
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
