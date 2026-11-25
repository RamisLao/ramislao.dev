export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'kambio',                                // = this file's name, no spaces
  title: 'Kambio',
  type: 'webapp',                              // a key from taxonomy.js → projectTypes
  roles: ['producer', 'programmer'], // keys from taxonomy.js → roles
  start: 2022,
  // end: 2023,                                // null = ongoing ("Present") · leave commented for a single year
  palette: 'highlight',                              // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: '/media/projects/kambio/main.jpg',   // card image, 16:9
  // preview: 'clip.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://youtu.be/T402YGcUt_Y', caption: { en: 'A full walkthrough of the app', es: 'Un recorrido completo por la aplicación' } },
    // { src: 'screenshot_1.png', caption: { en: '', es: '' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Crafted Mayhem', url: 'https://www.craftedmayhem.studio/', type: 'studio' }, // type: studio · startup · company · collective · freelance · independent
  client: { name: 'Kambio', url: 'https://wearekambio.com/' }, // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  // itch: 'https://….itch.io/…',
  links: [
    // { label: { en: '…', es: '…' }, url: 'https://…' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what it is + what you did
  pitch: {
    en: 'A web app built in Unreal Engine 5 for exploring and customizing homes in real time before buying them. I produced it and programmed its logic and streaming.',
    es: 'Una aplicación web en Unreal Engine 5 para recorrer y personalizar viviendas en tiempo real antes de comprarlas. La produje y programé su lógica y su transmisión.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '3 people', es: '3 personas' },
    platform: { en: 'Web app · any device', es: 'App web · cualquier dispositivo' },
    format: { en: 'Architectural visualization tool', es: 'Herramienta de visualización arquitectónica' },
    status: { en: 'Completed · not in production', es: 'Terminado · no está en producción' },
    impact: { en: '', es: '' },
  },

  // ── Texts (folded in the sheet) · new paragraph = \n\n ──
  description: {
    en: 'Kambio is a startup that sells homes and buildings made with materials and techniques that make construction much easier, cheaper and faster. We built them a web app where their customers could view a home in real time and customize it to their liking before buying it.\n\nThe tool showed the home in 3D and let customers change the materials of walls, floors and ceilings, choose their colors, and decide which furniture to include in the purchase. They could also walk through it in first person, to get a close feel for what living there would be like.\n\nWe built it in Unreal Engine 5. Nanite and Lumen sped up asset creation and lighting, and Pixel Streaming made it possible to view the home in high resolution and fine detail from any device: desktops, laptops, tablets or phones.',
    es: 'Kambio es una startup que comercializa viviendas y construcciones hechas con materiales y técnicas que vuelven la construcción mucho más fácil, barata y rápida. Le desarrollamos una aplicación web en la que sus clientes podían visualizar una vivienda en tiempo real y personalizarla a su gusto antes de comprarla.\n\nLa herramienta mostraba la vivienda en 3D y permitía cambiar los materiales de paredes, pisos y techos, elegir sus colores y decidir qué muebles incluir en la compra. También se podía recorrer en primera persona, para experimentar de cerca cómo sería habitarla.\n\nLa desarrollamos en Unreal Engine 5. Nanite y Lumen agilizaron la creación de assets y la iluminación, y Pixel Streaming permitió ver la vivienda en alta resolución y con gran nivel de detalle desde cualquier dispositivo: computadoras de escritorio, laptops, tablets o móviles.',
  },
  roleDetails: {
    en: 'As producer, I researched Kambio’s business model, its needs and exactly how it wanted to use the app. I coordinated the team (a designer, a 3D modeler and me): I planned and assigned everyone’s tasks and made sure everything was delivered on time. I was also the client’s point of contact, planning the production pipeline in detail and making adjustments based on their feedback.\n\nAs programmer, I implemented all the designs and 3D models, as well as the app’s logic, and set up Pixel Streaming to test it on any device. I also designed and built a flexible system so Kambio could easily add new house designs.',
    es: 'Como productorx, investigué a fondo el modelo de negocio de Kambio, sus necesidades y el uso concreto que quería darle a la aplicación. Coordiné al equipo (un diseñador, una modeladora 3D y yo): planeé y repartí las tareas de cada quien y me aseguré de que todo se entregara a tiempo. También fui el punto de contacto con el cliente, para planear en detalle el pipeline de producción y hacer ajustes a partir de su retroalimentación.\n\nComo programadorx, implementé todos los diseños y modelos 3D, además de la lógica de la aplicación, y configuré Pixel Streaming para probarla en cualquier dispositivo. También diseñé e implementé un sistema flexible para que Kambio pudiera añadir nuevos diseños de viviendas con facilidad.',
  },
  built: [
    { en: 'Researched the client’s business model and needs', es: 'Investigué el modelo de negocio y las necesidades del cliente' },
    { en: 'Managed the project and coordinated a team of 3', es: 'Gestioné el proyecto y coordiné a un equipo de 3 personas' },
    { en: 'Designed and implemented all of the app’s logic in Unreal Engine 5', es: 'Diseñé e implementé toda la lógica de la aplicación en Unreal Engine 5' },
    { en: 'Designed a system that makes it easy to add new house designs', es: 'Diseñé un sistema para añadir nuevos diseños de viviendas de forma sencilla' },
    { en: 'Set up Pixel Streaming so the app runs in high resolution on any device', es: 'Configuré Pixel Streaming para usar la aplicación en alta resolución desde cualquier dispositivo' },
  ],
  tech: ['Unreal Engine 5', 'Pixel Streaming', 'Nanite + Lumen', 'Trello'],                             // chips, e.g. ['Unity', 'C#', 'Blender']
  challenges: [
    {
      en: 'Construction calls for very precise measurements and very specific requirements. The biggest challenge was carrying those measurements, sizes and textures into the app to reproduce each home as faithfully as possible.',
      es: 'La construcción exige medidas muy precisas y requisitos muy específicos. El mayor reto fue trasladar esas medidas, tamaños y texturas a la aplicación para reproducir cada vivienda con la mayor fidelidad posible.',
    },
  ],
  credits: [
    { name: 'Jimena Fernández', role: { en: '3D modeling', es: 'Modelado 3D' } },
    { name: 'Adrián Regnier', role: { en: 'UI/UX design', es: 'Diseño UI/UX' } },
  ],
};
