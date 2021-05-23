import { Meta } from "@storybook/react";
import React from "react";

import { Button } from "../Button";
import { Popover, PopoverProps } from "./Popover";

export default {
  title: "Other/Popover",
  component: Popover,
} as Meta;

const ControlledStory = ({ ...args }: PopoverProps): React.ReactElement => (
  <Popover {...args}>
    <div className="rcn-border-dashed rcn-border-gray-500 rcn-border rcn-text-white rcn-w-28 rcn-p-4">
      Reference Element
    </div>
    I&apos;m a popover
  </Popover>
);

export const Controlled = ControlledStory.bind({});
Controlled.args = {
  placement: "auto",
  visible: true,
} as PopoverProps;

const UncontrolledStory = ({ ...args }: PopoverProps): React.ReactElement => (
  <Popover {...args}>
    <Button>Click me!</Button>
    I&apos;m a popover
  </Popover>
);

export const Uncontrolled = UncontrolledStory.bind({});
Uncontrolled.args = {
  placement: "auto",
  overlay: true,
} as PopoverProps;
