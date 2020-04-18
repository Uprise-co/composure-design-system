import React from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, primary } from "@uprise/colors"; // Components

import { Medium } from "@uprise/text";
const AccordianContentStyle = Styled.div`
`;
export const AccordianContent = ({
  className,
  children
}) => {
  return (
    /*#__PURE__*/
    React.createElement(AccordianContentStyle, {
      className: className,
      dangerouslySetInnerHTML: {
        __html: children
      }
    })
  );
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

AccordianContent.propTypes = {
  backgroundColor: string,
  color: string,
  width: string,
  textAlign: string
};
AccordianContent.defaultProps = {
  backgroundColor: "yellow",
  color: extended.charcoal.two,
  width: "",
  textAlign: ""
};