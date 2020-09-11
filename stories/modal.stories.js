import React, { Fragment, useState } from "react";
import { H1, H3 } from "../src/Headings";
import { ModalRoot, Modal } from "../src/Modal";
import { Button } from "../src/Button/Button";
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
  height: 400,
  margin: "40px auto"
};

const Center = ({ children }) => <div style={styles}>{children}</div>;

export default {
  title: "Modal",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes: "Modal component should be use to display any popup or modal"
  }
};

export const defaultOne = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Fragment>
      {/* This should be at top level in the App tree */}
      <ModalRoot />
      <Button title="Open Modal" onClick={() => setOpenModal(true)} />
      <Modal
        isOpen={openModal}
        handleClose={() => setOpenModal(false)}
        padding={text("padding", "24px")}
        backgroundColor={color("backgroundColor", "#ffffff")}
        width={text("width", "50%")}
        textAlign="center"
      >
        <H1>Making minds happier</H1>
        <H3>Inside and outside of work</H3>
      </Modal>
    </Fragment>
  );
};

export const Scrollable = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Fragment>
      <ModalRoot />
      <Button title="Open Modal" onClick={() => setOpenModal(true)} />
      <Modal
        isOpen={openModal}
        scroll={true}
        handleClose={() => setOpenModal(false)}
        padding={text("padding", "24px")}
        backgroundColor={color("backgroundColor", "#ffffff")}
        width={text("width", "50%")}
        textAlign="center"
      >
        <H1>Making minds happier</H1>
        <H3>Inside and outside of work</H3>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>
      </Modal>
    </Fragment>
  );
};
