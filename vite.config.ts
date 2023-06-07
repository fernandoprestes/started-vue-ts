import path from 'path';

import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import Inspector from 'vite-plugin-vue-inspector';

const PATH_SRC = path.resolve(__dirname, './src');

export default defineConfig({
	plugins: [
		vue(),
		Unocss(),
		Inspect(),
		Inspector({
			enabled: false,
			toggleButtonVisibility: 'always',
		}),
	],
	server: {
		port: 4000,
	},
	resolve: {
		alias: {
			'~/': `${PATH_SRC}/`,
		},
	},
});
