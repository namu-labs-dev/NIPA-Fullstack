import type { Meta, StoryObj } from "@storybook/react";

import {SlotAdd} from "./Slotadd";

const meta = {
  title: "Local/SlotAdd",
  component: SlotAdd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // title: "여기",
  },
} satisfies Meta<typeof SlotAdd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "Primary",
    label: "저작권등록",
  },
};