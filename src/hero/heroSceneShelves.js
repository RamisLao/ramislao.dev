import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { heroShelves as cfg } from '../config.js';
import { makeGeometry } from './shapes.js';
import { tokenColor, mixHex } from '../utils/tokens.js';
import { onLangChange } from '../i18n/index.js';
import fontData from './outfit-800.typeface.json'; // made by scripts/make-hero-font.mjs

const rand = (min, max) => min + Math.random() * (max - min);
const pick = (list) => list[Math.floor(Math.random() * list.length)];
const TAU = Math.PI * 2;

// Shapes that are round around their vertical axis (a spin wouldn't show if they stood upright)
const ROUND = new Set(['sphere', 'hemisphere', 'cylinder', 'cone', 'capsule']);

/**
 * NOT IN USE — the "store shelves" version of the hero, kept to compare.
 * To bring it back, import './heroSceneShelves.js' instead of './heroScene.js' in hero/index.js.
 *
 * Shapes on invisible store shelves.
 * The hero is split into a grid of equal cells (rows and columns, never drawn),
 * each holding one shape of a random type and color, standing still. When the
 * mouse touches a shape, it spins around its vertical axis, fast; when the
 * mouse leaves, it slows down gradually until it stops.
 *
 * How the name and title stand out (config.js → hero.textBackdrop):
 *   'letters' – they become 3D letters on the shelves, one letter per cell (the
 *               name bigger), in a color the shapes don't use. Letters spin too,
 *               and always come to rest facing front, so they stay readable.
 *   'gap'     – the shelves stay empty behind the HTML text
 *   'halo' / 'outline' – pure CSS around the HTML text (see hero.css)
 * The sky itself is a CSS gradient behind the transparent canvas (see hero.css).
 */
