import type { Meta, StoryObj } from "@storybook/react";

import { Slot } from './Slot';

const meta = {
  title: "Slot",
  component: Slot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Slot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Slot",
  },
};
