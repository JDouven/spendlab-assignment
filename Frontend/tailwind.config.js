/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      primary: {
        light: '#9c27b0',
        DEFAULT: '#7b1fa2',
        dark: '#6a1b9a',
      },
      accent: {
        light: '#b9f6ca',
        DEFAULT: '#69f0ae',
        dark: '#00e676',
      },
      background: '#303030',
      'on-surface': '#e9e0e4',
    },
    fontFamily: {
      sans: ['Roboto', 'Helvetica Neue', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
