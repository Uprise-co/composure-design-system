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
