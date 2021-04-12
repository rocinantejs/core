// Generated with util/create-component.js
import React from "react";

import Typography from "../Typography/Typography";
import Navbar from "./Navbar";

export default {
  title: "Navbar",
};

export const Component = (): React.ReactNode => (
  <Navbar
    brand={<Typography variant="h1">Rocinante</Typography>}
    navLinks={
      <>
        <Typography variant="h3">Home</Typography>
        <Typography variant="h3">About</Typography>
      </>
    }
    navButtons={[
      <Typography variant="h3">1</Typography>,
      <Typography variant="h3">2</Typography>,
    ]}
  />
);
