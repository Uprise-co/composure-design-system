import React, {Fragment} from "react"
import {bool, func, string} from "prop-types"
import Styled from "styled-components"
// Colors
import {backgrounds, extended, primary} from "uprise-uikit/colors"
// spacing
import {spacing} from "uprise-uikit/spacing"

const ListStyles = Styled.ul`
      margin-left: 0;
      margin-top: 0;
      padding-left: 0;
      margin-bottom: ${spacing.s6};

      display: flex;
	flex-direction: column;
	flex-wrap: wrap; 
`

const ItemStyles = Styled.li`
      margin-bottom: 5px;
      font-size: 15px;
      color: ${extended.charcoal.one};
      margin-bottom: ${spacing.s3};
      line-height: 24px;
      list-style: none;
      text-indent: -25px;
      margin-left: 25px;
      
      &:before {
            content: "•";
            font-size: 25px;
            top: 3px;
            position: relative;
            color: ${primary.purple};
            margin-right: 16px;
      }
`

export const List = ({items, ...props}) => {
	return (
		<ListStyles {...props}>
			{items.map((item, index) => {
				return <ItemStyles key={index}>{item.title}</ItemStyles>
			})}
		</ListStyles>
	)
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
List.propTypes = {
	className: string,
	color: string,
	width: string,
	textAlign: string
}

List.defaultProps = {
	className: "",
	color: primary.charcoal,
	width: "",
	textAlign: ""
}
