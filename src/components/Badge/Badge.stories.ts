import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
const meta: Meta = {
  title: 'Local/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['approved', 'rejected'],
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;
export const ApprovedBadge: Story = {
  args: {
    type: 'approved',
  },
};
export const RejectedBadge: Story = {
  args: {
    type: 'rejected',
  },
};
