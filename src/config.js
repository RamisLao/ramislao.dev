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
  secondary: { bg: '--secondary',    arch: '--accent',       accent: '--pop',       sphere: '--accent-soft' },
  accent:    { bg: '--accent',       arch: '--primary',      accent: '--highlight', sphere: '--bg' },
  pop:       { bg: '--pop',          arch: '--secondary',    accent: '--bg',        sphere: '--primary' },
  soft:      { bg: '--pop-soft',     arch: '--primary',      accent: '--highlight', sphere: '--accent' },
  highlight: { bg: '--highlight',    arch: '--accent',       accent: '--primary',   sphere: '--bg' },
  deep:      { bg: '--primary-deep', arch: '--accent',       accent: '--pop',       sphere: '--pop-soft' },
};

/**
 * LOGO MARK (next to "Ramis Lao" in the nav)
 * A small shape that morphs through the site's shapes, holding each one for
 * the same time. The order puts similar shapes next to each other, so every
 * morph is a small step, and alternates contrasting colors.
 *   shape: circle · ring · arch · half · triangle · square · pill
 *   color: a color token from src/styles/tokens.css
 * With "reduce motion" turned on in the visitor's system, only the first shape shows.
 */
export const brandMark = {
  hold: 1800,   // ms each shape stays still
  morph: 700,   // ms each transformation takes
  sequence: [
    { shape: 'circle',   color: '--accent' },        // vermilion
    { shape: 'ring',     color: '--secondary' },     // cobalt   · the circle opens a hole
    { shape: 'arch',     color: '--pop' },           // gold     · the ring opens at the bottom
    { shape: 'half',     color: '--primary-deep' },  // plum     · the arch fills in
    { shape: 'triangle', color: '--primary-soft' },  // rose     · the dome rises to a peak
    { shape: 'square',   color: '--highlight' },     // teal     · the peak flattens out
    { shape: 'pill',     color: '--primary' },       // raspberry · the square squashes
  ],                                                 // …and the pill rounds back into the circle
};

/**
 * 3D HERO SETTINGS — the playground
 * The hero is a box with a floor, a ceiling and two walls (its edges). Shapes
 * lie on the floor like toy blocks. Drag them around (a picked shape squares up
 * to the nearest quarter turn); keys: Q / W turn a quarter left / right, E sets
 * off an explosion at the mouse, R adds a shape, T clears everything.
 * Touch screens: drag any way, buttons to explode, add and clear, no turning.
 * A light from above casts soft shadows on the floor.
 * Shapes only turn flat to the screen, so the physics stays in two dimensions.
 */
export const hero = {
  count: 16,           // shapes lying around when the page opens
  countMobile: 8,      // on screens narrower than 700px
  size: [0.75, 1.25],  // min / max scale of each shape
  gravity: 1,          // 1 = normal; higher = heavier, faster falls
  physicsScale: 60,    // physics units per world unit (Matter.js is steadiest with pixel-sized bodies)
  bounce: 0.2,         // 0 = no bounce · 1 = very bouncy
  friction: 0.5,       // how much shapes grip each other and the floor
  blast: 22,           // strength of an explosion (E key): the speed it gives shapes at its center
  blastRadius: 260,    // how far an explosion reaches, in pixels
  max: 60,             // most shapes at once (past this, adding one makes the oldest disappear)
  shadow: 0.32,        // darkness of a shape's shadow when it rests on the floor
  shadowFade: 0.95,    // how high a shape goes before its shadow fades out, as a share of the hero's height

  // The room: a floor going a little into the screen and a back wall with a faint decal of shapes
  room: {
    front: 1.4,        // how far in front of the shapes the floor starts (world units)
    back: -2.4,        // how far behind them the back wall stands
    floorShade: 0.16,  // how much darker the floor is than the sky's horizon color
    decal: 0.13,       // how visible the shapes on the wall are (0 = invisible, 1 = solid)
    decalCell: 1.15,   // size of each decal cell on the wall (world units)
  },

  // Shape colors: names of color tokens from src/styles/tokens.css
  colors: ['--accent', '--pop', '--pop-soft', '--highlight', '--primary', '--primary-deep', '--secondary', '--accent-soft', '--primary-soft', '--bg'],

  // Available: sphere, hemisphere, arch, cylinder, cone, box, torus, capsule, stairs
  shapes: ['sphere', 'hemisphere', 'arch', 'cylinder', 'cone', 'box', 'torus', 'capsule', 'stairs'],
};

