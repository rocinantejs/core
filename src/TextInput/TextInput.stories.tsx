import React from "react";

import { TextInput } from "./TextInput";

export default {
  title: "TextInput",
};

export const Component = (): React.ReactElement => (
  <TextInput placeholder="bar" />
);

export const Error = (): React.ReactElement => (
  <TextInput placeholder="bar" error />
);
