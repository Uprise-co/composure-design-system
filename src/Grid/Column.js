import React from "react"
import {string} from "prop-types"

export const Col = ({children, className, ...props}) => {
	return (
		<div className={`col-12 ${className}`} {...props}>
			{children}
		</div>
	)
}

Col.propTypes = {
	className: string
}

Col.defaultProps = {
	className: ""
}
