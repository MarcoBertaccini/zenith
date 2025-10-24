import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/', // <-- AGGIUNGI QUESTA RIGA (nome del tuo repository)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
