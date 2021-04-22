import { Meta } from "@storybook/react";
import React from "react";

import { NumberInput } from "./NumberInput";

export default {
  title: "Input/NumberInput",
  component: NumberInput,
} as Meta;

export const Component = (): React.ReactElement => <NumberInput />;

export const Error = (): React.ReactElement => <NumberInput error />;
