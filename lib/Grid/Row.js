function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { string } from "prop-types";
import Styled from "styled-components";
const RowStyle = Styled.div`
      background-color: ${props => props.backgroundColor};
      height: ${props => props.height};
`;
export const Row = ({
  children,
  className,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(RowStyle, _extends({
    className: `row ${className}`
  }, props), children);
};
Row.propTypes = {
  className: string,
  backgroundColor: string,
  height: string
};
Row.defaultProps = {
  className: "",
  backgroundColor: "",
  height: ""
};