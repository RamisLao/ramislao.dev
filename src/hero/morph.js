import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

/**
 * One geometry that can become any hero shape, for morphing on hover.
 *
 * How it works: a finely divided sphere is "inflated" into each shape. From
 * the center, every vertex looks outward along its own direction and moves to
 * the outer surface of the shape in that direction (if it finds no surface,
 * as through the hole of the torus or under the arch, it goes to the center).
 * Every shape is then the same set of vertices in different places, saved as
 * a morph target, and blending two targets morphs one shape into the other,
 * like the logo does in 2D.
 *
 * The insides below match the sizes in shapes.js, so a morphed shape lines up
 * with the regular one it replaces.
 */

const len2 = (a, b) => Math.hypot(a, b);

const INSIDE = {
  sphere: (x, y, z) => x * x + y * y + z * z <= 0.75 ** 2,
  hemisphere: (x, y, z) => {
    const r = 0.85;
    const cy = -r * 0.4; // shapes.js moves it down by 0.4 r
    return y >= cy && x * x + (y - cy) ** 2 + z * z <= r * r;
  },
  arch: (x, y, z) => {
    if (Math.abs(z) > 0.24) return false; // 0.4 deep plus bevel, centered
    const px = Math.abs(x);
    const py = y + 0.65; // the arch is 1.3 tall, centered
    if (py < 0 || px > 0.75) return false;
    const inOuter = py <= 0.55 || len2(px, py - 0.55) <= 0.75;
    const inHole = px < 0.4 && (py <= 0.55 || len2(px, py - 0.55) < 0.4);
    return inOuter && !inHole;
  },
  cylinder: (x, y, z) => Math.abs(y) <= 0.55 && x * x + z * z <= 0.55 ** 2,
  cone: (x, y, z) => Math.abs(y) <= 0.65 && len2(x, z) <= (0.65 * (0.65 - y)) / 1.3,
  box: (x, y, z) => {
    const r = 0.12;
    const qx = Math.abs(x) - (0.5 - r);
    const qy = Math.abs(y) - (0.5 - r);
    const qz = Math.abs(z) - (0.5 - r);
    const out = Math.hypot(Math.max(qx, 0), Math.max(qy, 0), Math.max(qz, 0));
    return out + Math.min(Math.max(qx, qy, qz), 0) - r <= 0;
  },
  torus: (x, y, z) => (len2(x, y) - 0.58) ** 2 + z * z <= 0.22 ** 2,
  capsule: (x, y, z) => {
    const cy = Math.max(-0.375, Math.min(0.375, y));
    return x * x + (y - cy) ** 2 + z * z <= 0.38 ** 2;
  },
  stairs: (x, y, z) => {
    const s = 0.32;
    const px = x + 0.64; // 4 steps of 0.32, centered
    const py = y + 0.64;
    if (Math.abs(z) > 0.3 || px < 0 || px > 1.28 || py < 0) return false;
    return py <= (Math.min(3, Math.floor(px / s)) + 1) * s;
  },
};

const MAX_R = 1.2; // farther than any shape reaches
const STEP = 0.02;

/** How far out the shape's outer surface is in direction (dx, dy, dz); 0 if there is none. */
function reach(inside, dx, dy, dz) {
  // Walk inward from far away; the first point inside is just past the outer surface
  for (let t = MAX_R; t > 0; t -= STEP) {
    if (!inside(dx * t, dy * t, dz * t)) continue;
    // Narrow it down between t (inside) and t + STEP (outside)
    let lo = t;
    let hi = t + STEP;
    for (let i = 0; i < 8; i++) {
      const mid = (lo + hi) / 2;
      if (inside(dx * mid, dy * mid, dz * mid)) lo = mid;
      else hi = mid;
    }
    return lo;
  }
  return 0;
}

/**
 * Build the morphing geometry for the given shape names (in this order:
 * morph target i is names[i]). Takes a moment, so call it when the page is idle.
 */
export function createMorphGeometry(names, detail = 40) {
  let base = new THREE.IcosahedronGeometry(1, detail);
  base.deleteAttribute('normal');
  base.deleteAttribute('uv');
  base = mergeVertices(base); // shared vertices, so normals come out smooth
  const dirs = base.attributes.position;
  const count = dirs.count;

  const positions = [];
  const normals = [];
  const scratch = new THREE.BufferGeometry();
  scratch.setIndex(base.index);

  for (const name of names) {
    const inside = INSIDE[name] || INSIDE.sphere;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const dx = dirs.getX(i);
      const dy = dirs.getY(i);
      const dz = dirs.getZ(i);
      const r = reach(inside, dx, dy, dz);
      pos[i * 3] = dx * r;
      pos[i * 3 + 1] = dy * r;
      pos[i * 3 + 2] = dz * r;
    }
    const posAttr = new THREE.BufferAttribute(pos, 3);
    scratch.setAttribute('position', posAttr);
    scratch.computeVertexNormals();
    positions.push(posAttr);
    normals.push(scratch.attributes.normal.clone());
  }

  const geo = new THREE.BufferGeometry();
  geo.setIndex(base.index);
  geo.setAttribute('position', positions[0].clone());
  geo.setAttribute('normal', normals[0].clone());
  geo.morphAttributes.position = positions;
  geo.morphAttributes.normal = normals;
  geo.computeBoundingSphere();
  geo.boundingSphere.radius = MAX_R; // covers every shape it can turn into
  return geo;
}
