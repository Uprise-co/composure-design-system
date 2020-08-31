function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useEffect, useState } from "react";
import { bool, func, object, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { backgrounds, extended, primary, semantic } from "@uprise/colors";
const TextInputWrapper = Styled.div`
      min-height: 51px;
      margin-top: ${props => props.isFirst ? "10px" : "0px"};
      margin-bottom: ${props => props.isLast ? "0px" : "21px"};
`;
const TextInputStyles = Styled.input`
      border: 0;
      font-size: 16px;
      width: 100%;
      outline: ${props => props.outline ? "auto" : "none"}
      border-bottom: ${props => {
  var _props$validation;

  if (props.focused) {
    return `1px solid ${extended.blue.one}`;
  } else if (((_props$validation = props.validation) === null || _props$validation === void 0 ? void 0 : _props$validation.errors.length) > 0) {
    return `1px solid ${semantic.error}`;
  } else {
    return `1px solid ${extended.purple.five}`;
  }
}};
      padding-bottom: 8px;
`;
const LabelStyles = Styled.label`
      font-size: ${props => props.focused ? "12px" : "16px"};
      color: ${extended.charcoal.two};
      display: block;
      margin-bottom: 4px;
      transition: font-size 0.2s;
`;
const MessageStyles = Styled.label`
      font-size: 12px;
      color:  ${props => {
  var _props$validation2;

  if (props.focused) {
    return `${extended.blue.one}`;
  } else if (((_props$validation2 = props.validation) === null || _props$validation2 === void 0 ? void 0 : _props$validation2.errors.length) > 0) {
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
  isLast,
  outline,
  validation,
  validateControl,
  placeholder,
  onChange,
  ...props
}) => {
  var _validation$name;

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
  return /*#__PURE__*/React.createElement(TextInputWrapper, _extends({
    isLast: isLast,
    isFirst: isFirst
  }, props), /*#__PURE__*/React.createElement(LabelStyles, {
    htmlFor: id,
    focused: focused
  }, label, " ", isRequired ? " * " : ""), /*#__PURE__*/React.createElement(TextInputStyles, {
    ref: elem => inputRef = elem,
    type: type,
    outline: outline,
    placeholder: placeholder,
    name: name,
    id: id,
    "validate-control": validateControl,
    validation: validation[name],
    required: isRequired,
    focused: focused,
    value: value,
    onChange: value => onChange(value)
  }), ((_validation$name = validation[name]) === null || _validation$name === void 0 ? void 0 : _validation$name.errors) && /*#__PURE__*/React.createElement(MessageStyles, {
    htmlFor: id,
    focused: focused,
    validation: validation[name]
  }, validation[name].errors[0]));
}; // array, bool, func, number, object, string
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