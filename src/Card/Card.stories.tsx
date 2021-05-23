import { Meta } from "@storybook/react";
import React from "react";

import { Typography } from "../Typography/Typography";
import { Card, CardProps } from "./Card";

export default {
  title: "Layout/Card",
  component: Card,
} as Meta;

const Template = ({ ...args }: CardProps): React.ReactNode => (
  <Card {...args}>
    <Typography variant="h3">This is a card</Typography>
    <Typography>It can have content</Typography>
  </Card>
);

export const Default = Template.bind({});
Default.args = {} as CardProps;
