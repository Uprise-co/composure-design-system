function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect, useRef } from "react";
import { bool, func, object, string } from "prop-types";
import Styled from "styled-components"; // Spacing

import { spacing } from "@uprise/spacing"; // Typography

import { text } from "@uprise/typography"; // Colors

import { extended, semantic } from "@uprise/colors";
const CheckBoxWrapper = Styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${props => props.isFirst ? "10px" : "0px"};
 `;
const CheckBoxStyles = Styled.input`
    border: 0;
    font-size: 16px;
    margin-right: ${spacing.s6};
    width: auto;
    outline: ${props => props.outline ? "auto" : "none"}
    padding-bottom: 8px;
`;
const LabelStyles = Styled.label`
    position: relative;
    font-size: ${text.t7};
    color: ${extended.charcoal.two};
    display: block;
    bottom: 3px;
`;
const TextWrap = Styled.div`
    display: flex;
    flex-direction: column;
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
  return /*#__PURE__*/React.createElement(CheckBoxWrapper, {
    isLast: isLast,
    isFirst: isFirst
  }, /*#__PURE__*/React.createElement(CheckBoxStyles, _extends({
    name: name,
    id: id,
    ref: elem => inputRef = elem,
    type: "checkbox",
    "validate-control": validateControl,
    validation: validation === null || validation === void 0 ? void 0 : validation[name],
    focused: focused,
    required: isRequired,
    value: value
  }, props)), /*#__PURE__*/React.createElement(TextWrap, null, /*#__PURE__*/React.createElement(LabelStyles, {
    focused: focused
  }, isRequired ? " * " : "", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: label
    }
  })), ((validation === null || validation === void 0 ? void 0 : (_validation$name = validation[name]) === null || _validation$name === void 0 ? void 0 : _validation$name.errors) || (validation === null || validation === void 0 ? void 0 : (_validation$name2 = validation[name]) === null || _validation$name2 === void 0 ? void 0 : _validation$name2.message)) && /*#__PURE__*/React.createElement(MessageStyles, {
    htmlFor: id,
    focused: focused,
    validation: validation === null || validation === void 0 ? void 0 : validation[name]
  }, (validation === null || validation === void 0 ? void 0 : (_validation$name3 = validation[name]) === null || _validation$name3 === void 0 ? void 0 : (_validation$name3$err = _validation$name3.errors) === null || _validation$name3$err === void 0 ? void 0 : _validation$name3$err[0]) || (validation === null || validation === void 0 ? void 0 : (_validation$name4 = validation[name]) === null || _validation$name4 === void 0 ? void 0 : _validation$name4.message))));
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

CheckBox.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  name: string.isRequired,
  validation: object,
  type: string,
  label: string.isRequired,
  isRequired: bool
};
CheckBox.defaultProps = {
  isRequired: false,
  validation: {}
};