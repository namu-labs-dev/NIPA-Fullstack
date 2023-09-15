import type { Meta, StoryObj } from '@storybook/react';
import { Item } from './Item';
const meta: Meta = {
  title: 'Template/Home/Components/ReportDashboard/Components/Item',
  component: Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['report', 'pending', 'approved'],
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Item>;
export const Report: Story = {
  args: {
    type: 'report',
    count: 10,
    onClick: () => console.log('Report Clicked!'),
  },
};
export const Pending: Story = {
  args: {
    type: 'pending',
    count: 5,
    onClick: () => console.log('Pending Clicked!'),
  },
};
export const Approved: Story = {
  args: {
    type: 'approved',
    count: 7,
    onClick: () => console.log('Approved Clicked!'),
  },
};
