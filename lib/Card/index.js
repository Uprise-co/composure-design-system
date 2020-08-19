function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { string, bool } from "prop-types";
import styled, { css } from "styled-components";
const CardWrapper = styled.div`
 	overflow: hidden;
	border-radius: 10px;

	${props => props.shadow && css`
			box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
		`}

	${props => props.border && css`
			border: ${props.border};
		`}
	${props => props.backgroundImage && css`
			background-image: url(${props.backgroundImage});
			background-size: cover;
			background-position: center;
		`}
	${props => props.backgroundColor && css`
			background-color: ${props.backgroundColor};
		`}
	${props => props.padding && css`
			padding: ${props.padding};
		`}
	${props => props.width && css`
			width: ${props.width};
		`};
	${props => props.height && css`
			height: ${props.height};
		`};

	@media (max-width: 1024px) {
		border-radius: ${props => props.borderRadius};
	}

	@media (max-width: 475px) {
		border-radius: ${props => props.borderRadius};
	}
`;
export const Card = ({
  children,
  onClick,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(CardWrapper, _extends({
    onClick: () => onClick()
  }, props), children);
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

Card.propTypes = {
  className: string,
  padding: string,
  width: string,
  border: string,
  shadow: bool,
  backgroundColor: string
};
Card.defaultProps = {
  onClick: () => null,
  borderRadius: "10px"
};