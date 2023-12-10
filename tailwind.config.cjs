import { themeList } from "./src/lib/themeList";

const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        special: ["Special Elite"],
        play: ["Play"],
      },
    },
  },

  plugins: [forms, typography, daisyui],

  daisyui: {
    themes: themeList,
  },
};

module.exports = config;