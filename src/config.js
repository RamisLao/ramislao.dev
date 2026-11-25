/**
 * SITE-WIDE SETTINGS
 * Most things you'll want to tweak live here or in /src/data and /src/i18n.
 */

export const site = {
  name: 'Ramis Lao',

  // Where contact-form messages go.
  email: 'ramislao@craftedmayhem.studio',

  // Optional: a form service URL (e.g. https://formspree.io/f/xxxxxxx).
  // If empty, the contact form opens the visitor's email app instead.
  formEndpoint: '',

  // true  = side-sheet sections with no content show "Coming soon."
  // false = empty sections are hidden.
  showEmptySections: false,
};

/**
 * COLOR PALETTES
 * Used for the generated placeholder artwork on cards and for accent colors.
 * Each project / teaching entry picks one by name (e.g. palette: 'primary').
 * Every value is the name of a color token from src/styles/tokens.css,
 * so changing a token there updates the artwork too.
 *   bg     – background wall (the floor is a light tint of it, made automatically)
 *   arch   – main shape (also used as the entry's accent color — keep it dark enough for a white icon on top)
 *   accent – secondary shape
 *   sphere – the ball
 */
export const palettes = {
  primary:   { bg: '--primary',      arch: '--accent',       accent: '--highlight', sphere: '--pop-soft' },
  secondary: { bg: '--secondary',    arch: '--primary-deep', accent: '--pop',       sphere: '--bg' },
  accent:    { bg: '--accent',       arch: '--primary',      accent: '--highlight', sphere: '--bg' },
  pop:       { bg: '--pop',          arch: '--secondary',    accent: '--bg',        sphere: '--primary' },
  soft:      { bg: '--pop-soft',     arch: '--primary',      accent: '--highlight', sphere: '--accent' },
  highlight: { bg: '--highlight',    arch: '--accent',       accent: '--primary',   sphere: '--bg' },
  deep:      { bg: '--primary-deep', arch: '--accent',       accent: '--pop',       sphere: '--pop-soft' },
};

/**
 * 3D HERO SETTINGS
 */
export const hero = {
  shapeCount: 26,        // shapes on desktop
  shapeCountMobile: 14,  // shapes on screens narrower than 700px
  size: [0.55, 1.25],    // min / max scale of each shape
  riseSpeed: [0.45, 1.1],// min / max upward speed

  // Mouse "gravity": how strongly shapes are pulled toward the cursor,
  // and how far the pull reaches. Lower gravity = subtler effect.
  gravity: 6,
  gravityRadius: 5,
  damping: 1.4,          // higher = shapes settle back to floating faster

  // Collisions: shapes bump into each other instead of overlapping.
  bounce: 0.35,          // 0 = soft, no bounce · 1 = fully bouncy
  colliderScale: 1,      // collider size vs. the shape (lower = shapes get closer, but may overlap a little)

  // Shape colors: names of color tokens from src/styles/tokens.css
  colors: ['--accent', '--pop', '--pop-soft', '--highlight', '--primary', '--primary-deep', '--secondary', '--accent-soft', '--primary-soft', '--bg'],

  // Available: sphere, hemisphere, arch, cylinder, cone, box, torus, capsule, stairs
  shapes: ['sphere', 'sphere', 'hemisphere', 'arch', 'arch', 'cylinder', 'cone', 'box', 'torus', 'capsule', 'stairs'],
};
