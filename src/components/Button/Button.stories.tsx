import React from "react";

import { Button, ButtonProps } from ".";
import { Meta, Story } from "../../storybook";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { defaultValue: "Example" },
    primary: { defaultValue: true },
  },
} as Meta<ButtonProps>;

export const Playground: Story<ButtonProps> = (props: ButtonProps) => <Button {...props} />;

export const Primary = (): JSX.Element => <Button label="Primary" primary={true} />;

export const Secondary = (): JSX.Element => <Button label="Secondary" primary={false} />;

export const Large = (): JSX.Element => <Button label="Large" size="large" />;

export const Small = (): JSX.Element => <Button label="Small" size="small" />;
