import type { Meta, StoryObj } from "@storybook/react";

import { Topbar } from "./Topbar";

const meta = {
  title: "Topbar",
  component: Topbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Topbar",
  },
};
