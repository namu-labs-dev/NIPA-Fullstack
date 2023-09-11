import React from "react";
// import "./button.css";
import { Tag } from "antd";
import { Container } from "./Label.css";
import theme from "~/theme.mjs";

interface LabelProps {
  // /**
  //  * Is this the principal call to action on the page?
  //  */
  // primary?: boolean;
  // /**
  //  * What background color to use
  //  */
  // backgroundColor?: string;
  // /**
  //  * How large should the button be?
  //  */
  // size?: "small" | "medium" | "large";
  // /**
  //  * Button contents
  //  */
  // label: string;
  // /**
  //  * Optional click handler
  //  */
  // onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({ ...props }: LabelProps) => {
  return (
    <Container>
      <Tag color="primary" bordered={false}>
        보상 승인
      </Tag>
    </Container>
  );
};
