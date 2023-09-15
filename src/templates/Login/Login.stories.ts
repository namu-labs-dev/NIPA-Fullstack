import type { Meta, StoryObj } from '@storybook/react';
import { Login } from './Login';
const meta: Meta = {
  title: 'Template/Login',
  component: Login,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Login>;
export const Default: Story = {
  args: {
    onClickApple: () => console.log('Apple Clicked!'),
    onClickGoogle: () => console.log('Google Clicked!'),
  },
};
