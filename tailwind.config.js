/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        76: "19rem",
        "90%": "90%",
      },
      colors: {
        white: "#ffffff",
        // background
        "menu-bg": "#263165",
        "coffee-bg": "#B66E3F",
        "matcha-bg": "#608326",
        "western-tea-bg": "#D6A77C",
        "eastern-tea-bg": "#90765F",
        "chocolate-bg": "#633313",
        "fruits-bg": "#E9642A",
        "durians-bg": "#FFDE59",
        "classic-bg": "#E3DFBA",
        "special-bg": "#263165",
        // text
        "western-tea-text": "#251F1F",
        "classic-text": "#251F1F",
        "durians-text": "#6B4726",
        // special
        "cny-2024-bg": "#D73B3B",
      },
      fontFamily: {
        // serif: ["adobe-garamond-pro", "serif"],
        "gt-super-text-bold": ["gt-super-text-bold", "sans-serif"],
        "benaco-one": ["benaco-one", "MyFont"],
        "ibm-plex-thai": ["ibm-plex-sans-thai-looped", "sans-serif"],
      },
      fontSize: {
        "key-header": "44px",
      },
      lineHeight: {
        "key-header": "40px",
      },
    },
  },
  plugins: [],
};
