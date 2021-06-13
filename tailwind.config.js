const colors = (theme) => ({
  ...theme("colors"),
  "dark-0": "#201E20",
  "dark-1": "#2C2D31",
  "dark-2": "#343539",
  "dark-3": "#424246",
  "dark-4": "#767881"
});

// tailwind.config.js
module.exports = {
  purge: ["src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  prefix: "rcn-",
  theme: {
    backgroundColor: colors,
    textColor: colors,
    borderColor: colors,
    extend: {
      backgroundSize: {
        "200%": "200%",
      },
      boxShadow: {
        red: "0 2px 4px 0 rgba(255, 0, 0, 0.50)",
        blue: "0 2px 4px 0 rgba(59, 130, 246, 0.50)",
        dark: "0 2px 4px 0 #343539",
      },
      animation: {
        "bg-scroll": "bg-scroll 2s ease-in-out infinite",
      },
      keyframes: {
        "bg-scroll": {
          "0%, 100%": { "background-position": "right" },
          "50%": { "background-position": "left" },
        },
      },
      transitionProperty: {
        width: "width",
        height: "height",
      },
      flex: {
        full: "1 1 100%"
      }
    },
  },
  variants: {
    animation: ["hover", "focus"],
    transitionProperty: ["hover", "focus"],
    backgroundSize: ["hover", "focus"],
    backgroundPosition: ["hover", "focus", "checked"],
    backgroundColor: ["hover", "focus", "checked"],
    borderColor: ["hover", "checked", "focus"],
    borderWidth: ["hover", "checked"],
    boxShadow: ["hover", "focus"],
    inset: ["checked"],
    extend: {
      margin: ["last", "first"],
      padding: ["last", "first"]
    }
  },
  plugins: [],
};
