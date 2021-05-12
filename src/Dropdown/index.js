import React from "react";
import { useSelect } from "downshift";
import { func, object, string, array } from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
	margin-right: 10px;
`;

const LabelWrapper = Styled.label`
	font-size: 16px;
	color: rgb(151,150,160);
`;

const TriggerButtonContainer = Styled.div`
	width: 120px;
	margin: auto;
	border-bottom: 1px solid rgb(237,234,250);
`;

const TriggerButton = Styled.button`
	width: 100%;
	max-width :400px;
	padding: 6px 22px 6px 12px;
	border-radius: 10px;
	text-align: left;
	outline: none;
	border: 0;
	background-color: transparent;
	font-family: "Proxima Nova";
	font-size: 13px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.55;
	letter-spacing: normal;
	color: #000;
	position: relative;
`;

const ArrowIcon = Styled.span`
	border: solid #7d60ff;
	border-width: 0 1px 1px 0;
	padding: 3px;
	float: right;
	display: inline-block;
	transform: ${props => (props.isOpen ? "rotate(225deg)" : "rotate(45deg)")};
	transition: transform 0.1s linear;
	position: absolute;
	right: 12px;
	top: 35%;
  `;

const MenuList = Styled.ul`
	max-height: 200px;
	width: 100%;
	max-width : 400px;
	overflow-y: auto;
	margin: 0 auto;
	border-top: 0;
	outline: none;
	padding: 0;
	border-radius: 0 0 10px 10px;
	box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.5);
	background-color: #ffffff;
`;

const MenuListItem = Styled.li`
	padding: 4px 10px;
	text-align: left;
	list-style-type: none;
	border-bottom: 1px solid #edeafa;
	font-family: "Proxima Nova";
	font-size: 13px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.85;
	letter-spacing: normal;
	background-color: ${props =>
    props.selectedItem
      ? "#edeafa"
      : props.highlightedIndex
      ? "#f8f8ff"
      : "#fffff"};
  	color: ${props => (props.selectedItem ? "#7d60ff" : "#9796a0")};

	&:last-child {
		border-bottom: 0;
	}
`;

export const Dropdown = ({
  items,
  title,
  label,
  onChange,
  containerStyle,
  menuStyle,
  initialSelectedItem,
  customListItemRender
}) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    items,
    itemToString: item => {
      return item ? item.value : "";
    },
    onSelectedItemChange: e => {
      onChange(e.selectedItem);
    },
    initialSelectedItem: initialSelectedItem
  });
  return (
    <Container style={containerStyle}>
      {title ? <LabelWrapper {...getLabelProps()}>{title}</LabelWrapper> : null}
      <TriggerButtonContainer>
        <TriggerButton {...getToggleButtonProps({ type: "button" })}>
          {(selectedItem && selectedItem.label) || label}
          <ArrowIcon isOpen={isOpen} />
        </TriggerButton>
      </TriggerButtonContainer>
      <MenuList {...getMenuProps()} style={menuStyle}>
        {isOpen &&
          items.map((item, index) => {
            return (
              <MenuListItem
                highlightedIndex={highlightedIndex === index}
                selectedItem={selectedItem.value === item.value}
                key={`${item.value}${index}`}
                {...getItemProps({ item, index })}
              >
                {customListItemRender ? customListItemRender(item) : item.label}
              </MenuListItem>
            );
          })}
      </MenuList>
      <div tabIndex="0" />
    </Container>
  );
};

Dropdown.propTypes = {
  onChange: func.isRequired,
  items: array.isRequired,
  label: string.isRequired,
  containerStyle: object,
  menuStyle: object
};

Dropdown.defaultProps = {
  items: [],
  label: "",
  onChange: () => {},
  containerStyle: {},
  menuStyle: {}
};
