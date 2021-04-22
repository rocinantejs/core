import { Meta } from "@storybook/react";
import React from "react";

import { Card } from "./Card";
import { Combobox } from "./Combobox";
import { NumberInput } from "./NumberInput";
import { Panel } from "./Panel";
import { Select, SelectItem } from "./Select";
import { TextInput } from "./TextInput";
import { Typography } from "./Typography";

export default {
  title: "Rocinante",
} as Meta;

const items: SelectItem[] = [
  { name: "Item 1", value: "item1" },
  { name: "Item 2", value: "item2" },
  { name: "Item 3", value: "item3" },
  { name: "Item 4", value: "item4" },
  { name: "Item 5", value: "item5" },
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Playground = () => (
  <div className="bg-dark-0 p-10 flex">
    <Panel className="flex-1 mr-10">
      <Typography className="font-title mb-4" variant="h1">
        Typography
      </Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="p">Paragraph</Typography>
      <Typography variant="label">Label</Typography>
      <Typography variant="small">small</Typography>
    </Panel>
    <Card className="flex-1">
      <Typography className="font-title mb-4" variant="h1">
        Inputs
      </Typography>
      <div className="flex space-x-8">
        <div className="flex-1 flex flex-col space-y-4">
          <Typography className="font-title" variant="h2">
            Regular
          </Typography>
          <TextInput placeholder="Text Input" />
          <NumberInput />
          <Select items={items} placeHolder="Select" />
          <Combobox items={items} placeHolder="Combobox" />
        </div>
        <div className="flex-1 flex flex-col space-y-4">
          <Typography className="font-title" variant="h2">
            Error
          </Typography>
          <TextInput error placeholder="Text Input" />
          <NumberInput error />
          <Select error items={items} placeHolder="Select" />
          <Combobox error items={items} placeHolder="Combobox" />
        </div>
      </div>
    </Card>
  </div>
);
