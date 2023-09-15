interface BadgeProps {
  type: 'approved' | 'rejected';
}

export const Badge = (props: BadgeProps) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
