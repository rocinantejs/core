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
    <Button name="one">One</Button>
    <Button name="two">Two</Button>
    <Button name="three">Three</Button>
    <Button name="four">Four</Button>
  </ButtonGroup>
);

export const Default = DefaultStory.bind({});
Default.args = {} as ButtonGroupProps;
