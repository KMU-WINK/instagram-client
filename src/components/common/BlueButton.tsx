import styled from "styled-components";

interface BlueButtonProps {
	width: number;
	height: number;
}

const BlueButton = styled.button<BlueButtonProps>`
	width:  ${(props) => (props.width)}px;
	height:  ${(props) => (props.height)}px;
	background: #0095F6;
	color: #FFFFFF;
	line-height: 16px;
	font-size: 18px;
	border-radius: 5px;
	border: none;
`;

export default BlueButton;
