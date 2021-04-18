import React from "react";

import { Card } from "../Card";
import { SkeletonContext } from "../Skeleton/Skeleton";
import { Button } from "./Button";

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

export const PrimaryDisabled = (): React.ReactNode => (
  <>
    <Button disabled>Click me!</Button>
    <Card style={{ marginTop: "1rem" }}>
      <Button disabled>Click me!</Button>
    </Card>
  </>
);

export const PrimaryLoading = (): React.ReactNode => (
  <>
    <Button loading>Click me!</Button>
    <Card style={{ marginTop: "1rem" }}>
      <Button loading>Click me!</Button>
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

export const SecondaryDisabled = (): React.ReactNode => (
  <>
    <Button variant="secondary" disabled>
      Click me!
    </Button>
    <Card style={{ marginTop: "1rem" }}>
      <Button variant="secondary" disabled>
        Click me!
      </Button>
    </Card>
  </>
);

export const SecondaryLoading = (): React.ReactNode => (
  <>
    <Button variant="secondary" loading>
      Click me!
    </Button>
    <Card style={{ marginTop: "1rem" }}>
      <Button variant="secondary" loading>
        Click me!
      </Button>
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

export const FlatDisabled = (): React.ReactNode => (
  <>
    <Button variant="flat" disabled>
      Click me!
    </Button>
    <Card style={{ marginTop: "1rem" }}>
      <Button variant="flat" disabled>
        Click me!
      </Button>
    </Card>
  </>
);

export const FlatLoading = (): React.ReactNode => (
  <>
    <Button variant="flat" loading>
      Click me!
    </Button>
    <Card style={{ marginTop: "1rem" }}>
      <Button variant="flat" loading>
        Click me!
      </Button>
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
