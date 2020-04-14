import React from "react"
import {string} from "prop-types"
import Styled from "styled-components"

const ContainerStyle = Styled.div`
      background-color: ${props => props.backgroundColor};
			height: ${props => props.height};
`

export const Container = ({children, className, ...props}) => {
	return (
		<ContainerStyle className={`container ${className}`} {...props}>
			{children}
		</ContainerStyle>
	)
}

Container.propTypes = {
	className: string
}

Container.defaultProps = {
	className: ""
}
