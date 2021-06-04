import { Meta } from "@storybook/react";
import React from "react";

import { Range, RangeProps } from "./Range";

export default {
  title: "Range",
  component: Range,
} as Meta;

const Template = ({ ...args }: RangeProps): React.ReactElement => (
  <Range {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 40,
} as RangeProps;

export const RangeVariant = Template.bind({});
RangeVariant.args = {
  value: [40, 60],
  showLabels: true,
} as RangeProps;
