export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'shutterbug-skies',                      // = this file's name, no spaces
  title: 'Shutterbug Skies: Idle Camping',
  type: 'videogame',                           // a key from taxonomy.js → projectTypes
  roles: ['producer', 'gameDesigner', 'programmer', 'artDirector', 'uxDesigner', ], // keys from taxonomy.js → roles
  start: 2026,
  end: null,                                   // null = ongoing ("Present") · leave commented for a single year
  palette: 'pop',                              // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: '/media/projects/shutterbug-skies/main.jpg', // card image, 16:9
  preview: 'about_2.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://www.youtube.com/watch?v=SOqJEuZyA6M', caption: { en: 'Gameplay trailer', es: 'Tráiler de gameplay' } },
    { src: 'about_1.mp4', caption: { en: 'Kes takes a little break to relax before looking for more bugs', es: 'Kes se toma un ratito para relajarse antes de seguir buscando insectos' } },
    { src: 'about_2.mp4', caption: { en: 'The photo minigame: shoot at just the right moment for the perfect picture', es: 'El minijuego de fotografía: dispara en el momento justo para lograr la foto perfecta' } },
    { src: 'about_3.mp4', caption: { en: 'Travel to 7 different floating islands', es: 'Viaja a 7 islas flotantes distintas' } },
    { src: 'about_4.mp4', caption: { en: 'Upgrade your camera gear in the online shop', es: 'Mejora tu equipo fotográfico en la tienda en línea' } },
    { src: 'about_5.mp4', caption: { en: 'Customize your camp and Kes’s outfit', es: 'Personaliza tu campamento y el atuendo de Kes' } },
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
  // pitch: ONE sentence, ~25 words: what the project is (your roles already show as chips above it)
  pitch: {
    en: 'A cozy desktop companion about photographing bugs and crustaceans while you work or relax.',
    es: 'Un desktop companion acogedor sobre fotografiar insectos y crustáceos mientras trabajas o descansas.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '6 people', es: '6 personas' },
    platform: 'PC · Steam',
    format: { en: 'Idle · Desktop Companion', es: 'Idle · Desktop Companion' },
    status: { en: 'In development', es: 'En desarrollo' },
    impact: { en: '', es: '' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Shutterbug Skies is a cozy idler, specifically a desktop companion: a game that keeps you company from a corner of your screen while you use your computer. You travel to floating islands to photograph bugs and crustaceans, and you can sell, collect or publicly display your photos.\n\nThe money you earn lets you upgrade your camera gear, unlocking new lenses and cameras to find rarer, more elusive bugs. You can also customize your camp to match your personality, with tents, cooking stations and outfits.\n\nThere are 7 islands, each with its own unique bugs, and more than 175 bugs to discover. It’s a perfect game to relax with, featuring nature sounds and a wide range of calm music you can choose to accompany your adventure.',
    es: 'Shutterbug Skies es un cozy idler, en concreto un desktop companion: un juego que te acompaña desde una esquina de la pantalla mientras usas la computadora. Viajas a islas flotantes para fotografiar insectos y crustáceos, y puedes vender, coleccionar o exhibir públicamente tus fotos.\n\nCon el dinero que ganas mejoras tu equipo fotográfico y desbloqueas nuevos lentes y cámaras para encontrar insectos más raros y escurridizos. También puedes personalizar tu campamento a tu gusto, con casas de campaña, estaciones de cocina y atuendos.\n\nHay 7 islas, cada una con insectos únicos, y más de 175 insectos por descubrir. Es un juego perfecto para relajarse, con sonidos de la naturaleza y una gran variedad de música tranquila que puedes elegir para acompañar tu aventura.',
  },
  highlights: [
    { type: 'decision', title: { en: 'A niche that fit us', es: 'Un nicho a nuestra medida' }, text: { en: 'We chose to make a cozy idler after extensive market research, to find the right niche on Steam that we could also develop in 12 months at most.', es: 'Elegimos hacer un cozy idler después de una investigación de mercado extensa, para encontrar un nicho adecuado en Steam que además pudiéramos desarrollar en 12 meses como máximo.' } },
    { type: 'decision', title: { en: 'Pixel-perfect, corner-sized', es: 'Pixel perfect y a la medida de una esquina' }, text: { en: 'Our art is pixel-perfect, so it can only scale by whole multiples of its base resolution. Since a desktop companion has to sit comfortably in a corner of the screen, we chose a 240 × 144 px base, which gives us 2 comfortable sizes.', es: 'Nuestro arte es pixel perfect, así que solo puede escalarse en múltiplos enteros de su resolución base. Como un desktop companion debe caber cómodamente en una esquina de la pantalla, elegimos una base de 240 × 144 px, que nos da 2 tamaños muy cómodos.' } },
    { type: 'challenge', title: { en: 'No two photos alike', es: 'Que ninguna foto se repita' }, text: { en: 'In a game about taking photos, the photos need to be very varied. We built a system that crops a random section of a background image much larger than the photo. Add the varying focus and position of each bug, and more than 175 bugs, and the same photo almost never happens twice.', es: 'En un juego sobre tomar fotos, es clave que las fotos sean muy variadas. Creamos un sistema que toma una sección al azar de una imagen de fondo mucho más grande que la foto. Si a eso le sumas el enfoque y la posición variables de cada insecto, y más de 175 insectos, es casi imposible que una foto se repita.' } },
    { type: 'result', title: { en: 'Selected for Game Conference MX', es: 'Seleccionados para Game Conference MX' }, text: { en: 'We were selected to take part in Game Conference MX in Guadalajara, sponsored by Unity.', es: 'Nos seleccionaron para participar en Game Conference MX, en Guadalajara, con el patrocinio de Unity.' } },
  ],
  whatIDid: [
    { en: '**Managing a team of 6**: planning sprints and setting priorities', es: '**Gestiono un equipo de 6 personas**: planeo los sprints y defino prioridades' },
    { en: '**Game design** with Rafa: mechanics, progression and economy', es: '**Diseño el juego** junto con Rafa: mecánicas, progresión y economía' },
    { en: '**Systems programming** on a solid, flexible **architecture** that’s easy to iterate on', es: '**Programo los sistemas** sobre una **arquitectura** sólida y flexible, fácil de iterar' },
    { en: 'The **core systems**: saving, game states, an economy editable from Google Sheets and the item shop', es: 'Implementé los **sistemas base**: guardado, estados del juego, economía editable desde Google Sheets y tienda de ítems' },
    { en: 'The **photo minigame** and the system that makes **every photo unique**', es: 'Diseñé el **minijuego de fotografía** y el sistema que hace **única cada foto**' },
    { en: '**Lead UI/UX design**: most of the screens, and Juan’s art implemented in Unity', es: '**Lidero el diseño UI/UX**: diseñé la mayoría de las pantallas e implementé en Unity el arte de Juan' },
    { en: '**Art direction**: visual style, palette, shape language, typography and feedback on Juan’s work', es: '**Dirijo el arte**: estilo visual, paleta, lenguaje de formas, tipografías y retroalimentación a Juan' },
  ],
  tech: ['Unity', 'C#', 'Google Sheets', 'Aseprite'], // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    { name: 'Juan Téllez', role: { en: 'Art', es: 'Arte' } },
    { name: 'Rafa Arias', role: { en: 'Game design, programming, audio & music', es: 'Diseño de juego, programación, audio y música' } },
    { name: 'Rito Rifelli', role: { en: 'Steam art', es: 'Arte para Steam' } },
  ],
};
