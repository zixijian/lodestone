import { defineConfig } from 'vite';

import path from 'path';

export default defineConfig({
  root: '.',
  base: './',
  resolve: {
    alias: {
      three: path.resolve(__dirname, 'node_modules/three')
    }
  },
  build: {
    outDir: '../app/src/main/assets/web',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
