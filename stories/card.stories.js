import React from "react";
import { Card } from "../src/Card";
import {
  withKnobs,
  select,
  text,
  boolean,
  color
} from "@storybook/addon-knobs";

const styles = {
  width: "100%",
  maxWidth: 600,
  margin: "40px auto"
};

const Center = ({ children }) => <div style={styles}>{children}</div>;

export default {
  title: "Card",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes:
      "Card component should be use to wrap element in a nice elevated container"
  }
};

export const withAllProps = () => (
  <Card
    shadow={boolean("shadow", true)}
    backgroundColor={color("backgroundColor", "#ffffff")}
    padding={text("padding", "16px 24px")}
    width={text("width", "100%")}
    border={text("border", "20px")}
  >
    <h2>Be happy, Be well</h2>
  </Card>
);
