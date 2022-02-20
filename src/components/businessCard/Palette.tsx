import styled from "styled-components";

interface PaletteProps {
	color: string;
}

const Palette = styled.div<PaletteProps>`
	background-color: ${(props) => props.color};
	border-radius: 50%;
	width: 50px;
	height: 50px;
	border: 1px #8F8F8F solid;
	margin: 18px;
`;

export default Palette;