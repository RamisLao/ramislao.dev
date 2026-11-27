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
  preview: 'preview.mp4',                   // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://www.youtube.com/watch?v=I2VMwEIasUI', caption: { en: 'A playthrough of the whole game', es: 'Una partida completa del juego' } },
    { src: 'screenshot_1.jpg', caption: { en: 'Are mantises really a person’s best friend?', es: '¿De verdad las mantis son las mejores amigas de las personas?' } },
    { src: 'screenshot_2.jpg', caption: { en: 'Following the colored cables to untangle the mystery', es: 'Sigue los cables de colores para desenredar el misterio' } },
    { src: 'screenshot_3.jpg', caption: { en: 'What’s going on outside the kitchen?', es: '¿Qué está pasando fuera de la cocina?' } },
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
  // pitch: ONE sentence, ~25 words: what the project is (your roles already show as chips above it)
  pitch: {
    en: 'A short first-person psychological horror game where you wake up held captive in an unfamiliar apartment.',
    es: 'Un juego corto de horror psicológico en primera persona en el que despiertas en cautiverio en un departamento desconocido.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '3 people', es: '3 personas' },
    platform: 'PC (Windows) · itch.io',
    format: { en: 'First-person psychological horror', es: 'Horror psicológico en primera persona' },
    status: { en: 'Released', es: 'Publicado' },
    impact: { en: '', es: '' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Extraction is a short psychological horror game where you wake up in an unfamiliar apartment and explore it to find out why you’re there and who is holding you captive.\n\nIt was a short project we made to test our development pipeline and to finish some tools we’ve used in our later projects, such as our save system in Unity.',
    es: 'Extraction es un videojuego corto de horror psicológico en el que despiertas en un departamento desconocido y lo exploras para descubrir qué haces ahí y quién te tiene en cautiverio.\n\nFue un proyecto breve que hicimos para poner a prueba nuestro pipeline de desarrollo y terminar algunas herramientas que hemos usado en nuestros proyectos posteriores, como el sistema de guardado en Unity.',
  },
  highlights: [
    {
      type: 'challenge',
      title: { en: 'One month, tops', es: 'Un mes como máximo' },
      text: {
        en: 'Our goal was to finish the game in one month at most. To get there, we made many adjustments along the way and stayed very flexible about changing our original idea to meet the deadline we had set ourselves.',
        es: 'Nuestro objetivo fue terminar el juego en un mes como máximo. Para lograrlo, hicimos muchos ajustes durante el proceso y fuimos muy flexibles para cambiar nuestra idea original y cumplir con el plazo que nos propusimos.',
      },
    },
    {
      type: 'decision',
      title: { en: 'Building with existing assets', es: 'Construir con assets existentes' },
      text: {
        en: 'Because of the short development time we agreed on, we built much of the environment with assets from the Unity Asset Store. This sped up our process enormously and let us create a dark, realistic atmosphere on a very small budget.',
        es: 'Por el poco tiempo de desarrollo que acordamos, construimos gran parte del escenario con assets de la Unity Asset Store. Esto aceleró muchísimo nuestro proceso y nos permitió crear un ambiente tenebroso y realista con muy poco presupuesto.',
      },
    },
  ],
  whatIDid: [
    { en: 'Managed the **project**, planned each person’s **tasks** and made sure the game was **finished on time**', es: 'Gestioné el **proyecto**, planeé las **tareas** de cada persona y me aseguré de que el juego se **terminara a tiempo**' },
    { en: 'Programmed **most of the systems** and built **reusable tools** for later projects', es: 'Programé **gran parte de los sistemas** y creé **herramientas reutilizables** para proyectos posteriores' },
    { en: 'Designed the **narrative experience** and the **game mechanics** together with Rafa', es: 'Junto con Rafa, diseñé la **experiencia narrativa** y las **mecánicas** del juego' },
  ],
  tech: ['Unity', 'C#'],                                    // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    { name: 'Sarah Grommelt', role: { en: 'Programming & audio', es: 'Programación y audio' } },
    { name: 'Rafa Arias', role: { en: 'Programming & technical art', es: 'Programación y arte técnico' } },
  ],
};
