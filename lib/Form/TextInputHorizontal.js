function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useEffect, useState } from "react";
import { bool, func, object, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, semantic } from "@uprise/colors";
const TextInputWrapper = Styled.div`
       
`;
const TextInputStyles = Styled.input`
      border: 0;
      font-size: 16px;
      width: 100%;
`;
const MessageStyles = Styled.label`
      font-size: 12px;
      color:  ${props => {
  var _props$validation, _props$validation$err, _props$validation2;

  if (props.focused) {
    return `${extended.blue.one}`;
  } else if (((_props$validation = props.validation) === null || _props$validation === void 0 ? void 0 : (_props$validation$err = _props$validation.errors) === null || _props$validation$err === void 0 ? void 0 : _props$validation$err.length) > 0 || (_props$validation2 = props.validation) !== null && _props$validation2 !== void 0 && _props$validation2.message) {
    return `${semantic.error}`;
  } else {
    return `${extended.purple.five}`;
  }
}};
      display: block;
      margin-top: 8px;
      transition: font-size 0.2s;
`;
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
  var _validation$name, _validation$name2, _validation$name3, _validation$name3$err, _validation$name4;

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
  return /*#__PURE__*/React.createElement(TextInputWrapper, null, /*#__PURE__*/React.createElement(TextInputStyles, _extends({
    ref: elem => ref = elem,
    type: type,
    placeholder: placeholder,
    name: name,
    id: id,
    "validate-control": validateControl,
    validation: validation === null || validation === void 0 ? void 0 : validation[name],
    required: isRequired,
    focused: focused,
    value: value
  }, props)), ((validation === null || validation === void 0 ? void 0 : (_validation$name = validation[name]) === null || _validation$name === void 0 ? void 0 : _validation$name.errors) || (validation === null || validation === void 0 ? void 0 : (_validation$name2 = validation[name]) === null || _validation$name2 === void 0 ? void 0 : _validation$name2.message)) && /*#__PURE__*/React.createElement(MessageStyles, {
    htmlFor: id,
    focused: focused,
    validation: validation === null || validation === void 0 ? void 0 : validation[name]
  }, (validation === null || validation === void 0 ? void 0 : (_validation$name3 = validation[name]) === null || _validation$name3 === void 0 ? void 0 : (_validation$name3$err = _validation$name3.errors) === null || _validation$name3$err === void 0 ? void 0 : _validation$name3$err[0]) || (validation === null || validation === void 0 ? void 0 : (_validation$name4 = validation[name]) === null || _validation$name4 === void 0 ? void 0 : _validation$name4.message)));
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

TextInputHorizontal.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  validation: object,
  placeholder: string,
  type: string,
  isRequired: bool
};
TextInputHorizontal.defaultProps = {
  isRequired: false,
  validation: {},
  inputRef: null
};