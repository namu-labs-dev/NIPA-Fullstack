import { ConfigProvider } from "antd";
import image from '../../../public/Assets/Images/Image.png'
import Image from "next/image";
import { SlotStyle } from "./Slot.css";

interface SlotaddProps {
}

export const Slot = ({ ...props }: SlotaddProps) => {
  return (
    <ConfigProvider
      theme={{
        "token": {
          "borderRadius": 2,

        }
    }}
  >
    <SlotStyle>
    <div className="slot-main">
        <Image src={image} alt="image" />
    </div>
    </SlotStyle>
    </ConfigProvider>
  );
};