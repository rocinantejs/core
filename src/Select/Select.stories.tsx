// Generated with util/create-component.js
import React from "react";
import Select, { SelectItem } from "./Select";

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

export const Component = () => <Select items={items} />;
