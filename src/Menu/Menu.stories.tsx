/* eslint-disable no-alert */
import { Meta } from "@storybook/react";
import React from "react";
import { MdAccountCircle, MdApps, MdExitToApp } from "react-icons/md";

import { Menu, MenuDivider, MenuItem, MenuProps } from "./Menu";

export default {
  title: "Other/Menu",
  component: Menu,
  subcomponents: { MenuItem, MenuDivider },
} as Meta;

const Template = ({ ...args }: MenuProps): React.ReactElement => (
  <Menu {...args}>
    <MenuItem icon={<MdAccountCircle />} label="John Johnson" />
    <MenuItem label="john@johnmail.io" />
    <MenuItem
      icon={<MdApps />}
      label="Apps"
      onClick={() => window.alert("Clicked: Apps")}
    />
    <MenuDivider />
    <MenuItem
      icon={<MdExitToApp />}
      label="Exit"
      onClick={() => window.alert("Clicked: Exit")}
    />
  </Menu>
);

export const Default = Template.bind({});
Default.args = {} as MenuProps;

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "horizontal",
} as MenuProps;
