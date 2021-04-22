import { Meta } from "@storybook/react";
import React from "react";

import { SkeletonContext } from "../Skeleton";
import { Radio } from "./Radio";

export default {
  title: "Input/Radio",
  component: Radio,
} as Meta;

export const Component = (): React.ReactElement => (
  <div>
    <Radio name="demo" label="A Checkbox" />
    <Radio name="demo" label="B Checkbox" />
    <Radio name="demo" label="C Checkbox" />
  </div>
);

export const Skeleton = (): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Radio name="demo" label="A Checkbox" />
    <Radio name="demo" label="B Checkbox" />
    <Radio name="demo" label="C Checkbox" />
  </SkeletonContext.Provider>
);
