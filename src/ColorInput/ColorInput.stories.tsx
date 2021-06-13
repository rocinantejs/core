import { Meta } from "@storybook/react";
import React from "react";

import { ColorInput, ColorInputProps } from "./ColorInput";

export default {
  title: "Input/ColorInput",
  component: ColorInput,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template = ({ ...args }: ColorInputProps): React.ReactElement => (
  <ColorInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "rgb(59, 130, 246)",
} as ColorInputProps;
