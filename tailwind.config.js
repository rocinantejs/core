const colors = (theme) => ({
  ...theme("colors"),
  "dark-0": "#201E20",
  "dark-1": "#2C2D31",
  "dark-2": "#343539",
})

// tailwind.config.js
module.exports = {
  purge: ["src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    backgroundColor: colors,
    borderColor: colors,
    backgroundSize: {
      "200%": "200%",
    },
  },
  variants: {
    animation: ["hover", "focus"],
    transitionProperty: ["hover", "focus"],
    backgroundSize: ["hover", "focus"],
    backgroundPosition: ["hover", "focus", "checked"],
    borderColor: ["hover", "checked"],
    borderWidth: ["hover", "checked"],
    boxShadow: ["hover", "focus"],
    inset: ["checked"],
  },
  plugins: [],
};
