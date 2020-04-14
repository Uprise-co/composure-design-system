import React from "react"
import {number, string} from "prop-types"
import Styled, {css} from "styled-components"

import {primary, extended, backgrounds} from "uprise-uikit/colors"

const ProgressWrap = Styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	border-radius: ${props => props.radius};
	height: ${props => props.height};
	background-color: ${extended.purple.five};
`

const Progress = Styled.div`
	border-radius: ${props => props.radius};
      width: ${props => props.percentage};
      height: ${props => props.height};
	background-color: ${props => props.backgroundColor};

`

export const ProgressBar = ({height, className, percentage, radius}) => {
	return (
		<ProgressWrap className={className} height={height} radius={radius}>
			<Progress
				data-testid={`completed-percentage`}
				percentage={`${percentage}%`}
				height={height}
				backgroundColor={primary.purple}
				radius={radius}
			/>
		</ProgressWrap>
	)
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
ProgressBar.propTypes = {
	percentage: number,
	height: string,
	className: string,
	radius: number
}

ProgressBar.defaultProps = {
	percentage: 0,
	radius: 5,
	height: "10px"
}
