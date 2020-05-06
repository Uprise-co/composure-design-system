import React from "react";
import { Card } from "../src/Card";
import { VerticalProgress } from "../src/Track/VerticalProgress";
import {
  withKnobs,
  select,
  text,
  boolean,
  color
} from "@storybook/addon-knobs";

const styles = {
  width: "100%",
  maxWidth: 900,
  margin: "40px auto"
};

const Center = ({ children }) => <div style={styles}>{children}</div>;

export default {
  title: "VerticalProgress",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes:
      "VerticalProgress component should be use to display progress in case it has few steps"
  }
};

export const defaultOne = () => (
  <Card
    shadow={true}
    backgroundColor={"#ffffff"}
    padding={"16px 24px"}
    width={"100%"}
    height={"400px"}
    border={"20px"}
  >
    <VerticalProgress
      items={[
        { title: "Step 1", active: false },
        { title: "Step 2", active: true },
        { title: "Step 3", active: false }
      ]}
    />
  </Card>
);
