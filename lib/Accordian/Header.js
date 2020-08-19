import React from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, primary } from "@uprise/colors";
const AccordianHeaderStyle = Styled.div`
`;
export const AccordianHeader = ({
  className,
  children
}) => {
  return /*#__PURE__*/React.createElement(AccordianHeaderStyle, {
    key: "header",
    className: className
  }, children);
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

AccordianHeader.propTypes = {
  weight: string,
  color: string,
  width: string,
  textAlign: string
};
AccordianHeader.defaultProps = {
  weight: "normal",
  color: extended.charcoal.two,
  width: "",
  textAlign: ""
};