export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'simplifai',                             // = this file's name, no spaces
  title: 'Simple Predict',
  type: 'webapp',                               // a key from taxonomy.js → projectTypes
  roles: ['programmer', 'uxDesigner', 'graphicDesigner'],           // keys from taxonomy.js → roles
  start: 2017,
  // end: 2018,                                // null = ongoing ("Present") · leave commented for a single year
  palette: 'pop',                              // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: 'main.jpg',                        // card image, 16:9
  // preview: 'clip.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://www.youtube.com/watch?v=6FYEMpUmDBY', caption: { en: 'A walkthrough of the app', es: 'Un recorrido por la aplicación' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'SimplifAI', url: '', type: 'startup' }, // who/how you made it · type: studio · startup · company · collective · freelance · independent
  // client: { name: '…', url: 'https://…' },  // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  // itch: 'https://….itch.io/…',
  links: [
    // { label: { en: '…', es: '…' }, url: 'https://…' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what it is + what you did
  pitch: {
    en: 'A web app that let small and medium-sized businesses train neural networks and make predictions just by uploading a spreadsheet. I designed its interface and built the entire frontend.',
    es: 'Una aplicación web que permitía a pequeñas y medianas empresas entrenar redes neuronales y hacer predicciones con solo subir una hoja de cálculo. Diseñé su interfaz y programé todo el frontend.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '2 people', es: '2 personas' },
    platform: 'Web',
    format: { en: 'Web app with machine learning', es: 'Aplicación web con machine learning' },
    status: { en: 'Completed · not in production', es: 'Terminado · no está en producción' },
    impact: { en: '', es: '' },
  },

  // ── Texts (folded in the sheet) · new paragraph = \n\n ──
  description: {
    en: 'Simple Predict was a web app with one very clear goal: to make neural networks and their predictive power accessible to people with no training in math or programming. It was built for small and medium-sized businesses that wanted to use that power to manage their inventory better, forecast sales, or model any other problem with dependent and independent variables.\n\nTo use it, you just uploaded an Excel or .csv file. The system automatically identified the variables and their data types, and then you chose which one or ones were dependent. From there, it automatically trained many neural networks with different architectures to find the best fit for your problem, and gave you an interface to make predictions on new data with the chosen network.',
    es: 'Simple Predict era una aplicación web con un objetivo muy claro: hacer que las redes neuronales y su poder predictivo fueran accesibles para personas sin formación en matemáticas ni en programación. Estaba pensada para pequeñas y medianas empresas que quisieran aprovechar ese poder para gestionar mejor sus inventarios, predecir sus ventas o modelar cualquier otro problema con variables dependientes e independientes.\n\nPara usarla, bastaba con subir un archivo de Excel o .csv. El sistema identificaba automáticamente las variables y sus tipos de datos, y luego tú elegías cuál o cuáles eran las dependientes. A partir de ahí, entrenaba automáticamente muchas redes neuronales con arquitecturas distintas para encontrar la más adecuada para tu problema, y te daba una interfaz para hacer predicciones con datos nuevos usando la red elegida.',
  },
  roleDetails: {
    en: 'I did the UI/UX design and built the entire frontend with HTML, CSS and jQuery. I also used D3.js to create charts that showed the neural networks’ training process and their predictive power.',
    es: 'Hice el diseño UI/UX e implementé todo el frontend con HTML, CSS y jQuery. También usé D3.js para crear gráficas que mostraban el proceso de entrenamiento de las redes neuronales y su poder predictivo.',
  },
  built: [
    { en: 'The app’s entire frontend, designed and built', es: 'Diseñé e implementé todo el frontend de la aplicación' },
    { en: 'D3.js charts that made the neural networks’ training visible', es: 'Creé gráficas con D3.js para hacer visible el entrenamiento de las redes neuronales' },
  ],
  tech: ['HTML', 'CSS', 'jQuery', 'D3.js'],                                    // chips, e.g. ['Unity', 'C#', 'Blender']
  challenges: [
    {
      en: '',
      es: '',
    },
  ],
  credits: [
    { name: 'Andrés Páez', role: { en: 'Machine learning engineering, backend', es: 'Ingeniería de machine learning, backend' } },
  ],
};
