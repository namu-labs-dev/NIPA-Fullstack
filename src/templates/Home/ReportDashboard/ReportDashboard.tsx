interface ReportDashboardProps {
  reports: number;
  pendings: number;
  approvals: number;
}

export const ReportDashboard = (props: ReportDashboardProps) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
