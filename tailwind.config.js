/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg': "url('/assets/hero.png')"
      }
    },
    screens: {
      'xs':  '344px',  // => @media (min-width: 344px) { ... }
      'sm':  '640px',  // => @media (min-width: 640px) { ... }
      'md':  '768px',  // => @media (min-width: 768px) { ... }
      'lg':  '1024px', // => @media (min-width: 1024px) { ... }
      'xl':  '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
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
