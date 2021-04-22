import { Meta } from "@storybook/react";
import React from "react";

import { Progress } from "./Progress";

export default {
  title: "Other/Progress",
  component: Progress,
} as Meta;

export const Component = (): React.ReactElement => (
  <Progress progress={30} style={{ width: "300px" }} />
);

export const NoProgress = (): React.ReactElement => (
  <Progress style={{ width: "300px" }} />
);
