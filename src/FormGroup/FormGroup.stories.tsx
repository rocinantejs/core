import { Meta } from "@storybook/react";
import React from "react";

import { FormGroup, FormGroupProps } from "./FormGroup";

export default {
  title: "Input/FormGroup",
  component: FormGroup,
} as Meta;

const Template = ({ ...args }: FormGroupProps): React.ReactElement => (
  <FormGroup {...args}>
    <div className="rcn-border-dashed rcn-border-gray-500 rcn-border rcn-text-white rcn-p-2">
      Form Element
    </div>
  </FormGroup>
);

export const Default = Template.bind({});
Default.args = {
  label: "A Label",
  labelInfo: "info",
  helperText: "Some helpful subtext",
} as FormGroupProps;

export const Inline = Template.bind({});
Inline.args = {
  label: "A Label",
  labelInfo: "info",
  helperText: "Some helpful subtext",
  inline: true,
} as FormGroupProps;

const NestedTemplate = ({ ...args }: FormGroupProps): React.ReactElement => (
  <FormGroup {...args}>
    <FormGroup label="Input 1" inline>
      <div className="rcn-border-dashed rcn-border-gray-500 rcn-border rcn-text-white rcn-p-2">
        Form Element
      </div>
    </FormGroup>
    <FormGroup label="Input 2" inline>
      <div className="rcn-border-dashed rcn-border-gray-500 rcn-border rcn-text-white rcn-p-2">
        Form Element
      </div>
    </FormGroup>
  </FormGroup>
);

export const Nested = NestedTemplate.bind({});
Nested.args = {
  label: "A Label",
  labelInfo: "info",
  helperText: "Some helpful subtext",
} as FormGroupProps;
