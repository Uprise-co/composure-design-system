import React from "react";
import { string, bool } from "prop-types";
import styled, { css } from "styled-components"; // Colors

import { backgrounds } from "uprise-uikit/colors";
const RootWrapper = styled.div``;
export const ModalRoot = ({
  children
}) => {
  return (
    /*#__PURE__*/
    React.createElement(RootWrapper, {
      id: "root-modal"
    }, children)
  );
}; // array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any

ModalRoot.propTypes = {};
ModalRoot.defaultProps = {
  onClick: () => null
};