/**
 * NOT IN USE — settings for the "store shelves" hero (src/hero/heroSceneShelves.js).
 * 3D HERO SETTINGS
 * Shapes sit still in an invisible grid, like products on store shelves:
 * every cell holds one shape of a random type and color. Touching a shape with
 * the mouse makes it spin around fast; once the mouse leaves, it slows down
 * gradually until it stops.
 */
export const heroShelves = {
  size: [0.4, 0.55],  // min / max scale of each shape
  spacing: 1,         // cell size, relative to the biggest shape (1 = shapes can almost touch)
  tilt: 0.25,         // how much shapes lean back, so you see a bit of their top (radians)
  spinSpeed: 16,      // how fast a touched shape spins (radians per second)
  slowDown: 1.1,      // how fast it slows down after the mouse leaves (higher = stops sooner)
  // How the name and title stand out from the shapes:
  //   'letters' – they become 3D letters on the shelves, among the shapes (settings below)
  //   'gap'     – the shelves stay empty behind the text
  //   'halo'    – a soft, blurred glow of sky behind the text; the shapes stay but fade into it
  //   'outline' – a cream outline around the letters
  //   'glass'   – a frosted-glass panel behind the text, like the nav bar
  textBackdrop: 'none',
  letters: {
    nameSize: 2,            // cells per letter for "Ramis Lao" (shrinks on narrow screens)
    titleSize: 1,           // cells per letter for the title
    capHeight: 0.72,        // how tall a capital is, as a share of its cell
    depth: 0.35,            // how thick the letters are, as a share of their size
    nameColor: '--ink',     // a color the shapes don't use, so the letters stand out
    titleColor: '--ink',
  },
  textMargin: 0.5,    // 'gap' only: empty space around the name and title, in cells

  // Shape colors: names of color tokens from src/styles/tokens.css
  colors: ['--accent', '--pop', '--pop-soft', '--highlight', '--primary', '--primary-deep', '--secondary', '--accent-soft', '--primary-soft', '--bg'],

  // Available: sphere, hemisphere, arch, cylinder, cone, box, torus, capsule, stairs
  // (no sphere here: a plain ball looks the same while it spins)
  shapes: ['hemisphere', 'arch', 'cylinder', 'cone', 'box', 'torus', 'capsule', 'stairs'],
};

/**
 * NOT IN USE — settings for the earlier "rising columns" hero (src/hero/heroSceneRising.js).
 * 3D HERO SETTINGS
 * The width of the hero is split (invisibly) into columns as wide as the
 * biggest shape can get. Every shape rises slowly inside one column, so shapes
 * never bump into each other. Hovering a shape makes it morph from shape to
 * shape, like the logo.
 */
export const heroRising = {
  size: [0.55, 1.25],     // min / max scale of each shape (the max also sets the column width)
  riseSpeed: [0.22, 0.5], // min / max upward speed; every shape in a column rises at that column's speed
  gap: [12, 26],          // min / max empty space between two shapes in the same column (bigger = fewer shapes)
  spin: 0.3,              // slow spin, in radians per second (0.3 ≈ one turn every 20 seconds)

  // Morphing on hover: hold each shape this long (ms), and take this long (ms) to turn into the next
  morphHold: 500,
  morphTime: 800,
  // The order shapes morph in: each turns into the one most like it, and the
  // colors next to each other contrast (color: a token from tokens.css)
  morphSequence: [
    { shape: 'sphere',     color: '--accent' },        // vermilion
    { shape: 'torus',      color: '--secondary' },     // cobalt   · a hole opens through the ball
    { shape: 'arch',       color: '--pop' },           // gold     · the ring opens at the bottom
    { shape: 'hemisphere', color: '--primary-deep' },  // plum     · the arch fills into a dome
    { shape: 'cone',       color: '--primary-soft' },  // rose     · the dome rises to a peak
    { shape: 'stairs',     color: '--highlight' },     // teal     · the slope breaks into steps
    { shape: 'box',        color: '--primary' },       // raspberry · the steps fill into a cube
    { shape: 'cylinder',   color: '--pop-soft' },      // butter   · the cube rounds out
    { shape: 'capsule',    color: '--primary-deep' },  // plum     · the ends round off
  ],                                                   // …and the capsule shrinks back into the ball

  // Shape colors: names of color tokens from src/styles/tokens.css
  colors: ['--accent', '--pop', '--pop-soft', '--highlight', '--primary', '--primary-deep', '--secondary', '--accent-soft', '--primary-soft', '--bg'],

  // Available: sphere, hemisphere, arch, cylinder, cone, box, torus, capsule, stairs
  shapes: ['sphere', 'sphere', 'hemisphere', 'arch', 'arch', 'cylinder', 'cone', 'box', 'torus', 'capsule', 'stairs'],
};
