import type { Meta, StoryObj } from '@storybook/react';
import { MyCopyrightDashboard } from './MyCopyrightDashboard';
const meta: Meta = {
  title: 'Template/Home/Components/MyCopyrightDashboard',
  component: MyCopyrightDashboard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof MyCopyrightDashboard>;
export const Default: Story = {
  args: {
    numberOfMyCopyright: 10,
    reported: 2,
    requested: 3,
    alertReport: false,
    alertRequest: false,
    onClickReported: () => console.log('Reported Clicked!'),
    onClickRequested: () => console.log('Requested Clicked!'),
  },
};
export const WithAlertReport: Story = {
  args: {
    numberOfMyCopyright: 10,
    reported: 2,
    requested: 3,
    alertReport: true,
    alertRequest: false,
    onClickReported: () => console.log('Reported Clicked!'),
    onClickRequested: () => console.log('Requested Clicked!'),
  },
};
export const WithAlertRequest: Story = {
  args: {
    numberOfMyCopyright: 10,
    reported: 2,
    requested: 3,
    alertReport: false,
    alertRequest: true,
    onClickReported: () => console.log('Reported Clicked!'),
    onClickRequested: () => console.log('Requested Clicked!'),
  },
};
export const WithBothAlerts: Story = {
  args: {
    numberOfMyCopyright: 10,
    reported: 2,
    requested: 3,
    alertReport: true,
    alertRequest: true,
    onClickReported: () => console.log('Reported Clicked!'),
    onClickRequested: () => console.log('Requested Clicked!'),
  },
};
