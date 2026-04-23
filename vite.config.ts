import { defineConfig } from 'vite'

export default defineConfig({
  base: '/asani-v5',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html',
      output: {
        manualChunks: {
          three: ['three'],
          gsap: ['gsap'],
          lenis: ['lenis'],
        },
      },
    },
  },
})
