import styled from "styled-components";
export const Loader = styled.div`
	position: fixed;
	width: 64px;
	height: 64px;
	top: calc(50% - 32px);
	left: calc(50% - 32px);

	margin: 0 auto;
	border: 4px solid #d81b58;
	border-radius: 50%;
	animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: #d81b58 transparent transparent transparent;

	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;