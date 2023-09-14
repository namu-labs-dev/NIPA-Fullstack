import { ConfigProvider } from "antd";
import { TopHeader } from "./Topbar.css";
import menu from '../../../public/Assets/Images/menu.svg'
import search from '../../../public/Assets/Images/search.svg'
import bell from '../../../public/Assets/Images/bell.svg'
import left from '../../../public/Assets/Images/left.svg'
import avtar from '../../../public/Assets/Images/Avatar.png'
import Image from "next/image";

interface TopbarProps {
}

export const Topbar = ({ ...props }: TopbarProps) => {
  return (
    <ConfigProvider
      theme={{
        "token": {
          "borderRadius": 2,
        }
    }}
  >
    <TopHeader>
      <div className="navigation">
        <Image src={menu} alt="menu" />
        <h1>Title goes here</h1>
      </div>
      <div className="navigation-second">
        <Image src={search} alt="search" />
        <h1>Title goes here</h1>
        <Image src={bell} alt="bell" />
      </div>
      <div className="navigation-second">
        <Image src={left} alt="search" />
        <h1>Title goes here</h1>
        <button>Option</button>
      </div>
      <div className="navigation-second">
        <Image src={left} alt="search" />
        <Image src={avtar} alt="avtar" />
        <button>Option</button>
      </div>
    </TopHeader>
    </ConfigProvider>
  );
};