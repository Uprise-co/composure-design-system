import React from "react"
import {bool, func, string} from "prop-types"
import Styled from "styled-components"

// Colors
import {extended, primary} from "uprise-uikit/colors"

const BoldStyle = Styled.span`
      font-family: "Proxima Nova Semibold";
      font-style: normal;
      font-stretch: normal;
      margin-top: ${props => props.marginTop};
      line-height: 1.5;
      letter-spacing: normal;
      color: ${props => props.color};
`

export const Bold = ({children, className, marginTop, color}) => {
	return (
		<BoldStyle className={className} marginTop={marginTop} color={color}>
			{children}
		</BoldStyle>
	)
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
Bold.propTypes = {
	color: string
}

Bold.defaultProps = {
	color: extended.charcoal.one
}
