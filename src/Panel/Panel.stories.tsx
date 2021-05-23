import { Meta } from "@storybook/react";
import React from "react";

import { Typography } from "../Typography/Typography";
import { Panel, PanelProps } from "./Panel";

export default {
  title: "Layout/Panel",
  component: Panel,
} as Meta;

const Template = ({ ...args }: PanelProps): React.ReactNode => (
  <Panel {...args}>
    <Typography variant="h3">This is a panel</Typography>
    <Typography>It can have content</Typography>
  </Panel>
);

export const Default = Template.bind({});
Default.args = {} as PanelProps;
