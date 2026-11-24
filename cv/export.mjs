/**
 * Exports the CV as PDF, in Spanish and English:   npm run cv
 *
 * It starts a temporary Vite server (so the CV can read the website's data and
 * palette), opens cv/cv.html in a headless browser (Edge or Chrome) and prints
 * each language twice:
 *   cv/pdf/       the full CV, to send yourself
 *   public/files/ the website copy (no contact lines marked web: false),
 *                 offered by the site's Download CV button
 * File names are set in cv/data.js → files.
 */
import { createServer } from 'vite';
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const OUT = { full: join(here, 'pdf'), web: join(root, 'public', 'files') };

// A Chromium-based browser to print with (first one found).
const BROWSERS = [
  process.env.CV_BROWSER,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = BROWSERS.find((p) => existsSync(p));
if (!browser) {
  console.error('No Edge or Chrome found. Set CV_BROWSER to the path of a Chromium-based browser.');
  process.exit(1);
}

const { cv } = await import('./data.js');
Object.values(OUT).forEach((d) => mkdirSync(d, { recursive: true }));

const server = await createServer({ root, logLevel: 'error', server: { host: '127.0.0.1', port: 5199, strictPort: false, hmr: false, watch: null } });
await server.listen();
const base = server.resolvedUrls.local[0];

let failed = false;
for (const [kind, lang] of [['full', 'es'], ['full', 'en'], ['web', 'es'], ['web', 'en']]) {
  const file = join(OUT[kind], cv.files[kind][lang]);
  const profile = mkdtempSync(join(tmpdir(), 'cv-print-'));
  const url = `${base}cv/cv.html?lang=${lang}${kind === 'web' ? '&web' : ''}`;
  // Async on purpose: the Vite server above runs in this same process and must keep answering.
  const status = await run(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--hide-scrollbars',
    `--user-data-dir=${profile}`,
    '--no-pdf-header-footer',
    '--print-to-pdf-no-header',
    '--timeout=8000', // prints after 8 s: time for fonts, images and the page script
    `--print-to-pdf=${file}`,
    url,
  ]);
  rmSync(profile, { recursive: true, force: true });

  if (existsSync(file) && statSync(file).mtimeMs > Date.now() - 60000 && statSync(file).size > 5000) {
    console.log(`✓ ${lang.toUpperCase()} ${kind.padEnd(4)}  ${file}`);
  } else {
    failed = true;
    console.error(`✗ ${lang.toUpperCase()}  could not print ${url} (${status})`);
  }
}

/** Runs a program and resolves with its exit status (kills it after 60 s). */
function run(cmd, args) {
  return new Promise((done) => {
    const child = spawn(cmd, args, { stdio: 'ignore' });
    const timer = setTimeout(() => child.kill(), 60000);
    child.on('error', (e) => { clearTimeout(timer); done(e.message); });
    child.on('exit', (code) => { clearTimeout(timer); done(`exit ${code}`); });
  });
}

await server.close();
process.exit(failed ? 1 : 0);
