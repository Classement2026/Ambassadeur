import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  base: "/Ambassadeur/",
>>>>>>> 3210f63d804edb769faec58c3e421081d5da424a
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
