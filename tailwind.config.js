/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        base: '#F6F1F1',
        sub: '#AFD3E2',
        main: '#19A7CE',
        accent: '#146C94',
        white: '#FAFAFA',
        black: {
          DEFAULT: '#3C3D44',
          lighten: {
            1: '#656464',
            2: '#C2C2C2',
          },
        },
      },
      fontFamily: {
        NotoSans: ['var(--font-noto-sans)'],
        NotoSansJP: ['var(--font-noto-sans-jp)'],
      },
    },
  },
  plugins: [],
};
