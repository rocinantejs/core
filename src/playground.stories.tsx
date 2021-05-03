import { Meta } from "@storybook/react";
import React from "react";

import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";
import { Card } from "./Card";
import { Checkbox } from "./Checkbox";
import { Combobox } from "./Combobox";
import { NumberInput } from "./NumberInput";
import { Panel } from "./Panel";
import { Progress } from "./Progress";
import { Radio } from "./Radio";
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
  <div className="rcn-bg-dark-0 rcn-p-10 rcn-flex rcn-flex-wrap rcn-max-w-5xl">
    <Panel className="rcn-flex-1 rcn-mr-10 rcn-mb-10 rcn-space-y-2">
      <Typography className="font-title rcn-mb-4" variant="h1">
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
      <Typography variant="extraSmall">extra small</Typography>
    </Panel>
    <Card className="rcn-flex-1 rcn-mb-10">
      <Typography className="font-title rcn-mb-4" variant="h1">
        Inputs
      </Typography>
      <div className="rcn-flex rcn-space-x-8">
        <div className="rcn-flex-1 rcn-flex rcn-flex-col rcn-space-y-4">
          <Typography className="font-title" variant="h2">
            Regular
          </Typography>
          <TextInput placeholder="Text Input" />
          <NumberInput />
          <Select items={items} placeHolder="Select" />
          <Combobox items={items} placeHolder="Combobox" />
        </div>
        <div className="rcn-flex-1 rcn-flex rcn-flex-col rcn-space-y-4">
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
    <Panel className="rcn-flex-1 rcn-mr-10 rcn-space-y-2">
      <Typography className="font-title rcn-mb-4" variant="h1">
        Buttons
      </Typography>
      <div className="rcn-flex rcn-space-x-8 rcn-mb-8">
        <div className="rcn-flex-1 rcn-flex rcn-flex-col rcn-space-y-4">
          <Button>Primary</Button>
          <Button disabled>Primary Disabled</Button>
          <Button loading>Primary Loading</Button>
        </div>
        <div className="rcn-flex-1 rcn-flex rcn-flex-col rcn-space-y-4">
          <Button variant="danger">Danger</Button>
          <Button variant="danger" disabled>
            Danger Disabled
          </Button>
          <Button variant="danger" loading>
            Danger Loading
          </Button>
        </div>
      </div>
      <div className="rcn-flex rcn-space-x-8 rcn-mb-8">
        <div className="rcn-flex-1 rcn-flex rcn-flex-col rcn-space-y-4">
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled>
            Secondary Disabled
          </Button>
          <Button variant="secondary" loading>
            Secondary Loading
          </Button>
        </div>
        <div className="rcn-flex-1 rcn-flex rcn-flex-col rcn-space-y-4">
          <Button variant="flat">Flat</Button>
          <Button variant="flat" disabled>
            Flat Disabled
          </Button>
          <Button variant="flat" loading>
            Flat Loading
          </Button>
        </div>
      </div>
      <div className="rcn-flex rcn-space-x-8 rcn-mb-8">
        <div className="rcn-flex-1 rcn-flex rcn-flex-col rcn-space-y-4">
          <ButtonGroup>
            <Button>One</Button>
            <Button>two</Button>
            <Button>three</Button>
            <Button>four</Button>
          </ButtonGroup>
        </div>
      </div>
    </Panel>
    <Card className="rcn-flex-1 rcn-mb-10">
      <Typography className="font-title rcn-mb-4" variant="h1">
        Special
      </Typography>
      <div className="rcn-flex rcn-space-x-8 rcn-mb-8">
        <div className="rcn-flex-1 rcn-flex rcn-flex-col rcn-space-y-4">
          <Typography className="font-title" variant="h2">
            Radio
          </Typography>
          <Radio name="example" label="Option 1" />
          <Radio name="example" label="Option 2" />
          <Radio name="example" label="Option 3" />
        </div>
        <div className="rcn-flex-1 rcn-flex rcn-flex-col rcn-space-y-4">
          <Typography className="font-title" variant="h2">
            Checkbox
          </Typography>
          <Checkbox label="Option 1" />
          <Checkbox label="Option 2" />
          <Checkbox label="Option 3" />
        </div>
      </div>
      <div className="rcn-flex rcn-space-x-8">
        <div className="rcn-flex-1 rcn-flex rcn-flex-col rcn-space-y-4">
          <Typography className="font-title" variant="h2">
            Progress
          </Typography>
          <Progress progress={100} />
          <Progress progress={70} />
          <Progress progress={30} />
        </div>
        <div className="rcn-flex-1 rcn-flex rcn-flex-col rcn-space-y-4">
          <Typography className="font-title" variant="h2">
            Checkbox
          </Typography>
          <Checkbox label="Option 1" />
          <Checkbox label="Option 2" />
          <Checkbox label="Option 3" />
        </div>
      </div>
    </Card>
  </div>
);
