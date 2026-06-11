import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
           additionalData: `
          @use "${path.resolve(__dirname, 'src/assets/styles/mixins/_mixins.scss')}" as *;
          @use "${path.resolve(__dirname, 'src/assets/styles/mixins/_media.scss')}" as media;
        `

      }
    }
  }
})