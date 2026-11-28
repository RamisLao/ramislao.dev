/**
 * ABOUT SECTION
 */

export const about = {
  // Put your photo in /public/media/about/ and set e.g. '/media/about/photo.jpg'.
  // While empty, a placeholder illustration is shown.
  photo: '/media/about/me.jpg',

  // Your CV: put the PDF in /public/files/ and write its filename.
  // One file for both languages:   cv: 'ramis-lao-cv.pdf',
  // Or one per language:           cv: { en: 'ramis-lao-cv-en.pdf', es: 'ramis-lao-cv-es.pdf' },
  // The "Download CV" button only appears once the file actually exists.
  // These two are made by `npm run cv` (names set in cv/data.js → files.web).
  cv: { en: 'ramis-lao-cv-en.pdf', es: 'ramis-lao-cv-es.pdf' },
  showCV: false, // true shows the "Download CV" button again

  // Paragraphs are separated by a blank line (\n\n).
  bio: {
    en: 'Hi! I’m Ramis Lao. I live at the intersection of design, technology and play. I love learning new things and diving into challenging projects that push my skills and knowledge to the limit.\n\nI have more than ten years of experience building interactive applications. I enjoy leading teams as much as getting deep into the details: I can keep the big picture in view while obsessing over the perfect curve of a shape.\n\nI love collaborating. If you have a project in mind and are looking for someone to bring it to life with you, from the first idea all the way to launch, drop me a line!',
    es: '¡Hola! Soy Ramis Lao. Vivo en la intersección entre el diseño, la tecnología y el juego. Me encanta aprender cosas nuevas y lanzarme a proyectos retadores que lleven mis capacidades y conocimientos al límite.\n\nTengo más de diez años de experiencia desarrollando aplicaciones interactivas. Disfruto tanto liderar equipos como meterme de lleno en los detalles: puedo tener presente el panorama completo y, al mismo tiempo, obsesionarme con la curvatura perfecta de una figura.\n\nMe encanta colaborar. Si tienes un proyecto en mente y buscas a alguien con quien hacerlo realidad, desde la primera idea hasta el lanzamiento, ¡escríbeme!',
  },

  /**
   * Skills, shown as playful cards.
   * shape: circle | half | arch | square | triangle | ring | pill
   * color: a color token from src/styles/tokens.css, e.g. 'var(--primary)' (any CSS color also works)
   */
  skills: [
    {
      shape: 'triangle', color: 'var(--pop)',
      name: { en: 'Production', es: 'Producción' },
      line: { en: 'Seeing projects through to the end.', es: 'Llevar los proyectos hasta el final.' },
    },
    {
      shape: 'ring', color: 'var(--secondary)',
      name: { en: 'Project management', es: 'Gestión de proyectos' },
      line: { en: 'Careful planning to deliver on time.', es: 'Planear con precisión para entregar a tiempo.' },
    },
    {
      shape: 'circle', color: 'var(--accent)',
      name: { en: 'Game design', es: 'Diseño de juegos' },
      line: { en: 'Turning systems into fun.', es: 'Convertir sistemas en diversión.' },
    },
    {
      shape: 'square', color: 'var(--primary-deep)',
      name: { en: 'Programming', es: 'Programación' },
      line: { en: 'Making ideas actually work.', es: 'Hacer que las ideas funcionen.' },
    },
    {
      shape: 'arch', color: 'var(--primary)',
      name: { en: 'UI/UX design', es: 'Diseño UI/UX' },
      line: { en: 'Designing around the people who use it.', es: 'Diseñar pensando en quienes lo usan.' },
    },
    {
      shape: 'circle', color: 'var(--highlight)',
      name: { en: 'Communication', es: 'Comunicación' },
      line: { en: 'Helping people and ideas connect.', es: 'Facilitar la conexión entre personas e ideas.' },
    },
    {
      shape: 'pill', color: 'var(--primary-soft)',
      name: { en: 'Divergent thinking', es: 'Pensamiento divergente' },
      line: { en: 'Coming up with ideas that break convention.', es: 'Crear ideas que se salen de lo convencional.' },
    },
    {
      shape: 'half', color: 'var(--accent-text)',
      name: { en: 'Teaching', es: 'Enseñanza' },
      line: { en: 'Making hard things enjoyable.', es: 'Hacer disfrutable lo difícil.' },
    },
  ],

  // Software & technical capabilities, grouped. (Starter list — edit to match.)
  software: [
    { group: { en: 'Design', es: 'Diseño' }, items: ['Figma', 'Photoshop', 'Illustrator', 'InDesign', 'Affinity'] },
    { group: { en: 'Video Editing', es: 'Edición de Video' }, items: ['Premiere', 'Davinci Resolve', 'Instagram Edits', 'Capcut'] },
    { group: { en: 'Development', es: 'Desarrollo' }, items: ['JavaScript', 'TypeScript', 'C#', 'Python', 'HTML & CSS', 'React', 'Node.js', 'three.js'] },
    { group: { en: 'Games', es: 'Juegos' }, items: ['Unity', 'Unreal Engine 5', 'Aseprite', 'Blender'] },
    { group: { en: 'Data & ML', es: 'Datos y ML' }, items: ['pandas', 'NumPy', 'scikit-learn', 'Jupyter'] },
    { group: { en: 'Workflow', es: 'Flujo de trabajo' }, items: ['Git', 'Miro', 'Trello'] },
  ],
};
