import React, { useState } from "react";
import { string } from "prop-types";
import Styled from "styled-components"; // Colors

import { primary, backgrounds } from "@uprise/colors";
const SwitchStyle = Styled.div`
      display: flex;
      flexDirection: row;
	padding: 0;
      width: auto;
      height: 30px;
      color: ${backgrounds.white};
      font-size: 12px;
`;
const ToggleLeftStyle = Styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.active ? backgrounds.white : primary.purple}};
      background-color: ${props => props.active ? primary.purple : backgrounds.white}};
      cursor: ${props => props.active ? "arrow" : "pointer"};
      border-radius: 0;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border: 1px solid ${primary.purple};
      width: auto;
      height: 30px;
      padding: 11px 16px;
`;
const ToggleRightStyle = Styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: ${props => props.active ? "arrow" : "pointer"};
      color: ${props => props.active ? backgrounds.white : primary.purple}};
      background-color: ${props => props.active ? primary.purple : backgrounds.white}};
      border-radius: 0;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border: 1px solid ${primary.purple};
      width: auto;
      height: 30px;
      padding: 11px 16px;
`;
export const Switch = ({
  defaultActive,
  leftLabel,
  leftAction,
  rightLabel,
  rightAction
}) => {
  const [leftActive, setLeftActive] = useState(defaultActive === "left" ? true : false);

  const handleClick = () => {
    if (leftActive) {
      setLeftActive(false);
      rightAction();
    } else {
      setLeftActive(true);
      leftAction();
    }
  };

  return (
    /*#__PURE__*/
    React.createElement(SwitchStyle, null,
    /*#__PURE__*/
    React.createElement(ToggleLeftStyle, {
      active: leftActive,
      onClick: !leftActive ? () => handleClick() : null
    }, leftLabel),
    /*#__PURE__*/
    React.createElement(ToggleRightStyle, {
      active: !leftActive,
      onClick: leftActive ? () => handleClick() : null
    }, rightLabel))
  );
};
Switch.propTypes = {
  defaultActive: string
};
Switch.defaultProps = {
  defaultActive: "right"
};