import React from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, primary } from "@uprise/colors";
const SmallStyle = Styled.p`
      font-family: ${props => props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova"};
      font-size: 13px;
      font-weight: ${props => props.weight};
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      display: ${props => props.inline ? "inline" : "block"};
      width: ${props => props.width};
      text-align: ${props => props.textAlign};
      color: ${props => props.color};
`;
export const Small = ({
  children,
  myRef,
  inline,
  className,
  onClick,
  width,
  textAlign,
  weight,
  color
}) => {
  return /*#__PURE__*/React.createElement(SmallStyle, {
    className: className,
    ref: myRef,
    onClick: onClick,
    inline: inline,
    width: width,
    weight: weight,
    textAlign: textAlign,
    color: color
  }, children);
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

Small.propTypes = {
  weight: string,
  color: string,
  width: string,
  textAlign: string
};
Small.defaultProps = {
  weight: "normal",
  color: extended.charcoal.two,
  width: "",
  textAlign: ""
};