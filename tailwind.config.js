/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#EEE8DC',
        surface: '#F5F0E8',
        ink: '#151515',
        olive: '#747C51',
        oliveHover: '#5F6642',
      },
      fontFamily: {
        serif: ['Arcilla', 'Georgia', 'serif'],
        sans: ['"Rethink Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
