import React, { useState, useEffect, useRef } from "react"
import { bool, func, object, string } from "prop-types"
import Styled from "styled-components"
// Spacing
import { spacing } from "@uprise/spacing"
// Colors
import { extended, semantic } from "@uprise/colors"

const CheckBoxWrapper = Styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${(props) => (props.isFirst ? "10px" : "0px")};
 `
const CheckBoxStyles = Styled.input`
    border: 0;
    font-size: 16px;
    margin-right: ${spacing.s6};
    width: auto;
    outline: ${(props) => (props.outline ? "auto" : "none")}
    border-bottom: ${(props) => {
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

const LabelStyles = Styled.label`
    position: relative;
    font-size: ${(props) => (props.focused ? "12px" : "16px")};
    color: ${extended.charcoal.two};
    display: block;
    bottom: 3px;
    transition: font-size 0.2s;
`

const TextWrap = Styled.div`
    display: flex;
    flex-direction: column;
`

const MessageStyles = Styled.label`
    font-size: 12px;
    color:  ${(props) => {
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

export const CheckBox = ({
    id,
    name,
    label,
    isRequired,
    value,
    isLast,
    isFirst,
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
        <CheckBoxWrapper isLast={isLast} isFirst={isFirst}>
            <CheckBoxStyles
                name={name}
                id={id}
                ref={(elem) => (inputRef = elem)}
                type="checkbox"
                validate-control={validateControl}
                validation={validation[name]}
                required={isRequired}
                value={value}
                {...props}
            />
            <TextWrap>
                <LabelStyles>
                    {isRequired ? " * " : ""}
                    {label}
                </LabelStyles>
                {validation[name]?.errors && (
                    <MessageStyles
                        htmlFor={id}
                        focused={focused}
                        validation={validation[name]}
                    >
                        {validation[name].errors[0]}
                    </MessageStyles>
                )}
            </TextWrap>
        </CheckBoxWrapper>
    )
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

CheckBox.propTypes = {
    id: string.isRequired,
    onChange: func.isRequired,
    name: string.isRequired,
    validation: object,
    type: string,
    label: string.isRequired,
    isRequired: bool,
}

CheckBox.defaultProps = {
    isRequired: false,
    validation: {},
}
