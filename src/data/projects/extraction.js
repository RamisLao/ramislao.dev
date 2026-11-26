export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'extraction',                                  // = this file's name, no spaces
  title: 'Extraction',
  type: 'videogame',                           // a key from taxonomy.js → projectTypes
  roles: ['producer', 'programmer', 'gameDesigner'],              // keys from taxonomy.js → roles
  start: 2024,
  end: 2024,                                   // null = ongoing ("Present") · leave commented for a single year
  palette: 'primary',                            // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: 'main.jpg',                        // card image, 16:9
  // preview: 'clip.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://www.youtube.com/watch?v=I2VMwEIasUI', caption: { en: 'A playthrough of the whole game', es: 'Una partida completa del juego' } },
    { src: 'screenshot_1.jpg', caption: { en: 'A “Best Friend” poster of a praying mantis hanging in the apartment', es: 'Un cartel de una mantis religiosa con el texto “Best Friend”, colgado en el departamento' } },
    { src: 'screenshot_2.jpg', caption: { en: 'The living room, with a screen reading “EXTRACTING” next to vital signs', es: 'La sala, con una pantalla que marca “EXTRACTING” junto a unos signos vitales' } },
    { src: 'screenshot_3.jpg', caption: { en: 'The kitchen, with pipes coming out of the wall and a lit-up city outside the window', es: 'La cocina, con tuberías que salen de la pared y una ciudad iluminada al otro lado de la ventana' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Crafted Mayhem', url: 'https://craftedmayhem.studio/', type: 'studio' }, // type: studio · startup · company · collective · freelance · independent
  // client: { name: '…', url: 'https://…' },  // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  itch: 'https://ramislao.itch.io/extraction',
  links: [
    // { label: { en: '…', es: '…' }, url: 'https://…' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what it is + what you did
  pitch: {
    en: 'A short first-person psychological horror game where you wake up held captive in an unfamiliar apartment. I produced it, programmed most of its systems and co-designed it with Rafa.',
    es: 'Un juego corto de horror psicológico en primera persona en el que despiertas en cautiverio en un departamento desconocido. Lo produje, programé gran parte de sus sistemas y lo diseñé junto con Rafa.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '3 people', es: '3 personas' },
    platform: 'PC (Windows) · itch.io',
    format: { en: 'First-person psychological horror · 2 months', es: 'Horror psicológico en primera persona · 2 meses' },
    status: { en: 'Released', es: 'Publicado' },
    impact: { en: '', es: '' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Extraction is a short psychological horror game where you wake up in an unfamiliar apartment and explore it to find out why you’re there and who is holding you captive.\n\nIt was a short project we made to test our development pipeline and to finish some tools we’ve used in our later projects, such as our save system in Unity.',
    es: 'Extraction es un videojuego corto de horror psicológico en el que despiertas en un departamento desconocido y lo exploras para descubrir qué haces ahí y quién te tiene en cautiverio.\n\nFue un proyecto breve que hicimos para poner a prueba nuestro pipeline de desarrollo y terminar algunas herramientas que hemos usado en nuestros proyectos posteriores, como el sistema de guardado en Unity.',
  },
  highlights: [
    { type: 'decision', title: { en: '', es: '' }, text: { en: 'I was the producer and project manager: I assigned the whole team’s tasks and guided development so we could finish on time. It was a short, 2-month project, so it took careful planning to hit our goal.', es: 'En este proyecto fui productorx y project manager: repartí las tareas de todo el equipo y guié el desarrollo para terminarlo a tiempo. Fue un proyecto corto, de 2 meses, que requirió una buena planeación para cumplir con el objetivo.' } },
    { type: 'decision', title: { en: '', es: '' }, text: { en: 'As programmer, I built tools we could reuse in later projects, such as a very flexible save system, a system for communication between the game’s different systems, and some technical art.', es: 'Como programadorx, desarrollé herramientas que pudiéramos reutilizar en proyectos posteriores, como un sistema de guardado muy flexible, un sistema de comunicación entre los distintos sistemas del juego y algunos elementos de arte técnico.' } },
    { type: 'decision', title: { en: '', es: '' }, text: { en: 'As game designer, I designed the experience together with Rafa, aiming to make it as intuitive as possible so it could be played without any instructions.', es: 'Como diseñadorx de juegos, diseñé la experiencia junto con Rafa, buscando que fuera lo más intuitiva posible para que se pudiera jugar sin instrucciones.' } },
    { type: 'challenge', title: { en: '', es: '' }, text: { en: 'Because the project was so short, we had to make a lot of strategic decisions to meet the deadline without letting the scope get out of hand.', es: 'Como el proyecto era muy corto, tuvimos que tomar muchas decisiones estratégicas para cumplir el plazo sin que el alcance se nos saliera de las manos.' } },
  ],
  whatIDid: [
    { en: 'Managed the project and guided the team throughout development', es: 'Gestioné el proyecto y guié al equipo durante todo el desarrollo' },
    { en: 'Programmed most of the systems and built tools we reused in later projects', es: 'Programé gran parte de los sistemas y creé herramientas que reutilizamos en proyectos posteriores' },
    { en: 'Designed the narrative experience and the game mechanics together with Rafa', es: 'Junto con Rafa, diseñé la experiencia narrativa y las mecánicas del juego' },
  ],
  tech: ['Unity', 'C#'],                                    // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    { name: 'Sarah Grommelt', role: { en: 'Programming & audio', es: 'Programación y audio' } },
    { name: 'Rafa Arias', role: { en: 'Programming & technical art', es: 'Programación y arte técnico' } },
  ],
};
