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
        "menu-background": "#263165",
      },
      fontFamily: {
        serif: ["adobe-garamond-pro", "serif"],
        eng: ["benaco-one", "MyFont"],
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
