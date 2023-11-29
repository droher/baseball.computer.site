import theme_list from "./src/lib/theme_list";

const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        special: ["Special Elite"]
      }
    }
  },

  plugins: [forms, typography, daisyui],

  daisyui: {
    themes: theme_list
  }
};

module.exports = config;