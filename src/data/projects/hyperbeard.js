export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'hyperbeard',                            // = this file's name, no spaces
  title: 'Hyper Cheats',
  type: 'webapp',                              // a key from taxonomy.js → projectTypes
  roles: ['programmer', 'uxDesigner'],           // keys from taxonomy.js → roles
  start: 2023,
  end: 2024,                                   // null = ongoing ("Present") · leave commented for a single year
  palette: 'deep',                             // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: '/media/projects/hyperbeard/main.jpg', // card image, 16:9
  preview: 'preview.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://youtu.be/jg1zoCG5wBg', caption: { en: 'A demo of the app', es: 'Demo de la aplicación' } },
    { src: '/media/projects/hyperbeard/screenshot_1.png', caption: { en: 'Creating a group, with its own color and icon', es: 'La creación de un grupo, con su propio color e ícono' } },
    { src: '/media/projects/hyperbeard/screenshot_2.png', caption: { en: 'The user list, with filters for name, role and group', es: 'La lista de usuarios, con filtros por nombre, rol y grupo' } },
    { src: '/media/projects/hyperbeard/screenshot_3.png', caption: { en: 'Creating a partial snapshot for a specific version of a game', es: 'La creación de un snapshot parcial para una versión específica de un juego' } },
    { src: '/media/projects/hyperbeard/screenshot_4.png', caption: { en: 'Editing a code batch and choosing which groups can access it', es: 'La edición de un code batch y la elección de los grupos que tienen acceso a él' } },
    { src: '/media/projects/hyperbeard/screenshot_5.png', caption: { en: 'Variables registered in the game, ready to use in code batches', es: 'Variables dadas de alta en el juego, listas para usarse en code batches' } },
    { src: '/media/projects/hyperbeard/screenshot_6.png', caption: { en: 'The code batch editor: choosing which game variables a code changes', es: 'El editor de code batches: la elección de las variables del juego que modifica un código' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Hyperbeard Games', url: 'https://hyperbeard.com/', type: 'studio' }, // type: studio · startup · company · collective · freelance · independent
  // client: { name: '…', url: 'https://…' },  // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  // itch: 'https://….itch.io/…',
  links: [
    // { label: { en: '…', es: '…' }, url: 'https://…' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what the project is (your roles already show as chips above it)
  pitch: {
    en: 'An internal web platform, built from scratch, that let Hyperbeard’s team debug its games and send rewards to players.',
    es: 'Una plataforma web interna, desarrollada desde cero, para que el equipo de Hyperbeard depurara sus juegos y enviara recompensas a los jugadores.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '3 people', es: '3 personas' },
    platform: { en: 'Web app + Unity tools', es: 'App web + herramientas en Unity' },
    format: { en: 'Internal tool for QA and live ops', es: 'Herramienta interna para QA y live ops' },
    status: { en: 'Live', es: 'En línea' },
    impact: { en: 'Used to manage all of Hyperbeard’s games', es: 'Se usa para gestionar todos los juegos de Hyperbeard' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Hyper Cheats is a web app I developed for Hyperbeard, a Mexican video game studio. We designed it to make some of the tools the studio uses to test and debug its games far more accessible and flexible, along with the reward system it uses to give players gift codes.\n\nThe app lets you create users and groups, each with different access levels. Users can also register the devices they are currently using, and the app only grants access to registered, valid devices.\n\nFrom Unity, each game can register debugging functions that the platform makes available to users. With them, users create code batches: codes that trigger a chain of debugging functions. The QA team uses them for testing, and they also serve to give rewards to players.\n\nFinally, the platform manages snapshots ("photographs" of a game\'s state at a specific moment) and macros (sequences of moves and actions a player performs in a game). Both make debugging Hyperbeard\'s games easier.',
    es: 'Hyper Cheats es una aplicación web que desarrollé para Hyperbeard, un estudio mexicano de videojuegos. La diseñamos para que algunas de las herramientas que el estudio usa para probar y depurar sus juegos fueran mucho más accesibles y flexibles, al igual que el sistema de recompensas con el que entrega códigos de regalo a sus jugadores.\n\nEn la aplicación se pueden crear usuarios y grupos, cada uno con distintos niveles de acceso. Los usuarios también pueden registrar los dispositivos que estén usando en ese momento, y la aplicación solo da acceso a dispositivos registrados y válidos.\n\nDesde Unity, cada juego puede registrar funciones de depuración que la plataforma pone a disposición de los usuarios. Con ellas se crean code batches: códigos que disparan una cadena de funciones de depuración. El equipo de QA los usa en sus pruebas, y también sirven para dar recompensas a los jugadores.\n\nPor último, la plataforma permite gestionar snapshots ("fotografías" del estado de un juego en un momento específico) y macros (secuencias de movimientos y acciones que realiza un jugador dentro del juego). Ambas herramientas facilitan la depuración de los juegos de Hyperbeard.',
  },
  highlights: [
    {
      type: 'challenge',
      title: { en: 'Total flexibility', es: 'Flexibilidad total' },
      text: {
        en: 'Code batches had to be completely flexible, so anyone could put one together without a programmer around. That called for a complex database design and some very clever queries.',
        es: 'Los code batches debían ser totalmente flexibles, para que cualquiera pudiera armarlos sin tener cerca a unx programadorx. Esto exigió un diseño complejo de la base de datos y consultas muy ingeniosas.',
      },
    },
    {
      type: 'result',
      title: { en: 'In use across the studio', es: 'En uso en todo el estudio' },
      text: {
        en: 'Hyperbeard still uses the tool to manage all of its games, which makes debugging and development easier.',
        es: 'Hyperbeard sigue usando la herramienta para gestionar todos sus juegos, lo que facilita su depuración y desarrollo.',
      },
    },
  ],
  whatIDid: [
    { en: 'The **Node.js backend**, including every **database query**', es: 'El **backend en Node.js**, incluidas todas las **consultas a la base de datos**' },
    { en: 'The **UI/UX design** of most of the screens', es: 'El **diseño de UI/UX** de la mayoría de las vistas' },
    { en: 'The **entire frontend**, built with **React.js**', es: '**Todo el frontend**, desarrollado con **React.js**' },
    { en: 'Changes to the **Unity tools** so they work smoothly with the **web app**', es: 'Modificaciones a las **herramientas de Unity** para que funcionaran de forma fluida con la **aplicación web**' },
  ],
  tech: ['React.js', 'Node.js', 'Unity', 'MySQL'], // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    { name: 'Alison', role: { en: 'UI/UX design', es: 'Diseño de UI/UX' } },
    { name: 'Héctor', role: { en: 'Unity programming, database management', es: 'Programación en Unity, gestión de bases de datos' } },
  ],
};
