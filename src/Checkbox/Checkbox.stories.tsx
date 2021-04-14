// Generated with util/create-component.js
import React from "react";

import { SkeletonContext } from "../Skeleton";
import Checkbox from "./Checkbox";

export default {
  title: "Checkbox",
};

export const Component = (): React.ReactNode => <Checkbox />;

export const Skeleton = (): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Checkbox />
  </SkeletonContext.Provider>
);