export function createHeroScene(container) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mode = cfg.textBackdrop;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 18);

  // Soft, sunny lighting like a matte clay render
  // Light colors come from the tokens too: white from above, the sunset horizon from below
  const white = tokenColor('--on-dark');
  scene.add(new THREE.HemisphereLight(white, tokenColor('--sky-horizon'), 1.9));
  const sun = new THREE.DirectionalLight(mixHex(white, tokenColor('--accent-soft'), 0.35), 2.2);
  sun.position.set(6, 10, 8);
  scene.add(sun);

  const geometries = Object.fromEntries(
    [...new Set(cfg.shapes)].map((name) => {
      const geo = makeGeometry(name);
      geo.computeBoundingSphere();
      // Radius of the circle the shape sweeps as it turns around its center
      geo.userData.reach = geo.boundingSphere.radius + geo.boundingSphere.center.length();
      return [name, geo];
    })
  );
  const material = (token) => new THREE.MeshStandardMaterial({ color: tokenColor(token), roughness: 0.72, metalness: 0 });
  const materials = cfg.colors.map(material);

  // Every cell is as big as the biggest shape can get, plus some breathing room
  const maxReach = Math.max(...Object.values(geometries).map((g) => g.userData.reach));
  const cell = maxReach * cfg.size[1] * 2 * cfg.spacing;

  // ---------- The shelves ----------
  const items = []; // shapes and letters: { mesh, spinner, holder, speed, letter }
  const grid = { cols: 1, rows: 1, x0: 0, y0: 0, key: '' };
  let halfW = 1; // how much of the world fits on screen at z = 0
  let halfH = 1;
  let needsRender = true; // draw on the next frame even if nothing spins

  /** holder (leans back a little) › spinner (turns around the vertical axis) › the mesh */
  function addItem(mesh, x, y, turn, letter) {
    const spinner = new THREE.Group();
    spinner.rotation.y = turn;
    spinner.add(mesh);
    const holder = new THREE.Group();
    holder.rotation.x = cfg.tilt;
    holder.position.set(x, y, 0);
    holder.add(spinner);
    scene.add(holder);
    const item = { mesh, spinner, holder, speed: 0, letter };
    items.push(item);
    return item;
  }

  function removeItems(which) {
    for (let i = items.length - 1; i >= 0; i--) {
      if (!which(items[i])) continue;
      scene.remove(items[i].holder);
      items.splice(i, 1);
    }
  }

  function fillShelves() {
    halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    halfW = halfH * camera.aspect;

    // Shelves fill the whole height; the rows at the very top and bottom may be cut by the edges
    const cols = Math.max(1, Math.floor((halfW * 2) / cell));
    const rows = Math.max(1, Math.ceil((halfH * 2) / cell));
    const key = `${cols}x${rows}`;
    if (key === grid.key) return false; // same grid: keep the shapes where they are
    Object.assign(grid, { cols, rows, key, x0: -((cols - 1) * cell) / 2, y0: ((rows - 1) * cell) / 2 });

    removeItems((it) => !it.letter);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const name = pick(cfg.shapes);
        const mesh = new THREE.Mesh(geometries[name], pick(materials));
        mesh.scale.setScalar(rand(...cfg.size));
        // Round shapes look the same from every side when they turn upright,
        // so they lie at an angle; then the spin shows
        if (ROUND.has(name)) mesh.rotation.z = rand(0.5, 1.2) * (Math.random() < 0.5 ? -1 : 1);
        addItem(mesh, grid.x0 + c * cell, grid.y0 - r * cell, rand(0, TAU), false);
      }
    }
    return true;
  }

  // ---------- Text on the page ----------
  const content = container.parentElement;
  const titleEl = content.querySelector('.hero-title');
  const roleEl = content.querySelector('.hero-role');
  const pillEl = content.querySelector('[data-hero-roles]');
  const heroContent = content.querySelector('.hero-content');
  content.dataset.textBackdrop = mode; // tells hero.css which treatment is on

  /** A rectangle in pixels on screen → the same rectangle in the 3D world (at z = 0). */
  function toWorld(b, pad = 0) {
    const c = container.getBoundingClientRect();
    const perPx = (halfH * 2) / c.height;
    return {
      left: (b.left - c.left) * perPx - halfW - pad,
      right: (b.right - c.left) * perPx - halfW + pad,
      top: halfH - (b.top - c.top) * perPx + pad,
      bottom: halfH - (b.bottom - c.top) * perPx - pad,
    };
  }

  /** Hide the shapes whose cell touches any of these world rectangles; show the rest. */
  function clearCells(boxes) {
    const half = cell / 2;
    for (const it of items) {
      if (it.letter) continue;
      const { x, y } = it.holder.position;
      const hidden = boxes.some((b) => x + half > b.left && x - half < b.right && y - half < b.top && y + half > b.bottom);
      it.holder.visible = !hidden;
      if (hidden) it.speed = 0;
    }
    needsRender = true;
  }

  // ---------- 3D letters ----------
  const font = new FontLoader().parse(fontData);
  const capRatio = (fontData.capHeight || 700) / fontData.resolution; // cap height as a share of the font size
  const letterGeos = new Map();
  const letterMaterials = { name: material(cfg.letters.nameColor), title: material(cfg.letters.titleColor) };

  function letterGeometry(ch, size) {
    const key = `${ch}|${size.toFixed(4)}`;
    if (!letterGeos.has(key)) {
      const depth = size * cfg.letters.depth;
      const geo = new TextGeometry(ch, {
        font,
        size,
        depth,
        curveSegments: 8,
        bevelEnabled: true,
        bevelThickness: size * 0.04,
        bevelSize: size * 0.025,
        bevelSegments: 2,
      });
      geo.computeBoundingBox();
      const bb = geo.boundingBox;
      // Centered left to right and front to back; capitals centered top to bottom,
      // so every letter in a line sits on the same baseline
      geo.translate(-(bb.min.x + bb.max.x) / 2, -(size * capRatio) / 2, -(bb.min.z + bb.max.z) / 2);
      letterGeos.set(key, geo);
    }
    return letterGeos.get(key);
  }

  /** Split text into lines of at most maxChars, breaking only between words. */
  function wrap(text, maxChars) {
    const lines = [];
    let line = '';
    for (const word of text.split(/\s+/).filter(Boolean)) {
      const next = line ? `${line} ${word}` : word;
      if (next.length <= maxChars || !line) line = next;
      else {
        lines.push(line);
        line = word;
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  /** The biggest letter size (in cells) up to `want` that fits the screen, and the lines at that size. */
  function fit(text, want) {
    const longest = Math.max(...text.split(/\s+/).map((w) => w.length));
    let size = want;
    while (size > 1 && longest * size > grid.cols) size -= 1; // whole cells while they fit
    if (longest * size > grid.cols) size = grid.cols / longest; // smaller than a cell for very long words
    return { size, lines: wrap(text, Math.floor(grid.cols / size + 1e-6)) };
  }

  const snapDown = (y) => grid.y0 + cell / 2 - Math.round((grid.y0 + cell / 2 - y) / cell) * cell; // to a shelf line
  const snapLeft = (x) => grid.x0 - cell / 2 + Math.round((x - (grid.x0 - cell / 2)) / cell) * cell; // to a column line

  function placeLetters() {
    removeItems((it) => it.letter);
    if (!titleEl || !roleEl) return;
    const blocks = [
      { ...fit(titleEl.textContent.trim(), cfg.letters.nameSize), mat: letterMaterials.name },
      { ...fit(roleEl.textContent.trim(), cfg.letters.titleSize), mat: letterMaterials.title },
    ];

    // The roles pill goes right under the letters; leave a shelf for it
    const pillBox = pillEl?.getBoundingClientRect();
    const perPx = (halfH * 2) / container.getBoundingClientRect().height;
    const pillH = pillBox?.height ? pillBox.height * perPx : 0;
    const pillRows = pillH ? Math.ceil(pillH / cell + 0.3) : 0;

    // The whole group (letters + pill) centered top to bottom, starting on a shelf line
    const lettersH = blocks.reduce((sum, b) => sum + b.lines.length * b.size * cell, 0);
    let top = snapDown((lettersH + pillRows * cell) / 2);

    const occupied = [];
    for (const b of blocks) {
      for (const line of b.lines) {
        const step = b.size * cell;
        const width = line.length * step;
        const left = b.size >= 1 ? snapLeft(-width / 2) : -width / 2;
        const glyphSize = (step * cfg.letters.capHeight) / capRatio;
        [...line].forEach((ch, i) => {
          if (ch === ' ') return;
          const mesh = new THREE.Mesh(letterGeometry(ch, glyphSize), b.mat);
          addItem(mesh, left + (i + 0.5) * step, top - step / 2, 0, true);
        });
        occupied.push({ left, right: left + width, top, bottom: top - step });
        top -= step;
      }
    }

    // Move the HTML pill onto its shelf, and keep that shelf clear too
    if (pillH) {
      const pillCenter = top - (pillRows * cell) / 2;
      const centerNow = toWorld(pillBox);
      const shift = ((centerNow.top + centerNow.bottom) / 2 - pillCenter) / perPx;
      const current = parseFloat(heroContent.dataset.shift || '0');
      heroContent.dataset.shift = String(current + shift);
      heroContent.style.transform = `translateY(${current + shift}px)`;
      const w = (pillBox.right - pillBox.left) * perPx;
      occupied.push({ left: -w / 2 - cell * 0.3, right: w / 2 + cell * 0.3, top, bottom: top - pillRows * cell });
    }
    clearCells(occupied);
  }

  // ---------- The gap behind the HTML text ('gap' mode) ----------
  function textBoxes() {
    const boxes = [];
    for (const el of [titleEl, roleEl]) {
      if (!el) continue;
      const range = document.createRange();
      range.selectNodeContents(el); // the box around each line of letters, not the whole block
      boxes.push(...range.getClientRects());
    }
    if (pillEl) boxes.push(pillEl.getBoundingClientRect());
    return boxes.filter((b) => b.width && b.height);
  }

  function updateText() {
    if (!items.length || !container.clientHeight) return;
    if (mode === 'letters') placeLetters();
    else if (mode === 'gap') clearCells(textBoxes().map((b) => toWorld(b, cell * cfg.textMargin)));
  }

  // Keep everything fitted to the text whenever it changes size or wording
  if (mode === 'letters' || mode === 'gap') {
    const watcher = new ResizeObserver(() => updateText());
    [titleEl, roleEl, pillEl].forEach((el) => el && watcher.observe(el));
    document.fonts?.ready.then(updateText); // the final font is wider than the fallback
    onLangChange(() => requestAnimationFrame(updateText)); // after the new words are in
  }

  // ---------- Touching shapes ----------
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  let pointerActive = false;
  let pointerMoved = false;

  window.addEventListener(
    'pointermove',
    (e) => {
      const r = container.getBoundingClientRect();
      if (e.clientY < r.top || e.clientY > r.bottom) {
        pointerActive = false;
        return;
      }
      pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      pointerActive = true;
      pointerMoved = true;
    },
    { passive: true }
  );
  document.documentElement.addEventListener('pointerleave', () => (pointerActive = false));

  let hovered = null;
  function findHovered() {
    if (!pointerActive) return null;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(items.filter((it) => it.holder.visible).map((it) => it.mesh), false)[0];
    return hit ? items.find((it) => it.mesh === hit.object) : null;
  }

  // ---------- Resize ----------
  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    // Pull back on tall (phone) screens so shapes look smaller
    camera.position.z = camera.aspect < 0.8 ? 26 : 18;
    camera.updateProjectionMatrix();
    fillShelves();
    updateText();
    needsRender = true;
  }
  new ResizeObserver(resize).observe(container);
  resize();

  // ---------- Pause when off-screen ----------
  let onScreen = true;
  new IntersectionObserver(([entry]) => (onScreen = entry.isIntersecting)).observe(container);

  // ---------- Animation ----------
  const clock = new THREE.Clock();
  const fast = reduceMotion ? cfg.spinSpeed * 0.25 : cfg.spinSpeed;
  const k = cfg.slowDown;

  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    if (!onScreen || document.hidden || !items.length) return;

    // Things stand still, so the mouse only needs checking when it moves or something spins
    if (pointerMoved || hovered) {
      hovered = findHovered();
      pointerMoved = false;
    }
    renderer.domElement.style.cursor = hovered ? 'pointer' : '';

    let moving = false;
    for (const it of items) {
      const rot = it.spinner.rotation;
      if (it === hovered) {
        it.speed = fast; // touched: full speed right away
        it.rest = undefined;
      } else if (it.speed && it.letter) {
        // Letters glide to a stop facing front: they aim for the first full turn
        // they'd reach while slowing down, and ease into it (speed shrinks with the distance left)
        if (it.rest === undefined) {
          it.rest = Math.ceil((rot.y + it.speed / k) / TAU) * TAU;
          it.rate = it.speed / (it.rest - rot.y);
        }
        it.speed = (it.rest - rot.y) * it.rate;
        if (it.rest - rot.y < 0.02) {
          rot.y = 0; // facing front (a full turn is the same as none)
          it.speed = 0;
          it.rest = undefined;
          needsRender = true;
        }
      } else if (it.speed) {
        it.speed *= Math.exp(-k * dt); // let go: slow down gradually
        if (it.speed < 0.02) it.speed = 0;
      }
      if (it.speed) {
        rot.y += it.speed * dt;
        moving = true;
      }
    }

    // Only draw when something changed, to save battery while everything is still
    if (moving || needsRender) {
      renderer.render(scene, camera);
      needsRender = false;
    }
  });
}
