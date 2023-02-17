import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default {
  // ...
  optimizeDeps: {
    include: ['react-router-dom/switch']
  }
};