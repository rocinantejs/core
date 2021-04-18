import React from "react";

import { Typography } from "../Typography/Typography";
import { Card } from "./Card";

export default {
  title: "Card",
};

export const Component = (): React.ReactNode => (
  <Card>
    <Typography variant="h3">This is a card</Typography>
    <Typography>It can have content</Typography>
  </Card>
);
