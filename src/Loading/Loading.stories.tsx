import { Meta } from "@storybook/react";
import React from "react";

import { Loading } from "./Loading";

export default {
  title: "Other/Loading",
  component: Loading,
} as Meta;

export const Component = (): React.ReactElement => <Loading />;
