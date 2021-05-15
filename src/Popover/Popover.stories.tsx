import { Meta } from "@storybook/react";
import React from "react";

import { Popover } from "./Popover";

export default {
  title: "Other/Popover",
  component: Popover,
} as Meta;

export const Component = (): React.ReactElement => (
  <Popover visible>
    <div className="rcn-border-dashed rcn-border-gray-500 rcn-border rcn-text-white rcn-w-28 rcn-p-4">
      Reference Element
    </div>
    I&apos;m a popover
  </Popover>
);
