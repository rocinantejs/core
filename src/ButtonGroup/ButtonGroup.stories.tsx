import React from "react";

import { Button } from "../Button";
import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "ButtonGroup",
};

export const Component = (): React.ReactNode => (
  <ButtonGroup>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    <Button>Four</Button>
  </ButtonGroup>
);
