// Generated with util/create-component.js
import React from "react";

import Card from "../Card";
import { SkeletonContext } from "../Skeleton/Skeleton";
import Button from "./Button";

export default {
  title: "Button",
};

export const Primary = (): React.ReactNode => (
  <>
    <Button>Click me!</Button>
    <Card style={{ marginTop: "1rem" }}>
      <Button>Click me!</Button>
    </Card>
  </>
);

export const Secondary = (): React.ReactNode => (
  <>
    <Button variant="secondary">Click me!</Button>
    <Card style={{ marginTop: "1rem" }}>
      <Button variant="secondary">Click me!</Button>
    </Card>
  </>
);

export const Flat = (): React.ReactNode => (
  <>
    <Button variant="flat">Click me!</Button>
    <Card style={{ marginTop: "1rem" }}>
      <Button variant="flat">Click me!</Button>
    </Card>
  </>
);

export const Skeleton = (): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Card>
      <Button variant="flat">Click me!</Button>
    </Card>
  </SkeletonContext.Provider>
);
