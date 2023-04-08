import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        plugins_bz: resolve(__dirname, 'plugins/bazaar.html'),
        plugins_fc: resolve(__dirname, 'plugins/fancy-crafting.html'),
      },
    },
  },
})