export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'marakana-sports',                       // = this file's name, no spaces
  title: 'Combine.ai',
  type: 'mobile',                              // a key from taxonomy.js → projectTypes
  roles: ['producer', 'programmer', 'uxDesigner', 'gameDesigner'],           // keys from taxonomy.js → roles
  start: 2017,
  end: 2019,                                   // null = ongoing ("Present") · leave commented for a single year
  palette: 'deep',                             // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: 'main.jpg',                        // card image, 16:9
  // preview: 'clip.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    // { src: 'screenshot_1.png', caption: { en: '', es: '' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Marakana Sports', url: '', type: 'startup' }, // who/how you made it · type: studio · startup · company · collective · freelance · independent
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
    en: 'An iPhone app that used computer vision to assess soccer players’ potential.',
    es: 'Una app de iPhone que evaluaba con visión por computadora el potencial de futbolistas.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '5 people', es: '5 personas' },
    platform: 'iPhone (iOS)',
    format: { en: 'Mobile app with computer vision', es: 'App móvil con visión por computadora' },
    status: { en: 'Completed · not in production', es: 'Terminado · no está en producción' },
    impact: { en: '', es: '' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Combine.ai was a mobile app we developed at Marakana Sports, a San Francisco startup. Its goal was to create technology that made soccer scouting easier and helped discover talent in remote places that often don’t have access to these opportunities. The first step was in-depth, data-driven research to identify which traits make someone more likely to have a successful career as a soccer player.\n\nWith those markers in hand, we built technology to automate the analysis of that potential. We used pose-estimation neural networks to measure jumping power from a video players recorded on their own phones. We also trained a neural network to detect soccer balls and developed an algorithm that counted how many keep-ups each player could do. On top of that, we created mini-games to measure reaction speed.',
    es: 'Combine.ai era una aplicación móvil que desarrollamos en Marakana Sports, una startup de San Francisco. Su objetivo era crear una tecnología que facilitara el scouting de futbolistas y permitiera descubrir talento en lugares remotos que muchas veces no tienen acceso a estas oportunidades. El primer paso fue una investigación a fondo, basada en ciencia de datos, para identificar qué características hacen más probable que una persona tenga una carrera exitosa en el fútbol.\n\nCon esos marcadores, desarrollamos tecnología para automatizar el análisis de ese potencial. Usamos redes neuronales de estimación de pose para medir la fuerza de salto a partir de un video que lxs jugadorxs grababan con su propio celular. También entrenamos una red neuronal para detectar balones de fútbol y desarrollamos un algoritmo que contaba cuántas dominadas podía hacer cada persona. Además, creamos minijuegos para medir la velocidad de reacción.',
  },
  highlights: [
    { type: 'decision', title: { en: '', es: '' }, text: { en: 'I had many roles on this project. As a co-founder of Marakana Sports, my job went beyond building the app: I closely followed the industry research, ran tests with real players and handled our investors’ requests. I traveled with the team to cities across the US to pitch to investors and raise the funding we needed. As CTO, I chose the project’s technologies and implemented most of its systems.', es: 'En este proyecto tuve varios roles. Como cofundadorx de Marakana Sports, mi trabajo no se limitó a desarrollar la aplicación: también seguí de cerca la investigación de la industria, hice pruebas con jugadorxs reales y atendí las peticiones de nuestros inversionistas. Viajé con el equipo a varias ciudades de EE. UU. para presentar el proyecto a inversionistas y conseguir los fondos para el desarrollo. Como CTO, elegí las tecnologías del proyecto e implementé la mayoría de los sistemas.' } },
    { type: 'decision', title: { en: '', es: '' }, text: { en: 'I built the app from scratch in Swift, and the entire backend in Node.js. All of the machine learning work I did in collaboration with Rafa Arias, our Head of Machine Learning: together we trained the neural networks and optimized them to run in real time on a phone.', es: 'Desarrollé la aplicación desde cero en Swift, y todo el backend en Node.js. Todo lo relacionado con machine learning lo hice en colaboración con Rafa Arias, a cargo de esa área: juntxs entrenamos las redes neuronales y las optimizamos para que funcionaran en tiempo real en un celular.' } },
    { type: 'decision', title: { en: '', es: '' }, text: { en: 'We worked with a design studio that created the app’s branding; based on it, I designed and built the app’s screens.', es: 'Colaboramos con un estudio de diseño que creó el branding de la aplicación; a partir de él, diseñé y desarrollé sus distintas pantallas.' } },
    { type: 'challenge', title: { en: '', es: '' }, text: { en: 'Our biggest challenge, which Rafa Arias and I tackled together, was developing the algorithm that turned the neural networks’ output into a count of keep-ups and a measurement of jump height.', es: 'Nuestro mayor reto, que resolví junto con Rafa Arias, fue desarrollar el algoritmo que usaba los resultados de las redes neuronales para contar las dominadas y medir la altura del salto.' } },
  ],
  whatIDid: [
    { en: '**Prototypes**, iterated on until we reached the best version of the product', es: 'Desarrollé **prototipos** e **iteré** sobre ellos hasta llegar a la mejor versión del producto' },
    { en: 'Handling our **investors’** requests and needs', es: 'Atendí las peticiones y necesidades de los **inversionistas**' },
    { en: '**Pitches to investors** to raise funding for the startup', es: 'Presenté el proyecto a inversionistas para **conseguir fondos** para la startup' },
    { en: 'The **whole app**, from scratch, in **Swift** and **Node.js**', es: 'Desarrollé **la aplicación desde cero** con **Swift** y **Node.js**' },
    { en: '**Computer-vision neural networks**, trained and optimized together with Rafa Arias to run directly **on a phone**', es: 'Junto con Rafa Arias, entrené y optimicé **redes neuronales de visión por computadora** para que corrieran directamente **en un celular**' },
    { en: '**Mini-games** to measure players’ **reaction speed**', es: 'Diseñé e implementé **minijuegos** para medir la **velocidad de reacción**' },
  ],
  tech: ['Swift', 'Node.js', 'Google Cloud', 'Neural Networks'],                                    // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    { name: 'Nadia Haven', role: 'CEO' },
    { name: 'Elliot Stern', role: { en: 'Head of Data Science', es: 'Dirección de ciencia de datos' } },
    { name: 'Isabel Hutchison', role: { en: 'Head of Research', es: 'Dirección de investigación' } },
    { name: 'Rafa Arias', role: { en: 'Head of Machine Learning', es: 'Dirección de machine learning' } },
  ],
};
