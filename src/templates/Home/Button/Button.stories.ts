import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { BellOutlined } from '@ant-design/icons';
const meta: Meta = {
  title: 'Template/Home/components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {
  args: {
    title: 'Button',
    onClick: () => console.log('Button Clicked!'),
  },
};
export const WithLeftImage: Story = {
  args: {
    leftImage: BellOutlined,
    title: 'Button',
    onClick: () => console.log('Button Clicked!'),
  },
};
