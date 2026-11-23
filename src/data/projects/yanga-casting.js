export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'yanga-casting',                         // = this file's name, no spaces
  title: 'Wayob by Yanga',
  type: 'webapp',                              // a key from taxonomy.js → projectTypes
  roles: ['producer', 'designer', 'programmer'],            // keys from taxonomy.js → roles
  start: 2026,
  // end: 2027,                                // null = ongoing ("Present") · leave commented for a single year
  palette: 'soft',                            // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/images/projects/<id>/ (a plain filename is enough) ──
  cover: '/images/projects/yanga-casting/main.jpg', // card image, 16:9
  preview: 'preview.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: '/images/projects/yanga-casting/screenshot_1.png', caption: { en: 'A talent profile as the Yanga team sees it: personal details, contact info, photos and videos', es: 'El perfil de un talento visto por el equipo de Yanga: datos personales, contacto, fotos y videos' } },
    { src: '/images/projects/yanga-casting/screenshot_2.png', caption: { en: 'The talent database, showing each person’s agency and tags', es: 'La base de datos de talentos, con la agencia y las etiquetas de cada persona' } },
    { src: '/images/projects/yanga-casting/screenshot_3.png', caption: { en: 'The admin panel: users and their roles (Admin, Booking, Casting)', es: 'El panel de administración: usuarios y sus roles (Admin, Booking, Casting)' } },
    { src: '/images/projects/yanga-casting/screenshot_4.png', caption: { en: 'The talent’s own view: their profile, appearance and measurements', es: 'La vista del talento: su propio perfil, con su apariencia y sus medidas' } },
    { src: '/images/projects/yanga-casting/screenshot_5.png', caption: { en: 'A character from a casting call, as talent see it: requirements, references and scenes to act, with the button to apply', es: 'Un personaje de una convocatoria, desde la vista del talento: requisitos, referencias y escenas a actuar, con el botón para postularse' } },
    { src: '/images/projects/yanga-casting/screenshot_6.png', caption: { en: 'Open casting calls for talent, with each project’s characters', es: 'Las convocatorias abiertas para talentos, con los personajes de cada proyecto' } },
    { src: '/images/projects/yanga-casting/screenshot_7.png', caption: { en: 'Reviewing an application: the talent’s answers to the casting questionnaire', es: 'La revisión de una postulación: las respuestas del talento al cuestionario del casting' } },
    { src: '/images/projects/yanga-casting/screenshot_8.png', caption: { en: 'The cast proposal the client receives, organized by character and downloadable as PDF or ZIP', es: 'La propuesta de elenco que recibe el cliente, organizada por personaje y descargable en PDF o ZIP' } },
    { src: '/images/projects/yanga-casting/screenshot_9.png', caption: { en: 'A casting call document with all of the project’s details: dates, terms and rates', es: 'El documento de una convocatoria con todos los detalles del proyecto: fechas, condiciones y tarifas' } },
    { src: '/images/projects/yanga-casting/screenshot_10.png', caption: { en: 'Folders for organizing talent by profile, like bilingual talent or voice-over artists', es: 'Carpetas para organizar talentos por perfil, como talento bilingüe o voces en off' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  studio: 'freelance',                         // or 'freelance' · 'independent' · 'Studio name'
  client: { name: 'Yanga', url: 'https://yangacasting.mx/' }, // or 'Client name'
  // cofounded: { name: '…', url: 'https://…' }, // a company you co-founded (instead of studio/client)

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  // itch: 'https://….itch.io/…',
  links: [
    // { label: { en: '…', es: '…' }, url: 'https://…' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what it is + what you did
  pitch: {
    en: 'A web platform for running casting projects, from open calls to cast proposals. I led its research, UX, visual design and production.',
    es: 'Una plataforma web para gestionar proyectos de casting, de la convocatoria a la propuesta de elenco. Lideré su investigación, UX, diseño visual y producción.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '3 people', es: '3 personas' },
    platform: { en: 'Web app', es: 'App web' },
    format: { en: 'Casting management platform', es: 'Plataforma de gestión de castings' },
    status: { en: 'Live', es: 'En línea' },
    impact: { en: '', es: '' },
  },

  // ── Texts (folded in the sheet) · new paragraph = \n\n ──
  description: {
    en: 'Wayob is a web platform built for Yanga Casting. It has four types of users (roles): talent, casting, agencies and clients, and each one has its own workflow. The Yanga team can create casting projects directly in the platform and export every document they need to run them. They can also manage talent applications, curate profiles and put together cast proposals for clients.\n\nTalent can create and edit their profiles, browse all of Yanga’s open calls and apply directly from the platform, uploading any photos and videos they need.\n\nAgencies can manage their talent’s profiles, see their applications and apply on their behalf.\n\nClients can review a cast selection right in the platform, mark their favorites and leave notes for Yanga’s agents.',
    es: 'Wayob es una plataforma web desarrollada para Yanga Casting. Tiene cuatro tipos de usuario (roles): talentos, casting, agencias y clientes, y cada uno tiene su propio flujo de uso. El equipo de Yanga puede crear proyectos de casting directamente desde la plataforma y exportar todos los documentos que necesita para llevarlos a cabo. También puede gestionar las postulaciones de los talentos, curar sus perfiles y preparar propuestas de elenco para los clientes.\n\nLos talentos pueden crear y editar sus perfiles, ver todas las convocatorias públicas de Yanga y postularse directamente desde la plataforma, subiendo las fotos y los videos que necesiten.\n\nLas agencias pueden gestionar los perfiles de sus talentos, ver sus postulaciones y postularlos en su nombre.\n\nLos clientes pueden ver en la plataforma una selección de elenco, marcar a sus favoritos y dejar notas para los agentes de Yanga.',
  },
  roleDetails: {
    en: 'On this project I was producer and designer. I led the research to analyze and understand Yanga’s workflows in detail, and used it to design a user experience tailored to their specific needs. I created hundreds of wireframes for every screen and refined them with the client’s feedback. The goal was to streamline their processes and avoid the problems they had with their previous tool.\n\nNext, I created the platform’s branding: color palette, typography and shape language. Building on the wireframes and the branding, I designed every screen one by one, with a strong focus on making them easy to use and pleasant to look at.\n\nI also worked directly in the code, mainly the CSS files, to refine the implementation, make sure it stayed true to the designs and make the visual fixes I considered necessary. On top of that, I designed the database schema and implemented the migration system.\n\nFinally, I was the project lead. I drew up the work plan to finish the project in six months and assigned everyone’s tasks each week. I handled direct communication with the client and managed the app’s testing, to make sure the final delivery was solid and truly useful for the Yanga team.',
    es: 'En este proyecto fui productorx y diseñadorx. Me encargué de la investigación para analizar y comprender a detalle los procesos de trabajo de Yanga y, a partir de ella, diseñé una experiencia de usuario adaptada a sus necesidades específicas. Elaboré cientos de wireframes para todas las vistas y los fui refinando con la retroalimentación del cliente. El objetivo era optimizar sus procesos y evitar los problemas que tenían con su herramienta anterior.\n\nDespués, creé el branding de la plataforma: paleta de colores, tipografías y lenguaje de formas. Con los wireframes y el branding como base, diseñé cada una de las vistas, con mucho énfasis en que fueran fáciles de usar y agradables a la vista.\n\nTambién trabajé directamente en el código, principalmente en los archivos CSS, para refinar las implementaciones, asegurarme de que fueran fieles a los diseños y hacer las correcciones visuales que consideré necesarias. Además, diseñé el esquema de la base de datos e implementé el sistema de migraciones.\n\nPor último, fui líder del proyecto. Elaboré el plan de trabajo para terminarlo en seis meses y cada semana asigné las tareas de todas las personas involucradas. Me encargué de la comunicación directa con el cliente y gestioné las pruebas de la aplicación, para asegurarme de que la entrega fuera adecuada y realmente útil para el equipo de Yanga.',
  },
  built: [
    { en: 'The research process to understand all of the client’s needs and workflows', es: 'El proceso de investigación para conocer todas las necesidades y los procesos del cliente' },
    { en: 'Wireframes for the entire app, developed together with the client', es: 'Los wireframes de toda la aplicación, en comunicación con el cliente' },
    { en: 'The app’s branding', es: 'El branding de la aplicación' },
    { en: 'The app’s development plan', es: 'El plan de desarrollo de la aplicación' },
    { en: 'Weekly planning and task assignment for everyone involved', es: 'La planeación y asignación semanal de tareas de todas las personas involucradas' },
    { en: 'The final design of every screen', es: 'El diseño final de cada vista' },
    { en: 'Hands-on work in the code to refine the screens and keep them consistent with each other', es: 'Trabajo directo en el código para refinar las vistas y asegurar que fueran coherentes entre sí' },
    { en: 'The database schema and the migration system', es: 'El esquema de la base de datos y el sistema de migraciones' },
  ],
  tech: ['React.js', 'CSS', 'Figma', 'PostgreSQL'],
  challenges: [
    {
      en: 'It’s the largest and most feature-rich app I’ve ever designed. Translating all of the client’s needs and workflows into a platform that was easy to use and made their processes more efficient was a big challenge.',
      es: 'Es la aplicación más extensa y con más funcionalidades que he diseñado. Fue un gran reto traducir todas las necesidades y el flujo de trabajo del cliente a una plataforma fácil de usar que hiciera sus procesos más eficientes.',
    },
  ],
  credits: [
    { name: 'Sarah Grommelt', role: { en: 'Programming', es: 'Programación' } },
    { name: 'Rafa Arias', role: { en: 'Programming', es: 'Programación' } },
  ],
};
