import { Meta } from "@storybook/react";
import React from "react";

import { Button } from "../Button";
import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Button/Button Group",
  component: ButtonGroup,
  subcomponents: { Button },
} as Meta;

export const Component = (): React.ReactNode => (
  <ButtonGroup>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    <Button>Four</Button>
  </ButtonGroup>
);
