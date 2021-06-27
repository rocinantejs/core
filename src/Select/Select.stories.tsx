import { Meta } from "@storybook/react";
import React from "react";

import { SkeletonContext } from "..";
import { Select, SelectItem, SelectProps } from "./Select";

export default {
  title: "Input/Select",
  component: Select,
} as Meta;

const items: SelectItem[] = [
  { name: "Item 1", value: "item1" },
  { name: "Item 2", value: "item2" },
  { name: "Item 3", value: "item3" },
  { name: "Item 4", value: "item4" },
  { name: "Item 5", value: "item5" },
];

const Template = ({ ...args }: SelectProps): React.ReactNode => (
  <Select {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items,
  placeHolder: "Select...",
} as SelectProps;

export const ShowEmptyItem = Template.bind({});
ShowEmptyItem.args = {
  items,
  placeHolder: "Select...",
  showEmptyItem: true,
} as SelectProps;

export const Error = Template.bind({});
Error.args = {
  items,
  placeHolder: "Select...",
  error: true,
} as SelectProps;

const SkeletonStory = ({ ...args }: SelectProps): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Select {...args} />
  </SkeletonContext.Provider>
);

export const Skeleton = SkeletonStory.bind({});
Skeleton.args = {
  items,
  placeHolder: "Select...",
} as SelectProps;
