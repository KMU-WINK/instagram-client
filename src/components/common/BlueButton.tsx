import styled from "styled-components";

interface BlueButtonProps {
	width: number;
	height: number;
	onClick?: () => void;
}

const BlueButton = styled.button<BlueButtonProps>`
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	background: #0095f6;
	color: #ffffff;
	line-height: 16px;
	font-size: 18px;
	border-radius: 5px;
	border: none;
`;

export default BlueButton;
