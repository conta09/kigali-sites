import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default {
  build: {
    rollupOptions: {
      // Ensure main.jsx is resolved properly, don't list it as external
    }
  }
}
