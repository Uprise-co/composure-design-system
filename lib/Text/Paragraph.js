import React from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, primary } from "@uprise/colors";
const Paragraph = Styled.p`
      font-family: ${props => props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova"};
      font-size: ${props => props.fontSize};
      font-weight: ${props => props.weight};
      font-style: normal;
      font-stretch: normal;
      line-height: ${props => props.lineHeight ? props.lineHeight : "1.56"};
      letter-spacing: normal;
      display: ${props => props.inline ? "inline" : "block"};
      width: ${props => props.width};
      text-align: ${props => props.textAlign};
	color: ${props => props.color};
	
	@media (max-width: 1024px) {
		width: ${props => props.smallWidth};
	}
`;
export const P = ({
  children,
  inline,
  fontSize,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  width,
  smallWidth,
  lineHeight,
  textAlign,
  weight,
  color
}) => {
  return (
    /*#__PURE__*/
    React.createElement(Paragraph, {
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      className: className,
      fontSize: fontSize,
      width: width,
      inline: inline,
      lineHeight: lineHeight,
      weight: weight,
      smallWidth: smallWidth,
      textAlign: textAlign,
      color: color
    }, children)
  );
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

P.propTypes = {
  weight: string,
  color: string,
  width: string,
  textAlign: string,
  smallWidth: string
};
P.defaultProps = {
  fontSize: "18px",
  weight: "normal",
  color: extended.charcoal.one,
  width: "",
  textAlign: ""
};