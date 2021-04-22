module.exports = (componentName) => ({
  content: `import { Meta } from "@storybook/react";
import React from "react";

import { ${componentName} } from "./${componentName}";

export default {
  title: "${componentName}",
  component: ${componentName},
} as Meta;

export const Component = (): React.ReactElement => <${componentName} foo="bar" />;
`,
  extension: `.stories.tsx`
});
