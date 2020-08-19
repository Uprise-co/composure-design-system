import React, { Fragment } from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components";
import { spacing } from "@uprise/spacing";
import { primary, extended, backgrounds } from "@uprise/colors";
import Icons from "@uprise/icons";

const Base = Styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border-radius: 10px;
    border: none;
    height: 50px;
    padding-left: ${props => props.paddingLeft};
    padding-right: ${props => props.paddingRight};
    font-size: ${props => props.fontSize};
    color: ${primary.purple};
    font-family: ${props =>
      props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova"};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Primary = Styled(Base)`
    border: solid 1px ${props => {
      if (props.disabled) {
        return extended.charcoal.two;
      } else if (props.transparent) {
        return backgrounds.white;
      } else {
        return primary.purple;
      }
    }};

    background-color: ${props => {
      if (props.disabled) {
        return extended.charcoal.two;
      } else if (props.transparent) {
        return backgrounds.white;
      } else {
        return primary.purple;
      }
    }};

    text-transform: ${props => {
      if (props.uppercase) {
        return "uppercase";
      } else {
        return "none";
      }
    }};

    border-radius: ${props =>
      props.borderRadius ? props.borderRadius : "10px"};
    color: ${props => {
      if (props.transparent) {
        return extended.purple.dark;
      } else {
        return backgrounds.white;
      }
    }};
    width: ${props => props.width};
    height: ${props => props.height};

    
    &:hover {
        background-color: ${props => {
          if (props.transparent && props.hover) {
            return backgrounds.white;
          } else if (props.hover) {
            return extended.purple.dark;
          }
        }};
    }
`;

export const Secondary = Styled(Base)`
    color: ${props => {
      if (props.disabled) {
        return extended.charcoal.three;
      } else if (props.transparent) {
        return backgrounds.white;
      } else {
        return primary.purple;
      }
    }};

    border: solid 1px ${props => {
      if (props.disabled) {
        return extended.charcoal.three;
      } else if (props.transparent) {
        return backgrounds.white;
      } else {
        return primary.purple;
      }
    }};

    text-transform: ${props => {
      if (props.uppercase) {
        return "uppercase";
      } else {
        return "none";
      }
    }};

    background-color: ${props => {
      if (props.transparent) {
        return "transparent";
      } else {
        return backgrounds.white;
      }
    }};

    border-radius: ${props =>
      props.borderRadius ? props.borderRadius : "10px"};
    width: ${props => props.width};
    height: ${props => props.height};

    &:hover {
        background-color: ${props => {
          if (props.transparent && props.hover) {
            return "none";
          } else if (props.hover) {
            return extended.purple.five;
          }
        }};
    }
`;

export const Tertiary = Styled(Primary)`
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => {
      if (props.disabled) {
        return extended.charcoal.two;
      } else if (props.transparent) {
        return backgrounds.white;
      } else {
        return primary.purple;
      }
    }};

    background-color: ${props => {
      if (props.disabled) {
        return extended.charcoal.five;
      } else if (props.transparent) {
        return "transparent";
      } else {
        return extended.purple.six;
      }
    }};

    border: none;
    border-radius: ${props =>
      props.borderRadius ? props.borderRadius : "10px"};

    text-transform: ${props => {
      if (props.uppercase) {
        return "uppercase";
      } else {
        return "none";
      }
    }};

    &:hover {
        background-color: ${props => {
          if (props.transparent && props.hover) {
            return "transparent";
          } else if (props.hover) {
            return extended.purple.five;
          }
        }};

        color: ${props => {
          if (props.transparent) {
            return backgrounds.white;
          } else {
            return primary.purple;
          }
        }};
    }
`;

export const TextButton = Styled(Primary)`
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${primary.purple};
    background-color: ${backgrounds.white};
    border: none;
	border-radius: ${props => (props.borderRadius ? props.borderRadius : "10px")};

    text-transform: ${props => {
      if (props.uppercase) {
        return "uppercase";
      } else {
        return "none";
      }
    }};

	&:hover {
        background-color: ${backgrounds.white};
        color: ${primary.purple};

    }
