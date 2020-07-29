import React from "react";
import { ProgressiveImage, RetinaProgressiveImage } from "../src/Image";
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
  title: "Image",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes:
      "Image component should be use to wrap element in a nice elevated container"
  }
};

export const withProgressiveImage = () => (
  <Card
    shadow={true}
    backgroundColor={"#ffffff"}
    padding={"16px 24px"}
    width={"448px"}
    height={"600px"}
    border={"20px"}
  >
    <ProgressiveImage
      overlaySrc={text(
        "overlaySrc",
        `https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=16&q=80`
      )}
      src={text(
        "src",
        `https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80`
      )}
      borderRadius={text("borderRadius", "10px")}
      width="100%"
    />
  </Card>
);

export const withRetinaProgressiveImage = () => (
  <Card
    shadow={true}
    backgroundColor={"#ffffff"}
    padding={"16px 24px"}
    width={"448px"}
    height={"600px"}
    border={"20px"}
  >
    <RetinaProgressiveImage
      overlaySrc={text(
        "overlaySrc",
        `https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=16&q=80`
      )}
      // TODO: add knobs
      srcSets={{
        small: `https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80`,
        medium: `https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80`,
        large: `https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80`
      }}
      borderRadius={text("borderRadius", "10px")}
      width="100%"
    />
  </Card>
);
