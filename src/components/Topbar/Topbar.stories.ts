import type { Meta, StoryObj } from "@storybook/react";

import { Topbar } from "./Topbar";
import avatar from "@public/Assets/Images/Avatar.png";

const meta = {
  title: "Topbar",
  component: Topbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // title: "여기",
  },
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "Primary",
    title: "Title goes here",
  },
};

export const Search: Story = {
  args: {
    type: "Search",
    title: "Title goes here",
  },
};

export const Back: Story = {
  args: {
    type: "Back",
    title: "Title goes here",
  },
};

export const BackProfile: Story = {
  args: {
    type: "Back",
    title: avatar,
  },
};
