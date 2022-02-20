import styled from "styled-components";

interface ContainerProps {
	topMargin : number;
	height: number;
}

const Container = styled.div<ContainerProps>`
	margin-top: ${(props) => (props.topMargin || 0)}px;
	height: ${(props) => (props.height)}px;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export default Container;
