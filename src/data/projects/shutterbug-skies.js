export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'shutterbug-skies',                      // = this file's name, no spaces
  title: 'Shutterbug Skies',
  type: 'videogame',                           // a key from taxonomy.js → projectTypes
  roles: ['producer', 'artDirector', 'programmer', 'uxDesigner', 'gameDesigner'], // keys from taxonomy.js → roles
  start: 2026,
  end: null,                                   // null = ongoing ("Present") · leave commented for a single year
  palette: 'pop',                              // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: '/media/projects/shutterbug-skies/main.jpg', // card image, 16:9
  // preview: 'clip.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://www.youtube.com/watch?v=SOqJEuZyA6M', caption: { en: 'Gameplay trailer', es: 'Tráiler de gameplay' } },
    { src: 'about_1.mp4', caption: { en: 'Kes explores the camp in real time while the in-game clock runs', es: 'Kes explora el campamento en tiempo real mientras avanza el reloj del juego' } },
    { src: 'about_2.mp4', caption: { en: 'The photography minigame: snap at the right moment to discover a new bug', es: 'El minijuego de fotografía: dispara en el momento justo para descubrir un nuevo insecto' } },
    { src: 'about_3.mp4', caption: { en: 'Unlocking new islands on the map, like the Coast', es: 'El desbloqueo de nuevas islas en el mapa, como la Costa' } },
    { src: 'about_4.mp4', caption: { en: 'The shop: cameras, film cartridges and lenses', es: 'La tienda: cámaras, cartuchos de película y lentes' } },
    { src: 'about_5.mp4', caption: { en: 'Customizing the tent and Kes’s outfit', es: 'La personalización de la casa de campaña y del atuendo de Kes' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Crafted Mayhem', url: 'https://www.craftedmayhem.studio/', type: 'studio' }, // type: studio · startup · company · collective · freelance · independent
  // client: { name: '…', url: 'https://…' },  // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  steam: 'https://store.steampowered.com/app/5523830/Shutterbug_Skies_Idle_Camping/',
  // itch: 'https://….itch.io/…',
  links: [
    // { label: { en: '…', es: '…' }, url: 'https://…' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what it is + what you did
  pitch: {
    en: 'A cozy desktop idle game about photographing bugs. I produce, program and design it, and lead its art direction, at the studio I co-founded.',
    es: 'Un idle acogedor de escritorio sobre fotografiar insectos. Lo produzco, programo y diseño, y llevo su dirección de arte, en el estudio que cofundé.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '3 people', es: '3 personas' },
    platform: 'PC · Steam',
    format: { en: 'Idle game · ~80 hours to 100%', es: 'Idle · ~80 horas para el 100%' },
    status: { en: 'In development', es: 'En desarrollo' },
    impact: { en: '', es: '' },
  },

  // ── Texts (folded in the sheet) · new paragraph = \n\n ──
  description: {
    en: 'A cozy corner idler built to be your daily desktop companion. Help Kes search for and photograph beautiful bugs while you work, study or relax. Upgrade your camera gear, complete your creature collection and discover 7 unique floating islands!',
    es: 'Un idle acogedor que vive en una esquina de tu pantalla, pensado para ser tu compañero de escritorio de todos los días. Ayuda a Kes a buscar y fotografiar insectos preciosos mientras trabajas, estudias o descansas. Mejora tu equipo fotográfico, completa tu colección de criaturas y ¡descubre 7 islas flotantes únicas!',
  },
  roleDetails: {
    en: 'As producer, I manage the project: I assign tasks to the whole team and make sure the game’s overall vision stays on track.\n\nAs art director, I defined the project’s visual direction, create some of the assets myself and give feedback to Juan, our artist, on every asset.\n\nAs programmer, I built all of the game’s core systems, along with tools that streamline the development process.\n\nAs designer, I handle UI/UX and game design: together with Rafa, I created the core mechanics and the economy.',
    es: 'Como productorx, gestiono el proyecto: asigno las tareas a todo el equipo y me aseguro de que se mantenga la visión general del juego.\n\nComo directorx de arte, definí la dirección visual del proyecto, creo algunos de los assets y doy retroalimentación a Juan, nuestro artista, sobre cada uno de ellos.\n\nComo programadorx, desarrollé todos los sistemas principales del juego, además de herramientas que agilizan el proceso de desarrollo.\n\nComo diseñadorx, me encargo del diseño de UI/UX y del diseño de juego: junto con Rafa, creé las mecánicas principales y la economía.',
  },
  whatIDid: [
    { en: 'An internal tool for saving game progress to disk', es: 'Una herramienta interna para guardar la partida en disco' },
    { en: 'A tool that generates Scriptable Objects from a Google Sheets spreadsheet', es: 'Una herramienta que genera Scriptable Objects a partir de una hoja de cálculo de Google Sheets' },
    { en: 'The design and implementation of the entire UI, using Juan’s art', es: 'El diseño y la implementación de toda la interfaz, con el arte de Juan' },
    { en: 'The full in-game economy and shop system', es: 'Toda la economía del juego y el sistema de tienda' },
    { en: 'The photography minigame, plus the systems for taking, selling and displaying photos', es: 'El minijuego de fotografía, junto con los sistemas para tomar, vender y exhibir fotos' },
    { en: 'The state machine that handles scene transitions and saving and loading data', es: 'La máquina de estados que gestiona los cambios de escena y el guardado y la carga de datos' },
    { en: 'The system that creates the game’s borderless, transparent, dynamic window', es: 'El sistema que crea la ventana del juego: sin bordes, transparente y dinámica' },
  ],
  tech: ['Unity', 'C#', 'Google Sheets', 'Aseprite'], // chips, e.g. ['Unity', 'C#', 'Blender']
  challenges: [
    {
      en: 'Designing an economy that stays engaging across the roughly 80 hours it takes to 100% this idle game.',
      es: 'Diseñar una economía que se mantenga entretenida durante las cerca de 80 horas que toma completar este idle al 100%.',
    },
  ],
  credits: [
    { name: 'Juan Téllez', role: { en: 'Art', es: 'Arte' } },
    { name: 'Rafa Arias', role: { en: 'Game design, programming, audio & music', es: 'Diseño de juego, programación, audio y música' } },
    { name: 'Rito Rifelli', role: { en: 'Steam Art', es: '' } },
  ],
};
