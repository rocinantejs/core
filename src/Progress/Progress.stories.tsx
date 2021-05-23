import { Meta } from "@storybook/react";
import React from "react";

import { Progress, ProgressProps } from "./Progress";

export default {
  title: "Other/Progress",
  component: Progress,
} as Meta;

const Template = ({ ...args }: ProgressProps): React.ReactElement => (
  <Progress style={{ width: "300px" }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  progress: 30,
} as ProgressProps;

export const NoProgress = Template.bind({});
NoProgress.args = {} as ProgressProps;
