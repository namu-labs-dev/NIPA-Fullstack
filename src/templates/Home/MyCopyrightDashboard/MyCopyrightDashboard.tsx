interface MyCopyrightDashboardProps {
  numberOfMyCopyright: number;
  reported: number;
  requested: number;
  alertReport: boolean;
  alertRequest: boolean;
  onClickReported: () => void;
  onClickRequested: () => void;
}

export const MyCopyrightDashboard = (props: MyCopyrightDashboardProps) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
