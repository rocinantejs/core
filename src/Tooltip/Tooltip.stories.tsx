import { Meta } from "@storybook/react";
import React from "react";

import { Tooltip, TooltipProps } from "./Tooltip";

export default {
  title: "Other/Tooltip",
  component: Tooltip,
} as Meta;

const Template = ({ ...args }: TooltipProps): React.ReactElement => (
  <Tooltip {...args}>
    <div className="rcn-border-dashed rcn-border-gray-500 rcn-border rcn-text-white rcn-w-28 rcn-p-4">
      Reference Element
    </div>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  content: "I'm a tooltip",
} as TooltipProps;
