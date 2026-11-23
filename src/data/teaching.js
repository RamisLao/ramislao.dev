/**
 * TEACHING
 * Shown as a list in this order. Clicking an entry opens the side sheet.
 *
 * Fields:
 *   id, institution, subject {en, es}, start, end (null = ongoing, leave out for one year)
 *   palette     accent color from config.js
 *   media       optional gallery, same format as in projects.js:
 *                 '/images/teaching/<id>/01.jpg'                image or GIF
 *                 '/images/teaching/<id>/clip.mp4'              looping video (plays like a GIF)
 *                 'https://www.youtube.com/watch?v=VIDEO_ID'    YouTube (Shorts too)
 *                 'https://www.instagram.com/p/POST_ID/'        Instagram post or reel
 *               Files go in public/images/teaching/<id>/ — then just write the filename,
 *               e.g. 'workshop.jpg'. Leave media out for no gallery.
 *   description paragraph(s) about the course / role
 *   topics      list: what you taught
 *   highlights  list: achievements, numbers, memorable moments
 *   links       [{ label: { en, es }, url }]
 */

export const teaching = [
  {
    id: 'nectoma',
    institution: 'Nectoma',
    subject: { en: 'Interpersonal skills', es: 'Habilidades interpersonales' },
    start: 2022,
    end: null,
    palette: 'primary',
    media: [
      // e.g. '/images/teaching/nectoma/workshop.jpg',
    ],
    // Example content — replace with the real thing.
    description: {
      en: 'Describe the course: who the students were, the format, and your approach.',
      es: 'Describe el curso: quiénes eran los estudiantes, el formato y tu enfoque.',
    },
    topics: [
      { en: 'A topic you taught', es: 'Un tema que enseñaste' },
      { en: 'Another topic', es: 'Otro tema' },
    ],
    highlights: [{ en: 'Something you’re proud of', es: 'Algo de lo que estés orgullosx' }],
  },
  {
    id: 'bedu',
    institution: 'Bedu',
    subject: { en: 'Data Science and Machine Learning', es: 'Ciencia de datos y machine learning' },
    start: 2020,
    end: 2025,
    palette: 'accent',
  },
  {
    id: 'vfs',
    institution: 'VFS',
    subject: { en: 'Videogame development', es: 'Desarrollo de videojuegos' },
    start: 2024,
    end: 2025,
    palette: 'secondary',
  },
  {
    id: 'sae',
    institution: 'SAE',
    subject: { en: 'Videogame development', es: 'Desarrollo de videojuegos' },
    start: 2022,
    palette: 'highlight',
  },
  {
    id: 'music-english',
    institution: 'Colegio Suizo de México, Hacemos Música, The Crew',
    subject: { en: 'Music and English', es: 'Música e inglés' },
    start: 2006,
    end: 2016,
    palette: 'deep',
  },
];
