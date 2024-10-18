import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { colors, radius, shadow, typography } from './src/specific/tailwind';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/packages/@cyberutopian/layout/**/*.{js,ts,jsx,tsx,mdx,html}',
    './src/packages/@cyberutopian/components/**/*.{js,ts,jsx,tsx,mdx,html}',
    './node_modules/@cyberutopian/layout/**/*.{js,ts,jsx,tsx,mdx,html}',
    './node_modules/@cyberutopian/components/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'green-conic': 'radial-gradient(circle, white 10%, #52c41a 90%)',
      },
    },
    colors,
  },
  plugins: [
    plugin(function ({ addComponents, addBase }) {
      addComponents(typography);
      addComponents(radius);
      addComponents(shadow);

      addBase({
        'input:-webkit-autofill': {
          '-webkit-box-shadow': '0 0 0px 1000px white inset !important',
          'box-shadow': '0 0 0px 1000px white inset !important',
          '-webkit-text-fill-color': '#000 !important',
        },
        'input:-webkit-autofill:hover': {
          '-webkit-box-shadow': '0 0 0px 1000px white inset !important',
          'box-shadow': '0 0 0px 1000px white inset !important',
          '-webkit-text-fill-color': '#000 !important',
        },
        'input:-webkit-autofill:focus': {
          '-webkit-box-shadow': '0 0 0px 1000px white inset !important',
          'box-shadow': '0 0 0px 1000px white inset !important',
          '-webkit-text-fill-color': '#000 !important',
        },
        'input:-webkit-autofill:active': {
          '-webkit-box-shadow': '0 0 0px 1000px white inset !important',
          'box-shadow': '0 0 0px 1000px white inset !important',
          '-webkit-text-fill-color': '#000 !important',
        },
      });
    }),
  ],
};
export default config;
