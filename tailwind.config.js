/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ matchComponents, theme }){
      matchComponents(
        {
          'x-btn': (value) => ({
            'border-color': value,
            'background-color': value,
            color: 'white',
          })
        },
        { values: theme('colors') },
      )
    }),

  ],
}