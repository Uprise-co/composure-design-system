import React from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, primary } from "@uprise/colors";
const Heading5 = Styled.h5`
      font-family: ${props => props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova"}; ;
      font-size: 18px;
      font-style: normal;
      font-stretch: normal;
      line-height: ${props => props.lineHeight};
      letter-spacing: normal;
      width: ${props => props.width};
      text-align: ${props => props.textAlign};
      color: ${props => props.color};
`;
export const H5 = ({
  children,
  ...props
}) => {
  return (
    /*#__PURE__*/
    React.createElement(Heading5, props, children)
  );
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

H5.propTypes = {
  className: string,
  color: string,
  width: string,
  textAlign: string,
  weight: string
};
H5.defaultProps = {
  weight: "bold",
  className: "",
  color: primary.charcoal,
  width: "",
  textAlign: ""
};