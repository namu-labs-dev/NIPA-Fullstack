import type { Meta, StoryObj } from '@storybook/react';
import { Topbar } from './Topbar';
import avatar from '@public/Assets/Images/Avatar.png';

const meta: Meta = {
  title: 'Local/Topbar',
  component: Topbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['Primary', 'Search', 'Back'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Topbar>;

export const Primary: Story = {
  args: {
    type: 'Primary',
    title: 'Primary Topbar',
    onClickLeft: () => console.log('Left button clicked!'),
    onClickRight: () => console.log('Right button clicked!'),
  },
};

export const Search: Story = {
  args: {
    type: 'Search',
    title: 'Search Title',
    onClickLeft: () => console.log('Left button clicked!'),
    onClickRight: () => console.log('Right button clicked!'),
  },
};

export const Back: Story = {
  args: {
    type: 'Back',
    title: 'Back Title',
    onClickLeft: () => console.log('Left button clicked!'),
    onClickRight: () => console.log('Right button clicked!'),
  },
};

export const Profile: Story = {
  args: {
    type: 'Primary',
    title: avatar,
    onClickLeft: () => console.log('Left button clicked!'),
    onClickRight: () => console.log('Right button clicked!'),
  },
};
