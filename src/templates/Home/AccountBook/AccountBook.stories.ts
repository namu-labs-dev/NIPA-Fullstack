import type { Meta, StoryObj } from '@storybook/react';
import { AccountBook, Transaction } from './AccountBook';

const meta: Meta = {
  title: 'Template/Home/components/AccountBook',
  component: AccountBook,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    transactions: {
      control: {
        type: 'object',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccountBook>;

const transactions: Transaction[] = [
  {
    type: 'regist',
    email: 'test@test.com',
    hash: '0x1234',
    balance: 100,
    created_at: new Date(),
  },
  {
    type: 'request',
    email: 'test2@test.com',
    hash: '0x5678',
    balance: 200,
    created_at: new Date(),
  },
];

export const Default: Story = {
  args: {
    balance: 1000,
    transactions: transactions,
    onClick: () => console.log('AccountBook Clicked!'),
    onClickExplorer: () => console.log('Explorer Clicked!'),
  },
};
