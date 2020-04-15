import React from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, primary } from "@uprise/colors";
const Heading2 = Styled.h2`
      font-family: ${props => props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova"}; 
      font-size: ${props => props.fontSize}; 
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.25;
      letter-spacing: normal;
      width: ${props => props.width};
      text-align: ${props => props.textAlign};
	color: ${props => props.color};

	@media (max-width: 475px) {
		font-size: ${props => props.fontSizeXs};
		text-align: ${props => props.textAlignXs};
	}

`;
export const H2 = ({
  children,
  ...props
}) => {
  return (
    /*#__PURE__*/
    React.createElement(Heading2, props, children)
  );
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

H2.propTypes = {
  className: string,
  color: string,
  width: string,
  textAlign: string,
  weight: string
};
H2.defaultProps = {
  className: "",
  color: primary.charcoal,
  width: "",
  textAlign: "",
  weight: "bold",
  fontSize: "32px",
  fontSizeXs: "32px"
};