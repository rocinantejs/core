import { Meta } from "@storybook/react";
import React from "react";

import { SkeletonContext } from "..";
import { Combobox, ComboboxItem, ComboboxProps } from "./Combobox";

export default {
  title: "Input/Combobox",
  component: Combobox,
  argTypes: {
    onItemSelected: { action: "selected" },
  },
} as Meta;

const items: ComboboxItem[] = [
  { name: "Item 1", value: "item1" },
  { name: "Item 2", value: "item2" },
  { name: "Item 3", value: "item3" },
  { name: "Item 4", value: "item4" },
  { name: "Item 5", value: "item5" },
];

const Template = ({ ...args }: ComboboxProps): React.ReactNode => (
  <Combobox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items,
  placeHolder: "Select...",
} as ComboboxProps;

export const ShowEmptyItem = Template.bind({});
ShowEmptyItem.args = {
  items,
  placeHolder: "Select...",
  showEmptyItem: true,
} as ComboboxProps;

export const CustomValue = Template.bind({});
CustomValue.args = {
  items,
  placeHolder: "Select...",
  allowNewValue: true,
} as ComboboxProps;

export const Error = Template.bind({});
Error.args = {
  items,
  placeHolder: "Select...",
  error: true,
} as ComboboxProps;

export const Small = Template.bind({});
Small.args = {
  items,
  placeHolder: "Select...",
  size: "small",
} as ComboboxProps;

const SkeletonStory = ({ ...args }: ComboboxProps): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Combobox {...args} />
  </SkeletonContext.Provider>
);

export const Skeleton = SkeletonStory.bind({});
Skeleton.args = {
  items,
  placeHolder: "Select...",
} as ComboboxProps;
