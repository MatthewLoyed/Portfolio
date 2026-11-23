/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './project.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0f12',
        surface: '#13171b',
        line: '#242c35',
        text: '#d9e0e8',
        muted: '#8b97a3',
        brand: '#8c9bff',
        pink: '#ff5fa2',
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
