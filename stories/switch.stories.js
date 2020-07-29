import React from "react";
import { Card } from "../src/Card";
import { Switch } from "../src/Switch";
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
  title: "Switch",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes: "Switch component should be use to choose between two options"
  }
};

export const defaultOne = () => (
  <Card
    shadow={true}
    backgroundColor={"#ffffff"}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <Switch
      defaultActive={"left"}
      leftAction={null}
      rightAction={null}
      leftLabel={text("leftLabel", "Dog")}
      rightLabel={text("rightLabel", "Cat")}
    />
  </Card>
);
