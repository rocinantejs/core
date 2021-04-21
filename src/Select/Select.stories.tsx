import React from "react";

import { SkeletonContext } from "..";
import { Select, SelectItem } from "./Select";

export default {
  title: "Select",
};

const items: SelectItem[] = [
  { name: "Item 1", value: "item1" },
  { name: "Item 2", value: "item2" },
  { name: "Item 3", value: "item3" },
  { name: "Item 4", value: "item4" },
  { name: "Item 5", value: "item5" },
];

export const Component = (): React.ReactNode => <Select items={items} />;

export const Error = (): React.ReactNode => <Select items={items} error />;

export const Skeleton = (): React.ReactNode => (
  <SkeletonContext.Provider value={{ showSkeleton: true }}>
    <Select items={items} />
  </SkeletonContext.Provider>
);
