// tailwind.config.js
module.exports = {
  purge: ["src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    backgroundSize: {
      "200%": "200%",
    },
  },
  variants: {
    animation: ["hover", "focus"],
    transitionProperty: ["hover", "focus"],
    backgroundSize: ['hover', 'focus'],
    backgroundPosition: ['hover', 'focus'],
  },
  plugins: [],
};
