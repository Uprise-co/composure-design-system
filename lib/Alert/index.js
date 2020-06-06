import React from "react";
import { string } from "prop-types";
import Styled from "styled-components";
import { text } from "@uprise/typography";
import { primary, semantic, backgrounds, extended } from "@uprise/colors";
import Icons from "@uprise/icons";
const SuccessStyle = Styled.div`
      font-family: "Proxima Nova Semibold";
      padding: 12px 16px;
      border-radius: 5px;
      font-size: ${text.t7};
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: 100%;
      text-align: ${props => props.textAlign};
      color: ${primary.charcoal.one};
      background-color: ${extended.purple.five};
      flex-direction: horizontal;
`;
const PrimaryStyle = Styled.div`
      font-family: "Proxima Nova Semibold";
      padding: 12px 16px;
      border-radius: 5px;
      font-size: 15px;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: 100%;
      text-align: ${props => props.textAlign};
      color: ${extended.charcoal.one};
      background-color: ${extended.purple.five};
`;
const ErrorStyle = Styled.div`
      font-family: "Proxima Nova Semibold";
      padding: 12px 16px;
      border-radius: 5px;
      font-size: 15px;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: 100%;
      text-align: ${props => props.textAlign};
      color: ${backgrounds.white};
      background-color: ${semantic.error};
`;
const WarningStyle = Styled.div`
      font-family: "Proxima Nova Semibold";
      padding: 12px 16px;
      border-radius: 5px;
      font-size: 15px;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: 100%;
      text-align: ${props => props.textAlign};
      color: ${extended.charcoal.one};
      background-color: ${semantic.warning};
`;
const Icon = Styled.img`
    vertical-align: top;
    margin-top: 2px;
    margin-right: 12px;
    width: 20px;
    height: 20px;
`;
export const Alert = ({
  children,
  className,
  textAlign,
  type
}) => {
  switch (type) {
    case "primary":
      return (
        /*#__PURE__*/
        React.createElement(PrimaryStyle, {
          className: className,
          type: type,
          textAlign: textAlign
        }, children)
      );

    case "success":
      return (
        /*#__PURE__*/
        React.createElement(SuccessStyle, {
          className: className,
          type: type,
          textAlign: textAlign
        },
        /*#__PURE__*/
        React.createElement(Icon, {
          src: Icons.successPurple
        }), children)
      );

    case "warning":
      return (
        /*#__PURE__*/
        React.createElement(WarningStyle, {
          className: className,
          type: type,
          textAlign: textAlign
        }, children)
      );

    case "error":
      return (
        /*#__PURE__*/
        React.createElement(ErrorStyle, {
          className: className,
          type: type,
          textAlign: textAlign
        }, children)
      );
  }
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

Alert.propTypes = {
  type: string,
  textAlign: string
};
Alert.defaultProps = {
  type: "",
  textAlign: ""
};