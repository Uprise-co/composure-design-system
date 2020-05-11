import React from "react";
import { ProgressBar, EmojiDonut } from "../src/Charts";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { primary, backgrounds } from "../src/Colors";
import Emoji from "../styles/emoji-high-score-2x.png";

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
      data: [72, 28],
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

const props = {
  image: Emoji,
  width: 110 * 2,
  height: 110 * 2,
  emojix: 32.5 * 2,
  emojiy: 26.5 * 2,
  emojiWidth: 57.1 * 2,
  emojiHeight: 57.1 * 2,
  data: {
    datasets: [
      {
        data: [72, 28],
        backgroundColor: ["rgb(125, 96, 255)", "rgb(248,248,255)"],
        borderColor: ["rgb(125, 96, 255)", "rgb(248,248,255)"],
        hoverBackgroundColor: ["rgb(125, 96, 255)", "rgb(248,248,255)"],
        borderWidth: 0,
        weight: 1
      }
    ]
  },
  options: {
    cutoutPercentage: 72,
    maintainAspectRatio: false,
    tooltips: "{enabled: false}"
  },
  cutoutPercentage: 0
};

export const EmojiDonutChart = () => <EmojiDonut {...props} />;
