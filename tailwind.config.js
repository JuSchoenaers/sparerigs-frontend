const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    
    extend: {
      dropShadow: {
        glow: "0px 0px 8px var(--tw-shadow-color)",
      },
      borderRadius:{
        '4xl': '2rem'
      },
      colors: {
        primary: {
          50: "#EEE2FD",
          100: "#E0CAFC",
          200: "#BF91F8",
          300: "#A15CF5",
          400: "#7F22F1",
          500: "#640DCD",
          600: "#4F0AA3",
          700: "#3C087D",
          800: "#280552",
          900: "#15032B",
          950: "#090113"
        },
        secondary: {
        50: "#E8E4FC",
        100: "#D4CDF9",
        200: "#AA9BF2",
        300: "#7C65EB",
        400: "#5133E5",
        500: "#3619C7",
        600: "#291395",
        700: "#1B0D64",
        800: "#0D062F",
        900: "#060317",
        950: "#04020E"
      },
      tertiary: {
        50: "#EEEBF9",
        100: "#E1DCF4",
        200: "#BFB4E9",
        300: "#A091DE",
        400: "#826ED4",
        500: "#644AC9",
        600: "#4C33AD",
        700: "#3C298A",
        800: "#2D1E66",
        900: "#1C1340",
        950: "#0E091F"
      },
      text:{
        primary:"#EDEEF2"
      },
        white: "#FFFFFF",
        glow: "#920DC6",
        transparent:"rgba(0,0,0,0)"
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(150px, 1fr));',
      },
      gridTemplateRows:{
        'auto': 'repeat(auto-fill, minmax(150px, 1fr));',
      }

    },
  },
  plugins: [
    require('tailwind-fontawesome')
  ],
};
