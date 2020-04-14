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
			left: 0;
			top: 0;
			width: 100%;
      transition: opacity ease-in 300ms;
      opacity: ${props => props.highResImageLoaded ? 1 : 0};
      border-radius: ${props => props.borderRadius};
`;
const OverlayImageStyle = Styled.img`
      position: absolute;
			left: 0;
			top: 0;
			width: 100%;
      filter: blur(1px);
      transition: opacity ease-in 300ms;
      opacity: ${props => props.highResImageLoaded ? 0 : 1};
      border-radius: ${props => props.borderRadius};
`;
const defaultContainerStyles = {
  position: "relative",
  width: "100%",
  height: "100%"
};
export const RetinaProgressiveImage = ({
  containerStyles,
  className,
  overlaySrc,
  srcSets,
  borderRadius,
  ...restProps
}) => {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);
  return (
    /*#__PURE__*/
    React.createElement(ImageWrap, _extends({
      style: { ...defaultContainerStyles,
        ...containerStyles
      },
      className: className
    }, restProps),
    /*#__PURE__*/
    React.createElement("picture", null,
    /*#__PURE__*/
    React.createElement("source", {
      srcSet: srcSets.small,
      media: "(max-width: 480px)"
    }),
    /*#__PURE__*/
    React.createElement("source", {
      srcSet: srcSets.medium,
      media: "(max-width: 1366px)"
    }),
    /*#__PURE__*/
    React.createElement(ImageStyle, _extends({}, restProps, {
      highResImageLoaded: highResImageLoaded,
      borderRadius: borderRadius,
      onLoad: () => {
        setHighResImageLoaded(true);
      },
      src: srcSets.large,
      loading: "lazy"
    }))),
    /*#__PURE__*/
    React.createElement(OverlayImageStyle, _extends({
      highResImageLoaded: highResImageLoaded,
      borderRadius: borderRadius,
      src: overlaySrc,
      loading: "lazy"
    }, restProps)))
  );
};
RetinaProgressiveImage.propTypes = {
  overlaySrc: PropTypes.string.isRequired,
  srcSets: PropTypes.shape({
    small: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired
  }).isRequired,
  borderRadius: PropTypes.string,
  className: PropTypes.string,
  containerStyles: PropTypes.object
};
RetinaProgressiveImage.defaultProps = {
  className: "",
  borderRadius: "0px"
};