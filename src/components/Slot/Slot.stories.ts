import type { Meta, StoryObj } from '@storybook/react';
import { Slot } from './Slot';
import avatar from '@public/Assets/Images/Avatar.png';

const meta: Meta = {
  title: 'Local/Slot',
  component: Slot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    badgeType: {
      control: {
        type: 'select',
        options: ['none', 'approved', 'rejected'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slot>;

export const Default: Story = {
  args: {
    imageSrc: avatar,
    badgeType: 'none',
    onClickSlot: () => console.log('Slot Clicked!'),
  },
};

export const ApprovedBadge: Story = {
  args: {
    imageSrc: avatar,
    reportCount: 10,
    badgeType: 'approved',
    onClickSlot: () => console.log('Slot Clicked!'),
  },
};

export const RejectedBadge: Story = {
  args: {
    imageSrc: avatar,
    reportCount: 5,
    badgeType: 'rejected',
    onClickSlot: () => console.log('Slot Clicked!'),
  },
};

export const WithRequestCount: Story = {
  args: {
    imageSrc: avatar,
    requestCount: 7,
    badgeType: 'none',
    onClickSlot: () => console.log('Slot Clicked!'),
  },
};
