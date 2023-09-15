import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
const meta: Meta = {
  title: 'Local/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['approval', 'reject', 'pending', 'report', 'request'],
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Label>;
export const Approval: Story = {
  args: {
    type: 'approval',
  },
};
export const Reject: Story = {
  args: {
    type: 'reject',
  },
};
export const Pending: Story = {
  args: {
    type: 'pending',
  },
};
export const Report: Story = {
  args: {
    type: 'report',
    count: 10,
  },
};
export const Request: Story = {
  args: {
    type: 'request',
    count: 5,
  },
};
