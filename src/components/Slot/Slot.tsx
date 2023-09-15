import { ConfigProvider, Image } from "antd";
import { SlotStyle } from "./Slot.css";

interface SlotaddProps {}

export const Slot = ({ ...props }: SlotaddProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2,
        },
      }}
    >
      <div>
        <Image className="" style={{ width: "186px", height: "186px" }}></Image>
        {/*
        Need make Local/Badge, Local/Label component first
        */}
      </div>
    </ConfigProvider>
  );
};
