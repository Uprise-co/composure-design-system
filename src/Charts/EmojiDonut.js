import React from "react"
import {number, string, object} from "prop-types"
import {Doughnut} from "react-chartjs-2"
import Styled from "styled-components"

const ChartWrap = Styled.div`
	position: relative;
	display: flex;
 	width: ${props => props.width}px;
	height: ${props => props.height}px;
 	align-self: center;
	margin-bottom: 12px;
`

const Emoji = Styled.img`
	height: ${props => props.emojiHeight}px;
	width: ${props => props.emojiWidth}px;
	margin-top: ${props => props.emojix}px;
	margin-left: ${props => props.emojiy}px;
	position: absolute;
`

const DonutWrap = Styled.div`
	width: 100%;
	right: 0px;
	position: relative;
`

export const EmojiDonut = ({
	image,
	data,
	options,
	emojix,
	emojiy,
	emojiHeight,
	emojiWidth,
	cutoutPercentage,
	width,
	height
}) => {
	return (
		<ChartWrap width={width} height={height}>
			<Emoji
				src={image}
				emojix={emojix}
				emojiy={emojiy}
				width={emojiWidth}
				height={emojiHeight}
				emojiHeight={emojiHeight}
				emojiWidth={emojiWidth}
			/>
			<DonutWrap>
				<Doughnut cutoutPercentage={cutoutPercentage} data={data} options={options} />
			</DonutWrap>
		</ChartWrap>
	)
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
EmojiDonut.propTypes = {
	cutoutPercentage: number,
	width: number,
	height: number,
	emojiHeight: number,
	emojiWidth: number,
	image: string.isRequired,
	data: object.isRequired,
	options: object.isRequired
}

EmojiDonut.defaultProps = {
	cutoutPercentage: 0,
	width: 100,
	height: 100,
	emojiHeight: 100,
	emojiWidth: 100
}
