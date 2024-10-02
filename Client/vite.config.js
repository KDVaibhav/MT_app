import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api': 'https://5000-idx-mtapp-1727758366310.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/',
    }
  }
})
