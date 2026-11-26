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
  // Labels name the activity in both languages ("Production", not "Producer").
  // Production, programming and the three kinds of design first (the hero's "Design" covers all three)
  producer:        { en: 'Production', es: 'Producción' },
  programmer:      { en: 'Programming', es: 'Programación' },
  gameDesigner:    { en: 'Game Design', es: 'Diseño de juegos' },
  uxDesigner:      { en: 'UI/UX Design', es: 'Diseño UI/UX' },
  graphicDesigner: { en: 'Graphic Design', es: 'Diseño gráfico' },
  artDirector:     { en: 'Art Direction', es: 'Dirección de arte' },
  music:           { en: 'Music', es: 'Música' },
  community:       { en: 'Community Management', es: 'Gestión de comunidad' },
};
