import { Meta } from "@storybook/react";
import React from "react";

import { Card } from "../Card";
import { Skeleton } from "./Skeleton";

export default {
  title: "Other/Skeleton",
  component: Skeleton,
} as Meta;

export const Component = (): React.ReactNode => (
  <Card>
    <Skeleton height="1rem" width="6rem" />
  </Card>
);
