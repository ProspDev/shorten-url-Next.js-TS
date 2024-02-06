/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: "class",
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      desktop: { max: "1440px" },
      basic: { max: "1280px" },
      laptop: { max: "1024px" },
      tablet: { max: "768px" },
      medium: { max: "640px" },
      mobile: { max: "430px" },
    },
    extend: {
      fontFamily: {
        sans: ["", ...defaultTheme.fontFamily.sans], // default font style
      },
      colors: {
        dark: "#263849",
      },
    },
  },
  plugins: [],
};
