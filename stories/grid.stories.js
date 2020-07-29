import React from "react";
import { ContainerFluid, Container, Row, Col } from "../src/Grid";
import {
  withKnobs,
  select,
  text,
  boolean,
  color
} from "@storybook/addon-knobs";

const styles = {
  width: "100%",
  maxWidth: 1200,
  margin: "40px auto"
};

const Center = ({ children }) => <div style={styles}>{children}</div>;

export default {
  title: "Grid",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes:
      "Grid component should be use to wrap element in a nice elevated container"
  }
};

export const withContainerFluidProps = () => (
  <ContainerFluid
    backgroundColor={color("backgroundColor", "rgb(245,236,255)")}
    height={text("height", "400px")}
  >
    <Container backgroundColor="#ffffff" height="100%">
      <h2>Be happy, Be well</h2>
    </Container>
  </ContainerFluid>
);

export const withContainerProps = () => (
  <ContainerFluid backgroundColor={"#ffffff"} height={"400px"}>
    <Container
      backgroundColor={color("backgroundColor", "rgb(245,236,255)")}
      height={text("height", "100%")}
    >
      <h2>Be happy, Be well</h2>
    </Container>
  </ContainerFluid>
);

export const withRowColumn = () => (
  <ContainerFluid backgroundColor={"#ffffff"} height={"400px"}>
    <Container
      backgroundColor={color("backgroundColor", "rgb(245,236,255)")}
      height={text("height", "100%")}
    >
      <Row className={text("className", "h-100 flex-row align-items-center")}>
        <Col className="col-sm-4">
          <h2>Col-4</h2>
        </Col>
        <Col className="col-sm-4">
          <h2>Col-4</h2>
        </Col>
        <Col className="col-sm-4">
          <h2>Col-4</h2>
        </Col>
      </Row>
    </Container>
  </ContainerFluid>
);
