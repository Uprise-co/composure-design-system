function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useEffect, useState } from "react";
import { bool, func, object, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, semantic } from "@uprise/colors";
const TextAreaWrapper = Styled.div`
      margin-top: ${props => props.isFirst ? "10px" : "0px"};
      margin-bottom: ${props => props.isLast ? "0px" : "21px"};
`;
const TextAreaStyles = Styled.textarea`
      font-size: 16px;
      width: 100%;
      min-height: ${props => props.minHeight ? props.minHeight : "100px"};
      border: ${props => {
  var _props$validation, _props$validation$err, _props$validation2;

  if (props.focused) {
    return `1px solid ${extended.blue.one}`;
  } else if (((_props$validation = props.validation) === null || _props$validation === void 0 ? void 0 : (_props$validation$err = _props$validation.errors) === null || _props$validation$err === void 0 ? void 0 : _props$validation$err.length) > 0 || (_props$validation2 = props.validation) !== null && _props$validation2 !== void 0 && _props$validation2.message) {
    return `1px solid ${semantic.error}`;
  } else {
    return `1px solid ${extended.purple.four}`;
  }
}};
      padding-bottom: 8px;
      padding: ${props => props.padding};
      outline: ${props => props.outline ? "auto" : "none"};
      font-family: "Proxima Nova";
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
  var _props$validation3, _props$validation3$er, _props$validation4;

  if (props.focused) {
    return `${extended.blue.one}`;
  } else if (((_props$validation3 = props.validation) === null || _props$validation3 === void 0 ? void 0 : (_props$validation3$er = _props$validation3.errors) === null || _props$validation3$er === void 0 ? void 0 : _props$validation3$er.length) > 0 || (_props$validation4 = props.validation) !== null && _props$validation4 !== void 0 && _props$validation4.message) {
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
  return /*#__PURE__*/React.createElement(TextAreaWrapper, _extends({
    isLast: isLast,
    isFirst: isFirst
  }, props), /*#__PURE__*/React.createElement(LabelStyles, {
    htmlFor: id,
    focused: focused
  }, label, " ", isRequired ? " * " : ""), /*#__PURE__*/React.createElement(TextAreaStyles, {
    ref: elem => ref = elem,
    type: type,
    outline: outline,
    border: border,
    padding: padding,
    disabled: disabled,
    minHeight: minHeight,
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