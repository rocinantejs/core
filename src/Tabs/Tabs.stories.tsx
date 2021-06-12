import { Meta } from "@storybook/react";
import React from "react";

import { Tab } from "./Tab";
import { Tabs, TabsProps } from "./Tabs";

export default {
  title: "Layout/Tabs",
  component: Tabs,
  subcomponents: { Tab },
} as Meta;

const Template = ({ ...args }: TabsProps): React.ReactElement => (
  <Tabs {...args}>
    <Tab label="Tab One">Tab One Content</Tab>
    <Tab label="Tab Two">Tab Two Content</Tab>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {} as TabsProps;

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "vertical",
} as TabsProps;
