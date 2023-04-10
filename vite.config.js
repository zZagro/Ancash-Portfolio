import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        contact: resolve(__dirname, 'contact.html'),
        projects_bz: resolve(__dirname, 'projects/bazaar.html'),
        projects_fc: resolve(__dirname, 'projects/fancy-crafting.html'),
        projects_iecon: resolve(__dirname, 'projects/ieconomy.html'),
        projects_ilib: resolve(__dirname, 'projects/ilibrary.html'),
        projects_sockets: resolve(__dirname, 'projects/sockets.html'),
      },
    },
  },
})