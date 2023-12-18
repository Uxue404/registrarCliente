/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      fontFamily: {
        "Lekton": ['Lekton', 'serif']
      },
      colors: {
        'seagull': {
          '50': '#edfbfe',
          '100': '#d3f4fa',
          '200': '#ace8f5',
          '300': '#53cbea',
          '400': '#32b9de',
          '500': '#169cc4',
          '600': '#157ca5',
          '700': '#186486',
          '800': '#1c536e',
          '900': '#1c455d',
          '950': '#0d2d3f',
        },
      },
    },
  },
  plugins: [],
}

