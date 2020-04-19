import React, { useRef, useEffect, useState } from "react"
import { bool, func, object, string } from "prop-types"
import Styled from "styled-components"

// Colors
import { extended, backgrounds, semantic } from "@uprise/colors"

const SelectWrapper = Styled.div`
      min-height: 51px;
      margin-top: ${props => (props.isFirst ? "10px" : "0px")};
      margin-bottom: ${props => (props.isLast ? "0px" : "21px")};
`
const SelectStyles = Styled.select`
      border: 0;
      font-size: 16px;
      width: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      padding: 15px;
      padding-left: 0;
      padding-top: 10px;
      text-indent: 0px;

      border-bottom: ${props => {
          if (props.focused) {
              return `1px solid ${extended.blue.one}`
          } else if (props.validation?.errors.length > 0) {
              return `1px solid ${semantic.error}`
          } else {
              return `1px solid ${extended.purple.five}`
          }
      }};
      padding-bottom: 8px;
`

const OptionStyles = Styled.option`
    background-color: ${backgrounds.white};
`

const LabelStyles = Styled.label`
      font-size: ${props => (props.focused ? "12px" : "16px")};
      color: ${extended.charcoal.two};
      display: block;
      margin-bottom: 4px;
      transition: font-size 0.2s;
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

export const Select = ({
    id,
    type,
    name,
    label,
    options,
    isRequired,
    value,
    isFirst,
    isLast,
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
        <SelectWrapper isLast={isLast} isFirst={isFirst}>
            <LabelStyles htmlFor={id} focused={focused}>
                {label} {isRequired ? " * " : ""}
            </LabelStyles>
            <SelectStyles
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
            >
                {options.map((option, index) => {
                    return (
                        <OptionStyles key={index} value={option.value}>
                            {option.label}
                        </OptionStyles>
                    )
                })}
            </SelectStyles>
            {validation[name]?.errors && (
                <MessageStyles
                    htmlFor={id}
                    focused={focused}
                    validation={validation[name]}
                >
                    {validation[name].errors[0]}
                </MessageStyles>
            )}
        </SelectWrapper>
    )
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

Select.propTypes = {
    id: string.isRequired,
    onChange: func.isRequired,
    name: string.isRequired,
    validation: object,
    placeholder: string,
    type: string,
    options: object.isRequired,
    label: string.isRequired,
    isRequired: bool,
    isLast: bool
}

Select.defaultProps = {
    isRequired: false,
    isLast: false,
    validation: {}
}
