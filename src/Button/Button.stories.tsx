// Generated with util/create-component.js
import React from "react";

import Button from "./Button";

export default {
  title: "Button",
};

export const Primary = (): React.ReactNode => <Button>Click me!</Button>;

export const Secondary = (): React.ReactNode => (
  <Button variant="secondary">Click me!</Button>
);

export const Flat = (): React.ReactNode => (
  <Button variant="flat">Click me!</Button>
);
