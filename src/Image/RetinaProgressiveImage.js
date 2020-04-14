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
			left: 0;
			top: 0;
			width: 100%;
      transition: opacity ease-in 300ms;
      opacity: ${props => (props.highResImageLoaded ? 1 : 0)};
      border-radius: ${props => props.borderRadius};
`

const OverlayImageStyle = Styled.img`
      position: absolute;
			left: 0;
			top: 0;
			width: 100%;
      filter: blur(1px);
      transition: opacity ease-in 300ms;
      opacity: ${props => (props.highResImageLoaded ? 0 : 1)};
      border-radius: ${props => props.borderRadius};
`

const defaultContainerStyles = {
	position: "relative",
	width: "100%",
	height: "100%"
}

export const RetinaProgressiveImage = ({
	containerStyles,
	className,
	overlaySrc,
	srcSets,
	borderRadius,
	...restProps
}) => {
	const [highResImageLoaded, setHighResImageLoaded] = useState(false)

	return (
		<ImageWrap style={{...defaultContainerStyles, ...containerStyles}} className={className} {...restProps}>
			<picture>
				<source srcSet={srcSets.small} media='(max-width: 480px)' />
				<source srcSet={srcSets.medium} media='(max-width: 1366px)' />
				<ImageStyle
					{...restProps}
					highResImageLoaded={highResImageLoaded}
					borderRadius={borderRadius}
					onLoad={() => {
						setHighResImageLoaded(true)
					}}
					src={srcSets.large}
					loading='lazy'
				/>
			</picture>
			<OverlayImageStyle
				highResImageLoaded={highResImageLoaded}
				borderRadius={borderRadius}
				src={overlaySrc}
				loading='lazy'
				{...restProps}
			/>
		</ImageWrap>
	)
}

RetinaProgressiveImage.propTypes = {
	overlaySrc: PropTypes.string.isRequired,
	srcSets: PropTypes.shape({
		small: PropTypes.string.isRequired,
		medium: PropTypes.string.isRequired,
		large: PropTypes.string.isRequired
	}).isRequired,
	borderRadius: PropTypes.string,
	className: PropTypes.string,
	containerStyles: PropTypes.object
}

RetinaProgressiveImage.defaultProps = {
	className: "",
	borderRadius: "0px"
}
