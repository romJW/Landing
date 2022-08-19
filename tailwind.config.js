/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        orangy: {
          primary: '#ED801B',
          'primary-content': '#FFFFFF',

          '--rounded-btn': '3px',
          '--border-btn': '1px',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
