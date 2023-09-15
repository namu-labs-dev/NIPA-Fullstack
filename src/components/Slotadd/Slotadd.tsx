import { ConfigProvider } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { useState } from 'react';

interface SlotAddProps {
  type: 'Primary';
  label: string;
}

export const SlotAdd = (props: SlotAddProps) => {
  const [isClicked, setIsClicked] = useState<boolean | false>();
  const onMouseDown = () => {
    setIsClicked(true);
  };
  const onMouseUp = () => {
    setIsClicked(false);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2,
        },
      }}
    >
      <button
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        className={`flex items-center justify-center p-[58px_48px_58px_48px] ${
          isClicked ? 'bg-Primary-1' : 'bg-Neutral-2'
        }`}
      >
        <div className="flex flex-col items-center">
          <PlusCircleFilled
            className="text-Primary-7"
            style={{ fontSize: '36px' }}
          />
          <span className="body1-regular mt-1 text-Primary-7">
            {props.label}
          </span>
        </div>
      </button>
    </ConfigProvider>
  );
};
