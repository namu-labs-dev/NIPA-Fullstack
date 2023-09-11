import type { Preview } from "@storybook/react";
import React, { ReactElement } from "react";
import { ConfigProvider } from "antd";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => {
    return React.createElement(ConfigProvider, {
      theme: {
        "token": {
          "colorSuccess": "#f6ffed",
          "colorSuccessBg": "#389e0d"
        }
      },
      children: React.createElement(Story),
    });
  },
];
export default preview;
