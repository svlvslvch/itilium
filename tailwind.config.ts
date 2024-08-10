import type { Config } from 'tailwindcss';

const height = {
  headerHeight: '4rem',
};

const width = {};

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minHeight: height,
      maxHeight: height,
      height,

      minWidth: width,
      maxWidth: width,
      width,

      fontFamily: {
        openSans: 'var(--font-openSans)',
      },
    },
  },
  plugins: [],
};
export default config;
