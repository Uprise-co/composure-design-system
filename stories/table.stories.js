import React from "react";
import Table from "../src/Table";
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
  title: "Table",
  decorators: [storyFn => <Center>{storyFn()}</Center>, withKnobs],
  parameters: {
    notes: "Table component should be display table"
  }
};

const columns = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "City",
    accessor: "city"
  },
  {
    Header: "Designation",
    accessor: "designation"
  }
];

const data = [
  {
    name: "Ganesh",
    email: "user1@gmail.com",
    city: "Manhattan",
    designation: "developer"
  },
  {
    name: "Ganesh",
    email: "user1@gmail.com",
    city: "Manhattan",
    designation: "developer"
  },
  {
    name: "Ganesh",
    email: "user1@gmail.com",
    city: "Manhattan",
    designation: "developer"
  },
  {
    name: "Ganesh",
    email: "user1@gmail.com",
    city: "Manhattan",
    designation: "developer"
  }
];

export const defaultOne = () => <Table columns={columns} data={data} />;
