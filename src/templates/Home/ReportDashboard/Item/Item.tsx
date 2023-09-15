interface ItemProps {
  type: 'report' | 'pending' | 'approved';
  count: number;
  onClick: () => void;
}

export const Item = (props: ItemProps) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
