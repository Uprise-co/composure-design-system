import React from "react";
import { Button } from "../src/Button/Button";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";

const styles = {
  width: '100%',
  maxWidth: 600,
  margin: "40px auto"
};

const Center = ({ children }) => <div style={styles}>{children}</div>;

export default {
  title: "Button",
  decorators: [(storyFn) => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes:
      "Button component should be use for any type of call to action",
  },
};


export const withVariant = () => (
  <Button
  title={text("title", "Book a call")}
  variant={select(
    "variant",
    ["primary", "secondary", "tertiary", "text"],
    "primary"
    )}
  />
  );

  export const withSize = () => (
    <Button
    title={text("title", "Book a call")}
    variant="primary"
    size={select(
      "size",
      ["tiny", "extra-small", "small", "medium", "large"],
      "small"
      )}
      />
      );

      export const withLoading = () => (
        <Button
    title={text("title", "Book a call")}
    variant="primary"
    size={"large"}
    isLoading={boolean("isLoading", true)}
    />
);

export const withAllProps = () => (
  <Button
    title={text("title", "Book a call")}
    variant={select(
      "variant",
      ["primary", "secondary", "tertiary", "text"],
      "primary"
    )}
    size={select(
      "size",
      ["tiny", "extra-small", "small", "medium", "large"],
      "small"
    )}
    borderRadius={text("borderRadius", "20px")}
    paddingRight={text("paddingRight", "20px")}
    paddingLeft={text("paddingLeft", "20px")}
    isLoading={boolean("isLoading", false)}
    fullWidth={boolean("fullWidth", false)}
    uppercase={boolean("uppercase", false)}
    transparent={boolean("transparent", false)}
  />
);