`;

export const IconRight = Styled.img`
	top: 1px;
	margin-left: ${spacing.s4};
	height: 10px;
`;

export const Button = ({
  title,
  size,
  weight,
  fullWidth,
  variant,
  borderRadius,
  isLoading,
  transparent,
  paddingLeft,
  paddingRight,
  uppercase,
  icon,
  hover,
  ...props
}) => {
  let width, height, fontSize;

  switch (size) {
    case "tiny":
      width = fullWidth ? "100%" : "70px";
      height = "24px";
      fontSize = "11px";
      weight = "normal";
      break;
    case "extra-small":
      width = fullWidth ? "100%" : "auto";
      height = "24px";
      fontSize = "13px";
      weight = "normal";
      break;
    case "small":
      width = fullWidth ? "100%" : "auto";
      height = "32px";
      fontSize = "16px";
      weight = variant === "secondary" ? "normal" : "bold";
      break;
    case "medium":
      width = fullWidth ? "100%" : "auto";
      height = "42px";
      fontSize = "16px";
      weight = "bold";
      break;
    case "large":
      width = fullWidth ? "100%" : "auto";
      height = "50px";
      fontSize = "16px";
      weight = "bold";
      break;
  }

  switch (variant) {
    case "primary":
      return (
        <Primary
          role="button"
          weight={weight}
          fontSize={fontSize}
          uppercase={uppercase}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          width={width}
          transparent={transparent}
          height={height}
          hover={hover}
          borderRadius={borderRadius}
          {...props}
        >
          {isLoading ? (
            <img
              className=""
              src={require(`@uprise/core/assets/images/animated/ellipsis-white.svg`)}
            />
          ) : (
            <span>{title}</span>
          )}
        </Primary>
      );
    case "secondary":
      return (
        <Secondary
          role="button"
          weight={weight}
          fontSize={fontSize}
          uppercase={uppercase}
          transparent={transparent}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          borderRadius={borderRadius}
          width={width}
          height={height}
          hover={hover}
          {...props}
        >
          {isLoading ? (
            <img
              className=""
              src={require(`@uprise/core/assets/images/animated/ellipsis-white.svg`)}
            />
          ) : (
            <span>{title}</span>
          )}
        </Secondary>
      );
    case "tertiary":
      return (
        <Tertiary
          role="button"
          weight={weight}
          fontSize={fontSize}
          uppercase={uppercase}
          paddingLeft={paddingLeft}
          transparent={transparent}
          paddingRight={paddingRight}
          borderRadius={borderRadius}
          width={width}
          height={height}
          hover={hover}
          {...props}
        >
          {isLoading ? (
            <img
              className=""
              src={require(`@uprise/core/assets/images/animated/ellipsis-white.svg`)}
            />
          ) : (
            <span>{title}</span>
          )}
        </Tertiary>
      );
    case "text":
      return (
        <TextButton
          role="button"
          weight={weight}
          uppercase={uppercase}
          fontSize={fontSize}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          borderRadius={borderRadius}
          width={width}
          height={height}
          hover={hover}
          {...props}
        >
          {isLoading ? (
            <img
              className=""
              src={require(`@uprise/core/assets/images/animated/ellipsis-white.svg`)}
            />
          ) : (
            <Fragment>
              <span>{title}</span>
              {icon && <IconRight src={Icons.chevronRightPurple} />}
            </Fragment>
          )}
        </TextButton>
      );
  }
};

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
Button.propTypes = {
  variant: string.isRequired,
  className: string,
  title: string.isRequired,
  size: string,
  fullWidth: bool,
  disabled: bool,
  isPressed: bool,
  isLoading: bool,
  onClick: func,
  hover: bool
};

Button.defaultProps = {
  variant: "primary",
  className: "",
  title: "",
  size: "large",
  hover: true,
  fullWidth: true,
  icon: false,
  isLoading: false,
  disabled: false,
  isPressed: false
};
