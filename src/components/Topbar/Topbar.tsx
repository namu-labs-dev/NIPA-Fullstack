import { ConfigProvider } from "antd";
import { TopHeader } from "./Topbar.css";
import {
  MenuOutlined,
  SearchOutlined,
  BellOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import Image, { StaticImageData } from "next/image";

interface TopbarProps {
  type: "Primary" | "Search" | "Back" | "BackProfile";
  title: string | StaticImageData;
  onLeftClick: () => void;
  onRightClick: () => void;
}

export const Topbar = (props: TopbarProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2,
        },
      }}
    >
      <div className="w-mob flex h-14 items-center justify-between px-4 py-4">
        {/* Left Button */}
        {props.type === "Primary" && (
          <MenuOutlined
            style={{ fontSize: "24px" }}
            onClick={props.onLeftClick}
          />
        )}
        {props.type === "Search" && (
          <SearchOutlined
            style={{ fontSize: "24px" }}
            onClick={props.onLeftClick}
          />
        )}
        {(props.type === "Back" || props.type === "BackProfile") && (
          <LeftOutlined
            style={{ fontSize: "24px" }}
            onClick={props.onLeftClick}
          />
        )}
        {/* Center Title*/}
        {typeof props.title === "string" ? (
          <span className="text-Neutral-13 h4-bold">{props.title}</span>
        ) : (
          <Image alt="profile image" src={props.title as StaticImageData} />
        )}
        {/* Right Button */}
        {props.type === "Primary" && <span className="w-6" />}
        {props.type === "Search" && (
          <BellOutlined
            className="w-6"
            style={{ fontSize: "24px" }}
            onClick={props.onLeftClick}
          />
        )}
        {(props.type === "Back" || props.type === "BackProfile") && (
          <span
            className=" text-DayBreakBlue-6 body1-medium w-6 "
            style={{ direction: "rtl" }}
            onClick={props.onLeftClick}
          >
            Option
          </span>
        )}
      </div>
    </ConfigProvider>
  );
};
