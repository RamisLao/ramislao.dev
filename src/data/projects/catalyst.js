export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'catalyst',                              // = this file's name, no spaces
  title: 'Custom-Made Touchscreen Table',
  type: 'other',                               // a key from taxonomy.js → projectTypes
  roles: ['programmer'],                       // keys from taxonomy.js → roles
  start: 2018,
  // end: 2019,                                // null = ongoing ("Present") · leave commented for a single year
  palette: 'accent',                             // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: 'main.jpg',                        // card image, 16:9
  // preview: 'clip.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: 'https://youtu.be/H_BtefOD1Go', caption: { en: 'The table in use', es: 'La mesa en funcionamiento' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Catalyst', url: '', type: 'startup' }, // who/how you made it · type: studio · startup · company · collective · freelance · independent
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
    en: 'A custom-built, 5-meter circular touchscreen table that showcased investment opportunities in Mexico at Hannover Messe 4.0. I programmed its Unity app and its hardware integration.',
    es: 'Una mesa táctil circular de 5 metros, hecha a la medida para mostrar oportunidades de inversión en México en Hannover Messe 4.0. Programé su aplicación en Unity y su integración con el hardware.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '3 people', es: '3 personas' },
    platform: { en: 'Custom-made hardware', es: 'Hardware hecho a la medida' },
    format: { en: 'Unity app + touchscreen table', es: 'App en Unity + mesa táctil' },
    status: { en: 'Completed', es: 'Terminado' },
    impact: { en: 'Shown at Hannover Messe 4.0 (2018) to visitors including Angela Merkel', es: 'La presentamos en Hannover Messe 4.0 (2018) ante visitantes como Angela Merkel' },
  },

  // ── Texts (folded in the sheet) · new paragraph = \n\n ──
  description: {
    en: 'We developed this project specifically for the Hannover Messe 4.0 technology fair, as part of the Mexican delegation that brought new technologies to the event. The table’s goal was to showcase investment opportunities in Mexico.\n\nWe built the touchscreen technology from scratch. The table was circular, 5 meters in diameter, and ran an app made in Unity. We also used RFID so visitors could open different sections of the app by placing cylindrical pieces on the table.',
    es: 'Desarrollamos este proyecto específicamente para la feria de tecnología Hannover Messe 4.0, como parte de la comitiva mexicana que llevó nuevas tecnologías al evento. El objetivo de la mesa era mostrar oportunidades de inversión en México.\n\nDesarrollamos la tecnología táctil desde cero. La mesa era circular, de 5 metros de diámetro, y dentro de ella corría una aplicación hecha en Unity. También usamos tecnología RFID para que el público pudiera abrir distintas secciones de la aplicación colocando unas piezas cilíndricas sobre la mesa.',
  },
  roleDetails: {
    en: 'I implemented the entire app in Unity and was in charge of connecting the hardware with the software. I also worked on the computer-vision system, built with OpenCV, that detected people’s fingers and mapped them onto the Unity app.',
    es: 'Implementé toda la aplicación en Unity y me encargué de conectar el hardware con el software. También trabajé en el sistema de visión por computadora, hecho con OpenCV, que identificaba los dedos de las personas y los mapeaba en la aplicación de Unity.',
  },
  built: [
    { en: 'The entire app, in Unity', es: 'Implementé toda la aplicación en Unity' },
    { en: 'The system that used RFID chips to send information to the app', es: 'Implementé el sistema que usaba chips RFID para enviar información a la aplicación' },
    { en: 'Work on the computer-vision system, using OpenCV', es: 'Trabajé en el sistema de visión por computadora con OpenCV' },
    { en: 'Presenting the table to the public at Hannover Messe 4.0, as part of the Mexican delegation', es: 'Formé parte de la comitiva que llevó la mesa a Hannover Messe 4.0 y la presentó al público' },
  ],
  tech: ['Unity', 'OpenCV', 'RFID'],                                    // chips, e.g. ['Unity', 'C#', 'Blender']
  challenges: [
    {
      en: 'Building the computer-vision system was a big challenge. Because of the table’s shape and size, traditional methods didn’t work for us, so we had to set up a very complex system of projectors and mirrors to make it work. Mapping finger contact onto the app was another big challenge.',
      es: 'Implementar el sistema de visión por computadora fue un gran reto. Por la forma y el tamaño de la mesa, los métodos tradicionales no nos servían, así que tuvimos que montar un sistema muy complejo de proyectores y espejos para hacerlo funcionar. Mapear el contacto de los dedos en la aplicación también fue todo un reto.',
    },
  ],
  credits: [
    { name: 'Cris', role: { en: 'Programmer, hardware designer', es: 'Programación, diseño de hardware' } },
    { name: 'Ceci', role: { en: 'Graphic designer', es: 'Diseño gráfico' } },
  ],
};
