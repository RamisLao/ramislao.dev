export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'yanga-casting',                         // = this file's name, no spaces
  title: 'Wayob by Yanga',
  type: 'webapp',                              // a key from taxonomy.js → projectTypes
  roles: ['producer', 'uxDesigner', 'graphicDesigner', 'programmer'],            // keys from taxonomy.js → roles
  start: 2026,
  // end: 2027,                                // null = ongoing ("Present") · leave commented for a single year
  palette: 'soft',                            // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: '/media/projects/yanga-casting/main.jpg', // card image, 16:9
  preview: 'preview.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: '/media/projects/yanga-casting/yanga_1.jpg', caption: { en: 'The user flow for the staff role', es: 'El flujo de usuario del rol de staff' } },
    { src: '/media/projects/yanga-casting/yanga_2.jpg', caption: { en: 'Some of the wireframes designed for the app', es: 'Algunos de los wireframes diseñados para la aplicación' } },
    { src: '/media/projects/yanga-casting/yanga_3.jpg', caption: { en: 'Screen designs with the branding applied', es: 'Diseños de vistas con el branding aplicado' } },
    { src: '/media/projects/yanga-casting/yanga_4.jpg', caption: { en: 'Part of the database schema', es: 'Parte del esquema de la base de datos' } },
    { src: '/media/projects/yanga-casting/screenshot_1.png', caption: { en: 'A talent profile as the Yanga team sees it', es: 'El perfil de un talento visto por el equipo de Yanga' } },
    { src: '/media/projects/yanga-casting/screenshot_2.png', caption: { en: 'The talent database, with the key details at a glance', es: 'La base de datos de talentos, con los datos clave a la vista' } },
    { src: '/media/projects/yanga-casting/screenshot_3.png', caption: { en: 'The admin panel: users and their roles (Admin, Booking, Casting)', es: 'El panel de administración: usuarios y sus roles (Admin, Booking, Casting)' } },
    { src: '/media/projects/yanga-casting/screenshot_4.png', caption: { en: 'The talent’s view: their own profile, fully editable', es: 'La vista del talento: su propio perfil, completamente editable' } },
    { src: '/media/projects/yanga-casting/screenshot_5.png', caption: { en: 'A character from a casting call, ready for talent to apply', es: 'Un personaje de una convocatoria, listo para que los talentos se postulen' } },
    { src: '/media/projects/yanga-casting/screenshot_6.png', caption: { en: 'Open casting calls for talent, with each project’s characters', es: 'Las convocatorias abiertas para talentos, con los personajes de cada proyecto' } },
    { src: '/media/projects/yanga-casting/screenshot_8.png', caption: { en: 'The cast proposal the client receives, organized by character', es: 'La propuesta de elenco que recibe el cliente, organizada por personaje' } },
    { src: '/media/projects/yanga-casting/screenshot_9.png', caption: { en: 'A casting call document with all of the project’s details', es: 'El documento de una convocatoria con todos los detalles del proyecto' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Crafted Mayhem', url: 'https://www.craftedmayhem.studio/', type: 'studio' }, // type: studio · startup · company · collective · freelance · independent
  client: { name: 'Yanga', url: 'https://yangacasting.mx/' }, // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  // itch: 'https://….itch.io/…',
  links: [
    { label: { en: 'Visit Wayob', es: 'Wayob en línea' }, url: 'https://wayob.yanga.mx/' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what the project is (your roles already show as chips above it)
  pitch: {
    en: 'A web platform for managing casting projects, from creating casting calls to producing deliverables for clients.',
    es: 'Una plataforma web para gestionar proyectos de casting, desde la creación de convocatorias hasta la generación de entregables para clientes.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '3 people', es: '3 personas' },
    platform: { en: 'Web app', es: 'App web' },
    format: { en: 'Casting management platform', es: 'Plataforma de gestión de castings' },
    status: { en: 'Live', es: 'En línea' },
    impact: { en: '', es: '' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Wayob is a web platform built for Yanga Casting. It has five user roles (admin, staff, talent, agencies and clients), each with its own flow.\n\nAdmins create, edit and manage every user and agency account on the platform, along with some global settings.\n\nStaff create casting projects right on the platform and export every document they need to run them. They also manage talent applications, review and select profiles, and put together cast proposals for clients.\n\nTalent create and edit their profiles, browse all of Yanga’s open casting calls and apply right from the platform, uploading the photos and videos each call asks for.\n\nAgencies manage their talent’s profiles, follow their applications and apply on their behalf.\n\nClients review the cast selection on the platform, mark their favorites and leave notes for the Yanga team.',
    es: 'Wayob es una plataforma web desarrollada para Yanga Casting. Tiene cinco roles de usuario (admin, staff, talentos, agencias y clientes), cada uno con su propio flujo.\n\nEl rol de admin crea, edita y gestiona todas las cuentas de usuario y de agencia de la plataforma, además de algunas configuraciones globales.\n\nEl staff crea proyectos de casting directamente en la plataforma y exporta todos los documentos que necesita para llevarlos a cabo. También gestiona las postulaciones de los talentos, revisa y selecciona perfiles, y prepara propuestas de elenco para los clientes.\n\nLos talentos crean y editan su perfil, ven todas las convocatorias abiertas de Yanga y se postulan desde la plataforma, con las fotos y los videos que pida cada convocatoria.\n\nLas agencias gestionan los perfiles de sus talentos, dan seguimiento a sus postulaciones y los postulan en su nombre.\n\nLos clientes revisan en la plataforma la selección de elenco, marcan a sus favoritos y dejan notas para el equipo de Yanga.',
  },
  highlights: [
    {
      type: 'challenge',
      title: { en: 'Replacing a mature tool', es: 'Reemplazar una herramienta madura' },
      text: {
        en: 'Yanga needed to replace, from scratch, the tool it had used for years: a mature system, long proven in production. The challenge was building something good enough to take its place in only six months.',
        es: 'Yanga necesitaba reemplazar, desde cero, la herramienta que llevaba años usando: un sistema maduro y probado en producción. El reto fue construir algo lo bastante bueno para sustituirla en solo seis meses.',
      },
    },
    {
      type: 'decision',
      title: { en: 'Design first', es: 'Primero, el diseño' },
      text: {
        en: 'We spent three of the six months on research, wireframes and screen design, so the platform would fit the workflow Yanga has refined over many years.',
        es: 'Dedicamos tres de los seis meses a la investigación, los wireframes y el diseño de vistas, para que la plataforma se adaptara al flujo de trabajo que Yanga ha perfeccionado durante años.',
      },
    },
    {
      type: 'result',
      title: { en: '1,400+ talent profiles', es: 'Más de 1400 talentos' },
      text: {
        en: 'After the first round of sign-ups, the platform already holds more than 1,400 talent profiles.',
        es: 'Tras la primera ronda de registros, la plataforma ya cuenta con más de 1400 talentos.',
      },
    },
  ],
  whatIDid: [
    { en: 'Ran the **client research** to understand Yanga’s needs and workflows in depth', es: 'Realicé la **investigación con el cliente** para entender a fondo sus necesidades y flujos de trabajo' },
    { en: 'Designed the **user flows** for all five roles', es: 'Diseñé los **flujos de usuario** de los cinco roles' },
    { en: 'Designed the **wireframes** for the whole app, on mobile and desktop', es: 'Diseñé los **wireframes** de toda la aplicación, para móvil y escritorio' },
    { en: 'Created the app’s **branding**: style, color palette, shape language and typography', es: 'Creé el **branding** de la aplicación: estilo, paleta de colores, lenguaje de formas y tipografía' },
    { en: 'Designed **every screen** from the wireframes and the branding', es: 'Diseñé **todas las vistas** a partir de los wireframes y el branding' },
    { en: 'Wrote the **development plan** and assigned the tasks for each sprint', es: 'Elaboré el **plan de desarrollo** y asigné las tareas de cada sprint' },
    { en: 'Designed the **database schema** and wrote the migration scripts', es: 'Diseñé el **esquema de la base de datos** y escribí los scripts de migración' },
    { en: 'Fine-tuned every screen directly in **CSS**', es: 'Ajusté y pulí todas las vistas directamente en **CSS**' },
  ],
  tech: ['React.js', 'CSS', 'PostgreSQL', 'Google Cloud', 'Firebase', 'Google Cloud Storage', 'Figma', 'dbdiagram.io', 'Miro'],
  credits: [
    { name: 'Sarah Grommelt', role: { en: 'Programming', es: 'Programación' } },
    { name: 'Rafa Arias', role: { en: 'Programming', es: 'Programación' } },
  ],
};
