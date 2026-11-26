export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'party-demon',                           // = this file's name, no spaces
  title: 'Party Demon',
  type: 'videogame',                           // a key from taxonomy.js → projectTypes
  roles: ['programmer', 'gameDesigner'],                       // keys from taxonomy.js → roles
  start: 2022,
  end: 2024,                                   // null = ongoing ("Present") · leave commented for a single year
  palette: 'secondary',                          // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: '/media/projects/party-demon/main.png', // card image, 16:9
  // preview: 'clip.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://youtu.be/Q7G6yXLfwlY?si=bCXgqGln_UL2HlFR', caption: { en: 'Game trailer (Gamescom Latam 2025)', es: 'Tráiler del juego (Gamescom Latam 2025)' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Crafted Mayhem', url: 'https://www.craftedmayhem.studio/', type: 'studio' }, // type: studio · startup · company · collective · freelance · independent
  // client: { name: '…', url: 'https://…' },  // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  // itch: 'https://….itch.io/…',
  links: [
    // { label: { en: '…', es: '…' }, url: 'https://…' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what it is + what you did
  pitch: {
    en: 'A tower defense and deck-building game where I designed and programmed most of the systems: castle building, pathfinding, enemy waves and cards.',
    es: 'Un juego de tower defense y construcción de mazos en el que diseñé y programé la mayoría de los sistemas: construcción, pathfinding, oleadas y cartas.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '5 people', es: '5 personas' },
    platform: { en: '', es: '' },
    format: { en: 'Tower defense · deck-building', es: 'Tower defense · construcción de mazos' },
    status: { en: '', es: '' },
    impact: { en: '', es: '' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Party Demon is a tower defense, deck-building game where your main goal is to protect a Lady Demon’s birthday party from human intruders. Build your castle on a budget and defend it in real-time with a deadly Trap Deck full of demonic weapons.',
    es: 'Party Demon es un juego de tower defense y construcción de mazos en el que tu objetivo principal es proteger la fiesta de cumpleaños de una Lady Demon de los intrusos humanos. Construye tu castillo con un presupuesto limitado y defiéndelo en tiempo real con un mortífero mazo de trampas lleno de armas demoníacas.',
  },
  highlights: [
    { type: 'decision', title: { en: '', es: '' }, text: { en: 'My main role on this project was programmer. I designed and implemented most of the game’s systems and gameplay.', es: 'Mi rol principal en este proyecto fue el de programadorx. Diseñé e implementé la mayoría de los sistemas y del gameplay del juego.' } },
    { type: 'challenge', title: { en: '', es: '' }, text: { en: 'Party Demon is a highly systemic game, with many systems running at once. Each enemy type has its own special traits, and so does every castle piece and every trap. On top of that, different combinations of placed pieces unlock different effects. Building a game where so many interactions happen at the same time was a big technical challenge for me.', es: 'Party Demon es un juego muy sistémico, con muchos sistemas funcionando al mismo tiempo. Cada tipo de enemigo tiene características especiales, al igual que cada pieza del castillo y cada trampa. Además, según la combinación de piezas que hayas colocado, obtienes efectos distintos. Implementar un juego con tantas interacciones simultáneas fue un gran reto técnico para mí.' } },
  ],
  whatIDid: [
    { en: 'A system for **building your castle** dynamically with pieces bought in a shop', es: 'Un sistema para **construir tu castillo** de forma dinámica con piezas que compras en una tienda' },
    { en: '**Dynamic pathfinding** from scratch, using **A***', es: '**Pathfinding dinámico** desde cero, con **A***' },
    { en: 'A tool that lets game designers build **enemy waves**, combining **procedural** and **deterministic** systems', es: 'Una herramienta para que el equipo de diseño construyera **oleadas de enemigos**, combinando sistemas **procedurales** y **deterministas**' },
    { en: 'The system for building and managing your **card deck**', es: 'El sistema para crear y gestionar tu **mazo de cartas**' },
    { en: 'Most of the **card effects**', es: 'La mayoría de los **efectos de las cartas**' },
    { en: 'Enemy **status effects** (burning, slowed, bleeding, etc.)', es: 'Los **estados alterados** de los enemigos (quemadura, ralentización, sangrado, etc.)' },
  ],
  tech: ['Unity', 'C#'],                       // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    { name: 'André', role: { en: 'Game design, project management', es: 'Diseño de juego, gestión del proyecto' } },
    { name: 'Rito', role: { en: 'Art', es: 'Arte' } },
    { name: 'Sarah Grommelt', role: { en: 'Audio design & implementation', es: 'Diseño e implementación de audio' } },
    { name: 'Rafa Arias', role: { en: 'Music', es: 'Música' } },
  ],
};
