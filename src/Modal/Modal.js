import React, {useState, useEffect} from "react"
import {string, bool} from "prop-types"
import ReactDom from "react-dom"
import Styled, {css} from "styled-components"

// Colors
import {backgrounds} from "uprise-uikit/colors"
// Components
import {H4} from "components/ui/Headings"
// icons
import Icons from "constants/Icons"

const Content = Styled.div`
  display: block;
	z-index: 3000;
	border-radius: 10px;
	position: relative;

	${props =>
		props.shadow &&
		css`
			box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
		`}

	${props =>
		props.border &&
		css`
			border: ${props.border};
		`}
	${props =>
		props.backgroundColor &&
		css`
			background-color: ${props.backgroundColor};
		`}
	${props =>
		props.padding &&
		css`
			padding: ${props.padding};
		`}
	${props =>
		props.width &&
		css`
			width: ${props.width};
		`};
	${props =>
		props.height &&
		css`
			height: ${props.height};
		`};
	${props =>
		props.textAlign &&
		css`
			text-align: ${props.textAlign};
		`};


	@media (max-width: 475px) {
		width: 100%;
	}
`

const Background = Styled.div`
	background: rgba(47, 45, 64, 0.6);
	position: fixed;
	z-index: 1040;
	display: block;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	outline: 0;
`

const CloseWrapper = Styled.div``

const CloseButton = Styled.img`
      width: 16px;
      height: 16px;
      text-align: right;
      cursor: pointer;
      right: 20px;
      top: 20px;
      position: absolute;
`

const ModalWrapper = Styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2000;
	margin: 40px auto;
`

export const Modal = ({
	children,
	shadow,
	textAlign,
	width,
	backgroundColor,
	padding,
	isOpen,
	onOpen,
	size,
	handleClose,
	...props
}) => {
	const [showModal, setShowModal] = useState(isOpen)
	const [scrollPos, setScrollPos] = useState()

	const modalRoot = document.getElementById("root-modal")

	useEffect(() => {
		onOpen()
		window.addEventListener("keydown", _onEscKeyDown, false)
	}, [])

	useEffect(() => {
		setShowModal(isOpen)
	}, [isOpen])

	const _onEscKeyDown = e => {
		if (e.key !== "Escape") return
		setShowModal(false)
	}

	if (showModal) {
		return ReactDom.createPortal(
			<CloseWrapper onClick={() => handleClose()}>
				<ModalWrapper {...props} onClick={e => e.stopPropagation()}>
					<Content textAlign={textAlign} width={width} padding={padding} backgroundColor={backgroundColor}>
						<CloseButton src={Icons.close} onClick={() => handleClose()} />
						{children}
					</Content>
					<Background />
				</ModalWrapper>
			</CloseWrapper>,
			modalRoot
		)
	} else {
		return null
	}
}

// array, bool, func, number, object, string
// symbol, node, element, elementType
// instanceOf oneOf oneOfType shape, exact, func, any
Modal.propTypes = {
	className: string,
	padding: string,
	width: string,
	border: string,
	shadow: bool,
	backgroundColor: string
}

Modal.defaultProps = {
	onClick: () => null,
	onOpen: () => null,
	shadow: true
}
