import { Meta } from "@storybook/react";
import React from "react";

import { Card } from "../Card";
import { SkeletonContext } from "../Skeleton/Skeleton";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

export const Primary = (): React.ReactNode => <Button>Click me!</Button>;

export const PrimaryDisabled = (): React.ReactNode => (
  <Button disabled>Click me!</Button>
);

export const PrimaryLoading = (): React.ReactNode => (
  <Button loading>Click me!</Button>
);

export const Secondary = (): React.ReactNode => (
  <Button variant="secondary">Click me!</Button>
);

export const SecondaryDisabled = (): React.ReactNode => (
  <Button variant="secondary" disabled>
    Click me!
  </Button>
);

export const SecondaryLoading = (): React.ReactNode => (
  <Button variant="secondary" loading>
    Click me!
  </Button>
);

export const Flat = (): React.ReactNode => (
  <Button variant="flat">Click me!</Button>
);

export const FlatDisabled = (): React.ReactNode => (
  <Button variant="flat" disabled>
    Click me!
  </Button>
);

export const FlatLoading = (): React.ReactNode => (
  <Button variant="flat" loading>
    Click me!
  </Button>
);

export const Skeleton = (): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Button variant="flat">Click me!</Button>
  </SkeletonContext.Provider>
);
