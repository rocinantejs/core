module.exports = {
  projects: ["<rootDir>/jest-test.config.js", "<rootDir>/jest-eslint.config.js"],
  // Coverage settings
  testResultsProcessor: "jest-sonar-reporter",
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/__tests__/**",
    "!**/*.stories.{jsx,tsx}",
    "!**/dist/**",
    "!**/*.d.ts",
    "!**/index.ts",
    "!**/helpers/**",
  ],
};
