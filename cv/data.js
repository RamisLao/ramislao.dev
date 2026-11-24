/**
 * CV CONTENT — everything the CV says lives in this file.
 *
 * ── How to update ──────────────────────────────────────────────────────
 * 1. Edit the texts below. Any text can be one string (same in both languages)
 *    or { es: '…', en: '…' }.
 * 2. Preview: with the dev server running (npm run dev), open
 *      http://localhost:5173/cv/cv.html?lang=es   (or ?lang=en)
 *    It updates as you save. A red banner appears if a page gets too full.
 * 3. Export both PDFs:  npm run cv   → files land in cv/pdf/
 *
 * ── Filled in automatically from the website ───────────────────────────
 *   • Colors and fonts       → src/styles/tokens.css (the active palette)
 *   • "Tools & tech"          → src/data/about.js → software
 *   • Featured project cards  → src/data/projects.js → featured (or the list below)
 *
 * ── Dates ──────────────────────────────────────────────────────────────
 *   from / to: '2024-08' (year-month), '2016' (year only), or to: null = "Present".
 *   Month names are written for you in each language.
 *
 * ── Bullets ────────────────────────────────────────────────────────────
 *   Use <em>…</em> for italics (e.g. product names).
 * ──────────────────────────────────────────────────────────────────────
 */

