/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        orangy: {
          "primary": "#ED801B",
          "primary-content" : "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
