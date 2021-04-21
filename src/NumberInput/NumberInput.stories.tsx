import React from "react";

import { NumberInput } from "./NumberInput";

export default {
  title: "NumberInput",
};

export const Component = (): React.ReactElement => <NumberInput />;

export const Error = (): React.ReactElement => <NumberInput error />;
