const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        slab: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "cross-pattern": "url('/images/cross-pattern.svg')",
      },
    },
  },
  plugins: [],
};
