import React from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, primary } from "@uprise/colors";
const BoldStyle = Styled.span`
      font-family: "Proxima Nova Semibold";
      font-style: normal;
      font-stretch: normal;
      margin-top: ${props => props.marginTop};
      line-height: 1.5;
      letter-spacing: normal;
      color: ${props => props.color};
`;
export const Bold = ({
  children,
  className,
  onClick,
  marginTop,
  color
}) => {
  return (
    /*#__PURE__*/
    React.createElement(BoldStyle, {
      className: className,
      onClick: onClick,
      marginTop: marginTop,
      color: color
    }, children)
  );
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

Bold.propTypes = {
  color: string
};
Bold.defaultProps = {
  color: extended.charcoal.one
};