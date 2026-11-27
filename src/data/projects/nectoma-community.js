export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'nectoma-community',                     // = this file's name, no spaces
  title: 'Nectoma',
  type: 'other',                               // a key from taxonomy.js → projectTypes
  roles: ['graphicDesigner', 'community'],            // keys from taxonomy.js → roles
  start: 2022,
  end: null,                                   // null = ongoing ("Present") · leave commented for a single year
  palette: 'primary',                            // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: '/media/projects/nectoma-community/main.jpg', // card image, 16:9
  preview: 'preview.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: '/media/projects/nectoma-community/post_1.jpg', caption: { en: 'Poster I designed for an Incubadora de Amiguis (friendship incubator) co-hosted with Conexión en Boga', es: 'Cartel que diseñé para una Incubadora de Amiguis organizada junto con Conexión en Boga' } },
    { src: '/media/projects/nectoma-community/post_2.jpg', caption: { en: 'Poster I designed for the workshop “Apapachos y cuidados más allá de la pareja” (affection and care beyond romantic partners)', es: 'Cartel que diseñé para el taller “Apapachos y cuidados más allá de la pareja”' } },
    { src: '/media/projects/nectoma-community/post_3.jpg', caption: { en: 'Poster I designed for a Fiesta de Apapachos (Cuddle Party)', es: 'Cartel que diseñé para una Fiesta de Apapachos' } },
    { src: '/media/projects/nectoma-community/post_4.jpg', caption: { en: 'Poster I designed for the “Preferred Identities” edition of the Incubadora de Amiguis, with costumes', es: 'Cartel que diseñé para la Incubadora de Amiguis, edición “Identidades preferidas”, con disfraces' } },
    { src: 'https://www.instagram.com/reel/DcjHPv-hMH8/', caption: { en: 'A Reel explaining how a Fiesta de Apapachos (Cuddle Party) works', es: 'Reel que explica cómo funciona una Fiesta de Apapachos' } },
    { src: 'https://www.instagram.com/reel/Ddg36tSRWyW/', caption: { en: 'A Reel breaking down three non-assertive requests', es: 'Reel en el que explicamos la anatomía de tres peticiones no asertivas' } },
    { src: 'https://www.instagram.com/reel/DdWec-aRv1-/', caption: { en: 'A Reel with three examples of agreements for cuddling', es: 'Reel con tres ejemplos para crear acuerdos para el apapacho' } },
    { src: 'https://www.instagram.com/reel/DI2Uh7auWE3/', caption: { en: 'A Reel explaining that cuddling doesn’t have to be sexual', es: 'Reel en el que explicamos que el apapacho puede desligarse de lo sexual' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Nectoma', url: 'https://www.instagram.com/nectoma', type: 'collective' }, // type: studio · startup · company · collective · freelance · independent
  // client: { name: '…', url: 'https://…' },  // or 'Client name'

  // ── Buttons ─────────────────────────────────────────────
  // steam: 'https://store.steampowered.com/app/…',
  // itch: 'https://….itch.io/…',
  links: [
    { label: { en: 'Nectoma on Instagram', es: 'Nectoma en Instagram' }, url: 'https://www.instagram.com/nectoma/' },
  ],

  // ── Top of the side sheet ───────────────────────────────
  // pitch: ONE sentence, ~25 words: what the project is (your roles already show as chips above it)
  pitch: {
    en: 'A collective for practicing social skills and building support networks, with over 7,000 Instagram followers and a 500-member online community.',
    es: 'Un colectivo para practicar habilidades sociales y tejer redes afectivas, con más de 7000 seguidores en Instagram y una comunidad virtual de 500 miembrxs.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '6 people', es: '6 personas' },
    platform: { en: 'Instagram · WhatsApp', es: 'Instagram · WhatsApp' },
    format: { en: '', es: '' },
    status: { en: '', es: '' },
    impact: { en: '7,000 followers · 100+ events · thousands of attendees · 500-member community', es: '7000 seguidores · más de 100 eventos · miles de asistentes · comunidad de 500 miembrxs' },
  },

  // ── Texts · new paragraph = \n\n ──
  description: {
    en: 'Nectoma is a collective I co-founded with Dinorah Ponce. We run workshops and experiences, such as our Fiestas de Apapachos (cuddle parties) and Incubadoras de Amiguis (friendship incubators), that help people grow their social skills and strengthen their support networks. We focus on teaching nonviolent communication, consent, consensus, self-awareness and conflict resolution.\n\nWe also host an online community on WhatsApp, where members can propose activities, ask for advice and recommendations, and practice the tools we share.\n\nWe currently work with four more people who run and facilitate online spaces for the community, such as a monthly Reading Circle and a Meditation Circle every two weeks.',
    es: 'Nectoma es un colectivo que cofundé junto con Dinorah Ponce. Organizamos talleres y experiencias, como las Fiestas de Apapachos y las Incubadoras de Amiguis, para ayudar a las personas a cultivar sus habilidades sociales y fortalecer sus redes afectivas. Nos enfocamos en enseñar comunicación no violenta, consentimiento, consenso, autoconocimiento y resolución de conflictos.\n\nTambién tenemos una comunidad virtual en WhatsApp, donde lxs miembrxs pueden proponer actividades, pedir consejos y recomendaciones, y practicar las herramientas que compartimos.\n\nActualmente colaboramos con cuatro personas más, que gestionan y facilitan espacios virtuales para la comunidad, como un Círculo de Lectura mensual y un Círculo de Meditación quincenal.',
  },
  highlights: [
    {
      type: 'challenge',
      title: { en: 'A warm online space', es: 'Un espacio virtual cálido' },
      text: {
        en: 'Online communities often become impersonal or uncomfortable for some people. We’ve worked hard to build a culture grounded in tenderness, consent and vulnerability.',
        es: 'Es común que las comunidades virtuales se vuelvan espacios impersonales o incómodos para algunas personas. Nos hemos esforzado mucho por construir una cultura cuyos pilares son la ternura, el consentimiento y la vulnerabilidad.',
      },
    },
    {
      type: 'result',
      title: { en: 'Real friendships', es: 'Amistades reales' },
      text: {
        en: 'Many friendships have been born and grown in this space. We’ve met our goal of weaving support networks; we ourselves have even found circles of friends we love dearly.',
        es: 'En este espacio han nacido y se han fortalecido muchas amistades. El objetivo de tejer redes afectivas se ha cumplido; incluso nosotrxs hemos formado círculos de amistades a quienes queremos mucho.',
      },
    },
  ],
  whatIDid: [
    { en: 'With Dinorah, I handle **community management**: planning and creating Instagram content to grow the community', es: 'Junto con Dinorah, llevo la **gestión de la comunidad**: planeo y creo contenido para Instagram para hacerla crecer' },
    { en: 'I design **posters** to promote our activities', es: 'Diseño **carteles** para promocionar nuestras actividades' },
    { en: 'I shoot and edit **Reels** to attract followers and share social tools', es: 'Grabo y edito **Reels** para atraer seguidores y compartir herramientas sociales' },
    { en: 'I design our **sales funnels** and set up the **tools** that make them work', es: 'Diseño nuestros **embudos de venta** y configuro las **herramientas tecnológicas** que los hacen posibles' },
    { en: 'I moderate our **WhatsApp community**, starting conversations and activities that strengthen bonds', es: 'Modero nuestra **comunidad en WhatsApp** y propongo conversaciones y actividades para fortalecer los vínculos' },
  ],
  tech: ['Canva', 'Affinity', 'CapCut', 'Instagram Edits', 'Instagram', 'WhatsApp'], // chips, e.g. ['Unity', 'C#', 'Blender']
  credits: [
    { name: 'Dinorah Ponce', role: { en: 'Co-founder, content creator, moderator, facilitator', es: 'Cofundadora, creadora de contenido, moderadora, facilitadora' } },
    { name: 'Dan', role: { en: 'Reading Circle facilitator', es: 'Facilitador del Círculo de Lectura' } },
    { name: 'Paula', role: { en: 'Meditation Circle facilitator', es: 'Facilitadora del Círculo de Meditación' } },
    { name: 'Ivette', role: { en: 'Meditation Circle facilitator', es: 'Facilitadora del Círculo de Meditación' } },
    { name: 'Vero', role: { en: 'Meditation Circle facilitator', es: 'Facilitadora del Círculo de Meditación' } },
  ],
};
