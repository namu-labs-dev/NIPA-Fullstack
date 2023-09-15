import type { Meta, StoryObj } from '@storybook/react';
import { ReportDashboard } from './ReportDashboard';
const meta: Meta = {
  title: 'Template/Home/Components/ReportDashboard',
  component: ReportDashboard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ReportDashboard>;
export const Default: Story = {
  args: {
    reports: 10,
    pendings: 5,
    approvals: 7,
  },
};
