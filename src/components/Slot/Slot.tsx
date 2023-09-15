import { StaticImageData } from 'next/image';

interface Props {
  imageSrc: StaticImageData;
  reportCount?: number;
  requestCount?: number;
  badgeType: 'none' | 'approved' | 'rejected';
  onClickSlot: () => void;
}

export const Slot = (props: Props) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
