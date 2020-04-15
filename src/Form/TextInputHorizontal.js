import React, { useRef, useEffect, useState } from "react"
import { bool, func, object, string } from "prop-types"
import Styled from "styled-components"

// Colors
import { backgrounds, extended, primary, semantic } from "@uprise/colors"

const TextInputWrapper = Styled.div`
       
`

const TextInputStyles = Styled.input`
      border: 0;
      font-size: 16px;
      width: 100%;
`

const MessageStyles = Styled.label`
      font-size: 12px;
      color:  ${props => {
          if (props.focused) {
              return `${extended.blue.one}`
          } else if (props.validation?.errors.length > 0) {
              return `${semantic.error}`
          } else {
              return `${extended.purple.five}`
          }
      }};
      display: block;
      margin-top: 8px;
      transition: font-size 0.2s;
`

export const TextInputHorizontal = ({
    id,
    type,
    name,
    isRequired,
    value,
    validation,
    validateControl,
    placeholder,
    ...props
}) => {
    const [focused, setFocused] = useState(false)
    let inputRef = useRef(null)

    const _onFocus = event => {
        setFocused(true)
    }

    const _onBlur = event => {
        setFocused(false)
    }

    useEffect(() => {
        inputRef.addEventListener("focus", _onFocus)
        inputRef.addEventListener("blur", _onBlur)
    }, [])

    return (
        <TextInputWrapper>
            <TextInputStyles
                ref={elem => (inputRef = elem)}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                validate-control={validateControl}
                validation={validation[name]}
                required={isRequired}
                focused={focused}
                value={value}
                {...props}
            />
            {validation[name]?.errors && (
                <MessageStyles
                    htmlFor={id}
                    focused={focused}
                    validation={validation[name]}
                >
                    {validation[name].errors[0]}
                </MessageStyles>
            )}
        </TextInputWrapper>
    )
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

TextInputHorizontal.propTypes = {
    id: string.isRequired,
    onChange: func.isRequired,
    name: string.isRequired,
    validation: object,
    placeholder: string,
    type: string,
    isRequired: bool
}

TextInputHorizontal.defaultProps = {
    isRequired: false,
    validation: {}
}
