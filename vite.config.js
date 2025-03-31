import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  base: '/cryptoorbit/',
  plugins: [react(), viteStaticCopy({
    targets: [
      { src: 'public/*', dest: '' }
    ]
  }), tailwindcss()],
})
