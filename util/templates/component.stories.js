module.exports = (componentName) => ({
  content: `import { Meta } from "@storybook/react";
import React from "react";

import { ${componentName}, ${componentName}Props } from "./${componentName}";

export default {
  title: "${componentName}",
  component: ${componentName},
} as Meta;

const Template = ({ ...args }: ${componentName}Props): React.ReactElement => (
  <${componentName} {...args} />
);

export const Default = Template.bind({});
Default.args = {} as ${componentName}Props;
`,
  extension: `.stories.tsx`
});
