import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';
const meta: Meta = {
  title: 'Local/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['squre', 'rounded'],
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Search>;
export const Squre: Story = {
  args: {
    type: 'squre',
    text: 'Search Text',
    placeholder: 'Search...',
    onChangeText: () => console.log('Text Changed!'),
  },
};
export const Rounded: Story = {
  args: {
    type: 'rounded',
    text: 'Search Text',
    placeholder: 'Search...',
    onChangeText: () => console.log('Text Changed!'),
  },
};
