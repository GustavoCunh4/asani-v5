import { defineConfig } from 'vite'

export default defineConfig({
  base: '/asani-v5/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html',
    },
  },
})