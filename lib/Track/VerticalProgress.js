import React, { Fragment } from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { backgrounds, extended, primary } from "@uprise/colors";
const ProgressStyles = Styled.div`
`;
const ItemTitle = Styled.span`
      font-family: ${props => props.active ? "Proxima Nova Semibold" : "Proxima Nova"};
      top: ${props => props.active ? "2px" : "0px"};
      position: relative;
      width: 100%;

      &:after {
            content: " ";
            display: ${props => props.active ? "inline-block" : "none"};
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
            position: absolute;
            right: 0;
            width: 4px;
            height: 21px;
            background-color: ${props => props.active ? primary.purple : extended.charcoal.one};
      }
`;
const ProgressItemStyles = Styled.section`
      display: flex;
      height: 51px;
      font-size: 15px;
      border-right: 1px solid ${extended.purple.five};
      background-color: ${props => props.active ? backgrounds.fadedPurple : backgrounds.white};
      color: ${props => props.active ? primary.purple : extended.charcoal.one};
      padding-top: 1rem;
`;
const OvalActiveStyles = Styled.div`
      width: 22px;
      height: 17px;
      border: solid 3px ${primary.purple};
      background-color: ${backgrounds.fadedPurple};
      border-radius: 50%;
      display: inline-block;
      margin-right: 18px;
      margin-left: 46px;
      top: 3px;
      position: relative;


      &:after {
            content: " ";
            width: 1px;
            height: 43px;
            display: ${props => props.last ? "none" : "block"};
            background-color: ${extended.charcoal.four};
            margin-top: 14px;
            margin-left: 5px;
      }
`;
const OvalStyles = Styled.div`
      width: 14px;
      height: 9px;
      background-color: ${extended.charcoal.three};
      border-radius: 50%;
      display: inline-block;
      margin-right: 18px;
      margin-left: 50px;
      top: 4px;
      position: relative;

      &:after {
            content: " ";
            width: 1px;
            height: 43px;
            display: ${props => props.last ? "none" : "block"};
            background-color: ${extended.charcoal.four};
            margin-top: 10px;
            margin-left: 4px;
      }
`;

const ProgressItem = ({
  children,
  active,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(ProgressItemStyles, {
    active: active
  }, children);
};

ProgressItem.propTypes = {
  active: bool.isRequired
};
ProgressItem.defaultProps = {
  active: false
};
export const VerticalProgress = ({
  items,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(ProgressStyles, props, items.map((item, index) => {
    return /*#__PURE__*/React.createElement(ProgressItem, {
      key: index,
      active: item.active
    }, /*#__PURE__*/React.createElement(Fragment, null, item.active && /*#__PURE__*/React.createElement(OvalActiveStyles, {
      last: index === items.length - 1
    }), !item.active && /*#__PURE__*/React.createElement(OvalStyles, {
      last: index === items.length - 1
    }), /*#__PURE__*/React.createElement(ItemTitle, {
      active: item.active
    }, item.title)));
  }));
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

VerticalProgress.propTypes = {
  className: string,
  color: string,
  width: string,
  textAlign: string
};
VerticalProgress.defaultProps = {
  className: "",
  color: primary.charcoal,
  width: "",
  textAlign: ""
};