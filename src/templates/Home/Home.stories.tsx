import type { Meta, StoryObj } from '@storybook/react';
import { Home } from './Home';
import {
  ArrowRightOutlined,
  BellOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const meta: Meta = {
  title: 'Template/Home',
  component: Home,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Home>;
export const Default: Story = {
  args: {
    Topbar: {
      type: 'Search',
      onClickLeft: () => console.log('Topbar left clicked'),
      title: '저작권 모니터링 서비스',
      onClickRight: () => console.log('Topbar right clicked'),
    },
    AccountBook: {
      balance: -199000,
      transactions: [
        {
          type: 'regist',
          email: 'ludykim@gmail.com',
          hash: '0x1234',
          balance: -349,
          created_at: new Date(),
        },
        {
          type: 'request',
          email: 'ludykim@gmail.com',
          hash: '0x1234',
          balance: -349,
          created_at: new Date(),
        },
        {
          type: 'approveReport',
          email: 'ludykim@gmail.com',
          hash: '0x1234',
          balance: -349,
          created_at: new Date(),
        },
      ],
      onClick: () => console.log('AccountBook Clicked!'),
      onClickExplorer: () => console.log('Explorer Clicked!'),
    },
    MyCopyrightDashboard: {
      numberOfMyCopyright: 99,
      reported: 2,
      requested: 3,
      alertReport: true,
      alertRequest: false,
      onClickReported: () => console.log('Reported Clicked!'),
      onClickRequested: () => console.log('Requested Clicked!'),
    },
    ReportDashboard: {
      reports: 3,
      pendings: 2,
      approvals: 2,
    },
    Buttons: [
      {
        title: '저작권 등록하기',
        rightImage: PlusOutlined,
        onClick: () => console.log('Button 1 Clicked!'),
      },
      {
        leftImage: BellOutlined,
        title: '저작권 침해 신고하기',
        rightImage: ArrowRightOutlined,
        onClick: () => console.log('Button 2 Clicked!'),
      },
      {
        leftImage: SearchOutlined,
        title: '모든 저작권 둘러보기',
        rightImage: ArrowRightOutlined,
        onClick: () => console.log('Button 3 Clicked!'),
      },
    ],
  },
};
