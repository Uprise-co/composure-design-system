import React from "react"
import { bool, func, string } from "prop-types"
import Styled from "styled-components"

// Colors
import { extended, primary } from "@uprise/colors"

const Heading6 = Styled.h6`
      font-family: ${props =>
          props.weight === "bold" ? "Proxima Nova Semibold" : "Proxima Nova"};
      font-size: ${props => (props.fontSize ? props.fontSize : "15px")};
      font-weight: ${props => (props.weight ? props.weight : "bold")};
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: ${props => props.width};
      text-align: ${props => props.textAlign};
      color: ${props => props.color};
`

export const H6 = ({ children, ...props }) => {
    return <Heading6 {...props}>{children}</Heading6>
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
H6.propTypes = {
    className: string,
    color: string,
    width: string,
    textAlign: string,
    weight: string
}

H6.defaultProps = {
    className: "",
    color: primary.charcoal,
    width: "",
    textAlign: "",
    weight: "bold"
}
