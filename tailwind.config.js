const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5em",
        sm: "1rem",
        lg: 0,
      },
    },
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        light: "#f0f0f0",
        facebook: "#1877f2",
        twitter: {
          dark: "#14171a",
          normal: "#1da1f2",
          light: "#657786",
        },
        instagram: {
          dark: "#5851db",
          normal: "#833ab4",
          light: "#c13584",
        },
        whatsapp: {
          dark: "#075e54",
          normal: "#128c7e",
          light: "#25d366",
        },
      },
      backgroundImage: {
        hotel: "url('/hotel.jpg')",
      },
    },
    fontFamily: {
      sans: ["Helvetica Neue", "Open Sans", ...defaultTheme.fontFamily.sans],
      vibes: [
        "Great Vibes",
        "cursive",
        "Helvetica Neue",
        "Open Sans",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    order: {
      start: "-9999",
      end: "9999",
      normal: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
