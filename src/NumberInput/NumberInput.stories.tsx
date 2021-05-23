import { Meta } from "@storybook/react";
import React from "react";

import { NumberInput, NumberInputProps } from "./NumberInput";

export default {
  title: "Input/NumberInput",
  component: NumberInput,
} as Meta;

const Template = ({ ...args }: NumberInputProps): React.ReactElement => (
  <NumberInput {...args} />
);

export const Default = Template.bind({});
Default.args = {} as NumberInputProps;

export const Error = Template.bind({});
Error.args = {
  error: true,
} as NumberInputProps;
