/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#1597E4",
      card: "#FFFFFF",
      "card-border": "#E6E6E6",
      dark: "#212121",
      white: "#FAFAFA",
      error: "#D86161",
      placeholder: "#7A7A7A",

      // transparent: "transparent",
      // current: "currentColor",
      // white: "#ffffff",
      // purple: "#3f3cbb",
      // midnight: "#121063",
      // metal: "#565584",
      // tahiti: "#3ab7bf",
      // black: "#000000",
      // silver: "#ecebff",
      // "bubble-gum": "#ff77e9",
      // bermuda: "#78dcca",
      // "ext-btn": "#1597E4",
    },
  },
  plugins: [],
};
