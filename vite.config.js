import { defineConfig } from 'vite';

export default defineConfig({
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
