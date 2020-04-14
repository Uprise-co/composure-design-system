import React from "react"
import {string} from "prop-types"
import Styled from "styled-components"

const ContainerFluidStyle = Styled.div`
      background-color: ${props => props.backgroundColor};
	min-height: ${props => props.height};
	height: ${props => props.height};
`

export const ContainerFluid = ({children, className, ...props}) => {
	return (
		<ContainerFluidStyle className={`container-fluid ${className}`} {...props}>
			{children}
		</ContainerFluidStyle>
	)
}

ContainerFluid.propTypes = {
	className: string,
	backgroundColor: string,
	height: string
}

ContainerFluid.defaultProps = {
	className: "",
	backgroundColor: "",
	height: ""
}
