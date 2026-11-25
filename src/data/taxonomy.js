/**
 * Project types and roles, used by the project filters and labels.
 * To add a new one, add a key here and use that key in projects.js.
 * The order here is the order the filter buttons appear in.
 */

export const projectTypes = {
  videogame:   { en: 'Videogame', es: 'Videojuego' },
  webapp:      { en: 'Web app', es: 'App web' },
  mobile:      { en: 'Mobile app', es: 'App móvil' },
  branding:    { en: 'Branding', es: 'Branding' },
  other:       { en: 'Other', es: 'Otro' },
};

export const roles = {
  // The main three first, in the same order as the hero
  producer:    { en: 'Producer', es: 'Producción' },
  programmer:  { en: 'Programmer', es: 'Programación' },
  designer:    { en: 'Designer', es: 'Diseño' },
  artDirector: { en: 'Art Director', es: 'Dirección de arte' },
  composer:    { en: 'Composer', es: 'Composición' },
  community:   { en: 'Community Manager', es: 'Gestión de comunidad' },
};
