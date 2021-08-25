import React, { useRef, useEffect, useState } from "react"
import { bool, func, object, string } from "prop-types"
import Styled from "styled-components"

// Colors
import { extended, semantic } from "@uprise/colors"

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
            } else if (props.validation?.errors?.length > 0 || props.validation?.message) {
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
    inputRef,
    ...props
}) => {
    const [focused, setFocused] = useState(false)
    let ref = useRef(inputRef)

    const _onFocus = event => {
        setFocused(true)
    }

    const _onBlur = event => {
        setFocused(false)
    }

    useEffect(() => {
        ref.addEventListener("focus", _onFocus)
        ref.addEventListener("blur", _onBlur)
    }, [])

    return (
        <TextInputWrapper>
            <TextInputStyles
                ref={elem => (ref = elem)}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                validate-control={validateControl}
                validation={validation?.[name]}
                required={isRequired}
                focused={focused}
                value={value}
                {...props}
            />

        {/* 2 formats of error messages
            1. validate.js - validation?.[name]?.errors?.[0]
            2. react-use-form - validation?.[name]?.message
        */}

        {(validation?.[name]?.errors || validation?.[name]?.message) && (
            <MessageStyles
            htmlFor={id}
            focused={focused}
            validation={validation?.[name]}
            >
                {validation?.[name]?.errors?.[0] || validation?.[name]?.message}            
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
    name: string.isRequired,
    validation: object,
    placeholder: string,
    type: string,
    isRequired: bool
}

TextInputHorizontal.defaultProps = {
    isRequired: false,
    validation: {},
    inputRef: null
}
