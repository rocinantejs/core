import React from "react";

import { SkeletonContext } from "../Skeleton";
import { Checkbox } from "./Checkbox";

export default {
  title: "Checkbox",
};

export const Component = (): React.ReactNode => <Checkbox label="A Checkbox" />;

export const Skeleton = (): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Checkbox label="A Checkbox" />
  </SkeletonContext.Provider>
);
