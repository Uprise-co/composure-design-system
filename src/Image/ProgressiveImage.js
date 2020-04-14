import React, {useState} from "react"
import PropTypes from "prop-types"
import Styled from "styled-components"

const ImageWrap = Styled.div`
      width: ${props => props.width};
			height: ${props => props.height};
			position: relative;
`

const ImageStyle = Styled.img`
      position: absolute;
			top: 0px;
			left: 0px;
      transition: opacity ease-in 0.3;
      opacity: ${props => (props.highResImageLoaded ? 1 : 0)};
      border-radius: ${props => props.borderRadius};
`

const OverlayImageStyle = Styled.img`
      position: absolute;
			top: 0px;
			left: 0px;
      filter: blur(1px);
      transition: opacity ease-in 0.3;
      opacity: ${props => (props.highResImageLoaded ? 0 : 1)};
      border-radius: ${props => props.borderRadius};
`

export const ProgressiveImage = ({className, overlaySrc, src, borderRadius, ...restProps}) => {
	const [highResImageLoaded, setHighResImageLoaded] = useState(false)

	return (
		<ImageWrap className={className} {...restProps}>
			<ImageStyle
				{...restProps}
				highResImageLoaded={highResImageLoaded}
				borderRadius={borderRadius}
				onLoad={() => {
					setHighResImageLoaded(true)
				}}
				src={src}
			/>
			<OverlayImageStyle
				highResImageLoaded={highResImageLoaded}
				borderRadius={borderRadius}
				src={overlaySrc}
				{...restProps}
			/>
		</ImageWrap>
	)
}

ProgressiveImage.propTypes = {
	overlaySrc: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	borderRadius: PropTypes.string,
	className: PropTypes.string
}

ProgressiveImage.defaultProps = {
	className: "",
	borderRadius: "0px"
}
