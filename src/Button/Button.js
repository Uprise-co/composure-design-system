import React, {Fragment} from "react"
import {bool, func, string} from "prop-types"
import Styled, {css} from "styled-components"
// spacing
import {spacing} from "uprise-uikit/spacing"
// Colors
import {primary, secondary, extended, backgrounds} from "uprise-uikit/colors"
// Icons
import Icons from "constants/Icons"

const Base = Styled.button`
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border-radius: 10px;
      border: none;
      height: 50px;
	padding: ${props => props.padding};
	font-size: ${props => props.fontSize};
      color: ${primary.purple};
      font-family: ${props => (props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova")};
      cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`

export const Primary = Styled(Base)`
      border: solid 1px ${props => (props.disabled ? extended.charcoal.two : primary.purple)};
      background-color: ${props => (props.disabled ? extended.charcoal.two : primary.purple)};
      border-radius: ${props => (props.borderRadius ? props.borderRadius : "10px")};
      color: ${backgrounds.white};
      width: ${props => props.width};
      height: ${props => props.height};

      &:hover {
            background-color: ${extended.purple.dark};
      }
`

export const Secondary = Styled(Base)`
      color: ${props => (props.disabled ? extended.charcoal.three : primary.purple)};
      border: solid 1px ${secondary.electricBlue};
      border-radius: ${props => (props.borderRadius ? props.borderRadius : "10px")};
      background-color: ${backgrounds.white};
      width: ${props => props.width};
      height: ${props => props.height};
      border: solid 1px ${props => (props.disabled ? extended.charcoal.three : primary.purple)};

      &:hover {
            background-color: ${extended.purple.five};
      }
`

export const Tertiary = Styled(Primary)`
      width: ${props => props.width};
      height: ${props => props.height};
      color: ${props => (props.disabled ? extended.charcoal.two : primary.purple)};
      background-color: ${props => (props.disabled ? extended.charcoal.five : backgrounds.fadedPurple)};
      border: none;
      border-radius: ${props => (props.borderRadius ? props.borderRadius : "10px")};

      &:hover {
            background-color: ${extended.purple.five};
            color:  ${primary.purple};

      }
`

export const TextButton = Styled(Primary)`
      width: ${props => props.width};
      height: ${props => props.height};
      color: ${primary.purple};
      background-color: ${backgrounds.white};
      border: none;
	border-radius: ${props => (props.borderRadius ? props.borderRadius : "10px")};
	
	&:hover {
            background-color: ${backgrounds.white};
            color:  ${primary.purple};

      }
`

export const IconRight = Styled.img`
	top: 1px;
	margin-left: ${spacing.s4};
	height: 10px;
`

export const Button = ({title, size, weight, fullWidth, variant, borderRadius, isLoading, icon, ...props}) => {
	let width, height, fontSize, padding

	switch (size) {
		case "tiny":
			width = fullWidth ? "100%" : "70px"
			height = "24px"
			fontSize = "11px"
			weight = "normal"
			break
		case "extra-small":
			width = fullWidth ? "100%" : "auto"
			height = "24px"
			fontSize = "13px"
			weight = "normal"
			break
		case "small":
			width = fullWidth ? "100%" : "auto"
			height = "32px"
			fontSize = "16px"
			weight = variant === "secondary" ? "normal" : "bold"
			break
		case "medium":
			width = fullWidth ? "100%" : "auto"
			height = "42px"
			fontSize = "16px"
			weight = "bold"
			break
		case "large":
			width = fullWidth ? "100%" : "auto"
			height = "50px"
			fontSize = "16px"
			weight = "bold"
			break
	}

	switch (variant) {
		case "primary":
			return (
				<Primary
					role='button'
					weight={weight}
					fontSize={fontSize}
					padding={padding}
					width={width}
					height={height}
					borderRadius={borderRadius}
					{...props}>
					{isLoading ? (
						<img className='' src={require(`assets/images/animated/ellipsis-white.svg`)} />
					) : (
						<span>{title}</span>
					)}
				</Primary>
			)
		case "secondary":
			return (
				<Secondary
					role='button'
					weight={weight}
					fontSize={fontSize}
					padding={padding}
					borderRadius={borderRadius}
					width={width}
					height={height}
					{...props}>
					{isLoading ? (
						<img className='' src={require(`assets/images/animated/ellipsis-white.svg`)} />
					) : (
						<span>{title}</span>
					)}
				</Secondary>
			)
		case "tertiary":
			return (
				<Tertiary
					role='button'
					weight={weight}
					fontSize={fontSize}
					padding={padding}
					borderRadius={borderRadius}
					width={width}
					height={height}
					{...props}>
					{isLoading ? (
						<img className='' src={require(`assets/images/animated/ellipsis-white.svg`)} />
					) : (
						<span>{title}</span>
					)}
				</Tertiary>
			)
		case "text":
			return (
				<TextButton
					role='button'
					weight={weight}
					fontSize={fontSize}
					padding={padding}
					borderRadius={borderRadius}
					width={width}
					height={height}
					{...props}>
					{isLoading ? (
						<img className='' src={require(`assets/images/animated/ellipsis-white.svg`)} />
					) : (
						<Fragment>
							<span>{title}</span>
							{icon && <IconRight src={Icons.chevronRightPurple} />}
						</Fragment>
					)}
				</TextButton>
			)
	}
}

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
	onClick: func
}

Button.defaultProps = {
	variant: "primary",
	className: "",
	title: "",
	size: "large",
	fullWidth: true,
	icon: false,
	isLoading: false,
	disabled: false,
	isPressed: false
}
