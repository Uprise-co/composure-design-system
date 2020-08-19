import React from "react";
import { array } from "prop-types";
import Styled from "styled-components";
import { AccordianItem, AccordianHeader, AccordianContent } from "./";
const AccordianStyle = Styled.div`

`;
export const Accordian = ({
  className,
  content
}) => {
  const accordian = content.map((item, index) => {
    return /*#__PURE__*/React.createElement(AccordianItem, {
      key: index
    }, /*#__PURE__*/React.createElement(AccordianHeader, null, item.header), /*#__PURE__*/React.createElement(AccordianContent, null, item.content));
  });
  return /*#__PURE__*/React.createElement(AccordianStyle, {
    className: className
  }, accordian);
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

Accordian.propTypes = {
  content: array.isRequired
};
Accordian.defaultProps = {};