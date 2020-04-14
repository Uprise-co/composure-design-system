import React from "react"
import {string} from "prop-types"
import Styled from "styled-components"

const RowStyle = Styled.div`
      background-color: ${props => props.backgroundColor};
      height: ${props => props.height};
`

export const Row = ({children, className, ...props}) => {
	return (
		<RowStyle className={`row ${className}`} {...props}>
			{children}
		</RowStyle>
	)
}

Row.propTypes = {
	className: string,
	backgroundColor: string,
	height: string
}

Row.defaultProps = {
	className: "",
	backgroundColor: "",
	height: ""
}
