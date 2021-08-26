const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: (theme) => theme("colors"),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      brown: {
        100: "#45413f",
      },
    }),
    extend: {
      maxWidth: {
        m: "700px",
        l: "1024px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
