module.exports = (componentName) => ({
  content: `export { ${componentName}, ${componentName}Props } from "./${componentName}";
`,
  extension: `.ts`,
  overrideName: `index`,
});
