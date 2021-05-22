import { Meta } from "@storybook/react";
import React from "react";

import { Button } from "../Button";
import { Popover } from "./Popover";

export default {
  title: "Other/Popover",
  component: Popover,
} as Meta;

export const Controlled = (): React.ReactElement => (
  <Popover visible>
    <div className="rcn-border-dashed rcn-border-gray-500 rcn-border rcn-text-white rcn-w-28 rcn-p-4">
      Reference Element
    </div>
    I&apos;m a popover
  </Popover>
);

export const Uncontrolled = (): React.ReactElement => (
  <Popover>
    <Button>Click me!</Button>
    I&apos;m a popover
  </Popover>
);

export const UncontrolledOverlay = (): React.ReactElement => (
  <Popover overlay>
    <Button>Click me!</Button>
    I&apos;m a popover
  </Popover>
);
