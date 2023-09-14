import { ConfigProvider } from "antd";
import plus from '../../../public/Assets/Images/plus-circle.svg'
import Image from "next/image";
import { SlotAddStyle } from "./Slotadd.css";

interface SlotaddProps {
}

export const Slotadd = ({ ...props }: SlotaddProps) => {
  return (
    <ConfigProvider
      theme={{
        "token": {
          "borderRadius": 2,

        }
    }}
  >
    <SlotAddStyle>
    <div className="slot-main">
        <Image src={plus} alt="plus-circle" />
        <p>저작권등록</p>
    </div>
    <div className="slot-main slot-second">
        <Image src={plus} alt="plus-circle" />
        <p>저작권등록</p>
    </div>
    </SlotAddStyle>
    </ConfigProvider>
  );
};