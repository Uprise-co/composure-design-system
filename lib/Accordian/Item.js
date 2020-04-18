import React, { useState } from "react";
import { bool, array, func, object, string } from "prop-types";
import Styled from "styled-components"; // Colors

import { extended, primary } from "@uprise/colors"; // Spacing

import { spacing } from "@uprise/spacing"; // Components

import { H4 } from "@uprise/headings";
import { Medium } from "@uprise/text"; // Icons

import Icons from "constants/Icons";
const AccordianItemStyle = Styled.div`
      padding-top: ${spacing.s6};
      border-bottom: 1px solid ${extended.purple.four};

      &:first-child {
            padding-top: 0;
      }
`;
const ContentWrap = Styled.div`
      max-height: ${props => props.toggle ? "100%" : "0"};
      overflow: hidden;
      transition: padding 0.3s, opacity 0.3s linear;
      opacity: ${props => props.toggle ? 1 : 0};
      padding-top: ${props => props.toggle ? spacing.s6 : "0px"};
      padding-bottom: ${props => props.toggle ? spacing.s6 : "0px"};
`;
const HeaderWrap = Styled.div`
      display: flex;
      flexDirection: row;
      justify-content: space-between;
      cursor: pointer;
      padding-bottom: ${props => props.toggle ? 0 : spacing.s6};
`;
const ToggleIcon = Styled.img`
      height: 9px;
      width: 16px;
      margin-top: ${spacing.s5};
      margin-right: ${spacing.s7};
      transform: ${props => props.toggle ? "rotate(180deg)" : "none"};
      transition: transform 0.1s linear;
`;
export const AccordianItem = ({
  className,
  children
}) => {
  const [header, setHeader] = useState(children[0]);
  const [content, setContent] = useState(children[1]);
  const [toggle, setToggle] = useState(false);

  const _handleClick = () => {
    setToggle(!toggle);
  };

  return (
    /*#__PURE__*/
    React.createElement(AccordianItemStyle, {
      className: className
    },
    /*#__PURE__*/
    React.createElement(HeaderWrap, {
      toggle: toggle,
      onClick: () => _handleClick()
    },
    /*#__PURE__*/
    React.createElement(H4, null, header),
    /*#__PURE__*/
    React.createElement(ToggleIcon, {
      toggle: toggle,
      src: Icons.chevronPurple
    })),
    /*#__PURE__*/
    React.createElement(ContentWrap, {
      toggle: toggle
    }, content))
  );
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

AccordianItem.propTypes = {
  className: string,
  children: array
};
AccordianItem.defaultProps = {};