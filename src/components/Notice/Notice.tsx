interface NoticeProps {
  type: 'pending' | 'approved';
  text: string;
}

export const Notice = (props: NoticeProps) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
