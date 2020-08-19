function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
const ImageWrap = Styled.div`
      width: ${props => props.width};
			height: ${props => props.height};
			position: relative;
`;
const ImageStyle = Styled.img`
      position: absolute;
			top: 0px;
			left: 0px;
      transition: opacity ease-in 0.3;
      opacity: ${props => props.highResImageLoaded ? 1 : 0};
      border-radius: ${props => props.borderRadius};
`;
const OverlayImageStyle = Styled.img`
      position: absolute;
			top: 0px;
			left: 0px;
      filter: blur(1px);
      transition: opacity ease-in 0.3;
      opacity: ${props => props.highResImageLoaded ? 0 : 1};
      border-radius: ${props => props.borderRadius};
`;
export const ProgressiveImage = ({
  className,
  overlaySrc,
  src,
  borderRadius,
  ...restProps
}) => {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);
  return /*#__PURE__*/React.createElement(ImageWrap, _extends({
    className: className
  }, restProps), /*#__PURE__*/React.createElement(ImageStyle, _extends({}, restProps, {
    highResImageLoaded: highResImageLoaded,
    borderRadius: borderRadius,
    onLoad: () => {
      setHighResImageLoaded(true);
    },
    src: src
  })), /*#__PURE__*/React.createElement(OverlayImageStyle, _extends({
    highResImageLoaded: highResImageLoaded,
    borderRadius: borderRadius,
    src: overlaySrc
  }, restProps)));
};
ProgressiveImage.propTypes = {
  overlaySrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  className: PropTypes.string
};
ProgressiveImage.defaultProps = {
  className: "",
  borderRadius: "0px"
};