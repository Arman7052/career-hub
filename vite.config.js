import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // Define an alias for the "src" directory
      '@': '/src',
    },
  },
  plugins: [
    {
      name: 'json-loader',
      enforce: 'pre',
      transform(json, id) {
        if (id.endsWith('.json')) {
          return `export default ${JSON.stringify(json)}`;
        }
      },
    },
  ],
})
