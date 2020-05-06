import React from "react";
import { ProgressBar, EmojiDonut } from "../src/Charts";
import {
  withKnobs,
  select,
  text,
  boolean,
  color,
  number
} from "@storybook/addon-knobs";
import { primary, backgrounds } from "../src/Colors";
const styles = {
  width: "100%",
  maxWidth: 600,
  margin: "40px auto"
};

const Center = ({ children }) => <div style={styles}>{children}</div>;

export default {
  title: "Charts",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes:
      "Charts component should be use to display progress in a graphical way"
  }
};

const options = {
  range: true,
  min: 0,
  max: 100,
  step: 5
};

const data = {
  datasets: [
    {
      data: [0, 100 - 0],
      backgroundColor: [primary.purple, backgrounds.fadedPurple],
      borderColor: [primary.purple, backgrounds.fadedPurple],
      hoverBackgroundColor: [primary.purple, backgrounds.fadedPurple],
      borderWidth: 0,
      weight: 1
    }
  ]
};

export const ProgressChart = () => (
  <ProgressBar
    height={text("height", "16px")}
    percentage={number("percentage", 50, options)}
    radius={text("radius", "10px")}
  />
);

export const EmojiDonutChart = () => (
  <EmojiDonut
    width={"200px"}
    height={"200px"}
    emojiWidth={"200px"}
    emojiHeight={"200px"}
    cutoutPercentage={50}
    emojix={"100px"}
    emojiy={"100px"}
    data={data}
    image={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFoZUZ0SgytDi4ekRE8FTlM9zggaZ3O_5QYUtcWcLHOi5qF7s&s`}
  />
);
