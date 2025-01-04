import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output folder for the build
    assetsDir: 'assets', // Subfolder for static assets
    rollupOptions: {
      input: './src/main.jsx', // Ensure the correct entry point
    },
  },
});
