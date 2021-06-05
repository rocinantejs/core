module.exports = (componentName) => ({
  content: `export { ${componentName} } from "./${componentName}";
  export type { ${componentName}Props } from "./${componentName}";
`,
  extension: `.ts`,
  overrideName: `index`,
});
