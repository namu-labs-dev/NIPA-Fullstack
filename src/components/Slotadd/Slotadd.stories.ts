import type { Meta, StoryObj } from "@storybook/react";

import { Slotadd } from './Slotadd';

const meta = {
  title: "Slotadd",
  component: Slotadd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Slotadd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Slotadd",
  },
};
