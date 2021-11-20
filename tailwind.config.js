const { theme } = require("tailwindcss/defaultConfig");
const colors = require("tailwindcss/colors");

/** @type {Parameters<import('tailwindcss/index')>[0]} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx,mdx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  important: "html",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Museo Sans Rounded"', ...theme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      blue: "#3CB4E5",
      black: colors.black,
      "dark-blue": "#051C2C",
      red: "#E1251B",
      yellow: "#FED925",
      white: colors.white,
      green: "#00AE42",
      orange: "#FF6B00",
      "light-green": "#A2D45E",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
