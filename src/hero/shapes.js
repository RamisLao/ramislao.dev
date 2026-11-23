import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/**
 * Primitive shapes for the hero. Each is roughly 1.5 units across at scale 1.
 * To add a shape: add a case here and its name to `hero.shapes` in config.js.
 */
export function makeGeometry(name) {
  switch (name) {
    case 'sphere':
      return new THREE.SphereGeometry(0.75, 48, 32);
    case 'hemisphere':
      return hemisphere(0.85);
    case 'arch':
      return arch();
    case 'cylinder':
      return new THREE.CylinderGeometry(0.55, 0.55, 1.1, 48);
    case 'cone':
      return new THREE.ConeGeometry(0.65, 1.3, 48);
    case 'box':
      return new RoundedBoxGeometry(1, 1, 1, 4, 0.12);
    case 'torus':
      return new THREE.TorusGeometry(0.58, 0.22, 24, 64);
    case 'capsule':
      return new THREE.CapsuleGeometry(0.38, 0.75, 8, 24);
    case 'stairs':
      return stairs();
    default:
      return new THREE.IcosahedronGeometry(0.75, 0);
  }
}

function hemisphere(r) {
  const dome = new THREE.SphereGeometry(r, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2);
  const base = new THREE.CircleGeometry(r, 48);
  base.rotateX(Math.PI / 2); // face downward
  const geo = mergeGeometries([dome, base]);
  geo.translate(0, -r * 0.4, 0);
  return geo;
}

function arch() {
  const outer = 0.75;
  const inner = 0.4;
  const legs = 0.55;
  const s = new THREE.Shape();
  s.moveTo(-outer, 0);
  s.lineTo(-outer, legs);
  s.absarc(0, legs, outer, Math.PI, 0, true);
  s.lineTo(outer, 0);
  s.lineTo(inner, 0);
  s.lineTo(inner, legs);
  s.absarc(0, legs, inner, 0, Math.PI, false);
  s.lineTo(-inner, 0);
  s.lineTo(-outer, 0);
  const geo = new THREE.ExtrudeGeometry(s, {
    depth: 0.4,
    curveSegments: 40,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.04,
    bevelSegments: 3,
  });
  geo.center();
  return geo;
}

function stairs() {
  const steps = 4;
  const size = 0.32;
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  for (let i = 0; i < steps; i++) {
    s.lineTo(i * size, (i + 1) * size);
    s.lineTo((i + 1) * size, (i + 1) * size);
  }
  s.lineTo(steps * size, 0);
  s.lineTo(0, 0);
  const geo = new THREE.ExtrudeGeometry(s, {
    depth: 0.55,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.03,
    bevelSegments: 2,
  });
  geo.center();
  return geo;
}
