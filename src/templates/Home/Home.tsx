import { Topbar } from '~/components/Topbar/Topbar';
import { AccountBook } from './AccountBook/AccountBook';
import { Button } from './Button/Button';
import { MyCopyrightDashboard } from './MyCopyrightDashboard/MyCopyrightDashboard';
import { ReportDashboard } from './ReportDashboard/ReportDashboard';

interface HomeProps {
  Topbar: React.ComponentProps<typeof Topbar>;
  AccountBook: React.ComponentProps<typeof AccountBook>;
  MyCopyrightDashboard: React.ComponentProps<typeof MyCopyrightDashboard>;
  ReportDashboard: React.ComponentProps<typeof ReportDashboard>;
  Buttons: React.ComponentProps<typeof Button>[];
}

export const Home = (props: HomeProps) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
