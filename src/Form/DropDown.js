import React from "react";
import { useSelect } from "downshift";
import { bool, func, object, string, array } from "prop-types";
import Styled from "styled-components";

const Container = Styled.div``;

const TriggerButton = Styled.button`
  width: 120px;
  padding: 6px 22px 6px 12px;
  border-radius: 10px;
  text-align: left;
  border: 0;
  background-color: #f6f4fc;
  font-family: "Proxima Nova";
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  color: #7d60ff;
  position: relative;
`;

const ArrowIcon = Styled.span`
border: solid #7d60ff;
  border-width: 0 1px 1px 0;
  padding: 3px;
  float: right;
  display: inline-block;
  transform: rotate(45deg);
  position: absolute;
  right: 12px;
  top: 35%;
  `;

const MenuList = Styled.ul`
  max-height: 200px;
  width: 120px;
  overflow-y: "auto";
  width: "150px";
  margin: 0 auto;
  border-top: 0;
  padding: 0 0 0 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.5);
  background-color: #ffffff;
`;

const MenuListItem = Styled.li`
  padding: 4px;
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
  color: ${props => (props.selectedItem ? "#7d60ff" : "#9796a0")};

  &:last-child {
    border-bottom: 0;
  }
`;

const DropDown = ({
  items,
  label,
  onChange,
  containerStyle,
  menuStyle,
  initialSelectedItem
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
    onSelectedItemChange: e => {
      onChange(e.selectedItem);
    },
    initialSelectedItem: initialSelectedItem
  });
  return (
    <Container style={containerStyle}>
      <TriggerButton {...getToggleButtonProps()}>
        {(selectedItem && selectedItem.label) || label}
        <ArrowIcon />
      </TriggerButton>
      <MenuList {...getMenuProps()} style={menuStyle}>
        {isOpen &&
          items.map((item, index) => {
            return (
              <MenuListItem
                selectedItem={highlightedIndex === index}
                key={`${item}${index}`}
                {...getItemProps({ item: item.value, index })}
              >
                {item.label}
              </MenuListItem>
            );
          })}
      </MenuList>
    </Container>
  );
};

DropDown.propTypes = {
  onChange: func.isRequired,
  items: array.isRequired,
  label: string.isRequired,
  containerStyle: object,
  menuStyle: object
};

DropDown.defaultProps = {
  items: [],
  label: "",
  onChange: () => {},
  containerStyle: {},
  menuStyle: {}
};

export default DropDown;
