import React, { useRef, useEffect, useState } from "react"
import { bool, func, object, array, string } from "prop-types"
import Styled from "styled-components"
// Colors
import { extended, backgrounds, semantic } from "@uprise/colors"

const SelectWrapper = Styled.div`
 
`
const SelectStyles = Styled.select`
      border: 0;
      font-size: 15px;
      width: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      padding: 15px;
      padding-left: 0;
      padding-top: 10px;
      text-indent: 0px;
      color: ${(props) => (props.color ? props.color : extended.charcoal.one)};
      background-color: ${(props) =>
          props.backgroundColor ? props.backgroundColor : "transparent"};  
      padding-bottom: 8px;
      font-family: "Proxima Nova";
`

const OptionStyles = Styled.option`
    background-color: ${backgrounds.white};
`

const MessageStyles = Styled.label`
      font-size: 12px;
      color:  ${(props) => {
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

export const SelectHorizontal = ({
    id,
    type,
    name,
    label,
    options,
    isRequired,
    value,
    isFirst,
    isLast,
    color,
    backgroundColor,
    validation,
    validateControl,
    placeholder,
    ...props
}) => {
    const [focused, setFocused] = useState(false)
    let inputRef = useRef(null)

    const _onFocus = (event) => {
        setFocused(true)
    }

    const _onBlur = (event) => {
        setFocused(false)
    }

    useEffect(() => {
        inputRef.addEventListener("focus", _onFocus)
        inputRef.addEventListener("blur", _onBlur)
    }, [])

    return (
        <SelectWrapper isLast={isLast} isFirst={isFirst}>
            <SelectStyles
                ref={(elem) => (inputRef = elem)}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                color={color}
                backgroundColor={backgroundColor}
                validate-control={validateControl}
                validation={validation?.[name]}
                required={isRequired}
                focused={focused}
                value={value}
                {...props}
            >
                {options.map((option, index) => {
                    return (
                        <OptionStyles key={index} value={option.value}>
                            {option.label}
                        </OptionStyles>
                    )
                })}
            </SelectStyles>

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
        </SelectWrapper>
    )
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

SelectHorizontal.propTypes = {
    id: string.isRequired,
    onChange: func.isRequired,
    name: string.isRequired,
    validation: object,
    placeholder: string,
    type: string,
    color: string,
    backgroundColor: string,
    options: array.isRequired,
    label: string.isRequired,
    isRequired: bool,
    isLast: bool,
}

SelectHorizontal.defaultProps = {
    isRequired: false,
    isLast: false,
    validation: {},
}
