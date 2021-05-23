import { Meta } from "@storybook/react";
import React from "react";

import { Loading, LoadingProps } from "./Loading";

export default {
  title: "Other/Loading",
  component: Loading,
} as Meta;

const Template = ({ ...args }: LoadingProps): React.ReactElement => (
  <Loading {...args} />
);

export const Default = Template.bind({});
Default.args = {} as LoadingProps;
