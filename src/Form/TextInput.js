import React, { useRef, useEffect, useState } from "react";
import { bool, func, object, string } from "prop-types";
import Styled from "styled-components";

// Colors
import { extended, semantic } from "@uprise/colors";

const TextInputWrapper = Styled.div`
      min-height: 51px;
      margin-top: ${props => (props.isFirst ? "10px" : "0px")};
      margin-bottom: ${props => (props.isLast ? "0px" : "21px")};
`;
const TextInputStyles = Styled.input`
      font-size: 16px;
      width: 100%;
      outline: ${props => (props.outline ? "auto" : "none")};
      border-bottom: ${props => {
        if (props.focused) {
          return `1px solid ${extended.blue.one}`;
        } else if (props.validation?.errors?.length > 0 || props.validation?.message) {
          return `1px solid ${semantic.error}`;
        } else {
          return `1px solid ${extended.purple.five}`;
        }
      }};
      border: ${props => {
        if (props.focused && props.border) {
          return `1px solid ${extended.blue.one}`;
        } else if ((props.validation?.errors?.length > 0 || props.validation?.message)&& props.border) {
          return `1px solid ${semantic.error}`;
        } else if (props.border) {
          return `1px solid ${extended.purple.four}`;
        } else {
          return '0px'
        }
      }};
      padding-bottom: 8px;
      padding: ${props => props.padding};
`;

const LabelStyles = Styled.label`
      font-size: ${props => (props.focused ? "12px" : "16px")};
      color: ${extended.charcoal.two};
      display: block;
      margin-bottom: 4px;
      transition: font-size 0.2s;
`;

const MessageStyles = Styled.label`
      font-size: 12px;
      color:  ${props => {
        if (props.focused) {
          return `${extended.blue.one}`;
        } else if (props.validation?.errors?.length > 0 || props.validation?.message) {
          return `${semantic.error}`;
        } else {
          return `${extended.purple.five}`;
        }
      }};
      display: block;
      margin-top: 8px;
      transition: font-size 0.2s;
`;

export const TextInput = ({
  id,
  type,
  name,
  label,
  isRequired,
  value,
  isFirst,
  padding,
  border,
  disabled,
  isLast,
  outline,
  validation,
  validateControl,
  placeholder,
  onChange,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  let inputRef = useRef(null);

  const _onFocus = event => {
    setFocused(true);
  };

  const _onBlur = event => {
    setFocused(false);
  };

  useEffect(() => {
    inputRef.addEventListener("focus", _onFocus);
    inputRef.addEventListener("blur", _onBlur);
  }, []);

  return (
    <TextInputWrapper isLast={isLast} isFirst={isFirst} {...props}>
      <LabelStyles htmlFor={id} focused={focused}>
        {label} {isRequired ? " * " : ""}
      </LabelStyles>
      <TextInputStyles
        ref={elem => (inputRef = elem)}
        type={type}
        outline={outline}
        padding={padding}
        border={border}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        id={id}
        validate-control={validateControl}
        validation={validation?.[name]}
        required={isRequired}
        focused={focused}
        value={value}
        onChange={value => onChange(value)}
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
  );
};

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

TextInput.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  name: string.isRequired,
  validation: object,
  placeholder: string,
  type: string,
  label: string.isRequired,
  isRequired: bool,
  isLast: bool
};

TextInput.defaultProps = {
  isRequired: false,
  isLast: false,
  validation: {}
};
