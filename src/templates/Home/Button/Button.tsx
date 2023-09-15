import { BellOutlined } from '@ant-design/icons';

type AntdIconProps = typeof BellOutlined;

interface ButtonProps {
  leftImage?: AntdIconProps;
  title: string;
  rightImage: AntdIconProps;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
