import React, { useRef, useEffect, useState } from "react";
import { bool, func, object, string } from "prop-types";
import Styled from "styled-components";

// Colors
import { extended, semantic } from "@uprise/colors";

const TextAreaWrapper = Styled.div`
      margin-top: ${props => (props.isFirst ? "10px" : "0px")};
      margin-bottom: ${props => (props.isLast ? "0px" : "21px")};
`;
const TextAreaStyles = Styled.textarea`
      font-size: 16px;
      width: 100%;
      min-height: ${props => (props.minHeight ? props.minHeight : "100px")};
      border: ${props => {
        if (props.focused) {
          return `1px solid ${extended.blue.one}`;
        } else if (props.validation?.errors?.length > 0 || props.validation?.message) {
          return `1px solid ${semantic.error}`;
        } else {
          return `1px solid ${extended.purple.four}`;
        }
      }};
      padding-bottom: 8px;
      padding: ${props => props.padding};
      outline: ${props => (props.outline ? "auto" : "none")};
      font-family: "Proxima Nova";
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

export const TextArea = ({
  id,
  type,
  name,
  label,
  border,
  disabled,
  minHeight,
  padding,
  isRequired,
  value,
  isFirst,
  isLast,
  outline,
  validation,
  validateControl,
  placeholder,
  onChange,
  inputRef,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  let ref = useRef(inputRef);

  const _onFocus = event => {
    setFocused(true);
  };

  const _onBlur = event => {
    setFocused(false);
  };

  useEffect(() => {
    ref.addEventListener("focus", _onFocus);
    ref.addEventListener("blur", _onBlur);
  }, []);

  return (
    <TextAreaWrapper isLast={isLast} isFirst={isFirst} {...props}>
      <LabelStyles htmlFor={id} focused={focused}>
        {label} {isRequired ? " * " : ""}
      </LabelStyles>
      <TextAreaStyles
        ref={elem => (ref = elem)}
        type={type}
        outline={outline}
        border={border}
        padding={padding}
        disabled={disabled}
        minHeight={minHeight}
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
    </TextAreaWrapper>
  );
};

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

TextArea.propTypes = {
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

TextArea.defaultProps = {
  isRequired: false,
  isLast: false,
  validation: {}
};
