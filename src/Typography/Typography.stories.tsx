import { Meta } from "@storybook/react";
import React from "react";

import { Typography } from "./Typography";

export default {
  title: "Text/Typography",
  component: Typography,
} as Meta;

export const Header1 = (): React.ReactNode => (
  <Typography variant="h1">H1 Header</Typography>
);
export const Header2 = (): React.ReactNode => (
  <Typography variant="h2">H2 Header</Typography>
);
export const Header3 = (): React.ReactNode => (
  <Typography variant="h3">H3 Header</Typography>
);
export const Header4 = (): React.ReactNode => (
  <Typography variant="h4">H4 Header</Typography>
);
export const Header5 = (): React.ReactNode => (
  <Typography variant="h5">H5 Header</Typography>
);
export const Paragraph = (): React.ReactNode => (
  <Typography>Paragraph</Typography>
);
export const Small = (): React.ReactNode => (
  <Typography variant="small">Paragraph</Typography>
);
