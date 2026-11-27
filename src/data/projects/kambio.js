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
  preview: 'preview.mp4',                   // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: '/media/projects/kambio/screenshot_1.jpg', caption: { en: 'Customizing the wood finishes of the furniture', es: 'Personalización de los acabados de madera de los muebles' } },
    { src: '/media/projects/kambio/screenshot_2.jpg', caption: { en: 'Choosing the main color for the outside of the home', es: 'Selección del color principal para el exterior de la vivienda' } },
    { src: '/media/projects/kambio/screenshot_3.jpg', caption: { en: 'Exploration mode, to imagine what walking through your new home will feel like', es: 'El modo de exploración, para imaginar cómo será caminar por tu nueva casa' } },
    { src: '/media/projects/kambio/screenshot_4.jpg', caption: { en: 'Screensaver mode, to sit back and enjoy your creation', es: 'El modo protector de pantalla, para sentarte a disfrutar de tu creación' } },
    { src: 'https://youtu.be/T402YGcUt_Y', caption: { en: 'A full walkthrough of the app', es: 'Un recorrido completo por la aplicación' } },
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
  // pitch: ONE sentence, ~25 words: what the project is (your roles already show as chips above it)
  pitch: {
    en: 'A web app built with Unreal Engine 5 to customize your dream home in real time and explore it in first person, before making the big decision to buy it.',
    es: 'Una aplicación web hecha con Unreal Engine 5 para personalizar la casa de tus sueños en tiempo real y explorarla en primera persona, antes de tomar la gran decisión de comprarla.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '3 people', es: '3 personas' },
    platform: { en: 'Web app · any device', es: 'App web · cualquier dispositivo' },
    format: { en: 'Architectural visualization tool', es: 'Herramienta de visualización arquitectónica' },
    status: { en: 'Completed · not in production', es: 'Terminado · no está en producción' },
    impact: { en: '', es: '' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Kambio is a startup that sells homes and buildings made with materials and techniques that make construction much easier, cheaper and faster. We built them a web app where their customers could view a home in real time and customize it to their liking before buying it.\n\nThe tool showed the home in 3D and let customers change the materials of walls, floors and ceilings, choose their colors, and decide which furniture to include in the purchase. They could also walk through it in first person, to get a close feel for what living there would be like.\n\nWe built it in Unreal Engine 5. Nanite and Lumen sped up asset creation and lighting, and Pixel Streaming made it possible to view the home in high resolution and fine detail from any device: desktops, laptops, tablets or phones.',
    es: 'Kambio es una startup que comercializa viviendas y construcciones hechas con materiales y técnicas que vuelven la construcción mucho más fácil, barata y rápida. Le desarrollamos una aplicación web en la que sus clientes podían visualizar una vivienda en tiempo real y personalizarla a su gusto antes de comprarla.\n\nLa herramienta mostraba la vivienda en 3D y permitía cambiar los materiales de paredes, pisos y techos, elegir sus colores y decidir qué muebles incluir en la compra. También se podía recorrer en primera persona, para experimentar de cerca cómo sería habitarla.\n\nLa desarrollamos en Unreal Engine 5. Nanite y Lumen agilizaron la creación de assets y la iluminación, y Pixel Streaming permitió ver la vivienda en alta resolución y con gran nivel de detalle desde cualquier dispositivo: computadoras de escritorio, laptops, tablets o móviles.',
  },
  highlights: [
    {
      type: 'challenge',
      title: { en: 'High fidelity on any device', es: 'Alta fidelidad en cualquier dispositivo' },
      text: {
        en: 'The app was high fidelity: it rendered realistic models in real time. At the same time, it had to be easy to access through the web for people on any kind of device. That’s why we chose UE5 and Pixel Streaming: the rendering happened on a remote server, and each person’s device only received the video.',
        es: 'La aplicación era de alta fidelidad: renderizaba modelos realistas en tiempo real. Al mismo tiempo, necesitábamos que fuera fácil acceder a ella desde la web, con cualquier tipo de dispositivo. Por eso elegimos UE5 y Pixel Streaming: el render se hacía en un servidor remoto y al dispositivo de cada persona solo le llegaba el video.',
      },
    },
    {
      type: 'decision',
      title: { en: 'Dynamic lighting with Lumen', es: 'Iluminación dinámica con Lumen' },
      text: {
        en: 'We chose Lumen instead of baked lighting because we knew our client needed to be able to customize the app easily. We built everything so that adding new homes would be very easy, without needing a programmer.',
        es: 'Decidimos usar Lumen en lugar de iluminación precalculada, porque sabíamos que nuestro cliente debía poder personalizar la aplicación fácilmente. Implementamos todo pensando en que fuera muy fácil añadir nuevas viviendas sin necesidad de unx programadorx.',
      },
    },
  ],
  whatIDid: [
    { en: 'Led the **research** to fully understand the client’s **needs** and **business model**', es: 'Llevé a cabo la **investigación** para comprender a fondo las **necesidades** del cliente y su **modelo de negocio**' },
    { en: '**Managed the project** and coordinated a **team of three**', es: '**Gestioné el proyecto** y coordiné a un **equipo de tres personas**' },
    { en: 'Programmed **the entire app** in **Unreal Engine 5**, making the most of tools like Lumen and Nanite', es: 'Programé **toda la aplicación** en **Unreal Engine 5**, aprovechando herramientas como Lumen y Nanite' },
    { en: 'Built a **reusable system** so Kambio could design and add **new homes** without needing a programmer', es: 'Creé un **sistema reutilizable** para que Kambio pudiera diseñar e implementar **nuevas viviendas** sin necesidad de unx programadorx' },
    { en: 'Set up **Pixel Streaming** so the app runs in high resolution on **any device**', es: 'Configuré **Pixel Streaming** para usar la aplicación en alta resolución desde **cualquier dispositivo**' },
  ],
  tech: ['Unreal Engine 5', 'Pixel Streaming', 'Nanite + Lumen', 'Trello'],                             // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    { name: 'Jimena Fernández', role: { en: '3D modeling', es: 'Modelado 3D' } },
    { name: 'Adrián Regnier', role: { en: 'UI/UX design', es: 'Diseño UI/UX' } },
  ],
};
