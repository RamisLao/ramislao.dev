/**
 * TEACHING
 * Shown as a list in this order. Clicking an entry opens the side sheet.
 *
 * Fields:
 *   id, institution, subject {en, es}, start, end (null = ongoing, leave out for one year)
 *   (all entries share one color: the palette's accent, --accent in tokens.css)
 *   media       optional gallery, same format as in projects.js:
 *                 '/media/teaching/<id>/01.jpg'                image or GIF
 *                 '/media/teaching/<id>/clip.mp4'              looping video (plays like a GIF)
 *                 'https://www.youtube.com/watch?v=VIDEO_ID'    YouTube (Shorts too)
 *                 'https://www.instagram.com/p/POST_ID/'        Instagram post or reel
 *               Files go in public/media/teaching/<id>/ — then just write the filename,
 *               e.g. 'workshop.jpg'. Leave media out for no gallery.
 *   description paragraph(s) about the course / role
 *   topics      list: what you taught
 *   highlights  list: achievements, numbers, memorable moments
 *   links       buttons under the gallery (optional; entries without a url are skipped):
 *                 [{ label: { en: 'Instagram', es: 'Instagram' }, url: 'https://…' }]
 *   collaborators  people you did it with (optional) → "Collaborators / Colaboradorxs":
 *                 [{ name: 'Ana López', role: { en: 'Co-facilitator', es: 'Cofacilitación' }, url: 'https://…' }]
 *                 role and url are optional; with a url, the name becomes a link.
 */

