import React from "react";
import { string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended } from "@uprise/colors";
const AccordianContentStyle = Styled.div`
`;
export const AccordianContent = ({
  className,
  children
}) => {
  if (typeof children === Object) {
    return /*#__PURE__*/React.createElement(AccordianContentStyle, {
      className: className
    }, children);
  } else {
    return /*#__PURE__*/React.createElement(AccordianContentStyle, {
      className: className,
      dangerouslySetInnerHTML: {
        __html: children
      }
    });
  }
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