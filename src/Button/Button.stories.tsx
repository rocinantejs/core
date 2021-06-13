import { Meta } from "@storybook/react";
import React from "react";

import { SkeletonContext } from "../Skeleton/Skeleton";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template = ({ ...args }: ButtonProps): React.ReactNode => (
  <Button {...args}>Click me!</Button>
);

export const Primary = Template.bind({});
Primary.args = {} as ButtonProps;
export const Disabled = Template.bind({});
Disabled.args = { disabled: true } as ButtonProps;
export const Loading = Template.bind({});
Loading.args = { loading: true } as ButtonProps;
export const Secondary = Template.bind({});
Secondary.args = { variant: "secondary" } as ButtonProps;

export const Flat = Template.bind({});
Flat.args = { variant: "flat" } as ButtonProps;

export const Danger = Template.bind({});
Danger.args = { variant: "danger" } as ButtonProps;

export const Small = Template.bind({});
Small.args = { size: "small" } as ButtonProps;

const SkeletonStory = ({ ...args }: ButtonProps): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Button {...args}>Click me!</Button>
  </SkeletonContext.Provider>
);

export const Skeleton = SkeletonStory.bind({});
Skeleton.args = { variant: "danger" } as ButtonProps;