export const teaching = [
  {
    id: 'nectoma',
    institution: 'Nectoma',
    subject: { en: 'Interpersonal skills', es: 'Habilidades interpersonales' },
    start: 2022,
    end: null,
    media: [
      { src: 'foto_1.jpg', caption: { en: '', es: '' } },
      { src: 'foto_2.jpg', caption: { en: '', es: '' } },
      { src: 'foto_3.jpg', caption: { en: '', es: '' } },
      { src: 'foto_4.jpg', caption: { en: '', es: '' } },
      { src: 'foto_5.jpg', caption: { en: '', es: '' } },
      { src: 'foto_6.jpg', caption: { en: '', es: '' } },
    ],
    description: {
      en: 'Nectoma is a project that aims to build social skills so people can create and sustain their networks of care. We run workshops and experiences on topics such as consent, nonviolent communication, agreements and conflict resolution.\n\nWe organize Fiestas de Apapachos (cuddle parties): spaces where people can explore non-sexual physical touch grounded in respect and consent. It’s an experience that can help ease the sense of isolation so many people feel today, and a way to practice consent tools and meet new people.\n\nWe also host Incubadoras de Amiguis (friendship incubators), spaces where adults can meet new people and relearn how to connect with others through tenderness, play and consent.\n\nOn top of that, we run a wide range of workshops, such as “Co-creating a Culture of Consent”, “Affection and Care Beyond the Couple”, “The Art of Self-Love”, “Diversifying Our Bonds” and many more.',
      es: 'Nectoma es un proyecto que busca cultivar habilidades sociales para que las personas puedan construir y sostener sus redes afectivas. Hacemos talleres y experiencias sobre temas como el consentimiento, la comunicación no violenta, los acuerdos y la resolución de conflictos.\n\nOrganizamos Fiestas de Apapachos, espacios en los que las personas pueden explorar el contacto físico no sexual desde el respeto y el consentimiento. Es una experiencia que puede ayudar a aliviar la sensación de aislamiento que muchas personas viven hoy en día, y también una forma de practicar herramientas de consentimiento y conocer gente nueva.\n\nTambién organizamos Incubadoras de Amiguis, espacios en los que las personas adultas pueden conocer gente nueva y reaprender a conectar con otrxs desde la ternura, el juego y el consentimiento.\n\nAdemás, impartimos una gran variedad de talleres, como “Cocreando una cultura del consentimiento”, “Apapachos y cuidados más allá de la pareja”, “El arte del amor propio”, “Diversificar nuestros vínculos” y muchos más.',
    },
    topics: [
      { en: 'Consent and consensus', es: 'Consentimiento y consenso' },
      { en: 'Agreements and boundaries', es: 'Acuerdos y límites' },
      { en: 'Conflict resolution', es: 'Resolución de conflictos' },
      { en: 'Nonviolent communication', es: 'Comunicación no violenta' },
      { en: 'Self-care and collective care', es: 'Autocuidado y cuidados colectivos' },
    ],
    highlights: [
      {
        en: 'We’ve built a rich and beautiful community that has been with us throughout these 4 years. We haven’t only watched its members build networks of care among themselves; we’ve also made friendships we treasure with some of the people we’ve met through this project.',
        es: 'Hemos construido una comunidad muy rica y muy bella que nos ha acompañado a lo largo de estos 4 años. No solo hemos visto a sus miembrxs construir redes afectivas entre sí: nosotrxs también hemos hecho amistades que atesoramos con algunas de las personas que conocimos en este proyecto.',
      },
    ],
    links: [
      { label: { en: 'Nectoma on Instagram', es: 'Nectoma en Instagram' }, url: 'https://www.instagram.com/nectoma/' },
    ],
    collaborators: [
      { name: 'Dinorah', role: { en: 'Facilitator, workshop leader', es: 'Facilitadora, tallerista' } },
    ],
  },
  {
    id: 'bedu',
    institution: 'BEDU',
    subject: { en: 'Data Science and Machine Learning', es: 'Ciencia de datos y machine learning' },
    start: 2020,
    end: 2025,
    description: {
      en: 'For 5 years I taught online courses on cutting-edge tech topics, for people of all ages who wanted to keep up with the most relevant subjects of the moment. I designed the teaching materials, activities, hands-on projects and assessments for all of my courses, aligned with the real needs of the tech industry.',
      es: 'Durante 5 años impartí cursos en línea sobre temas de vanguardia en tecnología, para personas de todas las edades que querían actualizarse en los temas más relevantes del momento. Diseñé el material didáctico, las actividades, los proyectos prácticos y las evaluaciones de todos mis cursos, alineados con las necesidades reales de la industria tecnológica.',
    },
    topics: [
      { en: 'Data analysis with Python', es: 'Análisis de datos con Python' },
      { en: 'Data processing with Python', es: 'Procesamiento de datos con Python' },
      { en: 'Machine learning', es: 'Machine learning' },
      { en: 'Ethical AI', es: 'Inteligencia artificial ética' },
    ],
    highlights: [
      {
        en: 'Over those 5 years I taught more than 1,000 people. Many of them went on to land jobs in those fields, or to earn a promotion, after finishing the programs. It was deeply rewarding to meet so many people along the way and support their professional growth.',
        es: 'En esos 5 años di clases a más de 1000 personas. Muchas de ellas, al terminar los programas, consiguieron trabajo en esas áreas o lograron un ascenso. Me dio mucha satisfacción conocer a tantas personas en ese proceso y acompañarlas en su crecimiento profesional.',
      },
    ],
    links: [
      { label: { en: 'BEDU website', es: 'Sitio de BEDU' }, url: 'https://bedu.org/' },
    ],
  },
  {
    id: 'vfs',
    institution: 'Vancouver Film School',
    subject: { en: 'Game development and ethical AI', es: 'Desarrollo de videojuegos e IA ética' },
    start: 2024,
    end: 2025,
    media: [
      { src: 'medellin_1.jpeg', caption: { en: 'My talk at UPB’s Saberes summer school, “Humanidad Aumentada” (Augmented Humanity), in Medellín', es: 'Mi conferencia en la Escuela de Verano Saberes UPB, “Humanidad Aumentada”, en Medellín' } },
      { src: 'medellin_2.jpeg', caption: { en: 'On stage, with my introduction on the big screen', es: 'En el escenario, con mi presentación en la pantalla' } },
      { src: 'medellin_3.jpeg', caption: { en: 'A hands-on workshop in a classroom, with code on screen', es: 'Un taller práctico en un aula, con código en la pantalla' } },
      { src: 'medellin_4.jpeg', caption: { en: 'The audience at the talk', es: 'El público de la conferencia' } },
      { src: 'medellin_5.jpeg', caption: { en: 'A conversation on stage after the talk', es: 'Una conversación en el escenario después de la conferencia' } },
    ],
    description: {
      en: 'As an academic ambassador for Vancouver Film School, I gave workshops and talks to promote the school and invite more people to enroll in its Game Design program. In Monterrey and Medellín I gave talks on the myths of generative AI, and I also led game feel workshops, with practices and shortcuts to make a game feel great to play.',
      es: 'Como embajadorx académicx de Vancouver Film School, impartí talleres y conferencias para dar a conocer la escuela e invitar a más personas a inscribirse en su programa de Diseño de Videojuegos. En Monterrey y en Medellín di conferencias sobre los mitos de la IA generativa, y también impartí talleres de game feel, con prácticas y atajos para que un videojuego se sienta genial al jugarlo.',
    },
    topics: [
      { en: 'Ethical AI', es: 'Inteligencia artificial ética' },
      { en: 'Game development', es: 'Desarrollo de videojuegos' },
      { en: 'Game feel', es: 'Game feel' },
    ],
    highlights: [
      {
        en: 'The talks took place on very large stages, in front of hundreds of people. Traveling to Medellín and connecting with students there who want to make games was very rewarding.',
        es: 'Las conferencias fueron en escenarios muy grandes, frente a cientos de personas. Fue muy satisfactorio viajar a Medellín y conectar allá con estudiantes que quieren desarrollar videojuegos.',
      },
    ],
    links: [
      { label: { en: 'VFS website', es: 'Sitio de VFS' }, url: 'https://vfs.edu/' },
    ],
  },
  {
    id: 'sae',
    institution: 'SAE Institute',
    subject: { en: 'Game development', es: 'Desarrollo de videojuegos' },
    start: 2022,
    media: [
    ],
    description: {
      en: 'I designed the curricula, created the materials and content, and taught 3 university courses in SAE Institute’s Game Design and Programming department.',
      es: 'Diseñé los planes de estudio, elaboré los materiales y contenidos, e impartí 3 asignaturas universitarias en el departamento de Diseño y Programación de Videojuegos de SAE Institute.',
    },
    topics: [
      { en: 'AI for games', es: 'Inteligencia artificial para videojuegos' },
      { en: 'Technical art in Unity', es: 'Arte técnico en Unity' },
      { en: 'Game engine programming in C++', es: 'Programación de motores de videojuegos en C++' },
    ],
    highlights: [
      {
        en: '',
        es: '',
      },
    ],
    links: [
      { label: { en: 'SAE website', es: 'Sitio de SAE' }, url: 'https://mexico.sae.edu/' },
    ],
  },
  {
    id: 'the-crew',
    institution: 'The Crew',
    subject: { en: 'English', es: 'Inglés' },
    start: 2014,
    end: 2016,
    description: {
      en: 'I taught online English classes to businesspeople, focusing on conversation and on business and entrepreneurship vocabulary.',
      es: 'Impartí clases de inglés en línea a personas del mundo de los negocios, con énfasis en la conversación y en el vocabulario de negocios y emprendimiento.',
    },
    topics: [
      { en: 'Business English', es: 'Inglés para negocios' },
      { en: 'Conversation', es: 'Conversación' },
      { en: 'Entrepreneurship vocabulary', es: 'Vocabulario de emprendimiento' },
    ],
    highlights: [
      {
        en: '',
        es: '',
      },
    ],
    links: [
      { label: { en: '', es: '' }, url: '' },
    ],
  },
  {
    id: 'colegio-suizo',
    institution: 'Colegio Suizo de México',
    subject: { en: 'Musical direction for theater', es: 'Dirección musical para teatro' },
    start: 2010,
    end: 2013,
    description: {
      en: 'I was in charge of the music for 3 musical theater productions: “Play It Again, Sam”, “Cats” and “Chicago”. I wrote the musical arrangements, directed the ensemble and performed on piano and guitar.',
      es: 'Estuve a cargo de la parte musical de 3 montajes de teatro musical: “Play It Again, Sam”, “Cats” y “Chicago”. Hice los arreglos musicales, dirigí el ensamble y toqué el piano y la guitarra.',
    },
    topics: [
      { en: 'Musical arrangement', es: 'Arreglo musical' },
      { en: 'Ensemble direction', es: 'Dirección de ensamble' },
      { en: 'Performance', es: 'Interpretación' },
    ],
    highlights: [
      {
        en: 'All 3 productions I worked on played to full houses at every performance, across long runs.',
        es: 'Las 3 obras en las que participé llenaron la sala en todas sus funciones, a lo largo de temporadas largas.',
      },
    ],
    links: [
      { label: 'Colegio Suizo de México', url: 'https://csm.edu.mx/' },
    ],
  },
  {
    id: 'hacemos-musica',
    institution: 'Hacemos Música',
    subject: { en: 'Music', es: 'Música' },
    start: 2006,
    end: 2010,
    description: {
      en: 'I taught bass, guitar, piano, early music education and ensemble to children and teenagers aged 3 to 18. I also helped produce the school’s annual concerts.',
      es: 'Di clases de bajo, guitarra, piano, iniciación musical y ensamble a niñxs y adolescentes de 3 a 18 años. También participé en la producción de los conciertos anuales de la escuela.',
    },
    topics: [
      { en: 'Instrument lessons', es: 'Clases de instrumento' },
      { en: 'Early music education', es: 'Iniciación musical' },
      { en: 'Ensemble', es: 'Ensamble' },
    ],
    highlights: [
      {
        en: '',
        es: '',
      },
    ],
    links: [
      { label: { en: '', es: '' }, url: '' },
    ],
  },
];
