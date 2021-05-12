import React from "react";
import { TextInput, TextInputHorizontal, Select } from "../src/Form";
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
  title: "Form",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes: "Form component should be use to wrap input elements"
  }
};

export const WithTextInput = () => (
  <TextInput
    type={"text"}
    label={text("label", "Name")}
    placeholder={text("placeholder", "Pieter")}
    isRequired={boolean("isRequired", true)}
  />
);

export const withTextInputHorizontal = () => (
  <TextInputHorizontal
    type={"text"}
    label={text("label", "Name")}
    placeholder={text("placeholder", "Pieter")}
    isRequired={boolean("isRequired", true)}
  />
);

export const withSelect = () => (
  <Select
    type={"text"}
    label={text("label", "Fruit")}
    placeholder={text("placeholder", "Mango")}
    isRequired={boolean("isRequired", true)}
    options={[
      {
        label: "Mango",
        value: "mango"
      },
      {
        label: "Apple",
        value: "apple"
      },
      {
        label: "Kiwi",
        value: "kiwi"
      }
    ]}
  />
);
