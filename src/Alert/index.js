import React from "react"
import { string } from "prop-types"
import Styled from "styled-components"

// Colors
import { semantic, backgrounds, extended } from "@uprise/colors"

const SuccessStyle = Styled.div`
      font-family: "Proxima Nova Semibold";
      padding: 12px 16px;
      border-radius: 5px;
      font-size: 15px;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: 100%;
      text-align: ${props => props.textAlign};
      color: ${backgrounds.white};
      background-color: ${semantic.success};
`

const PrimaryStyle = Styled.div`
      font-family: "Proxima Nova Semibold";
      padding: 12px 16px;
      border-radius: 5px;
      font-size: 15px;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: 100%;
      text-align: ${props => props.textAlign};
      color: ${extended.charcoal.one};
      background-color: ${extended.purple.five};
`

const ErrorStyle = Styled.div`
      font-family: "Proxima Nova Semibold";
      padding: 12px 16px;
      border-radius: 5px;
      font-size: 15px;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: 100%;
      text-align: ${props => props.textAlign};
      color: ${backgrounds.white};
      background-color: ${semantic.error};
`

const WarningStyle = Styled.div`
      font-family: "Proxima Nova Semibold";
      padding: 12px 16px;
      border-radius: 5px;
      font-size: 15px;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: 100%;
      text-align: ${props => props.textAlign};
      color: ${extended.charcoal.one};
      background-color: ${semantic.warning};
`

export const Alert = ({ children, className, textAlign, type }) => {
    switch (type) {
        case "primary":
            return (
                <PrimaryStyle
                    className={className}
                    type={type}
                    textAlign={textAlign}
                >
                    {children}
                </PrimaryStyle>
            )
        case "success":
            return (
                <SuccessStyle
                    className={className}
                    type={type}
                    textAlign={textAlign}
                >
                    {children}
                </SuccessStyle>
            )
        case "warning":
            return (
                <WarningStyle
                    className={className}
                    type={type}
                    textAlign={textAlign}
                >
                    {children}
                </WarningStyle>
            )
        case "error":
            return (
                <ErrorStyle
                    className={className}
                    type={type}
                    textAlign={textAlign}
                >
                    {children}
                </ErrorStyle>
            )
    }
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
Alert.propTypes = {
    type: string,
    textAlign: string
}

Alert.defaultProps = {
    type: "",
    textAlign: ""
}
