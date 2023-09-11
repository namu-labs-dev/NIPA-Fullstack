import { ConfigProvider, Tag } from "antd";

interface LabelProps {
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({ ...props }: LabelProps) => {
  return (
    <ConfigProvider
      theme={{
        "token": {
          "borderRadius": 2,
        }
    }}
  >
      <Tag color="success" bordered={false}>
        보상 승인
      </Tag>
    </ConfigProvider>
  );
};
