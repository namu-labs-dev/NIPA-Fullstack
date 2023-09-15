import type { Meta, StoryObj } from '@storybook/react';
import { Notice } from './Notice';
const meta: Meta = {
  title: 'Local/Notice',
  component: Notice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['pending', 'approved'],
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Notice>;
export const Pending: Story = {
  args: {
    type: 'pending',
    text: 'This is a pending notice',
  },
};
export const Approved: Story = {
  args: {
    type: 'approved',
    text: 'This is an approved notice',
  },
};
