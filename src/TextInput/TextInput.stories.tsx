import { Meta } from "@storybook/react";
import React from "react";
import { MdSearch } from "react-icons/md";

import { Button } from "../Button";
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

export const WithElements = Template.bind({});
WithElements.args = {
  placeholder: "Type here...",
  leftElement: <MdSearch className="rcn-h-6 rcn-w-6 rcn-text-dark-4" />,
  rightElement: (
    <Button size="small" variant="secondary">
      Search
    </Button>
  ),
} as TextInputProps;
