import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react({
      // SWC optimizations for better performance
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
    })
  ],
  
  build: {
    // Better chunking strategy for your product catalog
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['./src/utils/productUtils.js', './src/utils/urlUtils.js'],
        },
      },
    },
    // Enable source maps only in dev
    sourcemap: false,
  },
  
  server: {
    hmr: {
      overlay: false,
    },
    // Faster cold starts
    warmup: {
      clientFiles: ['./src/main.jsx', './src/App.jsx'],
    },
  },
  
  // Only in development
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
})
