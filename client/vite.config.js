import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  theme: {
    extend:
    {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [react()],
  build: {
    emptyOutDir: true,
    outDir: '../server/public'
  }
})
