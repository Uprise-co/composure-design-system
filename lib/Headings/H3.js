import React from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, primary } from "uprise-uikit/colors";
const Heading3 = Styled.h3`
      font-family: ${props => props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova"}; ;
      font-size: 24px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.25;
      letter-spacing: normal;
      width: ${props => props.width};
      text-align: ${props => props.textAlign};
      color: ${props => props.color};
`;
export const H3 = ({
  children,
  ...props
}) => {
  return (
    /*#__PURE__*/
    React.createElement(Heading3, props, children)
  );
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

H3.propTypes = {
  className: string,
  color: string,
  width: string,
  textAlign: string,
  weight: string
};
H3.defaultProps = {
  className: "",
  color: primary.charcoal,
  width: "",
  textAlign: "",
  weight: "bold"
};