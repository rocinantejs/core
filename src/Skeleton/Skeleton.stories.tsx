import { Meta } from "@storybook/react";
import React from "react";

import { Card } from "../Card";
import { Skeleton, SkeletonProps } from "./Skeleton";

export default {
  title: "Other/Skeleton",
  component: Skeleton,
} as Meta;

const Template = ({ ...args }: SkeletonProps): React.ReactNode => (
  <Card>
    <Skeleton {...args} />
  </Card>
);

export const Default = Template.bind({});
Default.args = { height: "1rem", width: "6rem" } as SkeletonProps;
