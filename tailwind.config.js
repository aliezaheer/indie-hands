/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primaryBg: "#181818",
      secondryBg: "#212121",
      primaryText: "#ffffff",
      secondaryText: "#aaaaaa",
      navbarText: "#BDC3C7",
    },
    extend: {},
  },
  plugins: [],
};
