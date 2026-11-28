import * as THREE from 'three';
import Matter from 'matter-js';
import { hero as cfg } from '../config.js';
import { makeGeometry } from './shapes.js';
import { tokenColor, mixHex } from '../utils/tokens.js';
import { t, onLangChange } from '../i18n/index.js';

const { Engine, Bodies, Body, Composite, Constraint, Query, Sleeping, Vertices } = Matter;

const rand = (min, max) => min + Math.random() * (max - min);
const pick = (list) => list[Math.floor(Math.random() * list.length)];
const STEP = 1000 / 60; // physics step, in ms

/**
 * The 2D outline of every shape as seen from the front, in the same units and
 * position as its 3D mesh (shapes.js), y pointing up. The physics engine only
 * knows these outlines; the 3D meshes just follow them around.
 * Parts must be convex, so the arch and the stairs are built from several.
 */
const circle = (r) => [{ circle: r }];
const rect = (x, y, w, h, round = 0) => ({ rect: [x, y, w, h, round] });
const poly = (points) => ({ poly: points.map(([x, y]) => ({ x, y })) });

function arc(cx, cy, r, from, to, steps) {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const a = from + ((to - from) * i) / steps;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
}

const OUTLINES = {
  sphere: () => circle(0.75),
  torus: () => circle(0.8), // a ring seen from the front is a circle
  box: () => [rect(0, 0, 1, 1, 0.12)],
  cylinder: () => [rect(0, 0, 1.1, 1.1, 0.04)],
  capsule: () => [rect(0, 0, 0.76, 1.51, 0.37)],
  cone: () => [poly([[-0.65, -0.65], [0.65, -0.65], [0, 0.65]])],
  hemisphere: () => [poly(arc(0, -0.34, 0.85, 0, Math.PI, 16))],
  arch: () => {
    // Two legs, and the curved top in 3 thick slices. Each slice's outer edge is
    // curved like the mesh (a flat-sided top made the round arch poke through the
    // floor and rock from side to side); its inner edge is straight, so every
    // slice stays convex. Thinner slices make Matter.js jitter, so 3 it is.
    // Sizes include the mesh's 0.04 bevel, so the outline hugs what you see.
    const parts = [rect(-0.575, -0.395, 0.43, 0.59), rect(0.575, -0.395, 0.43, 0.59)];
    for (let i = 0; i < 3; i++) {
      const from = (Math.PI * i) / 3;
      const to = (Math.PI * (i + 1)) / 3;
      parts.push(poly([...arc(0, -0.1, 0.79, from, to, 8), ...arc(0, -0.1, 0.36, to, from, 1)]));
    }
    return parts;
  },
  stairs: () =>
    [0, 1, 2, 3].map((i) => {
      const h = (i + 1) * 0.32;
      return rect(-0.64 + (i + 0.5) * 0.32, -0.64 + h / 2, 0.32, h);
    }),
};

/**
 * A tile of faint flat shapes for the back wall, like a decal: a grid with a
 * random shape and palette color in each cell. It repeats across the wall.
 */
