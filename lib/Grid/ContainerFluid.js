function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { string } from "prop-types";
import Styled from "styled-components";
const ContainerFluidStyle = Styled.div`
      background-color: ${props => props.backgroundColor};
	min-height: ${props => props.height};
	height: ${props => props.height};
`;
export const ContainerFluid = ({
  children,
  className,
  ...props
}) => {
  return (
    /*#__PURE__*/
    React.createElement(ContainerFluidStyle, _extends({
      className: `container-fluid ${className}`
    }, props), children)
  );
};
ContainerFluid.propTypes = {
  className: string,
  backgroundColor: string,
  height: string
};
ContainerFluid.defaultProps = {
  className: "",
  backgroundColor: "",
  height: ""
};