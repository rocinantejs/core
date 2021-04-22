import { Meta } from "@storybook/react";
import React from "react";

import { Typography } from "../Typography/Typography";
import { Panel } from "./Panel";

export default {
  title: "Layout/Panel",
  component: Panel,
} as Meta;

export const Component = (): React.ReactNode => (
  <Panel>
    <Typography variant="h3">This is a card</Typography>
    <Typography>It can have content</Typography>
  </Panel>
);
