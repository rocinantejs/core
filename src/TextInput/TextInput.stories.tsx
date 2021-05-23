import { Meta } from "@storybook/react";
import React from "react";

import { TextInput, TextInputProps } from "./TextInput";

export default {
  title: "Input/TextInput",
  component: TextInput,
} as Meta;

const Template = ({ ...args }: TextInputProps): React.ReactElement => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Type here...",
} as TextInputProps;

export const Error = Template.bind({});
Error.args = {
  placeholder: "Type here...",
  error: true,
} as TextInputProps;
