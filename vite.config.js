import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        projects_bz: resolve(__dirname, 'projects/bazaar.html'),
        projectss_fc: resolve(__dirname, 'projects/fancy-crafting.html'),
      },
    },
  },
})