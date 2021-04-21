import React from "react";

import { Progress } from "./Progress";

export default {
  title: "Progress",
};

export const Component = (): React.ReactElement => (
  <Progress progress={30} style={{ width: "300px" }} />
);

export const NoProgress = (): React.ReactElement => (
  <Progress style={{ width: "300px" }} />
);
