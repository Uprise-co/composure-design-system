import React from "react";
import { Accordian } from "../src/Accordian";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";

const styles = {
  width: "100%",
  maxWidth: 600,
  margin: "40px auto"
};

const Center = ({ children }) => <div style={styles}>{children}</div>;

export default {
  title: "Accordian",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes: "Accordian component should be use for showing information in a condense way"
  }
};

const content = [
  {
    header: "What's the best thing about Switzerland?",
    content: "I don't know, but the flag is a big plus"
  },
  {
    header: "You can see me in water, but I never get wet. What am I?",
    content: "A reflection"
  },
  {
    header: "Why did Tiger go to the bathroom?",
    content: "He wanted to find his friend, Pooh!"
  },
  {
    header: "If two snakes marry, what will their towels say?",
    content: "Hiss and Hers."
  }
];

export const withContent = () => <Accordian content={content} />;
