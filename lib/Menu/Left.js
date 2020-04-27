import React, { Fragment, useState } from "react";
import { bool, func, string } from "prop-types";
import Styled from "styled-components";
import { useHistory } from "react-router-dom"; // Navigation

import left from "navigation/left"; // icons

import Icons from "assets/images/icons/svg"; // Colors

import { backgrounds, extended, primary } from "@uprise/colors";
const LeftMenuStyles = Styled.div`
	@media (max-width: 1024px) {
		width: 100%
	}
`;
const ItemTitle = Styled.span`
      font-family: ${props => props.active ? "Proxima Nova Semibold" : "Proxima Nova"};
      top: 2px;
      font-size: 13px;
      position: relative;
	width: 100%;
	
	@media (max-width: 1024px) {
		text-align: center
		display: none;
	}
`;
const MenuItemStyles = Styled.button`
      display: flex;
      border: 0;
      width: 100%;
      text-align: left;
      height: 51px;
      font-size: 15px;
      border-right: 1px solid ${extended.purple.five};
      background-color: ${props => props.active ? backgrounds.fadedPurple : backgrounds.white};
      color: ${props => props.active ? primary.purple : extended.charcoal.one};
      padding-top: 1rem;
      padding-right: 0;
      padding-left: 0;

      &:after {
            content: " ";
            display: ${props => props.active ? "inline-block" : "none"};
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
            right: 0;
            width: 6px;
            height: 21px;
            background-color: ${props => props.active ? primary.purple : extended.charcoal.one};
      }

      &:hover {
            cursor: pointer
	}
	
	@media (max-width: 1024px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		padding-bottom: 1rem;
		height: auto;
		width: 100%;

		&:after {
			content: " ";
			display: none;
		}
	}
`;
const Icon = Styled.img`
      width: 19px;
      height: 21px;
      margin-left: 40px;
	margin-right: 16px;
	
	@media (max-width: 1024px) {
		margin: 0 0 5px 0
	}
`;

const MenuItem = ({
  children,
  active,
  onClick,
  ...props
}) => {
  return (
    /*#__PURE__*/
    React.createElement(MenuItemStyles, {
      onClick: onClick,
      active: active
    }, children)
  );
};

MenuItem.propTypes = {
  active: bool.isRequired
};
MenuItem.defaultProps = {
  active: false
};
export const LeftMenu = ({
  active,
  ...props
}) => {
  const history = useHistory(); // Set active menu item

  const setActive = items => {
    let menuItems = items;
    menuItems.map(item => {
      item.active = false;
    });
    menuItems[active].active = true;
    return menuItems;
  };

  const [items, setItems] = useState(setActive(left));
  return (
    /*#__PURE__*/
    React.createElement(LeftMenuStyles, props, items.map((item, index) => {
      const itemIcon = item.active ? `${item.icon}Purple` : `${item.icon}Grey`;
      return (
        /*#__PURE__*/
        React.createElement(MenuItem, {
          key: index,
          active: item.active,
          onClick: () => history.push(`/${item.path}`)
        },
        /*#__PURE__*/
        React.createElement(Icon, {
          src: Icons[itemIcon]
        }),
        /*#__PURE__*/
        React.createElement(ItemTitle, {
          active: item.active
        }, item.title))
      );
    }))
  );
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

LeftMenu.propTypes = {
  className: string,
  color: string,
  width: string,
  textAlign: string
};
LeftMenu.defaultProps = {
  className: "",
  color: primary.charcoal,
  width: "",
  textAlign: ""
};