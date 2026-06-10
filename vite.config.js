import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 'index.html'),
        notes:      resolve(__dirname, 'notes.html'),
        itinerary:  resolve(__dirname, 'victoria-george-itinerary.html'),
      },
    },
  },
})
