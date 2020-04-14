import React from "react"
import {bool, func, string} from "prop-types"
import Styled from "styled-components"

// Colors
import {extended, primary} from "uprise-uikit/colors"

const ExtraSmallStyle = Styled.p`
      font-family: ${props => (props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova")};
      font-size: 12px;
      font-weight: ${props => props.weight};
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: ${props => props.width};
      text-align: ${props => props.textAlign};
      color: ${props => props.color};
`

export const ExtraSmall = ({children, className, width, textAlign, weight, color}) => {
	return (
		<ExtraSmallStyle className={className} width={width} weight={weight} textAlign={textAlign} color={color}>
			{children}
		</ExtraSmallStyle>
	)
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
ExtraSmall.propTypes = {
	weight: string,
	color: string,
	width: string,
	textAlign: string
}

ExtraSmall.defaultProps = {
	weight: "normal",
	color: extended.charcoal.two,
	width: "",
	textAlign: ""
}
