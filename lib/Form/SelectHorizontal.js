function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useEffect, useState } from "react";
import { bool, func, object, array, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, backgrounds, semantic } from "@uprise/colors";
const SelectWrapper = Styled.div`
 
`;
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
      color: ${props => props.color ? props.color : extended.charcoal.one};
      background-color: ${props => props.backgroundColor ? props.backgroundColor : "transparent"};  
      padding-bottom: 8px;
      font-family: "Proxima Nova";
`;
const OptionStyles = Styled.option`
    background-color: ${backgrounds.white};
`;
const MessageStyles = Styled.label`
      font-size: 12px;
      color:  ${props => {
  var _props$validation;

  if (props.focused) {
    return `${extended.blue.one}`;
  } else if (((_props$validation = props.validation) === null || _props$validation === void 0 ? void 0 : _props$validation.errors.length) > 0) {
    return `${semantic.error}`;
  } else {
    return `${extended.purple.five}`;
  }
}};
      display: block;
      margin-top: 8px;
      transition: font-size 0.2s;
`;
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
  return /*#__PURE__*/React.createElement(SelectWrapper, {
    isLast: isLast,
    isFirst: isFirst
  }, /*#__PURE__*/React.createElement(SelectStyles, _extends({
    ref: elem => inputRef = elem,
    type: type,
    placeholder: placeholder,
    name: name,
    id: id,
    color: color,
    backgroundColor: backgroundColor,
    "validate-control": validateControl,
    validation: validation[name],
    required: isRequired,
    focused: focused,
    value: value
  }, props), options.map((option, index) => {
    return /*#__PURE__*/React.createElement(OptionStyles, {
      key: index,
      value: option.value
    }, option.label);
  })), ((_validation$name = validation[name]) === null || _validation$name === void 0 ? void 0 : _validation$name.errors) && /*#__PURE__*/React.createElement(MessageStyles, {
    htmlFor: id,
    focused: focused,
    validation: validation[name]
  }, validation[name].errors[0]));
}; // array, bool, func, number, object, string
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
  isLast: bool
};
SelectHorizontal.defaultProps = {
  isRequired: false,
  isLast: false,
  validation: {}
};