export const cv = {
  // ── Header ──────────────────────────────────────────────────────────
  name: 'Ramis Lao',
  legalName: 'José Ramón Arias González',
  role: 'Creative Technologist',
  // The colored words under your name (same as the website's hero)
  disciplines: [
    { es: 'Programación', en: 'Programming' },
    { es: 'Diseño', en: 'Design' },
    { es: 'Producción', en: 'Production' },
  ],

  // Contact card. shape: circle | square | triangle | half | arch | ring | pill
  // Leave a text empty ('') to hide that line in one language.
  // web: false → left out of the copy published on the website (Download CV button),
  //              but kept in the PDFs you send yourself (cv/pdf/).
  // { private: 'name' } → a line kept in cv/private.js, which is NOT uploaded to GitHub
  //              (the repo is public). If that file is missing, the line is skipped.
  //              See cv/private.example.js for the format.
  contact: [
    { shape: 'circle',   text: { es: 'Ciudad de México, México', en: 'Mexico City, Mexico' } },
    { private: 'phone' },
    { shape: 'triangle', text: 'ramislao@craftedmayhem.studio', href: 'mailto:ramislao@craftedmayhem.studio' },
    { shape: 'arch',     text: 'ramislao.craftedmayhem.studio', href: 'https://ramislao.craftedmayhem.studio' },
    { private: 'birthdate' },
  ],

  // Short intro under the header (2–3 lines)
  profile: {
    es: 'Más de diez años desarrollando videojuegos, aplicaciones y experiencias interactivas. Combino diseño, programación full-stack y producción para llevar proyectos de la primera idea al lanzamiento, ya sea liderando equipos o metiéndome de lleno en los detalles.',
    en: 'More than ten years building games, apps and interactive experiences. I combine design, full-stack programming and production to take projects from the first idea all the way to launch, whether I’m leading the team or deep in the details.',
  },

  // ── Featured projects (cards with images, page 1) ───────────────────
  // 'site' = the same projects as the website's featured row.
  // Or list project ids (file names in src/data/projects/), e.g. ['yanga-casting', 'party-demon'].
  // Four fit in one row.
  projects: 'site',

  // ── Project development experience (main section, page 1) ───────────
  development: [
    {
      from: '2024-08', to: null,
      mode: { es: 'Tiempo parcial', en: 'Part-time' },
      org: 'Crafted Mayhem', place: { es: 'México / Canadá', en: 'Mexico / Canada' },
      title: { es: 'Cofundadorx y directorx creativx', en: 'Co-founder & Creative Director' },
      points: [
        { es: 'Desarrollo videojuegos propios y soluciones digitales a la medida (aplicaciones web y experiencias interactivas) para clientes.',
          en: 'Develop original games and custom digital products (web apps and interactive experiences) for clients.' },
        { es: 'Gestiono proyectos de principio a fin, integrando dirección creativa, diseño UI/UX y programación full-stack.',
          en: 'Run projects end to end, bringing together creative direction, UI/UX design and full-stack programming.' },
      ],
    },
    {
      from: '2023-03', to: '2024-08',
      mode: { es: 'Tiempo completo', en: 'Full-time' },
      org: 'HyperBeard', place: { es: 'México', en: 'Mexico' },
      title: { es: 'Diseñadorx y programadorx full-stack', en: 'Full-Stack Designer & Programmer' },
      points: [
        { es: 'Desarrollé herramientas internas en Unity y aplicaciones web para optimizar la producción de videojuegos y los flujos de trabajo de equipos multidisciplinarios (programación, arte, diseño y administración).',
          en: 'Built internal Unity tools and web apps that streamlined game production and the workflows of multidisciplinary teams (programming, art, design and operations).' },
      ],
    },
    {
      from: '2017-07', to: '2019-12',
      mode: { es: 'Tiempo completo', en: 'Full-time' },
      org: 'Marakana Sports', place: { es: 'EE. UU.', en: 'USA' },
      title: { es: 'Cofundadorx y Lead Game Developer', en: 'Co-founder & Lead Game Developer' },
      points: [
        { es: 'Diseñé e implementé la app <em>Combine</em>, una suite de minijuegos interactivos con visión por computadora y sensores para evaluar el potencial atlético.',
          en: 'Designed and built <em>Combine</em>, a suite of interactive mini-games that use computer vision and sensors to assess athletic potential.' },
      ],
    },
    {
      from: '2018-01', to: '2018-12',
      mode: { es: 'Tiempo completo', en: 'Full-time' },
      org: 'Catalyst', place: { es: 'México', en: 'Mexico' },
      title: { es: 'Ingenierx de software full-stack', en: 'Full-Stack Software Engineer' },
      points: [
        { es: 'Desarrollé aplicaciones web para clientes internacionales como HP y AirTM.',
          en: 'Built web apps for international clients such as HP and AirTM.' },
        { es: 'Construí soluciones integradas de software y hardware con Unity, presentadas en la feria de tecnología industrial <em>Hannover Messe 4.0</em>.',
          en: 'Built integrated hardware and software solutions with Unity, showcased at the industrial technology fair <em>Hannover Messe 4.0</em>.' },
      ],
    },
    {
      from: '2017-01', to: '2018-01',
      mode: { es: 'Tiempo parcial', en: 'Part-time' },
      org: 'SimplifAI', place: { es: 'EE. UU.', en: 'USA' },
      title: { es: 'Cofundadorx y CTO', en: 'Co-founder & CTO' },
      points: [
        { es: 'Diseñé la arquitectura y colaboré en el desarrollo de <em>Simple Predict</em>, una aplicación para democratizar el acceso a las redes neuronales en pequeñas y medianas empresas.',
          en: 'Designed the architecture of <em>Simple Predict</em> and helped build it: an app that made neural networks accessible to small and medium-sized businesses.' },
      ],
    },
  ],

  // ── Teaching experience (secondary, page 2) ─────────────────────────
  teaching: [
    {
      from: '2022-11', to: null,
      mode: { es: 'Tiempo parcial', en: 'Part-time' },
      org: 'Nectoma', place: { es: 'México', en: 'Mexico' },
      title: { es: 'Cofundadorx, facilitadorx y gestorx de comunidad', en: 'Co-founder, Facilitator & Community Manager' },
      points: [
        { es: 'Diseño e imparto talleres de comunicación asertiva, consentimiento y dinámicas de grupo enfocadas en el aprendizaje colaborativo.',
          en: 'Design and lead workshops on assertive communication, consent and group dynamics, focused on collaborative learning.' },
        { es: 'Gestiono una comunidad virtual de más de 300 miembrxs, con actividades culturales, espacios de apoyo colectivo y eventos presenciales.',
          en: 'Manage an online community of 300+ members, with cultural activities, peer-support spaces and in-person events.' },
      ],
    },
    {
      from: '2020-01', to: '2025-07',
      mode: { es: 'Por proyecto', en: 'Project-based' },
      org: 'BEDU', place: { es: 'México', en: 'Mexico' },
      title: { es: 'Instructorx senior de Ciencia de Datos y Machine Learning', en: 'Senior Data Science & Machine Learning Instructor' },
      points: [
        { es: 'Diseñé e impartí programas de Machine Learning, Ciencia de Datos e IA Ética para más de 1000 estudiantes y profesionales, con material didáctico, proyectos prácticos y evaluaciones alineadas con la industria.',
          en: 'Designed and taught Machine Learning, Data Science and Ethical AI programs for more than 1,000 students and professionals, with teaching materials, hands-on projects and assessments aligned with industry needs.' },
      ],
    },
    {
      from: '2024-08', to: '2025-06',
      mode: { es: 'Por proyecto', en: 'Project-based' },
      org: 'Vancouver Film School', place: { es: 'Canadá / LATAM', en: 'Canada / LATAM' },
      title: { es: 'Embajadorx académicx y tallerista', en: 'Academic Ambassador & Workshop Leader' },
      points: [
        { es: 'Diseñé e impartí conferencias y talleres internacionales sobre desarrollo de videojuegos y trayectorias profesionales en el entretenimiento digital.',
          en: 'Designed and gave international talks and workshops on game development and career paths in digital entertainment.' },
      ],
    },
    {
      from: '2022-01', to: '2022-09',
      mode: { es: 'Tiempo parcial', en: 'Part-time' },
      org: 'Instituto SAE', place: { es: 'CDMX', en: 'Mexico City' },
      title: { es: 'Instructorx senior de Diseño y Programación de Videojuegos', en: 'Senior Game Design & Programming Instructor' },
      points: [
        { es: 'Lideré el diseño curricular e impartí 3 asignaturas universitarias: Programación de Motores en C++, Arte Técnico en Unity e Inteligencia Artificial para Videojuegos.',
          en: 'Led curriculum design and taught 3 university courses: Engine Programming in C++, Technical Art in Unity, and AI for Games.' },
      ],
    },
    {
      from: '2006', to: '2016',
      mode: { es: 'Diversas instituciones', en: 'Various institutions' },
      org: 'Colegio Suizo de México · Hacemos Música · The Crew', place: '',
      title: { es: 'Docente de Música e Inglés Técnico', en: 'Music & Technical English Teacher' },
      points: [
        { es: 'Impartí música (teoría, ensamble y ejecución), dirección musical para teatro y cursos de inglés avanzado para negocios.',
          en: 'Taught music (theory, ensemble and performance), musical direction for theater, and advanced business English.' },
      ],
    },
  ],

  // ── Education ───────────────────────────────────────────────────────
  education: [
    {
      years: '2024 – 2027',
      name: { es: 'Licenciatura en Diseño Gráfico Digital', en: 'BA in Digital Graphic Design' },
      note: { es: 'Titulación prevista para enero de 2027', en: 'Expected graduation: January 2027' },
      where: 'UNIR',
    },
    {
      years: '2008 – 2016',
      name: { es: 'Licenciatura en Composición Musical', en: 'BA in Music Composition' },
      note: { es: 'Créditos concluidos, sin titulación · Promedio 9.7 / 10', en: 'Coursework completed, degree not conferred · GPA 9.7 / 10' },
      where: { es: 'Facultad de Música, UNAM', en: 'Faculty of Music, UNAM' },
      badge: { es: 'Medalla Gabino Barreda', en: 'Gabino Barreda Medal' },
    },
  ],

  courses: [
    {
      years: '2023',
      name: { es: 'Diploma en Ilustración Digital', en: 'Diploma in Digital Illustration' },
      note: { es: 'Calificación final: 100 / 100', en: 'Final grade: 100 / 100' },
      where: 'Escena',
    },
    {
      years: '2021 – 2022',
      name: { es: 'Diploma en Diseño de Videojuegos', en: 'Diploma in Game Design' },
      note: { es: 'Promedio 94.15', en: 'GPA 94.15' },
      where: { es: 'Vancouver Film School, Canadá', en: 'Vancouver Film School, Canada' },
      badge: { es: 'Premio a la Excelencia en Código', en: 'Award for Excellence in Code' },
    },
    { years: '2017 – 2018', name: { es: 'Nanodegree en Inteligencia Artificial', en: 'Artificial Intelligence Nanodegree' }, where: 'Udacity' },
    { years: '2017', name: { es: 'Nanodegree en Fundamentos de Deep Learning', en: 'Deep Learning Foundations Nanodegree' }, where: 'Udacity' },
    { years: '2016 – 2017', name: { es: 'Especialización en Fundamentos de la Computación', en: 'Fundamentals of Computing Specialization' }, where: 'Coursera · Rice University' },
  ],

  awards: [
    {
      years: '2022',
      name: { es: 'Premios estudiantiles de VFS', en: 'VFS Student Awards' },
      note: { es: '3 premios: Mejor Juego de Mesa, Excelencia en Código y Mejor Proyecto Final.', en: '3 awards: Best Board Game, Excellence in Code and Best Final Project.' },
      where: { es: 'Vancouver Film School, Canadá', en: 'Vancouver Film School, Canada' },
    },
    {
      years: '2021',
      name: { es: 'Beca “VFS’ My Year”', en: '“VFS’ My Year” Scholarship' },
      note: { es: 'Beca con valor de 18 300 CAD.', en: 'Scholarship worth CAD 18,300.' },
      where: { es: 'Vancouver Film School, Canadá', en: 'Vancouver Film School, Canada' },
    },
    {
      years: '2016',
      name: { es: 'Medalla Gabino Barreda a la Excelencia Académica', en: 'Gabino Barreda Medal for Academic Excellence' },
      note: { es: 'Otorgada al promedio más alto de cada generación.', en: 'Awarded to the highest GPA of each graduating class.' },
      where: { es: 'UNAM, México', en: 'UNAM, Mexico' },
    },
    {
      years: '2012 – 2016',
      name: { es: 'Diploma de Aprovechamiento', en: 'Academic Excellence Diploma' },
      note: { es: 'Al mejor promedio de la generación, cada semestre. Recibido 4 años seguidos.', en: 'Top GPA of the class each semester. Received 4 years in a row.' },
      where: { es: 'UNAM, México', en: 'UNAM, Mexico' },
    },
  ],

  // level: 1–5 (the dots)
  languages: [
    { name: { es: 'Español', en: 'Spanish' }, level: 5, note: { es: 'Lengua materna', en: 'Native' } },
    { name: { es: 'Inglés', en: 'English' }, level: 5, note: { es: 'Nativo', en: 'Native' } },
    { name: { es: 'Francés', en: 'French' }, level: 3, note: { es: 'Intermedio · DELF B2', en: 'Intermediate · DELF B2' } },
  ],

  // ── Labels (section titles and small words) ─────────────────────────
  labels: {
    projects:    { es: 'Proyectos destacados', en: 'Featured projects' },
    development: { es: 'Desarrollo de proyectos', en: 'Project development' },
    teaching:    { es: 'Docencia', en: 'Teaching' },
    tools:       { es: 'Herramientas y tecnología', en: 'Tools & tech' },
    education:   { es: 'Educación', en: 'Education' },
    courses:     { es: 'Diplomas y cursos', en: 'Diplomas & courses' },
    awards:      { es: 'Premios', en: 'Awards' },
    languages:   { es: 'Idiomas', en: 'Languages' },
    present:     { es: 'Presente', en: 'Present' },
    morework:    { es: 'Más proyectos en', en: 'More work at' },
  },

  // File names for the exported PDFs.
  // full → cv/pdf/ (everything, for sending yourself)
  // web  → public/files/ (no `web: false` lines; offered by the site's Download CV button,
  //        and these names must match src/data/about.js → cv)
  files: {
    full: { es: 'Ramis_Lao_CV_ES.pdf', en: 'Ramis_Lao_CV_EN.pdf' },
    web:  { es: 'ramis-lao-cv-es.pdf', en: 'ramis-lao-cv-en.pdf' },
  },
};
