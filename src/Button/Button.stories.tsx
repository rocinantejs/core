// Generated with util/create-component.js
import React from "react";

import Card from "../Card";
import Button from "./Button";

export default {
  title: "Button",
};

export const Primary = (): React.ReactNode => (
  <>
    <Button>Click me!</Button>
    <Card style={{ display: "inline", marginLeft: "1rem" }}>
      <Button>Click me!</Button>
    </Card>
  </>
);

export const Secondary = (): React.ReactNode => (
  <>
    <Button variant="secondary">Click me!</Button>
    <Card style={{ display: "inline", marginLeft: "1rem" }}>
      <Button variant="secondary">Click me!</Button>
    </Card>
  </>
);

export const Flat = (): React.ReactNode => (
  <>
    <Button variant="flat">Click me!</Button>
    <Card style={{ display: "inline", marginLeft: "1rem" }}>
      <Button variant="flat">Click me!</Button>
    </Card>
  </>
);
