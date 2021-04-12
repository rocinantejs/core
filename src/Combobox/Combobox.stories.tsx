// Generated with util/create-component.js
import React from "react";

import Combobox, { ComboboxItem } from "./Combobox";

export default {
  title: "Combobox",
};

const items: ComboboxItem[] = [
  { name: "Item 1", value: "item1" },
  { name: "Item 2", value: "item2" },
  { name: "Item 3", value: "item3" },
  { name: "Item 4", value: "item4" },
  { name: "Item 5", value: "item5" },
];

export const Component = (): React.ReactNode => <Combobox items={items} />;
