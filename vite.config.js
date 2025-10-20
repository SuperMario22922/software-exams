import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/software-exams/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        mypage: 'dontleakpls.html' // <-- add your new html file
      }
    }
  }

})
