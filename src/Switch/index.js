import React, {useState, useEffect} from "react"
import {object, bool, string, array} from "prop-types"
import Styled from "styled-components"

// UI
import {H1, H2, H3, H4, H5, H6} from "components/ui/Headings"
import {Card} from "components/ui/Card"
import {Medium, Tiny} from "components/ui/Text"
// Colors
import {extended, primary, backgrounds} from "uprise-uikit/colors"
// icons
import Icons from "assets/images/icons/svg"
// Spacing
import {spacing} from "uprise-uikit/spacing"

const SwitchStyle = Styled.div`
      display: flex;
      flexDirection: row;
	padding: 0;
      width: auto;
      height: 30px;
      color: ${backgrounds.white};
      font-size: 12px;
`

const ToggleLeftStyle = Styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => (props.active ? backgrounds.white : primary.purple)}};
      background-color: ${props => (props.active ? primary.purple : backgrounds.white)}};
      cursor: ${props => (props.active ? "arrow" : "pointer")};
      border-radius: 0;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border: 1px solid ${primary.purple};
      width: auto;
      height: 30px;
      padding: 11px 16px;
`

const ToggleRightStyle = Styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: ${props => (props.active ? "arrow" : "pointer")};
      color: ${props => (props.active ? backgrounds.white : primary.purple)}};
      background-color: ${props => (props.active ? primary.purple : backgrounds.white)}};
      border-radius: 0;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border: 1px solid ${primary.purple};
      width: auto;
      height: 30px;
      padding: 11px 16px;
`

export const Switch = ({defaultActive, leftLabel, leftAction, rightLabel, rightAction}) => {
	const [leftActive, setLeftActive] = useState(defaultActive === "left" ? true : false)

	const handleClick = () => {
		if (leftActive) {
			setLeftActive(false)
			rightAction()
		} else {
			setLeftActive(true)
			leftAction()
		}
	}

	return (
		<SwitchStyle>
			<ToggleLeftStyle active={leftActive} onClick={!leftActive ? () => handleClick() : null}>
				{leftLabel}
			</ToggleLeftStyle>
			<ToggleRightStyle active={!leftActive} onClick={leftActive ? () => handleClick() : null}>
				{rightLabel}
			</ToggleRightStyle>
		</SwitchStyle>
	)
}

Switch.propTypes = {
	defaultActive: string
}

Switch.defaultProps = {
	defaultActive: "right"
}
