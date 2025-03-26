import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replaceImageUrl from 'vite-plugin-replace-image-url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replaceImageUrl({
      publicPath: process.env.VITE_APP_BASE_PATH
    }),
  ],
})
