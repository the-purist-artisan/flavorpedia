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
      colors: {
        border: "#000001",
        matcha: "#4c8d2b",
        "matcha-quote": "#2c4b2b",
        "matcha-title-text": "#0c1d10",
      },
      spacing: {
        76: "19rem",
        "90%": "90%",
      },
    },
  },
  plugins: [],
};
