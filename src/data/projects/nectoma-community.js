export default {
  // ── Basics ──────────────────────────────────────────────
  id: 'nectoma-community',                     // = this file's name, no spaces
  title: 'Nectoma',
  type: 'community',                           // a key from taxonomy.js → projectTypes
  roles: ['designer', 'editor', 'moderator'],  // keys from taxonomy.js → roles
  start: 2022,
  end: null,                                   // null = ongoing ("Present") · leave commented for a single year
  palette: 'primary',                            // colors from config.js, used when there's no cover

  // ── Images & video ─ files go in public/media/projects/<id>/ (a plain filename is enough) ──
  cover: '/media/projects/nectoma-community/main.jpg', // card image, 16:9
  // preview: 'clip.mp4',                      // hover video on featured cards (otherwise the first .mp4 in media)
  // Each item: { src: file or link, caption: short description shown under it }
  media: [
    { src: '/media/projects/nectoma-community/post_1.jpg', caption: { en: 'Poster I designed for an Incubadora de Amiguis (friendship incubator) co-hosted with Conexión en Boga', es: 'Cartel que diseñé para una Incubadora de Amiguis organizada junto con Conexión en Boga' } },
    { src: '/media/projects/nectoma-community/post_2.jpg', caption: { en: 'Poster I designed for the workshop “Apapachos y cuidados más allá de la pareja” (affection and care beyond romantic partners)', es: 'Cartel que diseñé para el taller “Apapachos y cuidados más allá de la pareja”' } },
    { src: '/media/projects/nectoma-community/post_3.jpg', caption: { en: 'Poster I designed for a Fiesta de Apapachos (cuddle party)', es: 'Cartel que diseñé para una Fiesta de Apapachos' } },
    { src: '/media/projects/nectoma-community/post_4.jpg', caption: { en: 'Poster I designed for the “Preferred Identities” edition of the Incubadora de Amiguis, with costumes', es: 'Cartel que diseñé para la Incubadora de Amiguis, edición “Identidades preferidas”, con disfraces' } },
    { src: 'https://www.instagram.com/reel/DcjHPv-hMH8/?utm_source=ig_web_copy_link&hvrq=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==', caption: { en: '', es: '' } },
    { src: 'https://www.instagram.com/reel/Ddg36tSRWyW/?utm_source=ig_web_button_share_sheet&gwpx=MzRlODBiNWFlZA==', caption: { en: '', es: '' } },
    { src: 'https://www.instagram.com/reel/DdWec-aRv1-/?utm_source=ig_web_copy_link&hvrq=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==', caption: { en: '', es: '' } },
    { src: 'https://www.instagram.com/reel/DI2Uh7auWE3/?utm_source=ig_web_copy_link&hvrq=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==', caption: { en: '', es: '' } },
  ],

  // ── Made with / for (use the ones that apply) ─────────────
  org: { name: 'Nectoma', url: 'https://www.instagram.com/nectoma', type: 'collective' }, // type: studio · startup · company · collective · freelance · independent
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
    en: 'A social-skills collective I co-founded. I lead its content and online community, which have grown to 7,000 followers and over 100 in-person events.',
    es: 'Un colectivo de habilidades sociales que cofundé. Llevo su contenido y su comunidad virtual, que ya suman 7,000 seguidores y más de 100 eventos presenciales.',
  },
  facts: {                                     // small tiles under the media; empty ones are hidden
    team: { en: '2 co-founders', es: '2 cofundadorxs' },
    platform: { en: 'Instagram · WhatsApp · in person', es: 'Instagram · WhatsApp · presencial' },
    format: { en: '', es: '' },
    status: { en: '', es: '' },
    impact: { en: '7,000 followers · 100+ events · thousands of attendees · 300-member community', es: '7,000 seguidores · más de 100 eventos · miles de asistentes · comunidad de 300 miembrxs' },
  },

  // ── Texts (folded in the sheet) · new paragraph = \n\n ──
  description: {
    en: 'Nectoma is a collective I co-founded with Dinorah Ponce. We run workshops and experiences that help people grow their social skills and strengthen their support networks, including our Fiestas de Apapachos (cuddle parties), Incubadoras de Amiguis (friendship incubators) and other events. We focus on teaching nonviolent communication, consent, consensus, self-awareness and conflict resolution.\n\nWe also host an online community on WhatsApp, where members can propose activities, ask for advice and recommendations, and practice the tools we share.',
    es: 'Nectoma es un colectivo que cofundé junto con Dinorah Ponce. Organizamos talleres y experiencias para ayudar a las personas a cultivar sus habilidades sociales y fortalecer sus redes afectivas, como las Fiestas de Apapachos, las Incubadoras de Amiguis y otros eventos. Nos enfocamos en enseñar comunicación no violenta, consentimiento, consenso, autoconocimiento y resolución de conflictos.\n\nTambién tenemos una comunidad virtual en WhatsApp, donde lxs miembrxs pueden proponer actividades, pedir consejos y recomendaciones, y practicar las herramientas que compartimos.',
  },
  roleDetails: {
    en: 'Together with Dinorah, I run the project’s social media, mainly Instagram: I write, film and edit reels. I also design some of the posters we use to promote our events, and I handle customer service, answering questions from people who reach out to us.\n\nIn our online community, I’m a moderator: I propose activities and moderate interactions between members.\n\nIn 4 years, we’ve built an audience of 7,000 followers, hosted more than 100 in-person events and welcomed thousands of people. Our online community currently has 300 members.',
    es: 'Junto con Dinorah, llevo las redes sociales del proyecto, principalmente Instagram: escribo, grabo y edito reels. También diseño algunos de los carteles con los que promocionamos nuestros eventos y me encargo de la atención a clientes, respondiendo las dudas de quienes nos escriben.\n\nEn la comunidad virtual soy moderadorx: propongo actividades y modero las interacciones entre las personas.\n\nEn 4 años hemos construido una cuenta con 7,000 seguidores, realizado más de 100 eventos presenciales y recibido a miles de personas. Actualmente, nuestra comunidad virtual tiene 300 miembrxs.',
  },
  built: [
    { en: 'Posters to promote the activities we offer', es: 'Carteles para promocionar las actividades que ofrecemos' },
    { en: 'Reels that attract new followers and share social skills tools', es: 'Reels para atraer más seguidores y compartir herramientas sociales' },
    { en: 'Our sales funnels, plus the setup of the tech tools that power them', es: 'Nuestros embudos de venta, junto con la configuración de las herramientas tecnológicas que los hacen posibles' },
  ],
  tech: ['Canva', 'Adobe Illustrator', 'Affinity', 'Capcut', 'Instagram Edits', 'Adobe Premiere'], // chips, e.g. ['Unity', 'C#', 'Blender']
  challenges: [
    {
      en: 'The topics we work on are niche, and can even feel uncomfortable for some people. Growing our community without letting outside pressure compromise our values has been a big challenge.',
      es: 'Los temas que trabajamos son de nicho e incluso pueden resultar incómodos para algunas personas. Ha sido un gran reto hacer crecer nuestra comunidad sin que las presiones externas comprometan nuestros valores.',
    },
  ],
  credits: [
    { name: 'Dinorah Ponce', role: { en: 'Co-founder, content, moderation', es: 'Cofundadora, contenido, moderación' } },
  ],
};
