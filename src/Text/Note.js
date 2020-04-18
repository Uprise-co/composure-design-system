import React from "react"
import { bool, func, string } from "prop-types"
import Styled from "styled-components"

// Colors
import { extended, primary } from "@uprise/colors"

const NoteStyle = Styled.p`
      font-family: ${props =>
          props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova"};
      font-size: 16px;
      font-weight: ${props => props.weight};
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: ${props => props.width};
      text-align: ${props => props.textAlign};
      color: ${props => props.color};
`

export const Note = ({
    children,
    className,
    onClick,
    width,
    textAlign,
    weight,
    color
}) => {
    return (
        <NoteStyle
		className={className}
		onClick={onClick}
            width={width}
            weight={weight}
            textAlign={textAlign}
            color={color}
        >
            {children}
        </NoteStyle>
    )
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
Note.propTypes = {
    weight: string,
    color: string,
    width: string,
    textAlign: string
}

Note.defaultProps = {
    weight: "normal",
    color: extended.charcoal.two,
    width: "",
    textAlign: ""
}
