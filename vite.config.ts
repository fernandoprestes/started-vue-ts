import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

const PATH_SRC = path.resolve(__dirname, './src');

export default defineConfig({
  plugins: [vue()],

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
});
