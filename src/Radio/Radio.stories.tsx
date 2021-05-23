import { Meta } from "@storybook/react";
import React from "react";

import { SkeletonContext } from "../Skeleton";
import { Radio, RadioProps } from "./Radio";

export default {
  title: "Input/Radio",
  component: Radio,
} as Meta;

const Template = ({ ...args }: RadioProps): React.ReactElement => (
  <Radio {...args} />
);

export const Default = Template.bind({});
Default.args = { name: "demo", label: "A Radio" } as RadioProps;

export const Collection = (): React.ReactNode => (
  <>
    <Radio name="demo" label="A Radio" />
    <Radio name="demo" label="B Radio" />
    <Radio name="demo" label="C Radio" />
  </>
);

export const Skeleton = (): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Radio name="demo" label="A Radio" />
    <Radio name="demo" label="B Radio" />
    <Radio name="demo" label="C Radio" />
  </SkeletonContext.Provider>
);
