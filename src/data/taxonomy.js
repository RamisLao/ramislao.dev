/**
 * Project types and roles, used by the project filters and labels.
 * To add a new one, add a key here and use that key in projects.js.
 * The order here is the order the filter buttons appear in.
 */

export const projectTypes = {
  videogame:   { en: 'Videogame', es: 'Videojuego' },
  webapp:      { en: 'Web app', es: 'App web' },
  mobile:      { en: 'Mobile app', es: 'App móvil' },
  animation:   { en: 'Animation', es: 'Animación' },
  interactive: { en: 'Interactive', es: 'Interactivo' },
  branding:    { en: 'Branding', es: 'Branding' },
  community:   { en: 'Community Manager', es: 'Community Manager' },
};

export const roles = {
  producer:    { en: 'Producer', es: 'Producción' },
  artDirector: { en: 'Art Director', es: 'Dirección de arte' },
  designer:    { en: 'Designer', es: 'Diseño' },
  programmer:  { en: 'Programmer', es: 'Programación' },
  editor:      { en: 'Editor', es: 'Edición' },
  moderator:   { en: 'Moderator', es: 'Moderación' },
};
