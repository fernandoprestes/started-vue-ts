import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';

const PATH_SRC = path.resolve(__dirname, './src');

export default defineConfig({
  plugins: [vue(), Unocss()],

  server: {
    port: 4000,
  },

  resolve: {
    alias: {
      '~/': `${PATH_SRC}/`,
    },
  },
});
