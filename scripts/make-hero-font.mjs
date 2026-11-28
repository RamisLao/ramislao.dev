/**
 * Makes the font file for the 3D letters in the hero.
 * Reads Outfit ExtraBold (from the @fontsource/outfit dev package) and writes
 * the outlines of the letters the hero needs to src/hero/outfit-800.typeface.json,
 * in the format three.js's FontLoader reads.
 *
 * Only used by the 3D letters of the shelves hero (not in use). The two
 * packages it needs were uninstalled; to run it again, first:
 *   npm install --save-dev @fontsource/outfit opentype.js
 *   node scripts/make-hero-font.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const source = path.join(root, 'node_modules/@fontsource/outfit/files/outfit-latin-800-normal.woff');
const target = path.join(root, 'src/hero/outfit-800.typeface.json');

// Every letter either language might show, plus a few signs
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÁÉÍÓÚÑÜáéíóúñü·-&.,\'’ ';

const buffer = fs.readFileSync(source);
const font = opentype.parse(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength));
const round = (n) => Math.round(n * 10) / 10;

const glyphs = {};
for (const ch of CHARS) {
  const glyph = font.charToGlyph(ch);
  if (!glyph || (glyph.index === 0 && ch !== ' ')) continue; // not in the font
  // Outline commands in font units, y pointing up. FontLoader wants the end
  // point first, then the control points.
  const o = glyph.path.commands
    .map((c) => {
      switch (c.type) {
        case 'M': return `m ${round(c.x)} ${round(c.y)}`;
        case 'L': return `l ${round(c.x)} ${round(c.y)}`;
        case 'Q': return `q ${round(c.x)} ${round(c.y)} ${round(c.x1)} ${round(c.y1)}`;
        case 'C': return `b ${round(c.x)} ${round(c.y)} ${round(c.x1)} ${round(c.y1)} ${round(c.x2)} ${round(c.y2)}`;
        default: return ''; // Z: FontLoader closes paths itself
      }
    })
    .filter(Boolean)
    .join(' ');
  const box = glyph.getBoundingBox();
  glyphs[ch] = { ha: round(glyph.advanceWidth), x_min: round(box.x1), x_max: round(box.x2), o };
}

const data = {
  glyphs,
  familyName: 'Outfit',
  ascender: font.ascender,
  descender: font.descender,
  underlinePosition: font.tables.post.underlinePosition,
  underlineThickness: font.tables.post.underlineThickness,
  boundingBox: { xMin: font.tables.head.xMin, yMin: font.tables.head.yMin, xMax: font.tables.head.xMax, yMax: font.tables.head.yMax },
  resolution: font.unitsPerEm,
  capHeight: font.tables.os2.sCapHeight,
  original_font_information: { license: 'SIL Open Font License 1.1', name: 'Outfit ExtraBold' },
};

fs.writeFileSync(target, JSON.stringify(data));
console.log(`Wrote ${Object.keys(glyphs).length} glyphs to ${path.relative(root, target)} (${Math.round(fs.statSync(target).size / 1024)} KB)`);
