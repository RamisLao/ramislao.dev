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
  preview: 'preview.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://www.youtube.com/watch?v=AR5354rR4b0', caption: { en: 'A short gameplay video', es: 'Un video corto del juego en acción' } },
    { src: 'https://youtu.be/Q7G6yXLfwlY?si=bCXgqGln_UL2HlFR', caption: { en: 'Game trailer (Gamescom Latam 2025)', es: 'Tráiler del juego (Gamescom Latam 2025)' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Crafted Mayhem', url: 'https://www.craftedmayhem.studio/', type: 'studio' }, // type: studio · startup · company · collective · freelance · independent
  // client: { name: '…', url: 'https://…' },  // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  steam: 'https://store.steampowered.com/app/1659530/Party_Demon/',
  // itch: 'https://….itch.io/…',
  links: [
    // { label: { en: '…', es: '…' }, url: 'https://…' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what the project is (your roles already show as chips above it)
  pitch: {
    en: 'A tower defense deck-building game where you build your castle and defend it in real time with a deck full of traps, to protect Lady Demon’s birthday party from waves of humans.',
    es: 'Un juego de defensa de torres y construcción de mazos en el que construyes tu castillo y lo defiendes en tiempo real con un mazo lleno de trampas, para proteger la fiesta de cumpleaños de Lady Demon de oleadas de humanos.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '10 people', es: '10 personas' },
    platform: { en: 'PC (Windows)', es: 'PC (Windows)' },
    format: { en: 'Tower defense · deck-building', es: 'Tower defense · construcción de mazos' },
    status: { en: 'Released on Steam', es: 'Publicado en Steam' },
    impact: { en: 'Gamescom Latam 2025 Official Selection', es: 'Selección oficial de Gamescom Latam 2025' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Party Demon was Crafted Mayhem’s first game, developed together with the Brazilian studio Barely Alive. It’s a tower defense deck-builder.\n\nFirst you buy rooms of different sizes in the shop, use them to build your castle and set the exact path the enemies will follow. Then, during each wave, you play trap cards in real time to block and take out the humans and protect your queen. There are many kinds of cards, each with its own effect.\n\nThe game puts a twist on the genre: most of the towers are temporary, and you place them in real time. As you play, you earn upgrades that let you carry more cards and place them faster in the castle’s rooms.',
    es: 'Party Demon fue el primer videojuego de Crafted Mayhem, desarrollado en colaboración con el estudio brasileño Barely Alive. Es un juego de defensa de torres y construcción de mazos.\n\nPrimero compras cuartos de distintos tamaños en la tienda, construyes con ellos tu castillo y defines el camino exacto que recorrerán los enemigos. Después, durante cada oleada, usas cartas de trampas en tiempo real para bloquear y eliminar a los humanos y proteger a tu reina. Hay muchos tipos de cartas, cada una con un efecto distinto.\n\nEl juego le da un giro al género: la mayoría de las torres son temporales y se colocan en tiempo real. A lo largo de la partida obtienes mejoras para llevar más cartas y colocarlas más rápido en los cuartos del castillo.',
  },
  highlights: [
    {
      type: 'challenge',
      title: { en: 'Many systems at once', es: 'Muchos sistemas a la vez' },
      text: {
        en: 'Party Demon is a deeply systemic game: every enemy type, castle piece and trap has its own traits, and the way you combine pieces creates different effects. Making so many simultaneous interactions work was a big technical challenge, and one I really enjoyed solving.',
        es: 'Party Demon es un juego muy sistémico: cada tipo de enemigo, cada pieza del castillo y cada trampa tiene sus propias características, y la combinación de piezas que colocas produce efectos distintos. Implementar tantas interacciones simultáneas fue un gran reto técnico, y disfruté mucho resolverlo.',
      },
    },
    {
      type: 'result',
      title: { en: 'Gamescom Latam Official Selection', es: 'Selección oficial de Gamescom Latam' },
      text: {
        en: 'Party Demon was part of the official selection at Gamescom Latam 2025, in Brazil.',
        es: 'Party Demon formó parte de la selección oficial de Gamescom Latam 2025, en Brasil.',
      },
    },
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
    { name: 'André Ruiz', role: { en: 'Creative direction, game & system design, UI/UX', es: 'Dirección creativa, diseño de juego y de sistemas, UI/UX' } },
    { name: 'Henrique Rito', role: { en: 'Art, UI/UX', es: 'Arte, UI/UX' } },
    { name: 'João Victor Barreto', role: { en: 'Programming', es: 'Programación' } },
    { name: 'Arthur Francesconi', role: { en: 'Tech art', es: 'Arte técnico' } },
    { name: 'Danny Oliveira', role: { en: 'Tech art', es: 'Arte técnico' } },
    { name: 'Helena Coelho', role: { en: 'Animation', es: 'Animación' } },
    { name: 'Sarah Grommelt', role: { en: 'Sound design', es: 'Diseño de sonido' } },
    { name: 'Rafael “Overthinker” Arias', role: { en: 'Music', es: 'Música' } },
    { name: 'Luci Andrade', role: { en: 'Marketing & community', es: 'Marketing y comunidad' } },
  ],
};
