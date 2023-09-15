import { ConfigProvider } from "antd";
import {
  PlusCircleFilled,
} from "@ant-design/icons";

interface SlotAddProps {
  type: "Primary" | "Background";
  label: string;
}

export const SlotAdd = (props: SlotAddProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2,
        },
      }}
    >
      <div className={`flex justify-center items-center p-[58px_48px_58px_48px] ${props.type === "Primary" ? "bg-[#FAFAFA]" : props.type === "Background" ? "bg-[#F6FFED]" : ""}`}>
        <div className="flex flex-col items-center">
          <PlusCircleFilled style={{ color: "#52C41A", fontSize: "36px" }} />
          <h1 className="text-[#389E0D] mt-1">{props.label}</h1>
        </div>
      </div>
    </ConfigProvider>
  );
};