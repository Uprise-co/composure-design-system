function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useEffect, useState } from "react";
import { bool, func, object, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, semantic } from "@uprise/colors";
const TextInputWrapper = Styled.div`
      min-height: 51px;
      margin-top: ${props => props.isFirst ? "10px" : "0px"};
      margin-bottom: ${props => props.isLast ? "0px" : "21px"};
`;
const TextInputStyles = Styled.input`
      font-size: 16px;
      width: 100%;
      outline: ${props => props.outline ? "auto" : "none"};
      border-bottom: ${props => {
  var _props$validation, _props$validation$err, _props$validation2;

  if (props.focused) {
    return `1px solid ${extended.blue.one}`;
  } else if (((_props$validation = props.validation) === null || _props$validation === void 0 ? void 0 : (_props$validation$err = _props$validation.errors) === null || _props$validation$err === void 0 ? void 0 : _props$validation$err.length) > 0 || (_props$validation2 = props.validation) !== null && _props$validation2 !== void 0 && _props$validation2.message) {
    return `1px solid ${semantic.error}`;
  } else {
    return `1px solid ${extended.purple.five}`;
  }
}};
      border: ${props => {
  var _props$validation3, _props$validation3$er, _props$validation4;

  if (props.focused && props.border) {
    return `1px solid ${extended.blue.one}`;
  } else if ((((_props$validation3 = props.validation) === null || _props$validation3 === void 0 ? void 0 : (_props$validation3$er = _props$validation3.errors) === null || _props$validation3$er === void 0 ? void 0 : _props$validation3$er.length) > 0 || (_props$validation4 = props.validation) !== null && _props$validation4 !== void 0 && _props$validation4.message) && props.border) {
    return `1px solid ${semantic.error}`;
  } else if (props.border) {
    return `1px solid ${extended.purple.four}`;
  } else {
    return '0px';
  }
}};
      padding-bottom: 8px;
      padding: ${props => props.padding};
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
  var _props$validation5, _props$validation5$er, _props$validation6;

  if (props.focused) {
    return `${extended.blue.one}`;
  } else if (((_props$validation5 = props.validation) === null || _props$validation5 === void 0 ? void 0 : (_props$validation5$er = _props$validation5.errors) === null || _props$validation5$er === void 0 ? void 0 : _props$validation5$er.length) > 0 || (_props$validation6 = props.validation) !== null && _props$validation6 !== void 0 && _props$validation6.message) {
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
  var _validation$name, _validation$name2, _validation$name3, _validation$name3$err, _validation$name4;

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
    padding: padding,
    border: border,
    disabled: disabled,
    placeholder: placeholder,
    name: name,
    id: id,
    "validate-control": validateControl,
    validation: validation === null || validation === void 0 ? void 0 : validation[name],
    required: isRequired,
    focused: focused,
    value: value,
    onChange: value => onChange(value)
  }), ((validation === null || validation === void 0 ? void 0 : (_validation$name = validation[name]) === null || _validation$name === void 0 ? void 0 : _validation$name.errors) || (validation === null || validation === void 0 ? void 0 : (_validation$name2 = validation[name]) === null || _validation$name2 === void 0 ? void 0 : _validation$name2.message)) && /*#__PURE__*/React.createElement(MessageStyles, {
    htmlFor: id,
    focused: focused,
    validation: validation === null || validation === void 0 ? void 0 : validation[name]
  }, (validation === null || validation === void 0 ? void 0 : (_validation$name3 = validation[name]) === null || _validation$name3 === void 0 ? void 0 : (_validation$name3$err = _validation$name3.errors) === null || _validation$name3$err === void 0 ? void 0 : _validation$name3$err[0]) || (validation === null || validation === void 0 ? void 0 : (_validation$name4 = validation[name]) === null || _validation$name4 === void 0 ? void 0 : _validation$name4.message)));
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