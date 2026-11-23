import * as THREE from 'three';
import { hero as cfg } from '../config.js';
import { makeGeometry } from './shapes.js';
import { tokenColor, mixHex } from '../utils/tokens.js';

const rand = (min, max) => min + Math.random() * (max - min);
const pick = (list) => list[Math.floor(Math.random() * list.length)];

// Shapes live in a thin layer so that "not touching in 3D" also means "not overlapping on screen".
const DEPTH = [-0.6, 0.6];
const COLLISION_PASSES = 4; // more passes = fewer overlaps when shapes pile up around the cursor

/**
 * Floating primitive shapes rising through a sky.
 * The mouse pulls the shapes toward it, and shapes bump into each other instead of overlapping.
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
    [...new Set(cfg.shapes)].map((name) => {
      const geo = makeGeometry(name);
      geo.computeBoundingSphere();
      return [name, geo];
    })
  );
  const materials = cfg.colors.map(
    (name) => new THREE.MeshStandardMaterial({ color: tokenColor(name), roughness: 0.72, metalness: 0 })
  );

  // How much of the world is visible at depth z
  const halfHeightAt = (z) => Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * (camera.position.z - z);
  const halfWidthAt = (z) => halfHeightAt(z) * camera.aspect;

  // ---------- Shapes ----------
  const shapes = [];

  function spawn(shape, anywhere) {
    const mesh = shape.mesh;
    mesh.geometry = geometries[pick(cfg.shapes)];
    mesh.material = pick(materials);
    const scale = rand(...cfg.size);
    mesh.scale.setScalar(scale);
    // Collider: a circle around the shape (shapes spin, so a circle fits every angle)
    shape.radius = mesh.geometry.boundingSphere.radius * scale * cfg.colliderScale;
    shape.mass = shape.radius * shape.radius;

    const z = rand(...DEPTH);
    const hh = halfHeightAt(z);
    const hw = halfWidthAt(z);
    mesh.position.set(
      rand(-hw * 0.95, hw * 0.95),
      anywhere ? rand(-hh, hh) : -hh - shape.radius - rand(0, 2.5),
      z
    );
    mesh.rotation.set(rand(0, Math.PI * 2), rand(0, Math.PI * 2), rand(0, Math.PI * 2));

    shape.base = rand(...cfg.riseSpeed);
    shape.vel.set(0, shape.base, 0);
    shape.spin.set(rand(-0.45, 0.45), rand(-0.45, 0.45), rand(-0.3, 0.3));
  }

  function addShapes(count) {
    for (let i = 0; i < count; i++) {
      const shape = { mesh: new THREE.Mesh(), vel: new THREE.Vector3(), spin: new THREE.Vector3(), base: 1, radius: 1, mass: 1 };
      scene.add(shape.mesh);
      shapes.push(shape);
    }
  }

  // ---------- Collisions ----------
  // Shapes are treated as circles on the screen plane (x / y); depth is ignored.
  function collide(bounce) {
    for (let i = 0; i < shapes.length; i++) {
      const a = shapes[i];
      const pa = a.mesh.position;
      for (let j = i + 1; j < shapes.length; j++) {
        const b = shapes[j];
        const pb = b.mesh.position;
        const dx = pb.x - pa.x;
        const dy = pb.y - pa.y;
        const min = a.radius + b.radius;
        const d2 = dx * dx + dy * dy;
        if (d2 >= min * min) continue;

        const d = Math.sqrt(d2) || 0.0001;
        const nx = d2 ? dx / d : 1;
        const ny = d2 ? dy / d : 0;
        const overlap = min - d;
        const total = a.mass + b.mass;

        // Push them apart (the lighter one moves more)
        pa.x -= nx * overlap * (b.mass / total);
        pa.y -= ny * overlap * (b.mass / total);
        pb.x += nx * overlap * (a.mass / total);
        pb.y += ny * overlap * (a.mass / total);

        if (!bounce) continue;
        // Bounce if they're moving toward each other
        const approach = (b.vel.x - a.vel.x) * nx + (b.vel.y - a.vel.y) * ny;
        if (approach < 0) {
          const impulse = (-(1 + cfg.bounce) * approach) / total;
          a.vel.x -= impulse * b.mass * nx;
          a.vel.y -= impulse * b.mass * ny;
          b.vel.x += impulse * a.mass * nx;
          b.vel.y += impulse * a.mass * ny;
          // A little extra spin on impact
          a.spin.z += impulse * b.mass * 0.15 * (Math.random() - 0.5);
          b.spin.z += impulse * a.mass * 0.15 * (Math.random() - 0.5);
        }
      }
    }
  }

  // ---------- Mouse gravity ----------
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
    if (!initialized) {
      initialized = true;
      addShapes(w < 700 ? cfg.shapeCountMobile : cfg.shapeCount);
      shapes.forEach((s) => spawn(s, true));
      for (let i = 0; i < 30; i++) collide(false); // spread out any shapes that start overlapping
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

    if (pointerActive) raycaster.setFromCamera(pointer, camera);
    const ray = raycaster.ray;
    const damp = Math.exp(-cfg.damping * dt);

    for (const s of shapes) {
      const p = s.mesh.position;

      if (pointerActive && !reduceMotion) {
        // Where the mouse is at this shape's depth
        const t = (p.z - ray.origin.z) / ray.direction.z;
        const dx = ray.origin.x + ray.direction.x * t - p.x;
        const dy = ray.origin.y + ray.direction.y * t - p.y;
        const dist = Math.hypot(dx, dy) || 1;
        const pull = cfg.gravity / (1 + (dist / cfg.gravityRadius) ** 2);
        s.vel.x += (dx / dist) * pull * dt;
        s.vel.y += (dy / dist) * pull * dt;
      }

      // Ease back toward a gentle upward float
      s.vel.x *= damp;
      s.vel.y = s.base + (s.vel.y - s.base) * damp;
      if (Math.abs(s.spin.z) > 0.6) s.spin.z *= Math.exp(-0.5 * dt); // calm down extra spin from bumps

      p.x += s.vel.x * dt * speed;
      p.y += s.vel.y * dt * speed;
      s.mesh.rotation.x += s.spin.x * dt * speed;
      s.mesh.rotation.y += s.spin.y * dt * speed;
      s.mesh.rotation.z += s.spin.z * dt * speed;
    }

    collide(true);
    for (let i = 1; i < COLLISION_PASSES; i++) collide(false);

    for (const s of shapes) {
      const p = s.mesh.position;
      const hh = halfHeightAt(p.z);
      const hw = halfWidthAt(p.z);
      if (p.y > hh + s.radius + 0.5) spawn(s, false);
      else if (p.x > hw + s.radius) p.x = -hw - s.radius;
      else if (p.x < -hw - s.radius) p.x = hw + s.radius;
    }

    renderer.render(scene, camera);
  });
}
