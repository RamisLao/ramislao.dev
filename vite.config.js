import { defineConfig } from 'vite';

export default defineConfig({
  // The folder the site is served from. '/' locally and on a custom domain;
  // the GitHub Pages workflow sets BASE_PATH (e.g. '/ramislao.dev/').
  base: process.env.BASE_PATH ? `${process.env.BASE_PATH.replace(/\/?$/, '/')}` : '/',
  server: {
    // Check files for changes regularly instead of relying on Windows change events,
    // which sometimes miss quick saves (the page then shows an outdated version).
    watch: { usePolling: true, interval: 300 },
  },
  build: {
    // three.js is ~580 kB on its own and loads separately after the page, so this is expected
    chunkSizeWarningLimit: 700,
  },
});
