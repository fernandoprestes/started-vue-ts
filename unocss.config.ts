import presetIcons from '@unocss/preset-icons';
import presetRemToPx from '@unocss/preset-rem-to-px';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { defineConfig, presetTypography, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
	theme: {
		container: {
			center: true,
		},

		colors: {
			primary: '#294A3C',
		},
	},

	transformers: [transformerVariantGroup()],

	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: ['Roboto', 'sans'],
				mono: 'DM Mono',
				hand: ['Dancing Script', 'cursive'],
			},
		}),

		presetTypography(),
		presetIcons(),
		presetRemToPx(),
	],
});
