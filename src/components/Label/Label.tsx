interface LabelProps {
  type: 'approval' | 'reject' | 'pending' | 'report' | 'request';
  count?: number;
}

export const Label = (props: LabelProps) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
