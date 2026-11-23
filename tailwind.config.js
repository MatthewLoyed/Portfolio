/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './project.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        paper: '#faf8f4',
        ink: '#1c1b19',
        muted: '#6b665e',
        line: '#e4dfd5',
        accent: '#2f5d50',
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
