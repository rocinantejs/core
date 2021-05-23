import { Meta } from "@storybook/react";
import React from "react";

import { SkeletonContext } from "../Skeleton";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Input/Checkbox",
  component: Checkbox,
} as Meta;

const Template = ({ ...args }: CheckboxProps): React.ReactNode => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "A Checkbox",
} as CheckboxProps;

const SkeletonStory = ({ ...args }: CheckboxProps): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Checkbox {...args} />
  </SkeletonContext.Provider>
);

export const Skeleton = SkeletonStory.bind({});
Skeleton.args = {
  label: "A Checkbox",
} as CheckboxProps;
