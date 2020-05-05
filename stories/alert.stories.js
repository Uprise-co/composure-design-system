import React from "react";
import { Alert } from "../src/Alert";
import { withKnobs, select, text } from "@storybook/addon-knobs";

const styles = {
  width: '100%',
  maxWidth: 600,
  margin: "40px auto"
};

const Center = ({ children }) => <div style={styles}>{children}</div>;

export default {
  title: "Alert",
  decorators: [(storyFn) => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes:
      "Alert component should be use to provide user some feedback about an action.",
  },
};

export const withType = () => (
  <Alert
    type={select("type", ["primary", "error", "warning", "success"], "success")}
    textAlign="center"
  >
    {text("message", "This will be the alert message")}
  </Alert>
);

export const withTextAlign = () => (
  <Alert
    type="primary"
    textAlign={select("textAlign", ["left", "center", "right"], "left")}
  >
    {text("message", "This will be the alert message")}
  </Alert>
);
