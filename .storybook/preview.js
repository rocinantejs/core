import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import rocinante from "./rocinante.theme";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: rocinante,
  },
  backgrounds: {
    default: 'rocinante',
    values: [
      {
        name: 'rocinante',
        value: '#2C2D31',
      },
    ],
  }
});
