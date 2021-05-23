import { Meta } from "@storybook/react";
import React from "react";

import { Button } from "../Button";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";

export default {
  title: "Button/Button Group",
  component: ButtonGroup,
  subcomponents: { Button },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const DefaultStory = ({ ...args }: ButtonGroupProps): React.ReactNode => (
  <ButtonGroup {...args}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    <Button>Four</Button>
  </ButtonGroup>
);

export const Default = DefaultStory.bind({});
Default.args = {} as ButtonGroupProps;
