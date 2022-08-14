import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

const PATH_SRC = path.resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '~/': `${PATH_SRC}/`,
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/settings/_index.scss";`,
      },
    },
  },
  plugins: [vue()],
});
