import { defineConfig, presetTypography, presetUno, presetWebFonts } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import presetIcons from '@unocss/preset-icons';
import transformerVariantGroup from '@unocss/transformer-variant-group';

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
