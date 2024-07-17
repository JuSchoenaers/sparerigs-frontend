/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        50: "#ECE5FA",
        100: "#D9CBF5",
        200: "#B79CEC",
        300: "#9169E3",
        400: "#6F39DA",
        500: "#5422B5",
        600: "#431B92",
        700: "#31146B",
        800: "#210E49",
        900: "#100622",
        950: "#080311",
      },
      white : "#FFFFFF",
      glow:'#920DC6'
    },
    extend: {
      dropShadow: {
        glow: '0px 0px 4px rgba(111,57,218,0.8)'
      }
    },
  },
  plugins: [],
};
