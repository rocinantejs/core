import { Meta } from "@storybook/react";
import React from "react";

import { TextInput } from "./TextInput";

export default {
  title: "Input/TextInput",
  component: TextInput,
} as Meta;

export const Component = (): React.ReactElement => (
  <TextInput placeholder="bar" />
);

export const Error = (): React.ReactElement => (
  <TextInput placeholder="bar" error />
);
