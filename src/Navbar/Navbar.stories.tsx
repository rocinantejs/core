import { Meta } from "@storybook/react";
import React from "react";

import { Button } from "../Button";
import { Typography } from "../Typography/Typography";
import { Navbar } from "./Navbar";

export default {
  title: "Layout/Navbar",
  component: Navbar,
} as Meta;

export const Component = (): React.ReactNode => (
  <Navbar
    brand={<Typography variant="h1">Rocinante</Typography>}
    navLinks={
      <>
        <Button variant="flat">Home</Button>
        <Button variant="flat">About</Button>
      </>
    }
    navButtons={[
      <Typography variant="h3">1</Typography>,
      <Typography variant="h3">2</Typography>,
    ]}
  />
);
