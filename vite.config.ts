import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deployed as a GitHub Pages *project* site (username.github.io/<repo>/),
// so the base path must match the repo name or built asset URLs 404.
export default defineConfig({
  base: '/clients-accounts-table-react-demo/',
  plugins: [react()],
});
