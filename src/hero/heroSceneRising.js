import * as THREE from 'three';
import { heroRising as cfg } from '../config.js';
import { makeGeometry } from './shapes.js';
import { createMorphGeometry } from './morph.js';
import { tokenColor, mixHex } from '../utils/tokens.js';
import { hexToOklab, oklabToHex, mixOklab, easeInOut } from '../utils/color.js';

const rand = (min, max) => min + Math.random() * (max - min);
const pick = (list) => list[Math.floor(Math.random() * list.length)];

/**
 * NOT IN USE — the earlier "rising columns" version of the hero, kept to compare.
 * To bring it back, import './heroSceneRising.js' instead of './heroScene.js' in hero/index.js.
 *
 * Primitive shapes rising slowly through a sky, in columns.
 * The width is split (invisibly) into columns as wide as the biggest shape, so
 * shapes in neighboring columns never touch. Each column rises at its own speed
 * and keeps random gaps between its shapes. Shapes spin slowly; hovering one
 * makes it morph from shape to shape (see morph.js), like the logo.
 * The sky itself is a CSS gradient behind the transparent canvas (see hero.css).
 */
export function createHeroScene(container) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    [...new Set([...cfg.shapes, ...cfg.morphSequence.map((m) => m.shape)])].map((name) => {
      const geo = makeGeometry(name);
      geo.computeBoundingSphere();
      // Radius of the circle the shape sweeps as it spins around its center
      geo.userData.reach = geo.boundingSphere.radius + geo.boundingSphere.center.length();
      return [name, geo];
    })
  );
  const maxReach = Math.max(...Object.values(geometries).map((g) => g.userData.reach));
  const colors = cfg.colors.map((name) => tokenColor(name));

  // ---------- Morphing ----------
  const sequence = cfg.morphSequence.map((m) => ({ shape: m.shape, color: hexToOklab(tokenColor(m.color)) }));
  const stepOf = (name) => Math.max(0, sequence.findIndex((m) => m.shape === name));
  // The morphing geometry takes a moment to build, so it's made when the browser is idle
  let morphGeo = null;
  const buildMorph = () => (morphGeo ||= createMorphGeometry(sequence.map((m) => m.shape)));
  (window.requestIdleCallback || ((fn) => setTimeout(fn, 1500)))(buildMorph);

  // ---------- Columns ----------
  // As wide as the thickest shape at its biggest size, whatever way it's turned
  const colWidth = maxReach * cfg.size[1] * 2;
  let columns = []; // { x, speed }
  let halfW = 1;
  let halfH = 1;

  function layout() {
    halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z; // visible half height at z = 0
    halfW = halfH * camera.aspect;
    const count = Math.max(1, Math.floor((halfW * 2) / colWidth));
    const left = -(count * colWidth) / 2 + colWidth / 2; // centered, so the leftover space splits evenly
    const old = columns;
    columns = Array.from({ length: count }, (_, i) => ({
      x: left + i * colWidth,
      speed: old[i]?.speed ?? rand(...cfg.riseSpeed),
    }));
  }

  // ---------- Shapes ----------
  const shapes = []; // active: { mesh, col, scale, reach, axis, step, color, morph, wait }
  const pool = [];

  function makeShape(col, top) {
    const mesh =
      pool.pop() || new THREE.Mesh(undefined, new THREE.MeshStandardMaterial({ roughness: 0.72, metalness: 0 }));
    const name = pick(cfg.shapes);
    mesh.geometry = geometries[name];
    const hex = pick(colors);
    mesh.material.color.set(hex);
    const scale = rand(...cfg.size);
    mesh.scale.setScalar(scale);
    mesh.rotation.set(rand(0, Math.PI * 2), rand(0, Math.PI * 2), rand(0, Math.PI * 2));
    const reach = mesh.geometry.userData.reach * scale;
    mesh.position.set(columns[col].x, top - reach, 0); // top is where its top edge goes
    const shape = {
      mesh,
      col,
      scale,
      reach,
      axis: new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize(), // slow spin around this
      step: stepOf(name), // where it is in the morph sequence
      color: hexToOklab(hex),
      morph: null, // { from, to, t } while morphing
      wait: 0, // time left before the next morph starts
    };
    scene.add(mesh);
    shapes.push(shape);
    return shape;
  }

  function removeShape(i) {
    const [s] = shapes.splice(i, 1);
    scene.remove(s.mesh);
    pool.push(s.mesh);
  }

  /** The lowest shape in a column (the last one that came in). */
  function lowestIn(col) {
    let low = null;
    for (const s of shapes) if (s.col === col && (!low || s.mesh.position.y < low.mesh.position.y)) low = s;
    return low;
  }

  /** Fill a column from top to bottom, so the hero starts with shapes instead of empty. */
  function fillColumn(col) {
    let top = halfH + rand(0, cfg.gap[1]); // start somewhere above the view, at a random offset
    while (true) {
      const s = makeShape(col, top);
      top = s.mesh.position.y - s.reach - rand(...cfg.gap);
      if (top < -halfH) break;
    }
  }

  /** Bring a new shape in from below once the last one has risen far enough. */
  function feedColumn(col) {
    const low = lowestIn(col);
    if (!low) return fillColumn(col);
    if (low.nextGap === undefined) low.nextGap = rand(...cfg.gap);
    const bottomEdge = low.mesh.position.y - low.reach;
    if (bottomEdge - low.nextGap >= -halfH) makeShape(col, bottomEdge - low.nextGap);
  }

  // ---------- Hover ----------
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  let pointerActive = false;

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
    },
    { passive: true }
  );
  document.documentElement.addEventListener('pointerleave', () => (pointerActive = false));

  function findHovered() {
    if (!pointerActive) return null;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(shapes.map((s) => s.mesh), false)[0];
    return hit ? shapes.find((s) => s.mesh === hit.object) : null;
  }

  /** Morph one step: hold, then blend into the next shape and color in the sequence. */
  function updateMorph(s, hovered, dt) {
    if (!s.morph) {
      if (!hovered) {
        s.wait = 0; // the next hover starts morphing right away
        return;
      }
      s.wait -= dt * 1000;
      if (s.wait > 0) return;
      // Swap the regular shape for the morphing one, showing the same shape
      const geo = buildMorph();
      if (s.mesh.geometry !== geo) {
        s.mesh.geometry = geo;
        s.mesh.updateMorphTargets();
        s.mesh.morphTargetInfluences.fill(0);
        s.mesh.morphTargetInfluences[s.step] = 1;
      }
      s.reach = maxReach * s.scale; // it can grow to any shape's size while morphing
      s.morph = { from: s.step, to: (s.step + 1) % sequence.length, t: 0, color: s.color };
    }

    const m = s.morph;
    m.t = Math.min(1, m.t + (dt * 1000) / cfg.morphTime);
    const e = easeInOut(m.t);
    const inf = s.mesh.morphTargetInfluences;
    inf.fill(0);
    inf[m.from] = 1 - e;
    inf[m.to] = e;
    s.color = mixOklab(m.color, sequence[m.to].color, e);
    s.mesh.material.color.set(oklabToHex(s.color));

    if (m.t >= 1) {
      // Arrived: this is its shape now
      s.step = m.to;
      s.morph = null;
      s.wait = cfg.morphHold;
      if (!hovered) {
        // Back to the regular (crisper) version of the shape it landed on
        s.mesh.geometry = geometries[sequence[s.step].shape];
        s.reach = s.mesh.geometry.userData.reach * s.scale;
      }
    }
  }

  // ---------- Resize ----------
  let initialized = false;
  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    // Pull back on tall (phone) screens so shapes look smaller
    camera.position.z = camera.aspect < 0.8 ? 26 : 18;
    camera.updateProjectionMatrix();
    layout();
    // Shapes in columns that no longer exist leave; the rest move to their column's new spot
    for (let i = shapes.length - 1; i >= 0; i--) {
      if (shapes[i].col >= columns.length) removeShape(i);
      else shapes[i].mesh.position.x = columns[shapes[i].col].x;
    }
    if (!initialized) {
      initialized = true;
      columns.forEach((_, col) => fillColumn(col));
    }
  }
  new ResizeObserver(resize).observe(container);
  resize();

  // ---------- Pause when off-screen ----------
  let onScreen = true;
  new IntersectionObserver(([entry]) => (onScreen = entry.isIntersecting)).observe(container);

  // ---------- Animation ----------
  const clock = new THREE.Clock();
  const speed = reduceMotion ? 0.25 : 1;

  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    if (!onScreen || document.hidden || !initialized) return;

    const hovered = findHovered();
    renderer.domElement.style.cursor = hovered ? 'pointer' : '';

    for (let i = shapes.length - 1; i >= 0; i--) {
      const s = shapes[i];
      const p = s.mesh.position;
      p.y += columns[s.col].speed * dt * speed;
      s.mesh.rotateOnWorldAxis(s.axis, cfg.spin * dt * speed);
      updateMorph(s, s === hovered, dt);
      if (p.y - s.reach > halfH) removeShape(i); // gone over the top
    }
    columns.forEach((_, col) => feedColumn(col));

    renderer.render(scene, camera);
  });
}
