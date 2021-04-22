import { Meta } from "@storybook/react";
import React from "react";

import { SkeletonContext } from "../Skeleton";
import { Checkbox } from "./Checkbox";

export default {
  title: "Input/Checkbox",
  component: Checkbox,
} as Meta;

export const Component = (): React.ReactNode => <Checkbox label="A Checkbox" />;

export const Skeleton = (): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Checkbox label="A Checkbox" />
  </SkeletonContext.Provider>
);
