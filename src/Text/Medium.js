import React from "react"
import { string, number } from "prop-types"
import Styled from "styled-components"

// Colors
import { extended, primary } from "@uprise/colors"

const MediumStyle = Styled.p`
      font-family: ${props =>
          props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova"};
      font-size: 15px;
      font-weight: ${props => props.weight};
      font-style: normal;
      font-stretch: normal;
      margin-top: ${props => props.marginTop};
      line-height: ${props => props.lineHeight};
      letter-spacing: normal;
      width: ${props => props.width};
      text-align: ${props => props.textAlign};
      color: ${props => props.color};
`

export const Medium = ({
    children,
    myRef,
    className,
    onClick,
    width,
    textAlign,
    marginTop,
    weight,
    color,
    lineHeight
}) => {
    return (
        <MediumStyle
            className={className}
            ref={myRef}
            onClick={onClick}
            width={width}
            weight={weight}
            marginTop={marginTop}
            textAlign={textAlign}
            lineHeight={lineHeight}
            color={color}
        >
            {children}
        </MediumStyle>
    )
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
Medium.propTypes = {
    weight: string,
    color: string,
    width: string,
    textAlign: string,
    lineHeight: number
}

Medium.defaultProps = {
    weight: "normal",
    color: extended.charcoal.one,
    width: "",
    textAlign: "",
    lineHeight: 1.5
}
