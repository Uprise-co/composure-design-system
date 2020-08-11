import React from "react";
import { Card } from "../src/Card";
import { List } from "../src/List";
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
  title: "List",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes:
      "List component should be use to wrap element in a nice elevated container"
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
    <List
      items={[
        { title: "Tony Stark" },
        { title: "Steve Rogers" },
        { title: "Bruce Banner" }
      ]}
    />
  </Card>
);
