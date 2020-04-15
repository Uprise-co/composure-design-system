import React from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, primary } from "@uprise/colors";
const Heading4 = Styled.h4`
      font-family: ${props => props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova"}; ;
      font-size: 20px;
      font-weight: ${props => props.bold ? 600 : "normal"};
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: ${props => props.width};
      text-align: ${props => props.textAlign};
      color: ${props => props.color};
`;
export const H4 = ({
  children,
  ...props
}) => {
  return (
    /*#__PURE__*/
    React.createElement(Heading4, props, children)
  );
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

H4.propTypes = {
  className: string,
  color: string,
  width: string,
  textAlign: string,
  weight: string
};
H4.defaultProps = {
  className: "",
  color: primary.charcoal,
  width: "",
  textAlign: "",
  weight: "bold"
};