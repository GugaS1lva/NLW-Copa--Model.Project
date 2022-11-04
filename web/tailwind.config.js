/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },

      backgroundImage: {
        bgEffects: "url(/bg-effects.png)",
      },

      colors: {
        ignite: {
          500: '#129E57',
        },

        nlw: {
          500: '#F7DD43',
          600: '#bba12d',
        },

        gray: {
          100: '#E1E1E6',
          300: '#8D8D99',
          600: '#323238',
          800: '#202024',
          900: '#121214',
        },
      }
    },
  },
  plugins: [],
}
