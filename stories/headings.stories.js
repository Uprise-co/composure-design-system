import React from "react";
import { Card } from "../src/Card";
import { H1, H2, H3, H4, H5, H6 } from "../src/Headings";
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
  title: "Headings",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes: "Headings component should be use to display headings"
  }
};

export const HeadingH1 = () => (
  <Card
    shadow={true}
    backgroundColor={"#ffffff"}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <H1
      color={color("color", "#2f2d40")}
      width={text("width", "100%")}
      textAlign={select("textAlign", ["left", "center", "right"], "center")}
      weight={text("weight", "bold")}
    >
      Be happy, Be well
    </H1>
  </Card>
);

export const HeadingH3 = () => (
  <Card
    shadow={true}
    backgroundColor={"#ffffff"}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <H3
      color={color("color", "#2f2d40")}
      width={text("width", "100%")}
      textAlign={select("textAlign", ["left", "center", "right"], "center")}
      weight={text("weight", "bold")}
    >
      Be happy, Be well
    </H3>
  </Card>
);

export const HeadingH4 = () => (
  <Card
    shadow={true}
    backgroundColor={"#ffffff"}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <H4
      color={color("color", "#2f2d40")}
      width={text("width", "100%")}
      textAlign={select("textAlign", ["left", "center", "right"], "center")}
      weight={text("weight", "bold")}
    >
      Be happy, Be well
    </H4>
  </Card>
);

export const HeadingH5 = () => (
  <Card
    shadow={true}
    backgroundColor={"#ffffff"}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <H5
      color={color("color", "#2f2d40")}
      width={text("width", "100%")}
      textAlign={select("textAlign", ["left", "center", "right"], "center")}
      weight={text("weight", "bold")}
    >
      Be happy, Be well
    </H5>
  </Card>
);

export const HeadingH6 = () => (
  <Card
    shadow={true}
    backgroundColor={"#ffffff"}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <H6
      color={color("color", "#2f2d40")}
      width={text("width", "100%")}
      textAlign={select("textAlign", ["left", "center", "right"], "center")}
      weight={text("weight", "bold")}
    >
      Be happy, Be well
    </H6>
  </Card>
);
