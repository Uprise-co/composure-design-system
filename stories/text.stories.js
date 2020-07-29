import React from "react";
import { Card } from "../src/Card";
import { P, Bold, Note, Tiny, Small, ExtraSmall, Medium } from "../src/Text";
import {
  withKnobs,
  select,
  text,
  boolean,
  color
} from "@storybook/addon-knobs";
import { extended, backgrounds } from "@uprise/colors";
const styles = {
  width: "100%",
  maxWidth: 600,
  margin: "40px auto"
};

const Center = ({ children }) => <div style={styles}>{children}</div>;

export default {
  title: "Text",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes:
      "Text component should be use to write any type of typography"
  }
};

export const TextP = () => (
  <Card
    shadow={true}
    backgroundColor={backgrounds.white}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <P
      fontSize={text("fontSize", "1.25rem")}
      lineHeight={text("lineHeight", "1")}
      color={color("color", extended.charcoal.one)}
      width={text("width", "100%")}
      textAlign={select("textAlign", ["left", "center", "right"], "center")}
      weight={text("weight", "bold")}
    >
      {text(
        "text",
        "Not your traditional Employee Assistance Program provider"
      )}
    </P>
  </Card>
);

export const TextBold = () => (
  <Card
    shadow={true}
    backgroundColor={backgrounds.white}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <Bold
      marginTop={text("marginTop", "1rem")}
      color={color("color", extended.charcoal.one)}
    >
      {text("text", "Our unique digital solution is loved by psychologists")}
    </Bold>
  </Card>
);

export const TextNote = () => (
  <Card
    shadow={true}
    backgroundColor={backgrounds.white}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <Note
      width={text("width", "100%")}
      textAlign={select("textAlign", ["left", "center", "right"], "center")}
      weight={text("weight", "bold")}
      color={color("color", extended.charcoal.one)}
    >
      {text(
        "text",
        "Not your traditional Employee Assistance Program provider"
      )}
    </Note>
  </Card>
);

export const TextTiny = () => (
  <Card
    shadow={true}
    backgroundColor={backgrounds.white}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <Tiny
      width={text("width", "100%")}
      textAlign={select("textAlign", ["left", "center", "right"], "center")}
      weight={text("weight", "bold")}
      color={color("color", extended.charcoal.one)}
    >
      {text(
        "text",
        "Not your traditional Employee Assistance Program provider"
      )}
    </Tiny>
  </Card>
);

export const TextSmall = () => (
  <Card
    shadow={true}
    backgroundColor={backgrounds.white}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <Small
      width={text("width", "100%")}
      textAlign={select("textAlign", ["left", "center", "right"], "center")}
      weight={text("weight", "bold")}
      color={color("color", extended.charcoal.one)}
    >
      {text(
        "text",
        "Not your traditional Employee Assistance Program provider"
      )}
    </Small>
  </Card>
);

export const TextExtraSmall = () => (
  <Card
    shadow={true}
    backgroundColor={backgrounds.white}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <ExtraSmall
      width={text("width", "100%")}
      textAlign={select("textAlign", ["left", "center", "right"], "center")}
      weight={text("weight", "bold")}
      color={color("color", extended.charcoal.one)}
    >
      {text(
        "text",
        "Not your traditional Employee Assistance Program provider"
      )}
    </ExtraSmall>
  </Card>
);

export const TextMedium = () => (
  <Card
    shadow={true}
    backgroundColor={backgrounds.white}
    padding={"16px 24px"}
    width={"100%"}
    border={"20px"}
  >
    <Medium
      width={text("width", "100%")}
      textAlign={select("textAlign", ["left", "center", "right"], "center")}
      weight={text("weight", "bold")}
      color={color("color", extended.charcoal.one)}
    >
      {text(
        "text",
        "Not your traditional Employee Assistance Program provider"
      )}
    </Medium>
  </Card>
);