const DECAL_COLS = 6;
function makeDecalTexture(colors) {
  const cellPx = 128;
  const c = document.createElement('canvas');
  c.width = c.height = cellPx * DECAL_COLS;
  const ctx = c.getContext('2d');
  const s = cellPx * 0.36; // shape size within its cell
  const draw = {
    circle: () => ctx.arc(0, 0, s, 0, Math.PI * 2),
    square: () => ctx.roundRect(-s, -s, s * 2, s * 2, s * 0.4),
    triangle: () => {
      ctx.moveTo(0, -s);
      ctx.lineTo(s, s * 0.85);
      ctx.lineTo(-s, s * 0.85);
      ctx.closePath();
    },
    ring: () => {
      ctx.arc(0, 0, s, 0, Math.PI * 2);
      ctx.moveTo(s * 0.5, 0);
      ctx.arc(0, 0, s * 0.5, 0, Math.PI * 2, true);
    },
    half: () => {
      ctx.arc(0, s * 0.45, s, Math.PI, 0);
      ctx.closePath();
    },
    pill: () => ctx.roundRect(-s, -s * 0.5, s * 2, s, s * 0.5),
    arch: () => {
      ctx.moveTo(-s, s);
      ctx.arc(0, -s * 0.1, s, Math.PI, 0);
      ctx.lineTo(s, s);
      ctx.lineTo(s * 0.45, s);
      ctx.arc(0, -s * 0.1, s * 0.45, 0, Math.PI, true);
      ctx.lineTo(-s * 0.45, s);
      ctx.closePath();
    },
  };
  const names = Object.keys(draw);
  for (let r = 0; r < DECAL_COLS; r++) {
    for (let col = 0; col < DECAL_COLS; col++) {
      ctx.save();
      ctx.translate((col + 0.5) * cellPx, (r + 0.5) * cellPx);
      ctx.fillStyle = pick(colors);
      ctx.beginPath();
      draw[pick(names)]();
      ctx.fill('evenodd');
      ctx.restore();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

/**
 * The playground: the hero is a box (floor, ceiling and two walls at its
 * edges) with shapes lying on the floor. The floor recedes a little into the
 * screen up to a back wall with a faint pattern of shapes on it.
 * Drag shapes around (a picked shape turns to the nearest quarter turn).
 * Q / W turn the held or hovered shape a quarter left / right, E sets off an
 * explosion at the mouse, R adds a shape and T clears them all.
 * Touch screens: drag a shape any way (a finger anywhere else scrolls the page),
 * and buttons replace E, R and T (no turning).
 * Soft shadows on the floor show how high each shape is.
 * Physics runs in 2D (Matter.js); shapes only turn flat to the screen.
 * The sky itself is a CSS gradient behind the transparent canvas (see hero.css).
 */
export function createHeroScene(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  const canvas = renderer.domElement;

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

  const geometries = Object.fromEntries([...new Set(cfg.shapes)].map((name) => [name, makeGeometry(name)]));
  const materials = cfg.colors.map(
    (name) => new THREE.MeshStandardMaterial({ color: tokenColor(name), roughness: 0.72, metalness: 0 })
  );

  // ---------- Units ----------
  // Three.js works in world units (z = 0 is where the shapes are); Matter.js likes
  // pixel-sized numbers. Physics units = world units × U.
  let halfW = 1;
  let halfH = 1;
  const U = cfg.physicsScale; // the same on every screen, so shapes behave the same on a phone
  const view = () => {
    halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    halfW = halfH * camera.aspect;
  };
  const worldPerPx = () => (halfH * 2) / container.clientHeight;
  /** A point on screen (client pixels) → physics coordinates (y down). */
  function screenToPhysics(clientX, clientY) {
    const r = container.getBoundingClientRect();
    const k = worldPerPx();
    return { x: ((clientX - r.left) * k - halfW) * U, y: ((clientY - r.top) * k - halfH) * U };
  }

  // ---------- Physics ----------
  const engine = Engine.create({ enableSleeping: true });
  engine.gravity.y = cfg.gravity;
  const items = []; // { body, mesh, offset, scale, pop, gone }
  let walls = [];

  // ---------- The room ----------
  // A floor that goes a little into the screen, and a back wall behind the shapes
  // with a faint decal of shapes. The floor's front edge lines up with the page
  // edge at the bottom of the hero; the shapes stand on it a bit further back.
  const decal = makeDecalTexture(cfg.colors.filter((c) => c !== '--bg').map((c) => tokenColor(c)));
  const floorMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshStandardMaterial({
      color: mixHex(tokenColor('--sky-horizon'), tokenColor('--primary-deep'), cfg.room.floorShade),
      roughness: 0.95,
      metalness: 0,
    })
  );
  floorMesh.rotation.x = -Math.PI / 2; // lying flat
  const wallMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: decal, transparent: true, opacity: cfg.room.decal, depthWrite: false })
  );
  scene.add(floorMesh, wallMesh);

  function buildRoom(floorY) {
    const camZ = camera.position.z;
    const { front, back } = cfg.room;
    const spread = (z) => (camZ - z) / camZ; // how much more is visible at depth z than at z = 0
    const width = halfW * 2 * spread(back) + 4;
    floorMesh.scale.set(width, front - back, 1);
    floorMesh.position.set(0, floorY, (front + back) / 2);
    const height = halfH * spread(back) - floorY + 1;
    wallMesh.scale.set(width, height, 1);
    wallMesh.position.set(0, floorY + height / 2, back);
    const tile = cfg.room.decalCell * DECAL_COLS; // world size of one decal tile
    decal.repeat.set(width / tile, height / tile);
    decal.offset.set(-(width / tile - Math.floor(width / tile)) / 2, 0); // pattern centered left to right
  }

  // ---------- Physics walls ----------
  /** Floor, ceiling and walls at the edges of the hero. */
  function buildWalls() {
    Composite.remove(engine.world, walls);
    const edge = container.parentElement?.querySelector('.hero-wave');
    // The edge's straight line runs through the middle of its drawing (24px on top are room for its shadow)
    const edgePx = edge ? (edge.offsetHeight - 24) / 2 : 30;
    // The floor's front edge sits on that line; shapes stand further back, so a bit higher on screen
    const edgeY = -(halfH - edgePx * worldPerPx()); // world y of the line, at z = 0
    const floorY = (edgeY * (camera.position.z - cfg.room.front)) / camera.position.z;
    buildRoom(floorY);
    floorWorldY = floorY;
    const floor = -floorY * U; // physics y grows downward
    const top = -halfH * U;
    const left = -halfW * U;
    const right = halfW * U;
    const t = 400; // thick, so fast shapes can't slip through
    const opts = { isStatic: true, friction: cfg.friction, restitution: cfg.bounce };
    walls = [
      Bodies.rectangle(0, floor + t / 2, (right - left) * 3, t, opts),
      Bodies.rectangle(0, top - t / 2, (right - left) * 3, t, opts),
      Bodies.rectangle(left - t / 2, 0, t, (floor - top) * 3, opts),
      Bodies.rectangle(right + t / 2, 0, t, (floor - top) * 3, opts),
    ];
    Composite.add(engine.world, walls);
    // Anything left outside after a resize comes back in
    for (const it of items) {
      const p = it.body.position;
      const x = Math.min(right - 20, Math.max(left + 20, p.x));
      const y = Math.min(floor - 20, Math.max(top + 20, p.y));
      if (x !== p.x || y !== p.y) {
        Body.setPosition(it.body, { x, y });
        Sleeping.set(it.body, false);
      }
    }
    return { floor, top, left, right };
  }
  let box = { floor: 0, top: 0, left: 0, right: 0 };
  let floorWorldY = 0;
  let awake = true; // draw the next frame even if nothing moves

  /** A physics body for a shape at a given scale, from its outline. */
  function makeBody(name, scale) {
    const k = scale * U;
    const opts = { friction: cfg.friction, frictionAir: 0.01, restitution: cfg.bounce, density: 0.002 };
    const parts = (OUTLINES[name] || OUTLINES.box)().map((p) => {
      if (p.circle) return Bodies.circle(0, 0, p.circle * k, opts);
      if (p.rect) {
        const [x, y, w, h, round] = p.rect;
        return Bodies.rectangle(x * k, -y * k, w * k, h * k, round ? { ...opts, chamfer: { radius: round * k } } : opts);
      }
      const pts = p.poly.map(({ x, y }) => ({ x: x * k, y: -y * k }));
      const c = Vertices.centre(pts);
      return Bodies.fromVertices(c.x, c.y, [pts], opts);
    });
    const body = parts.length === 1 ? parts[0] : Body.create({ ...opts, parts });
    // Where the mesh's own center sits relative to the body's center of mass
    const offset = { x: body.position.x, y: body.position.y };
    return { body, offset };
  }

  // ---------- Shadows ----------
  // A light straight above: every shape casts a soft round shadow on the floor
  // right under it. The higher the shape, the bigger and fainter its shadow.
  const shadowTexture = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(0,0,0,1)');
    g.addColorStop(0.45, 'rgba(0,0,0,0.55)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  })();
  const shadowColor = tokenColor('--ink');
  const shadowGeometry = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2); // lying flat on the floor

  function makeShadow() {
    const mesh = new THREE.Mesh(
      shadowGeometry,
      new THREE.MeshBasicMaterial({ map: shadowTexture, color: shadowColor, transparent: true, depthWrite: false })
    );
    mesh.renderOrder = 1; // drawn after the floor
    scene.add(mesh);
    return mesh;
  }

  function addShape(x, y, popIn, name = pick(cfg.shapes)) {
    const scale = rand(...cfg.size);
    const { body, offset } = makeBody(name, scale);
    Body.setPosition(body, { x, y });
    Body.setAngle(body, rand(-Math.PI, Math.PI));
    const mesh = new THREE.Mesh(geometries[name], pick(materials));
    mesh.scale.setScalar(popIn ? 0.001 : scale);
    scene.add(mesh);
    Composite.add(engine.world, body);
    const it = { name, body, mesh, offset, scale, pop: popIn ? 0 : 1, gone: null, target: null, shadow: makeShadow() };
    if (popIn) Body.setStatic(body, true); // hangs in the air while it pops in, then drops
    items.push(it);
    return it;
  }

  function removeItem(it) {
    Composite.remove(engine.world, it.body);
    scene.remove(it.mesh);
    scene.remove(it.shadow);
    it.shadow.material.dispose();
    items.splice(items.indexOf(it), 1);
  }

  /** Move each mesh to its body, converting physics units back to world units. */
  function syncMeshes() {
    for (const it of items) {
      const { position: p, angle } = it.body;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      // the mesh center is the body center minus the (turned) offset
      const x = p.x - (it.offset.x * cos - it.offset.y * sin);
      const y = p.y - (it.offset.x * sin + it.offset.y * cos);
      it.mesh.position.set(x / U, -y / U, 0);
      it.mesh.rotation.z = -angle; // physics angles turn clockwise on screen

      // Its shadow: as wide as the shape, spreading out and fading as it rises
      const b = it.body.bounds;
      const width = (b.max.x - b.min.x) / U;
      const height = Math.max(0, box.floor - b.max.y); // gap between the shape and the floor
      const lift = Math.min(1, height / ((box.floor - box.top) * cfg.shadowFade)); // 0 on the floor, 1 near the ceiling
      const grow = (it.mesh.scale.x / it.scale) * (1 + lift * 0.9); // also grows in with a shape that pops in
      it.shadow.scale.set(width * 1.1 * grow, 1, width * 0.7 * grow);
      it.shadow.position.set((b.min.x + b.max.x) / 2 / U, floorWorldY + 0.004, 0);
      it.shadow.material.opacity = cfg.shadow * (1 - lift) ** 1.2;
    }
  }

  // ---------- Pointer ----------
  const QUARTER = Math.PI / 2;
  const snapQuarter = (a) => Math.round(a / QUARTER) * QUARTER;
  const pointer = { x: 0, y: 0, inside: false, type: 'mouse' }; // last known, in client pixels
  const live = () => items.filter((it) => it.gone === null && it.pop >= 1);
  /** The shape under a point on screen, if any. */
  function itemAt(clientX, clientY) {
    const body = Query.point(live().map((it) => it.body), screenToPhysics(clientX, clientY))[0];
    return body ? items.find((it) => it.body === body) : null;
  }

  // ---------- Dragging ----------
  let drag = null; // { constraint, pointerId, item }
  const inside = (p) => ({
    x: Math.min(box.right - 4, Math.max(box.left + 4, p.x)),
    y: Math.min(box.floor - 4, Math.max(box.top + 4, p.y)),
  });

  canvas.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    const it = itemAt(e.clientX, e.clientY);
    if (!it) return;
    Sleeping.set(it.body, false);
    it.target = snapQuarter(it.body.angle); // picked up: square to the nearest quarter turn
    const constraint = Constraint.create({
      pointA: screenToPhysics(e.clientX, e.clientY),
      bodyB: it.body,
      pointB: { x: 0, y: 0 }, // held by its center, so it turns in place
      stiffness: 0.2,
      damping: 0.1,
      length: 0,
    });
    Composite.add(engine.world, constraint);
    drag = { constraint, pointerId: e.pointerId, item: it };
    canvas.setPointerCapture(e.pointerId);
    canvas.style.cursor = 'grabbing';
  });

  canvas.addEventListener('pointermove', (e) => {
    Object.assign(pointer, { x: e.clientX, y: e.clientY, inside: true, type: e.pointerType });
    if (drag && e.pointerId === drag.pointerId) {
      drag.constraint.pointA = inside(screenToPhysics(e.clientX, e.clientY));
      Sleeping.set(drag.item.body, false);
      return;
    }
    if (e.pointerType === 'mouse') canvas.style.cursor = itemAt(e.clientX, e.clientY) ? 'grab' : '';
  });
  canvas.addEventListener('pointerleave', () => (pointer.inside = false));

  // Touch screens: the hero scrolls the page like any other part of it (touch-action:
  // manipulation in hero.css). Only a finger that lands on a shape stops the scroll and
  // grabs the shape, so it can be dragged any way.
  canvas.addEventListener(
    'touchstart',
    (e) => {
      const t0 = e.touches[0];
      if (e.touches.length === 1 && itemAt(t0.clientX, t0.clientY)) e.preventDefault();
    },
    { passive: false }
  );
  canvas.addEventListener(
    'touchmove',
    (e) => {
      if (drag) e.preventDefault();
    },
    { passive: false }
  );

  const endDrag = (e) => {
    if (!drag || e.pointerId !== drag.pointerId) return;
    Composite.remove(engine.world, drag.constraint);
    drag = null;
    canvas.style.cursor = '';
  };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);

  /** Turn the held shape (or the one under the mouse) a quarter turn; -1 = left, 1 = right. */
  function turn(direction) {
    const it = drag?.item || (pointer.inside ? itemAt(pointer.x, pointer.y) : null);
    if (!it) return;
    // physics angles grow clockwise, so "right" adds
    it.target = snapQuarter(it.target ?? it.body.angle) + direction * QUARTER;
    Sleeping.set(it.body, false);
    awake = true;
  }

  // ---------- Explosions ----------
  /** A physics point → client pixels on screen (the opposite of screenToPhysics). */
  function physicsToScreen(p) {
    const r = container.getBoundingClientRect();
    const k = worldPerPx();
    return { x: r.left + (p.x / U + halfW) / k, y: r.top + (p.y / U + halfH) / k };
  }

  function explodeAt(clientX, clientY) {
    const c = screenToPhysics(clientX, clientY);
    const radius = cfg.blastRadius * worldPerPx() * U;
    for (const it of items) {
      if (it.gone !== null || it.body.isStatic || it === drag?.item) continue;
      const dx = it.body.position.x - c.x;
      const dy = it.body.position.y - c.y;
      const d = Math.hypot(dx, dy) || 1;
      if (d > radius) continue;
      const push = (1 - d / radius) * cfg.blast; // stronger near the center
      Sleeping.set(it.body, false);
      it.target = null;
      Body.setVelocity(it.body, {
        x: it.body.velocity.x + (dx / d) * push,
        y: it.body.velocity.y + (dy / d) * push - push * 0.35, // a little lift, so things fly up off the floor
      });
      Body.setAngularVelocity(it.body, it.body.angularVelocity + rand(-0.3, 0.3) * (1 - d / radius));
    }
    showBlast(clientX, clientY);
    awake = true;
  }

  /** An explosion at a random spot just above the floor (the touch-screen button). */
  function explodeSomewhere() {
    const p = { x: rand(box.left * 0.8, box.right * 0.8), y: box.floor - rand(0.1, 0.6) * (box.floor - box.top) * 0.25 };
    const s = physicsToScreen(p);
    explodeAt(s.x, s.y);
  }

  /** Where the explosion went off: a flash and three rings rippling out one after another. */
  function showBlast(clientX, clientY) {
    const r = hero.getBoundingClientRect();
    const blast = document.createElement('span');
    blast.className = 'hero-blast';
    blast.style.left = `${clientX - r.left}px`;
    blast.style.top = `${clientY - r.top}px`;
    blast.style.setProperty('--size', `${cfg.blastRadius * 2}px`);
    blast.innerHTML = '<i></i><i></i><i></i>';
    hero.appendChild(blast);
    setTimeout(() => blast.remove(), 1200);
  }

  // ---------- Adding and clearing ----------
  const hero = container.parentElement;

  /** Pop a new shape out of thin air (at the mouse, or somewhere free near the top) and let it drop. */
  function addOne() {
    if (live().length >= cfg.max) {
      const oldest = items.find((it) => it.gone === null);
      if (oldest) oldest.gone = 0; // make room: the oldest shape shrinks away
    }
    let p;
    if (pointer.inside && pointer.type === 'mouse') p = inside(screenToPhysics(pointer.x, pointer.y));
    else {
      const y = box.top + (box.floor - box.top) * 0.18;
      let x = 0;
      for (let tries = 0; tries < 8; tries++) {
        x = rand(box.left * 0.85, box.right * 0.85);
        const near = Query.region(items.map((it) => it.body), { min: { x: x - 60, y: y - 60 }, max: { x: x + 60, y: y + 60 } });
        if (!near.length) break;
      }
      p = { x, y };
    }
    addShape(p.x, p.y, true);
    awake = true;
  }

  function clearAll() {
    for (const it of items) if (it.gone === null) it.gone = 0; // every shape shrinks away
    if (drag) {
      Composite.remove(engine.world, drag.constraint);
      drag = null;
    }
    awake = true;
  }


  // Touch screens get buttons instead of the E, R and T keys
  hero.querySelector('[data-hero-explode]')?.addEventListener('click', explodeSomewhere);
  hero.querySelector('[data-hero-add]')?.addEventListener('click', addOne);
  hero.querySelector('[data-hero-reset]')?.addEventListener('click', clearAll);

  // ---------- Keyboard ----------
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey || !onScreen) return;
    if (e.target.closest?.('input, textarea, select, [contenteditable]')) return; // typing somewhere else
    const key = e.key.toLowerCase();
    if (key === 'q') turn(-1);
    else if (key === 'w') turn(1);
    else if (e.repeat) return;
    else if (key === 'e') {
      const r = container.getBoundingClientRect();
      if (pointer.inside) explodeAt(pointer.x, pointer.y);
      else explodeAt(r.left + r.width / 2, r.top + r.height * 0.75);
    } else if (key === 'r') addOne();
    else if (key === 't') clearAll();
  });

  // The little key guide next to the buttons (only shown where there's a mouse and keyboard)
  const keysEl = hero.querySelector('[data-hero-keys]');
  const renderKeys = () => {
    if (!keysEl) return;
    const k = (...keys) => keys.map((x) => `<kbd>${x}</kbd>`).join('');
    keysEl.innerHTML = [
      `${k('Q', 'W')} ${t('hero.keyTurn')}`,
      `${k('E')} ${t('hero.keyExplode')}`,
      `${k('R')} ${t('hero.keyAdd')}`,
      `${k('T')} ${t('hero.keyClear')}`,
    ]
      .map((x) => `<span>${x}</span>`)
      .join('');
  };
  renderKeys();
  onLangChange(renderKeys);

  // ---------- Resize ----------
  let started = false;
  let lastSize = { w: 0, h: 0 };
  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    // Pull back on tall (phone) screens so shapes look smaller
    camera.position.z = camera.aspect < 0.8 ? 26 : 18;
    camera.updateProjectionMatrix();
    view();
    // Rebuild the walls only for a real change: on phones the browser bar hiding and
    // showing while scrolling nudges the height, and moving the floor would shake the pile
    const changed = !started || w !== lastSize.w || Math.abs(h - lastSize.h) > 120;
    if (changed) {
      lastSize = { w, h };
      box = buildWalls();
    }
    if (!started) {
      started = true;
      // Drop the first shapes from random spots and let them settle before showing them
      const count = w < 700 ? cfg.countMobile : cfg.count;
      for (let i = 0; i < count; i++) {
        addShape(rand(box.left * 0.9, box.right * 0.9), rand(box.top * 0.8, box.floor * 0.6), false);
      }
      for (let i = 0; i < 240; i++) Engine.update(engine, STEP);
    }
    syncMeshes();
    awake = true;
  }
  new ResizeObserver(resize).observe(container);
  resize();

  // For testing on the local dev server only (never in the published site)
  if (import.meta.env.DEV) window.__playground = { items, engine, Body, Sleeping, add: (name, x, y) => addShape(x, y, false, name), get box() { return box; }, get U() { return U; } };

  // ---------- Pause when off-screen ----------
  let onScreen = true;
  new IntersectionObserver(([entry]) => (onScreen = entry.isIntersecting)).observe(container);

  // ---------- Animation ----------
  const clock = new THREE.Clock();
  let acc = 0;
  const easeBack = (t) => 1 + 2.7 * (t - 1) ** 3 + 1.7 * (t - 1) ** 2; // overshoots a little, like a pop

  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.1) * 1000;
    if (!onScreen || document.hidden || !started) return;

    // Fixed physics steps, however fast the screen refreshes
    acc += dt;
    let steps = 0;
    while (acc >= STEP && steps < 4) {
      // Shapes being squared or turned glide to their quarter turn
      for (const it of items) {
        if (it.target === null) continue;
        const diff = it.target - it.body.angle;
        Body.setAngularVelocity(it.body, 0);
        Body.setAngle(it.body, Math.abs(diff) < 0.002 ? it.target : it.body.angle + diff * 0.22);
        if (Math.abs(diff) < 0.002 && it !== drag?.item) it.target = null; // done, and not held: physics takes over
      }
      Engine.update(engine, STEP);
      acc -= STEP;
      steps++;
    }
    if (steps === 4) acc = 0;

    let animating = false;
    for (const it of [...items]) {
      if (it.pop < 1) {
        // popping in: grow, then let it fall
        it.pop = Math.min(1, it.pop + dt / 320);
        it.mesh.scale.setScalar(it.scale * Math.max(0.001, easeBack(it.pop)));
        if (it.pop >= 1) {
          Body.setStatic(it.body, false);
          Sleeping.set(it.body, false);
        }
        animating = true;
      }
      if (it.gone !== null) {
        // disappearing: shrink away, then leave
        it.gone = Math.min(1, it.gone + dt / 260);
        it.mesh.scale.setScalar(it.scale * Math.max(0.001, 1 - it.gone));
        if (it.gone >= 1) removeItem(it);
        animating = true;
      }
    }

    // Draw only while something moves, to save battery when everything rests
    const moving = drag || animating || items.some((it) => it.target !== null || (!it.body.isSleeping && !it.body.isStatic));
    if (moving || awake) {
      syncMeshes();
      renderer.render(scene, camera);
      awake = false;
    }
  });
}
